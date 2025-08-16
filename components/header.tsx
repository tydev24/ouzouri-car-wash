"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12 bg-black rounded-lg p-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20ouz.jpg-fv6S6jSQfNubpdbXRiSDFoRz1BSdrd.jpeg"
                alt="Ouzouri Car'Wash Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-white">OUZOURI</h1>
              <p className="text-[#35C8F4] text-sm font-medium">CAR'WASH</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-white hover:text-[#35C8F4] transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-[#35C8F4] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("galerie")}
              className="text-white hover:text-[#35C8F4] transition-colors"
            >
              Galerie
            </button>
            <button
              onClick={() => scrollToSection("a-propos")}
              className="text-white hover:text-[#35C8F4] transition-colors"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-[#35C8F4] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:0781633288"
              className="flex items-center space-x-2 text-white hover:text-[#35C8F4] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">07 81 63 32 88</span>
            </a>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#35C8F4] hover:bg-[#2bb5e0] text-black font-semibold"
            >
              Réservez maintenant
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-left text-white hover:text-[#35C8F4] transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-white hover:text-[#35C8F4] transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("galerie")}
                className="text-left text-white hover:text-[#35C8F4] transition-colors"
              >
                Galerie
              </button>
              <button
                onClick={() => scrollToSection("a-propos")}
                className="text-left text-white hover:text-[#35C8F4] transition-colors"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-white hover:text-[#35C8F4] transition-colors"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-gray-800">
                <a
                  href="tel:0781633288"
                  className="flex items-center space-x-2 text-white hover:text-[#35C8F4] transition-colors mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>07 81 63 32 88</span>
                </a>
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-[#35C8F4] hover:bg-[#2bb5e0] text-black font-semibold"
                >
                  Réservez maintenant
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
