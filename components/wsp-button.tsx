import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const phone = "542257548387"
  const message = encodeURIComponent("Hola! Me gustaría consultar sobre sus cortinas.")
  const href = `https://wa.me/${phone}?text=${message}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="whatsapp-float"
    >
      <MessageCircle aria-hidden="true" size={23} />
    </a>
  )
}
