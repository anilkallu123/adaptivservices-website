'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'

export type Lang = 'en' | 'no'

interface LangContextValue {
  lang: Lang
  toggle: () => void
}

const LangContext = createContext<LangContextValue>({ lang: 'no', toggle: () => {} })

export function useLang() {
  return useContext(LangContext)
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  // Init to the SSR default ('no'); read stored value AFTER mount so the first
  // client render matches the server (no hydration mismatch / React #418/#423/#425).
  const [lang, setLang] = useState<Lang>('no')

  useEffect(() => {
    let stored: string | null = null
    try { stored = localStorage.getItem('adaptiv_lang') } catch {}
    if (stored === 'en' || stored === 'no') setLang(stored)
  }, [])

  // Keep <html lang> in sync with the active language
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggle = useCallback(() => {
    setLang(prev => {
      const next: Lang = prev === 'no' ? 'en' : 'no'
      try { localStorage.setItem('adaptiv_lang', next) } catch {}
      return next
    })
  }, [])

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}
