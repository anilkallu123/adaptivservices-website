import {
  Sparkles, Bot, Cloud, Cpu, Users, ShieldCheck,
  Zap, Target, Telescope, Handshake,
  Landmark, Activity, Factory, Ship,
  Heart, Globe,
} from 'lucide-react'
import type { Lang } from '@/components/lang-provider'

export const STATS = [
  { value: '20+',  labelKey: 'stat_years' as const },
  { value: '30+',  labelKey: 'stat_migrations' as const },
  { value: '100%', labelKey: 'stat_owned' as const },
  { value: 'Oslo', labelKey: 'stat_founded' as const },
]

export const CAPABILITIES = [
  {
    icon: Sparkles, title: { en: 'Products', no: 'Produkter' },
    body: { en: 'Software built around real workflows — not feature lists. We ship, iterate, and own the outcome.', no: 'Programvare bygget rundt reelle arbeidsflyter — ikke funksjonslister. Vi leverer, itererer og eier resultatet.' },
  },
  {
    icon: Bot, title: { en: 'AI & Machine Learning', no: 'KI og maskinlæring' },
    body: { en: 'LLM integrations to bespoke ML pipelines. Practical AI that adds signal, not noise.', no: 'LLM-integrasjoner til skreddersydde ML-pipelines. Praktisk KI som tilfører signal, ikke støy.' },
  },
  {
    icon: Cloud, title: { en: 'Cloud & Infrastructure', no: 'Sky og infrastruktur' },
    body: { en: 'Azure, OCI, hybrid. Platforms that scale without drama and cost without surprises.', no: 'Azure, OCI, hybrid. Plattformer som skalerer uten drama og koster uten overraskelser.' },
  },
  {
    icon: Cpu, title: { en: 'Custom Electronics', no: 'Tilpasset elektronikk' },
    body: { en: 'Concept to production-ready hardware — bridging the physical and digital.', no: 'Konsept til produksjonsklar maskinvare — bro mellom det fysiske og digitale.' },
  },
  {
    icon: Users, title: { en: 'Talent & Staffing', no: 'Kompetanse og bemanning' },
    body: { en: "Senior engineers on demand. No CVs, no ramp-up — contributing from day one.", no: 'Seniorkonsulenter på bestilling. Ingen CV-er, ingen oppstartstid — bidrar fra dag én.' },
  },
  {
    icon: ShieldCheck, title: { en: 'Security', no: 'Sikkerhet' },
    body: { en: 'Designed in, not bolted on. Threat modelling and compliance for regulated industries.', no: 'Innebygget, ikke boltet på. Trusselmodellering og etterlevelse for regulerte bransjer.' },
  },
]

export const FEATURES = [
  { icon: Zap,       titleKey: 'fs_fast_h4' as const,   bodyKey: 'fs_fast_p' as const },
  { icon: Target,    titleKey: 'fs_focus_h4' as const,  bodyKey: 'fs_focus_p' as const },
  { icon: Telescope, titleKey: 'fs_think_h4' as const,  bodyKey: 'fs_think_p' as const },
  { icon: Handshake, titleKey: 'fs_own_h4' as const,    bodyKey: 'fs_own_p' as const },
]

export const SECTORS = [
  {
    icon: Landmark, color: '#7B4FFF',
    label: { en: 'Public Sector',        no: 'Offentlig sektor' },
    stat:  { en: '27 systems delivered', no: '27 systemer levert' },
    desc:  { en: 'Tax, health, defence, transport, civic services. NSM ICT framework and DIFI standards by default — compliance is the floor, not the ceiling.', no: 'Skatt, helse, forsvar, transport, innbyggertjenester. NSM IKT-rammeverk og Digitaliseringsdirektoratets standarder — etterlevelse er gulvet, ikke taket.' },
    clients: ['Skatteetaten', 'Helsedirektoratet', 'DSB', 'Bymiljøetaten'],
    clientsStr: 'Skatteetaten · Helsedirektoratet · DSB · Bymiljøetaten',
  },
  {
    icon: Activity, color: '#00D4FF',
    label: { en: 'Health & Life Sciences',  no: 'Helse og biovitenskap' },
    stat:  { en: '4.2M records/h ingested', no: '4,2M poster/t behandlet' },
    desc:  { en: 'Clinical systems, FHIR-compliant data lakes, AI-assisted diagnostics. Critical infrastructure for some of the most sensitive data in the country.', no: 'Kliniske systemer, FHIR-kompatible datasjøer, KI-assistert diagnostikk. Kritisk infrastruktur for noe av det mest sensitive dataet i landet.' },
    clients: ['HSØ', 'Sykehuspartner', 'DIPS AS'],
    clientsStr: 'HSØ · Sykehuspartner · DIPS AS',
  },
  {
    icon: Zap, color: '#FF2D9B',
    label: { en: 'Energy & Utilities',     no: 'Energi og forsyning' },
    stat:  { en: 'Real-time edge control', no: 'Sanntids kantstyring' },
    desc:  { en: 'Grid intelligence, offshore systems, renewables management. Real-time control where downtime is measured in megawatts.', no: 'Nettintelligens, offshore-systemer, fornybar energistyring. Sanntidskontroll der nedetid måles i megawatt.' },
    clients: ['Statnett', 'Equinor', 'Hafslund Nett'],
    clientsStr: 'Statnett · Equinor · Hafslund Nett',
  },
  {
    icon: Factory, color: '#FF8A65',
    label: { en: 'Industrial',                    no: 'Industri' },
    stat:  { en: '30% faster month-end close',    no: '30% raskere månedsavslutning' },
    desc:  { en: 'ERP, IoT, edge compute, process automation. Complex operations running on systems that were built for a different era — we change that.', no: 'ERP, IoT, kant-databehandling, prosessautomatisering. Komplekse operasjoner på systemer bygget for en annen tid — det endrer vi.' },
    clients: ['Alfa Laval', 'Norsk Hydro', 'Yara'],
    clientsStr: 'Alfa Laval · Norsk Hydro · Yara',
  },
  {
    icon: Ship, color: '#5A4BFF',
    label: { en: 'Maritime & Logistics', no: 'Maritim og logistikk' },
    stat:  { en: 'Fleet-wide visibility', no: 'Flåteomfattende synlighet' },
    desc:  { en: 'Vessel telematics, port operations, supply-chain visibility. High-stakes logistics where a missed signal or a slow system costs real money.', no: 'Fartøytelemati, havneoperasjoner, forsyningskjedesynlighet. Høyrisiko logistikk der et savnet signal eller et tregt system koster reelle penger.' },
    clients: ['Høegh LNG', 'Wallenius Wilhelmsen', 'DFDS'],
    clientsStr: 'Høegh LNG · Wallenius Wilhelmsen · DFDS',
  },
]

export const CASES = [
  {
    label: { en: 'Public Sector · Cloud',    no: 'Offentlig sektor · Sky' },
    color: '#7B4FFF',
    title: { en: 'Oracle ExaDB Migration — Skatteetaten', no: 'Oracle ExaDB-migrasjon — Skatteetaten' },
    stat: '40%',
    body:  { en: 'Zero-downtime migration of national tax database from Oracle 19c to 26ai on ExaDB@Azure. Delivered under DIFI compliance with NSM ICT controls throughout.', no: 'Null-nedetids-migrasjon av nasjonal skattedatabase fra Oracle 19c til 26ai på ExaDB@Azure. Levert med DIFI-samsvar og NSM IKT-kontroller gjennom hele prosessen.' },
    outcomes: {
      en: ['Zero downtime during migration', '40% query performance uplift', 'Full NSM ICT compliance', 'Automated rollback capability'],
      no: ['Null nedetid under migrasjon', '40% ytelsesforbedring på spørringer', 'Full NSM IKT-etterlevelse', 'Automatisert tilbakerullingskapasitet'],
    },
  },
  {
    label: { en: 'Healthcare · Data Platform', no: 'Helsevesen · Dataplattform' },
    color: '#00D4FF',
    title: { en: 'National Health Data Platform — HSØ', no: 'Nasjonal helsedataplattform — HSØ' },
    stat: 'Weeks → hours',
    body:  { en: 'FHIR-compliant Azure data lakehouse serving multiple hospital trusts. Reduced reporting cycles from weeks to hours while maintaining strict data sovereignty requirements.', no: 'FHIR-kompatibel Azure-datainnsjø for flere helseforetak. Reduserte rapporteringssyklus fra uker til timer, med strenge krav til datasuvereniteten opprettholdt.' },
    outcomes: {
      en: ['FHIR R4 compliant architecture', 'Reporting: weeks → hours', '4.2M records/hour throughput', 'Multi-trust data governance'],
      no: ['FHIR R4-kompatibel arkitektur', 'Rapportering: uker → timer', '4,2M poster/time gjennomstrømning', 'Flerforetaks datastyring'],
    },
  },
  {
    label: { en: 'ERP · Manufacturing', no: 'ERP · Produksjon' },
    color: '#FF8A65',
    title: { en: 'D365 F&O — Alfa Laval Europe', no: 'D365 F&O — Alfa Laval Europa' },
    stat: '30%',
    body:  { en: "One of Europe's largest D365 Finance & Operations implementations, spanning 8 countries and replacing 5 legacy ERP systems in a 24-month programme.", no: 'En av Europas største D365 Finance & Operations-implementeringer, over 8 land og erstatning av 5 eldre ERP-systemer i et 24-månedersprogram.' },
    outcomes: {
      en: ['8-country rollout', '30% faster month-end close', '5 legacy systems retired', '1,200+ users onboarded'],
      no: ['Utrulling i 8 land', '30% raskere månedsavslutning', '5 eldre systemer avviklet', '1 200+ brukere ombord'],
    },
  },
]

export const SERVICES = [
  {
    icon: Sparkles, color: '#7B4FFF',
    title: { en: 'Products', no: 'Produkter' },
    body:  { en: 'Opinionated software designed around real workflows. We build end-to-end: from discovery through design, engineering, and long-term maintenance.', no: 'Meningssterk programvare designet rundt reelle arbeidsflyter. Vi bygger ende-til-ende: fra oppdagelse via design, utvikling og langsiktig vedlikehold.' },
    points: {
      en: ['Custom product development', 'UX research & design', 'Iterative delivery', 'Post-launch ownership'],
      no: ['Skreddersydd produktutvikling', 'UX-forskning og design', 'Iterativ leveranse', 'Eierskap etter lansering'],
    },
  },
  {
    icon: Bot, color: '#00D4FF',
    title: { en: 'AI & Machine Learning', no: 'KI og maskinlæring' },
    body:  { en: 'From LLM integrations to bespoke ML pipelines — practical AI that makes operations smarter, not just flashier.', no: 'Fra LLM-integrasjoner til skreddersydde ML-pipelines — praktisk KI som gjør operasjoner smartere, ikke bare mer imponerende.' },
    points: {
      en: ['LLM integration & fine-tuning', 'RAG architectures', 'ML pipeline engineering', 'AI-assisted diagnostics'],
      no: ['LLM-integrasjon og finjustering', 'RAG-arkitekturer', 'ML-pipeline-utvikling', 'KI-assistert diagnostikk'],
    },
  },
  {
    icon: Cloud, color: '#FF2D9B',
    title: { en: 'Cloud & Infrastructure', no: 'Sky og infrastruktur' },
    body:  { en: 'Azure, OCI, and hybrid architectures. We design platforms that scale without drama and cost without surprises.', no: 'Azure, OCI og hybride arkitekturer. Vi designer plattformer som skalerer uten drama og koster uten overraskelser.' },
    points: {
      en: ['Azure & OCI architecture', 'Zero-downtime migrations', 'IaC with Terraform', 'FinOps & cost optimisation'],
      no: ['Azure og OCI-arkitektur', 'Null-nedetids-migrasjoner', 'IaC med Terraform', 'FinOps og kostnadsoptimalisering'],
    },
  },
  {
    icon: Cpu, color: '#FF8A65',
    title: { en: 'Custom Electronics', no: 'Tilpasset elektronikk' },
    body:  { en: 'From concept through prototype to production — hardware that connects the physical and digital worlds.', no: 'Fra konsept via prototype til produksjon — maskinvare som kobler den fysiske og digitale verden.' },
    points: {
      en: ['PCB design & prototyping', 'Embedded firmware', 'IoT edge systems', 'CE & UKCA certification support'],
      no: ['PCB-design og prototyping', 'Innebygd fastvare', 'IoT-kantsystemer', 'CE og UKCA sertifiseringsstøtte'],
    },
  },
  {
    icon: Users, color: '#5A4BFF',
    title: { en: 'Talent & Staffing', no: 'Kompetanse og bemanning' },
    body:  { en: 'Senior engineers and architects on demand. No CVs, no wasted time — the right person, ready to contribute from day one.', no: 'Seniorkonsulenter og arkitekter på bestilling. Ingen CV-er, ingen bortkastet tid — rett person, klar til å bidra fra dag én.' },
    points: {
      en: ['Staff augmentation', 'Team embedding', 'Tech lead as a service', 'Architecture consulting'],
      no: ['Bemanningsforsterkning', 'Teaminnbygging', 'Teknisk leder som tjeneste', 'Arkitekturkonsulenttjenester'],
    },
  },
  {
    icon: ShieldCheck, color: '#22c55e',
    title: { en: 'Security', no: 'Sikkerhet' },
    body:  { en: 'Security designed in, not bolted on. Threat modelling, compliance, and incident response for regulated industries.', no: 'Sikkerhet designet inn, ikke boltet på. Trusselmodellering, etterlevelse og hendelseshåndtering for regulerte bransjer.' },
    points: {
      en: ['NSM ICT framework compliance', 'Threat modelling', 'Penetration testing', 'Incident response planning'],
      no: ['NSM IKT-rammeverk-etterlevelse', 'Trusselmodellering', 'Penetrasjonstesting', 'Planlegging av hendelseshåndtering'],
    },
  },
]

export const PRINCIPLES = [
  {
    icon: Target,
    title: { en: 'Outcome over output',  no: 'Resultat over leveranse' },
    body:  { en: "We measure success in business results, not lines of code or delivered tickets.", no: 'Vi måler suksess i forretningsresultater, ikke kodelinjer eller leverte oppgaver.' },
  },
  {
    icon: Zap,
    title: { en: 'Speed with depth',    no: 'Fart med dybde' },
    body:  { en: "Fast delivery without technical debt. We move quickly because we know what we're doing.", no: 'Rask leveranse uten teknisk gjeld. Vi beveger oss raskt fordi vi vet hva vi gjør.' },
  },
  {
    icon: Heart,
    title: { en: 'Radical ownership',   no: 'Radikalt eierskap' },
    body:  { en: "When we take on a problem, we own it — from first conversation to production and beyond.", no: 'Når vi tar på oss et problem, eier vi det — fra første samtale til produksjon og videre.' },
  },
  {
    icon: Globe,
    title: { en: 'Sovereign by default', no: 'Suveren som standard' },
    body:  { en: "Norwegian data, Norwegian infrastructure, Norwegian compliance. Not an afterthought — the foundation.", no: 'Norske data, norsk infrastruktur, norsk etterlevelse. Ikke en ettertanke — fundamentet.' },
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

// Helper — get localised value from any bilingual field
export function loc<T extends { en: string; no: string }>(field: T, lang: Lang): string {
  return field[lang]
}
