"use client"

import { useState } from "react"

interface ColorOption {
  name: string
  hex: string
}

interface ProductCardProps {
  number: string
  category: string
  material: string
  colors: ColorOption[]
}

export function ProductCard({ number, category, material, colors }: ProductCardProps) {
  const [activeColor, setActiveColor] = useState(0)

  return (
    <article className="bg-card border border-border flex flex-col">
      {/* Top label */}
      <div className="px-5 pt-5 pb-3">
        <p className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase font-sans">
          // {category}
        </p>
      </div>

      {/* Swatch */}
      <div
        className="mx-5 flex-1 min-h-[220px] md:min-h-[260px] transition-colors duration-300"
        style={{ backgroundColor: colors[activeColor].hex }}
        aria-label={`Color seleccionado: ${colors[activeColor].name}`}
        role="img"
      />

      {/* Metadata row */}
      <div className="border-t border-border mt-5 px-5 py-4 grid grid-cols-[1fr_auto_auto] gap-4 items-start">
        {/* Material */}
        <div>
          <p className="text-[10px] font-medium tracking-[0.15em] text-muted-foreground uppercase mb-1 font-sans">/ Tela</p>
          <p className="text-sm font-bold text-card-foreground font-sans">{material}</p>
        </div>

        {/* Colors */}
        <div>
          <p className="text-[10px] font-medium tracking-[0.15em] text-muted-foreground uppercase mb-2 font-sans">/ Colores</p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
            {colors.map((color, i) => (
              <button
                key={color.name}
                onClick={() => setActiveColor(i)}
                className="flex items-center gap-1.5 group"
                aria-label={`Seleccionar color ${color.name}`}
                aria-pressed={activeColor === i}
              >
                <span
                  className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full transition-all"
                  style={{
                    backgroundColor: activeColor === i ? color.hex : "transparent",
                    border: activeColor === i
                      ? "1.5px solid var(--foreground)"
                      : "1.5px solid var(--border)",
                    boxShadow: activeColor === i
                      ? "0 0 0 2px rgba(168,160,144,0.3)"
                      : "none",
                  }}
                />
                <span className="text-[10px] text-muted-foreground group-hover:text-foreground transition-colors font-sans capitalize">
                  {color.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Number */}
        <div className="self-end pb-0.5">
          <span className="text-4xl font-bold tracking-tight text-muted-foreground leading-none font-sans">{number}</span>
        </div>
      </div>
    </article>
  )
}
