"""Rebuild the pipeline catalogue from reviewed mappings and cached profile claims.
Requires PyYAML. Run from any directory; does not fetch or infer private tool use.
"""
import json, pathlib, yaml
ROOT = pathlib.Path(__file__).resolve().parents[2]
STAGES = [
 ('define','Define the work','Clarify the outcome, requirements and acceptance contract.'),
 ('plan','Plan & coordinate','Split work, choose ownership and schedule agent execution.'),
 ('context','Supply context','Provide project knowledge, instructions, skills and durable state.'),
 ('build','Implement','Use coding agents, developer tools and executable environments.'),
 ('verify','Verify behaviour','Exercise code, tests, browsers, structural rules and security checks.'),
 ('review','Review & understand','Inspect the result, recover understanding and make acceptance decisions.'),
 ('ship','Integrate & release','Gate merges, repair CI, deploy and check the integrated result.'),
 ('learn','Observe & improve','Use production feedback, failures, cost and quality to improve the loop.'),
 ('platform','Harness & access','Cross-cutting orchestration infrastructure, isolation and permissions.'),
]
profiles={}
for kind in ['engineers','companies']:
 for p in sorted((ROOT/kind).glob('*/index.md')):
  d=yaml.safe_load(p.read_text().split('---')[1])
  if not d.get('dimensions'): continue
  profiles[kind+'/'+p.parent.name]={'name':d['canonical_name'],'kind':'individual' if kind=='engineers' else 'company','path':kind+'/'+p.parent.name,'summary':d.get('tools_summary',''),'dimensions':{c['id']:c for c in d['dimensions']}}
items={}
def add(stage,typ,label,usage,refs):
 key=stage+'|'+label
 assert key not in items,key
 observations=[]
 for ref in refs.split():
  ident,dim=ref.rsplit(':',1); kind='companies' if ident.startswith('@') else 'engineers'; ident=ident.lstrip('@'); eid=kind+'/'+ident
  p=profiles[eid]; c=p['dimensions']['D'+dim.zfill(2)]
  assert c['source'] and c['evidence_kind']!='Not established',(label,ref)
  observations.append({'entity':eid,'claim':c['position'],'kind':c['evidence_kind'],'published':str(c['published']),'practice':str(c['practice_date']),'checked':str(c['checked']),'qualification':c['qualification'],'source':c['source'],'detail':'/'+eid+'/'+c['detail'].replace('.md','.html'),'register':'/'+eid+'/sources.html#'+c['source_id'].lower(),'format':c.get('source_format','')})
 items[key]={'id':stage+'-'+str(sum(i['stage']==stage for i in items.values())+1),'stage':stage,'type':typ,'name':label,'usage':usage,'observations':observations}
# Explicitly reviewed classification. Stage placement is our index, never an asserted company-wide pipeline.
add('define','process','Conversational clarification','Develop intent through questions and concrete scenarios before implementation.','armin-ronacher:2 peter-steinberger:2 @github:2 gene-kim:2')
add('define','tool','Browser annotations & live previews','Specify changes directly on a rendered artifact.','jason-liu:2 simon-willison:2')
add('define','process','Human-owned acceptance scenarios','Make behaviour explicit; retain a human acceptance contract. These sources describe different test arrangements.','dave-farley:2 robert-c-martin:2 martin-fowler:2')
add('define','process','Reference implementations & parameterised prompts','Supply an existing implementation and explicit rules for a repeatable internal-tooling task.','@coinbase:2')
add('define','tool','PRD Evaluator','Critique product requirements before expert approval.','@uber:2')
add('define','process','Issue specifications & readiness scouts','Resolve ambiguous product decisions and check whether an issue is ready for implementation.','@posthog:2 @posthog:3')
add('define','process','System invariants & compatibility contracts','State the semantics the generated implementation must preserve.','@datadog:2 @37signals:2 @block:2')
add('define','process','Spec-first / spec-anchored / spec-as-source trials','Compare ways a specification relates to implementation. The published retrospective describes September 2025 trials.','birgitta-bockeler:2')
add('define','skill','Specification interviewing & recording','Separate discovery questions from settled decisions; skip unnecessary ceremony for small changes.','matt-pocock:2')
add('define','process','Governed standards checks','Review specifications against relevant organisational standards.','@cloudflare:2')
add('plan','process','Small supervised increments','Keep implementation changes understandable, with checkpoints and human steering.','addy-osmani:3 @monzo:3 @github:3')
add('plan','skill','Thin tickets with dependency edges','Break a specification into independently verifiable paths suitable for fresh sessions.','matt-pocock:3')
add('plan','skill','implement-spec','Dispatch dependency-ready tickets into worktrees, then review the assembled branch.','matt-pocock:7')
add('plan','harness','Lights-on software factory','Schedule worker, gate and check roles from an approved plan; use declared writable files and green groups. Published design, not a reproduced run.','gojko-adzic:3 gojko-adzic:7')
add('plan','harness','Augment Intent','Coordinate implementer and verifier roles in a sponsored Go radix-tree session.','kent-beck:9')
add('plan','harness','Mux','Separate concurrent sessions by worktree, branch and terminal.','@coinbase:7')
add('plan','harness','Fleetshift','Coordinate background agent sessions for maintenance and migration.','@spotify:7')
add('plan','harness','Gas Town → Wheelhouse','Keep Yegge’s January fleet tooling separate from the later bespoke, private Wheelhouse account.','steve-yegge:7')
add('plan','harness','Temporal workflows','Use retryable activities to coordinate multi-step coding workflows.','@duolingo:7')
add('plan','process','Parallel terminal sessions','Run parallel agents with human steering; this does not imply identical checkout isolation.','peter-steinberger:7 harper-reed:7')
add('plan','process','Plan → scaffold → focused slices','Approve the plan and common structure before implementing components.','@coinbase:3')
add('plan','harness','Tern migration phases','Learn, create a guide, audit readiness, then execute scoped extraction work.','@grafana-labs:3')
add('context','skill','Versioned project skills','Encode reusable project knowledge. Team libraries and a practitioner’s personal continuity scheme have different scopes.','@block:8 @zalando:8 @posthog:8')
add('context','skill','Agent Scripts & repo-owned skills','Use canonical shared instructions and repository-owned skills.','peter-steinberger:8')
add('context','skill','Composable engineering skills','Publish composable skills with repository setup instructions; inspection does not establish runtime compatibility.','matt-pocock:9')
add('context','process','Scoped repository rules','Load task-relevant rules and retrieved context instead of all available guidance.','@stripe:2 @stripe:8')
add('context','process','Repository instruction files','Map architecture, commands and project conventions into agent-readable repository context.','@microsoft:8 @github:8 @gitlab:8')
add('context','tool','Obsidian vault','Keep explicit memory versioned outside recurring Codex conversations.','jason-liu:8')
add('context','process','Structured task records & handoffs','Persist plans, work items and progress outside a single chat. These are distinct implementations.','gojko-adzic:8 robert-c-martin:8 steve-yegge:8')
add('context','process','Pi session branches & local task records','Retain local task state and review context.','armin-ronacher:8')
add('context','process','Interrogatory LLM','Ask the model to interview the human to elicit context. The linked field also mentions separate decision-record guidance.','martin-fowler:8')
add('context','process','Versioned rules, templates & prompts','Treat reusable agent inputs as reviewed engineering assets.','@coinbase:8')
add('context','process','Shared organisational context','Separate repository knowledge from organisational documentation and operational context.','@cloudflare:8 @monzo:8 @shopify:8')
add('context','process','Migration guides improved from failures','Feed extraction failures back into guidance for subsequent migrations.','@grafana-labs:8')
add('context','tool','Per-file / per-PR external state','Preserve cooldown, retry and abandonment records outside chat.','@duolingo:8')
add('build','tool','Claude Code','Named coding use or cohort access. Read each case for the task and date; these are not universal installed stacks.','gene-kim:9 hamel-husain:9 harper-reed:9 david-heinemeier-hansson:9 @mozilla:9 @datadog:9 @microsoft:9')
add('build','tool','Codex','Voice-led coding and recurring workstreams; distinct from Cloudflare’s internal Engineering Codex.','simon-willison:9 jason-liu:9')
add('build','tool','Copilot CLI','Named CLI use at GitHub; Microsoft’s study covers a separate access cohort.','@github:9 @microsoft:9')
add('build','tool','VS Code','Editor named in GitHub’s internal development account.','@github:9')
add('build','tool','Cursor','Named personal workflow, designer changes and shadow-platform work.','hamel-husain:9 @monzo:9 @datadog:9')
add('build','tool','Amp','Named in Husain’s January 2026 coding workflow. His AI-product evaluation work is outside this catalogue.','hamel-husain:9')
add('build','tool','OpenCode','DHH’s supervised personal workflow; not evidence that every 37signals engineer uses it.','david-heinemeier-hansson:9')
add('build','tool','Grok TUI','September 2026 interview-page account, with Codex and Claude explicitly described as prior use.','robert-c-martin:9')
add('build','tool','Pi + Codemode / MCP','Compose tool operations in a dated personal Pi account.','armin-ronacher:9')
add('build','tool','GitLab Duo, Claude & GitLab MCP','Named in pinned DevEx team guidance; declared policy rather than an inspected private installation.','@gitlab:9')
add('build','tool','Blink, Tailscale & tmux','Access and manage remote terminal coding sessions.','harper-reed:9')
add('build','environment','Remote Dev & River','Exercise iOS and Android environments with remote mobile agents.','@shopify:9 @shopify:7')
add('build','tool','Codex CLI / Claude Code SDK wrapper','Expose reusable coding operations through a shared workflow library.','@duolingo:9')
add('build','tool','hogli & cloud dev environments','Make developer commands, checks and evidence collection executable for agents.','@posthog:9')
add('build','environment','Docker / make factory environment','Documented setup and Claude Code commands for the public factory artifact.','gojko-adzic:9')
add('build','harness','Minions','Use a custom harness in isolated devboxes for bounded tasks.','@stripe:9')
add('verify','process','Red-green TDD & acceptance contracts','Use failing examples before implementation. Recommendation, published skill and factory instructions remain separate evidence categories.','dave-farley:4 simon-willison:4 matt-pocock:4 gojko-adzic:4')
add('verify','process','Agent-loop TDD experiments','Compare human checkpoints with agent-internal TDD; narrow results do not establish a universal winner.','birgitta-bockeler:4')
add('verify','process','Tests after implementation','Generate tests after building the feature while retaining session context. This account is not test-first.','peter-steinberger:4')
add('verify','tool','ESLint, Semgrep & dependency-cruiser','Apply structural sensors alongside types and mutation testing in Böckeler’s dashboard experiments.','birgitta-bockeler:9')
add('verify','process','Unit tests, CRAP & mutation checks','Challenge generated behaviour and test quality; September Martin practice relaxed some earlier constraints.','robert-c-martin:4')
add('verify','tool','Playwright','Run realistic browser system tests in Lexxy’s development loop.','@37signals:4')
add('verify','process','Browser-driven QA','Collect observable behaviour before review, alongside CI.','@posthog:4')
add('verify','process','Existing tests as a migration oracle','Use preexisting behaviour and E2E tests during a port; the Rich-to-Rust trial does not establish successful completion.','jason-liu:4 @github:4 armin-ronacher:4')
add('verify','process','Lint, types, formatting & targeted tests','Run cheap deterministic checks; tool choice and coverage depend on the individual case.','@coinbase:4 @block:4')
add('verify','process','Independent verifiers before PR creation','Run restricted verification separately from implementation.','@spotify:4')
add('verify','process','Executable security reproductions','Require reproducible evidence for a candidate vulnerability instead of a plausible report.','@mozilla:4 @shopify:4')
add('verify','process','Risk-specific command / replication / performance checks','Published redis-rust instructions vary verification with the change. This is a research artifact, not a production database endorsement.','@datadog:4')
add('verify','process','Distribution checks after extraction','Use manual package/distribution verification alongside existing E2E tests.','@grafana-labs:4')
add('verify','environment','Preview deployments','Let agents and people inspect proposed frontend changes.','@zalando:4')
add('review','skill','Standards review & specification review','Review at a fixed diff point, separating engineering standards from specification conformance.','matt-pocock:6')
add('review','tool','Oracle & agent review helpers','Published second-opinion integrations; no claim of a complete current personal installation.','peter-steinberger:9')
add('review','harness','OpenCode-based specialist review','Combine bounded specialist review sessions under a coordinator.','@cloudflare:7')
add('review','process','Human domain and architectural review','People retain judgment about domain logic, architecture and cross-system effects.','@coinbase:6 @datadog:6 @cloudflare:6')
add('review','process','Agent review followed by human acceptance','Automated feedback supplements human review rather than granting automatic release authority.','@github:6 @posthog:6 @stripe:6')
add('review','process','Above-code supervision & selective reading','These dated personal accounts select what to inspect rather than establishing one universal review policy.','robert-c-martin:6 peter-steinberger:6 david-heinemeier-hansson:6')
add('review','process','Browser annotations for visual review','Review a visual artifact with contextual feedback.','jason-liu:6')
add('review','process','Walkthroughs & interactive explanations','Recover understanding of agent-produced code; recommendation rather than a universal recorded practice.','simon-willison:6')
add('ship','process','Bounded CI repair','Run deterministic local checks, then limit expensive CI attempts.','@stripe:4 @stripe:12')
add('ship','process','Actionable CI autofixes','Initiate bounded autofixes and promote validated drafts only if the source branch is unchanged.','@block:7 @block:10')
add('ship','process','CI-driven Swift repair & lifecycle manager','Use CI where Linux workers cannot build Swift locally; reviewers approve before the described auto-merge workflow.','@duolingo:4 @duolingo:6 @duolingo:10')
add('ship','process','Risk-based bot approval','Low-risk PRs can get bot approval while authors decide whether to merge. Medium-risk compatibility changes need another human.','@zalando:10 @zalando:6')
add('ship','process','Post-merge closure on repository head','Recheck that remediation is actually closed after merge, instead of relying on a stale patch or CI result.','@shopify:10')
add('ship','process','Human commit / consequential-action boundary','Keep commits or account-changing actions under explicit human decisions. These are different policies, not equivalent enforcement.','gene-kim:10 jason-liu:10')
add('ship','process','Human-reviewed PR integration','Maintain explicit review and correction before accepting generated work.','simon-willison:10 @stripe:10 @gitlab:10')
add('ship','process','Owning-team release responsibility','Keep production deployment or uncovered migration checks with the responsible engineers.','@monzo:10 @spotify:10')
add('ship','process','Incremental mainline migration','Ship compatibility-preserving port changes incrementally.','@github:10')
add('ship','process','Verified optimization & shadow gates','The Unicron optimization account describes shadow-gated changes, separate from Datadog’s other projects.','@datadog:7 @datadog:10')
add('ship','process','Independent plugin releases','Extract plugins, release them independently, and rebundle into distributions.','@grafana-labs:10')
add('learn','process','Production observation','Instrument changes and inspect operational behaviour. This is Majors’ guidance, not a documented private agent setup.','charity-majors:4 charity-majors:10')
add('learn','process','Production failures fed back into fixes','Hot Cell rollout exposed real failures that changed the library.','@37signals:10')
add('learn','process','Outcome, cost & quality measurement','Track cost and engineering outcomes while retaining causal and proxy limitations.','@uber:12 @monzo:12 @microsoft:12 @coinbase:12')
add('learn','process','PR size, reverts, CI cost & complexity','Watch downstream delivery and maintainability effects as generated output increases.','@posthog:12 @zalando:12')
add('learn','process','Known-defect PR benchmarks','Compare reviewer models against actual PRs with known bugs.','@uber:4')
add('learn','process','Session retrospectives & configuration audits','Use session evidence to select environment improvements; assess whether configuration earns its cost.','matt-pocock:12 addy-osmani:12')
add('learn','process','Migration and CLI failure analysis','Account for platform-building work and inspect where agents misunderstand capabilities.','@block:12 @grafana-labs:12')
add('platform','harness','Minions blueprints','Interleave deterministic operations with model reasoning; this is not an unconstrained agent loop.','@stripe:7')
add('platform','environment','Isolated devboxes & QA-only access','Constrain the execution environment and available resources.','@stripe:9 @stripe:11')
add('platform','harness','Agent Chip','Route one-shot jobs and isolate agent bundles behind a restricted external-access proxy.','@monzo:7 @monzo:11')
add('platform','process','Deterministic credential, Git & storage operations','Keep consequential infrastructure operations outside model discretion in the AppSec harness.','@shopify:11')
add('platform','tool','Model access gateways','Shared routing and access controls; Cloudflare Access/AI Gateway and Zalando’s proxy are separate implementations.','@cloudflare:11 @zalando:9')
add('platform','tool','MCP authentication gateway / helpers','Authenticate and govern external tool access rather than embedding static credentials.','@uber:11 @zalando:11')
add('platform','process','Restricted shell & Git tools','Explicitly constrain agent tool operations in the dated migration design.','@spotify:11')
add('platform','tool','Role-scoped Bash regulator & lint hooks','Published factory controls. Hook instructions are not proof of complete isolation.','gojko-adzic:11')
add('platform','environment','OpenClaw virtual-machine experiment','Isolate a personal assistant experiment from personal logins and data. This is not DHH’s normal coding-agent environment.','david-heinemeier-hansson:11')
add('platform','process','Containment and prompt-injection exercises','Test the environment boundary; Harper’s credential exposure is a failure case, not a validated safeguard.','harper-reed:11 @block:11')
add('platform','harness','Shared agent wrapper','Standardize interactive agent configuration and cost visibility.','@uber:9')
add('context','tool','Toolshed MCP','The Stripe cache names Toolshed as the tool-access layer for Minions. The linked context claim describes its task-scoped use, not a public install recipe.','@stripe:2')
add('platform','environment','World & reproducible environments','Shopify’s River infrastructure supports repeatable development. The May account retrospectively includes work beginning in 2024.','@shopify:5')
add('verify','harness','Dispatch','Partition security hunting, then require executable verification before proposed remediation.','@shopify:3 @shopify:4')
add('build','harness','Honk / Claude Code','Run coding work through Spotify’s existing developer platform. This is distinct from fleet-level orchestration.','@spotify:9')
add('build','harness','goose-derived migration runtime','Block’s runtime evolved around TypeScript diagnostics and targeted Jest checks; this is a dated migration history.','@block:9')
add('plan','skill','/impact-analysis → /plan-execution','Published factory commands prepare an impact analysis and execution plan before execution.','gojko-adzic:9')
add('build','skill','/execute','Published factory command executes an approved plan inside the documented Claude Code setup.','gojko-adzic:9')
add('platform','process','Governed context programme','JPMorgan leaders recommend curated context; detailed internal implementation is not established.','@jpmorgan-chase:8')
add('define','tool','Kiro, spec-kit & Tessl','Böckeler’s specification-workflow investigation: September 2025 trials, published in October. Evaluation does not establish current adoption.','birgitta-bockeler:2')
add('context','tool','Engineering Codex (Cloudflare)','Governed internal engineering standards used in specification review. This is not the OpenAI Codex product.','@cloudflare:2')
add('context','tool','S3 workflow state','The Duolingo cache names S3 alongside external per-file and per-PR retry records. This is orchestration state, not application persistence.','@duolingo:8')
add('platform','environment','Nix substrate','Reproducible shared environment infrastructure behind Shopify’s World / River account. Not a claim that every team uses one identical pipeline.','@shopify:5')
add('platform','tool','Backstage','Spotify runs Honk within its existing developer platform. Public Backstage does not publish every private Honk component.','@spotify:9')
add('review','tool','ReviewHog / Codex review','PostHog’s named fix used agent reviews, human approval and a human merge command. No company-wide replacement of human review is established.','@posthog:6')
add('build','process','Model switching in terminal harnesses','DHH’s January account switches models within terminal agents; this does not establish an October default or universal model ranking.','david-heinemeier-hansson:9')
add('build','tool','Next.js','Husain’s January account names a conventional web stack selected to work smoothly with coding assistants.','hamel-husain:9')
# Add undated public artifacts without laundering their inspection date into publication.
def artifact(stage,typ,label,usage,entity,url,register,claim):
 key=stage+'|'+label
 assert key not in items
 items[key]={'id':stage+'-'+str(sum(i['stage']==stage for i in items.values())+1),'stage':stage,'type':typ,'name':label,'usage':usage,'observations':[]}
 items[key]['observations']=[{'entity':entity,'claim':claim,'kind':'Published artifact','published':'Not established; mutable, unpinned repository','practice':'Not established; README inspected, not executed','checked':'2026-10-26','qualification':'No immutable revision captured. No installation or runtime effectiveness test. This does not establish daily adoption.','source':url,'detail':'/'+entity+'/tools.html' if 'addy-osmani' in entity else '/'+entity+'/sources.html#'+register,'register':'/'+entity+'/sources.html#'+register,'format':'Official README'}]
artifact('context','skill','Agent Skills lifecycle commands','Published /spec, /plan, /build, /test, /review and /ship commands; shown separately because publication dates are not established.','engineers/addy-osmani','https://github.com/addyosmani/agent-skills','s11','The inspected collection publishes lifecycle guidance; the tools chapter documents its commands.')
artifact('verify','tool','Rodney','Published Chrome-automation CLI with persistent sessions and browser interaction commands.','engineers/simon-willison','https://github.com/simonw/rodney','s13','Official README documents browser automation; publication date and a personal usage session are not established by this record.')
artifact('review','tool','Showboat','Publish Markdown demonstrations with executed commands, captured output and a re-execution verifier.','engineers/simon-willison','https://github.com/simonw/showboat','s16','Official README documents executable demonstrations. The separate walkthrough guide describes an author example but is undated.')
for stage,command in [('define','/spec'),('plan','/plan'),('build','/build'),('verify','/test'),('review','/review'),('ship','/ship')]:
 artifact(stage,'skill','Agent Skills '+command,'A command in Osmani’s published lifecycle collection. Namespaced forms may be needed where host commands collide; no execution or adoption claim.','engineers/addy-osmani','https://github.com/addyosmani/agent-skills','s11','The tools chapter records '+command+' in the inspected README command table.')
# Beads is a published ecosystem artifact, not evidence of current private Wheelhouse internals.
artifact('context','tool','Beads','Persistent work graph and project context, created by Yegge and now maintained by gastownhall. Public artifact, not proof of a current private deployment.','engineers/steve-yegge','https://github.com/gastownhall/beads','s04','The inspected tools chapter records bd ready/show/update/close/prime and the public work graph.')
items['context|Beads']['observations'][0]['detail']='/engineers/steve-yegge/tools.html'
items['context|Beads']['observations'][0]['qualification']='Living README inspected, not executed. The source register records a README history commit; the link here is mutable. No claim of current private deployment.'
result={'schema':1,'title':'Agentic engineering pipeline atlas','reviewed':'2026-10-27','cacheDate':max(o['checked'] for i in items.values() for o in i['observations']),'since':'2025-10-01','stages':[{'id':i,'name':n,'description':d} for i,n,d in STAGES], 'types':['tool','skill','process','harness','environment'],'entities':[{k:v for k,v in p.items() if k!='dimensions'}|{'id':eid,'observations':sum(o['entity']==eid for x in items.values() for o in x['observations'])} for eid,p in profiles.items()], 'items':list(items.values())}
(ROOT/'assets/pipeline-catalog.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
# A complete readable, searchable non-JavaScript companion.
lines=['---','title: Pipeline evidence catalogue','nav_exclude: true',"last_updated: '2026-10-27'",'---','','# Pipeline evidence catalogue','','[Open the interactive atlas](index.html)','','Reviewed all 20 engineer and 20 company caches. This is a stage index, not a claim that any person or team follows the combined pipeline. Sources were checked in the underlying research on 26–27 October 2026; this catalogue does not revalidate current installations. Prioritises publications from 1 October 2025. Undated public artifacts remain explicitly labelled. AI-product evaluation and our hypothetical practice exercises are excluded. A retrospective publication may describe older work.','','Tool names are attributed only within the named case. “Published artifact” means published by or associated with the subject, not proof of use. Declared policy and advice are not treated as observed practice. Internal harnesses are not necessarily available to install.','']
for stage,name,desc in STAGES:
 lines+=['## '+name,'',desc,'']
 for item in items.values():
  if item['stage']!=stage:continue
  lines+=['### '+item['name'],'',item['type'].title()+'. '+item['usage'],'']
  for o in item['observations']:
   p=profiles[o['entity']];lines += ['- **'+p['name']+' · '+o['kind']+'** — '+o['claim']+' [Primary evidence]('+o['source']+') · [Cached claim](../'+o['detail'].lstrip('/').replace('.html','.md')+'). Publication/revision: '+o['published']+'. Practice: '+o['practice']+'. Limit: '+o['qualification']]
  lines+=['']
lines+=['## Coverage and gaps','','All 40 profiles were reviewed. Missing observations indicate a gap in this curated, coding-focused index, not that the subject does not use AI.','']
for e in result['entities']:
 lines+=['- ['+e['name']+'](../'+e['path']+'/index.md): '+str(e['observations'])+' indexed evidence associations. '+e['summary']]
(ROOT/'pipeline/catalogue.md').write_text('\n'.join(lines)+'\n')
print(f"{len(profiles)} profiles, {len(items)} entries, {sum(len(i['observations']) for i in items.values())} evidence associations")
