"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckoutLink } from "@/components/checkout-link"
import { CreditCard } from "lucide-react"

const MELAMINA_CHECKOUT_URL = "https://wwhustle.com/cart/51797803401499:1"

const valueItems = [
  { icon: "📦", title: "+150 Planos listos para fabricar", price: "$10.000" },
  { icon: "📐", title: "Guía de cortes y optimización de material", price: "$8.000" },
  { icon: "📋", title: "Pack de Planos para Amoblamiento Doméstico", price: "$7.000" },
  { icon: "🔧", title: "Manual de herramientas y técnicas profesionales", price: "$5.000" },
]

export function OfferSection() {
  const [viewers, setViewers] = useState(0)
  const [timeLeft, setTimeLeft] = useState(9 * 60 * 1000)

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
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1000 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const minutes = String(Math.floor(timeLeft / 60000)).padStart(2, "0")
  const seconds = String(Math.floor((timeLeft % 60000) / 1000)).padStart(2, "0")

  return (
    <section id="oferta" className="py-12 md:py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
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
        <div className="max-w-lg mx-auto">

          {/* Heading */}
          <h2 className="text-center text-xl md:text-2xl font-extrabold text-primary tracking-wide mb-4">
            ESTA OFERTA EXPIRA EN
          </h2>

          {/* Countdown timer */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex flex-col items-center">
              <div className="bg-secondary border-2 border-primary/70 rounded-lg px-5 py-3 min-w-[72px] text-center">
                <span className="text-3xl md:text-4xl font-bold font-mono text-primary">{minutes}</span>
              </div>
              <span className="text-[10px] text-primary/70 font-semibold mt-1 tracking-widest">MIN</span>
            </div>
            <span className="text-3xl md:text-4xl font-bold text-primary -mt-4">:</span>
            <div className="flex flex-col items-center">
              <div className="bg-secondary border-2 border-primary/70 rounded-lg px-5 py-3 min-w-[72px] text-center">
                <span className="text-3xl md:text-4xl font-bold font-mono text-primary">{seconds}</span>
              </div>
              <span className="text-[10px] text-primary/70 font-semibold mt-1 tracking-widest">SEG</span>
            </div>
          </div>

          {/* Main card */}
          <div className="border-glow-card bg-card text-card-foreground rounded-2xl p-5 md:p-8">

            {/* Viewers indicator */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span>{viewers} personas viendo esta página</span>
            </div>

            {/* Value perception items */}
            <div className="space-y-2 mb-5">
              {valueItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-secondary rounded-xl px-4 py-3 border border-secondary-foreground/10"
                >
                  <span className="text-lg w-8 h-8 flex items-center justify-center bg-green-900 rounded-full shrink-0">
                    {item.icon}
                  </span>
                  <span className="flex-1 text-sm font-medium text-secondary-foreground">{item.title}</span>
                  <span className="text-sm font-semibold text-secondary-foreground/70 line-through">{item.price}</span>
                </div>
              ))}
            </div>

            {/* Valor real */}
            <div className="text-center mb-4">
              <span className="text-lg text-muted-foreground">Valor real </span>
              <span className="text-2xl text-muted-foreground line-through font-bold">$30.000</span>
            </div>

            {/* Separator */}
            <div className="border-t border-green-900 mb-4"></div>

            {/* Green banner */}
            <div className="flex justify-center mb-2">
              <span className="inline-block bg-primary text-primary-foreground text-sm font-bold px-5 py-1.5 rounded-full tracking-wide">
                LLEVALO HOY POR
              </span>
            </div>

            {/* Final price */}
            <div className="text-center mb-3">
              <p className="text-5xl md:text-6xl font-bold text-primary inline-flex items-baseline gap-2">
                $9.500 <span className="text-lg text-muted-foreground font-normal">ARS</span>
              </p>
            </div>

            {/* Installments */}
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <CreditCard className="w-4 h-4" />
                Hasta 3 cuotas sin interés de $3.150
              </span>
            </div>

            {/* CTA Button */}
            <CheckoutLink checkoutUrl={MELAMINA_CHECKOUT_URL}>
              <Button
                variant="default"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300 transform hover:scale-105 text-xs leading-7 border-0 px-0 py-8 mx-0 my-0 tracking-tight font-light animate-[breathe_3s_ease-in-out_infinite]"
              >
                DESCARGAR AHORA
              </Button>
            </CheckoutLink>

            {/* Payment / trust */}
            <div className="flex justify-center mt-4">
              <img src="/Safepayment.png" alt="Métodos de pago seguros" className="h-24 object-contain" />
            </div>

            <div className="flex justify-center mt-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                🏦 Transferencia bancaria ✅
              </span>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-3">
              Compra segura - Acceso de por vida
            </p>
            <p className="text-center text-xs text-green-500 font-medium mt-2">
              Garantía de devolución de 7 días
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
