import { HeroSection } from "@/components/hero-section"
import { SolutionSection } from "@/components/solution-section"
import { PlansPreviewSection } from "@/components/plans-preview-section"
import { ValueSection } from "@/components/value-section"
import { ProofSection } from "@/components/proof-section"
import { OfferSection } from "@/components/offer-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { FloatingCTAButton } from "@/components/floating-cta-button"

export default function Page() {
  return (
    <main className="min-h-screen">
      <SolutionSection />
      <PlansPreviewSection />
      <ValueSection />
      <OfferSection />
      <ProofSection />
      <GuaranteeSection />
      <FAQSection />
      <HeroSection />
      <FinalCTASection />
      <FloatingCTAButton />
    </main>
  )
}
