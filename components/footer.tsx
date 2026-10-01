import { MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-shell flex flex-col items-center gap-6 py-10 text-center">
        <div className="flex items-center gap-4">
          <Image src="/logo-espacios-mda.png" alt="Espacios MDA" width={64} height={64} sizes="64px" className="site-chrome-logo object-contain" />
          <span className="text-sm">Espacios MDA</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a className="flex items-center gap-2 hover:text-foreground" href="https://share.google/7pXXA2pUkvSNK8l6J" target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" size={16} /> Buenos Aires, Argentina
          </a>
          <a className="hover:text-foreground" href="https://www.instagram.com/espaciosmda/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
