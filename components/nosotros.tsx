import Image from "next/image"

export function Nosotros() {
  return (
    <section id="nosotros" className="section-shell py-24 md:py-32">
      <div className="about-grid">
        <div className="about-mark">
          <Image src="/logo-espacios-mda-completo.png" alt="Logo completo de Espacios MDA" width={360} height={360} sizes="(max-width: 1023px) 78vw, 360px" />
        </div>
        <div className="about-copy">
          <h2>
            Pensamos el espacio completo. No vendemos una solución aislada.
          </h2>
          <p>
            Espacios MDA surge a partir de la necesidad de que cada espacio sea único y especial. Por eso diseñamos soluciones en cortinas y films para vidrios que transforman la luz, la privacidad, el confort y la manera de habitar cada ambiente. Acompañamos cada proyecto desde la primera consulta hasta la instalación y el seguimiento posterior.
          </p>
          <div className="about-audiences">
            <span>Hogares</span><span>Oficinas</span><span>Comercios</span><span>Proyectos</span>
          </div>
          <a className="button button-about" href="https://wa.me/542257548387?text=Hola%20Espacios%20MDA.%20Quiero%20consultar%20por%20una%20soluci%C3%B3n%20para%20mi%20espacio." target="_blank" rel="noreferrer">
            Hablemos de tu espacio <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
