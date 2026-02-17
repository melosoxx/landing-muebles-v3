"use client"

import Image from "next/image"
import { useEffect, useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"

const testimonios = [
  { imagen: "/gallery/Testi 1.jpg", alt: "Testimonio cliente - mueble melamina" },
  { imagen: "/gallery/Testi 2.jpg", alt: "Testimonio cliente - placard" },
  { imagen: "/gallery/Testi 3.png", alt: "Testimonio cliente - bajo mesada" },
  { imagen: "/gallery/Testi 4.jpg", alt: "Testimonio cliente - escritorio" }
]

export function ProofSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  // Auto-play cada 2.5 segundos
  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 2500)
    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                Testimonios
              </p>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
              Que dicen los que ya están fabricando y vendiendo con nuestros planos
            </p>
          </div>

          {/* Carrusel con embla */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonios.map((t, i) => (
                <div
                  key={i}
                  className="flex-[0_0_100%] min-w-0 flex justify-center"
                >
                  <div className="w-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                    <Image
                      src={t.imagen}
                      alt={t.alt}
                      width={288}
                      height={576}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonios.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === selectedIndex
                    ? "bg-primary"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Ir al testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
