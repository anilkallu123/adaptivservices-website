'use client'

import Link from 'next/link'
import { ArrowRight, Target, Zap, Heart, Globe } from 'lucide-react'
import { FadeUp, StaggerGrid } from '@/components/motion'
import { PRINCIPLES, loc } from '@/lib/data'
import { useLang } from '@/components/lang-provider'
import { UI } from '@/lib/i18n'

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
              <div key={p.title.en} className="rounded-2xl p-7" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg,rgba(123,79,255,0.2),rgba(0,212,255,0.2))' }}>
                  <Target size={18} style={{ color: '#7B4FFF' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>{loc(p.title, lang)}</h3>
                <p className="text-sm text-muted leading-relaxed">{loc(p.body, lang)}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <div className="rounded-3xl p-12 text-center relative overflow-hidden"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 rounded-full opacity-15 blur-[60px]"
                  style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)' }} />
              </div>
              <div className="relative">
                <p className="eyebrow mb-4">{UI.about_work_eyebrow[lang]}</p>
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  {UI.about_work_h2_1[lang]} <span className="grad-text">{UI.about_work_h2_2[lang]}</span>
                </h2>
                <p className="text-muted mb-8 max-w-md mx-auto">
                  {UI.about_work_lead[lang]}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)', boxShadow: '0 8px 32px rgba(123,79,255,0.3)' }}
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
