"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const plans = [
  { src: "/plans/rack-tv.png", alt: "Plano de Rack para TV" },
  { src: "/plans/mesa-desayunador.png", alt: "Plano de Mesa Desayunador" },
  { src: "/plans/mesa-alta-banquetas.png", alt: "Plano de Mesa Alta con Banquetas" },
  { src: "/plans/estante-malla.png", alt: "Plano de Estante con Malla Metálica" },
]

export function PlansPreviewSection() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const startTimer = () => {
      timeoutRef.current = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % plans.length)
      }, 2000)
    }

    startTimer()

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [current])

  return (
    <section id="planes" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
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

          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border-2 border-border">
            <div className="relative aspect-4/3">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={plan.src}
                    alt={plan.alt}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-primary scale-110"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Ver plano ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              Y más de <span className="font-bold text-primary">+300 diseños</span> esperándote
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
