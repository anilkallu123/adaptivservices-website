import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { POSTS } from '@/lib/data'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = POSTS.find(p => p.slug === params.slug)
  if (!post) return {}
  return { title: post.title.en, description: post.excerpt.en }
}

export default function BlogPost({ params }: Props) {
  const post = POSTS.find(p => p.slug === params.slug)
  if (!post) notFound()
  // Full article content lives in /public/{slug}.html (old-style standalone pages).
  // Redirect there so readers get the full article with its own layout and ToC.
  redirect(`/${post.slug}.html`)
}
