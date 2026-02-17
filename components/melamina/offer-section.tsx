"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckoutLink } from "@/components/checkout-link"
import { CreditCard, Zap } from "lucide-react"

const MELAMINA_CHECKOUT_URL = "https://wwhustle.com/cart/51797803401499:1"

export function OfferSection() {
  const [viewers, setViewers] = useState(0)
  const [spots, setSpots] = useState(0)
  const [timeLeft, setTimeLeft] = useState(9 * 60 * 1000) // 9 minutos en ms

  useEffect(() => {
    setViewers(Math.floor(Math.random() * 7) + 6)

    const viewerInterval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 5) - 2
        const newValue = prev + change
        return Math.max(4, Math.min(15, newValue))
      })
    }, Math.random() * 5000 + 5000)

    return () => clearInterval(viewerInterval)
  }, [])

  useEffect(() => {
    setSpots(Math.random() > 0.5 ? 4 : 3)

    const spotsTimeout = setTimeout(() => {
      setSpots(prev => Math.max(1, prev - 1))
    }, Math.random() * 30000 + 30000)

    return () => clearTimeout(spotsTimeout)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1000 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const minutes = String(Math.floor(timeLeft / 60000)).padStart(2, "0")
  const seconds = String(Math.floor((timeLeft % 60000) / 1000)).padStart(2, "0")

  return (
    <section id="oferta" className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Comenzá sin riesgos hoy mismo</h2>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary flex flex-col items-center">
                <span>🎁 BONUS DE REGALO 🎁</span>
                <span>Pack de Planos para Amoblamiento Doméstico en Melamina</span>
              </span>
            </div>

            <p className="text-sm text-muted-foreground mb-2">Tiempo restante</p>
            <div className="flex items-center justify-center gap-1 font-mono text-3xl font-bold mb-6">
              <span className="bg-destructive text-destructive-foreground px-3 py-2 rounded-md">{minutes}</span>
              <span className="text-destructive">:</span>
              <span className="bg-destructive text-destructive-foreground px-3 py-2 rounded-md">{seconds}</span>
            </div>
          </div>

          <div className="bg-card text-card-foreground rounded-3xl shadow-2xl overflow-hidden border-4 border-primary">
            <div className="p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <div className="border-glow-card relative text-center p-5 rounded-lg">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2 relative z-10" />
                  <p className="font-semibold text-sm mb-1 relative z-10">Acceso inmediato</p>
                  <p className="text-xs text-muted-foreground relative z-10">Descarga todos los planos en menos de 2 minutos</p>
                </div>
              </div>

              <div className="border-glow-card rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span>{viewers} personas viendo esta página</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    <span>Quedan {spots} cupos promocionales</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-lg text-muted-foreground line-through">$22.500</p>
                    <span className="px-2 py-0.5 bg-destructive text-destructive-foreground text-xs font-bold rounded-md">73% OFF</span>
                  </div>
                  <p className="text-5xl md:text-6xl font-bold text-primary inline-flex items-baseline gap-2">
                    $5.999 <span className="text-lg text-muted-foreground font-normal">ARS</span>
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    <CreditCard className="w-4 h-4" />
                    Hasta 3 cuotas sin interés de $1.999
                  </span>
                </div>

                <CheckoutLink checkoutUrl={MELAMINA_CHECKOUT_URL}>
                  <Button variant="default"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300 transform hover:scale-105 text-xs leading-7 border-0 px-0 py-8 mx-0 my-0 tracking-tight font-light animate-[breathe_3s_ease-in-out_infinite]"
                  >
                    DESCARGA LOS PLANOS AHORA
                  </Button>
                </CheckoutLink>

                <div className="flex justify-center mt-4">
                  <img src="/Safepayment.png" alt="Métodos de pago seguros" className="h-28 object-contain" />
                </div>

                <div className="flex justify-center mt-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    🏦 Transferencia bancaria ✅
                  </span>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Compra segura - Acceso de por vida
                </p>
                <p className="text-center text-xs text-green-500 font-medium mt-2">
                  Garantía de devolución de 7 días
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
