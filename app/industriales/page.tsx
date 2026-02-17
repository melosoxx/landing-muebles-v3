import { HeroSection } from "@/components/industriales/hero-section"
import { SolutionSection } from "@/components/industriales/solution-section"
import { ProofSection } from "@/components/industriales/proof-section"
import { OfferSection } from "@/components/industriales/offer-section"
import { GuaranteeSection } from "@/components/industriales/guarantee-section"
import { FAQSection } from "@/components/industriales/faq-section"
import { FinalCTASection } from "@/components/industriales/final-cta-section"
import { FloatingCTAButton } from "@/components/floating-cta-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pack de +300 Planos Profesionales de Muebles Industriales | Fabricá y Vendé",
  description:
    "Descargá más de 300 planos técnicos profesionales para fabricar muebles industriales de alta demanda. Medidas exactas, especificaciones completas y listas de materiales. Empezá tu negocio hoy.",
  keywords: "planos herrería, planos muebles industriales, planos carpintería, diseños muebles metal, negocio herrería",
  openGraph: {
    title: "Pack de +300 Planos Profesionales de Muebles Industriales",
    description: "Fabricá y vendé muebles industriales de alta calidad con planos profesionales listos para usar.",
    type: "website",
  },
}

export default function IndustrialesPage() {
  return (
    <main className="min-h-screen">
      <SolutionSection />
      <ProofSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <HeroSection />
      <FinalCTASection />
      <FloatingCTAButton />
      <ScrollToTop />
    </main>
  )
}
