import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Reviews } from "@/components/reviews"
import { Nosotros } from "@/components/nosotros"
import { Solutions } from "@/components/solutions"
import { SolutionFamilies } from "@/components/solution-families"
import { ProductGrid } from "@/components/product-grid"
import { FilmCatalog } from "@/components/film-catalog"
import { ProcessSection } from "@/components/process-section"
import { WorkGallery } from "@/components/work-gallery"
import { ContactShowroom } from "@/components/contact-showroom"
import { Footer } from "@/components/footer"
import WhatsAppButton from "@/components/wsp-button"

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <Header />
      <Hero />
      <Reviews />
      <Nosotros />
      <Solutions />
      <SolutionFamilies />
      <ProductGrid />
      <FilmCatalog />
      <ProcessSection />
      <WorkGallery />
      <ContactShowroom />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
