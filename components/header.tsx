"use client"

import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Real logo */}
        <a href="/" aria-label="Espacios MDA — inicio">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9OzSKdyXEiZBbZuOGibUc5cSvONvjl.png"
            alt="Espacios MDA"
            className="h-12 w-auto"
          />
        </a>

        {/* Nav pills + theme toggle */}
        <nav className="flex items-center gap-2" aria-label="Navegación principal">
          <ThemeToggle />
          <a
            href="#nosotros"
            className="text-xs font-medium px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors font-sans"
          >
            ( nosotros )
          </a>
          <a
            href="https://wa.me/5492214816465?text=Hola%20Espacios%20MDA.%20Me%20interesa%20consultar%20sobre"
            className="text-xs font-medium px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors font-sans"
          >
            ( contacto )
          </a>
        </nav>
      </div>
    </header>
  )
}
