---
title: Engineers
nav_order: 6
has_children: true
---

# Engineering approaches

Start with AI use documented in publications since October 2025. Compare actual reported projects, inspectable artifacts and advice with separate publication, practice and inspection dates. Older principles remain background.

[First-ten freshness review](freshness-review.md) · [Next-ten freshness review](freshness-review-next-ten.md) · [Studies 11–20](studies-eleven-to-twenty.md) · [All-twenty scope review](refinement-review.md) · [First five studies](first-five.md) · [Studies six to ten](next-five.md) · [Comparability review](comparability-review.md) · [Open the comparison cards]({{ '/engineers/compare/' | relative_url }}){: .btn .btn-primary }

{% assign profiles = site.pages | where: 'engineer_profile', true | sort: 'canonical_name' %}
{% for profile in profiles %}
## [{{ profile.canonical_name }}]({{ profile.url | relative_url }})

{{ profile.summary }}

{% if profile.slides_url and profile.slides_url != '' %}[Slideshow]({{ profile.slides_url | relative_url }}) · {% endif %}Research checked {{ profile.research_checked }}
{% endfor %}

Each engineer has a directory containing a detailed guide, source register, structured comparison profile, and derived slide notes. `/engineer` creates these; `--stage slides` rebuilds the short reads from the cache. `--compare` reuses cached evidence. Missing profiles need a research stage first.

## Explore all twenty together

[Interactive approach map]({{ '/engineers/map/' | relative_url }}) · [Eight visual perspectives]({{ '/engineers/visuals/' | relative_url }})
