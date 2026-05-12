import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeUp, StaggerGrid } from '@/components/motion'
import { POSTS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Technical insights on cloud architecture, Oracle migrations, AI, and more.',
}

export default function Blog() {
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="eyebrow mb-4">Insights</p>
            <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              Technical writing<br /><span className="grad-text">from the trenches.</span>
            </h1>
            <p className="text-lg text-muted max-w-xl">
              Practical guides, architecture decisions, and hard-won lessons from production systems.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerGrid className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {POSTS.map(p => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="rounded-2xl p-6 flex flex-col group hover:border-purple-500/30 transition-all"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(123,79,255,0.15)', color: '#7B4FFF' }}>
                    {p.tag}
                  </span>
                  <span className="text-xs text-muted font-mono">{p.date}</span>
                </div>
                <h2 className="font-semibold leading-snug mb-3 flex-1" style={{ color: 'var(--text)', fontSize: '0.95rem' }}>{p.title}</h2>
                <p className="text-sm text-muted leading-relaxed mb-4">{p.excerpt}</p>
                <span className="text-xs font-mono text-muted group-hover:text-[var(--text)] transition-colors flex items-center gap-1">
                  Read article <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  )
}
