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
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'no'
    try { return (localStorage.getItem('adaptiv_lang') as Lang) || 'no' } catch { return 'no' }
  })

  // Keep <html lang> in sync with the active language (SSR defaults to 'no')
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
