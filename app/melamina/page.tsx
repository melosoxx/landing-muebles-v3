import { HeroSection } from "@/components/melamina/hero-section"
import { SolutionSection } from "@/components/melamina/solution-section"
import { ProofSection } from "@/components/melamina/proof-section"
import { OfferSection } from "@/components/melamina/offer-section"
import { GuaranteeSection } from "@/components/melamina/guarantee-section"
import { FAQSection } from "@/components/melamina/faq-section"
import { FinalCTASection } from "@/components/melamina/final-cta-section"
import { FloatingCTAButton } from "@/components/floating-cta-button"
import { ScrollToTop } from "@/components/scroll-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pack de +150 Planos Profesionales de Muebles de Melamina | Fabricá y Vendé",
  description:
    "Descargá más de 150 planos técnicos profesionales para fabricar muebles de melamina de alta demanda. Medidas exactas, especificaciones completas y listas de materiales.",
  keywords: "planos melamina, planos muebles melamina, planos carpintería, diseños muebles melamina, negocio carpintería",
  openGraph: {
    title: "Pack de +150 Planos Profesionales de Muebles de Melamina",
    description: "Fabricá y vendé muebles de melamina de alta calidad con planos profesionales listos para usar.",
    type: "website",
  },
}

export default function MelaminaPage() {
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
