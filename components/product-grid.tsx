import { ProductCard } from "./product-card"

const products = [
  {
    category: "Blackout Roller",
    colors: [
      { name: "Blanco", image: "/Productos/blackout/cortina-blackout.jpg", imageColor: "/Colors/blackout_blanco.png" },
      { name: "Natural", image: "/Productos/blackout/blackout-natural.png", imageColor: "/Colors/blackout_natural.png" },
      { name: "Beige",   image: "/Productos/blackout/blackout-beige.png", imageColor: "/Colors/blackout_beige.png" },
      { name: "Gris",    image: "/Productos/blackout/blackout-gris.png", imageColor: "/Colors/blackout_gris.png" },
      { name: "Negro",   image: "/Productos/blackout/blackout-negro.png", imageColor: "/Colors/blackout_negro.png" },
    ],
  },
  {
    category: "Sunscreen Roller",
    colors: [
      { name: "Blanco", image: "/Productos/sunscreen/sunscreen.jpeg" ,imageColor: "/Colors/sunscreen_bl-bl.png" },
      { name: "Tabaco", image: "/Productos/sunscreen/sunscreen_tabaco.png" ,imageColor: "/Colors/sunscreen_tabaco.png" },
      { name: "Beige", image: "/Productos/sunscreen/sunscreen_beige.png" ,imageColor: "/Colors/sunscreen_be-be.png" },
      { name: "Gris/Negro", image: "/Productos/sunscreen/sunscreen_gris-negro.png" ,imageColor: "/Colors/sunscreen_gr-ne.png" },
      { name: "Gris", image: "/Productos/sunscreen/sunscreen_gris.png" ,imageColor: "/Colors/sunscreen_gr-gr.png" },
      { name: "Negro", image: "/Productos/sunscreen/sunscreen_negro.png" ,imageColor: "/Colors/sunscreen_ne-ne.png" },
    ],
  },
  {
    category: "Bandas",
    colors: [
      { name: "Gris", image: "/Productos/bandas/banda_gris.jpeg", imageColor: "/Colors/blackout_gris.png" },
      { name: "Beige", image: "/Productos/bandas/bandas_beige.jpeg", imageColor: "/Colors/blackout_beige.png" },
      { name: "Gris/Negro",   image: "/Productos/bandas/bandas_gris-negro.jpeg", imageColor: "/Colors/sunscreen_gr-ne.png" },
      { name: "Tabaco",    image: "/Productos/bandas/bandas_tabaco.png", imageColor: "/Colors/color_tabaco.jpg" },
      { name: "Negro",   image: "/Productos/bandas/bandas_negro.jpeg", imageColor: "/Colors/blackout_negro.png" },
    ],
  },
  {
    category: "Aluminio",
    colors: [
      { name: "Blanco", image: "/Productos/aluminio/aluminio_blanca.png", imageColor: "/Colors/blackout_blanco.png" },
      { name: "Gris",    image: "/Productos/aluminio/aluminio_gris.png", imageColor: "/Colors/blackout_gris.png" },
      { name: "Negro",   image: "/Productos/aluminio/aluminio_negro.png", imageColor: "/Colors/blackout_negro.png" },
      { name: "Tiza",   image: "/Productos/aluminio/aluminio_tiza.jpeg", imageColor: "/Colors/color_tiza.png" },
    ],
  },
  {
    category: "Cortina Tela",
    colors: [
      { name: "Blanco", image: "/Productos/tela/tela_blanco.png", imageColor: "/Colors/blackout_blanco.png" },
      { name: "Gris",    image: "/Productos/tela/tela_gris.png", imageColor: "/Colors/blackout_gris.png" },
      { name: "Negra",   image: "/Productos/tela/tela_negra.jpeg", imageColor: "/Colors/blackout_negro.png" },
      { name: "Beige",   image: "/Productos/tela/tela_beige.png", imageColor: "/Colors/blackout_beige.png" },
    ],
  },
  {
    category: "Cortina Inteligente",
    colors: [
      { name: "base", video: "/Productos/Inteligente/Cortina.mp4", imageColor: "/Colors/blackout_blanco.png" },
      { name: "basic", video: "/Productos/Inteligente/dentro.mp4", imageColor: "/Colors/blackout_negro.png" },
    ],
  },
]

export function ProductGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24" id="productos">
      <div className="flex items-baseline justify-between mb-10 border-b border-border pb-4">
        <h2 className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase font-sans">
          // productos
        </h2>
      </div>
      <div className="flex flex-col gap-px bg-border">
        {products.map((product) => (
          <ProductCard key={product.category} {...product} />
        ))}
      </div>
    </section>
  )
}
