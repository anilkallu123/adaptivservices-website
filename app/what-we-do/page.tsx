'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeUp } from '@/components/motion'
import { SERVICES, loc } from '@/lib/data'
import { useLang } from '@/components/lang-provider'
import { UI } from '@/lib/i18n'

export default function WhatWeDo() {
  const { lang } = useLang()
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="eyebrow mb-4">{UI.wwd_eyebrow[lang]}</p>
            <h1 className="text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--text)' }}>
              {UI.wwd_h1_1[lang]}<br /><span className="grad-text">{UI.wwd_h1_2[lang]}</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl">
              {UI.wwd_lead[lang]}
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          {SERVICES.map((s, i) => (
            <FadeUp key={s.title.en} delay={i * 0.05}>
              <div className="rounded-2xl p-8 grid md:grid-cols-[1fr_auto] gap-8 items-start group hover:border-purple-500/30 transition-all"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${s.color}22` }}>
                      <s.icon size={18} style={{ color: s.color }} />
                    </div>
                    <h2 className="text-xl font-semibold" style={{ color: 'var(--text)' }}>{loc(s.title, lang)}</h2>
                  </div>
                  <p className="text-muted leading-relaxed mb-5 max-w-xl">{loc(s.body, lang)}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.points[lang].map(p => (
                      <span key={p} className="text-xs font-mono px-3 py-1 rounded-full"
                        style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}30` }}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-[var(--text)] transition-colors whitespace-nowrap"
                >
                  {UI.wwd_start[lang]} <ArrowRight size={14} />
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  )
}
