import { ArrowRight } from "lucide-react"

const families = [
  {
    number: "01",
    title: "Cortinas",
    copy: "Roller, textiles, bandas, aluminio y sistemas automatizados para cada forma de habitar.",
    href: "#catalogo-cortinas",
  },
  {
    number: "02",
    title: "Films para vidrios",
    copy: "Privacidad, control solar, tecnología y protección sin reemplazar la superficie existente.",
    href: "#catalogo-films",
  },
]

export function SolutionFamilies() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-12 md:px-10 md:py-20 lg:px-14">
      <div className="grid gap-4 lg:grid-cols-2">
        {families.map((family) => (
          <a
            key={family.number}
            id={family.number === "01" ? "cortinas" : "films"}
            href={family.href}
            className={`family-card group ${family.number === "01" ? "family-card-curtain" : "family-card-film"}`}
          >
            <div>
              <p className="eyebrow">{family.number} · {family.number === "01" ? "Cortinas" : "Films para vidrios"}</p>
              <h2>{family.number === "01" ? "Control preciso. Diseño a medida." : "Una nueva función para cada vidrio."}</h2>
              <p>{family.copy}</p>
            </div>
            <div className="family-link">
              Explorar {family.number === "01" ? "cortinas" : "films"} <ArrowRight aria-hidden="true" size={17} />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}