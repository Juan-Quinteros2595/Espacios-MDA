import {
  EyeOff,
  Layers3,
  ShieldCheck,
  Sparkles,
  SunMedium,
  ThermometerSun,
} from "lucide-react"

const needs = [
  { icon: EyeOff, title: "Más privacidad", copy: "Sectorizá oficinas, salas y ambientes sin resignar el ingreso de luz." },
  { icon: ThermometerSun, title: "Mayor confort", copy: "Controlá la incidencia solar, el calor y los reflejos sobre tus vidrios." },
  { icon: SunMedium, title: "Control de luz", copy: "Elegí el nivel de paso de luz y oscurecimiento para cada ambiente." },
  { icon: ShieldCheck, title: "Protección", copy: "Sumá una capa que ayuda a mantener contenidos los fragmentos del vidrio." },
  { icon: Layers3, title: "Automatización", copy: "Integrá control remoto y tecnología a la experiencia cotidiana." },
  { icon: Sparkles, title: "Diseño", copy: "Transformá la estética del espacio con soluciones hechas a medida." },
]

export function Solutions() {
  return (
    <section id="soluciones" className="solutions-section section-shell py-14 md:py-20">
      <div className="section-heading">
        <p className="eyebrow text-muted-foreground">
          Encontrá tu solución
        </p>
        <h2>
          Empezá por lo que necesitás cambiar.
        </h2>
        <p>
          Cada espacio pide una respuesta distinta. Te ayudamos a elegirla, medirla e instalarla.
        </p>
      </div>
      <div className="solutions-grid mt-8 border-l border-t border-border">
        {needs.map(({ icon: Icon, title, copy }) => (
          <article key={title} className="solution-card border-b border-r border-border">
            <Icon aria-hidden="true" size={23} strokeWidth={1.5} className="shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}