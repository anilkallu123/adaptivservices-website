import type { Lang } from '@/components/lang-provider'

export type Bi = { en: string; no: string }
export const t = (s: Bi, lang: Lang) => s[lang]

export const UI = {
  /* ── Nav ── */
  nav_home:         { en: 'Home',           no: 'Hjem' },
  nav_what_we_do:   { en: 'What We Do',     no: 'Hva vi gjør' },
  nav_sectors:      { en: 'Sectors',        no: 'Sektorer' },
  nav_case_studies: { en: 'Case Studies',   no: 'Referanseprosjekter' },
  nav_insights:     { en: 'Insights',       no: 'Innsikt' },
  nav_about:        { en: 'About',          no: 'Om oss' },
  nav_cta:          { en: 'Get in touch',   no: 'Ta kontakt' },

  /* ── Home hero ── */
  hero_eyebrow:     { en: 'Built in Norway · For Norway · Est. 2026', no: 'Bygget i Norge · For Norge · Stiftet 2026' },
  hero_h1_line1:    { en: 'Sovereign software', no: 'Suveren teknologi' },
  hero_h1_line2:    { en: "for Norway's most critical", no: 'for Norges hardeste' },
  hero_h1_line3:    { en: 'digital problems.', no: 'digitale problemer.' },
  hero_lead:        { en: "We design, build, and operate the products, AI systems, and cloud platforms that public-sector and regulated industries can't buy off the shelf.", no: 'Vi designer, bygger og drifter produktene, KI-systemene og skyplattformene som offentlig sektor og regulerte bransjer ikke kan kjøpe av hylla.' },
  hero_cta_primary: { en: 'Book a 30-min discovery call', no: 'Book en 30-minutters samtale' },
  hero_cta_ghost:   { en: 'See case studies', no: 'Se referanseprosjekter' },
  hero_trust_label: { en: 'Delivered for', no: 'Levert til' },
  hero_trust_all:   { en: 'See all', no: 'Se alle' },
  hero_scroll:      { en: 'scroll', no: 'rull' },
  hero_compliance:  { en: '✓ DIFI compliant', no: '✓ DIFI-godkjent' },
  hero_nsm:         { en: '✓ NSM ICT framework', no: '✓ NSM IKT-rammeverk' },
  hero_org:         { en: '✓ NO Org. 937 171 250', no: '✓ Org.nr. 937 171 250' },

  /* ── Stats ── */
  stat_years:       { en: 'Years enterprise delivery', no: 'År med enterprise-leveranse' },
  stat_migrations:  { en: 'Zero-downtime migrations',  no: 'Null-nedetids-migrasjoner' },
  stat_owned:       { en: 'Norwegian-owned',           no: 'Norsk-eid' },
  stat_founded:     { en: 'Founded 2026',              no: 'Stiftet 2026' },

  /* ── Capabilities section ── */
  caps_eyebrow:     { en: 'What we build',         no: 'Hva vi bygger' },
  caps_h2_1:        { en: 'Everything you need.',  no: 'Alt du trenger.' },
  caps_h2_2:        { en: "Nothing you don't.",    no: 'Ingenting du ikke trenger.' },
  caps_lead:        { en: 'Six integrated capabilities, so you work with one team instead of six vendors.', no: 'Seks integrerte tjenester, slik at du jobber med ett team i stedet for seks leverandører.' },

  /* ── Feature strip ── */
  fs_fast_h4:   { en: 'Move fast',       no: 'Beveg deg raskt' },
  fs_fast_p:    { en: 'Working prototypes in weeks, not quarters', no: 'Fungerende prototyper på uker, ikke kvartaler' },
  fs_focus_h4:  { en: 'Stay focused',    no: 'Hold fokus' },
  fs_focus_p:   { en: 'Every decision tied to a real business outcome', no: 'Hver beslutning knyttet til et reelt forretningsmål' },
  fs_think_h4:  { en: 'Think long',      no: 'Tenk langsiktig' },
  fs_think_p:   { en: 'Architectures that survive the next five years', no: 'Arkitekturer som overlever de neste fem årene' },
  fs_own_h4:    { en: 'Own it together', no: 'Eie det sammen' },
  fs_own_p:     { en: 'Partners, not vendors. We share the risk', no: 'Partnere, ikke leverandører. Vi deler risikoen' },

  /* ── Sectors section ── */
  sectors_eyebrow:  { en: 'Industries',                       no: 'Bransjer' },
  sectors_h2_1:     { en: 'Industries where',                 no: 'Bransjer der' },
  sectors_h2_2:     { en: 'stakes are highest',               no: 'innsatsen er høyest' },
  sectors_lead:     { en: "We operate in sectors where getting it wrong isn't an option, public services, healthcare, energy, and industrial.", no: 'Vi opererer i sektorer der feil ikke er et alternativ, offentlige tjenester, helse, energi og industri.' },
  sectors_trusted:  { en: 'Trusted by',                       no: 'Betrodd av' },
  sectors_explore:  { en: 'Explore this sector',              no: 'Utforsk denne sektoren' },
  sectors_no_match: { en: "Don't see yours?",                 no: 'Ser du ikke din bransje?' },
  sectors_talk:     { en: "Let's talk →",                     no: 'La oss snakke →' },

  /* ── Case studies section ── */
  proof_eyebrow:    { en: 'Proof of work',  no: 'Bevis på arbeid' },
  proof_h2_1:       { en: "What we've",     no: 'Hva vi' },
  proof_h2_2:       { en: 'actually delivered', no: 'faktisk har levert' },
  proof_lead:       { en: "Three of the engagements we're most proud of, national-scale, measurable, and verifiable.", no: 'Tre av oppdragene vi er mest stolte av, nasjonal skala, målbare og verifiserbare.' },
  cs_read:          { en: 'Read case study', no: 'Les casestudie' },
  cs_see_all:       { en: 'See all case studies', no: 'Se alle referanseprosjekter' },

  /* ── Home CTA ── */
  cta_eyebrow:  { en: 'Ready to build?',             no: 'Klar til å bygge?' },
  cta_h2_1:     { en: 'Big ideas need',              no: 'Store ideer trenger' },
  cta_h2_2:     { en: 'serious engineers',           no: 'seriøse ingeniører' },
  cta_lead:     { en: "Bring the problem. We'll bring the architecture, the team, and the delivery track record to match.", no: 'Ta med problemet. Vi tar med arkitekturen, teamet og leveransehistorikken som matcher.' },
  cta_btn:      { en: 'Start a conversation',        no: 'Start en samtale' },

  /* ── What We Do page ── */
  wwd_eyebrow:  { en: 'Capabilities',                no: 'Tjenester' },
  wwd_h1_1:     { en: 'Six pillars.',                no: 'Seks pilarer.' },
  wwd_h1_2:     { en: 'Unlimited scope.',            no: 'Ubegrenset rekkevidde.' },
  wwd_lead:     { en: "We don't specialise in one thing. We bring the full stack to every problem, from embedded hardware to AI-powered cloud platforms.", no: 'Vi spesialiserer oss ikke på én ting. Vi tar med hele stacken til hvert problem, fra innebygd maskinvare til KI-drevne skyplattformer.' },
  wwd_start:    { en: 'Start a project',             no: 'Start et prosjekt' },

  /* ── Sectors page ── */
  sectors_page_eyebrow: { en: 'Industries',         no: 'Bransjer' },
  sectors_page_h1_1:    { en: 'We go where the',   no: 'Vi går dit' },
  sectors_page_h1_2:    { en: 'problems are hardest.', no: 'problemene er vanskeligst.' },
  sectors_page_lead:    { en: 'Five sectors where we have deep delivery history, and where the consequences of poor engineering are real.', no: 'Fem sektorer der vi har dyp leveransehistorikk, og der konsekvensene av dårlig ingeniørarbeid er reelle.' },
  sectors_page_discuss: { en: 'Discuss a project',  no: 'Diskuter et prosjekt' },

  /* ── Case Studies page ── */
  cs_page_eyebrow:  { en: 'Proof of work',         no: 'Bevis på arbeid' },
  cs_page_h1_1:     { en: 'Results, not',          no: 'Resultater, ikke' },
  cs_page_h1_2:     { en: 'promises.',             no: 'løfter.' },
  cs_page_lead:     { en: 'Selected outcomes from 20 years of enterprise delivery across Norway and Europe.', no: 'Utvalgte resultater fra 20 år med enterprise-leveranse i Norge og Europa.' },
  cs_working_on:    { en: 'Working on something similar?', no: 'Jobber du med noe lignende?' },
  cs_page_cta:      { en: 'Start a conversation',  no: 'Start en samtale' },
  cs_outcome_check: { en: '✓',                     no: '✓' },

  /* ── Blog page ── */
  blog_eyebrow:  { en: 'Insights',                  no: 'Innsikt' },
  blog_h1_1:     { en: 'Technical writing',         no: 'Teknisk skriving' },
  blog_h1_2:     { en: 'from the trenches.',        no: 'fra fronten.' },
  blog_lead:     { en: 'Practical guides, architecture decisions, and hard-won lessons from production systems.', no: 'Praktiske guider, arkitekturavgjørelser og hardt tilkjempede erfaringer fra produksjonssystemer.' },
  blog_read:     { en: 'Read article',              no: 'Les artikkelen' },

  /* ── About page ── */
  about_eyebrow:   { en: 'About Adaptiv AS',        no: 'Om Adaptiv AS' },
  about_h1_1:      { en: 'Built by engineers,',     no: 'Bygget av ingeniører,' },
  about_h1_2:      { en: 'run by engineers.',       no: 'drevet av ingeniører.' },
  about_lead:      { en: 'Adaptiv AS is a Norwegian IT venture founded in Oslo in 2026. We work at the intersection of cloud infrastructure, AI, and software product development, with a focus on industries where getting it wrong isn\'t an option.', no: 'Adaptiv AS er et norsk IT-selskap stiftet i Oslo i 2026. Vi jobber i skjæringspunktet mellom skyinfrastruktur, KI og programvareutvikling, med fokus på bransjer der feil ikke er et alternativ.' },
  about_principles_eyebrow: { en: 'What we believe', no: 'Hva vi tror på' },
  about_principles_h2: { en: 'Our principles',     no: 'Våre prinsipper' },
  about_founder_eyebrow: { en: 'The person behind it', no: 'Personen bak' },
  about_founder_h2:      { en: 'Founder',              no: 'Gründer' },
  about_founder_role:    { en: 'Founder & Principal Architect', no: 'Gründer og sjefsarkitekt' },
  about_founder_bio:     {
    en: 'Anil has spent 20 years building enterprise software and cloud infrastructure for some of Norway\'s most demanding organisations, from national health data platforms to critical tax systems. He founded Adaptiv AS to bring senior-level architecture and delivery to organisations that need to move fast without cutting corners on compliance, sovereignty, or long-term maintainability.',
    no: 'Anil har brukt 20 år på å bygge enterprise-programvare og skyinfrastruktur for noen av Norges mest krevende organisasjoner, fra nasjonale helsedataplattformer til kritiske skattesystemer. Han stiftet Adaptiv AS for å bringe arkitektur og leveranse på seniornivå til organisasjoner som trenger å bevege seg raskt uten å ta snarveier på etterlevelse, suverenitet eller langsiktig vedlikeholdbarhet.',
  },
  about_founder_linkedin: { en: 'Connect on LinkedIn', no: 'Koble til på LinkedIn' },
  about_work_eyebrow: { en: 'Work with us',         no: 'Jobb med oss' },
  about_work_h2_1:    { en: 'Interested in joining', no: 'Interessert i å bli med i' },
  about_work_h2_2:    { en: 'Adaptiv AS?',          no: 'Adaptiv AS?' },
  about_work_lead:    { en: "We work with senior engineers and architects. If you build serious things and care deeply about craft, let's talk.", no: 'Vi jobber med seniorkonsulenter og arkitekter. Hvis du bygger seriøse ting og bryr deg dypt om håndverket, ta kontakt.' },
  about_work_cta:     { en: 'Get in touch',         no: 'Ta kontakt' },

  /* ── Contact page ── */
  contact_eyebrow:   { en: 'Get in touch',          no: 'Ta kontakt' },
  contact_h1_1:      { en: "Let's build something", no: 'La oss bygge noe' },
  contact_h1_2:      { en: 'worth building.',       no: 'verdt å bygge.' },
  contact_lead:      { en: "Whether you have a spec, a vague problem, or just an ambition, reach out and we'll find the shape of the solution together.", no: 'Enten du har en spesifikasjon, et uklart problem eller bare en ambisjon, ta kontakt, så finner vi formen på løsningen sammen.' },
  contact_form_h2:   { en: 'Send a message',        no: 'Send en melding' },
  contact_name:      { en: 'Name',                  no: 'Navn' },
  contact_email_lbl: { en: 'Email',                 no: 'E-post' },
  contact_company:   { en: 'Company',               no: 'Selskap' },
  contact_message:   { en: 'Message',               no: 'Melding' },
  contact_name_ph:   { en: 'Ola Nordmann',          no: 'Ola Nordmann' },
  contact_email_ph:  { en: 'ola@company.no',        no: 'ola@bedrift.no' },
  contact_co_ph:     { en: 'Acme AS',               no: 'Acme AS' },
  contact_msg_ph:    { en: 'Tell us about your project or challenge...', no: 'Fortell oss om prosjektet eller utfordringen din...' },
  contact_send:      { en: 'Send message',          no: 'Send melding' },
  contact_sending:   { en: 'Sending…',              no: 'Sender…' },
  contact_sent_h3:   { en: 'Message received',      no: 'Melding mottatt' },
  contact_sent_p:    { en: "We'll get back to you within one business day.", no: 'Vi kommer tilbake til deg innen én virkedag.' },
  contact_book:      { en: 'Book a call',           no: 'Book en samtale' },
  contact_book_desc: { en: '30-min discovery, no sales pitch', no: '30 min oppdagelse, ingen salgspitch' },
  contact_book_cta:  { en: 'Book on Calendly',      no: 'Book på Calendly' },
  contact_email_ch:  { en: 'Email us',              no: 'Send e-post' },
  contact_email_desc:{ en: 'For project enquiries and partnerships', no: 'For prosjektforespørsler og partnerskap' },
  contact_oslo:      { en: 'Oslo office',           no: 'Oslo-kontor' },
  contact_oslo_desc: { en: 'Meetings by appointment', no: 'Møter etter avtale' },
  contact_oslo_cta:  { en: 'Oslo, Norway',          no: 'Oslo, Norge' },

  /* ── Footer ── */
  footer_brand_p:    { en: 'An ambitious Norwegian IT venture, building products, platforms, and infrastructure for tomorrow.', no: 'Et ambisiøst norsk IT-selskap, bygger produkter, plattformer og infrastruktur for fremtiden.' },
  footer_company:    { en: 'Company',               no: 'Selskap' },
  footer_services:   { en: 'Services',              no: 'Tjenester' },
  footer_contact_h:  { en: 'Stay in touch',         no: 'Hold kontakten' },
  footer_nl_p:       { en: 'Technical insights from Oslo.', no: 'Teknisk innsikt fra Oslo.' },
  nl_done:           { en: '✓ Subscribed', no: '✓ Abonnert' },
  nl_email_label:    { en: 'Email address', no: 'E-postadresse' },
  footer_copyright:  { en: '© 2026 Adaptiv AS. All rights reserved. Org. nr. 937 171 250', no: '© 2026 Adaptiv AS. Alle rettigheter forbeholdt. Org.nr. 937 171 250' },
  footer_built:      { en: 'Designed and built in Oslo', no: 'Designet og bygget i Oslo' },
  footer_about:      { en: 'About',                 no: 'Om oss' },
  footer_cs:         { en: 'Case Studies',          no: 'Referanseprosjekter' },
  footer_insights:   { en: 'Insights',              no: 'Innsikt' },
  footer_contact_l:  { en: 'Contact',               no: 'Kontakt' },
  footer_products:   { en: 'Products',              no: 'Produkter' },
  footer_ai:         { en: 'AI & ML',               no: 'KI og ML' },
  footer_cloud:      { en: 'Cloud',                 no: 'Sky' },
  footer_electronics:{ en: 'Electronics',           no: 'Elektronikk' },
  footer_oslo_loc:   { en: 'Oslo, Norway · 59.913°N, 10.752°E', no: 'Oslo, Norge · 59.913°N, 10.752°E' },
} satisfies Record<string, { en: string; no: string }>
