'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeUp, StaggerGrid } from '@/components/motion'
import { POSTS } from '@/lib/data'
import { useLang } from '@/components/lang-provider'
import { UI } from '@/lib/i18n'

export default function Blog() {
  const { lang } = useLang()
  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="eyebrow mb-4">{UI.blog_eyebrow[lang]}</p>
            <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              {UI.blog_h1_1[lang]}<br /><span className="grad-text">{UI.blog_h1_2[lang]}</span>
            </h1>
            <p className="text-lg text-muted max-w-xl">
              {UI.blog_lead[lang]}
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
                className="rounded-2xl p-6 flex flex-col group hover:shadow-lg hover:shadow-purple-500/[0.07] hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: '3px solid rgba(123,79,255,0.35)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-mono px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(123,79,255,0.15)', color: 'var(--label)' }}>
                    {p.tag}
                  </span>
                  <span className="text-sm text-muted font-mono">{p.date}</span>
                </div>
                <h2 className="font-semibold leading-snug mb-3 flex-1" style={{ color: 'var(--text)', fontSize: '0.95rem' }}>{p.title}</h2>
                <p className="text-base text-muted leading-relaxed mb-4">{p.excerpt}</p>
                <span className="text-sm font-mono text-muted group-hover:text-[var(--text)] transition-colors flex items-center gap-1 min-h-[44px]">
                  {UI.blog_read[lang]} <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </StaggerGrid>
        </div>
      </section>
    </>
  )
}
