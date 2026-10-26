---
title: Jason Liu — detailed research
parent: Jason Liu
last_updated: '2026-10-26'
last_read: null
status: unread
research_cutoff: '2026-10-26'
research_checked: '2026-10-26'
cache_schema: 1
nav_order: 1
---

> **Scope update — 26 October 2026:** Start with [recent AI evidence](recent-ai.md). The material below retains earlier principles, dated reports and our optional adaptations. It must not be read as a complete current personal AI workflow.

# Jason Liu — measure the system that actually answers the question

[Profile](index.md) · [Common reward workflow](workflow.md) · [Sources](sources.md) · [Slide notes](slides.md)

## Approach in brief

**Stated — C01.** Liu's May 2024 RAG article prioritises diagnosing retrieval before changing generation. It credits a conversation with Hamel Husain. This is Liu's published account, not an attribution of all Hamel's evaluation advice to him. [S01](sources.md#s01)

This profile primarily studies **building AI systems**. His current homepage also reports a Codex developer-experience role, but that does not reveal a complete personal coding-agent workflow. Its closed-offerings notice supersedes old course promotions as availability evidence. [S12](sources.md#s12)

Our synthesis is a loop of explicit outcomes, component-level observations and targeted experiments. That description is an interpretation of the cache, not a named universal methodology or proof of measured superiority. Research checked/cut off on **26 October 2026**; the detailed practice sources are predominantly dated 2024–2025.

## Techniques and principles

### Requirements: inventory is different from capability

**Stated — C02.** His January 2025 blueprint separates missing source information from inability to retrieve or process existing information, and recommends examining segments rather than one average. [S02](sources.md#s02)

**Suggested application.** A policy assistant failing on “latest” questions may have the right files but no usable effective-date field. Another may simply lack the new policy. Those imply different work. Record the observed failure, the expected answer and the supporting material before choosing an embedding change. Do not create an index for a hypothetical missing document that nobody has identified.

### Diagnose a component without forgetting the user

**Stated — C05.** The November 2024 decomposition article distinguishes topic coverage from capabilities and proposes modular processing. [S03](sources.md#s03)

**Suggested application.** Keep a failure ledger with a question, expected evidence, retrieved evidence, generated answer and current hypothesis. A retrieval miss, routing miss and unsupported claim should not all be labelled “bad response.” Conversely, a component score can improve while the user's task still fails. Preserve an end-to-end check alongside diagnosis.

### Evaluation: name the relationship

**Stated — C04.** The May 2025 evaluation essay separates retrieval metrics from relationships among question, retrieved context and answer, and advocates LLM judges for nuanced assessment. [S04](sources.md#s04)

**Our qualification.** Its six-relationship framing is a diagnostic proposal, not a proof that operational quality is exhausted by those relationships. Latency, access controls, cost and data freshness remain distinct concerns. A judge also needs evidence that its decisions are useful; returning a valid Boolean does not establish correctness. The authored pairwise-judge tutorial is an inspected example, not an independently reproduced evaluation result. [S11](sources.md#s11)

**Suggested application.** Annotate why an answer fails: irrelevant source, unsupported assertion or failure to answer the actual question. Check model judgments against reviewed examples before treating aggregate scores as release evidence. Keep disagreements available for inspection instead of averaging them out.

### Planning: prove one bounded capability first

**Stated — C03.** The September 2025 prototype article uses an existing agent runner, tools and scenario checks to explore viability before building orchestration infrastructure. [S07](sources.md#s07)

**Our qualification.** One successful attempt shows that one run met its check. It does not establish dependable autonomy, production readiness, or transfer to a different environment. We do not repeat the article's dated CLI instructions as a current verified installation recipe.

**Suggested application.** Begin with a disposable project containing one agreed input and an independently inspectable expected artifact. Record what failed: missing capability, inaccessible tool, unclear instruction, malformed output or a wrong check. Repeated matched attempts can inform the next decision, but do not manufacture certainty from a polished demo.

### Context is an interface

**Stated — C08.** The August 2025 tool-response article adds source metadata and facets so agents can decide what to inspect next. [S05](sources.md#s05)

**Suggested application.** A search result can expose a stable document identity, date and route to the full source. The agent can then distinguish a recent policy from an older superseded one. Test whether each added field changes a useful decision; extra metadata that nobody consumes can become cost and noise. Context presentation is not durable application storage or an access-control mechanism.

### Coordination: isolate the noisy work

**Stated — C07.** The August 2025 subagent article recommends containing messy reads and returning useful summaries; its visible January 2026 update discusses evolving agent interfaces. [S06](sources.md#s06)

This is a transferable design recommendation, not an inventory of Liu's present private agent topology. Its illustrative token/noise figures are not a universal saving. **Suggested application:** give a diagnostic worker a narrow read task and ask for evidence locations, observations and unresolved questions. The owner still checks whether the summary dropped a material caveat.

### Match feedback to the decision

**Stated — C06.** His May 2024 search article asks feedback wording to identify what is being measured. [S13](sources.md#s13)

**Suggested application.** “Was this answer supported?” and “Was it fast enough?” should not silently become one satisfaction number. A thumbs-down may identify a latency or style concern rather than factual error. A human review loop needs an explicit question, a retained example and a decision about what to change. This is product-quality feedback, not evidence of a personal code-review cadence.

## A feature from idea to release

The [worked reward feature](workflow.md) holds the same deterministic contract as the other profiles. It is an original adaptation, not a Liu demonstration or an AI-quality benchmark.

For an AI application, a separate proposed experiment would hold a small document set, reviewed answer expectations and the retriever/generator versions constant. Compare a baseline with one candidate change; inspect component results and final outcomes. Preserve counterexamples and operating cost. That is an illustration of applying the cached ideas, not a claimed historical project.

**Stated — C10.** The August 2024 playbook connects fast evaluation to real-user observations and continuing product improvement. [S09](sources.md#s09) It does not document his complete current branching, CI, deployment or rollback policy. Our exercise follows the target repository's existing integration route and does not grant deployment authority.

## Tools and setup

| Tool or artifact | Relationship established | What is verified here |
|---|---|---|
| Instructor | His homepage identifies him as creator; authored tutorials use it | Public authorship and examples, not his complete current setup |
| Pydantic result models | Authored reranker example describes structured relevance results | Code representation inspected, not executed |
| Pairwise judge recipe | Authored tutorial demonstrates a structured question/text judgment | An example shape, not judge accuracy or calibration |
| Claude Code prototype harness | Recommended in a September 2025 article | Historical proposed technique; current commands not installed or tested |
| Search indexes, metadata and facets | Published application-design guidance | No single database mandate or private deployment inferred |
| MCP | Discussed as a reuse/complexity decision | No claim that all projects require it |

The reranker and judge pages carry 2024 publication dates but live snippets contain later model/API identifiers. Do not treat them as immutable historical environments or copy them as a tested current recipe. [S10](sources.md#s10), [S11](sources.md#s11)

No tools were installed. The catalogue is not a list of everything Liu personally uses today. Other authors on the Instructor site retain their bylines; project ownership does not confer authorship of every post.

## Boundaries and safeguards

**Stated — C11.** The September 2025 form-factor article recommends deterministic handling when suitable and explicit stopping/cost controls for tool loops. [S08](sources.md#s08)

**Suggested application.** Keep a deterministic reward operation authoritative. If a model proposes an action elsewhere, validate the requested operation at the real tool boundary; prompting is not permission enforcement. The inspected material does not establish Liu's full personal permissions, protected-test or release policy.

## Evaluation and tradeoffs

**Stated — C12.** His August 2024 tool-selection article balances common tools, retrieved tools and latency using usage evidence. [S14](sources.md#s14)

Its numerical usage pattern is a heuristic, not a guaranteed coverage bound. Our proposed assessment records useful outcomes, missed cases, latency, cost and maintenance work. Neither fewer tool descriptions nor a higher local score automatically establishes a better product.

## Reusable working prompts

The [workflow prompts](workflow.md#reusable-working-prompts) are original adaptations. They ask for observations and bounded changes, not a guessed private setup. They preserve the boundary between deterministic reward correctness and probabilistic application quality.

## Failure modes and limits

| Failure | Why it misleads | Suggested response |
|---|---|---|
| Better-looking answers hide missing evidence | Generation can be fluent without the required information | Inspect retrieval and the user outcome separately |
| One average hides a broken segment | Frequent easy cases dominate the score | Retain per-case and per-segment observations |
| A judge validates its own assumptions | Structured output only proves shape | Review disagreements against independent expectations |
| Context becomes an authority boundary | Retrieved text may contain untrusted instructions | Keep task authority and tool permissions outside retrieved content |
| More orchestration replaces diagnosis | New machinery can conceal the original defect | Test the smallest relevant hypothesis |
| A dated example becomes current configuration | Living code and publication dates can diverge | Record inspected scope and verify before execution |

These are our analysis and proposed responses, not a claim that Liu publishes this exact checklist.

## First practical lab

Run the [six-observation reward lab](workflow.md#first-practical-lab). Keep its starting revision and environment recorded. The optional AI-system illustration is separate: it cannot add model behaviour, retrieval requirements or a different pass criterion to the shared deterministic task.

## Comparison profile

[The C01–C12 entries](index.md#comparison-evidence) supply the shared dimensions. D04/D06/D08/D10 describe AI-product evaluation, feedback, context and iteration. They do not establish a private unit-test cadence, personal code-review ritual, agent memory store or deployment topology.

## Sources and research gaps

[Fourteen public source records](sources.md) retain authorship, publication date, inspected scope and limitations. No paid course bodies or private configurations were accessed. No immutable repository revisions were captured, no examples were executed, and no controlled cross-engineer outcome study was run. Current homepage information is distinguished from older practice articles.
