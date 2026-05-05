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
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2"
    >
      <img
        src="/whatsappicon.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="w-full h-full object-contain drop-shadow-md"
      />
    </a>
  )
}
