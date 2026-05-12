'use client'

import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Mail, MapPin, ArrowRight } from 'lucide-react'
import { FadeUp } from '@/components/motion'
import { useState } from 'react'

const CHANNELS = [
  { icon: Calendar, label: 'Book a call', desc: '30-min discovery — no sales pitch', href: 'https://calendly.com/anilkallu/30min', cta: 'Book on Calendly' },
  { icon: Mail, label: 'Email us', desc: 'For project enquiries and partnerships', href: 'mailto:sales@adaptivservices.com', cta: 'sales@adaptivservices.com' },
  { icon: MapPin, label: 'Oslo office', desc: 'Meetings by appointment', href: '#', cta: 'Oslo, Norway' },
]

const WEB3FORMS_KEY = '712edce1-c81a-45ad-89c0-bf3c07fac508'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New contact form submission — ${form.name}`,
          from_name: 'Adaptiv Contact Form',
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setError('Submission failed. Please email us directly at sales@adaptivservices.com')
      }
    } catch {
      setError('Network error. Please email us directly at sales@adaptivservices.com')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeUp>
            <p className="eyebrow mb-4">Get in touch</p>
            <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              Let&apos;s build something<br /><span className="grad-text">worth building.</span>
            </h1>
            <p className="text-lg text-muted max-w-xl">
              Whether you have a spec, a vague problem, or just an ambition — reach out and we&apos;ll find the shape of the solution together.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <FadeUp>
            <div className="rounded-2xl p-8" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              {sent ? (
                <div className="py-12 text-center">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>Message received</h3>
                  <p className="text-muted">We&apos;ll get back to you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>Send a message</h2>
                  {[
                    { key: 'name', label: 'Name', type: 'text', placeholder: 'Ola Nordmann' },
                    { key: 'email', label: 'Email', type: 'email', placeholder: 'ola@company.no' },
                    { key: 'company', label: 'Company', type: 'text', placeholder: 'Acme AS' },
                  ].map(f => (
                    <div key={f.key}>
                      <label className="block text-xs font-mono text-muted mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required={f.key !== 'company'}
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-1"
                        style={{
                          background: 'var(--surface-2)',
                          border: '1px solid var(--border)',
                          color: 'var(--text)',
                        }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-mono text-muted mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project or challenge..."
                      required
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-1 resize-none"
                      style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                    />
                  </div>
                  {error && (
                    <p className="text-sm text-red-400 rounded-xl px-4 py-2.5" style={{ background: 'rgba(239,68,68,0.1)' }}>
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-opacity hover:opacity-90 disabled:opacity-60"
                    style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)' }}
                  >
                    {submitting ? 'Sending…' : <><span>Send message</span> <ArrowRight size={16} /></>}
                  </button>
                </form>
              )}
            </div>
          </FadeUp>

          {/* Channels */}
          <div className="space-y-4">
            {CHANNELS.map((c, i) => (
              <FadeUp key={c.label} delay={i * 0.08}>
                <Link
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener' : undefined}
                  className="flex items-start gap-5 rounded-2xl p-6 group hover:border-purple-500/30 transition-all"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg,rgba(123,79,255,0.2),rgba(0,212,255,0.2))' }}>
                    <c.icon size={18} style={{ color: '#7B4FFF' }} />
                  </div>
                  <div>
                    <div className="font-semibold mb-0.5" style={{ color: 'var(--text)' }}>{c.label}</div>
                    <div className="text-sm text-muted mb-1">{c.desc}</div>
                    <div className="text-xs font-mono" style={{ color: '#7B4FFF' }}>{c.cta}</div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
