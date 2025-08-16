import { Car, Phone, MapPin, Clock } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
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
                <h3 className="font-display font-bold text-xl text-white">OUZOURI</h3>
                <p className="text-[#35C8F4] text-sm font-medium">CAR'WASH</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Votre spécialiste du nettoyage automobile à Lorient. Service premium avec récupération et livraison de
              votre véhicule.
            </p>
            <div className="flex items-center space-x-2 text-[#35C8F4]">
              <Car className="w-5 h-5" />
              <span className="font-medium">Nettoyage Premium • Service à Domicile</span>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#35C8F4] flex-shrink-0" />
                <a href="tel:0781633288" className="text-gray-300 hover:text-[#35C8F4] transition-colors">
                  07 81 63 32 88
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#35C8F4] flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p>9 rue Jules Védrines</p>
                  <p>56100 Lorient</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="font-display font-semibold text-white text-lg mb-4">Horaires</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#35C8F4] flex-shrink-0 mt-1" />
                <div className="text-gray-300 text-sm">
                  <p>
                    <strong>Lun-Ven:</strong> 9h-12h / 13h30-18h
                  </p>
                  <p>
                    <strong>Samedi:</strong> 9h-14h
                  </p>
                  <p>
                    <strong>Dimanche:</strong> Fermé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ouzouri Car'Wash. Tous droits réservés. | Nettoyage automobile professionnel à Lorient
          </p>
        </div>
      </div>
    </footer>
  )
}
