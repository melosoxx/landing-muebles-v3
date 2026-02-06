"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed left-8 z-50
        w-8 h-8
        rounded
        bg-[rgba(29,29,31,0.7)]
        backdrop-blur-[20px] backdrop-saturate-[180%]
        [-webkit-backdrop-filter:saturate(180%)_blur(20px)]
        flex items-center justify-center
        overflow-hidden
        transition-all duration-400
        hover:-translate-y-1
        ${isVisible ? "bottom-12" : "-bottom-1/2"}
        max-lg:left-4
      `}
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5 text-white" />
    </button>
  )
}
