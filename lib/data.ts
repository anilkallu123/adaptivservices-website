import {
  Sparkles, Bot, Cloud, Cpu, Users, ShieldCheck,
  Zap, Target, Telescope, Handshake,
  Landmark, Activity, Factory, Ship,
} from 'lucide-react'

export const STATS = [
  { value: '15+', label: 'Years enterprise delivery' },
  { value: '30+', label: 'Zero-downtime migrations' },
  { value: '100%', label: 'Norwegian-owned' },
  { value: 'Oslo', label: 'Founded 2026' },
]

export const CAPABILITIES = [
  { icon: Sparkles, title: 'Products', body: 'Opinionated software designed around real workflows — not feature lists. We ship, iterate, and own the outcome.' },
  { icon: Bot, title: 'AI & Machine Learning', body: 'From LLM integrations to bespoke ML pipelines — practical AI that makes operations smarter, not flashier.' },
  { icon: Cloud, title: 'Cloud & Infrastructure', body: 'Azure, OCI, hybrid architectures. Platforms that scale without drama and cost without surprises.' },
  { icon: Cpu, title: 'Custom Electronics', body: 'From concept through prototype to production — hardware that connects the physical and digital worlds.' },
  { icon: Users, title: 'Talent & Staffing', body: 'Senior engineers on demand. No CVs, no wasted time — the right person, ready to contribute from day one.' },
  { icon: ShieldCheck, title: 'Security', body: 'Security designed in, not bolted on. Threat modelling, compliance, and incident response for regulated industries.' },
]

export const FEATURES = [
  { icon: Zap, title: 'Move fast', body: 'Working prototypes in weeks, not quarters' },
  { icon: Target, title: 'Stay focused', body: 'Every decision tied to a real business outcome' },
  { icon: Telescope, title: 'Think long', body: 'Architectures that survive the next five years' },
  { icon: Handshake, title: 'Own it together', body: 'Partners, not vendors — we share the risk' },
]

export const SECTORS = [
  {
    icon: Landmark, color: '#7B4FFF', label: 'Public Sector', stat: '27 systems delivered',
    desc: 'Tax, health, defence, transport, civic services. NSM ICT framework and DIFI standards by default — compliance is the floor, not the ceiling.',
    clients: ['Skatteetaten', 'Helsedirektoratet', 'DSB', 'Bymiljøetaten'],
    clientsStr: 'Skatteetaten · Helsedirektoratet · DSB · Bymiljøetaten',
  },
  {
    icon: Activity, color: '#00D4FF', label: 'Health & Life Sciences', stat: '4.2M records/h ingested',
    desc: "Clinical systems, FHIR-compliant data lakes, AI-assisted diagnostics. Norway's health data deserves infrastructure matching its sensitivity.",
    clients: ['HSØ', 'Sykehuspartner', 'DIPS AS'],
    clientsStr: 'HSØ · Sykehuspartner · DIPS AS',
  },
  {
    icon: Zap, color: '#FF2D9B', label: 'Energy & Utilities', stat: 'Real-time edge control',
    desc: 'Grid intelligence, offshore systems, renewables management. Real-time control where downtime is measured in megawatts.',
    clients: ['Statnett', 'Equinor', 'Hafslund Nett'],
    clientsStr: 'Statnett · Equinor · Hafslund Nett',
  },
  {
    icon: Factory, color: '#FF8A65', label: 'Industrial', stat: '30% faster month-end close',
    desc: "ERP, IoT, edge compute, process automation. Norway's industrial backbone deserves systems that move as fast as it does.",
    clients: ['Alfa Laval', 'Norsk Hydro', 'Yara'],
    clientsStr: 'Alfa Laval · Norsk Hydro · Yara',
  },
  {
    icon: Ship, color: '#5A4BFF', label: 'Maritime & Logistics', stat: 'Fleet-wide visibility',
    desc: "Vessel telematics, port operations, supply-chain visibility. Norway is a maritime nation — we build systems that match that heritage.",
    clients: ['Høegh LNG', 'Wallenius Wilhelmsen', 'DFDS'],
    clientsStr: 'Høegh LNG · Wallenius Wilhelmsen · DFDS',
  },
]

export const CASES = [
  {
    label: 'Public Sector · Cloud', color: '#7B4FFF',
    title: 'Oracle ExaDB Migration — Skatteetaten',
    stat: '40% performance uplift',
    body: 'Zero-downtime migration of national tax database from Oracle 19c to 26ai on ExaDB@Azure. Delivered under DIFI compliance with NSM ICT controls throughout.',
    outcomes: ['Zero downtime during migration', '40% query performance uplift', 'Full NSM ICT compliance', 'Automated rollback capability'],
  },
  {
    label: 'Healthcare · Data Platform', color: '#00D4FF',
    title: 'National Health Data Platform — HSØ',
    stat: 'Weeks → hours reporting',
    body: 'FHIR-compliant Azure data lakehouse serving multiple hospital trusts. Reduced reporting cycles from weeks to hours while maintaining strict data sovereignty requirements.',
    outcomes: ['FHIR R4 compliant architecture', 'Reporting: weeks → hours', '4.2M records/hour throughput', 'Multi-trust data governance'],
  },
  {
    label: 'ERP · Manufacturing', color: '#FF8A65',
    title: 'D365 F&O — Alfa Laval Europe',
    stat: '30% faster month-end close',
    body: "One of Europe's largest D365 Finance & Operations implementations, spanning 8 countries and replacing 5 legacy ERP systems in a 24-month programme.",
    outcomes: ['8-country rollout', '30% faster month-end close', '5 legacy systems retired', '1,200+ users onboarded'],
  },
]

export const SERVICES = [
  {
    icon: Sparkles, color: '#7B4FFF', title: 'Products',
    body: 'Opinionated software designed around real workflows. We build end-to-end: from discovery through design, engineering, and long-term maintenance.',
    points: ['Custom product development', 'UX research & design', 'Iterative delivery', 'Post-launch ownership'],
  },
  {
    icon: Bot, color: '#00D4FF', title: 'AI & Machine Learning',
    body: 'From LLM integrations to bespoke ML pipelines — practical AI that makes operations smarter, not just flashier.',
    points: ['LLM integration & fine-tuning', 'RAG architectures', 'ML pipeline engineering', 'AI-assisted diagnostics'],
  },
  {
    icon: Cloud, color: '#FF2D9B', title: 'Cloud & Infrastructure',
    body: 'Azure, OCI, and hybrid architectures. We design platforms that scale without drama and cost without surprises.',
    points: ['Azure & OCI architecture', 'Zero-downtime migrations', 'IaC with Terraform', 'FinOps & cost optimisation'],
  },
  {
    icon: Cpu, color: '#FF8A65', title: 'Custom Electronics',
    body: 'From concept through prototype to production — hardware that connects the physical and digital worlds.',
    points: ['PCB design & prototyping', 'Embedded firmware', 'IoT edge systems', 'CE & UKCA certification support'],
  },
  {
    icon: Users, color: '#5A4BFF', title: 'Talent & Staffing',
    body: 'Senior engineers and architects on demand. No CVs, no wasted time — the right person, ready to contribute from day one.',
    points: ['Staff augmentation', 'Team embedding', 'Tech lead as a service', 'Architecture consulting'],
  },
  {
    icon: ShieldCheck, color: '#22c55e', title: 'Security',
    body: 'Security designed in, not bolted on. Threat modelling, compliance, and incident response for regulated industries.',
    points: ['NSM ICT framework compliance', 'Threat modelling', 'Penetration testing', 'Incident response planning'],
  },
]

export const POSTS = [
  { slug: 'blog-oci-snowflake-2026', tag: 'Data Platform', date: 'May 2026', title: 'OCI + Snowflake: The Sovereign Data Stack for Norwegian Enterprises', excerpt: 'How combining Oracle Cloud Infrastructure with Snowflake delivers data sovereignty, performance, and compliance in one architecture.' },
  { slug: 'blog-oracle-db-aws-licensing', tag: 'Oracle · Licensing', date: 'Apr 2026', title: 'Oracle Database on AWS: Licensing traps and how to avoid them', excerpt: 'A practical guide to Oracle licensing on AWS — the rules, the traps, and how large enterprises structure their agreements.' },
  { slug: 'blog-oracle-db-aws-migration-methodology', tag: 'Oracle · Migration', date: 'Apr 2026', title: 'The Oracle-to-AWS Migration Methodology that scales', excerpt: 'Our 6-phase migration framework refined over 30+ zero-downtime database migrations.' },
  { slug: 'blog-oracle-db-aws-terraform', tag: 'IaC · Oracle', date: 'Apr 2026', title: 'Terraforming Oracle Database@AWS at scale', excerpt: 'How we manage Oracle ExaDB infrastructure as code — modules, state management, and day-two operations.' },
  { slug: 'blog-oracle-db-aws-vs-azure', tag: 'Cloud · Oracle', date: 'Mar 2026', title: 'Oracle DB@AWS vs Oracle DB@Azure: An honest comparison', excerpt: 'Performance, cost, compliance, and operational differences after running production workloads on both clouds.' },
  { slug: 'blog-oracle-db-aws-what-it-is', tag: 'Oracle · Cloud', date: 'Mar 2026', title: 'What is Oracle Database@AWS — and should you care?', excerpt: 'The new multicloud service explained: architecture, use cases, and when it makes sense versus alternatives.' },
  { slug: 'blog-oracle-db-aws-when-to-use', tag: 'Oracle · Strategy', date: 'Mar 2026', title: 'When to use Oracle Database@AWS (and when not to)', excerpt: 'Decision framework for choosing Oracle ExaDB on AWS versus self-managed, RDS, or a full re-platform.' },
]
