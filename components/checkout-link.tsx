"use client"

import type { ReactNode, MouseEvent } from "react"
import { MetaEvents } from "@/lib/meta-pixel"

const CHECKOUT_URL = "https://wwhustle.com/cart/51514040746267:1"

interface CheckoutLinkProps {
  children: ReactNode
  className?: string
}

export function CheckoutLink({ children, className }: CheckoutLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    MetaEvents.initiateCheckout()
    window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer")
  }

  return (
    <a href={CHECKOUT_URL} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
