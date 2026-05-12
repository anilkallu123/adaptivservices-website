'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeUp } from '@/components/motion'
import { CASES, loc } from '@/lib/data'
import { useLang } from '@/components/lang-provider'
import { UI } from '@/lib/i18n'

export default function CaseStudies() {
  const { lang } = useLang()
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="eyebrow mb-4">{UI.cs_page_eyebrow[lang]}</p>
            <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              {UI.cs_page_h1_1[lang]}<br /><span className="grad-text">{UI.cs_page_h1_2[lang]}</span>
            </h1>
            <p className="text-lg text-muted max-w-xl">
              {UI.cs_page_lead[lang]}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {CASES.map((c, i) => (
            <FadeUp key={c.title.en} delay={i * 0.07}>
              <div className="rounded-2xl p-8" style={{ background: 'var(--surface)', border: `1px solid ${c.color}22` }}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full mb-3 inline-block"
                      style={{ background: `${c.color}18`, color: c.color }}>
                      {loc(c.label, lang)}
                    </span>
                    <h2 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>{loc(c.title, lang)}</h2>
                  </div>
                  <div className="text-2xl font-bold grad-text">{c.stat}</div>
                </div>
                <p className="text-muted leading-relaxed mb-6 max-w-2xl">{loc(c.body, lang)}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {c.outcomes[lang].map(o => (
                    <div key={o} className="rounded-xl px-4 py-3 text-sm font-medium flex items-center gap-2"
                      style={{ background: 'var(--surface-2)', color: 'var(--text)' }}>
                      <span style={{ color: c.color }}>✓</span> {o}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
          <FadeUp>
            <p className="text-muted mb-4">{UI.cs_working_on[lang]}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white"
              style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)', boxShadow: '0 8px 32px rgba(123,79,255,0.3)' }}
            >
              {UI.cs_page_cta[lang]} <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
