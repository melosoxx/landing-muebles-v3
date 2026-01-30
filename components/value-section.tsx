import { CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

const categories = [
  {
    title: "Escritorios rectos y esquineros",
    description: "Diseños modernos y funcionales para espacios de trabajo",
    quantity: "45+ diseños",
  },
  {
    title: "Bancos de tubo y madera",
    description: "Combinación perfecta de metal y madera natural",
    quantity: "38+ diseños",
  },
  {
    title: "Sofás y Sillones Industriales",
    description: "Piezas de living con estilo robusto y contemporáneo",
    quantity: "52+ diseños",
  },
  {
    title: "Mesas de Centro y Comedor",
    description: "Desde pequeñas mesas hasta grandes comedores familiares",
    quantity: "67+ diseños",
  },
  {
    title: "Muebles flotantes y de pared",
    description: "Soluciones que maximizan el espacio disponible",
    quantity: "41+ diseños",
  },
  {
    title: "Bibliotecas y estanterías",
    description: "Sistemas de almacenamiento versátiles y decorativos",
    quantity: "58+ diseños",
  },
]

export function ValueSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">¿Qué incluye el pack completo?</h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              Cada plano está diseñado con precisión profesional, incluyendo todas las medidas y especificaciones
              técnicas que necesitas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    <div className="inline-block bg-primary/10 px-3 py-1 rounded-full">
                      <p className="text-sm font-semibold text-primary">{category.quantity}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  )
}
