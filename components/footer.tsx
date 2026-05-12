'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { NewsletterForm } from '@/components/newsletter-form'
import { useTheme } from '@/components/theme-provider'

export function Footer() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  return (
    <footer className="border-t mt-24" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-semibold text-[var(--text)] mb-4">
              <Image
                src={dark ? '/assets/icon_dark.png' : '/assets/icon_light.png'}
                alt="Adaptiv AS"
                width={26}
                height={26}
                className="rounded-sm"
              />
              <span><span className="grad-text">Adaptiv</span> AS</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-5">
              An ambitious Norwegian IT venture — building products, platforms, and infrastructure for tomorrow.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 text-xs text-muted font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Oslo, Norway · 59.913°N, 10.752°E
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com/company/adaptiv-as"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted hover:text-[var(--text)] transition-colors"
                aria-label="Adaptiv AS on LinkedIn"
              >
                <Linkedin size={16} />
              </a>
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
            <NewsletterForm />
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
