import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Planos Profesionales de Muebles | Industriales y Melamina",
  description: "Elegí tu pack de planos profesionales: Muebles Industriales o Muebles de Melamina. Planos listos para fabricar y vender.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-secondary text-secondary-foreground">
      {/* Background image */}
      <div className="fixed inset-0 pointer-events-none">
        <Image
          src="/background mf.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            <span className="text-orange-500">+300 Planos</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto whitespace-nowrap">Elegí tu pack de planos profesionales y empezá tu negocio hoy</p>
        </div>

        {/* Split-screen cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl w-full">
          {/* Industriales Card */}
          <Link href="/industriales" className="group">
            <div className="relative bg-card/5 backdrop-blur-sm rounded-2xl border border-secondary-foreground/10 p-6 md:p-8 h-full transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] hover:scale-[1.02]">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-6 bg-secondary-foreground/5">
                <Image
                  src="/plano-solucion.png"
                  alt="Planos Muebles Industriales"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="inline-block px-3 py-1 bg-orange-500/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-orange-500">+300 Planos</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Muebles Industriales
              </h2>
              <p className="text-secondary-foreground/60 mb-6 leading-relaxed">
                Planos de muebles de hierro y madera. Escritorios, mesas, estantes, racks y más.
              </p>
              <div className="flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all">
                <span>Ver Pack Industriales</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* Melamina Card */}
          <Link href="/melamina" className="group">
            <div className="relative bg-card/5 backdrop-blur-sm rounded-2xl border border-secondary-foreground/10 p-6 md:p-8 h-full transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] hover:scale-[1.02]">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-6 bg-secondary-foreground/5">
                <Image
                  src="/melamina/plans/refe1.png"
                  alt="Planos Muebles de Melamina"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="inline-block px-3 py-1 bg-orange-500/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-orange-500">+150 Planos</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Muebles de Melamina
              </h2>
              <p className="text-secondary-foreground/60 mb-6 leading-relaxed">
                Planos de muebles de melamina. Alacenas, bajo mesadas, placards, escritorios y más.
              </p>
              <div className="flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all">
                <span>Ver Pack Melamina</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-sm text-secondary-foreground/40 mt-12">
          Compra segura · Acceso de por vida · Garantía de 7 días
        </p>
      </div>
    </main>
  )
}
