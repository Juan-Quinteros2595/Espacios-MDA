import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { Nosotros } from "@/components/nosotros"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />
      <Hero />
      <ProductGrid />
      <Nosotros />
      <Footer />
    </main>
  )
}
