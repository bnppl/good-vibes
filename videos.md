---
title: Videos
nav_order: 6
permalink: /videos/
---

# YouTube videos

Selected talks, interviews and demos for the Good Vibes topics. Each entry explains where it helps and distinguishes a demonstration or a speaker's advice from measured evidence. Older videos remain useful background; tool interfaces and commands may have changed.

[Subscribe to the video RSS feed]({{ '/videos.xml' | relative_url }}){: .btn .btn-primary }

The daily research refresh looks for relevant new videos. This feed announces **new additions to this collection**, including older material found recently. Publication dates refer to the original video; added dates refer to Good Vibes. Entries are selected from publisher descriptions or linked primary sources unless explicitly stated otherwise; they are not full transcript reviews.

{% assign ordered_videos = site.data.videos.entries | sort: 'added_at' | reverse %}
{% for video in ordered_videos %}
{% include video-card.html video=video %}
<p><strong>Related topics:</strong>
{% for topic in video.topics %}
  {% assign topic_page = site.pages | where: 'path', topic.path | first %}
  <a href="{{ topic_page.url | relative_url }}#youtube-videos">{{ topic_page.title | escape }}</a>{% unless forloop.last %} · {% endunless %}
{% endfor %}
</p>
{% endfor %}
