import { CheckoutLink } from "./checkout-link"

export function FloatingCTAButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <CheckoutLink>
        <div className="floating-cta-wrapper">
          <span className="floating-cta-text">Comenza ahora</span>
          <span className="floating-cta-btn">Descargar</span>
        </div>
      </CheckoutLink>
    </div>
  )
}
