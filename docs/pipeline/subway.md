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
