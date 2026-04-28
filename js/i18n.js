/**
 * Adaptiv AS — i18n (EN / NO Bokmål)
 * Elements use data-i18n="key" for text or data-i18n-html="key" for markup.
 * data-i18n-placeholder="key" for input placeholders.
 */

const LANG_KEY = 'adaptiv_lang';

const T = {
  en: {
    /* ── Nav ── */
    nav_home:         'Home',
    nav_what_we_do:   'What We Do',
    nav_sectors:      'Sectors',
    nav_case_studies: 'Case Studies',
    nav_insights:     'Insights',
    nav_about:        'About',
    nav_cta:          'Get in touch',

    /* ── Home hero ── */
    hero_eyebrow:     'Built in Norway · For Norway · Est. 2026',
    hero_h1:          'Sovereign software<br/>for Norway\'s hardest<br/><span class="grad-text">digital problems.</span>',
    hero_lead:        'We design, build, and operate the products, AI systems, and cloud platforms that public-sector and regulated industries can\'t buy off the shelf — senior engineers, sovereign-grade delivery, zero-downtime track record.',
    hero_cta_primary: 'Book a 30-min discovery call',
    hero_cta_ghost:   'See case studies',
    hero_stat1_lbl:   'Years enterprise delivery',
    hero_stat2_lbl:   'Zero-downtime migrations',
    hero_stat3_lbl:   'Norwegian-owned',
    hero_stat4_lbl:   'Founded 2026',
    scroll_txt:       'scroll',

    /* ── Trust strip ── */
    trust_label:      'Delivered for',
    trust_see_all:    'See all',

    /* ── Capabilities section ── */
    caps_eyebrow:     'What we build',
    caps_h2:          'Six pillars. <span class="grad-text">Unlimited scope.</span>',
    caps_lead:        'We don\'t specialise in one thing. We are builders — and we bring the full stack to every problem we take on.',
    card_products_h3: 'Products',
    card_products_p:  'Opinionated software products designed around real workflows — not feature lists. We ship, we iterate, we own the outcome.',
    card_ai_h3:       'AI & Machine Learning',
    card_ai_p:        'From LLM integrations to bespoke ML pipelines — practical AI that makes operations smarter, not just flashier.',
    card_cloud_h3:    'Cloud & Infrastructure',
    card_cloud_p:     'Azure, OCI, hybrid architectures. We design platforms that scale without drama and cost without surprises.',
    card_elec_h3:     'Custom Electronics',
    card_elec_p:      'From concept through prototype to production — hardware that connects the physical and digital worlds.',
    card_talent_h3:   'Talent & Staffing',
    card_talent_p:    'Senior engineers and architects on demand. No CVs, no wasted time — the right person, ready to contribute from day one.',
    card_sec_h3:      'Security',
    card_sec_p:       'Security that is designed in, not bolted on. Threat modelling, compliance, and incident response for regulated industries.',

    /* ── Feature strip ── */
    fs_fast_h4:   'Move fast',
    fs_fast_p:    'Working prototypes in weeks, not quarters',
    fs_focus_h4:  'Stay focused',
    fs_focus_p:   'Every decision tied to a real business outcome',
    fs_think_h4:  'Think long',
    fs_think_p:   'Architectures that survive the next five years',
    fs_own_h4:    'Own it together',
    fs_own_p:     'Partners, not vendors — we share the risk',

    /* ── Sectors ── */
    sectors_eyebrow: 'Industries',
    sectors_h2:      'We go where the <span class="grad-text">problems are hardest</span>',
    sectors_lead:    'Drawn to industries where transformation is overdue, stakes are high, and incumbents move slowly.',
    sector_public:   'Public Sector',
    sector_health:   'Health & Life Sciences',
    sector_energy:   'Energy & Utilities',
    sector_industrial: 'Industrial',
    sector_maritime: 'Maritime & Logistics',
    sector_note:     'Don\'t see yours? That usually means the opportunity is biggest.',
    sector_note_link:'Let\'s talk →',
    sector_trusted:  'Trusted by',
    sector_explore:  'Explore this sector →',
    sector_pub_stat: '27 systems delivered',
    sector_pub_desc: 'Tax, health, defence, transport, civic services. We build to NSM ICT framework and DIFI standards by default — compliance is the floor, not the ceiling.',
    sector_health_stat: '4.2M records/h ingested',
    sector_health_desc: 'Clinical systems, FHIR-compliant data lakes, AI-assisted diagnostics. Norway\'s health data deserves infrastructure that matches the sensitivity of what it holds.',
    sector_energy_stat: 'Real-time edge control',
    sector_energy_desc: 'Grid intelligence, offshore systems, renewables management. Real-time control at the edge of the network — where downtime is measured in megawatts.',
    sector_ind_stat: '30% faster month-end close',
    sector_ind_desc: 'ERP, IoT, edge compute, process automation. Norway\'s industrial backbone — aluminium, chemicals, aquaculture — deserves systems that move as fast as it does.',
    sector_mar_stat: 'Fleet-wide visibility',
    sector_mar_desc: 'Vessel telematics, port operations, supply-chain visibility. Norway is a maritime nation — we build software and systems that match that heritage with 21st-century capability.',

    /* ── Case studies teaser ── */
    proof_eyebrow:   'Proof of work',
    proof_h2:        'Results, not <span class="grad-text">promises</span>',
    proof_lead:      'Selected outcomes from 15+ years of enterprise delivery across Norway and Europe.',
    cs1_label:       'Public Sector · Cloud',
    cs1_h3:          'Oracle ExaDB Migration — Skatteetaten',
    cs1_p:           'Zero-downtime migration of national tax database from 19c to 26ai. 40% performance uplift.',
    cs2_label:       'Healthcare · Data Platform',
    cs2_h3:          'National Health Data Platform',
    cs2_p:           'FHIR-compliant Azure data lakehouse. Reporting cycle: weeks → hours across multiple hospital trusts.',
    cs3_label:       'ERP · Manufacturing',
    cs3_h3:          'D365 F&O — Alfa Laval Europe',
    cs3_p:           'One of Europe\'s largest D365 implementations. 30% faster month-end close across 8 countries.',
    cs_read:         'Read case study →',
    cs_see_all:      'See all case studies →',

    /* ── Home CTA ── */
    home_cta_eyebrow: 'Ready to build?',
    home_cta_h2:      'Big ideas need <span class="grad-text">serious engineers</span>',
    home_cta_p:       'Whether you have a product spec, a vague problem, or just an ambition — we can find the shape of the solution together.',
    home_cta_btn:     'Start a conversation →',

    /* ── Footer ── */
    footer_brand_p:   'An ambitious Norwegian IT venture — building products, platforms, and infrastructure for the businesses of tomorrow.',
    footer_nl_label:  'Technical insights',
    footer_subscribe: 'Subscribe',
    footer_nl_ph:     'your@email.com',
    footer_company:   'Company',
    footer_about_lnk: 'About',
    footer_cs_lnk:    'Case Studies',
    footer_insights_lnk: 'Insights',
    footer_team_lnk:  'Team',
    footer_principles_lnk: 'Principles',
    footer_contact_lnk: 'Contact',
    footer_services:  'Services',
    footer_products_lnk: 'Products',
    footer_cloud_lnk: 'Cloud',
    footer_elec_lnk:  'Electronics',
    footer_partner_lnk: 'Partner Platforms',
    footer_contact_h5: 'Contact',
    footer_copyright: '© 2026 Adaptiv AS. All rights reserved. Org. nr. 937 171 250',
    footer_built:     'Designed and built in Oslo',

    /* ── About page ── */
    about_hero_eyebrow: 'Our story',
    about_hero_h1:    'Built by engineers<br/><span class="grad-text">for engineers</span>',
    about_hero_lead:  'Adaptiv AS was founded in Oslo in 2026 by veteran engineers who were tired of watching great opportunities get buried under slow procurement cycles, overcautious consultancies, and underambitious roadmaps.',
    about_thesis_eyebrow: 'Our thesis',
    about_thesis_h2:  'Norway deserves <span class="grad-text">more ambition</span>',
    about_thesis_p1:  'Norway has world-class infrastructure, a highly educated workforce, strong public institutions, and capital. What it lacks is enough technology companies willing to take on genuinely hard problems at scale.',
    about_thesis_p2:  'Too many Norwegian IT vendors are comfortable with the same body-shopping model: put warm bodies in seats, bill by the hour, deliver mediocre outcomes, renew the contract. We are not that company.',
    about_thesis_p3:  'We are outcome-driven. We build things that work. We share the risk. And we have the technical depth to execute on ideas that other companies won\'t take on.',
    about_principles_eyebrow: 'How we work',
    about_principles_h2: 'Operating <span class="grad-text">principles</span>',
    about_principles_lead: 'These are not values on a wall. They are the rules we actually use to make decisions.',
    p1_h3: 'Outcomes over outputs',
    p1_p:  'We measure success by what changed in your business, not by what we delivered into a Jira board. If the outcome didn\'t land, the project didn\'t succeed — regardless of what was shipped.',
    p2_h3: 'Think in years, ship in weeks',
    p2_p:  'Architecture decisions are 5-year bets. Deployment cadence is weekly. We hold both simultaneously — and don\'t let short-term pressure compromise long-term integrity.',
    p3_h3: 'Share the risk',
    p3_p:  'We take equity in ambitious projects. We offer outcome-based fees. We don\'t hide behind fixed-scope contracts when the real problem is still being discovered.',
    p4_h3: 'Honest by default',
    p4_p:  'We tell clients when their idea won\'t work, when a cheaper approach exists, and when we are not the right fit. The short-term discomfort is worth the long-term trust.',
    p5_h3: 'Bias to action',
    p5_p:  'A working prototype beats a perfect specification. We default to building the thing, learning from it, and iterating — not planning for an imaginary future state.',
    p6_h3: 'Norwegian-built, globally-capable',
    p6_p:  'We are proud to be a Norwegian company. We build to Norwegian standards, compliance requirements, and cultural norms — but our ambition is not limited by borders.',
    about_team_eyebrow: 'The team',
    about_team_h2:    'Veteran engineers. <span class="grad-text">Zero ego.</span>',
    about_team_lead:  'We hire people who have shipped things before — and who are hungry to ship things again.',
    anil_stat1_lbl:   'Years experience',
    anil_stat2_lbl:   'Zero-downtime migrations',
    anil_stat3_lbl:   'Cycle time reduction',
    swapna_stat1_lbl: 'Years ERP experience',
    swapna_stat2_lbl: 'Countries supported',
    swapna_stat3_lbl: 'Live system integrations',
    chandra_stat1_lbl: 'Years experience',
    chandra_stat2_lbl: 'Annual programme value',
    chandra_stat3_lbl: 'Azure cost reduction',
    open_role_h4:     'Open role',
    role_hop:         'Head of Product',
    role_hop_p:       'We\'re looking for a product leader who has taken 0→1 products to market in complex B2B environments. Sound like you?',
    role_ai:          'AI / ML Lead',
    role_ai_p:        'We need someone who has put real ML systems into production — not just notebooks. FAANG-level thinking, startup-level execution.',
    about_join_p:     'Think you belong here? We\'re always looking for exceptional engineers.',
    about_join_btn:   'Reach out →',
    about_cta_eyebrow: 'Let\'s build together',
    about_cta_h2:     'Ambitious problems need <span class="grad-text">ambitious partners</span>',
    about_cta_p:      'If you\'re building something hard and need engineers who have done it before — we should talk.',
    about_cta_btn:    'Get in touch →',

    /* ── What We Do page ── */
    wwd_hero_eyebrow: 'Our capabilities',
    wwd_hero_h1:      'We build the <span class="grad-text">full stack</span>',
    wwd_hero_lead:    'From product strategy through to shipped electrons — Adaptiv AS covers every layer of the modern technology stack. No hand-offs, no gaps.',
    wwd_01_eyebrow:   '01 — Products',
    wwd_01_h2:        'Opinionated software that <span class="grad-text">gets out of your way</span>',
    wwd_01_p1:        'We build software products around real workflows — not feature lists. Every product we ship starts with deep domain work, not a backlog. We own the outcome, not just the deliverable.',
    wwd_01_p2:        'Our products live in production, get maintained, and evolve with your business. We don\'t throw code over a fence.',
    step1_h4:         'Domain discovery',
    step1_p:          'Deep dive into the problem space — not the solution space.',
    step2_h4:         'Working prototype',
    step2_p:          'Clickable, testable, and real — in weeks.',
    step3_h4:         'Production ship',
    step3_p:          'Built to last, not just to demo.',
    step4_h4:         'Continuous iteration',
    step4_p:          'We stay in the product, not move on to the next project.',
    wwd_02_eyebrow:   '02 — AI & Machine Learning',
    wwd_02_h2:        'Practical AI that <span class="grad-text">changes operations</span>',
    wwd_02_p1:        'We build AI that makes real decisions in real workflows — not demos that live in slide decks. From LLM integrations to bespoke ML pipelines, we work with the models that matter now.',
    wwd_02_p2:        'We\'ve built multi-model routing systems, semantic search infrastructure, autonomous agent platforms, and AI-augmented clinical tools.',
    ai_cap_eyebrow:   'AI capabilities',
    wwd_03_eyebrow:   '03 — Cloud & Infrastructure',
    wwd_03_h2:        'Platforms that <span class="grad-text">scale without drama</span>',
    wwd_03_p1:        'We design cloud architecture on Azure and OCI — including hybrid and multi-cloud setups. Kubernetes, Terraform, GitOps. Landing zones, identity platforms, and data platforms built to Norwegian compliance standards.',
    wwd_03_p2:        'We\'ve built Oracle ExaDB migration pipelines, Azure DaaS platforms, and Kubernetes-native microservice estates.',
    wwd_more_eyebrow: 'More capabilities',
    wwd_more_h2:      'The rest of the <span class="grad-text">stack</span>',
    wwd_elec_h3:      'Custom Electronics',
    wwd_elec_p:       'Concept through prototype to production. Embedded systems, IoT devices, sensor platforms, and industrial control hardware designed and manufactured to spec.',
    wwd_talent_h3:    'Talent & Staffing',
    wwd_talent_p:     'Senior engineers and architects on demand. We don\'t do bulk CV matching — we match on depth of domain expertise and immediate contribution potential.',
    wwd_sec_h3:       'Security',
    wwd_sec_p:        'Security designed in, not bolted on. Threat modelling, penetration testing, compliance (NIS2, GDPR, ISO 27001), and incident response for regulated industries.',
    partner_eyebrow:  'Partner platforms',
    partner_h2:       'Best-of-breed software <span class="grad-text">we implement & support</span>',
    partner_lead:     'Beyond our own builds, we bring certified expertise on two specialist platforms — deployed, integrated, and maintained by our team.',
    decisions_tagline: 'No-code process automation for regulated industries',
    decisions_p:      'A drag-and-drop workflow and rules engine built for complex, regulated processes — medical claims, insurance underwriting, mortgage approvals, and ERP automation. Replace brittle BPMN scripts with visual flows your operations team can own.',
    pds_tagline:      'Multilingual customer communication at enterprise scale',
    pds_p:            'An AI-powered CCM platform that generates, manages, and delivers customer communications across 108 languages and every channel. Cuts document production costs by 40%+ while staying fully GDPR-compliant — trusted by Xerox, Gallagher, DKV, and Jack Henry.',
    wwd_cta_eyebrow:  'Let\'s scope it',
    wwd_cta_h2:       'Tell us the problem. <span class="grad-text">We\'ll find the approach.</span>',
    wwd_cta_p:        'A 30-minute call is all it takes to figure out if we\'re the right fit — and what the first milestone looks like.',
    wwd_cta_btn:      'Book a call →',

    /* ── Sectors page ── */
    sectors_page_eyebrow: 'Where we operate',
    sectors_page_h1:  'We go where the<br/><span class="grad-text">problems are hardest</span>',
    sectors_page_lead: 'Adaptiv AS is drawn to industries where transformation is overdue, the stakes are high, and the incumbents move slowly. That\'s where the real work is.',

    /* ── Case Studies page ── */
    cs_page_eyebrow:  'Our work',
    cs_page_h1:       'Real problems. <span class="grad-text">Real outcomes.</span>',
    cs_page_lead:     'Selected results from 15+ years of enterprise delivery across Norway and Europe.',

    /* ── Blog page ── */
    blog_eyebrow:     'From the engineers',
    blog_h1:          'What we\'re <span class="grad-text">thinking about</span>',
    blog_lead:        'Technical deep-dives, architecture decisions, and observations from the field.',

    /* ── Contact page ── */
    contact_eyebrow:  'Say hello',
    contact_h1:       'Let\'s start a <span class="grad-text">conversation</span>',
    contact_lead:     'Whether you have a brief, a problem, or just an idea — we\'d love to hear from you.',

    /* ── Cookie banner ── */
    cookie_title:     'Cookie preferences',
    cookie_text:      'We use analytics cookies to understand how visitors use this site and improve it. You can accept or decline.',
    cookie_decline:   'Decline',
    cookie_accept:    'Accept',
  },

  no: {
    /* ── Nav ── */
    nav_home:         'Hjem',
    nav_what_we_do:   'Hva vi gjør',
    nav_sectors:      'Sektorer',
    nav_case_studies: 'Referanseprosjekter',
    nav_insights:     'Innsikt',
    nav_about:        'Om oss',
    nav_cta:          'Ta kontakt',

    /* ── Home hero ── */
    hero_eyebrow:     'Bygget i Norge · For Norge · Stiftet 2026',
    hero_h1:          'Suveren programvare<br/>for Norges vanskeligste<br/><span class="grad-text">digitale utfordringer.</span>',
    hero_lead:        'Vi designer, bygger og drifter produktene, KI-systemene og skyplattformene som offentlig sektor og regulerte bransjer ikke kan kjøpe av hylla — seniorkonsulenter, suveren leveranse, nullnedetids-historikk.',
    hero_cta_primary: 'Book en 30-minutters samtale',
    hero_cta_ghost:   'Se referanseprosjekter',
    hero_stat1_lbl:   'År med enterprise-leveranse',
    hero_stat2_lbl:   'Null-nedetids-migrasjoner',
    hero_stat3_lbl:   'Norsk-eid',
    hero_stat4_lbl:   'Stiftet 2026',
    scroll_txt:       'rull',

    /* ── Trust strip ── */
    trust_label:      'Levert til',
    trust_see_all:    'Se alle',

    /* ── Capabilities section ── */
    caps_eyebrow:     'Hva vi bygger',
    caps_h2:          'Seks pilarer. <span class="grad-text">Ubegrenset rekkevidde.</span>',
    caps_lead:        'Vi spesialiserer oss ikke på én ting. Vi er byggere — og vi tar med hele stacken til hvert problem vi tar på oss.',
    card_products_h3: 'Produkter',
    card_products_p:  'Meningssterke programvareprodukter designet rundt reelle arbeidsflyter — ikke funksjonslister. Vi leverer, vi itererer, vi eier resultatet.',
    card_ai_h3:       'KI og maskinlæring',
    card_ai_p:        'Fra LLM-integrasjoner til skreddersydde ML-pipelines — praktisk KI som gjør operasjoner smartere, ikke bare mer imponerende.',
    card_cloud_h3:    'Sky og infrastruktur',
    card_cloud_p:     'Azure, OCI, hybride arkitekturer. Vi designer plattformer som skalerer uten drama og koster uten overraskelser.',
    card_elec_h3:     'Tilpasset elektronikk',
    card_elec_p:      'Fra konsept via prototype til produksjon — maskinvare som kobler den fysiske og digitale verden.',
    card_talent_h3:   'Kompetanse og bemanning',
    card_talent_p:    'Seniorkonsulenter og arkitekter på bestilling. Ingen CV-er, ingen bortkastet tid — rett person, klar til å bidra fra dag én.',
    card_sec_h3:      'Sikkerhet',
    card_sec_p:       'Sikkerhet som er innebygget, ikke boltet på. Trusselmodellering, etterlevelse og hendelseshåndtering for regulerte bransjer.',

    /* ── Feature strip ── */
    fs_fast_h4:   'Beveg deg raskt',
    fs_fast_p:    'Fungerende prototyper på uker, ikke kvartaler',
    fs_focus_h4:  'Hold fokus',
    fs_focus_p:   'Hver beslutning knyttet til et reelt forretningsmål',
    fs_think_h4:  'Tenk langsiktig',
    fs_think_p:   'Arkitekturer som overlever de neste fem årene',
    fs_own_h4:    'Eie det sammen',
    fs_own_p:     'Partnere, ikke leverandører — vi deler risikoen',

    /* ── Sectors ── */
    sectors_eyebrow: 'Bransjer',
    sectors_h2:      'Vi går dit <span class="grad-text">problemene er vanskeligst</span>',
    sectors_lead:    'Tiltrukket av bransjer der transformasjon er overmoden, innsatsen er høy og etablerte aktører beveger seg sakte.',
    sector_public:   'Offentlig sektor',
    sector_health:   'Helse og biovitenskap',
    sector_energy:   'Energi og forsyning',
    sector_industrial: 'Industri',
    sector_maritime: 'Maritim og logistikk',
    sector_note:     'Ser du ikke din bransje? Det betyr vanligvis at muligheten er størst.',
    sector_note_link:'La oss snakke →',
    sector_trusted:  'Betrodd av',
    sector_explore:  'Utforsk denne sektoren →',
    sector_pub_stat: '27 systemer levert',
    sector_pub_desc: 'Skatt, helse, forsvar, transport, innbyggertjenester. Vi bygger etter NSM IKT-rammeverk og Digitaliseringsdirektoratets standarder — etterlevelse er gulvet, ikke taket.',
    sector_health_stat: '4,2M poster/t behandlet',
    sector_health_desc: 'Kliniske systemer, FHIR-kompatible datasjøer, KI-assistert diagnostikk. Norsk helsedata fortjener infrastruktur som matcher sensitiviteten i det den lagrer.',
    sector_energy_stat: 'Sanntids kantstyring',
    sector_energy_desc: 'Nettintelligens, offshore-systemer, fornybar energistyring. Sanntidskontroll i nettverkskanten — der nedetid måles i megawatt.',
    sector_ind_stat: '30% raskere månedsavslutning',
    sector_ind_desc: 'ERP, IoT, kant-databehandling, prosessautomatisering. Norges industribakteppe — aluminium, kjemi, akvakultur — fortjener systemer som beveger seg like raskt.',
    sector_mar_stat: 'Flåteomfattende synlighet',
    sector_mar_desc: 'Fartøytelemati, havneoperasjoner, forsyningskjedesynlighet. Norge er en maritim nasjon — vi bygger programvare og systemer som matcher denne arven med 2000-tallets kapasitet.',

    /* ── Case studies teaser ── */
    proof_eyebrow:   'Bevis på arbeid',
    proof_h2:        'Resultater, ikke <span class="grad-text">løfter</span>',
    proof_lead:      'Utvalgte resultater fra 15+ år med enterprise-leveranse i Norge og Europa.',
    cs1_label:       'Offentlig sektor · Sky',
    cs1_h3:          'Oracle ExaDB-migrasjon — Skatteetaten',
    cs1_p:           'Null-nedetids-migrasjon av nasjonal skattedatabase fra 19c til 26ai. 40% ytelsesforbedring.',
    cs2_label:       'Helsevesen · Dataplattform',
    cs2_h3:          'Nasjonal helsedataplattform',
    cs2_p:           'FHIR-kompatibel Azure-datainnsjø. Rapporteringssyklus: uker → timer på tvers av helseforetak.',
    cs3_label:       'ERP · Produksjon',
    cs3_h3:          'D365 F&O — Alfa Laval Europa',
    cs3_p:           'En av Europas største D365-implementeringer. 30% raskere månedsavslutning i 8 land.',
    cs_read:         'Les casestudie →',
    cs_see_all:      'Se alle casestudier →',

    /* ── Home CTA ── */
    home_cta_eyebrow: 'Klar til å bygge?',
    home_cta_h2:      'Store ideer trenger <span class="grad-text">seriøse ingeniører</span>',
    home_cta_p:       'Enten du har en produktspesifikasjon, et uklart problem eller bare en ambisjon — vi kan finne løsningens form sammen.',
    home_cta_btn:     'Start en samtale →',

    /* ── Footer ── */
    footer_brand_p:   'Et ambisiøst norsk IT-selskap — bygger produkter, plattformer og infrastruktur for morgendagens virksomheter.',
    footer_nl_label:  'Teknisk innsikt',
    footer_subscribe: 'Abonner',
    footer_nl_ph:     'din@epost.no',
    footer_company:   'Selskap',
    footer_about_lnk: 'Om oss',
    footer_cs_lnk:    'Referanseprosjekter',
    footer_insights_lnk: 'Innsikt',
    footer_team_lnk:  'Team',
    footer_principles_lnk: 'Prinsipper',
    footer_contact_lnk: 'Kontakt',
    footer_services:  'Tjenester',
    footer_products_lnk: 'Produkter',
    footer_cloud_lnk: 'Sky',
    footer_elec_lnk:  'Elektronikk',
    footer_partner_lnk: 'Partnerplattformer',
    footer_contact_h5: 'Kontakt',
    footer_copyright: '© 2026 Adaptiv AS. Alle rettigheter forbeholdt. Org. nr. 937 171 250',
    footer_built:     'Designet og bygget i Oslo',

    /* ── About page ── */
    about_hero_eyebrow: 'Vår historie',
    about_hero_h1:    'Bygget av ingeniører<br/><span class="grad-text">for ingeniører</span>',
    about_hero_lead:  'Adaptiv AS ble stiftet i Oslo i 2026 av erfarne ingeniører som var lei av å se gode muligheter bli begravet under trege anskaffelsesprosesser, for-forsiktige konsulentfirmaer og for lite ambisiøse veikart.',
    about_thesis_eyebrow: 'Vår tanke',
    about_thesis_h2:  'Norge fortjener <span class="grad-text">mer ambisjon</span>',
    about_thesis_p1:  'Norge har infrastruktur i verdensklasse, en høyt utdannet arbeidsstyrke, sterke offentlige institusjoner og kapital. Det som mangler er nok teknologiselskaper som er villige til å ta på seg genuint vanskelige problemer i stor skala.',
    about_thesis_p2:  'For mange norske IT-leverandører er komfortable med den samme kropp-til-stol-modellen: sett varme kropper i seter, fakturer per time, lever middelmådige resultater, forny kontrakten. Vi er ikke det selskapet.',
    about_thesis_p3:  'Vi er resultatdrevet. Vi bygger ting som fungerer. Vi deler risikoen. Og vi har den tekniske dybden til å gjennomføre ideer som andre selskaper ikke vil ta på seg.',
    about_principles_eyebrow: 'Slik jobber vi',
    about_principles_h2: 'Arbeids<span class="grad-text">prinsipper</span>',
    about_principles_lead: 'Dette er ikke verdier på en vegg. Det er reglene vi faktisk bruker for å ta beslutninger.',
    p1_h3: 'Resultater over leveranser',
    p1_p:  'Vi måler suksess ved hva som endret seg i virksomheten din, ikke hva vi leverte inn i et Jira-brett. Hvis resultatet ikke landet, lyktes ikke prosjektet — uavhengig av hva som ble levert.',
    p2_h3: 'Tenk i år, lever i uker',
    p2_p:  'Arkitekturbeslutninger er 5-årssatser. Leveringstakt er ukentlig. Vi holder begge samtidig — og lar ikke kortsiktig press gå på bekostning av langsiktig integritet.',
    p3_h3: 'Del risikoen',
    p3_p:  'Vi tar eierandeler i ambisiøse prosjekter. Vi tilbyr resultatbaserte honorarer. Vi gjemmer oss ikke bak fastpriskontrakter når det virkelige problemet fortsatt oppdages.',
    p4_h3: 'Ærlig som standard',
    p4_p:  'Vi forteller klienter når ideen ikke vil fungere, når en billigere tilnærming finnes, og når vi ikke er rett valg. Det kortsiktige ubehaget er verdt den langsiktige tilliten.',
    p5_h3: 'Handlingsorientert',
    p5_p:  'En fungerende prototype slår en perfekt spesifikasjon. Vi velger å bygge tingen, lære av den og iterere — ikke planlegge for en imaginær fremtidig tilstand.',
    p6_h3: 'Norsk-bygget, globalt kapabel',
    p6_p:  'Vi er stolte av å være et norsk selskap. Vi bygger etter norske standarder, etterlevelseskrav og kulturelle normer — men ambisjonen vår er ikke begrenset av landegrenser.',
    about_team_eyebrow: 'Teamet',
    about_team_h2:    'Erfarne ingeniører. <span class="grad-text">Null ego.</span>',
    about_team_lead:  'Vi ansetter folk som har levert ting før — og som er sultne på å levere ting igjen.',
    anil_stat1_lbl:   'År med erfaring',
    anil_stat2_lbl:   'Null-nedetids-migrasjoner',
    anil_stat3_lbl:   'Reduksjon i syklustid',
    swapna_stat1_lbl: 'År med ERP-erfaring',
    swapna_stat2_lbl: 'Land støttet',
    swapna_stat3_lbl: 'Live systemintegrasjoner',
    chandra_stat1_lbl: 'År med erfaring',
    chandra_stat2_lbl: 'Årlig programverdi',
    chandra_stat3_lbl: 'Azure kostnadsreduksjon',
    open_role_h4:     'Ledig stilling',
    role_hop:         'Produktsjef',
    role_hop_p:       'Vi leter etter en produktleder som har tatt 0→1-produkter til markedet i komplekse B2B-miljøer. Høres det ut som deg?',
    role_ai:          'KI/ML-leder',
    role_ai_p:        'Vi trenger noen som har satt ekte ML-systemer i produksjon — ikke bare notatbøker. FAANG-nivå tenkning, oppstartsbedrift-nivå gjennomføring.',
    about_join_p:     'Tror du at du hører hjemme her? Vi leter alltid etter eksepsjonelle ingeniører.',
    about_join_btn:   'Ta kontakt →',
    about_cta_eyebrow: 'La oss bygge sammen',
    about_cta_h2:     'Ambisiøse problemer trenger <span class="grad-text">ambisiøse partnere</span>',
    about_cta_p:      'Hvis du bygger noe vanskelig og trenger ingeniører som har gjort det før — bør vi snakke.',
    about_cta_btn:    'Ta kontakt →',

    /* ── What We Do page ── */
    wwd_hero_eyebrow: 'Våre tjenester',
    wwd_hero_h1:      'Vi bygger <span class="grad-text">hele stacken</span>',
    wwd_hero_lead:    'Fra produktstrategi til leverte elektroner — Adaptiv AS dekker hvert lag i den moderne teknologistacken. Ingen overleveringer, ingen hull.',
    wwd_01_eyebrow:   '01 — Produkter',
    wwd_01_h2:        'Meningssterk programvare som <span class="grad-text">holder seg ute av veien</span>',
    wwd_01_p1:        'Vi bygger programvareprodukter rundt reelle arbeidsflyter — ikke funksjonslister. Hvert produkt vi leverer starter med grundig domenearbeid, ikke en backlog. Vi eier resultatet, ikke bare leveransen.',
    wwd_01_p2:        'Produktene våre lever i produksjon, vedlikeholdes og utvikles med virksomheten din. Vi kaster ikke kode over gjerdet.',
    step1_h4:         'Domeneoppdagelse',
    step1_p:          'Dypdykk i problemrommet — ikke løsningsrommet.',
    step2_h4:         'Fungerende prototype',
    step2_p:          'Klikkbar, testbar og ekte — på uker.',
    step3_h4:         'Produksjonslansering',
    step3_p:          'Bygget for å vare, ikke bare for å demonstrere.',
    step4_h4:         'Kontinuerlig iterasjon',
    step4_p:          'Vi blir i produktet, ikke går videre til neste prosjekt.',
    wwd_02_eyebrow:   '02 — KI og maskinlæring',
    wwd_02_h2:        'Praktisk KI som <span class="grad-text">endrer operasjoner</span>',
    wwd_02_p1:        'Vi bygger KI som tar reelle beslutninger i reelle arbeidsflyter — ikke demoer som lever i lysbildefremvisninger. Fra LLM-integrasjoner til skreddersydde ML-pipelines jobber vi med modellene som betyr noe nå.',
    wwd_02_p2:        'Vi har bygget multi-modell-rutingssystemer, semantisk søkeinfrastruktur, autonome agentplattformer og KI-forsterket kliniske verktøy.',
    ai_cap_eyebrow:   'KI-tjenester',
    wwd_03_eyebrow:   '03 — Sky og infrastruktur',
    wwd_03_h2:        'Plattformer som <span class="grad-text">skalerer uten drama</span>',
    wwd_03_p1:        'Vi designer skyarkitektur på Azure og OCI — inkludert hybrid- og multi-sky-oppsett. Kubernetes, Terraform, GitOps. Landingssoner, identitetsplattformer og dataplattformer bygget etter norske etterlevelseskrav.',
    wwd_03_p2:        'Vi har bygget Oracle ExaDB-migrasjonsrørledninger, Azure DaaS-plattformer og Kubernetes-native mikrotjenesteestater.',
    wwd_more_eyebrow: 'Flere tjenester',
    wwd_more_h2:      'Resten av <span class="grad-text">stacken</span>',
    wwd_elec_h3:      'Tilpasset elektronikk',
    wwd_elec_p:       'Konsept via prototype til produksjon. Innebygde systemer, IoT-enheter, sensorplattformer og industriell styremaskinvare designet og produsert etter spesifikasjon.',
    wwd_talent_h3:    'Kompetanse og bemanning',
    wwd_talent_p:     'Seniorkonsulenter og arkitekter på bestilling. Vi gjør ikke massematching av CV-er — vi matcher på dybde av domenekompetanse og umiddelbart bidragspotensial.',
    wwd_sec_h3:       'Sikkerhet',
    wwd_sec_p:        'Sikkerhet designet inn, ikke boltet på. Trusselmodellering, penetrasjonstesting, etterlevelse (NIS2, GDPR, ISO 27001) og hendelseshåndtering for regulerte bransjer.',
    partner_eyebrow:  'Partnerplattformer',
    partner_h2:       'Beste programvare <span class="grad-text">vi implementerer og støtter</span>',
    partner_lead:     'Utover våre egne bygg bringer vi sertifisert kompetanse på to spesialistplattformer — utrullet, integrert og vedlikeholdt av teamet vårt.',
    decisions_tagline: 'Kodefri prosessautomatisering for regulerte bransjer',
    decisions_p:      'En dra-og-slipp arbeidsflyt og regelmotor bygget for komplekse, regulerte prosesser — medisinske krav, forsikringsgaranti, boliglånsgodkjenning og ERP-automatisering. Erstatt sprø BPMN-skript med visuelle flyter som driftsteamet ditt kan eie.',
    pds_tagline:      'Flerspråklig kundekommunikasjon i enterprise-skala',
    pds_p:            'En KI-drevet KKM-plattform som genererer, administrerer og leverer kundekommunikasjon på 108 språk og alle kanaler. Reduserer dokumentproduksjonskostnadene med 40%+ og er fullt GDPR-kompatibel — betrodd av Xerox, Gallagher, DKV og Jack Henry.',
    wwd_cta_eyebrow:  'La oss planlegge det',
    wwd_cta_h2:       'Fortell oss problemet. <span class="grad-text">Vi finner tilnærmingen.</span>',
    wwd_cta_p:        'En 30-minutters samtale er alt som trengs for å finne ut om vi passer — og hva den første milepælen ser ut.',
    wwd_cta_btn:      'Book en samtale →',

    /* ── Sectors page ── */
    sectors_page_eyebrow: 'Hvor vi opererer',
    sectors_page_h1:  'Vi går dit<br/><span class="grad-text">problemene er vanskeligst</span>',
    sectors_page_lead: 'Adaptiv AS tiltrekkes av bransjer der transformasjon er overmoden, innsatsen er høy og etablerte aktører beveger seg sakte. Det er der det virkelige arbeidet er.',

    /* ── Case Studies page ── */
    cs_page_eyebrow:  'Vårt arbeid',
    cs_page_h1:       'Reelle problemer. <span class="grad-text">Reelle resultater.</span>',
    cs_page_lead:     'Utvalgte resultater fra 15+ år med enterprise-leveranse i Norge og Europa.',

    /* ── Blog page ── */
    blog_eyebrow:     'Fra ingeniørene',
    blog_h1:          'Hva vi <span class="grad-text">tenker på</span>',
    blog_lead:        'Tekniske dykk, arkitekturavgjørelser og observasjoner fra feltet.',

    /* ── Contact page ── */
    contact_eyebrow:  'Si hei',
    contact_h1:       'La oss starte en <span class="grad-text">samtale</span>',
    contact_lead:     'Enten du har en brief, et problem eller bare en idé — vi hører gjerne fra deg.',

    /* ── Cookie banner ── */
    cookie_title:     'Informasjonskapsel-innstillinger',
    cookie_text:      'Vi bruker analyse-informasjonskapsler for å forstå hvordan besøkende bruker dette nettstedet og forbedre det. Du kan godta eller avslå.',
    cookie_decline:   'Avslå',
    cookie_accept:    'Godta',
  }
};

/* ══════════════════════════════════════════════
   Engine
══════════════════════════════════════════════ */
function applyLang(lang) {
  const dict = T[lang] || T.en;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });

  // Update toggle button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('adaptiv_lang', lang);
}

window.switchLang = function(lang) { applyLang(lang); };

document.addEventListener('DOMContentLoaded', function() {
  const stored = localStorage.getItem('adaptiv_lang') || 'en';
  applyLang(stored);
});
