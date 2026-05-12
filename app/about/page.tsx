import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Zap, Heart, Globe } from 'lucide-react'
import { FadeUp, StaggerGrid } from '@/components/motion'

export const metadata: Metadata = {
  title: 'About',
  description: 'Adaptiv AS — who we are, what we believe, and why we build.',
}

const PRINCIPLES = [
  { icon: Target, title: 'Outcome over output', body: 'We measure success in business results, not lines of code or delivered tickets.' },
  { icon: Zap, title: 'Speed with depth', body: 'Fast delivery without technical debt. We move quickly because we know what we\'re doing.' },
  { icon: Heart, title: 'Radical ownership', body: 'When we take on a problem, we own it — from first conversation to production and beyond.' },
  { icon: Globe, title: 'Sovereign by default', body: 'Norwegian data, Norwegian infrastructure, Norwegian compliance. Not an afterthought — the foundation.' },
]

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="eyebrow mb-4">About Adaptiv AS</p>
            <h1 className="text-5xl font-bold tracking-tight mb-6" style={{ color: 'var(--text)' }}>
              Built by engineers,<br /><span className="grad-text">run by engineers.</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl leading-relaxed">
              Adaptiv AS is a Norwegian IT venture founded in Oslo in 2026. We work at the intersection
              of cloud infrastructure, AI, and software product development — with a focus on
              industries where getting it wrong isn&apos;t an option.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp className="mb-14">
            <p className="eyebrow mb-3">What we believe</p>
            <h2 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--text)' }}>
              Our principles
            </h2>
          </FadeUp>
          <StaggerGrid className="grid sm:grid-cols-2 gap-4">
            {PRINCIPLES.map(p => (
              <div key={p.title} className="rounded-2xl p-7" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: 'linear-gradient(135deg,rgba(123,79,255,0.2),rgba(0,212,255,0.2))' }}>
                  <p.icon size={18} style={{ color: '#7B4FFF' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.body}</p>
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
                <p className="eyebrow mb-4">Work with us</p>
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
                  Interested in joining <span className="grad-text">Adaptiv AS?</span>
                </h2>
                <p className="text-muted mb-8 max-w-md mx-auto">
                  We work with senior engineers and architects. If you build serious things and care deeply about craft, let&apos;s talk.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)', boxShadow: '0 8px 32px rgba(123,79,255,0.3)' }}
                >
                  Get in touch <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
