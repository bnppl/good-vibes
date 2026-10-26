---
description: Research a company’s AI-assisted development, derive slides, and compare cached practices
argument-hint: '"Company Name" [--stage research|slides|all] [--compare "Company A, Company B"] [--refresh] [--team "scope"] [--as-of YYYY-MM-DD] [--since YYYY-MM-DD]'
---

# /company — research, distil, compare

Arguments: $ARGUMENTS

Read `docs/company-research-prompt.md` and `docs/company-cache-schema.md` as the canonical instructions. Resolve the company and existing directory before writing. Focus on how its teams use AI to build software, not how an AI product works.

Parse company name, optional comparison list, --stage (research/slides/all), --refresh, --team, --as-of and --since. Default since is 2025-10-01; cutoff is today. Default single-company stage is all; an implicit comparison uses cached evidence only. Reuse a complete existing cache unless refresh is requested. An introductory shortlist profile without research/source chapters is not a complete research cache. Invalid dates or unresolved identities require clarification; do not discard flags.

Research writes a detailed guide, source findings, workflow, stable C01–C12 claims and D01–D12 structured fields under `companies/<canonical-slug>/`. Evidence depth determines chapter depth. Sources retain original publication/revision, practice and inspection dates and team scope. Unknown fields remain unknown. Do not copy complete copyrighted works.

Slides read the cache without browsing, generating the shared learning-deck format and per-company wrapper. Preserve existing card IDs, URLs, reading metadata and storage keys. Avoid turning optional adaptations into reported practice. Compare reads the same cache and links `/companies/compare/?companies=<comma-separated-company-ids>`; a scoped written comparison can be stored under `companies/comparisons/<sorted-company-slugs>/index.md`. Missing research is reported as a prerequisite unless a research/all stage is explicitly requested.

Link new content from the Companies hub. Verify metadata, mirrored claims, source/anchor links, slide parser anatomy, and identity preservation. Report dates, outputs and limitations. Do not edit engineer research or unrelated learning cards. This command does not by itself authorize committing, pushing, deployment, installing software, or executing an example implementation.
