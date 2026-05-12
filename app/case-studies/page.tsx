import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeUp, StaggerGrid } from '@/components/motion'

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real outcomes from 15+ years of enterprise delivery across Norway and Europe.',
}

const CASES = [
  {
    label: 'Public Sector · Cloud', color: '#7B4FFF',
    title: 'Oracle ExaDB Migration — Skatteetaten',
    stat: '40% performance uplift',
    body: 'Zero-downtime migration of national tax database from Oracle 19c to 26ai on ExaDB@Azure. Delivered under DIFI compliance with NSM ICT controls throughout.',
    outcomes: ['Zero downtime during migration', '40% query performance uplift', 'Full NSM ICT compliance', 'Automated rollback capability'],
  },
  {
    label: 'Healthcare · Data Platform', color: '#00D4FF',
    title: 'National Health Data Platform — HSØ',
    stat: 'Weeks → hours reporting',
    body: 'FHIR-compliant Azure data lakehouse serving multiple hospital trusts. Reduced reporting cycles from weeks to hours while maintaining strict data sovereignty requirements.',
    outcomes: ['FHIR R4 compliant architecture', 'Reporting: weeks → hours', '4.2M records/hour throughput', 'Multi-trust data governance'],
  },
  {
    label: 'ERP · Manufacturing', color: '#FF8A65',
    title: 'D365 F&O — Alfa Laval Europe',
    stat: '30% faster month-end close',
    body: "One of Europe's largest D365 Finance & Operations implementations, spanning 8 countries and replacing 5 legacy ERP systems in a 24-month programme.",
    outcomes: ['8-country rollout', '30% faster month-end close', '5 legacy systems retired', '1,200+ users onboarded'],
  },
]

export default function CaseStudies() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="eyebrow mb-4">Proof of work</p>
            <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              Results, not<br /><span className="grad-text">promises.</span>
            </h1>
            <p className="text-lg text-muted max-w-xl">
              Selected outcomes from 15+ years of enterprise delivery across Norway and Europe.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-6">
          {CASES.map((c, i) => (
            <FadeUp key={c.title} delay={i * 0.07}>
              <div className="rounded-2xl p-8" style={{ background: 'var(--surface)', border: `1px solid ${c.color}22` }}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full mb-3 inline-block"
                      style={{ background: `${c.color}18`, color: c.color }}>
                      {c.label}
                    </span>
                    <h2 className="text-2xl font-bold" style={{ color: 'var(--text)' }}>{c.title}</h2>
                  </div>
                  <div className="text-2xl font-bold grad-text">{c.stat}</div>
                </div>
                <p className="text-muted leading-relaxed mb-6 max-w-2xl">{c.body}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {c.outcomes.map(o => (
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
            <p className="text-muted mb-4">Working on something similar?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white"
              style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)', boxShadow: '0 8px 32px rgba(123,79,255,0.3)' }}
            >
              Start a conversation <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
