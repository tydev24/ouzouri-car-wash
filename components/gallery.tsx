"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Star } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avant%201-HIqvw2jqZOKCXQH1usld6m6Tb0Kjin.webp",
    alt: "Avant nettoyage - Intérieur Fiat 500",
    category: "avant",
    title: "Avant - Intérieur Fiat 500",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apres%201-FlmiA6TKtSbL3V9RCDrqcjykHpiXDB.webp",
    alt: "Après nettoyage - Intérieur Fiat 500",
    category: "apres",
    title: "Après - Intérieur Fiat 500",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avant2-PGl17VNyvDfSvy8JiEOs5TLOUxQmxw.webp",
    alt: "Avant nettoyage - Intérieur Peugeot",
    category: "avant",
    title: "Avant - Intérieur Peugeot",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apres2-dCQBkUQD0BE1CHvy5DSSFz1Iku6Kw1.webp",
    alt: "Après nettoyage - Intérieur Peugeot",
    category: "apres",
    title: "Après - Intérieur Peugeot",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avant3-F50T8KipXuyZn8quvYwwlh5KGJvk0c.webp",
    alt: "Avant nettoyage - Sièges Citroën",
    category: "avant",
    title: "Avant - Sièges Citroën",
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apres3-C1d4ZgbUnY9fGplKQd4G2p8zVcl4PX.webp",
    alt: "Après nettoyage - Sièges Citroën",
    category: "apres",
    title: "Après - Sièges Citroën",
  },
  // Nouvelles images lampe voiture
  {
    id: 7,
    src: "/images/gallery/lampeavant1.jpg",
    alt: "Avant nettoyage - Lampe voiture",
    category: "avant",
    title: "Avant - Lampe voiture",
  },
  {
    id: 8,
    src: "/images/gallery/lampeapres1.jpg",
    alt: "Après nettoyage - Lampe voiture",
    category: "apres",
    title: "Après - Lampe voiture",
  },
]

export function Gallery() {
  // URL de la fiche Google (remplacez si besoin)
  const GOOGLE_BUSINESS_URL = "https://share.google/jDYriACOp8xTUiNEl"
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [filter, setFilter] = useState<"all" | "avant" | "apres">("all")

  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  return (
    <>
      <section id="galerie" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Galerie - Nos Réalisations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Découvrez la transformation de vos véhicules grâce à notre expertise
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
              className={
                filter === "all"
                  ? "bg-[#35C8F4] text-black"
                  : "border-[#35C8F4] text-[#35C8F4] hover:bg-[#35C8F4] hover:text-black"
              }
            >
              Toutes les photos
            </Button>
            <Button
              variant={filter === "avant" ? "default" : "outline"}
              onClick={() => setFilter("avant")}
              className={
                filter === "avant"
                  ? "bg-[#35C8F4] text-black"
                  : "border-[#35C8F4] text-[#35C8F4] hover:bg-[#35C8F4] hover:text-black"
              }
            >
              Avant
            </Button>
            <Button
              variant={filter === "apres" ? "default" : "outline"}
              onClick={() => setFilter("apres")}
              className={
                filter === "apres"
                  ? "bg-[#35C8F4] text-black"
                  : "border-[#35C8F4] text-[#35C8F4] hover:bg-[#35C8F4] hover:text-black"
              }
            >
              Après
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="bg-black border-gray-800 overflow-hidden hover:border-[#35C8F4] transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs font-medium mt-2 ${
                      image.category === "avant" ? "bg-red-500/20 text-red-300" : "bg-green-500/20 text-green-300"
                    }`}
                  >
                    {image.category === "avant" ? "Avant" : "Après"}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 border-gray-600 text-white hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-4 h-4" />
              </Button>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
        </section>

      {/* Google Reviews Section - Professional layout */}
      <section id="avis-google" className="py-20 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Title + CTAs */}
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">Ce que disent nos clients</h2>
              <p className="text-gray-300 mb-6 max-w-xl">
                Votre retour compte — aidez-nous à continuer d'améliorer nos services en laissant un avis sur notre fiche
                Google. Cela prend quelques secondes et fait une grande différence pour une petite entreprise locale.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#35C8F4] to-[#2bb5e0] text-black font-semibold py-3 px-5 rounded-lg shadow-md hover:opacity-95 transition"
                  aria-label="Voir la fiche Google Ouvrir dans un nouvel onglet"
                >
                  <Star className="w-5 h-5 text-black" />
                  Voir la fiche
                </a>

                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-gray-700 text-gray-300 py-3 px-5 rounded-lg hover:border-[#35C8F4] hover:text-[#35C8F4] transition"
                  aria-label="Laisser un avis Google Ouvrir dans un nouvel onglet"
                >
                  Laisser un avis
                </a>
              </div>

              <p className="text-gray-500 text-sm mt-4">Merci de soutenir Ouzouri Car'Wash — chaque avis compte.</p>
            </div>

            {/* Right: Neutral card pointing to Google (no duplicate CTAs) */}
            <div className="bg-gradient-to-br from-gray-900/60 to-black border border-gray-800 rounded-xl p-6 text-center">
              <div className="flex flex-col items-center justify-center">
                <Star className="w-10 h-10 text-[#35C8F4] mb-3" />
                <h3 className="text-white text-xl font-semibold mb-2">Consultez nos avis</h3>
                <p className="text-gray-400">Les avis de nos clients sont disponibles sur notre fiche Google. Merci de votre confiance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
