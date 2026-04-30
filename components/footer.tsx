"use client"

import { useEffect, useState } from "react"

const footerLines = [
  { prefix: "/ ", text: "tu espacio ideal", bold: false },
  { prefix: "", text: "puede ser real", bold: true },
]

function useTypingAnimation(fullText: string, active: boolean, speed = 38) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    if (!active) {
      setDisplayed("")
      return
    }
    setDisplayed("")
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayed(fullText.slice(0, i))
      if (i >= fullText.length) clearInterval(interval)
    }, speed)
    return () => clearInterval(interval)
  }, [active, fullText, speed])

  return displayed
}

function FooterTypedLine({
  prefix,
  text,
  bold,
  active,
  delay,
}: {
  prefix: string
  text: string
  bold: boolean
  active: boolean
  delay: number
}) {
  const [started, setStarted] = useState(false)
  const displayed = useTypingAnimation(text, started)

  useEffect(() => {
    if (!active) {
      setStarted(false)
      return
    }
    const t = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(t)
  }, [active, delay])

  return (
    <p
      className={`font-sans text-[#f5f0ea] text-[9px] leading-tight tracking-tight text-center ${bold ? "font-bold" : "font-normal"}`}
    >
      <span className="text-[#f5f0ea]/50 select-none">{prefix}</span>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </p>
  )
}

export function Footer() {
  const [hovered, setHovered] = useState(false)

  const delays = footerLines.reduce<number[]>((acc, line, i) => {
    if (i === 0) return [0]
    const prev = footerLines[i - 1].text.length * 38 + 180
    return [...acc, acc[i - 1] + prev]
  }, [])

  return (
    <footer className="border-t border-border bg-background transition-colors duration-300" id="contacto">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo area — switches to footer-anim card on hover */}
        <div className="relative h-10 w-32 shrink-0 flex items-center">
          {/* Default logo */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9OzSKdyXEiZBbZuOGibUc5cSvONvjl.png"
            alt="Espacios MDA"
            className={`h-full w-auto object-contain absolute inset-0 transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"}`}
          />

          {/* Footer anim card (green card with typed text) */}
          <div
            className={`absolute inset-0 bg-[#4a6741] flex flex-col justify-center items-center p-2 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
            style={{ boxShadow: "inset 0 0 0 1px rgba(245,240,234,0.12)" }}
            aria-hidden={!hovered}
          >
            {/* Corner brackets */}
            <span className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#f5f0ea]/40" />
            <span className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#f5f0ea]/40" />
            <span className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#f5f0ea]/40" />
            <span className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#f5f0ea]/40" />
            <div className="flex flex-col gap-0 items-center">
              {footerLines.map((line, i) => (
                <FooterTypedLine
                  key={i}
                  prefix={line.prefix}
                  text={line.text}
                  bold={line.bold}
                  active={hovered}
                  delay={delays[i]}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs tracking-widest text-muted-foreground uppercase font-sans">Buenos Aires, Argentina</p>

        {/* Contacto pill — hover triggers the logo swap */}
        <a
          href="https://wa.me/5492214816465?text=Hola%20Espacios%20MDA.%20Me%20interesa%20consultar%20sobre"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="text-xs font-medium px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors font-sans"
        >
          ( contacto )
        </a>
      </div>
    </footer>
  )
}
