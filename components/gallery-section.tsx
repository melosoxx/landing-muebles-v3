import Image from "next/image"

const galleryItems = [
  {
    id: "rack-daniel",
    title: "Rack para TV",
    description: "Fabricado por Daniel G.",
    imageSrc: "/gallery/rack-daniel.jpg",
  },
]

export function GallerySection() {
  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                Resultados Reales
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Muebles construidos con nuestros planos
            </h2>
            <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              Estos son algunos de los muebles que nuestros clientes fabricaron
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square overflow-hidden rounded-xl group"
              >
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-bold text-lg">{item.title}</p>
                    <p className="text-white/80 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
