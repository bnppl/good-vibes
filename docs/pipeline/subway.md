# Combined tooling subway

The combined `/pipeline/subway/` view reads `assets/pipeline-catalog.json`, the same source as the atlas. No extra authored workflow or source claims are generated.

- Lines represent selected individuals and companies; circles and squares distinguish their entity types. Up to six lines can be shown simultaneously.
- Eight stations index the atlas stages. Connections show evidence coverage, never asserted chronological order, a composite real project, a common toolchain or a quality score. A line can pass a station without an evidence marker.
- A small coloured circle or square at a station means that subject has an attributed claim there. An unmarked stage is unknown in the index, not non-use. Matching tooling labels show corresponding subject colours.
- Tool/skill/harness/environment labels appear before processes. Only three labels are shown at a station; the station inspector includes every matching entry. Processes can be hidden. Tool search filters labels and fades unmatched routes, without inventing new stage evidence.
- Harness/access stays in a separate cross-cutting strip, not a fabricated last step.
- Focused line and station/tool selections restrict the inspector to the selected subjects. Each observation retains the original relationship category, publication/revision, practice period, cache inspection, qualification, primary URL and source register.
- Policy, recommendations, artifacts and reported use have distinct filters. Published material is not silently relabelled as daily use. The three ineligible profiles remain disabled with explicit gap notes.
- Route selection, focus, station, tooling search, evidence filter, process visibility and selected tool are encoded in the URL. No storage or account integration is needed.
- The SVG supports keyboard activation. HTML station buttons and evidence cards provide an alternative to operating the diagram. On small screens, Expand enables readable horizontal scrolling.

Validation: run the catalogue integrity checker and JavaScript syntax check. Browser QA covers default mixed routes, focusing, tool selection, exact evidence links, relationship filters, process visibility, query search, route add/remove, six-line limit, shared URL restoration and responsive overflow. The existing standalone atlas and source records are preserved.

## Pocket view

`/pipeline/subway/mobile/` uses the same catalogue and JavaScript evidence/filter logic. The `data-layout="mobile"` flag selects a vertical HTML/CSS rail layout instead of the SVG. It defaults to Stripe, Gojko Adžić and Simon Willison; explicitly shared selections still support six lines.

Stages expand one at a time, with source cards inline beside their rail markers. The sticky stage picker, collapsible filter panel, Done control, readable form fonts and 44-pixel evidence links avoid the wide diagram’s pan/zoom interaction. Harness/access remains separate. Search, relationships, source dates and qualifications are unchanged.

Mobile/wide links carry the current URL state. The pocket view additionally saves collapsed-stage state with `closed=1`. Existing wide links continue to work.

Browser verification: 390px and 320px iframe viewports have no page-level horizontal overflow (375px and 305px usable width after scrollbars); inline Toolshed evidence retains its February date and primary/cached source links; stage jumping, accordion collapse, foundation navigation, filters, Done, and selection/filter preservation when switching to the wide view work. Existing wide SVG routes were checked after the shared script change. Syntax, catalogue integrity and template rendering checks pass.
