"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle2 } from "lucide-react"
import { ScrollButton } from "./scroll-button"
import { Button } from "@/components/ui/button"

const carouselImages = [
  { src: "/plano-solucion.png", alt: "Pack de planos profesionales" },
  { src: "/plans/rack-tv.png", alt: "Plano de Rack para TV" },
  { src: "/plans/mesa-desayunador.png", alt: "Plano de Mesa Desayunador" },
  { src: "/plans/mesa-alta-banquetas.png", alt: "Plano de Mesa Alta con Banquetas" },
  { src: "/plans/estante-malla.png", alt: "Plano de Estante con Malla Metálica" },
]

const benefits = [
  "Planos profesionales listos para fabricar",
  "Medidas exactas y especificaciones técnicas",
  "Diseños probados con alta demanda en el mercado",
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
    <section id="solucion" className="relative py-20 md:py-32 bg-secondary text-secondary-foreground overflow-hidden">
      {/* Glow Effect Background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-200 h-100 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
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

          {/* CTA Button - Scroll to Plans */}
          <div className="text-center mb-8">
            <ScrollButton
              targetId="oferta"
              trackingEventName="Ver Planos - Solution Section"
            >
              <Button
                size="lg"
                className="px-8 py-6 h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pulse"
              >
                VER LOS PLANOS AHORA
              </Button>
            </ScrollButton>
          </div>

          {/* Carrusel de planos - centrado y tamaño reducido */}
          <div className="relative max-w-md mx-auto mb-10">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card/10 backdrop-blur-sm rounded-2xl p-6 border border-secondary-foreground/10">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
                      index === current ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-3 rounded-xl shadow-xl">
                <p className="text-2xl font-bold">+300</p>
                <p className="text-xs">Planos Profesionales</p>
              </div>
            </div>
          </div>

          {/* CTA Link - Scroll to FAQ */}
          <div className="text-center mt-8 mb-8">
            <ScrollButton
              targetId="faq-precios"
              trackingEventName="Precios Venta - Solution Section"
              className="group inline-flex items-center gap-2 text-base md:text-lg font-semibold text-primary hover:text-primary/80 transition-all duration-300 cursor-pointer border-b-2 border-primary/30 hover:border-primary pb-1"
            >
              <span>¿A cuánto se pueden vender los muebles?</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
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

          <div className="text-center">
            <p className="text-2xl font-bold text-primary">Descarga, fabrica y vende. Así de simple.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
