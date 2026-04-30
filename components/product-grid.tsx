import { ProductCard } from "./product-card"

const products = [
  {
    number: "01",
    category: "cortinas roller",
    material: "blackout",
    colors: [
      { name: "plateado", hex: "#b0b0b0" },
      { name: "blanco",   hex: "#f5f5f0" },
      { name: "natural",  hex: "#d6c9b0" },
      { name: "negro",    hex: "#1e1e1c" },
    ],
  },
  {
    number: "02",
    category: "cortinas de tela",
    material: "blackout cozumel",
    colors: [
      { name: "jasper",   hex: "#8b6e5a" },
      { name: "chalk",    hex: "#e8e4dc" },
      { name: "antique",  hex: "#c4b49a" },
      { name: "yute",     hex: "#b0956e" },
      { name: "sand",     hex: "#d4c4a0" },
    ],
  },
  {
    number: "03",
    category: "cortinas roller",
    material: "sunscreen",
    colors: [
      { name: "natural",  hex: "#d6c9b0" },
      { name: "blanco",   hex: "#f0ede6" },
      { name: "plateado", hex: "#b0b0b0" },
    ],
  },
  {
    number: "04",
    category: "cortinas de tela",
    material: "tussor",
    colors: [
      { name: "coral",   hex: "#d4705a" },
      { name: "rosa",    hex: "#e8a8a8" },
      { name: "canela",  hex: "#c49870" },
      { name: "verde",   hex: "#6b9471" },
      { name: "azul",    hex: "#6a85b0" },
    ],
  },
]

export function ProductGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-24" id="productos">
      <div className="flex items-baseline justify-between mb-10 border-b border-border pb-4">
        <h2 className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase font-sans">// productos</h2>
        <span className="text-xs text-muted-foreground font-sans">{products.length} colecciones</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {products.map((product) => (
          <ProductCard key={product.number} {...product} />
        ))}
      </div>
    </section>
  )
}
