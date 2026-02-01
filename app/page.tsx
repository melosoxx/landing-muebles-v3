import { HeroSection } from "@/components/hero-section"
import { SolutionSection } from "@/components/solution-section"
import { PlansPreviewSection } from "@/components/plans-preview-section"
import { ValueSection } from "@/components/value-section"
// import { ProofSection } from "@/components/proof-section" // Temporalmente desactivado
import { OfferSection } from "@/components/offer-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SolutionSection />
      <PlansPreviewSection />
      <ValueSection />
      {/* <ProofSection /> */}
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  )
}
