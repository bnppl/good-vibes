# Company subway map

Route: `/companies/subway-routes/`. Data: `_data/company_subway.yml`. Presentation: `_layouts/company-subway.html`, `assets/js/company-visuals/subway.js`, `assets/css/company-visuals/subway.css`. Static Jekyll/Liquid JSON; no runtime API or new dependency.

## Admission and evidence

Reviewed 27 October 2026. Fourteen routes summarise selected first-party case reports, with a primary URL, publication date, source-section locator, actors, tooling relationship and explicit boundary per case. Sources were reopened during this review. The existing company knowledge bases supply context, not missing workflow edges. We did not execute private systems or independently reproduce outcomes.

A route needs a reported, ordered AI-assisted software-development case. Declared policy, adoption, generic engineering practice, separate snapshots and tool ownership alone cannot supply one. A partial but well-documented case is allowed: Cloudflare describes review, not implementation; 37signals describes a browser red/green loop. Missing later stages remain missing. A source can describe a system trial without establishing broad company-wide deployment.

Shared stations are broad activity categories. Exact meanings, actors and test targets remain in the source-specific inspector. Edges preserve reported stage order. Preparatory substeps can be grouped, with the contents disclosed (e.g. Coinbase’s already-validated scaffold and draft PR). Parallel component workers are represented as a phase, not serialised as individual agents. Rework and alternative exits are described rather than fabricated into a universal happy-path loop. Geometry, colour, distance and stop count carry no quantitative meaning.

## Included cases

| Company | Scope and preserved boundary |
| --- | --- |
| Stripe | February Minions blueprint; bounded CI repair and human return, no inferred autonomous deployment. |
| Spotify | December Honk verification sequence; deterministic verifiers then prompt–diff judge, before PR creation. No later platform snapshots spliced in. |
| Coinbase | June Figma-to-code orchestrator; approved plan, validated scaffold, parallel components, gates and focused draft PRs. |
| GitHub | Rust runtime migration; existing E2E behaviour oracle, port PRs, required checks and incremental mainline landing. Not recast as unit TDD. |
| Grafana Labs | Tern’s learn → guide → readiness audit → execution phases. Human design decisions remain interleaved; no invented final release sequence. |
| Monzo | Designers’ small product changes and mandatory engineering review. Deployment authority varies by reported role; no autonomous agent deploy or assumed test stack. |
| PostHog | Self-driving team issue/readiness → implementation → PR → review → merge. Separate QA/CI articles do not add stops. |
| 37signals | Lexxy browser red → fix → green. Separate sandbox/branch validation is noted without imposing extra sequence. |
| Block | Actionable CI’s explicitly initiated, eligible autofix. Draft → CI → ready for review is not approval or merge. |
| Shopify | River checks live finding state, repairs the current patch, follows CI/owner decisions and merge, then verifies closure at repository head. Not production telemetry. |
| Mozilla | Anthropic AI-assisted executable findings, Mozilla validation and engineer fixes, shipped Firefox version. AI patch authorship is not asserted. |
| Duolingo | Scheduled iOS test backfill. Linux workers cannot compile Swift locally; CI supplies validation. Reviewer assignment/auto-merge enablement is not unconditional immediate merge. |
| Cloudflare | MR context, specialist model review, coordinator consolidation, posted verdict/bot approval. No invented coding or deployment stages. |
| Datadog | Unicron evaluation’s specialisation, evolution, codec safety proofs, held-back output comparison and WASM hot-swap. Formal codec properties do not prove arbitrary candidate correctness; report covers two evaluated workloads. |

## Not mapped

Six entries remain excluded, with reasons visible in the map: CircleCI and JPMorgan Chase lack a sufficiently detailed case in the cache; Microsoft supplies adoption/instruction evidence without a clear ordered internal case; GitLab supplies a declared playbook rather than reported execution; Uber’s selected overview combines workflows without one reconstructable case sequence; Zalando’s snapshot supplies separate adoption, preview and approval mechanisms without a specific agent-execution sequence. These are source/selection boundaries, not claims that those companies do not use AI.

## Interaction and validation

All cases appear together; a native selector, company roster or SVG track isolates a line. Source-order numbers and clickable steps reveal evidence, actor, feedback limits and tooling relationships. Station selection highlights only matching documented cases. Unused stations are disabled in selected routes. Keyboard focus survives inspector rerendering. On small screens the whole network fits initially; Expand enables a horizontally scrollable readable version. Dark mode and reduced motion are supported.

Validated at 320, 390, 768 and 1440 pixels with every route selected, source-specific assertions for Duolingo/Mozilla/Datadog/Cloudflare, keyboard station use, exclusions and expand/fit. Full Jekyll build remains the Pages workflow’s deployment check.
