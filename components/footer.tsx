'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { NewsletterForm } from '@/components/newsletter-form'
import { useTheme } from '@/components/theme-provider'
import { useLang } from '@/components/lang-provider'
import { UI } from '@/lib/i18n'

export function Footer() {
  const { theme } = useTheme()
  const { lang } = useLang()
  const dark = theme === 'dark'

  const company = [
    { href: '/about', key: 'footer_about' as const },
    { href: '/case-studies', key: 'footer_cs' as const },
    { href: '/blog', key: 'footer_insights' as const },
    { href: '/contact', key: 'footer_contact_l' as const },
  ]
  const services = [
    { href: '/what-we-do', key: 'footer_products' as const },
    { href: '/what-we-do', key: 'footer_ai' as const },
    { href: '/what-we-do', key: 'footer_cloud' as const },
    { href: '/what-we-do', key: 'footer_electronics' as const },
  ]

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
              {UI.footer_brand_p[lang]}
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 text-xs text-muted font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {UI.footer_oslo_loc[lang]}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com/company/adaptiv-as"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-lg text-muted hover:text-[var(--text)] transition-colors"
                aria-label="Adaptiv AS on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">{UI.footer_company[lang]}</h5>
            <ul className="space-y-2.5">
              {company.map(l => (
                <li key={l.key}>
                  <Link href={l.href} className="text-sm text-muted hover:text-[var(--text)] transition-colors">
                    {UI[l.key][lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">{UI.footer_services[lang]}</h5>
            <ul className="space-y-2.5">
              {services.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="text-sm text-muted hover:text-[var(--text)] transition-colors">
                    {UI[l.key][lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-semibold tracking-widest uppercase text-muted mb-4">{UI.footer_contact_h[lang]}</h5>
            <p className="text-sm text-muted mb-3">{UI.footer_nl_p[lang]}</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted" style={{ borderColor: 'var(--border)' }}>
          <span>{UI.footer_copyright[lang]}</span>
          <span>{UI.footer_built[lang]}</span>
        </div>
      </div>
    </footer>
  )
}
