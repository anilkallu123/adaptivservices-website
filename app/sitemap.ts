import type { MetadataRoute } from 'next'
import { POSTS } from '@/lib/data'

const BASE = 'https://www.adaptivservices.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = ['', '/what-we-do', '/sectors', '/case-studies', '/blog', '/about', '/contact']
  const pages: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.8,
  }))
  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }))
  return [...pages, ...posts]
}
