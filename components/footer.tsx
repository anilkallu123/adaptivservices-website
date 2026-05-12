'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t mt-24" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-semibold text-[var(--text)] mb-4">
              <Image src="/assets/icon_dark.png" alt="Adaptiv AS" width={26} height={26} className="rounded-sm" />
              <span><span className="grad-text">Adaptiv</span> AS</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-5">
              An ambitious Norwegian IT venture — building products, platforms, and infrastructure for tomorrow.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Oslo, Norway · 59.913°N, 10.752°E
            </div>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">Company</h5>
            <ul className="space-y-2.5">
              {[
                { href: '/about', label: 'About' },
                { href: '/case-studies', label: 'Case Studies' },
                { href: '/blog', label: 'Insights' },
                { href: '/contact', label: 'Contact' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted hover:text-[var(--text)] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">Services</h5>
            <ul className="space-y-2.5">
              {[
                { href: '/what-we-do', label: 'Products' },
                { href: '/what-we-do', label: 'AI & ML' },
                { href: '/what-we-do', label: 'Cloud' },
                { href: '/what-we-do', label: 'Electronics' },
              ].map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-sm text-muted hover:text-[var(--text)] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">Stay in touch</h5>
            <p className="text-sm text-muted mb-3">Technical insights from Oslo.</p>
            <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 rounded-lg text-sm outline-none focus:ring-1"
                style={{
                  background: 'var(--surface-2)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                  '--tw-ring-color': '#7B4FFF',
                } as React.CSSProperties}
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
                style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)' }}
              >
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted" style={{ borderColor: 'var(--border)' }}>
          <span>© 2026 Adaptiv AS. All rights reserved. Org. nr. 937 171 250</span>
          <span>Designed and built in Oslo</span>
        </div>
      </div>
    </footer>
  )
}
