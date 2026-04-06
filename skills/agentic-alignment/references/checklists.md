# Alignment Checklists

Quick references for each stage. Use these to confirm you haven't missed anything.

## Stage 1: Audit

- [ ] Found all instruction files (CLAUDE.md, .cursorrules, AGENTS.md, README agent sections)
- [ ] Checked for subdirectory instruction files
- [ ] Counted instructions and flagged contradictions or stale rules
- [ ] Identified test runner and ran the test suite
- [ ] Noted current test pass rate
- [ ] Checked for architecture docs, API specs, and their freshness
- [ ] Scanned for TODO/FIXME drift markers
- [ ] Identified tech stack and undocumented conventions
- [ ] Wrote CONTEXT_AUDIT.md with findings and recommendations
- [ ] Presented audit to user for review

## Stage 2: Instruct

- [ ] CLAUDE.md exists with project identity, tech stack, commands
- [ ] Commands are exact shell commands, not descriptions
- [ ] Conventions are things the agent can't infer from code or tooling
- [ ] No duplicated-derivable information (file trees, dependency lists, git history)
- [ ] Complex topics use progressive disclosure links, not inline walls of text
- [ ] At least one concrete example of a good pattern in this project
- [ ] Subdirectory configs for rules that only apply to specific areas
- [ ] User has approved every instruction
- [ ] Verified instructions work in a fresh agent session

## Stage 3: Spec

- [ ] Identified high-complexity or high-drift modules from the audit
- [ ] Validated understanding of module intent with the user
- [ ] Spec depth matches module complexity (paragraph for simple, full template for complex)
- [ ] Checked spec against existing tests — flagged gaps and drift
- [ ] Placed specs near the code they describe
- [ ] Added progressive disclosure links in CLAUDE.md
- [ ] User has reviewed and approved each spec

## Stage 4: Verify

- [ ] Test suite is green (fixed failures, removed stale tests)
- [ ] Coverage gaps identified and prioritized
- [ ] Missing tests written for high-risk areas
- [ ] Test command documented in CLAUDE.md
- [ ] Verification workflow discussed with user (Red-Green-Agent loop)
- [ ] Considered hooks for automated enforcement (post-edit test runs, lint, format)
- [ ] Build command works and is documented

## Quick health check (use anytime)

After alignment, you can periodically check:
- [ ] CLAUDE.md is still current (no stale instructions)
- [ ] Specs match their implementations
- [ ] Tests still pass
- [ ] No new instruction bloat has crept in
