import type { Metadata } from 'next'
import PageClient from './page-client'

export const metadata: Metadata = {
  title: "Sectors",
  description: "Deep delivery history in public services, healthcare, energy, maritime, and industrial, where the consequences of poor engineering are real.",
  alternates: { canonical: "/sectors" },
  openGraph: { title: "Sectors | Adaptiv AS", description: "Deep delivery history in public services, healthcare, energy, maritime, and industrial, where the consequences of poor engineering are real.", url: "/sectors" },
}

export default function Page() {
  return <PageClient />
}
