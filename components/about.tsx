import { Card, CardContent } from "@/components/ui/card"
import { Clock, MapPin, Phone } from "lucide-react"

export function About() {
  return (
    <section id="a-propos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">À Propos - Notre Histoire</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <strong className="text-[#35C8F4]">Ouzouri Car'Wash</strong> propose des services de nettoyage
                automobile de qualité premium à Lorient, avec la possibilité de venir récupérer votre véhicule si vous
                ne pouvez pas vous déplacer.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Nous offrons également des produits d'entretien et parfums pour votre voiture, garantissant un service
                complet et professionnel pour tous vos besoins automobiles.
              </p>

              <div className="space-y-4">
                <h3 className="font-display font-semibold text-2xl text-white mb-4">Nos Engagements</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#35C8F4] rounded-full mr-3 flex-shrink-0" />
                    Produits professionnels et écologiques
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#35C8F4] rounded-full mr-3 flex-shrink-0" />
                    Service personnalisé et soigné
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#35C8F4] rounded-full mr-3 flex-shrink-0" />
                    Respect des délais et satisfaction garantie
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-[#35C8F4] rounded-full mr-3 flex-shrink-0" />
                    Tarifs transparents et compétitifs
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#35C8F4]/10 rounded-full">
                      <Clock className="w-6 h-6 text-[#35C8F4]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Horaires d'ouverture</h4>
                      <div className="space-y-1 text-gray-300">
                        <p>
                          <strong>Lundi – Vendredi :</strong> 9h-12h / 13h30-18h
                        </p>
                        <p>
                          <strong>Samedi :</strong> 9h-14h
                        </p>
                        <p>
                          <strong>Dimanche :</strong> Fermé
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#35C8F4]/10 rounded-full">
                      <MapPin className="w-6 h-6 text-[#35C8F4]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Notre Adresse</h4>
                      <p className="text-gray-300">
                        9 rue Jules Védrines
                        <br />
                        56100 Lorient
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#35C8F4]/10 rounded-full">
                      <Phone className="w-6 h-6 text-[#35C8F4]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Contact</h4>
                      <a
                        href="tel:0781633288"
                        className="text-[#35C8F4] hover:text-[#2bb5e0] transition-colors font-medium"
                      >
                        07 81 63 32 88
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
