"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Necesito herramientas costosas para empezar?",
    answer:
      "No. La mayoría de los diseños están pensados para fabricarse con herramientas básicas de carpintería (sierra circular, taladro y fresadora estándar). No necesitas equipamiento industrial ni inversiones grandes para comenzar a producir.",
  },
  {
    question: "¿Necesito experiencia previa en carpintería?",
    answer:
      "No necesitas ser un experto, pero sí debes tener conocimientos básicos de carpintería. Los planos incluyen todas las medidas y especificaciones, pero asumimos que sabes cortar y trabajar con melamina.",
  },
  {
    question: "¿Puedo ver los planos en mi celular o tablet?",
    answer:
      "Sí, completamente. Los planos están en formato PDF de alta calidad que puedes abrir en cualquier dispositivo. Muchos de nuestros clientes los usan directamente en tablets en su taller.",
  },
  {
    question: "¿Tendré acceso a los planos después de la compra?",
    answer:
      "Sí, el acceso es instantáneo y de por vida. Una vez que compras, puedes descargar todos los planos inmediatamente y volverlos a descargar cuando quieras. Además, recibirás todas las actualizaciones futuras sin costo adicional.",
  },
  {
    question: "¿Qué formato tienen los planos?",
    answer:
      "Todos los planos están en formato PDF profesional, con medidas en centímetros, vistas múltiples, especificaciones técnicas detalladas y listas completas de materiales. Listos para imprimir o ver en pantalla.",
  },
  {
    question: "¿Puedo vender los muebles que fabrique?",
    answer:
      "¡Por supuesto! Ese es precisamente el objetivo. Puedes fabricar y vender todos los muebles que quieras usando estos planos. Lo único que no puedes hacer es revender o compartir los planos mismos.",
  },
  {
    question: "¿A cuánto se pueden vender los muebles?",
    answer:
      "Los muebles de melamina tienen excelente valor de mercado. Varían según su complejidad y tamaño, oscilando entre $60.000 y $200.000 ARS. Te invito a corroborarlo vos mismo en tu plataforma preferida buscando \"muebles de melamina\".",
  },
]

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string>("")

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash === "faq-precios") {
        setOpenItem("item-6")
      }
    }

    handleHashChange()

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <section id="faq" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Preguntas frecuentes</h2>
            <p className="text-xl text-muted-foreground">Resuelve todas tus dudas antes de comenzar</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4" value={openItem} onValueChange={setOpenItem}>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                id={index === 6 ? "faq-precios" : undefined}
                className="bg-card border-2 border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
