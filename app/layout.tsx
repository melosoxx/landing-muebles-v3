import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pack de +300 Planos Profesionales de Muebles Industriales | Fabricá y Vendé",
  description:
    "Descargá más de 300 planos técnicos profesionales para fabricar muebles industriales de alta demanda. Medidas exactas, especificaciones completas y listas de materiales. Empezá tu negocio hoy.",
  keywords: "planos herrería, planos muebles industriales, planos carpintería, diseños muebles metal, negocio herrería",
  openGraph: {
    title: "Pack de +300 Planos Profesionales de Muebles Industriales",
    description: "Fabricá y vendé muebles industriales de alta calidad con planos profesionales listos para usar.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
