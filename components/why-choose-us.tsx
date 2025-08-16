import { Card, CardContent } from "@/components/ui/card"
import { Award, Clock, Heart, Truck } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Nettoyage Premium",
    description: "Produits professionnels et techniques de pointe pour un résultat impeccable",
  },
  {
    icon: Truck,
    title: "Service à Domicile",
    description: "Récupération et livraison de votre véhicule pour votre confort",
  },
  {
    icon: Heart,
    title: "Fidélité Client",
    description: "Programme de fidélité et tarifs préférentiels pour nos clients réguliers",
  },
  {
    icon: Clock,
    title: "Flexibilité Horaire",
    description: "Horaires adaptés à votre emploi du temps, service rapide et efficace",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">Pourquoi Nous Choisir ?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            L'excellence du service et la satisfaction client au cœur de notre métier
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 text-center hover:border-[#35C8F4] transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="mx-auto mb-6 p-4 bg-[#35C8F4]/10 rounded-full w-fit group-hover:bg-[#35C8F4]/20 transition-colors">
                    <IconComponent className="w-10 h-10 text-[#35C8F4]" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mb-4">{reason.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
