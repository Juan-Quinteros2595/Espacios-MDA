import { ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"

const whatsappLink = `https://wa.me/542257548387?text=${encodeURIComponent("Hola Espacios MDA. Quiero consultar por una solución para mi espacio.")}`
const showroomLink = "https://maps.app.goo.gl/zcn6a4yhesGrxLW96"

export function ContactShowroom() {
  return (
    <section id="contacto" className="section-shell py-24 md:py-32">
      <div className="contact-card">
        <div>
          <p className="eyebrow text-white/55">Hablemos de tu espacio</p>
          <h2>Contanos qué necesitás resolver.</h2>
        </div>
        <div className="contact-actions">
          <p>Te ayudamos a encontrar una solución adecuada para tus ventanas o superficies vidriadas.</p>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="button button-light">
            Consultar por WhatsApp <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
      <div className="showroom-card">
          <p className="eyebrow text-muted-foreground">Showroom</p>
          <h3>
            Conocé nuestro showroom, ubicado en <a className="underline decoration-border underline-offset-4 hover:text-primary" href={showroomLink} target="_blank" rel="noreferrer">Av. Shaw 74, Pinamar</a>.
          </h3>
        <a className="showroom-logo" href={showroomLink} target="_blank" rel="noreferrer" aria-label="Ver el showroom Kaso Deco en Google Maps">
          <Image src="/logo-kaso-deco.png" alt="Kaso Deco" width={596} height={379} sizes="(max-width: 768px) 58vw, 360px" />
        </a>
      </div>
    </section>
  )
}