import type { Metadata } from 'next'
import PageClient from './page-client'

export const metadata: Metadata = {
  title: "What We Do",
  description: "Full-stack delivery from embedded hardware to AI-powered cloud platforms. Products, AI and ML, cloud, and custom electronics from one team.",
  alternates: { canonical: "/what-we-do" },
  openGraph: { title: "What We Do | Adaptiv AS", description: "Full-stack delivery from embedded hardware to AI-powered cloud platforms. Products, AI and ML, cloud, and custom electronics from one team.", url: "/what-we-do" },
}

export default function Page() {
  return <PageClient />
}
