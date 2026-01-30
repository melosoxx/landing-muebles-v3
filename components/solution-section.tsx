import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Planos profesionales listos para fabricar",
  "Medidas exactas y especificaciones técnicas",
  "Diseños probados con alta demanda en el mercado",
  "Lista completa de materiales para cada proyecto",
  "Acceso inmediato desde cualquier dispositivo",
]

export function SolutionSection() {
  return (
    <section id="solucion" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
                  <p className="text-sm font-semibold text-primary">LA SOLUCIÓN</p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Más de 300 planos profesionales de muebles industriales
                </h2>
                <p className="text-xl text-secondary-foreground/80 leading-relaxed">
                  Todo lo que necesitas para empezar a fabricar muebles de alta calidad y demanda comprobada.
                  <span className="text-primary font-semibold"> Sin diseñar, sin adivinar, sin perder tiempo.</span>
                </p>
              </div>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <p className="text-2xl font-bold text-primary">Descarga, fabrica y vende. Así de simple.</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-secondary-foreground/10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_k48l7hk48l7hk48l-8lPQt2cBDUaJKur0Pqb4ytiP98oNFj.png"
                  alt="Pack de planos profesionales"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-xl">
                  <p className="text-3xl font-bold">+300</p>
                  <p className="text-sm">Planos Profesionales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
