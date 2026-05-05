import { ProductCard } from "./product-card"

const products = [
  {
    category: "Cortina Blackout",
    colors: [
      { name: "Blanco", image: "/test.jpg", imageColor: "/Colors/blackout_blanco.png" },
      { name: "Natural", image: "/test.jpg", imageColor: "/Colors/blackout_natural.png" },
      { name: "Beige",   image: "/test.jpg", imageColor: "/Colors/blackout_beige.png" },
      { name: "Gris",    image: "/test.jpg", imageColor: "/Colors/blackout_gris.png" },
      { name: "Negro",   image: "/test.jpg", imageColor: "/Colors/blackout_negro.png" },
    ],
  },
  {
    category: "Cortina Sunscreen",
    colors: [
      { name: "Blanco/Blanco", image: "/test.jpg" ,imageColor: "/Colors/sunscreen_bl-bl.png" },
      { name: "Blanco/Beige",  image: "/test.jpg" ,imageColor: "/Colors/sunscreen_bl-be.png" },
      { name: "Blanco/Gris",   image: "/test.jpg" ,imageColor: "/Colors/sunscreen_bl-gr.png" },
      { name: "Tabaco",        image: "/test.jpg" ,imageColor: "/Colors/sunscreen_tabaco.png" },
      { name: "Beige/Beige",   image: "/test.jpg" ,imageColor: "/Colors/sunscreen_be-be.png" },
      { name: "Gris/Negro",    image: "/test.jpg" ,imageColor: "/Colors/sunscreen_gr-ne.png" },
      { name: "Gris/Gris",     image: "/test.jpg" ,imageColor: "/Colors/sunscreen_gr-gr.png" },
      { name: "Negro/Negro",   image: "/test.jpg" ,imageColor: "/Colors/sunscreen_ne-ne.png" },
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
