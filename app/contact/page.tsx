import type { Metadata } from 'next'
import PageClient from './page-client'

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Adaptiv AS. A spec, a vague problem, or an ambition, and we will find the shape of the solution together.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact | Adaptiv AS", description: "Start a conversation with Adaptiv AS. A spec, a vague problem, or an ambition, and we will find the shape of the solution together.", url: "/contact" },
}

export default function Page() {
  return <PageClient />
}
