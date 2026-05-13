'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('[adaptivservices] unhandled error:', error.message, error.digest)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="eyebrow mb-4">Error</p>
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)' }}>
          Something went wrong
        </h1>
        <p className="text-muted mb-2">
          An unexpected error occurred. Our team has been notified.
        </p>
        {error.digest && (
          <p className="text-xs font-mono text-muted mb-8">ref: {error.digest}</p>
        )}
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-5 py-3 rounded-xl font-medium text-white"
            style={{ background: 'var(--btn-gradient)' }}
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-5 py-3 rounded-xl font-medium transition-colors hover:bg-white/5"
            style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
