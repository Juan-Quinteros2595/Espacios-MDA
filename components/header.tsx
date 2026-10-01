"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Menu, X } from "lucide-react"

const desktopNavigation = [
  { label: "Reseñas", href: "#resenas" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Soluciones", href: "#soluciones" },
  { label: "Cortinas", href: "#catalogo-cortinas" },
  { label: "Films", href: "#catalogo-films" },
]

const mobileNavigation = [
  { label: "Inicio", href: "#inicio" },
  ...desktopNavigation,
  { label: "Trabajos", href: "#trabajos" },
  { label: "Contacto", href: "#contacto" },
]

function whatsappLink(message: string) {
  return `https://wa.me/542257548387?text=${encodeURIComponent(message)}`
}

const generalWhatsApp = whatsappLink("Hola Espacios MDA. Quiero consultar por una solución para mi espacio.")

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-14">
          <a href="#inicio" aria-label="Espacios MDA — inicio" className="shrink-0">
            <Image src="/logo-espacios-mda.png" alt="Espacios MDA" width={64} height={64} sizes="64px" priority className="site-chrome-logo object-contain" />
          </a>
          <nav className="hidden items-center gap-7 text-[13px] font-medium md:flex" aria-label="Navegación principal">
            {desktopNavigation.map((item) => (
              <a key={item.href} className="nav-link transition-colors hover:text-primary" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button button-dark" href={generalWhatsApp} target="_blank" rel="noreferrer">
            Consultar <ArrowRight aria-hidden="true" size={15} />
          </a>
        </div>
      </header>

      <div className={`mobile-nav-float md:hidden${isMobileNavOpen ? " is-open" : ""}`}>
        <nav
          id="mobile-navigation"
          className="mobile-nav-panel"
          aria-label="Navegación rápida"
          aria-hidden={!isMobileNavOpen}
          inert={!isMobileNavOpen}
        >
          {mobileNavigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsMobileNavOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="mobile-nav-toggle"
          aria-label={isMobileNavOpen ? "Cerrar navegación" : "Abrir navegación"}
          aria-expanded={isMobileNavOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileNavOpen((isOpen) => !isOpen)}
        >
          {isMobileNavOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>
    </>
  )
}
