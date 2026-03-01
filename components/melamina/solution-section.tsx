"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { ScrollButton } from "@/components/scroll-button"
import { Button } from "@/components/ui/button"

const carouselImages = [
  { src: "/melamina/plans/refe1.png", alt: "Plano de mueble de melamina 1" },
  { src: "/melamina/plans/refe2.png", alt: "Plano de mueble de melamina 2" },
  { src: "/melamina/plans/refe3.png", alt: "Plano de mueble de melamina 3" },
  { src: "/mastermelamina.png", alt: "Pack de planos de melamina" },
  { src: "/melamina/plans/refe4.png", alt: "Plano de mueble de melamina 4" },
  { src: "/melamina/plans/refe5.png", alt: "Plano de mueble de melamina 5" },
  { src: "/melamina/plans/refe6.png", alt: "Plano de mueble de melamina 6" },
]

const benefits = [
  "Lista completa de materiales para cada proyecto",
  "Medidas exactas y especificaciones técnicas",
  "Diseños de alta demanda en el mercado",
  "Acceso inmediato desde cualquier dispositivo",
]

export function SolutionSection() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (carouselImages.length <= 1) return
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length)
    }, 2000)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

  return (
    <section id="solucion" className="relative py-12 md:py-20 text-secondary-foreground overflow-hidden">
      {/* Background image */}
      <Image
        src="/melamina/gallery/v4.jpg"
        alt="Muebles de melamina"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              +150 Planos Profesionales <span className="text-green-500">Muebles hechos en Melamina</span>
            </h2>
            <p className="text-xl text-secondary-foreground/80 leading-relaxed">
              Todo lo que necesitas para empezar a fabricar muebles con presición.
            </p>
          </div>

          {/* Imagen del pack */}
          <div className="relative max-w-sm mx-auto mb-10">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
            <div className="relative bg-card/5 backdrop-blur-[2px] rounded-2xl p-6 border-none">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
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
                <p className="text-2xl font-bold">+150</p>
                <p className="text-xs">Planos Profesionales</p>
              </div>
            </div>
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

          {/* Lista de beneficios */}
          <ul className="space-y-4 max-w-2xl mx-auto mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <p className="text-2xl font-bold text-primary">Descarga, fabrica y vende. Así de simple.</p>
          </div>
        </div>
      </div>

      {/* Difuminado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-secondary z-10" />
    </section>
  )
}
