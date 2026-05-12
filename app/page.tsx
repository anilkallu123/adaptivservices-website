'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeUp, StaggerGrid } from '@/components/motion'
import { useState } from 'react'
import { track } from '@vercel/analytics'
import { STATS, CAPABILITIES, FEATURES, SECTORS, CASES } from '@/lib/data'

export default function Home() {
  const [activeSector, setActiveSector] = useState(0)

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]" style={{ background: '#7B4FFF' }} />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-[100px]" style={{ background: '#00D4FF' }} />
          <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full opacity-[0.06] blur-[80px]" style={{ background: '#FF2D9B' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p className="eyebrow mb-5"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                Built in Norway · For Norway · Est. 2026
              </motion.p>

              <motion.h1
                className="text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                style={{ color: 'var(--text)' }}
              >
                Sovereign software<br />
                for Norway&apos;s most critical<br />
                <span className="grad-text">digital problems.</span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted leading-relaxed mb-10 max-w-xl"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              >
                We design, build, and operate the products, AI systems, and cloud platforms that
                public-sector and regulated industries can&apos;t buy off the shelf.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-3 mb-10"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link
                  href="https://calendly.com/anilkallu/30min"
                  target="_blank" rel="noopener"
                  onClick={() => track('cta_click', { label: 'hero_book_call' })}
                  className="px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)', boxShadow: '0 8px 32px rgba(123,79,255,0.35)' }}
                >
                  Book a 30-min discovery call
                </Link>
                <Link
                  href="/case-studies"
                  onClick={() => track('cta_click', { label: 'hero_case_studies' })}
                  className="px-6 py-3 rounded-xl font-medium transition-all hover:bg-white/5"
                  style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
                >
                  See case studies
                </Link>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 text-xs font-mono text-muted"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >
                {['✓ DIFI compliant', '✓ NSM ICT framework', '✓ NO Org. 937 171 250'].map(t => (
                  <span key={t}>{t}</span>
                ))}
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.value}
                  initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted font-mono">
          <motion.div
            animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
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

          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map(c => (
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
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {SECTORS.map((s, i) => (
                <button
                  key={s.label}
                  onClick={() => { setActiveSector(i); track('sector_tab', { label: s.label }) }}
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

            <motion.div
              key={activeSector}
              initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-8"
              style={{
                background: 'var(--surface)',
                border: `1px solid ${SECTORS[activeSector].color}33`,
                boxShadow: `0 0 60px ${SECTORS[activeSector].color}10`,
              }}
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: SECTORS[activeSector].color, boxShadow: `0 12px 40px ${SECTORS[activeSector].color}44` }}>
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
                <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>{SECTORS[activeSector].clientsStr}</div>
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
                  onClick={() => track('cta_click', { label: 'bottom_cta' })}
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
