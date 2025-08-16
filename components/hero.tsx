"use client"

import { Button } from "@/components/ui/button"
import { Car, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/backgrouns%20site.jpg-51kuq8YYGOT94vKYPKxKSwhOMW7qbX.jpeg"
          alt="Car wash background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-4 mb-6">
              <Car className="w-12 h-12 text-[#35C8F4]" />
              <Sparkles className="w-8 h-8 text-[#35C8F4]" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            OUZOURI CAR'WASH
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-[#35C8F4] mb-4 font-medium">🚘🫧 Votre pro du nettoyage sur Lorient</p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Service de nettoyage automobile premium avec possibilité de récupération et livraison de votre véhicule
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#35C8F4] hover:bg-[#2bb5e0] text-black font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Réservez maintenant
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#35C8F4] text-[#35C8F4] hover:bg-[#35C8F4] hover:text-black font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-300 bg-transparent"
              onClick={() => {
                const element = document.getElementById("services")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Découvrir nos services
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-300">
            <div className="flex items-center space-x-2">
              <span className="text-[#35C8F4]">📍</span>
              <span>9 rue Jules Védrines, 56100 Lorient</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#35C8F4]">📞</span>
              <a href="tel:0781633288" className="hover:text-[#35C8F4] transition-colors">
                07 81 63 32 88
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#35C8F4] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#35C8F4] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
