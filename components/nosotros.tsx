"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

const lines = [
  { prefix: "/  ", text: "fabricación", bold: false },
  { prefix: "+ ", text: "colocación", bold: false },
  { prefix: "+ ", text: "post-venta", bold: false },
  { prefix: "", text: "en cortinas", bold: true },
]

function useTypingAnimation(fullText: string, active: boolean, speed = 40) {
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

function TypedLine({
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
      className={`font-sans text-[#f5f0ea] text-base md:text-lg leading-snug tracking-tight text-center ${bold ? "font-bold" : "font-normal"}`}
    >
      <span className="text-[#f5f0ea]/50 select-none">{prefix}</span>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </p>
  )
}

export function Nosotros() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delays = lines.reduce<number[]>((acc, line, i) => {
    if (i === 0) return [0]
    const prev = lines[i - 1].text.length * 40 + 180
    return [...acc, acc[i - 1] + prev]
  }, [])

  return (
    <section id="nosotros" className="max-w-6xl mx-auto px-6 pb-24">
      <div className="flex items-baseline justify-between mb-10 border-b border-border pb-4">
        <h2 className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase font-sans">
          // nosotros
        </h2>
      </div>

      <div ref={ref} className="flex flex-col md:flex-row items-stretch gap-6">
        {/* typed card */}
        <div
          className="relative bg-[#1a1a18] flex flex-col justify-center items-center p-7 shrink-0 w-full md:w-56"
          style={{ aspectRatio: "9 / 12" }}
        >
          <span className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#f5f0ea]/35" aria-hidden="true" />
          <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#f5f0ea]/35" aria-hidden="true" />
          <span className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#f5f0ea]/35" aria-hidden="true" />
          <span className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#f5f0ea]/35" aria-hidden="true" />

          <div className="flex flex-col gap-0.5 items-center">
            {lines.map((line, i) => (
              <TypedLine
                key={i}
                prefix={line.prefix}
                text={line.text}
                bold={line.bold}
                active={visible}
                delay={delays[i]}
              />
            ))}
          </div>
        </div>

        {/* Right: image */}
        {mounted ? (
          <div className="relative flex-1 bg-secondary overflow-hidden min-h-48 md:min-h-0">
            <div className="absolute inset-0 bg-border/20" />
            <div className="absolute inset-0">
              <Image
                src={theme === "dark" ? "/showroom-black.png" : "/showroom-white.png"}
                alt=""
                aria-hidden="true"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        ) : (
          <div className="relative flex-1 bg-secondary overflow-hidden min-h-48 md:min-h-0" />
        )}
      </div>
    </section>
  )
}
