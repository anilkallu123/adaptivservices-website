'use client'

export function ThemeScript() {
  return (
    <script
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var t=localStorage.getItem('adaptiv-theme')||'dark';}catch(e){var t='dark';}document.documentElement.classList.toggle('light',t==='light');})();`,
      }}
    />
  )
}
