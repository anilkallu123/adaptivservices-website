'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import Image from 'next/image'

const links = [
  { href: '/', label: 'Home' },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/sectors', label: 'Sectors' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Insights' },
  { href: '/about', label: 'About' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const stored = localStorage.getItem('adaptiv-theme')
    setDark(stored !== 'light')
  }, [])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  function toggleTheme() {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('light', !next)
    localStorage.setItem('adaptiv-theme', next ? 'dark' : 'light')
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl border-b' : ''
      }`}
      style={{ background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-[var(--text)]">
          <Image
            src={dark ? '/assets/icon_dark.png' : '/assets/icon_light.png'}
            alt="Adaptiv AS"
            width={28}
            height={28}
            className="rounded-sm"
          />
          <span><span className="grad-text">Adaptiv</span> AS</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3.5 py-1.5 rounded-lg text-sm transition-colors ${
                pathname === l.href
                  ? 'text-[var(--text)] bg-white/5'
                  : 'text-muted hover:text-[var(--text)]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 px-4 py-1.5 rounded-lg text-sm font-medium text-white transition-all"
            style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)' }}
          >
            Get in touch
          </Link>
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted hover:text-[var(--text)] transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="md:hidden p-2 rounded-lg text-muted hover:text-[var(--text)] transition-colors"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-t px-6 py-4 flex flex-col gap-1"
            style={{ background: 'var(--surface)' }}
          >
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  pathname === l.href ? 'text-[var(--text)] bg-white/5' : 'text-muted'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2.5 rounded-lg text-sm font-medium text-white text-center"
              style={{ background: 'linear-gradient(135deg,#7B4FFF,#00D4FF)' }}
            >
              Get in touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
