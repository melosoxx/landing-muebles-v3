"use client"

import type { ReactNode, MouseEvent } from "react"
import { MetaEvents } from "@/lib/meta-pixel"

const DEFAULT_CHECKOUT_URL = "https://wwhustle.com/cart/51514040746267:1"

interface CheckoutLinkProps {
  children: ReactNode
  className?: string
  checkoutUrl?: string
}

export function CheckoutLink({ children, className, checkoutUrl = DEFAULT_CHECKOUT_URL }: CheckoutLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    MetaEvents.initiateCheckout()
    window.open(checkoutUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <a href={checkoutUrl} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
