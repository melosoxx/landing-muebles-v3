"use client"

import type { ReactNode, MouseEvent } from "react"
import { MetaEvents } from "@/lib/meta-pixel"

interface ScrollButtonProps {
  targetId: string
  children: ReactNode
  className?: string
  trackingEventName?: string
}

export function ScrollButton({
  targetId,
  children,
  className,
  trackingEventName
}: ScrollButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (trackingEventName) {
      MetaEvents.viewContent(trackingEventName)
    }

    // Actualizar el hash de la URL
    window.history.pushState(null, '', `#${targetId}`)

    // Disparar evento para que otros componentes detecten el cambio
    window.dispatchEvent(new HashChangeEvent('hashchange'))

    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
