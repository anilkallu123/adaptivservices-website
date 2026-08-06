'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeUp, StaggerGrid } from '@/components/motion'
import { useState } from 'react'
import { track } from '@vercel/analytics'
import { useLang } from '@/components/lang-provider'
import { UI } from '@/lib/i18n'
import { STATS, CAPABILITIES, FEATURES, SECTORS, CASES, loc } from '@/lib/data'

export default function Home() {
  const [activeSector, setActiveSector] = useState(0)
  const { lang } = useLang()

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
                {UI.hero_eyebrow[lang]}
              </motion.p>

              <motion.h1
                className="text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                style={{ color: 'var(--text)' }}
              >
                {UI.hero_h1_line1[lang]}<br />
                {UI.hero_h1_line2[lang]}<br />
                <span className="grad-text">{UI.hero_h1_line3[lang]}</span>
              </motion.h1>

              <motion.p
                className="text-lg text-muted leading-relaxed mb-10 max-w-xl"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              >
                {UI.hero_lead[lang]}
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
                  style={{ background: 'var(--btn-gradient)', boxShadow: '0 8px 32px rgba(123,79,255,0.35)' }}
                >
                  {UI.hero_cta_primary[lang]}
                </Link>
                <Link
                  href="/case-studies"
                  onClick={() => track('cta_click', { label: 'hero_case_studies' })}
                  className="px-6 py-3 rounded-xl font-medium transition-all hover:bg-white/5"
                  style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
                >
                  {UI.hero_cta_ghost[lang]}
                </Link>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 text-sm font-mono text-muted"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
              >
                {[UI.hero_compliance[lang], UI.hero_nsm[lang], UI.hero_org[lang]].map(t => (
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
                  <div className="text-3xl font-bold mb-1" style={{ color: 'var(--label)' }}>{s.value}</div>
                  <div className="text-sm text-muted">{UI[s.labelKey][lang]}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sm text-muted font-mono">
          <motion.div
            animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="w-0.5 h-2 rounded-full bg-[var(--text-muted)]" />
          </motion.div>
          <span>{UI.hero_scroll[lang]}</span>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="border-y" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-4">
          <span className="text-sm text-muted">{UI.hero_trust_label[lang]}</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {['Skatteetaten', 'HSØ', 'Sykehuspartner', 'DNV GL', 'DNB Markets', 'Høegh LNG'].map(n => (
              <span key={n} className="text-sm font-medium" style={{ color: 'var(--text)' }}>{n}</span>
            ))}
          </div>
          <Link href="/case-studies" className="ml-auto text-sm font-mono text-muted hover:text-[var(--text)] transition-colors flex items-center gap-1 min-h-[44px]">
            {UI.hero_trust_all[lang]} <ArrowRight size={12} />
          </Link>
        </div>
      </div>

      {/* CAPABILITIES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-16">
            <p className="eyebrow mb-3">{UI.caps_eyebrow[lang]}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              {UI.caps_h2_1[lang]} {UI.caps_h2_2[lang]}
            </h2>
            <p className="text-muted max-w-lg mx-auto">{UI.caps_lead[lang]}</p>
          </FadeUp>

          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map(c => (
              <div
                key={c.title.en}
                className="rounded-2xl overflow-hidden group hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/[0.07] hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="h-px w-full opacity-60" style={{ background: 'linear-gradient(90deg,#7B4FFF,#00D4FF)' }} />
                <div className="p-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg,rgba(123,79,255,0.2),rgba(0,212,255,0.2))' }}>
                    <c.icon size={20} style={{ color: 'var(--label)' }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>{loc(c.title, lang)}</h3>
                  <p className="text-sm text-muted leading-relaxed">{loc(c.body, lang)}</p>
                </div>
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
              <div key={f.titleKey} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,rgba(123,79,255,0.15),rgba(0,212,255,0.15))' }}>
                  <f.icon size={20} style={{ color: 'var(--label)' }} />
                </div>
                <h4 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{UI[f.titleKey][lang]}</h4>
                <p className="text-sm text-muted leading-relaxed">{UI[f.bodyKey][lang]}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </div>

      {/* SECTORS */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="eyebrow mb-3">{UI.sectors_eyebrow[lang]}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              {UI.sectors_h2_1[lang]} {UI.sectors_h2_2[lang]}
            </h2>
            <p className="text-muted max-w-lg mx-auto">{UI.sectors_lead[lang]}</p>
          </FadeUp>

          <div className="grid lg:grid-cols-[220px_1fr] gap-6">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {SECTORS.map((s, i) => (
                <button
                  key={s.label.en}
                  onClick={() => { setActiveSector(i); track('sector_tab', { label: s.label.en }) }}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all text-left ${
                    activeSector === i ? 'text-white' : 'text-muted hover:text-[var(--text)]'
                  }`}
                  style={{
                    background: activeSector === i ? `linear-gradient(135deg,${s.color}22,${s.color}11)` : 'transparent',
                    border: activeSector === i ? `1px solid ${s.color}44` : '1px solid transparent',
                  }}
                >
                  <s.icon size={15} style={{ color: activeSector === i ? s.color : 'inherit', flexShrink: 0 }} />
                  {loc(s.label, lang)}
                </button>
              ))}
              <p className="text-sm text-muted px-4 pt-2 hidden lg:block">
                {UI.sectors_no_match[lang]}{' '}
                <Link href="/contact" className="underline underline-offset-2 hover:text-[var(--text)]">{UI.sectors_talk[lang]}</Link>
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
                  <div className="text-sm font-mono text-muted mb-1">{loc(SECTORS[activeSector].stat, lang)}</div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{loc(SECTORS[activeSector].label, lang)}</h3>
                </div>
              </div>
              <p className="text-muted leading-relaxed mb-6">{loc(SECTORS[activeSector].desc, lang)}</p>
              <div className="rounded-xl px-4 py-3 mb-6" style={{ background: 'var(--surface-2)' }}>
                <div className="text-sm font-mono text-muted mb-1">{UI.sectors_trusted[lang]}</div>
                <div className="text-sm" style={{ color: 'var(--text)' }}>{SECTORS[activeSector].clientsStr}</div>
              </div>
              <Link href="/sectors" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-[var(--text)] transition-colors">
                {UI.sectors_explore[lang]} <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="text-center mb-14">
            <p className="eyebrow mb-3">{UI.proof_eyebrow[lang]}</p>
            <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              {UI.proof_h2_1[lang]} {UI.proof_h2_2[lang]}
            </h2>
            <p className="text-muted max-w-lg mx-auto">{UI.proof_lead[lang]}</p>
          </FadeUp>

          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {CASES.map(c => (
              <div
                key={c.title.en}
                className="rounded-2xl p-6 group hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/[0.07] hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="text-xs text-muted">{loc(c.label, lang)}</div>
                  <div className="text-base font-bold flex-shrink-0" style={{ color: 'var(--label)' }}>{loc(c.stat, lang)}</div>
                </div>
                <h3 className="font-semibold mb-2 text-[0.95rem]" style={{ color: 'var(--text)' }}>{loc(c.title, lang)}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{loc(c.body, lang)}</p>
                <Link href="/case-studies" className="text-sm font-mono text-muted hover:text-[var(--text)] transition-colors flex items-center gap-1 min-h-[44px]">
                  {UI.cs_read[lang]} <ArrowRight size={14} />
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
              {UI.cs_see_all[lang]} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="relative rounded-3xl overflow-hidden p-12 text-center"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-20 blur-[80px]"
                  style={{ background: 'var(--btn-gradient)' }} />
              </div>
              <div className="relative">
                <p className="eyebrow mb-4">{UI.cta_eyebrow[lang]}</p>
                <h2 className="text-4xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
                  {UI.cta_h2_1[lang]} {UI.cta_h2_2[lang]}
                </h2>
                <p className="text-muted max-w-md mx-auto mb-8">{UI.cta_lead[lang]}</p>
                <Link
                  href="/contact"
                  onClick={() => track('cta_click', { label: 'bottom_cta' })}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-xl"
                  style={{ background: 'var(--btn-gradient)', boxShadow: '0 8px 32px rgba(123,79,255,0.3)' }}
                >
                  {UI.cta_btn[lang]} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
