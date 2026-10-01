import { Check, Layers3, MessageCircle, Ruler } from "lucide-react"

const steps = [
  { icon: MessageCircle, number: "01", title: "Escuchamos", copy: "Nos contás sobre el espacio, el uso y la necesidad que querés resolver." },
  { icon: Ruler, number: "02", title: "Relevamos", copy: "Medimos y analizamos la superficie para recomendar una solución adecuada." },
  { icon: Layers3, number: "03", title: "Proponemos", copy: "Definimos producto, terminación y alcance con una propuesta clara." },
  { icon: Check, number: "04", title: "Instalamos", copy: "Coordinamos la colocación y seguimos presentes después de finalizar el trabajo." },
]

export function ProcessSection() {
  return (
    <section className="process-section section-shell py-20 md:py-24">
      <div className="catalog-heading">
        <div>
          <p className="eyebrow text-muted-foreground">Nuestro proceso</p>
          <h2>De la necesidad a la instalación.</h2>
        </div>
        <p>
          Un acompañamiento integral para que cada decisión tenga sentido técnico, funcional y estético.
        </p>
      </div>
      <ol className="process-grid mt-10">
        {steps.map(({ icon: Icon, number, title, copy }) => (
          <li key={number}>
            <div className="flex items-center justify-between">
              <span className="process-number">{number}</span>
              <Icon aria-hidden="true" size={25} strokeWidth={1.4} />
            </div>
            <h3>{title}</h3><p>{copy}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}