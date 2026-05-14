"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useSwipe } from "@/hooks/useSwipe"

interface ColorOption {
  name: string
  image: string
  imageColor: string
}

interface ProductCardProps {
  category: string
  colors: ColorOption[]
}

const PHONE = "542257548387" 

export function ProductCard({ category, colors }: ProductCardProps) {
  const [activeColor, setActiveColor] = useState(0)

  const prev = () => setActiveColor((i) => (i === 0 ? colors.length - 1 : i - 1))
  const next = () => setActiveColor((i) => (i === colors.length - 1 ? 0 : i + 1))

  const { onTouchStart, onTouchEnd } = useSwipe({
    onSwipeLeft: next,
    onSwipeRight: prev,
    minSwipeDistance: 50,
  })
  
  const whatsappUrl = () => {
    const msg = `Hola, me interesa la ${category} de color ${colors[activeColor].name}. Está disponible todavía?`
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`
  }

  return (
    <article className="bg-card border border-border flex flex-col">

      {/* Top row: category + CTA */}
      <div className="flex items-center justify-between px-5 pt-5 pb-4">
        <h3 className="text-sm font-bold text-card-foreground font-sans tracking-tight">
          {category}
        </h3>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-medium font-sans px-4 py-1.5 rounded-full border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors tracking-wide whitespace-nowrap"
        >
          Me interesa
        </a>
      </div>

      {/* Carousel */}
      <div className="px-5 pb-1">
        <div
          className="relative bg-secondary overflow-hidden group rounded-sm w-full"
          style={{ aspectRatio: "4 / 3" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {colors[activeColor].image ? (
            <Image
              src={colors[activeColor].image}
              alt={colors[activeColor].name}
              fill
              className="object-contain transition-opacity duration-300"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs tracking-widest text-muted-foreground uppercase font-sans">
                imagen — {colors[activeColor].name}
              </span>
            </div>
          )}

          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Color anterior"
            type="button"
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 items-center justify-center bg-background/80 border border-border rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          >
            <ChevronLeft className="w-3.5 h-3.5 text-foreground" />
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Siguiente color"
            type="button"
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 items-center justify-center bg-background/80 border border-border rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          >
            <ChevronRight className="w-3.5 h-3.5 text-foreground" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {colors.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveColor(i)}
                aria-label={`Ir a color ${i + 1}`}
                type="button"
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  i === activeColor ? "bg-foreground scale-110" : "bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Colores label + swatches */}
      <div className="flex items-start gap-3 px-5 py-4 border-t border-border mt-1 flex-wrap">
        <span className="text-[11px] font-medium text-muted-foreground font-sans tracking-wide pt-0.5 shrink-0">
          Colores:
        </span>
        <div className="grid w-full gap-2 grid-cols-3 sm:grid-cols-3 lg:grid-cols-4">
          {colors.map((color, i) => (
            <button
              key={color.name}
              onClick={() => setActiveColor(i)}
              className="flex items-center gap-1.5 group"
              aria-label={`Seleccionar color ${color.name}`}
              aria-pressed={activeColor === i}
              type="button"
            >
              <span
                className="relative inline-flex w-5 h-5 rounded-sm overflow-hidden shrink-0 transition-all"
                style={{
                  outline: activeColor === i
                    ? "1.5px solid var(--foreground)"
                    : "1.5px solid var(--border)",
                  outlineOffset: activeColor === i ? "2px" : "0px",
                }}
              >
                {color.imageColor ? (
                  <Image 
                  src={color.imageColor} 
                  alt={color.name} 
                  fill 
                  className="object-cover" 
                  sizes="20px"
                  />
                ) : (
                  <span className="w-full h-full bg-muted" />
                )}
              </span>
              <span
                className={`text-[11px] font-sans transition-colors ${
                  activeColor === i
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground group-hover:text-foreground"
                }`}
              >
                {color.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </article>
  )
}
