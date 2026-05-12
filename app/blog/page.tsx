import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeUp, StaggerGrid } from '@/components/motion'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Technical insights on cloud architecture, Oracle migrations, AI, and more.',
}

const POSTS = [
  { slug: 'blog-oci-snowflake-2026', tag: 'Data Platform', date: 'May 2026', title: 'OCI + Snowflake: The Sovereign Data Stack for Norwegian Enterprises', excerpt: 'How combining Oracle Cloud Infrastructure with Snowflake delivers data sovereignty, performance, and compliance in one architecture.' },
  { slug: 'blog-oracle-db-aws-licensing', tag: 'Oracle · Licensing', date: 'Apr 2026', title: 'Oracle Database on AWS: Licensing traps and how to avoid them', excerpt: 'A practical guide to Oracle licensing on AWS — the rules, the traps, and how large enterprises structure their agreements.' },
  { slug: 'blog-oracle-db-aws-migration-methodology', tag: 'Oracle · Migration', date: 'Apr 2026', title: 'The Oracle-to-AWS Migration Methodology that scales', excerpt: 'Our 6-phase migration framework refined over 30+ zero-downtime database migrations.' },
  { slug: 'blog-oracle-db-aws-terraform', tag: 'IaC · Oracle', date: 'Apr 2026', title: 'Terraforming Oracle Database@AWS at scale', excerpt: 'How we manage Oracle ExaDB infrastructure as code — modules, state management, and day-two operations.' },
  { slug: 'blog-oracle-db-aws-vs-azure', tag: 'Cloud · Oracle', date: 'Mar 2026', title: 'Oracle DB@AWS vs Oracle DB@Azure: An honest comparison', excerpt: 'Performance, cost, compliance, and operational differences after running production workloads on both clouds.' },
  { slug: 'blog-oracle-db-aws-what-it-is', tag: 'Oracle · Cloud', date: 'Mar 2026', title: 'What is Oracle Database@AWS — and should you care?', excerpt: 'The new multicloud service explained: architecture, use cases, and when it makes sense versus alternatives.' },
  { slug: 'blog-oracle-db-aws-when-to-use', tag: 'Oracle · Strategy', date: 'Mar 2026', title: 'When to use Oracle Database@AWS (and when not to)', excerpt: 'Decision framework for choosing Oracle ExaDB on AWS versus self-managed, RDS, or a full re-platform.' },
]

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
                href={`/${p.slug}`}
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
