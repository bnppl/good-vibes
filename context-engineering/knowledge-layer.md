---
last_updated: 2026-04-06
last_read: 2026-04-06
status: read
---

# The Knowledge Layer: RAG, Retrieval, and Just-in-Time Loading

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
