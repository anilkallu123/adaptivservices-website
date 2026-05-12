'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeUp } from '@/components/motion'
import { SECTORS, loc } from '@/lib/data'
import { useLang } from '@/components/lang-provider'
import { UI } from '@/lib/i18n'

export default function Sectors() {
  const { lang } = useLang()
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="eyebrow mb-4">{UI.sectors_page_eyebrow[lang]}</p>
            <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              {UI.sectors_page_h1_1[lang]}<br /><span className="grad-text">{UI.sectors_page_h1_2[lang]}</span>
            </h1>
            <p className="text-lg text-muted max-w-xl">
              {UI.sectors_page_lead[lang]}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          {SECTORS.map((s, i) => (
            <FadeUp key={s.label.en} delay={i * 0.06}>
              <div className="rounded-2xl p-8 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                style={{ background: 'var(--surface)', border: `1px solid ${s.color}33` }}>
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: s.color, boxShadow: `0 8px 24px ${s.color}44` }}>
                    <s.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted mb-1">{loc(s.stat, lang)}</div>
                    <h2 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{loc(s.label, lang)}</h2>
                  </div>
                </div>
                <p className="text-muted leading-relaxed mb-5 max-w-2xl">{loc(s.desc, lang)}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {s.clients.map(c => (
                    <span key={c} className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{ background: 'var(--surface-2)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                      {c}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-[var(--text)] transition-colors">
                  {UI.sectors_page_discuss[lang]} <ArrowRight size={14} />
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  )
}
