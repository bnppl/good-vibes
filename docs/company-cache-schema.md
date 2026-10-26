# Company AI-assisted development knowledge bases

This extends the engineer cache conventions to organisations. The subject is **how teams use AI to build, test, review, release and maintain software**. Building an AI product alone does not qualify. Primary publication window: 2025-10-01 through 2026-10-26. Older engineering principles and OSS contributions are background. An undated policy can be context but cannot fill a dated current-window dimension without a verified revision.

## Ownership and files

One company per `companies/<existing-slug>/`. Preserve the existing company identity, industry, qualitative organisation context, reading metadata and valid research. Read each existing profile before expanding. Create/update:

- `index.md`: structured comparison, visible mirrored claims, links to all chapters and deck.
- `research.md`: substantive account of actual cases, workflow, decisions, failures, verification, limits. Depth follows evidence, not a fixed word count.
- `sources.md`: source records with IDs S01 etc, explicit lowercase HTML anchors, title/author, original URL, publication/revision date, practice period, checked date, inspected scope, findings, claim support and limits. Pin repository revisions where feasible; an unpinned artifact cannot establish current policy. Avoid copying entire articles or transcripts.
- `workflow.md`: observed workflow mapped to concrete evidence, then a clearly separate optional adaptation with runnable observations. Never present a hypothetical worked example as company practice. A gap-first profile can instead explain the research boundary and a useful evidence-inspection exercise.
- `slides.md`: 3–8 substantive cards where supported; fewer are appropriate for gaps. Lead with a real case. Dates and evidence kinds are visible. No padding with invented practices. Each card has `## Card 01`, `### Topic`, blockquote hook in bold followed by a separate quote paragraph, `**In the wild:**`, `**Takeaway:**`, `[Optional practice: ...](workflow.md#optional-practice)`, and deeper evidence link(s). Use stable consecutive new IDs from 01; no existing company cards to preserve yet.
- `slideshow.html`: shared learning-deck wrapper as below.
- Optional focused chapters only where substantial verified material warrants them.

## Profile frontmatter

Root: title/canonical_name (same company display name), parent Companies, has_children true, existing nav_order, company_profile true (NEVER engineer_profile), company_id existing slug, cache_schema 1, aliases list, industry, organisation_context, practice_focus coding-workflows, comparison_group (one of banking, fintech, crypto, education, commerce, media, transport, infrastructure, developer-tools, observability, saas, other), focus_note naming actual team/scope, research_cutoff/research_checked 2026-10-26, evidence_since '2025-10-01', last_updated 2026-10-26, last_read/status preserved, tagline, summary, strengths (2–4 scoped topics), tools_summary, slides_url `/companies/<slug>/learn/`, dimensions list.

All dimensions in order, titles exactly:

| ID | Title |
|---|---|
| D01 | Goal and bottleneck |
| D02 | Requirements and specification |
| D03 | Increment and planning |
| D04 | Testing and verification |
| D05 | Design and refactoring |
| D06 | Human understanding and review |
| D07 | Agent autonomy and coordination |
| D08 | Context and durable state |
| D09 | Tooling and environment |
| D10 | Integration and release |
| D11 | Boundaries and safeguards |
| D12 | Evaluation and tradeoffs |

Every dimension has `id`, `title`, `position`, `evidence` (Demonstrated/Stated/Inferred/Not established), `claim` C01–C12, `detail` `research.md#c01` etc, `source` original URL or empty for unknown, `checked`, `qualification`, `evidence_kind`, `published`, `practice_date`, `source_id`, `ai_specific`, `source_format`. Body entries in BOTH index and research mirror position, evidence, kind and qualification, with explicit `<a id="c01"></a>` anchors. Research can be long above/below these entries. A recommendation is not reported usage. Artifact inspection demonstrates the artifact, not successful operation or actual compliance.

Evidence kinds: Reported company use, Reported team use, Personal use, Published artifact, Declared policy, Recommendation, Commentary, Not established. `source_format` identifies authored engineering article, practitioner transcript, public excerpt, archive summary, repository artifact, research paper, etc. Team-specific and CTO personal sources remain scoped; vendors' customer cases retain vendor framing. Date each claim honestly. Publication does not establish the exact practice date.

Unknown dimensions: evidence/kind/format/published/practice_date 'Not established', source/source_id empty, ai_specific false; position and qualification explain the bounded gap. No fake privacy controls, universal tool stack, deployment authority, quality benefit or numerical score. Scope is a company/team case, not all employees. API/product demos, hiring adoption statements and industry telemetry alone cannot populate an internal development workflow.

Readable chapters: title, parent canonical company name, nav_order, last_updated, research_checked, research_cutoff, evidence_since, last_read null/status unread (preserve if existing). All sources must be qualified if date/scope not verified. Top-level `published`/`evidence_kind` may remain as existing summary fields if accurately updated.

Slides collection frontmatter: title `<Name> — bite-sized ideas`, parent `<Name> Company Slides`, nav_order 1, nav_exclude true, last_updated, cache_schema 1, derived_from `companies/<slug>/research.md`, research_checked, evidence_since. Only slides.md has that slide parent.

Wrapper frontmatter: layout learning-deck; title `<Name> — small ideas`; nav_exclude true; search_exclude true; permalink `/companies/<slug>/learn/`; deck_parent `<Name> Company Slides`; deck_notes `/companies/<slug>/`; deck_storage_key `good-vibes-company-<slug>-v1`; deck_section ` / company field notes`; deck_intro scoped AI-assisted development; deck_card_label `<Name> / building with AI`.

## Review rules

Research primary original publications, company engineering accounts, checked practitioner transcripts and pinned artifacts. Prefer concrete prompts, decisions, test mechanisms, failures and observed outputs. Search beyond the seed source; particularly improve CircleCI/JPMorgan/GitLab evidence if possible, otherwise record honest gaps. OSS examples establish engineering background only; projects may have community ownership or mixed licences. GitHub/Microsoft are related samples. Do not claim completeness or independent reproduction. Keep sources' copyright limits: concise findings, with links rather than copied bodies.

The root integrator owns company hub/comparison/global review and shared UI. Delegated researchers edit ONLY their assigned company directories, do not commit or push, and report validation and limitations. No further delegation is needed. All agents share the checkout.

## Comparison viewer

`companies/compare.html` uses the company-comparison layout and the same rendering script and styles as the engineer cards. Discovery uses only `company_profile: true`; the engineer collection remains separate. Select up to three companies, search names/aliases, filter comparison_group by industry, inspect D01–D12, and restrict the main view to reported use/artifacts when useful. URLs retain `companies`, `dimension`, `focus`, `q` and `view`. New companies without a recognised comparison_group appear under Other. No live research occurs in the viewer.
