"use client"

import { Button } from "@/components/ui/button"
import { CheckoutLink } from "@/components/checkout-link"
import { ArrowRight, Clock } from "lucide-react"

const MELAMINA_CHECKOUT_URL = "https://wwhustle.com/cart/51797803401499:1"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-secondary text-secondary-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full animate-pulse">
            <Clock className="w-4 h-4 text-primary" />
            <p className="text-sm font-semibold text-primary">La oferta no durará para siempre</p>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Comenzá tu negocio de muebles de melamina hoy
          </h1>

          <p className="text-xl md:text-2xl text-secondary-foreground/80 text-balance max-w-2xl mx-auto leading-relaxed">
            Descargá el pack completo de más de 150 planos profesionales y empezá a fabricar muebles de melamina de alta calidad que el mercado está esperando
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <CheckoutLink checkoutUrl={MELAMINA_CHECKOUT_URL}>
              <Button
                size="lg"
                className="px-12 py-8 h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-xs"
              >
                DESCARGAR ACCESO INMEDIATO
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </CheckoutLink>
            <p className="text-xs text-secondary-foreground/60">Compra segura - Acceso de por vida</p>
          </div>

          <div className="pt-8 space-y-2">
            <p className="text-sm text-secondary-foreground/60">Acceso instantáneo después de la compra</p>
            <p className="text-sm text-secondary-foreground/60">Garantía de devolución de dinero por 7 días</p>
          </div>
        </div>
      </div>
    </section>
  )
}
