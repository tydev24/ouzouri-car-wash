import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Ouzouri Car'Wash - Nettoyage Automobile Premium à Lorient",
  description:
    "Service de nettoyage automobile professionnel à Lorient. Nettoyage intérieur/extérieur, soin luxe, service à domicile. Vente de parfums et produits d'entretien.",
  keywords: "lavage auto Lorient, nettoyage voiture, car wash, detailing auto, Ouzouri",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable} antialiased`}>
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  )
}
