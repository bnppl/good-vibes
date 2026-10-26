# Engineer approach map

The `/engineers/map/` page is an editorial overview of twenty cached profiles. Its organic regions represent overlapping emphases, not measured verification strength, productivity, project risk, or exhaustive set membership. The ten provisional placements retain their asterisks until their group memberships are reconciled with the detailed cache.

## Source and maintenance

- `engineers/map.html` defines the route and navigation entry.
- `_layouts/engineer-map.html` provides the standalone site layout.
- `assets/css/engineer-map.css` styles the responsive map and popups.
- `assets/js/engineer-map.js` holds placements, scoped tool examples, category metadata and interaction. The `data` array carries the verification/context snapshot; tool examples and tool links are paired by engineer and index.
- `assets/vendor/lucide-icons-0.468.0.js` supplies local category icons under the ISC license. The page needs no remote scripts or ChatGPT host APIs.

When refreshing an engineer, check the map's verification summary and project context against D04 and the research cache. Update tool examples and inline links together. Preserve distinctions between created tools, team artifacts, reported use, endorsement, interest and historical experiments. Use published artifact or source-account links; a private tool must link to its account rather than an invented public installation.

The map originated as an approved conversation visualization, exported with the visualization renderer and adapted into a native Jekyll layout. It keeps the same shapes and placements without depending on the conversation runtime.

## Interaction checks

At desktop and narrow mobile widths, verify all twenty names remain selectable, popups stay within page bounds, inline links open separately, category icons retain text labels, and Close, Escape and outside-click dismiss the popup. Keyboard focus returns to the invoking engineer on Close/Escape. The research archive and field-card comparison remain available from the header. A denied or unavailable icon renderer leaves readable category labels.
