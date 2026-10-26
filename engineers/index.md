---
title: Engineers
nav_order: 6
has_children: true
---

# Engineering approaches

Detailed research first. Small ideas when you want them. Compare people against the same questions and evidence.

[First five](first-five.md) · [Studies 6–10](next-five.md) · [Studies 11–20](studies-eleven-to-twenty.md) · [All-twenty review](refinement-review.md) · [Open the comparison cards]({{ '/engineers/compare/' | relative_url }}){: .btn .btn-primary }

{% assign profiles = site.pages | where: 'engineer_profile', true | sort: 'canonical_name' %}
{% for profile in profiles %}
## [{{ profile.canonical_name }}]({{ profile.url | relative_url }})

{{ profile.summary }}

{% case profile.practice_focus %}{% when 'ai-systems' %}Building AI systems{% when 'mixed' %}Both / mixed focus{% else %}Coding with AI{% endcase %}

{% if profile.slides_url and profile.slides_url != '' %}[Slideshow]({{ profile.slides_url | relative_url }}) · {% endif %}Research checked {{ profile.research_checked }}
{% endfor %}

## Explore all twenty together

[Open the interactive approach map]({{ '/engineers/map/' | relative_url }}) — overlapping regions, selectable engineers and linked tooling examples with category icons.

## Explore a focused comparison

[Testing and verification]({{ '/engineers/compare/' | relative_url }}?people=dave-farley,matt-pocock,robert-c-martin&dimension=D04) · [Delegation]({{ '/engineers/compare/' | relative_url }}?people=harper-reed,peter-steinberger,steve-yegge&dimension=D07) · [AI-system evaluation]({{ '/engineers/compare/' | relative_url }}?people=chip-huyen,hamel-husain,jason-liu&dimension=D04&focus=ai-systems)

These shortcuts choose a question, not a winner. The [refinement review](refinement-review.md) explains scope and evidence boundaries.

Each engineer has a directory containing a detailed guide, source register, structured comparison profile, and derived slide notes. `/engineer` creates these; `--stage slides` rebuilds the short reads from the cache. `--compare` reuses cached evidence. Missing profiles need a research stage first.
