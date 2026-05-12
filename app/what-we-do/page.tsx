import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, Bot, Cloud, Cpu, Users, ShieldCheck, ArrowRight } from 'lucide-react'
import { FadeUp, StaggerGrid } from '@/components/motion'

export const metadata: Metadata = {
  title: 'What We Do',
  description: 'Six capability pillars: products, AI, cloud, electronics, talent, and security.',
}

const SERVICES = [
  {
    icon: Sparkles, color: '#7B4FFF', title: 'Products',
    body: 'Opinionated software designed around real workflows — not feature lists. We build end-to-end: from discovery through design, engineering, and long-term maintenance.',
    points: ['Custom product development', 'UX research & design', 'Iterative delivery', 'Post-launch ownership'],
  },
  {
    icon: Bot, color: '#00D4FF', title: 'AI & Machine Learning',
    body: 'From LLM integrations to bespoke ML pipelines — practical AI that makes operations smarter, not just flashier.',
    points: ['LLM integration & fine-tuning', 'RAG architectures', 'ML pipeline engineering', 'AI-assisted diagnostics'],
  },
  {
    icon: Cloud, color: '#FF2D9B', title: 'Cloud & Infrastructure',
    body: 'Azure, OCI, and hybrid architectures. We design platforms that scale without drama and cost without surprises.',
    points: ['Azure & OCI architecture', 'Zero-downtime migrations', 'IaC with Terraform', 'FinOps & cost optimisation'],
  },
  {
    icon: Cpu, color: '#FF8A65', title: 'Custom Electronics',
    body: 'From concept through prototype to production — hardware that connects the physical and digital worlds.',
    points: ['PCB design & prototyping', 'Embedded firmware', 'IoT edge systems', 'CE & UKCA certification support'],
  },
  {
    icon: Users, color: '#5A4BFF', title: 'Talent & Staffing',
    body: 'Senior engineers and architects on demand. No CVs, no wasted time — the right person, ready to contribute from day one.',
    points: ['Staff augmentation', 'Team embedding', 'Tech lead as a service', 'Architecture consulting'],
  },
  {
    icon: ShieldCheck, color: '#22c55e', title: 'Security',
    body: 'Security designed in, not bolted on. Threat modelling, compliance, and incident response for regulated industries.',
    points: ['NSM ICT framework compliance', 'Threat modelling', 'Penetration testing', 'Incident response planning'],
  },
]

export default function WhatWeDo() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="eyebrow mb-4">Capabilities</p>
            <h1 className="text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--text)' }}>
              Six pillars.<br /><span className="grad-text">Unlimited scope.</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl">
              We don&apos;t specialise in one thing. We bring the full stack to every problem — from embedded hardware to AI-powered cloud platforms.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          {SERVICES.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.05}>
              <div className="rounded-2xl p-8 grid md:grid-cols-[1fr_auto] gap-8 items-start group hover:border-purple-500/30 transition-all"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${s.color}22` }}>
                      <s.icon size={18} style={{ color: s.color }} />
                    </div>
                    <h2 className="text-xl font-semibold" style={{ color: 'var(--text)' }}>{s.title}</h2>
                  </div>
                  <p className="text-muted leading-relaxed mb-5 max-w-xl">{s.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.points.map(p => (
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
                  Start a project <ArrowRight size={14} />
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </>
  )
}
