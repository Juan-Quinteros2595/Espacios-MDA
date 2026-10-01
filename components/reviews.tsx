import { Star } from "lucide-react"

export function Reviews() {
  return (
    <section id="resenas" className="reviews-section bg-sand py-24 md:py-32">
      <div className="section-shell">
        <div className="catalog-heading">
          <div>
            <p className="eyebrow text-muted-foreground">Reseñas de Google</p>
            <h2>La experiencia también construye confianza.</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Este espacio se conectará con reseñas verificadas del Perfil de Empresa de Espacios MDA.</p>
        </div>
        <div className="reviews-placeholder mt-12">
          <div className="flex gap-1 text-primary" aria-label="Cinco estrellas">
            {Array.from({ length: 5 }, (_, index) => <Star key={index} aria-hidden="true" size={18} fill="currentColor" />)}
          </div>
          <p>En la versión final se mostrarán opiniones reales, nombre del cliente y acceso directo a Google para verificar cada reseña.</p>
          <span>Contenido pendiente de conexión con Google Business Profile</span>
        </div>
      </div>
    </section>
  )
}