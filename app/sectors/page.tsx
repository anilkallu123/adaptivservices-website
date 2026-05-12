import type { Metadata } from 'next'
import Link from 'next/link'
import { Landmark, Activity, Zap, Factory, Ship, ArrowRight } from 'lucide-react'
import { FadeUp, StaggerGrid } from '@/components/motion'

export const metadata: Metadata = {
  title: 'Sectors',
  description: 'Industries we serve: public sector, health, energy, industrial, maritime.',
}

const SECTORS = [
  {
    icon: Landmark, color: '#7B4FFF', title: 'Public Sector', stat: '27 systems delivered',
    body: 'Tax, health, defence, transport, civic services. NSM ICT framework and DIFI standards by default — compliance is the floor, not the ceiling.',
    clients: ['Skatteetaten', 'Helsedirektoratet', 'DSB', 'Bymiljøetaten'],
  },
  {
    icon: Activity, color: '#00D4FF', title: 'Health & Life Sciences', stat: '4.2M records/h',
    body: 'Clinical systems, FHIR-compliant data lakes, AI-assisted diagnostics. Norway\'s health data deserves infrastructure matching its sensitivity.',
    clients: ['HSØ', 'Sykehuspartner', 'DIPS AS'],
  },
  {
    icon: Zap, color: '#FF2D9B', title: 'Energy & Utilities', stat: 'Real-time edge control',
    body: 'Grid intelligence, offshore systems, renewables management. Real-time control where downtime is measured in megawatts.',
    clients: ['Statnett', 'Equinor', 'Hafslund Nett'],
  },
  {
    icon: Factory, color: '#FF8A65', title: 'Industrial', stat: '30% faster month-end',
    body: 'ERP, IoT, edge compute, process automation. Norway\'s industrial backbone deserves systems that move as fast as it does.',
    clients: ['Alfa Laval', 'Norsk Hydro', 'Yara'],
  },
  {
    icon: Ship, color: '#5A4BFF', title: 'Maritime & Logistics', stat: 'Fleet-wide visibility',
    body: 'Vessel telematics, port operations, supply-chain visibility. Norway is a maritime nation — we build systems that match that heritage.',
    clients: ['Høegh LNG', 'Wallenius Wilhelmsen', 'DFDS'],
  },
]

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
              Drawn to industries where transformation is overdue, stakes are high, and incumbents move slowly.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          {SECTORS.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.06}>
              <div className="rounded-2xl p-8"
                style={{ background: 'var(--surface)', border: `1px solid ${s.color}22` }}>
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: s.color, boxShadow: `0 8px 24px ${s.color}44` }}>
                    <s.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-muted mb-1">{s.stat}</div>
                    <h2 className="text-xl font-bold" style={{ color: 'var(--text)' }}>{s.title}</h2>
                  </div>
                </div>
                <p className="text-muted leading-relaxed mb-5 max-w-2xl">{s.body}</p>
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
