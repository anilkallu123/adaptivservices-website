'use client'

export function ThemeScript() {
  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `(function(){var t=localStorage.getItem('adaptiv-theme')||'dark';document.documentElement.classList.toggle('light',t==='light');})();`,
      }}
    />
  )
}
