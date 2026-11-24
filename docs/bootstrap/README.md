# Project bootstrap wizard

Route: `/pipeline/bootstrap/`. A browser-only four-step wizard over `assets/pipeline-catalog.json`: brief → curate → working rules → Markdown export. It does not execute setup, call a model, create accounts or send project briefs to a server.

## Evidence and setup treatment

The catalogue retains its source relationships, dates, practice scope and qualifications. Search supports tool/process names and engineer/company evidence; filters narrow stage, entity and setup availability. The optional five-item foundation is an editorial starting set, not a best-stack ranking or an assertion that a source uses all five together.

`assets/bootstrap-recipes.json` adds a reviewed setup treatment to all current catalogue entries:

- **Public tool:** verify official current documentation, compatibility and prerequisites before installing in the requested scope.
- **Published artifact:** inspect source, host support and licence; adapt only the chosen capability. Pinned research revisions and installed versions are separate records.
- **Local process:** create a small project-owned procedure/check, explicitly labelled as our adaptation.
- **Internal-system pattern:** adapt the documented process locally; do not fabricate installation of private Minions, Fleetshift, River, Agent Chip, Toolshed or similar systems.
- **Setup research required:** investigate a supported public path, otherwise mark blocked/deferred. A named tool in an account is not an installation recipe.

Regenerate recipes after reviewing catalogue changes:

```sh
python3 docs/bootstrap/build_recipes.py
python3 docs/pipeline/validate_catalog.py
node --check assets/js/bootstrap-prompt.js
node --check assets/js/bootstrap-wizard.js
```

The generator has a reviewed availability map and targeted operational instructions; other entries have scoped, source-guided adaptation/research instructions. It intentionally does not embed guessed installation commands or claim current package versions. Newly indexed entries without recipes fall back visibly to setup research.

## Prompt generation

`bootstrap-prompt.js` generates a standalone prompt with project brief, stack/environment, selected timing/isolation/CI/retry/review decisions, item-specific instructions, all selected attributions and source qualifications, an execution plan, completion evidence and a selection manifest. The agent is asked to create actual configuration, verify one minimal local slice and write `docs/bootstrap.md` with exact versions/commands/results and deferred work. Repository instructions are inspected before writing; existing work is preserved. Unselected infrastructure and deployment are outside bootstrap scope.

The project rules are the user’s adaptations. A factory’s prescribed failing-test-first work is not recast as tests-after. Selected explicit test-first practices conflict with tests-after selection or a tests-after global rule. Exports are disabled until required brief/selection fields and those conflicts are resolved. Existing migration tests are distinguished from a universal TDD claim. Selecting no CI provider defers provider-dependent work instead of pretending that CI ran. Browser tools on a non-web project produce a fit note. Internal/unknown setup paths remain visible in both UI and prompt.

`bootstrap-wizard.js` handles catalogue fetch, filtering, selection, pagination, keyboard-accessible navigation, browser-local draft persistence and Blob/clipboard export. Text is rendered with DOM text nodes; project prose is fenced with a dynamically sized Markdown fence. The downloaded filename is `bootstrap-prompt.md`, UTF-8, real line breaks. Export always regenerates from current state; changing selections while reviewing also updates the preview. If storage or clipboard is unavailable, download remains usable. Reset affects only the wizard’s own draft key.

## Validation

Browser checks cover required inputs, preset selection, catalogue/entity search, empty results, evidence expansion, mixed verification conflicts and their resolution, internal-system adaptation text, exact downloaded Markdown bytes/filename, state restoration, live preview after removing a selection, all four steps at 320/390/768/1440 pixels, dark mode and reduced motion. Local catalogue validation checks 40 profiles, 181 entries and 250 source associations. The GitHub Pages Jekyll build is the full deployment check.

## Expanded AI skill support

The reviewed skill inventory adds 51 individually inspected public SKILL.md files across Addy Osmani, Matt Pocock and Agent Scripts, bringing the catalogue to 181 entries (68 typed as skills/commands; 53 with exact-file installation metadata including two existing entries). Each source is pinned and linked from an engineer skill-inventory page. Published artifacts are not relabelled as personal adoption. Swift helper upstream credit and per-folder licence requirements are retained.

The wizard provides an entry-type selector, a published-skills shortcut, source-folder/invocation information, required companion selections and an installation-host choice. The prompt groups selected skills by repository, includes exact files and research revisions, preserves manual-only invocation, checks companion assets and root references, and requires actual host discovery verification. Missing required companions block export and can be added explicitly in one action; nothing is silently installed or added. Addy's per-skill shared-reference portability gap and Agent Scripts' maintainer-machine assumptions are called out. A skill workflow's external side effects are not executed as installation smoke tests.

## 18 November evidence additions

Two appended catalogue IDs preserve previous selections: `platform-16` (external sandbox prototypes) and `learn-8` (PostHog CI signal-driven repair). Recipes distinguish public prototype inspection from an internal-system adaptation and require path-specific checks. The [12 November GitHub guide](https://github.blog/ai-and-ml/github-copilot/build-once-run-on-any-agent-a-practical-guide-to-agent-skills/) reinforces separate project configuration and per-host discovery/tools/permission checks; it does not establish GitHub-wide internal use.

## 19 November evidence additions

`context-glossary-adrs` indexes a reported personal feature account; `verify-threat-pack-hunts` indexes a separate security-team case. Their setup steps are local adaptations, with no guessed installation of an internal platform. Existing pinned skill versions and IDs remain unchanged.

## 20 November: proportionate specs and enforced access

The existing acceptance and shared-instructions recipes (`define-3`, `context-3`) now ask for a spec owner/review trigger where relevant and distinguish tool discovery from enforced invocation policy. These are proposed local setup checks, not additional claims about the profiles attributed to those catalogue items. Catalogue IDs, evidence dates and pinned skill revisions are unchanged. See the [guide sources](../../context-engineering/sources.md#november-20-2026-specification-and-tool-policy-evidence).

## 22 November: knowledge-change proposals

The existing glossary/ADR and repository-instruction recipes (`context-glossary-adrs`, `context-6`) now include a source-linked queue for proposed shared-guidance changes. They are our coding adaptations of the [knowledge-curation discussion](../../context-engineering/knowledge-layer.md#november-2026-report-gaps-before-promoting-shared-knowledge), not new evidence about the existing attributed profiles. No skill revision, catalogue identity or install command changed.


## 23 November: evaluate team fit

The existing `plan-1` recipe now requests a bounded team comparison and coordination-failure records when parallelism is justified. This is our adaptation of the [coordination evidence](../../agent-patterns/multi-agent.md#november-2026-a-solo-winner-may-be-a-poor-teammate); it adds no tool installation, skill revision or new attribution to an existing profile. Catalogue IDs and source dates remain unchanged.

## 24 November: skill evaluation and retirement

The existing outcome-measurement recipe (`learn-3`) now requests a matched no-skill baseline, pinned run configuration and an explicit keep/shorten/retire decision after upgrades. This is our adaptation of [Uber’s November skill account](../../companies/uber/sources.md#s04), not a public installation of Skill Workshop. Existing skill IDs, installation revisions and saved selections are preserved. The pipeline and comparison views consume the refreshed C12 claim.
