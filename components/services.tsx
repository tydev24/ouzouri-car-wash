"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Sparkles, Truck, ShoppingBag, Droplets, Shield } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Intérieur Simple+",
    description: "Vitres – Plastiques – Aspiration moquettes et tapis – Rénovation",
    features: ["Durée : 50 minutes"],
    price: "70€",
  },
  {
    icon: Sparkles,
    title: "Sièges et Plafond",
    description: "Vitres – Plastiques – Aspiration moquettes et tapis – Rénovation des 5 sièges",
    features: ["Durée : 1h30"],
    price: "90€",
  },
  {
    icon: Truck,
    title: "Express (Extérieur complet)",
    description: "Lavage carrosserie – Séchage – Jantes – Vitres – Plastiques – Aspiration moquettes et tapis",
    features: ["Durée : 45 minutes"],
    price: "30€",
  },
  {
    icon: ShoppingBag,
    title: "Luxury (Extérieur complet + Intérieur)",
    description: "Lavage carrosserie – Séchage + cire – Jantes – Vitres – Plastiques – Aspiration moquettes et tapis – Rénovation des 5 sièges – Désodorisant à la vapeur",
    features: ["Durée : 2h30"],
    price: "110€",
  },
  {
    icon: Droplets,
    title: "Nettoyage de canapé",
    description: "Service à domicile selon le nombre de places assises",
    features: [],
    price: "À partir de 80€",
  },
  {
    icon: Shield,
    title: "Nettoyage de tapis",
    description: "Service à domicile selon la dimension du tapis",
    features: [],
    price: "À partir de 50€",
  },
]

const parfums = [
  {
    name: "Rp Paris Musc Neige",
    image: "/images/gallery/Rp_paris_musc_neige.png",
  },
  {
    name: "Bahia Cris Montaigne Paris",
    image: "/images/gallery/bahia_cris_montaigne_paris.png",
  },
  {
    name: "El Nabil Musc Anass",
    image: "/images/gallery/Nabil_musc_anass.png",
  },
  {
    name: "Collection Prive JAD*OR",
    image: "/images/gallery/collection_prive_JAD OR.png",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* --- Section Services --- */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Nos Services & Prestations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des services professionnels adaptés à tous vos besoins, du nettoyage standard au soin premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="bg-black border-gray-800 hover:border-[#35C8F4] transition-all duration-300 group h-full flex flex-col justify-between transform hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-[#35C8F4]/10 rounded-full w-fit group-hover:bg-[#35C8F4]/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-[#35C8F4]" />
                  </div>
                  <CardTitle className="text-white text-xl font-display font-semibold mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-grow">
                  {service.features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-[#35C8F4] rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[#35C8F4] font-bold text-lg">{service.price}</span>
                    <Button
                      size="sm"
                      className="bg-[#35C8F4] hover:bg-[#2bb5e0] text-black font-semibold"
                      onClick={() => {
                        const element = document.getElementById("contact")
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      Réserver
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <p className="mt-8 text-center text-[#35C8F4] font-semibold">
          ⚠️ Suppléments sur devis pour les véhicules très sales (moisissures, poils d’animaux).
        </p>

        {/* --- Section Parfums --- */}
        <div className="text-center mt-32 mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Parfums des véhicules</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choisissez votre parfum préféré pour un intérieur de voiture toujours agréable
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {parfums.map((parfum, index) => (
            <div
              key={index}
              className="bg-black p-4 rounded-xl flex flex-col items-center justify-center transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >
              <img
                src={parfum.image}
                alt={parfum.name}
                className="w-32 h-32 object-contain mb-4"
              />
              <span className="text-white font-semibold text-center">{parfum.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
