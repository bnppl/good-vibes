---
title: Refinement review — all twenty
parent: Engineers
nav_order: 35
last_updated: 2026-10-26
last_read: null
status: unread
---

# Refinement review — all twenty engineer studies

Review date: **26 October 2026**. This review covers the twenty profiles' detailed research, source findings, worked examples, comparison fields, and derived slides. New research was performed for entries 11–20. Existing caches were reviewed editorially without turning that review into a new external verification date.

[First five](first-five.md) · [Studies 6–10](next-five.md) · [Studies 11–20](studies-eleven-to-twenty.md) · [Earlier first-ten comparability review](comparability-review.md)

[Open the comparison cards]({{ '/engineers/compare/' | relative_url }}){: .btn .btn-primary }

## The collection contains two related engineering subjects

The original shortlist deliberately includes both **using AI to develop software** and **engineering products that contain AI models**. Similar vocabulary can conceal a different system under discussion.

| Comparison context | What the evidence may describe | What it does not establish automatically |
|---|---|---|
| Coding with AI | Coding-agent instructions, tests, context, review, integration and team delivery | Model-output quality or the architecture of every AI application |
| Building AI systems | Data, retrieval, model/application evaluations, serving, production feedback and costs | The person's personal coding assistant, unit-TDD cadence, private harness or release permission policy |
| Both / mixed focus | A body of work that substantively bridges these subjects | That a statement about one subject transfers to the other |

The cards now show focus badges. The picker searches names and aliases and filters by focus. Selected people remain visible when the filter changes, so you can remove them without losing track of the comparison. A comparison across focus categories displays a scope note.

Focus is a description of the material studied here, not a score, attitude, permanent identity, or limit on a person's expertise. Chip Huyen, Hamel Husain, and Jason Liu are represented primarily through AI-system engineering; Karpathy's profile bridges conceptual AI systems and AI-assisted development. Operational guidance, such as Charity Majors's, remains explicitly qualified rather than being promoted into a complete personal coding-agent setup.

## The twelve questions remain stable

All profiles retain D01–D12 and stable C01–C12 claim anchors. That makes the engineering questions consistent while allowing the answers and evidence types to differ.

When reading the short cards, check four things:

1. **Which system?** An application model, a coding assistant, a test harness, a production service, and a team delivery process are different objects of evaluation.
2. **Whose statement?** An authored recommendation, coauthored chapter, guest article, interview summary, and inspected repository retain their attribution.
3. **Which date and context?** A historical experiment is not silently converted into a current policy. The evidence-inspection date does not replace the practice date.
4. **What was observed?** A published design can be inspected without executing it. A reported success is not an independently reproduced result, and a proposed exercise is not the engineer's demonstrated workflow.

Unknown personal practices remain unknown. A gap is not opposition, and our suggested implementation is not evidence of the person's own policy. No profile is padded with invented private tools or controls to make the cards look equally complete.

## Keep the common exercise fixed

Every profile's proposed reward exercise uses the same observations:

| Step | Observation | Expected balance |
|---|---|---|
| 0 | Read an isolated initial account | 0 |
| 1 | Deliver A | 10 |
| 2 | Deliver A again | 10 |
| 3 | Restart the runtime, retaining durable data, and read before replay | 10 |
| 4 | Deliver A again after restart | 10 |
| 5 | Deliver distinct B | 20 |

The immediate post-restart read is separate from replay, preventing a second award from masking lost state. The starting architecture, runner, storage and language remain unknown; no mandatory UI, networking, concurrency or performance requirement is added to only one workflow.

For AI-system specialists this is an original adaptation at a **deterministic software boundary**. It does not measure model quality, retrieval relevance, hallucinations, or probabilistic agent success. Optional model-based illustrations stay separate and do not change the shared acceptance task. None of the profiles is claimed to be an observed implementation of this reward feature by the engineer.

## Comparison starting points

These are navigation shortcuts, not rankings or claims that the selected people disagree.

- [Inspect testing and verification in Farley, Pocock and Robert Martin]({{ '/engineers/compare/' | relative_url }}?people=dave-farley,matt-pocock,robert-c-martin&dimension=D04).
- [Inspect delegation in Harper Reed, Peter Steinberger and Steve Yegge]({{ '/engineers/compare/' | relative_url }}?people=harper-reed,peter-steinberger,steve-yegge&dimension=D07).
- [Inspect AI-system evaluation in Chip Huyen, Hamel Husain and Jason Liu]({{ '/engineers/compare/' | relative_url }}?people=chip-huyen,hamel-husain,jason-liu&dimension=D04&focus=ai-systems).
- [Inspect evaluation tradeoffs across Charity Majors, Hamel Husain and Simon Willison]({{ '/engineers/compare/' | relative_url }}?people=charity-majors,hamel-husain,simon-willison&dimension=D12). Read the cross-focus scope note.

A full comparison synthesis needs evidence for both sides of a claimed difference. Different vocabulary, projects, tool generations or evidence gaps are not enough to establish a disagreement in principle.

## Concrete results of the independent refinement

The reviews covered the original ten profiles, then the new six coding/delivery profiles, Karpathy/Huyen, and Husain/Liu. They reused the completed caches; editorial changes did not become new source-verification dates.

### Original ten

Farley's illustrative Gherkin now asserts the retained balance before replay, matching its table; eight omitted visible claim qualifications were restored from the existing structured fields. Willison's source records now identify authorship and inspected scope more precisely. Related short examples in Willison and Fowler preserve the restart read, and Osmani's autonomy hook names the agent clearly. The other original profiles were accurate as-is under this pass. Existing research depth, card identity and genuine differences were preserved.

### New ten

| Profile | Refinement and boundary retained |
|---|---|
| [Charity Majors](charity-majors/index.md) | Operational advice remains distinct from a personal coding-agent setup. Emily Nakashima's introduced engineering note retains its authorship; the core cache was accurate as-is. |
| [Harper Reed](harper-reed/index.md) | The Git-helper card now carries its 2024 date and direct source. Older planning, newer small-change instructions, and a separate containment experiment remain distinct. |
| [Peter Steinberger](peter-steinberger/index.md) | An unsupported absolute hook was softened. Test-after self-reports, selective review, and later published skills/MCP capabilities keep their dates and scope. |
| [Matt Pocock](matt-pocock/index.md) | Relevant 2026 dates are visible in short cards. Current red-green implementation and separate refactoring/review remain distinct from older trigger wording. |
| [Robert C. Martin](robert-c-martin/index.md) | Compact fields distinguish historical design advice, joint teaching outlines and a September interview account. Checkout/handoff documentation is not a complete production release policy. |
| [DHH](david-heinemeier-hansson/index.md) | Testing and agent-use chronology was sound; compact tool dates are clearer. A personal isolation experiment and team product announcements do not establish a universal private setup. |
| [Andrej Karpathy](andrej-karpathy/index.md) | The AI-generated-and-checked provenance of an interview account is explicit. Artifact dates and the full six-observation task are clearer; inspected experiment instructions are not executed trials. |
| [Chip Huyen](chip-huyen/index.md) | Material publication dates are attached to compact qualifications. A sensitivity exercise is explicitly optional; AI-product judgments do not establish a personal coding-agent policy. |
| [Hamel Husain](hamel-husain/index.md) | Compact and slide dates distinguish publication, repository revision and inspection. Husain/Shankar coauthorship remains visible; an inspected skill is not runtime efficacy evidence. |
| [Jason Liu](jason-liu/index.md) | Living tutorial dates, later prototyping/context articles and current homepage information remain separate. The deterministic reward card now links to its actual adaptation rather than a product-lifecycle claim. |

These corrections improve attribution and comparability. They do not claim equal evidence depth or a new experiment comparing effectiveness.

## What the refinement preserves

- Detailed research remains separate from the consumable views. Slides link back to cached detail and source findings rather than becoming a competing specification of the person's beliefs.
- Short hooks must remain accurate when removed from a long article. Important dates, coauthors, study limitations and inspected-versus-executed distinctions survive in the short explanation or compact fields.
- Existing card IDs and browser-storage keys retain their meaning. Reading progress and research-verification dates are not reset by editorial changes.
- Historical positions are preserved with dates. Later tool capabilities or later personal reports do not erase earlier evidence; they change how it should be read.
- Source registers state what was actually inspected, including public excerpts, AI-assisted summaries, course outlines or inaccessible leads. Uninspected paid content and private configurations are not inferred.

## Limits of the comparison

These are source-backed profiles and proposed applications, not twenty matched experimental runs. No universal productivity, safety, cost or code-quality winner is established. Source depth differs, some material is living or partial, and private practice is often not documented.

A later execution comparison would need a common starting revision, environment, task, checks, model/harness configuration and trial protocol. It should include review, rework and integration effort. The common exercise aligns intent; it does not supply that missing outcome evidence.

## Validation record

- **Twenty profiles, 240 comparison entries, 160 slides.** Exact dimension titles, stable claim anchors, and visible position/evidence/qualification parity were checked.
- Local files and fragments, source-detail targets, YAML, fences, card sections, unique per-deck IDs and storage keys passed static validation.
- All slides rendered with the shared viewer in a browser fixture. The original general learning deck remained functional; engineer bookmarks stayed separate.
- Name/alias and accent-insensitive search, focus filters, selected-profile visibility, no-match state, clear selection, shareable URL state, selection limits, dimension filters and cross-focus notes passed browser checks without errors.
- Desktop and mobile layouts were inspected. The AI-system comparison remains usable on a narrow screen by scrolling cards horizontally.
- Original identities, reading state, research dates, card IDs and browser-storage keys were preserved. New metadata identifies editorial focus without claiming a source refresh.
- The browser fixture approximates Jekyll's Markdown embedding. A full local Jekyll build was not run because Ruby is unavailable. No matched application implementation or productivity benchmark was performed.
