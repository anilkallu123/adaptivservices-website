'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggle: () => {},
})

export function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Init to the SSR default ('dark'); read the stored value AFTER mount so the
  // first client render matches the server (no hydration mismatch / React #418).
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    let stored: string | null = null
    try { stored = localStorage.getItem('adaptiv-theme') } catch {}
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored)
      document.documentElement.classList.toggle('light', stored === 'light')
    }
  }, [])

  const toggle = useCallback(() => {
    setTheme(prev => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.classList.toggle('light', next === 'light')
      try { localStorage.setItem('adaptiv-theme', next) } catch {}
      return next
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
