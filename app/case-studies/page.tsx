import type { Metadata } from 'next'
import PageClient from './page-client'

export const metadata: Metadata = {
  title: "Case Studies",
  description: "National-scale, measurable engagements across Oracle migration, national health data platforms, and D365 ERP.",
  alternates: { canonical: "/case-studies" },
  openGraph: { title: "Case Studies | Adaptiv AS", description: "National-scale, measurable engagements across Oracle migration, national health data platforms, and D365 ERP.", url: "/case-studies" },
}

export default function Page() {
  return <PageClient />
}
