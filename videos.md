---
title: Videos
nav_order: 6
permalink: /videos/
video_categories:
  context-engineering: Context Engineering
  agent-patterns: Agent Architecture Patterns
  frameworks: SDD Frameworks
  verification: Verification
  engineers: Engineers
  companies: Companies
---

# YouTube videos

Selected talks, interviews and demos for the Good Vibes topics. Each entry explains where it helps and distinguishes a demonstration or a speaker's advice from measured evidence. Older videos remain useful background; tool interfaces and commands may have changed.

[Subscribe to the video RSS feed]({{ '/videos.xml' | relative_url }}){: .btn .btn-primary }

The daily research refresh looks for relevant new videos. This feed announces **new additions to this collection**, including older material found recently. Publication dates refer to the original video; added dates refer to Good Vibes. Entries are selected from publisher descriptions or linked primary sources unless explicitly stated otherwise; they are not full transcript reviews.

<div class="gv-video-controls" id="gv-video-controls" hidden>
  <label>Search videos<input id="gv-video-search" type="search" placeholder="Title, speaker, topic or reason…"></label>
  <label>Category<select id="gv-video-category"><option value="">All categories</option>{% for category in page.video_categories %}<option value="{{ category[0] }}">{{ category[1] | escape }}</option>{% endfor %}</select></label>
  <label>Topic<select id="gv-video-topic"><option value="">All topics</option></select></label>
  <label>Channel<select id="gv-video-channel"><option value="">All channels</option></select></label>
  <label>Video type<select id="gv-video-kind"><option value="">All types</option></select></label>
  <label>Sort by<select id="gv-video-sort">
    <option value="added-desc">Recently added</option><option value="added-asc">Oldest additions</option>
    <option value="published-desc">Newest published</option><option value="published-asc">Oldest published</option>
    <option value="title-asc">Title A–Z</option><option value="title-desc">Title Z–A</option>
    <option value="channel-asc">Channel A–Z</option><option value="kind-asc">Video type A–Z</option>
  </select></label>
  <button type="button" id="gv-video-reset">Reset</button>
</div>
<p id="gv-video-count" role="status" aria-live="polite">{{ site.data.videos.entries | size }} videos</p>
<noscript>All videos are listed below. Enable JavaScript to search, filter and sort.</noscript>
<div class="gv-video-table-wrap" role="region" aria-label="Video collection" tabindex="0">
<table class="gv-video-table">
  <caption>Selected videos and why they are included. Publication dates are the original upload dates.</caption>
  <thead><tr><th scope="col">Video</th><th scope="col">Channel / type</th><th scope="col">Why included</th><th scope="col">Topics</th><th scope="col">Published</th><th scope="col">Added</th></tr></thead>
  <tbody id="gv-video-rows">
  {% assign ordered_videos = site.data.videos.entries | sort: 'added_at' | reverse %}
  {% for video in ordered_videos %}
    <tr id="video-{{ video.id | escape }}" data-title="{{ video.title | escape }}" data-channel="{{ video.channel | escape }}" data-kind="{{ video.kind | escape }}" data-published="{{ video.published_on | escape }}" data-added="{{ video.added_at | escape }}">
      <td><a href="https://www.youtube.com/watch?v={{ video.id | escape }}">{{ video.title | escape }}</a><p>{{ video.summary | escape }}</p>{% if video.duration %}<small>{{ video.duration | escape }}</small>{% endif %}<details><summary>Evidence and source</summary><p>{{ video.qualification | escape }}</p><a href="{{ video.source_url | escape }}">Source and metadata</a> · Checked {{ video.checked_on | escape }}</details></td>
      <td>{{ video.channel | escape }}<br><small>{{ video.kind | escape }}</small></td>
      <td>{{ video.topics.first.note | escape }}</td>
      <td>{% for topic in video.topics %}{% assign topic_page = site.pages | where: 'path', topic.path | first %}{% assign category = topic.path | split: '/' | first %}<a data-topic="{{ topic.path | escape }}" data-category="{{ category | escape }}" href="{{ topic_page.url | relative_url }}#youtube-videos" title="{{ topic.note | escape }}">{{ topic_page.title | escape }}</a>{% unless forloop.last %}<br>{% endunless %}{% endfor %}</td>
      <td>{{ video.published_on | default: 'Unknown' | escape }}</td>
      <td>{{ video.added_at | date: '%Y-%m-%d' }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
</div>
<p id="gv-video-empty" hidden>No videos match. Try another search or reset the filters.</p>
<script src="{{ '/assets/js/videos.js' | relative_url }}" defer></script>
