import type { Metadata } from 'next'
import PageClient from './page-client'

export const metadata: Metadata = {
  title: "About",
  description: "Meet the founder and the principles behind Adaptiv AS: senior-level architecture and delivery for Norway's most demanding organisations.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About | Adaptiv AS", description: "Meet the founder and the principles behind Adaptiv AS: senior-level architecture and delivery for Norway's most demanding organisations.", url: "/about" },
}

export default function Page() {
  return <PageClient />
}
