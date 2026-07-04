---
title: "Knowledge Layer"
parent: "Context Engineering"
nav_order: 3
last_updated: 2026-07-04
last_read: 2026-04-06
status: read
---

# The Knowledge Layer: RAG, Retrieval, and Just-in-Time Loading

{: .hook }
> **Your RAG pipeline might be making your agent dumber — by feeding it more, not better.**
>
> Retrieval isn't a silver bullet. Done wrong, it just adds noise the model has to wade through.

**In short:**
- **The problem:** RAG gets treated as a default fix, even when the real issue is bad chunking, bad indexing, or retrieving too much.
- **The idea:** Knowledge can enter context three ways — fine-tuning, in-context examples, or runtime retrieval (RAG) — and confusing them wastes effort.
- **How it works:** Retrieval strategies (vector, hybrid, graph-enhanced), grounding and attribution, and just-in-time loading — keeping lightweight references and fetching data only when needed.
- **The result:** Relevance beats volume. A pointer the model can follow on demand beats a document pasted upfront.

{: .aha }
> **Retrieve a pointer, not a paragraph** — load the paragraph only when it's actually needed.

{: .try-it }
> Find one place your agent retrieves a full document upfront. Replace it with a reference (path, ID, URL) it can fetch on demand instead.

---

## Deep dive

Getting knowledge into context is one of the central problems in context engineering. You have three broad options: train it into the model (fine-tuning), include examples directly in the prompt (in-context learning), or retrieve it at runtime (RAG). Each has its place, and confusing them is a common source of wasted effort.

## RAG Fundamentals

Retrieval-Augmented Generation means: instead of baking knowledge into model weights, retrieve it when you need it and inject it into context. The model reasons over what you give it rather than recalling from parametric memory.

**When to use RAG vs. the alternatives:**

- **RAG** — large or frequently changing knowledge bases, domain-specific facts, anything where you need the model grounded in specific documents. The canonical use cases: internal documentation, product catalogs, legal corpora, codebases.
- **Fine-tuning** — behavioral changes, style adaptation, making the model follow conventions consistently. Fine-tuning is poor at injecting factual knowledge reliably; it's better at shaping how the model responds than what it knows.
- **In-context examples** — demonstrating output format, showing patterns, few-shot learning. Put examples in context when you want the model to match a specific structure or style.

The RAG pipeline at a high level:

1. Index documents — ingest your knowledge base
2. Chunk — break documents into retrievable units
3. Embed — convert chunks to vector representations
4. Store — write to a vector database (or hybrid store)
5. Retrieve — at query time, find the most relevant chunks
6. Inject — include retrieved chunks in the model's context

The devil is in every one of those steps. RAG gets blamed for model failures that are actually chunking failures, indexing failures, or retrieval failures.

## Retrieval Strategies

Not all retrieval is the same. The right strategy depends on what your queries look like and what your documents contain.

**Vector (semantic) search** embeds the query and finds documents by similarity in vector space. Strong for meaning-based queries — "how do I handle authentication errors?" returns relevant results even if the document uses different phrasing. Weak for exact matches: searching for error code `E4021` may surface semantically similar content instead of the exact identifier.

**Keyword (lexical) search** — BM25 and similar approaches — matches on terms. Strong for exact identifiers, proper nouns, code snippets, and technical strings. Weak when users paraphrase or when synonyms are common.

**Hybrid search** combines both. A query goes through semantic search and keyword search in parallel; results are merged and re-ranked. This handles the failure modes of each individual approach. For most production applications, hybrid search is the right default — don't start with pure vector search and assume you're done.

**Graph-enhanced RAG** adds relationship traversal to retrieval. Useful when your data has meaningful structure: knowledge graphs, code dependency graphs, document hierarchies with explicit links. Instead of just finding relevant nodes, you can follow edges to retrieve related context that pure similarity search would miss.

**Chunking strategies** have outsized impact on retrieval quality, and they're often underestimated:

- Small chunks (a few sentences) give precise retrieval but may lack surrounding context to be useful on their own.
- Large chunks (several paragraphs or pages) preserve more context but introduce noise, increase token costs, and dilute relevance scores.
- Overlapping chunks help bridge section boundaries — a chunk that starts 50% through the previous chunk ensures nothing falls through the gap.
- Semantic chunking — splitting by section, paragraph, or logical unit rather than by character count — generally outperforms fixed-size chunking. Documents have natural structure; honor it.

## Grounding and Attribution

One of RAG's primary benefits is reducing hallucination. When the model has concrete source material in context, it reasons over that material rather than generating from parametric memory. The difference between "the model recalls something that might be true" and "the model is working from a specific document you gave it" is meaningful for reliability.

For this to work well:

**Include source metadata.** Don't just inject raw text — include document title, URL, publication date, and any other identifiers alongside the content. This gives the model what it needs to attribute claims accurately, and gives users what they need to verify them.

**Calibrate for low-relevance retrieval.** When the retrieved chunks are weakly relevant to the query, the model should express uncertainty rather than papering over the gap with confident-sounding inference. This requires both prompt design (explicitly instruct the model to flag low-confidence answers) and retrieval quality (surface relevance scores so the model can reason about them).

The goal is not just "model has access to documents." It's "model reasons transparently from documents, cites what it uses, and flags when it doesn't have what it needs."

## Just-in-Time Loading

Anthropic's recommended pattern: don't load everything upfront. Maintain lightweight references — file paths, document IDs, URLs — and load actual content via tools only when the model determines it's needed.

The naive approach is to stuff all potentially relevant documentation into the system prompt before the conversation starts. This bloats the context window immediately, buries relevant information in noise, and costs tokens whether or not the model ever needed that knowledge.

The just-in-time alternative: give the model a `search_docs` tool. When it needs information, it retrieves it. The initial context stays lean. The model decides what's relevant based on the actual task at hand, not what an engineer predicted might be useful.

This is progressive disclosure applied to knowledge — the same principle that governs good instruction layering, applied to data. Don't front-load. Let the model pull what it needs.

The practical implication: design your tool interfaces so retrieval is cheap and fast. If calling a search tool is slow or unreliable, the model will hit friction every time it needs to look something up, and you'll be tempted to fall back to front-loading context to compensate.

**Cursor's dynamic context discovery.** Cursor published their implementation of this pattern in detail (January 2026, discussed on HN). Their approach uses five techniques: (1) long tool outputs are written to files rather than truncated, letting agents use `tail` or `grep` to retrieve what they need progressively; (2) when context windows fill and summarization occurs, agents reference saved chat history files to recover lost details; (3) skill descriptions are listed minimally, with agents discovering full details via search when relevant; (4) MCP tool descriptions sync to folders by server, with agents seeing only names initially — this reduced token usage by 46.9% in A/B tests; (5) terminal outputs are written to the filesystem so agents can grep specific results rather than consuming raw output. The common thread: write everything to disk, load only what's needed. This is just-in-time loading as a fully implemented product feature, not a theoretical pattern.

## April 2026 Addendum

### Agentic RAG and Autonomous Retrieval
Traditional RAG has evolved into **Agentic RAG**. Instead of a fixed search triggered by software, the AI agent now assesses whether it has enough information to proceed and autonomously decides *when* and *where* to retrieve more data. This reduces context pollution by only fetching information when the model confirms a knowledge gap.

### Dynamic Context Injection (DCI)
DCI is the pattern of automatically injecting real-time environmental signals (e.g., a customer's current subscription status, current server load, or the latest API schema version) into the context window just before a critical reasoning step. This ensures the model is grounded in the most current reality, rather than relying on potentially stale information from the start of the session.

## Intent Debt

Technical debt captures code that's hard to maintain. **Intent debt** captures something different: the accumulation of design decisions that were never written down and that neither agents nor future engineers can reason about.

**The Triple Debt Model.** Margaret-Anne Storey's framework (2026) distinguishes three independent forms of debt: *technical debt* lives in code (tangled modules, implementation shortcuts), *cognitive debt* lives in people (the growing gap between code volume and human understanding — Osmani's "comprehension debt"), and *intent debt* lives in artifacts. The critical word is *externalized*: intent has to be written down where an agent, a new teammate, or a future you can read it. These three debts are independent of each other. You can have pristine code (low technical debt) that no one fully understands (high cognitive debt) whose design rationale has never been captured anywhere (high intent debt). Each bills you separately.

Intent debt has always been expensive. Agentic development makes it compound faster: un-externalized intent used to cost you at onboarding or when someone left. Now you pay it every session, multiplied by every agent you run. An agent that starts cold fills every gap in your written intent with a confident-sounding guess — and the orchestration tax (see [Agentic Development](agentic-dev.md)) is partly an intent debt tax. Much of what makes managing many agents exhausting is re-supplying context you never externalized in the first place.

When an agent makes a change — locally correct, tests passing, code clean — but violates an unstated design principle, it doesn't fail. It succeeds in a way that creates invisible technical debt. The next agent has no signal that anything went wrong. The problem compounds.

Intent debt grows faster with agents than with humans for two reasons. First, agents make more changes per session than individual engineers, accelerating the accumulation rate. Second, agents are less likely to pause and ask "why does this pattern exist?" — a human reviewer might notice an architectural anomaly and dig; an agent treats the existing code as normative.

The knowledge layer is where intent debt surfaces. A knowledge base that captures *what* is true (API shapes, data models, code structure) but not *why* those decisions were made (what they protect against, what tradeoffs they encode) leaves agents operating on code they can read but not fully reason about. The result: locally-correct changes that slowly violate the reasoning behind the code.

**The mitigation is explicit intent documentation:**
- Architecture Decision Records (ADRs) that capture the decision, context, and consequences — not just the outcome
- Annotated specs that explain constraints alongside requirements
- Decision logs written during implementation, not retrospectively
- Comments that document the "why" for non-obvious patterns — specifically the kind of decision an agent would most plausibly get wrong seeing only the code

Intent documentation doesn't need to be comprehensive. It needs to cover the decisions where "locally correct but globally wrong" is a plausible failure mode. A one-paragraph ADR preventing a class of agentic errors is worth more than fifty lines of code comments on behavior that's already obvious from reading the code.

See [Agentic Development](agentic-dev.md) for the "filesystem as context" pattern — keeping intent documentation in version-controlled files that agents can load when relevant, rather than relying on institutional memory that doesn't survive context resets.

---

## Anti-Patterns

**Context pollution.** Retrieving too much drowns signal in noise. Philipp Schmid found in Part 2 of his context engineering series that removing retrieved context sometimes improved output quality — the noise was worse than no context at all. More retrieval is not always better. The question is always relevance, not volume.

**RAG as a silver bullet.** RAG cannot fix bad chunking, poor indexing, or missing data. If the information isn't in your index, retrieval won't find it. If your chunks split logical units at the wrong boundaries, retrieval will return incomplete or misleading fragments. Blame the pipeline before blaming the model.

**Retrieving too little.** Being overly aggressive with filtering forces the model to hallucinate to fill gaps. If you're confident your retrieval is so good that you can use a high relevance threshold and surface only a handful of chunks, verify that confidence empirically.

**Static retrieval.** Retrieving the same documents regardless of the query is not RAG — it's just prepending a static block of text. Real retrieval is dynamic and query-dependent. If your "retrieval" step ignores the query, you don't have retrieval.

## Actionable Steps

1. **Evaluate retrieval quality before blaming the model.** Sample 20-50 representative queries, inspect the retrieved chunks, and ask whether a human would find them relevant. If they're not relevant, fix chunking or indexing. This is the most common diagnostic gap — engineers blame model output when the root cause is retrieval quality.

2. **Measure context pollution with A/B testing.** Run queries with and without retrieved context. If adding retrieval doesn't improve output — or actively degrades it — you have a retrieval quality problem, not a model problem.

3. **Default to hybrid search.** Start with a combination of semantic and keyword retrieval. Pure vector search has enough failure modes on exact matches and identifiers that hybrid is the safer default, especially for technical content.

4. **Load via tools, not upfront injection.** Give the model a retrieval tool and let it pull what it needs. Reserve system prompt knowledge for things that are always relevant: core instructions, persona, constraints. Everything else should be retrievable.

5. **Monitor and tune chunk sizes.** If retrieved chunks consistently lack surrounding context (too small) or consistently include irrelevant material (too large), adjust. There's no universal correct chunk size — it depends on your documents and your queries. Treat it as a tunable parameter, not a one-time decision.

---

## Learn on the go

- **Podcast:** [Retrieval After RAG: Hybrid Search, Agents, and Database Design — Latent Space](https://www.latent.space/p/turbopuffer) *(March 12, 2026)*. Simon Hørup Eskildsen (Turbopuffer) on how agentic workloads are changing search — agents fire many parallel queries instead of one, which reshapes this page's retrieval guidance.
- **Podcast:** [Agentic RAG: A New Paradigm in AI Retrieval — Don't Panic! It's Just Data](https://podcasts.apple.com/us/podcast/dont-panic-its-just-data/id1229119513) *(June 2, 2026)*. The enterprise knowledge-layer angle: agent-driven retrieval strategies replacing static RAG pipelines.
