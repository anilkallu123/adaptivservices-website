'use client'

import Link from 'next/link'
import { Calendar, Mail, MapPin, ArrowRight } from 'lucide-react'
import { FadeUp } from '@/components/motion'
import { useState } from 'react'
import { useLang } from '@/components/lang-provider'
import { UI } from '@/lib/i18n'

const WEB3FORMS_KEY = '712edce1-c81a-45ad-89c0-bf3c07fac508'

export default function Contact() {
  const { lang } = useLang()
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const CHANNELS = [
    { icon: Calendar, label: UI.contact_book[lang],   desc: UI.contact_book_desc[lang], href: 'https://calendly.com/anilkallu/30min', cta: UI.contact_book_cta[lang] },
    { icon: Mail,     label: UI.contact_email_ch[lang],desc: UI.contact_email_desc[lang], href: 'mailto:sales@adaptivservices.com', cta: 'sales@adaptivservices.com' },
    { icon: MapPin,   label: UI.contact_oslo[lang],   desc: UI.contact_oslo_desc[lang], href: '#', cta: UI.contact_oslo_cta[lang] },
  ]

  const FIELDS = [
    { key: 'name',    label: UI.contact_name[lang],      type: 'text',  placeholder: UI.contact_name_ph[lang],  required: true },
    { key: 'email',   label: UI.contact_email_lbl[lang], type: 'email', placeholder: UI.contact_email_ph[lang], required: true },
    { key: 'company', label: UI.contact_company[lang],   type: 'text',  placeholder: UI.contact_co_ph[lang],    required: false },
  ]

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
            <p className="eyebrow mb-4">{UI.contact_eyebrow[lang]}</p>
            <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ color: 'var(--text)' }}>
              {UI.contact_h1_1[lang]}<br /><span className="grad-text">{UI.contact_h1_2[lang]}</span>
            </h1>
            <p className="text-lg text-muted max-w-xl">
              {UI.contact_lead[lang]}
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
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>{UI.contact_sent_h3[lang]}</h3>
                  <p className="text-muted">{UI.contact_sent_p[lang]}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-semibold mb-6" style={{ color: 'var(--text)' }}>{UI.contact_form_h2[lang]}</h2>
                  {FIELDS.map(f => (
                    <div key={f.key}>
                      <label className="block text-sm font-mono text-muted mb-1.5">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        required={f.required}
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl text-base outline-none focus:ring-1"
                        style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--text)' }}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-mono text-muted mb-1.5">{UI.contact_message[lang]}</label>
                    <textarea
                      rows={4}
                      placeholder={UI.contact_msg_ph[lang]}
                      required
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-2.5 rounded-xl text-base outline-none focus:ring-1 resize-none"
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
                    style={{ background: 'var(--btn-gradient)' }}
                  >
                    {submitting ? UI.contact_sending[lang] : <><span>{UI.contact_send[lang]}</span> <ArrowRight size={16} /></>}
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
                  className="flex items-start gap-5 rounded-2xl p-6 group hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/[0.07] hover:-translate-y-0.5 transition-all duration-200"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg,rgba(123,79,255,0.2),rgba(0,212,255,0.2))' }}>
                    <c.icon size={20} style={{ color: 'var(--label)' }} />
                  </div>
                  <div>
                    <div className="font-semibold mb-0.5" style={{ color: 'var(--text)' }}>{c.label}</div>
                    <div className="text-sm text-muted mb-1">{c.desc}</div>
                    <div className="text-sm font-mono" style={{ color: 'var(--label)' }}>{c.cta}</div>
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
