'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Sparkles, Bot, Cloud, Cpu, Users, ShieldCheck,
  Zap, Target, Telescope, Handshake,
  Landmark, Activity, Factory, Ship, ArrowRight,
} from 'lucide-react'
import { FadeUp, FadeIn, StaggerGrid } from '@/components/motion'
import { useState } from 'react'

const STATS = [
  { value: '15+', label: 'Years enterprise delivery' },
  { value: '30+', label: 'Zero-downtime migrations' },
  { value: '100%', label: 'Norwegian-owned' },
  { value: 'Oslo', label: 'Founded 2026' },
]

const CAPS = [
  { icon: Sparkles, title: 'Products', body: 'Opinionated software designed around real workflows — not feature lists. We ship, iterate, and own the outcome.' },
  { icon: Bot, title: 'AI & Machine Learning', body: 'From LLM integrations to bespoke ML pipelines — practical AI that makes operations smarter, not flashier.' },
  { icon: Cloud, title: 'Cloud & Infrastructure', body: 'Azure, OCI, hybrid architectures. Platforms that scale without drama and cost without surprises.' },
  { icon: Cpu, title: 'Custom Electronics', body: 'From concept through prototype to production — hardware that connects the physical and digital worlds.' },
  { icon: Users, title: 'Talent & Staffing', body: 'Senior engineers on demand. No CVs, no wasted time — the right person, ready to contribute from day one.' },
  { icon: ShieldCheck, title: 'Security', body: 'Security designed in, not bolted on. Threat modelling, compliance, and incident response for regulated industries.' },
]

const FEATURES = [
  { icon: Zap, title: 'Move fast', body: 'Working prototypes in weeks, not quarters' },
  { icon: Target, title: 'Stay focused', body: 'Every decision tied to a real business outcome' },
  { icon: Telescope, title: 'Think long', body: 'Architectures that survive the next five years' },
  { icon: Handshake, title: 'Own it together', body: 'Partners, not vendors — we share the risk' },
]

const SECTORS = [
  {
    icon: Landmark, color: '#7B4FFF', label: 'Public Sector', stat: '27 systems delivered',
    desc: 'Tax, health, defence, transport, civic services. NSM ICT framework and DIFI standards by default.',
    clients: 'Skatteetaten · Helsedirektoratet · DSB · Bymiljøetaten',
  },
  {
    icon: Activity, color: '#00D4FF', label: 'Health & Life Sciences', stat: '4.2M records/h ingested',
    desc: 'Clinical systems, FHIR-compliant data lakes, AI-assisted diagnostics. Norway\'s health data deserves infrastructure matching its sensitivity.',
    clients: 'HSØ · Sykehuspartner · DIPS AS',
  },
  {
    icon: Zap, color: '#FF2D9B', label: 'Energy & Utilities', stat: 'Real-time edge control',
    desc: 'Grid intelligence, offshore systems, renewables management. Real-time control where downtime is measured in megawatts.',
    clients: 'Statnett · Equinor · Hafslund Nett',
  },
  {
    icon: Factory, color: '#FF8A65', label: 'Industrial', stat: '30% faster month-end close',
    desc: 'ERP, IoT, edge compute, process automation. Norway\'s industrial backbone deserves systems that move as fast as it does.',
    clients: 'Alfa Laval · Norsk Hydro · Yara',
  },
  {
    icon: Ship, color: '#5A4BFF', label: 'Maritime & Logistics', stat: 'Fleet-wide visibility',
    desc: 'Vessel telematics, port operations, supply-chain visibility. Norway is a maritime nation — we build systems that match that heritage.',
    clients: 'Høegh LNG · Wallenius Wilhelmsen · DFDS',
  },
]

const CASES = [
  { label: 'Public Sector · Cloud', title: 'Oracle ExaDB Migration — Skatteetaten', body: 'Zero-downtime migration of national tax database from 19c to 26ai. 40% performance uplift.' },
  { label: 'Healthcare · Data Platform', title: 'National Health Data Platform', body: 'FHIR-compliant Azure data lakehouse. Reporting cycle: weeks → hours across multiple hospital trusts.' },
  { label: 'ERP · Manufacturing', title: 'D365 F&O — Alfa Laval Europe', body: "One of Europe's largest D365 implementations. 30% faster month-end close across 8 countries." },
]

export default function Home() {
  const [activeSector, setActiveSector] = useState(0)

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]" style={{ background: '#7B4FFF' }} />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-8 blur-[100px]" style={{ background: '#00D4FF' }} />
          <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full opacity-6 blur-[80px]" style={{ background: '#FF2D9B' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                className="eyebrow mb-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Built in Norway · For Norway · Est. 2026
              </motion.p>

              <motion.h1
                className="text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ color: 'var(--text)' }}
              >
                Sovereign software<br />
                for Norway&apos;s most critical<br />
                <span className="grad-text">digital problems.</span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted leading-relaxed mb-10 max-w-xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                We design, build, and operate the products, AI systems, and cloud platforms that
                public-sector and regulated industries can&apos;t buy off the shelf.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 mb-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  href="https://calendly.com/anilkallu/30min"
                  target="_blank"
                  rel="noopener"
                  className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)', boxShadow: '0 8px 32px rgba(123,79,255,0.35)' }}
                >
                  Book a 30-min discovery call
                </Link>
                <Link
                  href="/case-studies"
                  className="px-6 py-3 rounded-xl font-medium transition-all hover:bg-white/5"
                  style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
                >
                  See case studies
                </Link>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 text-xs font-mono text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {['✓ DIFI compliant', '✓ NSM ICT framework', '✓ NO Org. 937 171 250'].map(t => (
                  <span key={t}>{t}</span>
                ))}
              </motion.div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.value}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-2xl p-6"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <div className="text-3xl font-bold grad-text mb-1">{s.value}</div>
                  <div className="text-sm text-muted">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted font-mono">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="w-0.5 h-2 rounded-full bg-[var(--text-muted)]" />
          </motion.div>
          <span>scroll</span>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="border-y" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-4">
          <span className="text-xs font-mono text-muted">Delivered for</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {['Skatteetaten', 'HSØ', 'Sykehuspartner', 'DNV GL', 'DNB Markets', 'Høegh LNG'].map(n => (
              <span key={n} className="text-sm font-medium" style={{ color: 'var(--text)' }}>{n}</span>
            ))}
          </div>
          <Link href="/case-studies" className="ml-auto text-xs font-mono text-muted hover:text-[var(--text)] transition-colors flex items-center gap-1">
            See all <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      {/* CAPABILITIES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="eyebrow mb-3">What we build</p>
            <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              Six pillars. <span className="grad-text">Unlimited scope.</span>
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              We don&apos;t specialise in one thing. We are builders — and we bring the full stack to every problem.
            </p>
          </FadeUp>

          <StaggerGrid
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {CAPS.map(c => (
              <div
                key={c.title}
                className="rounded-2xl p-6 group hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg,rgba(123,79,255,0.2),rgba(0,212,255,0.2))' }}>
                  <c.icon size={18} style={{ color: '#7B4FFF' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.body}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <div className="border-y py-12" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map(f => (
              <div key={f.title} className="flex flex-col gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,rgba(123,79,255,0.15),rgba(0,212,255,0.15))' }}>
                  <f.icon size={16} style={{ color: '#7B4FFF' }} />
                </div>
                <h4 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{f.title}</h4>
                <p className="text-xs text-muted leading-relaxed">{f.body}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </div>

      {/* SECTORS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="eyebrow mb-3">Industries</p>
            <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              We go where the <span className="grad-text">problems are hardest</span>
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              Drawn to industries where transformation is overdue, stakes are high, and incumbents move slowly.
            </p>
          </FadeUp>

          <div className="grid lg:grid-cols-[220px_1fr] gap-6">
            {/* Tabs */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {SECTORS.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => setActiveSector(i)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all text-left ${
                    activeSector === i ? 'text-white' : 'text-muted hover:text-[var(--text)]'
                  }`}
                  style={{
                    background: activeSector === i ? `linear-gradient(135deg,${s.color}22,${s.color}11)` : 'transparent',
                    border: activeSector === i ? `1px solid ${s.color}44` : '1px solid transparent',
                  }}
                >
                  <s.icon size={15} style={{ color: activeSector === i ? s.color : 'inherit', flexShrink: 0 }} />
                  {s.label}
                </button>
              ))}
              <p className="text-xs text-muted px-4 pt-2 hidden lg:block">
                Don&apos;t see yours?{' '}
                <Link href="/contact" className="underline underline-offset-2 hover:text-[var(--text)]">Let&apos;s talk →</Link>
              </p>
            </div>

            {/* Panel */}
            <motion.div
              key={activeSector}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-8"
              style={{
                background: 'var(--surface)',
                border: `1px solid ${SECTORS[activeSector].color}33`,
                boxShadow: `0 0 60px ${SECTORS[activeSector].color}10`,
              }}
            >
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: SECTORS[activeSector].color,
                    boxShadow: `0 12px 40px ${SECTORS[activeSector].color}44`,
                  }}
                >
                  {(() => { const Icon = SECTORS[activeSector].icon; return <Icon size={20} className="text-white" /> })()}
                </div>
                <div>
                  <div className="text-xs font-mono text-muted mb-1">{SECTORS[activeSector].stat}</div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{SECTORS[activeSector].label}</h3>
                </div>
              </div>
              <p className="text-muted leading-relaxed mb-6">{SECTORS[activeSector].desc}</p>
              <div className="rounded-xl px-4 py-3 mb-6" style={{ background: 'var(--surface-2)' }}>
                <div className="text-xs font-mono text-muted mb-1">Trusted by</div>
                <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>{SECTORS[activeSector].clients}</div>
              </div>
              <Link href="/sectors" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-[var(--text)] transition-colors">
                Explore this sector <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="eyebrow mb-3">Proof of work</p>
            <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              Results, not <span className="grad-text">promises</span>
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              Selected outcomes from 15+ years of enterprise delivery across Norway and Europe.
            </p>
          </FadeUp>

          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {CASES.map(c => (
              <div
                key={c.title}
                className="rounded-2xl p-6 group hover:border-purple-500/30 transition-all duration-300"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="text-xs font-mono text-muted mb-3">{c.label}</div>
                <h3 className="font-semibold mb-2 text-[0.95rem]" style={{ color: 'var(--text)' }}>{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{c.body}</p>
                <Link href="/case-studies" className="text-xs font-mono text-muted hover:text-[var(--text)] transition-colors flex items-center gap-1">
                  Read case study <ArrowRight size={11} />
                </Link>
              </div>
            ))}
          </StaggerGrid>

          <div className="text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all hover:bg-white/5"
              style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
            >
              See all case studies <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="relative rounded-3xl overflow-hidden p-12 text-center"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              {/* Halo */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-20 blur-[80px]"
                  style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)' }} />
              </div>
              <div className="relative">
                <p className="eyebrow mb-4">Ready to build?</p>
                <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
                  Big ideas need <span className="grad-text">serious engineers</span>
                </h2>
                <p className="text-muted max-w-md mx-auto mb-8">
                  Whether you have a product spec, a vague problem, or just an ambition — we can find the shape of the solution together.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)', boxShadow: '0 8px 32px rgba(123,79,255,0.3)' }}
                >
                  Start a conversation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
