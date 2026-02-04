declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
  }
}

function getCookie(name: string): string {
  if (typeof document === "undefined") return ""
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(";").shift() || ""
  return ""
}

interface TrackEventOptions {
  eventName: string
  customData?: Record<string, unknown>
  userData?: {
    email?: string
    phone?: string
  }
}

export async function trackEvent({ eventName, customData, userData }: TrackEventOptions) {
  // Track en el navegador (pixel normal)
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, customData)
  }

  // Track en el servidor (Conversions API)
  try {
    await fetch("/api/meta-event", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName,
        eventData: {
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
          customData,
        },
        userData: {
          fbc: getCookie("_fbc"),
          fbp: getCookie("_fbp"),
          ...userData,
        },
      }),
    })
  } catch (error) {
    console.error("Error tracking event:", error)
  }
}

// Eventos predefinidos
export const MetaEvents = {
  initiateCheckout: (value?: number, currency = "USD") =>
    trackEvent({
      eventName: "InitiateCheckout",
      customData: { value, currency },
    }),

  purchase: (value: number, currency = "USD") =>
    trackEvent({
      eventName: "Purchase",
      customData: { value, currency },
    }),

  addToCart: (value?: number, currency = "USD") =>
    trackEvent({
      eventName: "AddToCart",
      customData: { value, currency },
    }),

  viewContent: (contentName?: string) =>
    trackEvent({
      eventName: "ViewContent",
      customData: { content_name: contentName },
    }),
}
