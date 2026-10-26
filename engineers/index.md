---
title: Engineers
nav_order: 6
has_children: true
---

# Engineering approaches

Detailed research first. Small ideas when you want them. Compare people against the same questions and evidence.

[First five studies](first-five.md) · [Studies six to ten](next-five.md) · [Comparability review](comparability-review.md) · [Open the comparison cards]({{ '/engineers/compare/' | relative_url }}){: .btn .btn-primary }

{% assign profiles = site.pages | where: 'engineer_profile', true | sort: 'canonical_name' %}
{% for profile in profiles %}
## [{{ profile.canonical_name }}]({{ profile.url | relative_url }})

{{ profile.summary }}

{% if profile.slides_url and profile.slides_url != '' %}[Slideshow]({{ profile.slides_url | relative_url }}) · {% endif %}Research checked {{ profile.research_checked }}
{% endfor %}

Each engineer has a directory containing a detailed guide, source register, structured comparison profile, and derived slide notes. `/engineer` creates these; `--stage slides` rebuilds the short reads from the cache. `--compare` reuses cached evidence. Missing profiles need a research stage first.
