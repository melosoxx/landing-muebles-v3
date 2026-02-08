import { HeroSection } from "@/components/hero-section"
import { SolutionSection } from "@/components/solution-section"

import { ProofSection } from "@/components/proof-section"
import { OfferSection } from "@/components/offer-section"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { FloatingCTAButton } from "@/components/floating-cta-button"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Page() {
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
