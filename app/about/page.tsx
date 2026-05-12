'use client'

import Link from 'next/link'
import { ArrowRight, Linkedin, Database, Cloud, Bot, ShieldCheck } from 'lucide-react'
import { FadeUp, StaggerGrid } from '@/components/motion'
import { PRINCIPLES, loc } from '@/lib/data'
import { useLang } from '@/components/lang-provider'
import { UI } from '@/lib/i18n'

const FOUNDER_TAGS = [
  { icon: Database, label: 'Oracle & Azure' },
  { icon: Cloud,    label: 'Cloud Architecture' },
  { icon: Bot,      label: 'AI & ML Systems' },
  { icon: ShieldCheck, label: 'NSM / DIFI Compliance' },
]

export default function About() {
  const { lang } = useLang()
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="eyebrow mb-4">{UI.about_eyebrow[lang]}</p>
            <h1 className="text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--text)' }}>
              {UI.about_h1_1[lang]}<br /><span className="grad-text">{UI.about_h1_2[lang]}</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl leading-relaxed">
              {UI.about_lead[lang]}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="mb-14">
            <p className="eyebrow mb-3">{UI.about_principles_eyebrow[lang]}</p>
            <h2 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
              {UI.about_principles_h2[lang]}
            </h2>
          </FadeUp>
          <StaggerGrid className="grid sm:grid-cols-2 gap-4">
            {PRINCIPLES.map(p => (
              <div key={p.title.en} className="rounded-2xl p-7 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/[0.06] hover:-translate-y-0.5 transition-all duration-200" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg,rgba(123,79,255,0.2),rgba(0,212,255,0.2))' }}>
                  <p.icon size={18} style={{ color: 'var(--label)' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>{loc(p.title, lang)}</h3>
                <p className="text-sm text-muted leading-relaxed">{loc(p.body, lang)}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="mb-14">
            <p className="eyebrow mb-3">{UI.about_founder_eyebrow[lang]}</p>
            <h2 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
              {UI.about_founder_h2[lang]}
            </h2>
          </FadeUp>

          <FadeUp>
            <div className="rounded-2xl p-8 lg:p-10" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl flex items-center justify-center text-3xl font-bold text-white select-none"
                    style={{ background: 'var(--btn-gradient)' }}>
                    AK
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="mb-1">
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>Anil Kallu</h3>
                    <p className="text-sm font-mono" style={{ color: 'var(--label)' }}>{UI.about_founder_role[lang]}</p>
                  </div>

                  <p className="text-muted leading-relaxed mt-4 mb-6 max-w-2xl">
                    {UI.about_founder_bio[lang]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {FOUNDER_TAGS.map(t => (
                      <span key={t.label} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                        style={{ background: 'var(--surface-2)', color: 'var(--text)', border: '1px solid var(--border)' }}>
                        <t.icon size={12} style={{ color: 'var(--label)' }} />
                        {t.label}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://linkedin.com/in/anilkallu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-muted hover:text-[var(--text)]"
                  >
                    <Linkedin size={16} style={{ color: 'var(--label)' }} />
                    {UI.about_founder_linkedin[lang]}
                  </a>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="rounded-3xl p-12 text-center relative overflow-hidden"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 rounded-full opacity-15 blur-[60px]"
                  style={{ background: 'var(--btn-gradient)' }} />
              </div>
              <div className="relative">
                <p className="eyebrow mb-4">{UI.about_work_eyebrow[lang]}</p>
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  {UI.about_work_h2_1[lang]} {UI.about_work_h2_2[lang]}
                </h2>
                <p className="text-muted mb-8 max-w-md mx-auto">
                  {UI.about_work_lead[lang]}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white"
                  style={{ background: 'var(--btn-gradient)', boxShadow: '0 8px 32px rgba(123,79,255,0.3)' }}
                >
                  {UI.about_work_cta[lang]} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
