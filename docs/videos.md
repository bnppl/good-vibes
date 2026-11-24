# YouTube collection and video RSS feed

The public collection is `/videos/`; subscribe at https://bnppl.github.io/good-vibes/videos.xml. This is separate from the important-update feed at `/feed.xml`.

`_data/videos.json` is the single source for the collection, topic subsections and video RSS. Jekyll builds all three without runtime requests, API keys or plugins. Videos open on YouTube; visiting a topic does not load a third-party player or thumbnail.

The `topic` layout wraps the theme's `default` layout. It adds a `YouTube videos` subsection to every Markdown page under the four guide directories and to every engineer/company profile index. Explicit specialist layouts, including slides and comparison tools, retain their existing behaviour. New chapters and profiles receive a subsection automatically. A topic with no suitable selection says so explicitly. Shared catalogue changes do not alter chapter reading progress or claim that the chapter prose changed.

The collection presents one table row per video, with a short “Why included” reason from its first topic relevance note. Search covers titles, metadata, summaries and all topic notes. Category, topic, channel and type filters combine; sorting supports addition date, publication date, title, channel and type. Unknown publication dates sort last in either direction. Controls run locally in `assets/js/videos.js`; without JavaScript the full table and links remain available. New catalogue entries automatically appear in the table and filter options.

## During every daily refresh and `/study update`

1. Read the existing catalogue and discover current topic paths dynamically. Search for YouTube videos relevant to the guide, tools, engineer profiles and company cases. Prioritise original authors, official channels and conference recordings. Check trusted channels and search results for uploads since the last successful refresh, with an overlapping lookback to catch indexing delays. Older high-value material can fill coverage gaps; do not describe it as newly published.
2. Verify the video ID, title, publisher, topic fit and publication date against the publisher's video description or linked primary source. Use search metadata when direct access is blocked and state that limitation in the report. Never fabricate dates, duration, quotations or transcript insights. Set unknown `published_on` or `duration` to `null`. Do not imply you watched a video when you only read its description.
3. Select useful talks, interviews and demos. Skip unrelated announcements, generic hype, duplicate uploads and videos with no concrete connection to a topic. A refresh may add zero videos. Do not fill every gap with loosely related recommendations.
4. Add one entry per canonical YouTube video ID, mapping it to any directly relevant topics. A topic mapping has an exact repository `path` and a short `note` explaining its relevance. For comparison or background material, explicitly say when it is not a demonstration of the named framework. Engineer/company mappings must concern that person or organisation; product demos do not establish internal company adoption. Keep evidence qualifications visible.
5. Keep `added_at` stable forever: it is the actual UTC time the video first enters Good Vibes. `published_on` is the original upload date (ISO date or null), `checked_on` is the date of the metadata check, and `source_url` identifies that primary evidence. `kind`, `summary` and `qualification` distinguish empirical findings, first-person experience, demos, advice and background. Full transcript review is optional and must be stated explicitly if used.
6. Preserve existing entries, IDs and addition times when adding topic associations or correcting metadata. Update the catalogue's `updated_at` only for an actual catalogue change. Do not advance it on no-change runs or merely to record that a search ran. The RSS derives permanent GUIDs from YouTube IDs, uses `added_at` for `pubDate`, sorts newest additions first, and contains at most 100 videos. The complete archive remains on `/videos/`. Mapping one video to several topics must never create multiple feed entries.
7. Run the checks below, commit the catalogue and any necessary topic edits together, then use the normal publication workflow. Include the new video titles, related topic links and video feed URL in the refresh report. Report coverage gaps and blocked verification honestly. Update the important-update RSS only when warranted by `docs/rss-feed.md`; do not mirror every video into it.

## Validate

```sh
python3 docs/videos/validate.py
bundle exec jekyll build --baseurl /good-vibes
python3 docs/videos/validate.py --site _site --baseurl /good-vibes
```

The first command checks catalogue uniqueness, metadata, timestamps and topic paths. The built-site check parses both feeds, verifies stable video GUIDs/dates and matching entries, checks every topic subsection and its relevant videos, resolves collection links, and confirms feed autodiscovery. GitHub Pages runs these checks before deployment.
