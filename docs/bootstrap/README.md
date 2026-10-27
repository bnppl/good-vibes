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

Browser checks cover required inputs, preset selection, catalogue/entity search, empty results, evidence expansion, mixed verification conflicts and their resolution, internal-system adaptation text, exact downloaded Markdown bytes/filename, state restoration, live preview after removing a selection, all four steps at 320/390/768/1440 pixels, dark mode and reduced motion. Local catalogue validation checks 40 profiles, 130 entries and 199 source associations. The GitHub Pages Jekyll build is the full deployment check.
