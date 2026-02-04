import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

const PIXEL_ID = process.env.META_PIXEL_ID
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN

function hashData(data: string): string {
  return crypto.createHash("sha256").update(data.toLowerCase().trim()).digest("hex")
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { eventName, eventData, userData } = body

    const event = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      event_source_url: eventData?.sourceUrl || "",
      user_data: {
        client_ip_address: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "",
        client_user_agent: request.headers.get("user-agent") || "",
        fbc: userData?.fbc || "",
        fbp: userData?.fbp || "",
        ...(userData?.email && { em: hashData(userData.email) }),
        ...(userData?.phone && { ph: hashData(userData.phone) }),
      },
      custom_data: eventData?.customData || {},
    }

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [event],
        }),
      }
    )

    const result = await response.json()

    if (!response.ok) {
      console.error("Meta API Error:", result)
      return NextResponse.json({ error: result }, { status: 400 })
    }

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error("Error sending event to Meta:", error)
    return NextResponse.json({ error: "Failed to send event" }, { status: 500 })
  }
}
