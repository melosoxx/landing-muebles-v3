import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Ruler, Wrench } from "lucide-react"

const plansPreview = [
  {
    id: "rack-tv",
    title: "Rack para TV",
    dimensions: "120 x 40 x 42 cm",
    material: "Metalón 20x20mm #1.25mm",
    imageSrc: "/plans/rack-tv.png",
  },
  {
    id: "mesa-desayunador",
    title: "Mesa Desayunador con Estantes",
    dimensions: "110 x 61 x 97 cm",
    material: "Metalón 20x20mm #1.25mm",
    imageSrc: "/plans/mesa-desayunador.png",
  },
  {
    id: "mesa-alta-banquetas",
    title: "Mesa Alta con 4 Banquetas",
    dimensions: "100 x 60 x 87 cm",
    material: "Metalón 30x30mm y 20x20mm",
    imageSrc: "/plans/mesa-alta-banquetas.png",
  },
  {
    id: "estante-malla",
    title: "Estante con Malla Metálica",
    dimensions: "75 x 27 x 78 cm",
    material: "Metalón 20x20mm #1.25mm",
    imageSrc: "/plans/estante-malla.png",
  },
]

export function PlansPreviewSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                Mirá lo que recibís
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Planos profesionales con todo el detalle
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada plano incluye medidas exactas, lista de materiales y especificaciones técnicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {plansPreview.map((plan) => (
              <Card
                key={plan.id}
                className="overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <div className="relative aspect-[4/3] bg-white">
                  <Image
                    src={plan.imageSrc}
                    alt={`Plano de ${plan.title}`}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-bold text-lg mb-2">{plan.title}</h3>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-4 h-4 text-primary" />
                      <span>{plan.dimensions}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-primary" />
                      <span>{plan.material}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Y más de <span className="font-bold text-primary">+300 diseños</span> esperándote
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
