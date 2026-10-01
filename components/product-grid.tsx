import { ArrowRight } from "lucide-react"
import Image from "next/image"

const curtainProducts = [
  {
    name: "Roller Blackout",
    image: "/images/cortina-blackout-real.jpg",
    position: "center 35%",
    tag: "Oscurecimiento",
    copy: "Privacidad y control de luz para dormitorios, livings, oficinas y espacios audiovisuales.",
  },
  {
    name: "Roller Screen",
    image: "/images/cortina-screen-real.jpeg",
    position: "center 38%",
    tag: "Confort solar",
    copy: "Filtra la luz y ayuda a reducir reflejos manteniendo la conexión con el exterior.",
  },
  {
    name: "Bandas verticales",
    image: "/images/cortina-bandas.jpeg",
    position: "center",
    tag: "Versatilidad",
    copy: "Regulación gradual de luz y privacidad, especialmente indicada para grandes aberturas.",
  },
  {
    name: "Cortinas inteligentes",
    image: "/images/cortina-inteligente.png",
    position: "center",
    tag: "Automatización",
    copy: "Controlá tus cortinas de manera simple e integral desde un sistema automatizado.",
  },
  {
    name: "Cortinas de tela",
    image: "/images/cortina-tela-real.jpg",
    position: "center 32%",
    tag: "Textiles",
    copy: "Una alternativa clásica y versátil que aporta calidez, privacidad y una terminación decorativa al ambiente.",
  },
]

function productWhatsAppLink(productName: string) {
  const message = encodeURIComponent(`Hola Espacios MDA. Quiero consultar por ${productName}.`)
  return `https://wa.me/542257548387?text=${message}`
}

export function ProductGrid() {
  return (
    <section id="catalogo-cortinas" className="section-shell py-20 md:py-28">
      <div className="catalog-heading">
        <div>
          <p className="eyebrow text-muted-foreground">Cortinas a medida</p>
          <h2 id="productos">La luz también se diseña.</h2>
        </div>
        <p>Modelos, telas y sistemas pensados para acompañar la arquitectura y el uso real de cada ambiente.</p>
      </div>
      <div className="product-grid curtain-product-grid mt-12">
        {curtainProducts.map((product) => (
          <article key={product.name} className="product-card">
            <div className="product-image">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 700px) calc(100vw - 2.5rem), (max-width: 1180px) 50vw, 33vw"
                style={{ objectPosition: product.position }}
              />
            </div>
            <div className="product-body">
              <span className="product-tag">{product.tag}</span>
              <h3>{product.name}</h3>
              <p>{product.copy}</p>
              <a href={productWhatsAppLink(product.name)} target="_blank" rel="noreferrer">
                Consultar por este producto <ArrowRight aria-hidden="true" size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
