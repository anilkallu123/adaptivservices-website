# Adaptiv Services — LinkedIn Content Calendar
**4 Series · 20 Posts · ~5 months of weekly content**

Existing posts cover Oracle / cloud infrastructure heavily.
These series fill the gap: AI, ERP truth, engineering culture, Norwegian compliance.

---

## SERIES 1: "ERP TRUTH" (6 posts)
*Real talk from the engineers who've run Europe's largest D365 implementations.*
*Theme: D365, AX migrations, the real cost of ERP programmes.*
*Cadence: every 2 weeks. Tie each post to the Alfa Laval / Sector Alarm case studies.*

---

### POST 1 — The ERP stat nobody talks about

Most ERP projects don't fail at go-live.

They fail 18 months before it.

In our experience across 8-country D365 rollouts, the damage is done the moment a programme chooses the wrong metric to track. Teams measure tickets closed, milestones hit, and workshops run.

None of those tell you whether the business will actually work on day one.

The metric that matters: how many open FDDs (Functional Design Documents) still haven't had a business sign-off?

One unsigned FDD is a future support escalation.
Ten unsigned FDDs is a failed go-live waiting to happen.

We've seen programmes with 200+ open FDDs three months before cutover. The sponsor didn't know. The steering committee didn't know. The project manager was tracking RAG status — green across the board.

What would you add to the ERP warning sign list?

#D365 #ERP #DigitalTransformation #MicrosoftDynamics #ERPImplementation

---

### POST 2 — Why "phased rollout" kills more ERP programmes than big bang

Counterintuitive, but true.

Everyone recommends phased rollouts. Start with one country, learn, then scale.

The problem: the lessons from Country 1 almost never make it into Country 2.

Here's why:
→ The team that ran Country 1 gets redeployed
→ The documentation isn't written — everyone was too busy
→ The country template gets "adapted" by the next SI, creating drift
→ By Country 4, you're running four slightly different ERP systems on one platform

We fixed this at Sector Alarm across 8 countries by doing one thing differently:

Before any country go-live was declared complete, we ran a mandatory template lock review — a structured session where every change to the global template was either absorbed into the standard or rejected. No exceptions.

It slowed down Country 1 by three weeks. It saved Country 3 through 8 entirely.

The best ERP rollout strategy isn't big bang or phased. It's phased with ruthless template governance.

What's your experience with multi-country ERP rollouts?

#D365 #ERPStrategy #MultiCountryRollout #MicrosoftDynamics #EnterpriseERP

---

### POST 3 — The ISV problem nobody budgets for

You buy D365.
You then buy 3 ISV add-ons to fill the gaps.
You then spend 40% of your support budget managing ISV upgrade conflicts.

We see this every time.

The ISV problem is never about the initial purchase. It's about what happens on upgrade day.

Microsoft releases two major D365 updates a year. Each ISV has its own release cadence. If those don't align, you're either:
a) Delaying your Microsoft upgrade (and falling behind on security patches)
b) Running an untested ISV version in production
c) Paying your SI for an unplanned regression test cycle

At Sector Alarm, we managed four ISVs — Lasernet, XPLUS, Cegeka, and Arquiconsult. We built an ISV governance calendar that aligned every vendor's release to the Microsoft upgrade window. Before any ISV upgrade was approved, it went through a structured impact assessment and sign-off.

Zero unplanned ISV-related outages over five years.

The fix isn't to buy fewer ISVs. It's to govern them like the production dependencies they are.

#D365 #MicrosoftDynamics #ERP #ISV #ERPGovernance

---

### POST 4 — What a good FDD actually looks like (and what a bad one costs you)

An FDD is not a description of what the system does.

An FDD is a contract between the business and the development team about what the system *will* do, *why*, and *what happens when it doesn't*.

We've reviewed hundreds of FDDs across D365 programmes. The bad ones all share the same five problems:

1. Written by the developer, not the functional consultant
2. No "as-is" process documented — just the to-be
3. No exception scenarios — only the happy path
4. No acceptance criteria — just a description
5. Not signed by a business owner — only IT

A bad FDD produces a technically correct solution that the business can't use.

The cost: rework in the most expensive place possible — post-go-live production.

A good FDD takes two more hours to write. It saves two weeks of hypercare.

What's the worst FDD sin you've seen in the wild?

#D365 #ERP #FunctionalDesign #MicrosoftDynamics #ERPDelivery

---

### POST 5 — AX2012 to D365: the migration trap everyone falls into

The trap: treating it as a technical upgrade.

It isn't. It's a reimplementation.

AX2012 and D365 Finance & Operations share a brand name and some functional concepts. The architecture, data model, and customisation framework are fundamentally different.

Teams that approach it as an upgrade ask: "How do we move our AX2012 customisations to D365?"

Teams that succeed ask: "Which of our AX2012 customisations should we *not* carry forward — and why?"

On one programme (Europe-wide, global manufacturing), we catalogued 340 AX2012 customisations. After a structured fit/gap review, 180 were either covered by standard D365 functionality or solved a problem the business no longer had.

The 160 we kept were cleaner, better documented, and cheaper to maintain.

The best thing an AX2012 migration can do is not migrate half its customisation backlog.

Has your team had this conversation before starting the migration?

#AX2012 #D365 #ERPMigration #MicrosoftDynamics #DigitalTransformation

---

### POST 6 — The real reason ERP go-lives slip

It's not the software.
It's not the system integrator.
It's not even the budget.

It's the data.

In every slipped go-live we've investigated, the root cause traces back to one decision made 6–9 months earlier: the data quality assessment was treated as a low-priority task assigned to a junior resource.

Data migration is not a workstream you run parallel to the functional build. It *is* the functional build. A D365 Finance module with uncleaned chart of accounts data, duplicate vendor records, or inconsistent currency codes will break on day one regardless of how good the configuration is.

What good data governance looks like on a D365 programme:
→ Data quality assessment starts in month 1, not month 8
→ A senior functional lead owns data — not a data analyst
→ Every mock cutover includes a Finance Director trial balance sign-off
→ Go/No-Go gate: data readiness, not just functional readiness

We've seen this extend programmes by 3–6 months. We've also seen it prevent that outcome entirely.

Where does data migration sit in your ERP programme hierarchy?

#D365 #ERPMigration #DataMigration #MicrosoftDynamics #ERPGovernance

---

## SERIES 2: "AI THAT SHIPS" (5 posts)
*Practical AI for enterprise — what works, what's hype, and what we've actually deployed.*
*Theme: LLM integrations, RAG, ML pipelines in regulated industries.*
*Cadence: every 2 weeks.*

---

### POST 7 — The AI pilot graveyard

Every large enterprise we work with has one.

A folder — usually in SharePoint — full of AI pilots. Chatbots. Document summarisers. Code generators. Anomaly detectors.

All of them worked in the demo. None of them made it to production.

The pattern is always the same:
→ Pilot is scoped without a production path
→ Accuracy in demo is 85% — acceptable for a pilot
→ Business requires 99% for production — pilot ends
→ No one defines what "good enough" looks like before starting
→ Six months later: new pilot, same result

AI pilots fail at the governance layer, not the technical layer.

The question to ask *before* you start: "What accuracy/reliability threshold would make this worth deploying — and who owns that decision?"

If you can't answer that in week 1, don't start the pilot.

What's in your AI pilot graveyard?

#AI #LLM #EnterpriseAI #DigitalTransformation #AIStrategy

---

### POST 8 — RAG is not a silver bullet (but it's close)

Retrieval-Augmented Generation (RAG) is the most practical enterprise AI pattern we've deployed in the last two years.

Here's why it works where pure LLMs don't:

A plain LLM gives you confident, fluent, often wrong answers about your specific domain. It was trained on the internet, not your internal documentation.

RAG retrieves the relevant slice of your actual knowledge base first, then generates an answer grounded in that context. Hallucination rate drops dramatically. Accuracy on domain-specific queries goes from "demo-only" to "production-ready."

We've deployed RAG architectures for:
→ Clinical protocol lookup (HSØ — 4.2M records/hr throughput)
→ Regulatory compliance query (Norwegian public sector)
→ ERP configuration Q&A (D365 implementation support)

The pattern is not magic. It requires:
→ A clean, chunked knowledge base
→ A retrieval layer that actually finds the right chunks
→ Evaluation — not just vibes

But for regulated industries where hallucination is not an option, RAG is the only responsible path to LLM in production.

What's your organisation's experience with RAG vs fine-tuning?

#RAG #LLM #EnterpriseAI #AIArchitecture #NorwegianTech

---

### POST 9 — AI in Norwegian healthcare: the sovereignty problem

The question we get most from Norwegian health trusts isn't "can AI help us?"

It's "can we use AI without our data leaving Norway?"

The honest answer, until recently: not easily.

Most LLM providers process data on US infrastructure. GDPR and Normen (the Norwegian healthcare security standard) require that patient data remains within EEA-controlled infrastructure. General-purpose API calls to OpenAI or Anthropic don't satisfy that requirement for identifiable health data.

What we're deploying instead:
→ Azure OpenAI Service in Norwegian/Swedish data centres (EEA-compliant)
→ Self-hosted open models (Llama, Mistral) on OCI or Azure Norway East
→ Strict data classification: only anonymised/pseudonymised data touches external APIs

The technology isn't the hard part. The classification layer — deciding what's safe to send where — is where most programmes get stuck.

If you're building AI for Norwegian healthcare, start with data classification. Everything else is downstream.

#HealthcareAI #Normen #GDPR #NorwegianHealthcare #AICompliance

---

### POST 10 — Why we stopped calling it "AI" in client proposals

Not a philosophical position. A practical one.

"AI" raises expectations that rarely match the actual use case. When a client hears "AI," they picture a general-purpose system that understands everything and needs no maintenance.

What we're actually building: a machine learning pipeline that classifies anomalies in sensor data with 94% precision, retrained monthly on new production data.

The second description wins the right conversation. The client understands what they're buying, what it costs to maintain, and what "success" looks like.

We now describe every AI engagement in plain terms:
→ What data goes in
→ What decision or output comes out
→ What accuracy threshold triggers a human review
→ How often the model is retrained and by whom

"AI" is a category. What matters is the specific system, its reliability, and who owns it when something goes wrong.

What language do you use when scoping AI projects with non-technical stakeholders?

#AIStrategy #EnterpriseAI #MLEngineering #TechLeadership #ProductDevelopment

---

### POST 11 — The AI use case that outperforms every chatbot

It's not a chatbot.
It's not a summariser.
It's anomaly detection on time-series operational data.

Here's why it consistently delivers production ROI where conversational AI struggles:

1. **The ground truth is unambiguous.** "This sensor reading is outside normal range" has a clear right answer. "Summarise this document well" doesn't.

2. **The cost of a miss is quantifiable.** One undetected anomaly in a grid system or production line has a known financial impact. ROI calculation is straightforward.

3. **Human review is built in.** Anomaly detection flags for review — it doesn't act autonomously. Regulated industries can adopt it without changing approval processes.

4. **It trains on your data by definition.** Your sensor data, your normal range, your context. No hallucination risk from pre-trained general knowledge.

We've deployed this across energy, maritime, and industrial clients. The pattern works every time. Chatbots are still running pilots.

What AI use case has surprised you with its production ROI?

#MachineLearning #AnomalyDetection #EnterpriseAI #IndustrialAI #OperationalIntelligence

---

## SERIES 3: "SOVEREIGN BY DEFAULT" (5 posts)
*Norwegian cloud, data residency, and compliance — for teams who can't just pick the cheapest option.*
*Theme: data sovereignty, NSM, GDPR, Norwegian infrastructure choices.*
*Cadence: every 2 weeks.*

---

### POST 12 — Norwegian data sovereignty isn't a checkbox

It's an architecture decision you make on day one.

We've reviewed dozens of cloud architectures built by Norwegian organisations that treated sovereignty as a compliance checkbox — something to confirm before launch, not something that shapes design.

The result: data pipelines that route through US regions "for latency reasons," backup systems that replicate to geographies outside EEA control, and logging infrastructure that inadvertently captures personal data in non-compliant locations.

Fixing these post-build costs 3–5x more than designing for sovereignty from the start.

Sovereign by default means:
→ Data residency is a constraint in the architecture document, not a footnote
→ Every cloud service is evaluated for control-plane location, not just data-plane
→ Logging and monitoring infrastructure has the same sovereignty requirements as production data
→ Third-party integrations are classified before being connected

Building for Norwegian public sector or healthcare? This isn't optional. It's the foundation.

What's the hardest sovereignty constraint you've had to design around?

#DataSovereignty #NSM #GDPR #NorwegianCloud #CloudArchitecture

---

### POST 13 — Why we chose OCI over AWS for a national-scale Norwegian deployment

AWS is the default. OCI is the deliberate choice.

For one national-scale programme, we chose Oracle Cloud Infrastructure over AWS for three reasons that had nothing to do with Oracle's database products:

**1. Egress pricing.** Data leaving OCI is free. At 4.2M records per hour throughput, AWS egress costs would have been a meaningful line item every month.

**2. Network topology.** OCI's flat network model (no inter-AZ data transfer charges) simplified the architecture and reduced cost predictability risk for a multi-region deployment.

**3. Sovereign control.** OCI's European Sovereign Cloud offering provides contractual guarantees that no Oracle personnel outside the EEA can access customer data — a requirement for the specific health data classification involved.

AWS is the right answer for most workloads. It wasn't the right answer for this one.

The lesson: choose infrastructure by matching its properties to your requirements, not by default or by what your team already knows.

What's driven a non-default cloud choice for you?

#OCI #AWS #CloudStrategy #DataSovereignty #NorwegianTech

---

### POST 14 — The NSM ICT framework: what it actually requires

Most Norwegian tech teams know they need NSM ICT compliance. Fewer know what that means in practice.

NSM (Nasjonal sikkerhetsmyndighet) publishes a tiered ICT security framework. For organisations handling classified or sensitive national information, it's not optional — it's a delivery requirement.

What it actually requires (simplified):

**Identity & Access:** MFA everywhere, privileged access managed through PAM, no standing admin accounts.

**Network:** Segmentation by data classification, no flat networks, encrypted transit for all sensitive data.

**Logging & Monitoring:** Centralised SIEM, tamper-evident logs, defined retention periods. Log what you would need to reconstruct an incident.

**Supply chain:** Third-party components assessed for known vulnerabilities before deployment. ISVs and cloud providers evaluated against NSM criteria.

**Incident response:** Written plan, tested annually, with defined escalation to NSM for significant incidents.

The framework is principles-based, not prescriptive — which means the hard work is in demonstrating how your specific architecture satisfies each control.

We've delivered this for Skatteetaten, Helsedirektoratet, and DSB. The pattern is repeatable — but it has to be designed in from the start.

What's the control area teams underestimate most?

#NSM #CyberSecurity #NorwegianPublicSector #CloudSecurity #ICTCompliance

---

### POST 15 — Zero-downtime migration: what it actually means

"Zero downtime" is in every migration proposal. It rarely means the same thing twice.

Here's our definition — the only one that matters to the business:

**Zero downtime = users cannot tell a migration happened.**

Not: "we had a 4am maintenance window that nobody noticed."
Not: "the old system was read-only for 6 hours but we called it low-impact."
Not: "the migration ran over the weekend."

True zero-downtime migration requires:

→ **Dual-write phase:** new and old systems accept writes simultaneously during the migration window
→ **Live cutover:** traffic switches with no user-visible interruption
→ **Rollback path:** the old system can be re-activated within minutes if something goes wrong
→ **Reconciliation gate:** data consistency verified before the old system is decommissioned

For our Oracle 19c → 26ai migration at a national-scale public sector client, the cutover window was 47 seconds. Users experienced it as a normal page load.

That took 4 months of architecture, 3 mock cutovers, and a lot of reconciliation scripts.

"Zero downtime" is achievable. It's just not free.

What does "zero downtime" mean in your organisation's migration contracts?

#ZeroDowntime #DatabaseMigration #CloudMigration #Oracle #Architecture

---

### POST 16 — The hidden cost of "lift and shift"

Lift and shift is the fastest way to get to the cloud.
It's also the fastest way to spend cloud budget on a workload that was never designed to run there.

The promise: move your existing workload to a cloud VM, tick the "cloud migration" box, modernise later.

The reality:
→ On-prem workloads are sized for peak load with headroom. In the cloud, you pay for that headroom constantly.
→ Licensing models designed for on-prem (Oracle, SQL Server, Windows) translate into eye-watering BYOL costs on cloud VMs.
→ "Modernise later" becomes "maintain forever" as the team moves to the next priority.

We've seen lift-and-shift add 40–60% to cloud spend versus a properly cloud-native architecture for equivalent workloads.

The questions to ask before lift and shift:
1. What is this workload's actual utilisation pattern? (Bursty? Steady? Predictable?)
2. What licensing regime applies — and does it change in the cloud?
3. Is there a cloud-native equivalent that would cost less to run AND maintain?

Lift and shift is sometimes the right answer. But it should be a deliberate choice, not a default.

What's your lift-and-shift regret story?

#CloudMigration #CloudCost #FinOps #CloudStrategy #LiftAndShift

---

## SERIES 4: "ORACLE MULTICLOUD" (4 posts)
*Oracle Database@AWS · Oracle Database@Azure · Oracle Database@GCP · OCI — real multicloud decisions.*
*Theme: Oracle licensing, ExaDB placement, multicloud architecture, sovereign Oracle.*
*Cadence: every 2–3 weeks. Each post links to or complements the existing blog series.*

---

### POST 17 — Oracle Database is now on all three clouds. Here's what that actually means.

Oracle Database@AWS launched in 2023.
Oracle Database@Azure followed.
Oracle Database@Google Cloud arrived in 2024.

For the first time, you can run Exadata infrastructure — the same hardware that powers Oracle's highest-tier cloud service — inside AWS, Azure, or GCP regions. Not a managed VM. Not RDS. Actual ExaDB, operated by Oracle, sitting in your cloud provider's data centre.

This changes the multicloud conversation fundamentally.

Before: "Should we move off Oracle to a cloud-native database?"
Now: "Which cloud should host our Oracle workload, and why?"

For enterprises with Oracle at the core — national tax systems, manufacturing ERP, clinical data platforms — the question was never really "leave Oracle." It was "how do we get to the cloud without re-platforming 20 years of database design?"

Oracle Multicloud is the answer. But the three hyperscalers are not equivalent. The architecture, the networking model, the licensing treatment, and the latency characteristics differ — sometimes significantly.

If your organisation runs Oracle on-prem and is evaluating cloud, you now have four options instead of one. The decision framework matters more than ever.

What's driving your organisation's Oracle cloud evaluation?

#Oracle #OracleCloud #Multicloud #ExaDB #CloudStrategy

---

### POST 18 — Oracle DB@GCP: what's different from AWS and Azure

Oracle Database@GCP is the newest of the three multicloud deployments — and the least documented in the wild.

Here's what distinguishes it:

**Network interconnect:** GCP uses a dedicated, low-latency interconnect between the Oracle Exadata infrastructure and GCP services. Latency between Oracle DB and GCP-native services (BigQuery, Vertex AI, Cloud Run) is consistently sub-millisecond in the same region — comparable to what you'd get inside OCI.

**BigQuery integration:** Google's native analytics layer integrates with Oracle Exadata without data movement. For organisations running Oracle OLTP with BigQuery analytics on top, this eliminates the ETL pipeline between the two.

**Identity federation:** GCP IAM federates with Oracle Identity Cloud natively. Single identity plane across Oracle and GCP services — no separate IAM management.

**Where it lags:** Fewer regions than AWS or Azure Oracle deployments currently. The operational tooling ecosystem (monitoring, IaC, incident response) is less mature — expect to build more than you find pre-built.

**Best fit:** Organisations already on GCP who need Oracle without re-platforming, and data-intensive workloads that benefit from tight BigQuery integration.

Not the right choice if your team's cloud expertise sits in Azure or AWS — operational complexity matters as much as technical capability.

Have you evaluated Oracle DB@GCP for any workloads?

#Oracle #GCP #OracleDatabase #Multicloud #CloudArchitecture

---

### POST 19 — The Oracle licensing trap in multicloud

Oracle's licensing model was designed for a world where you knew exactly which physical cores were running your database.

That world ended with virtualisation. Multicloud made it significantly more complicated.

The trap:

When you run Oracle on a hyperscaler (AWS, Azure, GCP) using standard BYOL (Bring Your Own Licence), Oracle's licensing terms require you to licence **every** physical core in the host — not just the vCPUs allocated to your VM. On a modern AWS c6i.32xlarge with 128 vCPUs on a 64-core host, you may be licensing cores you're not using.

Oracle Database@AWS/Azure/GCP sidesteps this problem — the Exadata infrastructure is operated by Oracle, licensing is included in the service, and the Oracle/cloud provider agreement covers the physical core question.

But it introduces a new one: you're now locked into Oracle's service pricing, which is typically higher per core than BYOL on a well-negotiated enterprise agreement.

The decision matrix:
→ Small Oracle footprint, < 8 cores: BYOL on cloud VM, carefully counted
→ Mid-size, 8–64 cores: model both options — BYOL vs Oracle Multicloud service
→ Large enterprise, 64+ cores: Oracle Multicloud service almost always wins on total cost of ownership once core licensing, support, and operational overhead are counted

What's your organisation's experience with Oracle licensing on cloud infrastructure?

#Oracle #OracleLicensing #Multicloud #CloudCost #FinOps

---

### POST 20 — OCI vs Oracle Multicloud: when to use each

Both run Oracle Exadata. Both are operated by Oracle. The difference is where they live and what they connect to.

**OCI (Oracle Cloud Infrastructure):**
→ Oracle's own cloud — full control of the surrounding services
→ Best for: Oracle-first organisations who want Oracle's entire stack (Autonomous DB, APEX, Analytics Cloud, Oracle Integration Cloud) in one place
→ Egress: free between OCI services. Lowest cost for Oracle-to-Oracle data movement.
→ Weakest at: ecosystems built on AWS/Azure tooling — Terraform coverage, monitoring integrations, and partner tooling are thinner than the hyperscalers

**Oracle Database@AWS / Azure / GCP:**
→ Exadata inside the hyperscaler's data centre, connected to hyperscaler services via private networking
→ Best for: organisations with existing hyperscaler investment who want Oracle without re-platforming
→ The application layer stays on AWS/Azure/GCP. Only the database moves to Oracle-operated infrastructure.
→ Weakest at: Oracle-to-Oracle integrations. If you need Oracle Integration Cloud or Oracle Analytics Cloud alongside the database, you're bridging two networks.

Our recommendation for most enterprise clients:
If >60% of your workload touches Oracle services → OCI.
If >60% touches hyperscaler-native services (S3, Azure Data Factory, BigQuery) → Oracle Multicloud on that hyperscaler.

It's not a binary choice. We've run OCI + Oracle@Azure for clients who needed both — the private interconnect between OCI and Azure is production-grade.

What's driving your Oracle cloud placement decision?

#OCI #Oracle #Multicloud #OracleDatabase #CloudArchitecture

---

## POSTING SCHEDULE

| Week | Series | Post # |
|------|--------|--------|
| Week 1  | ERP Truth            | #1 — The stat nobody talks about |
| Week 3  | AI That Ships        | #7 — The AI pilot graveyard |
| Week 5  | ERP Truth            | #2 — Why phased rollout kills ERP |
| Week 7  | Sovereign by Default | #12 — Sovereignty isn't a checkbox |
| Week 9  | AI That Ships        | #8 — RAG is not a silver bullet |
| Week 11 | ERP Truth            | #3 — The ISV problem |
| Week 13 | Oracle Multicloud    | #17 — Oracle is now on all 3 clouds |
| Week 15 | Sovereign by Default | #13 — OCI vs AWS |
| Week 17 | AI That Ships        | #9 — AI in Norwegian healthcare |
| Week 19 | ERP Truth            | #4 — What a good FDD looks like |
| Week 21 | Oracle Multicloud    | #18 — Oracle DB@GCP: what's different |
| Week 23 | Sovereign by Default | #14 — NSM ICT framework |
| Week 25 | AI That Ships        | #10 — Why we stopped calling it AI |
| Week 27 | ERP Truth            | #5 — AX2012 to D365 trap |
| Week 29 | Oracle Multicloud    | #19 — The Oracle licensing trap |
| Week 31 | Sovereign by Default | #15 — Zero-downtime: what it means |
| Week 33 | AI That Ships        | #11 — The AI use case that beats chatbots |
| Week 35 | ERP Truth            | #6 — The real reason go-lives slip |
| Week 37 | Sovereign by Default | #16 — Hidden cost of lift and shift |
| Week 39 | Oracle Multicloud    | #20 — OCI vs Oracle Multicloud |

## KIRSTI'S FRAMEWORK — APPLIED
- ✅ **4 focused topics:** ERP Truth · AI That Ships · Sovereign by Default · Oracle Multicloud
- ✅ **Consistent themes:** each post connects to Adaptiv's live case studies and existing blog series
- ✅ **Planned ahead:** 20 posts scheduled, full copy ready to paste
- ✅ **Engagement hooks:** every post ends with a question to drive comments
- ✅ **Once a week cadence:** 39-week calendar, alternating between series

---

## SERIES 5: "ORACLE 23AI" (5 posts)
*What's actually production-ready in Oracle 23ai — AI Vector Search, JSON Duality, True Cache, and more.*
*Theme: Oracle 23ai new capabilities for enterprise architects and DBAs.*
*Cadence: every 2 weeks. Tie to Oracle DB@multicloud angle — 23ai is the version running on ExaDB.*

---

### POST 21 — Oracle 23ai is not a marketing rebrand. Here's what's actually new.

Oracle renamed 23c to 23ai. Easy to dismiss as a marketing move.

It isn't. Three capabilities in 23ai represent genuine architectural shifts — not incremental improvements.

**AI Vector Search:** Native vector storage and similarity search inside Oracle Database. No separate vector database. Your application retrieves semantically similar records using SQL — the same way it retrieves anything else. HNSW and IVF indexing supported. Integrated with Oracle APEX and ORDS for rapid RAG application development.

**JSON Relational Duality Views:** A single object can be accessed as a JSON document (for application APIs) or as relational rows (for analytics and reporting) — simultaneously, with full transactional consistency. No sync layer. No ETL. One write, two access patterns.

**True Cache:** A distributed in-memory cache that is fully consistent with the primary database, automatically invalidated on commit. Not Redis. Not Memcached. Oracle-managed, Oracle-consistent, and transparent to the application — no cache invalidation logic in your code.

These three features, taken together, significantly reduce the number of specialised infrastructure components a modern application needs alongside Oracle.

Which of these is most relevant to your current architecture?

#Oracle23ai #OracleDatabase #AIVectorSearch #JSONDuality #DatabaseArchitecture

---

### POST 22 — AI Vector Search in Oracle 23ai: a real use case

Most vector database content focuses on the standalone vector DB: Pinecone, Weaviate, pgvector.

Oracle 23ai's AI Vector Search takes a different position: what if the vector index lived inside the same database as your operational data?

Here's why that matters in practice:

A clinical document retrieval system needs to find "all patient records semantically similar to this symptom description, where the patient is over 60, has a cardiology appointment in the next 30 days, and the record was created in the last 12 months."

In a standalone vector DB: you retrieve the top-k semantically similar document IDs, then JOIN back to your operational database to apply the business filters. Two round trips. Consistency risk between the vector index and the operational data.

In Oracle 23ai: one SQL query combining VECTOR_DISTANCE() for semantic similarity with standard WHERE clauses for business filters. One engine, one transaction, one consistency model.

For regulated industries — healthcare, finance, public sector — eliminating the consistency gap between vector retrieval and operational data is not a nice-to-have. It's a correctness requirement.

We've deployed this pattern in a Norwegian healthcare context. The simplified architecture (one less infrastructure component, one less sync pipeline) reduced operational overhead significantly.

What's your current approach to combining semantic search with operational data?

#Oracle23ai #AIVectorSearch #RAG #HealthcareAI #OracleDatabase

---

### POST 23 — JSON Relational Duality Views: the end of the API/database impedance mismatch

Every application developer who's worked with a relational database has hit the same wall:

The application wants a JSON object. The database stores rows across 8 normalised tables. The ORM bridges the gap — sometimes well, often badly, always with overhead.

Oracle 23ai's JSON Relational Duality Views collapse this.

You define a Duality View that maps your relational schema to a JSON shape. The application then reads and writes JSON documents — full objects, not rows. Oracle handles the normalisation internally. The data remains relational underneath for reporting, analytics, and all your existing SQL queries.

The critical property: **both access patterns are fully transactional and consistent**. Writing a JSON document triggers the same ACID guarantees as a DML operation. Reading a JSON document sees the same committed state as a SELECT.

What this eliminates:
→ ORMs that generate 47 SQL statements for a single object fetch
→ Event-driven sync pipelines between document stores and relational DBs
→ Dual-write architectures for keeping MongoDB and Oracle in sync
→ Cache invalidation logic for application-level object caches

It doesn't replace document databases for every use case. For applications already built on Oracle — or being migrated to Oracle 23ai — it removes an entire class of architectural complexity.

Are you currently running a hybrid document/relational architecture that this pattern could simplify?

#Oracle23ai #JSONDuality #DatabaseArchitecture #OracleDatabase #AppModernisation

---

### POST 24 — Oracle True Cache: what it is and why it's different from Redis

True Cache is Oracle 23ai's answer to a question that's been answered badly for a decade: how do you cache database results without building a cache invalidation system?

The Redis approach: cache the result, set a TTL, hope the TTL is short enough that staleness doesn't matter — or build application logic to invalidate on write.

Cache invalidation is famously one of the two hard problems in computer science. Most production incidents involving Redis trace back to it.

True Cache is different in one fundamental way: **it's Oracle-managed and commit-consistent.**

When a transaction commits on the primary database, True Cache entries derived from that data are invalidated automatically — by Oracle, not by your application. The application never serves stale data. The application also never needs to know True Cache exists: it uses the same connection string, the same SQL, the same drivers.

What this means in practice:
→ Sub-millisecond read latency for hot data (from in-memory cache)
→ Automatic consistency — no TTL tuning, no invalidation logic
→ Zero application code changes required
→ Full SQL support — not just key-value lookups

The trade-off: True Cache only works with Oracle. If you have a polyglot persistence strategy, Redis still has a role. If your core data lives in Oracle, True Cache eliminates an entire infrastructure component and the operational burden that comes with it.

What's your current caching architecture for Oracle workloads?

#Oracle23ai #TrueCache #DatabasePerformance #OracleDatabase #CloudArchitecture

---

### POST 25 — Oracle 23ai on ExaDB: the version that actually matters for enterprise

Oracle 23ai is available in two forms: the free developer edition, and the full enterprise version running on Exadata infrastructure.

The developer edition gets the headlines. The ExaDB version is where the enterprise architecture story becomes compelling.

Running 23ai on ExaDB (across OCI, AWS, Azure, or GCP) gives you:

**Smart Scan + AI Vector Search:** Exadata's Smart Scan offloads column filtering to storage cells. Combined with AI Vector Search, similarity queries against multi-billion-row datasets run with the I/O efficiency of a full Exadata scan — not a full table scan on a general-purpose VM.

**PMEM for True Cache:** Exadata's persistent memory (PMEM) layer becomes the True Cache backing store. Cache capacity scales with the Exadata shape, not with a separately managed Redis cluster.

**In-Database ML at scale:** Oracle Machine Learning (OML) runs inside the database engine on Exadata compute. Training and inference happen without data movement — the ML model runs where the data lives.

**High Availability:** Data Guard, RAC, and Automatic Failover work with 23ai exactly as with previous versions. The new capabilities don't break existing HA architecture.

For organisations evaluating Oracle Multicloud deployments: 23ai is the version to target. The feature gap between 19c (still widely deployed) and 23ai is significant — and the migration path from 19c to 23ai on ExaDB is well-documented.

Is your organisation on a roadmap to 23ai — or still evaluating whether to stay on 19c?

#Oracle23ai #ExaDB #OracleExadata #Multicloud #DatabaseArchitecture

---

## SERIES 6: "FINOPS FOR ORACLE" (4 posts)
*Oracle licensing, cloud cost management, and the economics of Oracle on multicloud.*
*Theme: ULA, licensing traps, cost modelling, spend optimisation.*
*Cadence: every 2 weeks.*

---

### POST 26 — Oracle licensing is the most expensive thing most enterprises don't understand

Oracle's database licensing is intentionally complex.

Not accidentally complex. Intentionally. Complexity creates audit risk, and audit risk creates renewal leverage.

The three most expensive misunderstandings we encounter:

**1. Processor licensing on virtualised infrastructure.**
Standard Edition 2 is capped at 2 sockets. Enterprise Edition is licensed per physical core (with core factor multipliers). On a VMware cluster, Oracle's position is that every physical core in the cluster is in scope — even if your VM only uses 4 of them. This position is contested but Oracle enforces it in audits.

**2. Options and Packs attached to unused features.**
Diagnostics Pack, Tuning Pack, and Real Application Clusters are licensed separately. AWR (Automatic Workload Repository) is part of Diagnostics Pack. If your DBA runs AWR reports on a non-licensed instance, you've triggered a licence obligation. This happens constantly.

**3. Licence mobility on cloud.**
Oracle's BYOL terms for cloud differ by cloud provider and by licence type. What's permitted on OCI is not always permitted on AWS or Azure. Getting this wrong costs real money in an audit.

The fix is not to stop using Oracle. It's to understand what you're actually running, where, and what it obligates you to.

When did your organisation last audit its Oracle licence position?

#Oracle #OracleLicensing #FinOps #LicenceManagement #CloudCost

---

### POST 27 — The ULA: Oracle's best deal and biggest trap

An Oracle Unlimited Licence Agreement (ULA) sounds like the answer to every Oracle licensing headache.

Pay one fee. Deploy unlimited Oracle. No counting cores. No audit risk. For 3–5 years.

For some organisations, it is the right answer. For others, it's the most expensive contract they'll ever sign.

The trap is in the certification process at the end of the ULA term.

When a ULA expires, Oracle counts every deployment and converts it to perpetual licences at that count. If you've deployed aggressively (as the ULA encourages), your perpetual licence count is enormous — and your annual support cost (22% of licence value) is enormous.

Organisations that grew into a ULA and then stagnated are in the best position: large perpetual estate at low support cost relative to what they'd pay for new licences. Organisations that didn't grow into the ULA end up with a perpetual count that doesn't reflect their actual usage.

Before signing a ULA:
→ Model your deployment trajectory — not just current state
→ Understand the certification process and what Oracle will count
→ Include cloud deployments in the model — OCI, AWS, Azure all count
→ Negotiate the right exit: perpetual vs. roll into the next ULA

We've helped clients model this decision both ways. The maths matter more than the headline deal.

What's your organisation's Oracle commercial strategy — ULA, perpetual, or cloud service?

#Oracle #ULA #OracleLicensing #FinOps #EnterpriseIT

---

### POST 28 — How to actually reduce Oracle cloud spend

Three levers. In order of impact.

**1. Right-size your Exadata shape.**
ExaDB is offered in Quarter Rack, Half Rack, Full Rack, and elastic shapes. Most organisations start with a Full Rack because it feels safe. A Full Rack is often 2–3x more capacity than the workload needs.
Run your workload profiling first. Start with the Quarter Rack elastic shape — you can scale up. You can't scale down without a data migration.

**2. Use Autonomous Database for the right workloads.**
Oracle Autonomous Database (ADB) is priced by OCPU-hour. For workloads with variable demand — reporting, batch, development/test — ADB's auto-scale and auto-pause can reduce cost by 40–70% versus a fixed ExaDB shape. ADB is not suitable for every workload (it has constraints on custom configuration), but it's dramatically underused.

**3. Separate your licence cost from your compute cost.**
Oracle Multicloud services (DB@AWS, DB@Azure, DB@GCP) bundle the licence into the service price. OCI with BYOL separates them. If you have an existing Oracle enterprise agreement with unused licence capacity, BYOL on OCI is almost always cheaper than the bundled service price — sometimes by 50%.

None of these require rearchitecting your application. They're infrastructure and commercial decisions.

What's the biggest Oracle cost driver in your environment right now?

#Oracle #OracleCloud #FinOps #CloudCost #ExaDB

---

### POST 29 — Oracle support costs: the number nobody talks about in migration decisions

22%.

That's Oracle's annual support cost as a percentage of licence value. For a large Oracle estate, it's often the largest IT infrastructure line item — bigger than the cloud bill, bigger than hardware.

When organisations evaluate migrating off Oracle — to PostgreSQL, Aurora, or another open-source alternative — they model the migration cost. They rarely model what happens to that 22% if the migration succeeds.

The maths often look like this:
→ Migration cost: £2M (one-time)
→ Annual Oracle support saving: £1.8M
→ Payback: ~13 months

For most large Oracle estates, the Oracle support cost alone justifies the migration investment within 2 years — if the migration is technically feasible.

The "technically feasible" qualifier is where most conversations stop. Oracle's PL/SQL, partitioning, and spatial features have no direct equivalents in PostgreSQL. For complex OLTP workloads built on Oracle-specific features, migration is a 2–3 year programme, not a 6-month project.

The questions worth asking:
1. What percentage of your Oracle codebase uses Oracle-specific features?
2. For the workloads that don't, what's the support cost you're paying to keep them on Oracle?
3. Is there a partial migration path — move the portable workloads, keep the Oracle-specific ones?

What's driving Oracle migration conversations in your organisation?

#Oracle #OracleMigration #FinOps #DatabaseStrategy #CloudCost

---

## SERIES 7: "DATA PLATFORM ARCHITECTURE" (5 posts)
*Sovereign data stacks, Snowflake+OCI, FHIR data lakes, and modern analytics architecture.*
*Theme: how enterprise data platforms are built for regulated, high-throughput environments.*
*Cadence: every 2 weeks.*

---

### POST 30 — The sovereign data stack: what it looks like in practice

"Sovereign data stack" is becoming a buzzword. Here's what it actually means for a Norwegian enterprise.

Three layers, each with sovereignty requirements:

**Storage layer:** Data physically resides in EEA-controlled infrastructure. For Norwegian public sector — Azure Norway East, OCI EU-Frankfurt, or OCI Norway region. Not "data transferred to US but encrypted" — physically resident and contractually guaranteed.

**Processing layer:** Compute that processes personal or classified data must also be EEA-controlled. This rules out certain managed services where processing happens on shared global infrastructure. Oracle Autonomous Database on OCI EU and Snowflake's Business Critical tier (hosted on Azure Norway East) both satisfy this for the workloads we've deployed.

**Access control layer:** Identity and access must be governed within the sovereignty boundary. This means Azure AD (Entra ID) or Oracle Identity Cloud in Norwegian tenancies — not a global IAM plane that routes authentication through US regions.

The pattern we've standardised on for Norwegian enterprise analytics:
→ Oracle ExaDB (OCI/Azure) for operational OLTP
→ Snowflake on Azure Norway East for analytics and data sharing
→ Azure Data Factory in Norway East for pipeline orchestration
→ NSM ICT-compliant access governance throughout

The architecture isn't novel. The constraint is. Designing for sovereignty from day one is different from retrofitting it.

What's the hardest sovereignty constraint your data platform has had to satisfy?

#DataSovereignty #Snowflake #OCI #NorwegianCloud #DataArchitecture

---

### POST 31 — Snowflake + OCI: why this combination keeps winning

Snowflake runs on OCI. This is not widely known outside Oracle/Snowflake circles — but it matters.

Snowflake's OCI deployment option means your Snowflake account's compute and storage runs on Oracle Cloud Infrastructure. Not AWS, not Azure. OCI.

For organisations with OCI as their primary cloud, this has three concrete benefits:

**1. Egress cost:** Data movement between OCI services and Snowflake on OCI is free (within the same region). Snowflake on AWS/Azure incurs egress charges for data leaving OCI to reach it. At scale, this is not a small number.

**2. Network latency:** OCI-native Snowflake deployment gives sub-millisecond latency between OCI-hosted databases (Oracle ExaDB, Autonomous DB) and Snowflake compute. Pipelines that cross cloud boundaries add 10–50ms per hop — which compounds in batch workloads.

**3. Sovereignty:** For Norwegian public sector and healthcare, Snowflake on OCI in EU-Frankfurt or (when available) OCI Norway satisfies the same sovereignty requirements as OCI itself — one less sovereignty exception to document.

The combination we recommend for Oracle-heavy enterprises moving to a modern analytics layer: Oracle ExaDB for OLTP + Snowflake on OCI for analytics. Oracle handles the transactional workload it's optimised for. Snowflake handles the analytical workload it's optimised for. The boundary is clean, the data movement is cheap, and the sovereignty story holds.

Are you running Snowflake on OCI or on a different hyperscaler?

#Snowflake #OCI #DataPlatform #CloudArchitecture #DataSovereignty

---

### POST 32 — FHIR-compliant data lakes: what they actually require

FHIR (Fast Healthcare Interoperability Resources) is the standard for health data exchange. HL7 FHIR R4 is the current production version. Building a FHIR-compliant data lake is not the same as storing FHIR JSON.

What FHIR compliance actually requires in a data platform:

**Data model fidelity:** FHIR resources (Patient, Observation, Encounter, DiagnosticReport) must be stored in a way that allows reconstruction of valid FHIR bundles. Flattening FHIR JSON into a relational schema for query performance is common — but the transformation must be reversible.

**Provenance:** Every FHIR resource has a provenance chain — who created it, from which source system, at what time. The data lake must preserve and query this chain. Provenance is a compliance requirement, not an optional metadata field.

**Consent management:** FHIR Consent resources govern which data can be shared and with whom. A FHIR-compliant data platform must honour Consent at query time — not just at ingestion time. This is architecturally non-trivial.

**Terminology binding:** FHIR resources reference standard terminologies — SNOMED CT, LOINC, ICD-10. The data platform must be able to resolve these references for query and reporting.

We've built this architecture for HSØ (Health South-East Norway) with 4.2M records/hour throughput. The hard problems were provenance and consent — not ingestion volume.

What's the hardest FHIR implementation problem you've encountered?

#FHIR #HealthcareData #DataLake #NorwegianHealthcare #DataArchitecture

---

### POST 33 — The data lakehouse: when it beats a separate data warehouse

The lakehouse pattern — combining the storage flexibility of a data lake with the query performance of a data warehouse — has matured significantly in the last three years.

Delta Lake, Apache Iceberg, and Oracle's own Hive Metastore integration have made it a serious production architecture, not just a benchmark exercise.

When the lakehouse beats a separate data warehouse:

**Variable schema data:** IoT sensor streams, log data, and event streams don't fit a fixed warehouse schema well. The lakehouse handles schema evolution gracefully. The warehouse requires a migration.

**Cost at scale:** Storing 100TB in Snowflake or Synapse is expensive. Storing 100TB in OCI Object Storage or Azure Data Lake is cheap. The lakehouse puts the cheap storage first and queries it efficiently — the warehouse keeps everything in expensive compute storage.

**Single source of truth:** The lakehouse *is* the raw data. There's no ETL layer between the lake and the warehouse — the lake IS the warehouse. One copy, one lineage, one governance model.

When the separate warehouse still wins:

**Sub-second BI queries on governed dimensions:** A proper warehouse with materialised views and pre-aggregated measures will always beat an Iceberg table on object storage for dashboard query latency. If your primary use case is a finance dashboard that runs 50 queries on every page load, keep the warehouse.

**Regulated reporting:** Some regulatory reporting environments require the data warehouse to be the system of record. The lakehouse creates ambiguity about what the "official" number is.

How is your organisation thinking about the lakehouse vs warehouse decision?

#DataLakehouse #Iceberg #DeltaLake #Snowflake #DataArchitecture

---

### POST 34 — Why your data pipeline is probably your biggest architecture risk

The data platform gets designed carefully. The pipelines connecting it to source systems get built quickly.

Three years later, the pipelines are the most fragile part of the architecture and the least documented.

The pattern we see most often:

→ 15–30 bespoke pipelines, each written by a different engineer at a different time
→ No standard error handling — failures are silent or send an email to someone who left the company
→ Schema changes in source systems break pipelines with no alerting
→ No lineage documentation — nobody knows which reports depend on which pipeline
→ SLA: "it usually runs by 7am"

The data platform itself is resilient. The pipelines are not.

What good pipeline architecture looks like:
→ Standardised framework (ADF, dbt, Apache Airflow — pick one and enforce it)
→ Schema change detection at ingestion, not at query time
→ Lineage tracked by default — every transformation records its inputs and outputs
→ SLA monitoring with escalation, not just alerting
→ Idempotent pipelines — re-running a failed pipeline produces the same result as running it once

We've seen organisations spend €2M on a data platform and €200K on the pipelines feeding it. The ratio should be closer to 60/40.

What's the most fragile pipeline in your data estate right now?

#DataEngineering #DataPipeline #AzureDataFactory #dbt #DataArchitecture

---

## SERIES 8: "IAC & DATABASE DEVOPS" (4 posts)
*Terraform for Oracle, CI/CD for schema changes, GitOps for database infrastructure.*
*Theme: treating database infrastructure and schema as code.*
*Cadence: every 2 weeks.*

---

### POST 35 — Why database infrastructure is the last thing teams put in version control

Application code: in Git since day one.
Infrastructure (VMs, networking, IAM): Terraform since 2018.
Database schema: still in a shared Word document on SharePoint.

This is the reality in most enterprise environments, and it creates a specific class of incident: the undocumented schema change that works fine in production, breaks the DR environment, and nobody can explain why.

The reason databases lag behind: the tools for database version control were bad for a long time.

They've improved significantly. Flyway and Liquibase (schema migration tools) integrate with standard CI/CD pipelines. The Oracle provider for Terraform covers ExaDB provisioning, network configuration, and basic schema management. Ansible has Oracle Database roles for day-2 operations.

The pattern that works:
→ All schema changes as versioned migration scripts (Flyway/Liquibase)
→ Migration scripts reviewed and merged via the same PR process as application code
→ CI/CD pipeline applies migrations to dev → test → prod in sequence, with rollback on failure
→ ExaDB infrastructure in Terraform modules, state in a remote backend, reviewed before apply

The discipline is the hard part. The tooling exists.

What's your team's current approach to database schema versioning?

#Terraform #DatabaseDevOps #Flyway #Oracle #IaC

---

### POST 36 — Terraforming Oracle ExaDB at scale: what the docs don't tell you

The Oracle Cloud Infrastructure Terraform provider is production-grade. The ExaDB-specific resources are comprehensive. What the documentation doesn't cover adequately is day-2 operations at scale.

Three things we've learned building Terraform for production ExaDB:

**1. State file discipline.**
ExaDB resources take 45–90 minutes to provision. If your Terraform state gets corrupted mid-apply — network timeout, laptop closes — you have an ExaDB cluster that exists in OCI but not in Terraform state. The import process (`terraform import`) for ExaDB resources is well-documented but requires knowing the exact OCID of every sub-resource. Keep your state in OCI Object Storage with versioning enabled and locking via OCI NoSQL.

**2. Module boundaries.**
Split ExaDB infrastructure into three modules: network (VCN, subnets, NSGs), ExaDB infrastructure (the physical Exadata cluster), and database (individual CDBs/PDBs). The infrastructure module changes once a year. The database module changes weekly. Don't couple their lifecycles.

**3. Data Guard as code.**
Terraform can provision Data Guard associations, but the standby database needs to be in a different region and the failover process is not a Terraform operation — it's an Oracle DG operation. Document this boundary clearly: Terraform manages the Data Guard configuration, Oracle Data Guard Manager executes failovers. Don't try to model the failover in Terraform.

What's the most complex Terraform module you've built for Oracle infrastructure?

#Terraform #OCI #ExaDB #IaC #OracleDatabase

---

### POST 37 — CI/CD for Oracle schema changes: the patterns that actually work

Schema migrations are different from application deployments in one critical way: they're harder to roll back.

You can roll back a broken application deployment in seconds. Rolling back a schema migration that dropped a column — after production has been running for 4 hours — is a data recovery operation.

The patterns that make Oracle schema CI/CD safe:

**Expand/Contract (Blue/Green for schema):**
Never drop or rename a column in a single migration. Instead:
1. Add the new column (expand)
2. Deploy the application that writes to both old and new columns
3. Backfill old data into the new column
4. Deploy the application that reads only from the new column
5. Drop the old column (contract)

Five steps instead of one. Each step is independently deployable and rollback-safe.

**Migration scripts are append-only:**
Never edit a migration script that has run in any environment. If a migration has a bug, write a new migration that corrects it. Flyway and Liquibase both enforce this via checksums.

**Dry-run in CI:**
Run every migration script through a dry-run (Oracle's `DBMS_METADATA` + syntax validation) before it reaches any database. Catch syntax errors in the pipeline, not in test.

**Separate DDL from DML migrations:**
Schema changes (CREATE TABLE, ALTER COLUMN) run at deployment time. Data backfills (UPDATE, INSERT SELECT) run as background jobs post-deployment. This prevents deployments from timing out on large-table operations.

What's the most painful Oracle schema migration you've had to execute in production?

#DatabaseDevOps #OracleDatabase #CICD #SchemaMigration #DevOps

---

### POST 38 — GitOps for Oracle: what it means and what it doesn't

GitOps — the practice of using Git as the single source of truth for infrastructure state — is well established for Kubernetes and cloud-native infrastructure.

For Oracle Database infrastructure, it's less discussed. Here's what it means in practice:

**What GitOps covers for Oracle:**
→ ExaDB shape, network configuration, Data Guard topology — all in Terraform, applied via a Git-triggered pipeline
→ Database user grants and role assignments — managed as Terraform resources or Ansible playbooks, version-controlled
→ Schema migrations — Flyway/Liquibase scripts in Git, applied by CI/CD on merge to main
→ Parameter file changes (init.ora / spfile equivalents) — templated and version-controlled

**What GitOps doesn't cover well:**
→ Oracle Data Guard failover — an operational action, not a state declaration
→ Manual DBA interventions (killing a session, flushing a buffer cache) — by definition not declarative
→ AWR tuning and execution plan management — Oracle's query optimiser doesn't take Git commits

The boundary: GitOps covers the *configuration* of Oracle infrastructure. It doesn't replace the DBA for *operational* Oracle management.

Teams that try to GitOps everything — including the parts that are inherently operational — end up with a GitOps process that gets bypassed constantly. Define the boundary clearly at the start.

What's in Git for your Oracle environment today?

#GitOps #Oracle #IaC #DatabaseDevOps #Terraform

---

## UPDATED POSTING SCHEDULE (8 Series · 38 Posts)

| Week | Series | Post |
|------|--------|------|
| Week 1  | ERP Truth            | #1 — The stat nobody talks about |
| Week 3  | AI That Ships        | #7 — The AI pilot graveyard |
| Week 5  | ERP Truth            | #2 — Phased rollout kills ERP |
| Week 7  | Sovereign by Default | #12 — Sovereignty isn't a checkbox |
| Week 9  | Oracle 23ai          | #21 — 23ai is not a rebrand |
| Week 11 | AI That Ships        | #8 — RAG is not a silver bullet |
| Week 13 | Oracle Multicloud    | #17 — Oracle on all 3 clouds |
| Week 15 | ERP Truth            | #3 — The ISV problem |
| Week 17 | FinOps for Oracle    | #26 — Most expensive thing you don't understand |
| Week 19 | Sovereign by Default | #13 — OCI vs AWS |
| Week 21 | Oracle 23ai          | #22 — AI Vector Search real use case |
| Week 23 | AI That Ships        | #9 — AI in Norwegian healthcare |
| Week 25 | IaC & DB DevOps      | #35 — Last thing in version control |
| Week 27 | ERP Truth            | #4 — What a good FDD looks like |
| Week 29 | Data Platform        | #30 — The sovereign data stack |
| Week 31 | Oracle Multicloud    | #18 — Oracle DB@GCP |
| Week 33 | Oracle 23ai          | #23 — JSON Duality Views |
| Week 35 | FinOps for Oracle    | #27 — The ULA trap |
| Week 37 | ERP Truth            | #5 — AX2012 to D365 trap |
| Week 39 | IaC & DB DevOps      | #36 — Terraforming ExaDB at scale |
| Week 41 | Sovereign by Default | #14 — NSM ICT framework |
| Week 43 | Data Platform        | #31 — Snowflake + OCI |
| Week 45 | Oracle 23ai          | #24 — Oracle True Cache vs Redis |
| Week 47 | AI That Ships        | #10 — Why we stopped calling it AI |
| Week 49 | Oracle Multicloud    | #19 — Oracle licensing trap |
| Week 51 | IaC & DB DevOps      | #37 — CI/CD for Oracle schema changes |
| Week 53 | ERP Truth            | #6 — The real reason go-lives slip |
| Week 55 | FinOps for Oracle    | #28 — How to reduce Oracle cloud spend |
| Week 57 | Data Platform        | #32 — FHIR data lakes |
| Week 59 | Oracle 23ai          | #25 — 23ai on ExaDB |
| Week 61 | Sovereign by Default | #15 — Zero-downtime: what it means |
| Week 63 | AI That Ships        | #11 — AI use case that beats chatbots |
| Week 65 | Oracle Multicloud    | #20 — OCI vs Oracle Multicloud |
| Week 67 | IaC & DB DevOps      | #38 — GitOps for Oracle |
| Week 69 | FinOps for Oracle    | #29 — Oracle support costs |
| Week 71 | Data Platform        | #33 — Data lakehouse vs warehouse |
| Week 73 | Sovereign by Default | #16 — Hidden cost of lift and shift |
| Week 75 | Data Platform        | #34 — Data pipeline as architecture risk |

