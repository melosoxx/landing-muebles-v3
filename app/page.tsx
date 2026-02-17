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
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-6">
            <p className="text-sm font-semibold text-primary">FABRICACIÓN PROFESIONAL</p>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            +300 Planos<br />
            <span className="text-primary">Detallados</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground/70 max-w-2xl mx-auto">
            Elegí tu pack de planos profesionales y empezá tu negocio hoy
          </p>
        </div>

        {/* Split-screen cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl w-full">
          {/* Industriales Card */}
          <Link href="/industriales" className="group">
            <div className="relative bg-card/5 backdrop-blur-sm rounded-2xl border border-secondary-foreground/10 p-6 md:p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:scale-[1.02]">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-6 bg-secondary-foreground/5">
                <Image
                  src="/plano-solucion.png"
                  alt="Planos Muebles Industriales"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="inline-block px-3 py-1 bg-primary/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary">+300 Planos</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Muebles Industriales
              </h2>
              <p className="text-secondary-foreground/60 mb-6 leading-relaxed">
                Planos de muebles de hierro y madera. Escritorios, mesas, estantes, racks y más.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                <span>Ver Pack Industriales</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* Melamina Card */}
          <Link href="/melamina" className="group">
            <div className="relative bg-card/5 backdrop-blur-sm rounded-2xl border border-secondary-foreground/10 p-6 md:p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(34,197,94,0.15)] hover:scale-[1.02]">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-6 bg-secondary-foreground/5">
                <Image
                  src="/melamina/plans/refe1.png"
                  alt="Planos Muebles de Melamina"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="inline-block px-3 py-1 bg-primary/20 rounded-full mb-4">
                <span className="text-sm font-semibold text-primary">+150 Planos</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Muebles de Melamina
              </h2>
              <p className="text-secondary-foreground/60 mb-6 leading-relaxed">
                Planos de muebles de melamina. Alacenas, bajo mesadas, placards, escritorios y más.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
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
