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

{% assign ordered_videos = site.data.videos.entries | sort: 'added_at' | reverse %}
{% assign listed_ids = '' | split: ',' %}
{% assign category_links = '' %}
{% capture category_sections %}
{% for category in page.video_categories %}
{% assign category_path = category[0] | append: '/' %}
{% capture cards %}
{% for video in ordered_videos %}
{% assign in_category = false %}
{% for topic in video.topics %}
  {% assign topic_prefix = topic.path | slice: 0, category_path.size %}
  {% if topic_prefix == category_path %}
    {% assign in_category = true %}
    {% break %}
  {% endif %}
{% endfor %}
{% unless in_category %}{% continue %}{% endunless %}
{% assign anchor = 'video-' | append: video.id %}
{% if listed_ids contains video.id %}
  {% assign anchor = category[0] | append: '-' | append: anchor %}
{% else %}
  {% assign listed_ids = listed_ids | push: video.id %}
{% endif %}
{% include video-card.html video=video anchor=anchor %}
<p><strong>Related topics:</strong>
{% for topic in video.topics %}
  {% assign topic_page = site.pages | where: 'path', topic.path | first %}
  <a href="{{ topic_page.url | relative_url }}#youtube-videos">{{ topic_page.title | escape }}</a>{% unless forloop.last %} · {% endunless %}
{% endfor %}
</p>
{% endfor %}
{% endcapture %}
{% assign cards = cards | strip %}
{% if cards != '' %}
{% capture category_link %}<li><a href="#{{ category[0] }}">{{ category[1] | escape }}</a></li>{% endcapture %}
{% assign category_links = category_links | append: category_link %}
<section aria-labelledby="{{ category[0] }}">
<h2 id="{{ category[0] }}">{{ category[1] | escape }}</h2>
{{ cards }}
</section>
{% endif %}
{% endfor %}
{% endcapture %}

{% if category_links != '' %}
<nav aria-label="Video categories">
<ul>{{ category_links }}</ul>
</nav>

{{ category_sections | strip }}
{% endif %}
