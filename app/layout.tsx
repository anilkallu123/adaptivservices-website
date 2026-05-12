import type { Metadata } from 'next'
import './globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { ThemeScript } from '@/components/theme-script'

export const metadata: Metadata = {
  title: { default: 'Adaptiv AS — Build What Matters', template: '%s | Adaptiv AS' },
  description: 'Adaptiv AS is an ambitious Norwegian IT venture building products, platforms, and infrastructure for the businesses of tomorrow.',
  metadataBase: new URL('https://www.adaptivservices.com'),
  openGraph: {
    siteName: 'Adaptiv AS',
    type: 'website',
    images: [{ url: '/assets/og-image.png' }],
  },
  twitter: { card: 'summary_large_image' },
  verification: { google: '5JGYeCutkY7bv3_o2tsQJbnwP-GjEpWy7FeJOXhxWOo' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="icon" type="image/png" href="/assets/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Adaptiv AS',
              url: 'https://www.adaptivservices.com',
              logo: 'https://www.adaptivservices.com/assets/icon_dark.png',
              description: 'Norwegian IT venture specialising in cloud architecture, AI engineering, Oracle migrations, D365 ERP, and custom electronics.',
              foundingDate: '2026',
              address: { '@type': 'PostalAddress', addressLocality: 'Oslo', addressCountry: 'NO' },
              contactPoint: { '@type': 'ContactPoint', email: 'sales@adaptivservices.com', contactType: 'sales' },
              sameAs: ['https://www.linkedin.com/in/anilkallu/', 'https://github.com/anilkallu123'],
            }),
          }}
        />
        {/* Vercel Analytics loaded via next/script */}
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
