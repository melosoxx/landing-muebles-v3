"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import { ScrollButton } from "@/components/scroll-button"

const carouselImages = [
  { src: "/plano-solucion.png", alt: "Pack de planos profesionales" },
  { src: "/plans/rack-tv.png", alt: "Plano de Rack para TV" },
  { src: "/plans/mesa-desayunador.png", alt: "Plano de Mesa Desayunador" },
  { src: "/plans/mesa-alta-banquetas.png", alt: "Plano de Mesa Alta con Banquetas" },
  { src: "/plans/estante-malla.png", alt: "Plano de Estante con Malla Metálica" },
]

const benefits = [
  "Medidas exactas y especificaciones técnicas",
  "Lista completa de materiales para cada proyecto",
  "Acceso inmediato desde cualquier dispositivo",
]

export function SolutionSection() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length)
    }, 2000)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

  return (
    <section id="solucion" className="relative py-10 md:py-32 text-secondary-foreground overflow-hidden">
      {/* Background Image */}
      <img
        src="/soldadorv2.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />
      {/* Bottom Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-[5]" />
      {/* Glow Effect Background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-200 h-100 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              +300 Planos Profesionales <br /><span className="text-green-500">Muebles Industriales</span>
            </h2>
          </div>

          {/* Carrusel de planos - centrado y tamaño reducido */}
          <div className="relative max-w-md mx-auto mb-8">
            <div className="absolute inset-0 bg-primary/15 rounded-3xl blur-3xl" />
            <div className="relative bg-card/5 backdrop-blur-[2px] rounded-2xl p-6 border border-secondary-foreground/10">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-contain rounded-3xl transition-opacity duration-700 ease-in-out ${
                      index === current ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button - Scroll to Plans */}
          <div className="text-center mb-8">
            <ScrollButton
              targetId="oferta"
              trackingEventName="Ver Planos - Solution Section"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pulse"
            >
              VER LOS PLANOS AHORA
            </ScrollButton>
          </div>

          {/* Lista de beneficios */}
          <ul className="space-y-4 max-w-2xl mx-auto mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span className="text-lg">{benefit}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}
