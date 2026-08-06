'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('submitting')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '712edce1-c81a-45ad-89c0-bf3c07fac508',
          subject: 'New newsletter signup: Adaptiv AS',
          from_name: 'Adaptiv Newsletter',
          email,
        }),
      })
      const data = await res.json()
      setState(data.success ? 'done' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'done') {
    return <p className="text-sm text-emerald-400 font-mono">✓ Subscribed</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        aria-label="Email address"
        placeholder="your@email.com"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={state === 'submitting'}
        className="flex-1 px-3 py-3 rounded-lg text-base outline-none focus:ring-1 disabled:opacity-50 min-h-[44px]"
        style={{
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          color: 'var(--text)',
        }}
      />
      <button
        type="submit"
        disabled={state === 'submitting'}
        className="w-11 h-11 flex items-center justify-center rounded-lg text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ background: 'var(--btn-gradient)' }}
      >
        <ArrowRight size={18} />
      </button>
    </form>
  )
}
