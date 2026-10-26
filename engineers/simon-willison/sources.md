---
title: Simon Willison — source findings
parent: Simon Willison
nav_order: 3
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: 2026-10-26
research_checked: 2026-10-26
cache_schema: 1
---

## Publication-window review — 26 October 2026

The active source-to-claim map, publication dates, practice periods and evidence kinds are in [recent AI evidence](recent-ai.md#evidence-used-in-the-comparison). Earlier mappings below are retained as provenance; they do not make a background source current. The original inspection dates remain unchanged.

# Source findings and research gaps

All records were inspected on **26 October 2026** through public primary material. Living chapters were available at inspection; their original publication date was not established from the retrieved page. This is an inspection snapshot, not an immutable archive. Only short original summaries are cached; full source text was not copied.

<a id="s01"></a>

## S01 · What is agentic engineering?

- **Author:** Simon Willison.
- **Source:** [What is agentic engineering?](https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/).
- **Published:** Not established; living guide. **Inspected:** 2026-10-26.
- **Inspected scope:** public living guide chapter.
- **Finding:** Definition, engineering responsibilities, and distinction from unreviewed vibe coding.
- **Supports:** C01, C02.
- **Limit:** Living guidance and self-description, not a measured comparison.

<a id="s02"></a>

## S02 · First run the tests

- **Author:** Simon Willison.
- **Source:** [First run the tests](https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/).
- **Published:** Not established; living guide. **Inspected:** 2026-10-26.
- **Inspected scope:** public living guide chapter.
- **Finding:** Starts an existing-project session by executing its test suite; tests introduce the project and its conventions.
- **Supports:** C03, C04.
- **Limit:** His uv/pytest example is project-specific.

<a id="s03"></a>

## S03 · Red/green TDD

- **Author:** Simon Willison.
- **Source:** [Red/green TDD](https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/).
- **Published:** Not established; living guide. **Inspected:** 2026-10-26.
- **Inspected scope:** public living guide chapter.
- **Finding:** Recommends a meaningful failing check before implementation, then a successful run.
- **Supports:** C04.
- **Limit:** Does not establish completeness or prove that the expected behaviour is correct.

<a id="s04"></a>

## S04 · Agentic manual testing

- **Author:** Simon Willison.
- **Source:** [Agentic manual testing](https://simonwillison.net/guides/agentic-engineering-patterns/agentic-manual-testing/).
- **Published:** Not established; living guide. **Inspected:** 2026-10-26.
- **Inspected scope:** public living guide chapter.
- **Finding:** Documents exploratory execution, API/browser checks, and turning discoveries into regression tests.
- **Supports:** C04, C06, C09.
- **Limit:** Recommendation and first-person account; not every tool is used in every project.

<a id="s05"></a>

## S05 · Anti-patterns: things to avoid

- **Author:** Simon Willison.
- **Source:** [Anti-patterns: things to avoid](https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/).
- **Published:** Not established; living guide. **Inspected:** 2026-10-26.
- **Inspected scope:** public living guide chapter.
- **Finding:** Authors should review agent code and descriptions before asking collaborators to spend time on a PR.
- **Supports:** C03, C06.
- **Limit:** Normative collaboration guidance.

<a id="s06"></a>

## S06 · AI should help us produce better code

- **Author:** Simon Willison.
- **Source:** [AI should help us produce better code](https://simonwillison.net/guides/agentic-engineering-patterns/better-code/).
- **Published:** Not established; living guide. **Inspected:** 2026-10-26.
- **Inspected scope:** public living guide chapter.
- **Finding:** Describes asynchronous refactoring, PR evaluation, inexpensive design experiments, and learning from prior work.
- **Supports:** C01, C05, C08, C09.
- **Limit:** Compound Engineering attribution belongs to Every; effectiveness claims are practitioner opinions.

<a id="s07"></a>

## S07 · Hoard things you know how to do

- **Author:** Simon Willison.
- **Source:** [Hoard things you know how to do](https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/).
- **Published:** Not established; living guide. **Inspected:** 2026-10-26.
- **Inspected scope:** public living guide chapter.
- **Finding:** Working examples, notes and prototypes form a reusable collection for future agent work.
- **Supports:** C08.
- **Limit:** Not a complete private memory or instruction architecture.

<a id="s08"></a>

## S08 · Subagents

- **Author:** Simon Willison.
- **Source:** [Subagents](https://simonwillison.net/guides/agentic-engineering-patterns/subagents/).
- **Published:** Not established; living guide. **Inspected:** 2026-10-26.
- **Inspected scope:** public living guide chapter.
- **Finding:** Fresh contexts can absorb exploration; independent work can parallelise; excessive specialisation adds overhead.
- **Supports:** C07, C08.
- **Limit:** Chapter includes a linked exploration example; no general controlled speedup established.

<a id="s09"></a>

## S09 · Linear walkthroughs

- **Author:** Simon Willison.
- **Source:** [Linear walkthroughs](https://simonwillison.net/guides/agentic-engineering-patterns/linear-walkthroughs/).
- **Published:** Not established; living guide. **Inspected:** 2026-10-26.
- **Inspected scope:** public living guide chapter.
- **Finding:** Describes a source-backed code tour after a SwiftUI prototype, using executed snippets in Showboat.
- **Supports:** C06.
- **Limit:** We inspected the author account, not every line in the linked application.

<a id="s10"></a>

## S10 · Interactive explanations

- **Author:** Simon Willison.
- **Source:** [Interactive explanations](https://simonwillison.net/guides/agentic-engineering-patterns/interactive-explanations/).
- **Published:** Not established; living guide. **Inspected:** 2026-10-26.
- **Inspected scope:** public living guide chapter.
- **Finding:** Uses an interactive word-cloud explanation to build intuition beyond a textual code tour.
- **Supports:** C06.
- **Limit:** A pedagogical example, not a correctness proof.

<a id="s11"></a>

## S11 · The lethal trifecta for AI agents

- **Author:** Simon Willison.
- **Source:** [The lethal trifecta for AI agents](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/).
- **Published:** 2025-06-16. **Inspected:** 2026-10-26.
- **Inspected scope:** public authored article.
- **Finding:** Explains exfiltration exposure from private data, untrusted content and outbound communication.
- **Supports:** C11.
- **Limit:** Scope is exfiltration risk; not a complete security model or proof that every deployment is vulnerable.

<a id="s12"></a>

## S12 · Using Git with coding agents

- **Author:** Simon Willison.
- **Source:** [Using Git with coding agents](https://simonwillison.net/guides/agentic-engineering-patterns/using-git-with-coding-agents/).
- **Published:** Not established; living guide. **Inspected:** 2026-10-26.
- **Inspected scope:** public living guide chapter.
- **Finding:** Git history and isolated changes support investigation, review and recovery.
- **Supports:** C03, C10.
- **Limit:** Do not read its broad enthusiasm for Git as a guarantee that history edits are harmless.

<a id="s13"></a>

## S13 · Rodney official README

- **Author/source:** `simonw/rodney` project maintainers; the research guide separately identifies Willison as the creator.
- **Source:** [Rodney official README](https://github.com/simonw/rodney).
- **Published:** Undated README. **Inspected:** 2026-10-26.
- **Inspected scope:** official repository README, not an independently executed installation.
- **Finding:** Official repository documents a Chrome-automation CLI with persistent sessions and browser interaction commands.
- **Supports:** C09.
- **Limit:** README inspected; immutable revision not captured; no installation performed.

<a id="s14"></a>

## S14 · A new feature for my blog, built using my voice

- **Author:** Simon Willison.
- **Source:** [A new feature for my blog, built using my voice](https://simonwillison.net/2026/Oct/9/built-using-my-voice/).
- **Published:** 2026-10-09. **Inspected:** 2026-10-26.
- **Inspected scope:** public first-person project account.
- **Finding:** Production-feature account combines conversational requirements, local preview, PR review and typing-based corrections before release.
- **Supports:** C02, C09, C10.
- **Limit:** One project. Does not make voice his standard interface or establish a universal release process.

<a id="s15"></a>

## S15 · Battle Drones—a vibe coded RTS with audio-based multiplayer

- **Author:** Simon Willison.
- **Source:** [Battle Drones—a vibe coded RTS with audio-based multiplayer](https://simonwillison.net/2026/Oct/20/battledrones/).
- **Published:** 2026-10-20. **Inspected:** 2026-10-26.
- **Inspected scope:** public first-person project account.
- **Finding:** Game experiment reports little code review, playtesting, repeated versions, and extended multi-agent work.
- **Supports:** C07, C12.
- **Limit:** Explicitly experimental context; not evidence that all production advice was abandoned.

<a id="s16"></a>

## S16 · Showboat official README

- **Author/source:** `simonw/showboat` project maintainers; the research guide separately identifies Willison as the creator.
- **Source:** [Showboat official README](https://github.com/simonw/showboat).
- **Published:** Undated README. **Inspected:** 2026-10-26.
- **Inspected scope:** official repository README, not an independently executed installation.
- **Finding:** Documents Markdown demonstrations with executed commands, captured output, and a re-execution verifier.
- **Supports:** C09.
- **Limit:** README inspected; immutable revision not captured. A record can only establish the checks it actually ran.

## Research gaps

No complete private model-routing setup, instruction hierarchy, fixed budget policy, universal mutation-testing rule, or standard production release/rollback platform was established. Source inspection supports the attributed claims; it does not demonstrate that the composite exercise outperforms another engineer's workflow. Paid or private materials were not accessed.

Recent discovery included his October archive before following the two original project articles. The profile does not borrow other people's security or productivity findings merely because his link blog quotes them. Tool commands are grounded in inspected official READMEs but need version checks before installation.

## Cache lineage

Initial research: 2026-10-26. Slides were derived from this cache after research; their generation date does not represent additional external verification.

<a id="s17"></a>

## S17 — Writing about Agentic Engineering Patterns

Author: Simon Willison. Published: 2026-02-23. Inspected: 2026-10-26.

[Original](https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/). Establishes guide launch, the first two chapters, and reported Claude Code use on its publishing infrastructure. Launch date is not the exact date of every living chapter.
