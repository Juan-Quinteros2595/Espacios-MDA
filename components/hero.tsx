import { ArrowDownRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-8 md:px-10 md:pb-24 lg:px-14">
      <div className="relative min-h-[680px] overflow-hidden rounded-[4px] bg-foreground md:min-h-[760px]">
        <Image
          src="/images/film-frosted-horizontal.png"
          alt="Oficina moderna con film esmerilado aplicado sobre una sala vidriada"
          fill
          preload
          quality={85}
          sizes="(max-width: 768px) calc(100vw - 2.5rem), (max-width: 1440px) calc(100vw - 5rem), 1312px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,22,18,.84)_0%,rgba(20,22,18,.49)_45%,rgba(20,22,18,.08)_78%)]" />
        <div className="relative z-10 flex min-h-[680px] max-w-[760px] flex-col justify-between p-7 text-white md:min-h-[760px] md:p-14 lg:p-16">
          <p className="eyebrow text-white/75">Cortinas y films para vidrios</p>
          <div className="pb-5">
            <h1 className="max-w-[720px] text-[clamp(3.3rem,7.3vw,7.8rem)] font-semibold leading-[.87] tracking-[-.065em]">
              Diseñamos cómo entra la luz.
            </h1>
            <p className="hero-subtitle mt-8 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              Soluciones a medida para controlar la luz, mejorar la privacidad y transformar el espacio de tu hogar, oficina o comercio.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="button button-light" href="#soluciones">
                Explorar soluciones <ArrowDownRight aria-hidden="true" size={16} />
              </a>
              <a className="button button-ghost-light" href="https://wa.me/542257548387?text=Hola%20Espacios%20MDA.%20Quiero%20consultar%20por%20una%20soluci%C3%B3n%20para%20mi%20espacio." target="_blank" rel="noreferrer">
                Solicitar asesoramiento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
