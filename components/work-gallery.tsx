"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const completedWorks = [
  { image: "/images/trabajo-01.jpeg", alt: "Cortinas roller instaladas en un espacio de trabajo" },
  { image: "/images/trabajo-02.jpeg", alt: "Cortinas roller screen instaladas en un ambiente residencial" },
  { image: "/images/trabajo-03.jpeg", alt: "Cortinas roller grises instaladas en un comedor" },
  { image: "/images/trabajo-04.webp", alt: "Cortinas roller screen instaladas en ventanas residenciales" },
  { image: "/images/trabajo-05.jpg", alt: "Cortinas roller instaladas sobre una gran abertura" },
  { image: "/images/trabajo-06.jpg", alt: "Cortina roller screen instalada en una oficina" },
  { image: "/images/trabajo-07.jpg", alt: "Solución de privacidad exterior realizada a medida" },
  { image: "/images/trabajo-08.jpg", alt: "Cortina roller instalada sobre una ventana de marco negro" },
]

export function WorkGallery() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const moveCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current
    if (!carousel) return

    const currentIndex = Math.round(carousel.scrollLeft / carousel.clientWidth)
    const nextIndex = (currentIndex + direction + completedWorks.length) % completedWorks.length
    carousel.scrollTo({ left: nextIndex * carousel.clientWidth, behavior: "smooth" })
  }

  return (
    <section id="trabajos" className="section-shell py-20 md:py-28">
      <div className="catalog-heading">
        <div>
          <p className="eyebrow text-muted-foreground">Trabajos realizados</p>
          <h2>Espacios que ya transformamos.</h2>
        </div>
        <p>
          Una selección de soluciones instaladas en hogares, oficinas y espacios de trabajo.
        </p>
      </div>
      <div className="work-carousel-shell mt-12">
        <div ref={carouselRef} className="work-carousel" aria-label="Galería de trabajos realizados">
          {completedWorks.map((work) => (
            <figure key={work.image} className="work-carousel-slide">
              <Image
                src={work.image}
                alt={work.alt}
                fill
                sizes="(max-width: 768px) calc(100vw - 2.5rem), (max-width: 1400px) calc(100vw - 5rem), 1332px"
              />
              <div className="work-carousel-controls">
                <button type="button" onClick={() => moveCarousel(-1)} aria-label="Ver trabajo anterior">
                  <ChevronLeft aria-hidden="true" size={20} />
                </button>
                <button type="button" onClick={() => moveCarousel(1)} aria-label="Ver trabajo siguiente">
                  <ChevronRight aria-hidden="true" size={20} />
                </button>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}