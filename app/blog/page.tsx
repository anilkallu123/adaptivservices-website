import type { Metadata } from 'next'
import PageClient from './page-client'

export const metadata: Metadata = {
  title: "Insights",
  description: "Technical insights from Oslo on Oracle, cloud, data platforms, and AI engineering.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Insights | Adaptiv AS", description: "Technical insights from Oslo on Oracle, cloud, data platforms, and AI engineering.", url: "/blog" },
}

export default function Page() {
  return <PageClient />
}
