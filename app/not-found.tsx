import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="eyebrow mb-4">404</p>
        <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
          Page not found
        </h1>
        <p className="text-muted mb-8">
          This page doesn&apos;t exist or has been moved. If you followed a link, let us know.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl font-medium text-white flex items-center gap-2"
            style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)' }}
          >
            Go home <ArrowRight size={14} />
          </Link>
          <Link
            href="/blog"
            className="px-5 py-2.5 rounded-xl font-medium transition-colors hover:bg-white/5"
            style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
          >
            Read insights
          </Link>
        </div>
      </div>
    </div>
  )
}
