import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeUp } from '@/components/motion'
import { SECTORS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Sectors',
  description: 'Industries we serve: public sector, health, energy, industrial, maritime.',
}

export default function Sectors() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="eyebrow mb-4">Industries</p>
            <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              We go where the<br /><span className="grad-text">problems are hardest.</span>
            </h1>
            <p className="text-lg text-muted max-w-xl">
              Five sectors where we have deep delivery history — and where the consequences of poor engineering are real.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          {SECTORS.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.06}>
              <div className="rounded-2xl p-8"
                style={{ background: 'var(--surface)', border: `1px solid ${s.color}22` }}>
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: s.color, boxShadow: `0 8px 24px ${s.color}44` }}>
                    <s.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted mb-1">{s.stat}</div>
                    <h2 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{s.label}</h2>
                  </div>
                </div>
                <p className="text-muted leading-relaxed mb-5 max-w-2xl">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {s.clients.map(c => (
                    <span key={c} className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{ background: 'var(--surface-2)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}>
                      {c}
                    </span>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-[var(--text)] transition-colors">
                  Discuss a project <ArrowRight size={14} />
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  )
}
