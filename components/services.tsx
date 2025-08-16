"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Sparkles, Truck, ShoppingBag, Droplets, Shield } from "lucide-react"

const services = [
  {
    icon: Car,
    title: "Nettoyage Extérieur & Intérieur Standard",
    description: "Lavage complet de votre véhicule, extérieur et intérieur, avec produits professionnels",
    features: ["Lavage carrosserie", "Nettoyage jantes", "Aspirateur intérieur", "Nettoyage vitres"],
    price: "À partir de 25€",
  },
  {
    icon: Sparkles,
    title: "Soin Luxe Premium",
    description: "Service haut de gamme avec pressing des sièges, soin des cuirs et dressing des plastiques",
    features: ["Pressing sièges tissu/cuir", "Traitement cuirs", "Dressing plastiques", "Cire de protection"],
    price: "À partir de 45€",
  },
  {
    icon: Truck,
    title: "Service Récupération / Livraison",
    description: "Nous venons récupérer votre véhicule et vous le livrons propre à l'adresse de votre choix",
    features: ["Récupération à domicile", "Livraison incluse", "Service sur Lorient", "Flexibilité horaire"],
    price: "Supplément 10€",
  },
  {
    icon: ShoppingBag,
    title: "Parfums & Produits d'Entretien",
    description: "Large gamme de parfums d'ambiance et produits d'entretien pour votre véhicule",
    features: ["Parfums d'ambiance", "Produits de lavage", "Cires et polish", "Accessoires auto"],
    price: "Dès 5€",
  },
  {
    icon: Droplets,
    title: "Nettoyage Moteur",
    description: "Dégraissage et nettoyage complet du compartiment moteur",
    features: ["Dégraissage moteur", "Nettoyage compartiment", "Protection plastiques", "Finition brillante"],
    price: "À partir de 30€",
  },
  {
    icon: Shield,
    title: "Protection Céramique",
    description: "Application de protection céramique pour une brillance et protection longue durée",
    features: ["Protection 6 mois", "Brillance intense", "Facilite l'entretien", "Résistance UV"],
    price: "À partir de 80€",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Nos Services & Prestations</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des services professionnels adaptés à tous vos besoins, du nettoyage standard au soin premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="bg-black border-gray-800 hover:border-[#35C8F4] transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-[#35C8F4]/10 rounded-full w-fit group-hover:bg-[#35C8F4]/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-[#35C8F4]" />
                  </div>
                  <CardTitle className="text-white text-xl font-display font-semibold mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-400">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-[#35C8F4] rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
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
      </div>
    </section>
  )
}
