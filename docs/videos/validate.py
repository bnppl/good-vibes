"""Check video metadata and the actual built topic sections and RSS documents."""
import argparse
from datetime import date, datetime, timezone
from email.utils import parsedate_to_datetime
from html.parser import HTMLParser
import json
from pathlib import Path
import re
from urllib.parse import urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[2]
GUIDE_DIRS = ('context-engineering', 'frameworks', 'agent-patterns', 'verification')


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids, self.links, self.feeds = [], [], []
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'a' and 'href' in attrs:
            self.links.append(attrs['href'])
        if tag == 'link' and attrs.get('type') == 'application/rss+xml':
            self.feeds.append(attrs.get('href'))


def utc(value):
    assert value.endswith('Z'), f'Expected UTC timestamp: {value}'
    return datetime.fromisoformat(value.replace('Z', '+00:00'))


def rss(path):
    root = ET.parse(path).getroot()
    assert root.tag == 'rss' and root.attrib['version'] == '2.0'
    channel = root.find('channel')
    for field in ('title', 'description', 'link', 'lastBuildDate'):
        assert channel.findtext(field), (path, field)
    assert urlsplit(channel.findtext('link')).scheme == 'https'
    assert parsedate_to_datetime(channel.findtext('lastBuildDate')).tzinfo
    items = channel.findall('item')
    guids, dates = [], []
    for item in items:
        for field in ('title', 'description', 'link', 'guid', 'pubDate'):
            assert item.findtext(field), (path, field)
        assert urlsplit(item.findtext('link')).scheme == 'https'
        assert item.find('guid').attrib.get('isPermaLink') == 'false'
        guids.append(item.findtext('guid'))
        stamp = parsedate_to_datetime(item.findtext('pubDate'))
        assert stamp.tzinfo
        dates.append(stamp)
    assert len(guids) == len(set(guids)), f'Duplicate feed GUID in {path}'
    assert dates == sorted(dates, reverse=True), f'Feed out of order: {path}'
    assert len(items) <= 100
    return channel, items


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--site', type=Path)
    parser.add_argument('--baseurl', default='/good-vibes')
    args = parser.parse_args()
    catalogue = json.loads((ROOT / '_data/videos.json').read_text())
    entries = catalogue['entries']
    updated = utc(catalogue['updated_at'])
    topics = {str(p.relative_to(ROOT)) for folder in GUIDE_DIRS
              for p in (ROOT / folder).rglob('*.md')}
    for folder in ('engineers', 'companies'):
        for p in (ROOT / folder).glob('*/index.md'):
            if re.search(r'^(engineer|company)_profile: true$', p.read_text(), re.M):
                topics.add(str(p.relative_to(ROOT)))
    ids = set()
    for entry in entries:
        video_id = entry['id']
        assert re.fullmatch(r'[A-Za-z0-9_-]{11}', video_id), video_id
        assert video_id not in ids, f'Duplicate YouTube ID: {video_id}'
        ids.add(video_id)
        for field in ('title', 'channel', 'kind', 'summary', 'qualification'):
            assert isinstance(entry[field], str) and entry[field].strip(), (video_id, field)
        assert urlsplit(entry['source_url']).scheme == 'https'
        added = utc(entry['added_at'])
        checked = date.fromisoformat(entry['checked_on'])
        assert added <= updated <= datetime.now(timezone.utc)
        assert added.date() <= checked <= date.today()
        if entry['published_on']:
            assert date.fromisoformat(entry['published_on']) <= added.date()
        if entry['duration'] is not None:
            assert isinstance(entry['duration'], str) and entry['duration'].strip()
        assert entry['topics'], f'No related topics: {video_id}'
        paths = [topic['path'] for topic in entry['topics']]
        assert len(paths) == len(set(paths)), f'Duplicate topic mapping: {video_id}'
        for topic in entry['topics']:
            assert topic['path'] in topics, (video_id, topic['path'])
            assert isinstance(topic['note'], str) and topic['note'].strip()

    if args.site:
        site = args.site.resolve()
        base = args.baseurl.rstrip('/')
        channel, items = rss(site / 'videos.xml')
        rss(site / 'feed.xml')
        assert parsedate_to_datetime(channel.findtext('lastBuildDate')) == updated
        expected = sorted(entries, key=lambda entry: entry['added_at'], reverse=True)[:100]
        by_id = {entry['id']: entry for entry in expected}
        assert len(items) == len(expected)
        actual_ids = set()
        for item in items:
            video_id = item.findtext('guid').removeprefix('good-vibes:youtube:')
            assert video_id in by_id
            actual_ids.add(video_id)
            entry = by_id[video_id]
            assert item.findtext('title') == entry['title']
            assert item.findtext('link') == f'https://www.youtube.com/watch?v={video_id}'
            assert parsedate_to_datetime(item.findtext('pubDate')) == utc(entry['added_at'])
        assert actual_ids == set(by_id)
        atom = channel.find('{http://www.w3.org/2005/Atom}link')
        assert atom.attrib['href'] == 'https://bnppl.github.io/good-vibes/videos.xml'
        archive = Page(site / 'videos/index.html')
        assert {x.removeprefix('video-') for x in archive.ids if x.startswith('video-')} == ids
        for href in archive.links:
            parts = urlsplit(href)
            if parts.scheme or not parts.path.startswith(base + '/'):
                continue
            relative = parts.path[len(base):].lstrip('/')
            target = site / relative
            if target.is_dir():
                target /= 'index.html'
            assert target.is_file(), href
            if parts.fragment:
                assert parts.fragment in Page(target).ids, href
        for topic in sorted(topics):
            path = site / Path(topic).with_suffix('.html')
            page = Page(path)
            assert page.ids.count('youtube-videos') == 1, topic
            wanted = {entry['id'] for entry in entries
                      if any(t['path'] == topic for t in entry['topics'])}
            actual = {x.removeprefix('video-') for x in page.ids if x.startswith('video-')}
            assert actual == wanted, (topic, actual, wanted)
            for video_id in wanted:
                assert f'https://www.youtube.com/watch?v={video_id}' in page.links
            assert base + '/videos.xml' in page.links
            assert base + '/videos.xml' in page.feeds
            assert base + '/feed.xml' in page.feeds
            if not wanted:
                assert 'No suitable YouTube video has been selected' in path.read_text(), topic
        print(f'PASS: both RSS feeds, archive links and {len(topics)} topic subsections')
    covered = {t['path'] for entry in entries for t in entry['topics']}
    print(f'PASS: {len(entries)} unique videos; {len(covered)}/{len(topics)} topics have selections')


if __name__ == '__main__':
    main()
