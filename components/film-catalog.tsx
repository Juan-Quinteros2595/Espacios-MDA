import { ArrowRight } from "lucide-react"
import Image from "next/image"

const filmProducts = [
  {
    name: "Esmerilado",
    image: "/images/film-frosted.png",
    tag: "Privacidad",
    headline: "Privacidad sin perder luz.",
    copy: "Transforma divisiones y superficies vidriadas en recursos de sectorización y diseño.",
  },
  {
    name: "Espejado",
    image: "/images/film-silver.png",
    tag: "Control solar",
    headline: "Más confort frente al sol.",
    copy: "Según la variante elegida, ayuda a reducir calor y reflejos y aporta mayor privacidad diurna.",
  },
  {
    name: "Smart Film",
    image: "/images/film-smart.png",
    tag: "Tecnología",
    headline: "Transparente u opaco, cuando quieras.",
    copy: "Privacidad controlable para salas, oficinas y ambientes que necesitan adaptarse.",
  },
  {
    name: "Security",
    image: "/images/film-security.png",
    tag: "Protección",
    headline: "Una capa adicional para tus vidrios.",
    copy: "Ayuda a mantener contenidos los fragmentos ante un impacto y reduce su dispersión.",
  },
]

function productWhatsAppLink(productName: string) {
  const message = encodeURIComponent(`Hola Espacios MDA. Quiero conocer más sobre ${productName}.`)
  return `https://wa.me/542257548387?text=${message}`
}

export function FilmCatalog() {
  return (
    <section id="catalogo-films" className="bg-[#171915] py-24 text-[#f8f3ea] md:py-32">
      <div className="section-shell">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow text-white/55">Films para vidrios</p>
            <h2>Un vidrio. Nuevas posibilidades.</h2>
          </div>
          <p className="text-white/65">
            Soluciones que suman privacidad, control solar, tecnología y protección sobre el vidrio existente.
          </p>
        </div>
        <div className="product-grid mt-14">
          {filmProducts.map((product) => (
            <article key={product.name} className="product-card product-card-dark">
              <div className="product-image">
                <Image
                  src={product.image}
                  alt={`Aplicación de ${product.name} en un espacio contemporáneo`}
                  fill
                  sizes="(max-width: 700px) calc(100vw - 2.5rem), (max-width: 1180px) 50vw, 25vw"
                />
              </div>
              <div className="product-body text-[#f8f3ea]">
                <span className="product-tag">{product.tag}</span>
                <p className="product-kicker">{product.name}</p>
                <h3>{product.headline}</h3>
                <p>{product.copy}</p>
              <a
                href={productWhatsAppLink(product.name)}
                target="_blank"
                rel="noreferrer"
              >
                  Conocer esta solución <ArrowRight aria-hidden="true" size={15} />
              </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-white/45">
          Las prestaciones finales dependen del producto, la variante seleccionada, el tipo de vidrio y las condiciones de instalación.
        </p>
      </div>
    </section>
  )
}