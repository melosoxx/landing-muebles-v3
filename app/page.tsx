import { HeroSection } from "@/components/hero-section"
import { SolutionSection } from "@/components/solution-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { ValueSection } from "@/components/value-section"
import { ProofSection } from "@/components/proof-section"
import { OfferSection } from "@/components/offer-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SolutionSection />
      <BeforeAfterSection />
      <ValueSection />
      <ProofSection />
      <OfferSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  )
}
