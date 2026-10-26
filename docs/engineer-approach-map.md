# Engineer approach map

The `/engineers/map/` page is an editorial overview of twenty cached profiles. Its organic regions represent overlapping emphases, not measured verification strength, productivity, project risk, or exhaustive set membership. The ten previously provisional placements were reconciled against the detailed cache on 26 October 2026. All twenty names now have reviewed placements; this is evidence reconciliation, not new external research or runtime reproduction.

## Source and maintenance

- `engineers/map.html` defines the route and navigation entry.
- `_layouts/engineer-map.html` provides the standalone site layout.
- `assets/css/engineer-map.css` styles the responsive map and popups.
- `assets/js/engineer-map.js` holds placements, scoped tool examples, category metadata and interaction. The `data` array carries the verification/context snapshot; `placementEvidence` records the ten reconciled rationales and stable profile claim anchors. Tool examples and tool links are paired by engineer and index.
- `assets/vendor/lucide-icons-0.468.0.js` supplies local category icons under the ISC license. The page needs no remote scripts or ChatGPT host APIs.

When refreshing an engineer, check the map's verification summary and project context against D04 and the research cache. Update tool examples and inline links together. Preserve distinctions between created tools, team artifacts, reported use, endorsement, interest and historical experiments. Use published artifact or source-account links; a private tool must link to its account rather than an invented public installation.

The map originated as an approved conversation visualization, exported with the visualization renderer and adapted into a native Jekyll layout. It keeps the organic design without depending on the conversation runtime. Regions and label positions expand when reviewed memberships require new overlaps.

## Interaction checks

At desktop and narrow mobile widths, verify all twenty names remain selectable, popups stay within page bounds, inline links open separately, category icons retain text labels, and Close, Escape and outside-click dismiss the popup. Keyboard focus returns to the invoking engineer on Close/Escape. The research archive and field-card comparison remain available from the header. A denied or unavailable icon renderer leaves readable category labels.

## Reviewed membership criteria

The regions show documented emphases, not every technique a person may use. **Executable checks** covers software behaviour/design checks (whether test-first or tests-after). **Context & human steering** includes explicit intent, inspectable context and consequential human decisions. **Agent orchestration** includes published coordination designs or bounded autonomous loops, not only multi-agent fleets. **Production feedback** covers observed live-system/product behaviour. **AI application evaluations** covers model, retrieval, judge and research outcomes; it does not imply software unit TDD.

| Engineer | Reviewed membership | Scope retained |
|---|---|---|
| Harper Reed | Checks; context/steering | 2025 TDD/plans and later public instructions; January 2026 remote terminals alone do not establish orchestration. |
| Matt Pocock | Checks; context/steering; orchestration | October skills specify human-agreed seams, review, dependency-ready tickets and worktrees; inspected, not executed. |
| Robert C. Martin | Checks; context/steering; orchestration | Published SwarmForge acceptance/mutation and coordination design; September personal account reports moving away from the custom harness. |
| Peter Steinberger | Checks; context/steering; orchestration | Dated tests-after workflow, conversational planning and human-steered parallel terminals; not recast as TDD. |
| DHH | Context/steering | January 2026 supervised outcome review; historical testing views do not establish a current agent test cadence. |
| Andrej Karpathy | Context/steering; orchestration; AI evaluation | Human oversight/context, bounded autoresearch loop and fixed ML evaluation; not software unit TDD or a fleet. |
| Charity Majors | Production feedback | March 2026 operational verification and September human ownership; private agent topology unknown. |
| Chip Huyen | AI evaluation | Human assessment of AI-product quality; core evidence remains January 2025 and earlier, not a newer personal coding-agent account. |
| Hamel Husain | Production feedback; AI evaluation | Objective/subjective evaluator validation and September 2026 regression/production sampling distinction. |
| Jason Liu | Context/steering; production feedback; AI evaluation | Faceted context, component evaluation and production flywheel; subagent-read guidance is not a complete orchestrator. |

Each reconciled popup links its rationale to the relevant D02/D04/D06/D07/D08/D09/D10 profile claims. The published artifact and personal-use distinction is especially important for Martin; historical scope is especially important for Huyen, Reed and Liu. A reviewed placement is not a claim that every source falls after October 2025.
