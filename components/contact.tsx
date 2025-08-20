"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Phone, MapPin, Clock, Send, Star, Mail  } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    date: "",
    heure: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const message = `Bonjour, je souhaite réserver un service chez Ouzouri Car'Wash:
    
Nom: ${formData.nom}
Email: ${formData.email}
Téléphone: ${formData.telephone}
Service: ${formData.service}
Date souhaitée: ${formData.date}
Heure souhaitée: ${formData.heure}
Message: ${formData.message}`

    const whatsappUrl = `https://wa.me/330781633288?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(53,200,244,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(53,200,244,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#35C8F4]/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-[#35C8F4]" />
            <span className="text-[#35C8F4] font-medium text-sm uppercase tracking-wider">Réservation Facile</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight">
            Réservation & <span className="text-[#35C8F4]">Contact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Réservez votre créneau en quelques clics ou contactez-nous pour plus d'informations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-800/50 shadow-2xl backdrop-blur-sm hover:shadow-[#35C8F4]/10 hover:shadow-2xl transition-all duration-500">
            <CardHeader className="pb-8">
              <CardTitle className="text-white text-3xl font-display flex items-center gap-3">
                <div className="p-2 bg-[#35C8F4]/10 rounded-lg">
                  <Send className="w-6 h-6 text-[#35C8F4]" />
                </div>
                Formulaire de Réservation
              </CardTitle>
              <p className="text-gray-400 mt-2">Remplissez le formulaire ci-dessous pour réserver votre service</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nom" className="text-white font-medium text-sm uppercase tracking-wide">
                      Nom *
                    </Label>
                    <Input
                      id="nom"
                      type="text"
                      required
                      value={formData.nom}
                      onChange={(e) => handleInputChange("nom", e.target.value)}
                      className="bg-gray-800/50 border-gray-700/50 text-white focus:border-[#35C8F4] focus:ring-2 focus:ring-[#35C8F4]/20 transition-all duration-300 h-12 rounded-lg backdrop-blur-sm"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white font-medium text-sm uppercase tracking-wide">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-gray-800/50 border-gray-700/50 text-white focus:border-[#35C8F4] focus:ring-2 focus:ring-[#35C8F4]/20 transition-all duration-300 h-12 rounded-lg backdrop-blur-sm"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telephone" className="text-white font-medium text-sm uppercase tracking-wide">
                    Téléphone *
                  </Label>
                  <Input
                    id="telephone"
                    type="tel"
                    required
                    value={formData.telephone}
                    onChange={(e) => handleInputChange("telephone", e.target.value)}
                    className="bg-gray-800/50 border-gray-700/50 text-white focus:border-[#35C8F4] focus:ring-2 focus:ring-[#35C8F4]/20 transition-all duration-300 h-12 rounded-lg backdrop-blur-sm"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white font-medium text-sm uppercase tracking-wide">
                    Service souhaité *
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="bg-gray-800/50 border-gray-700/50 text-white focus:border-[#35C8F4] focus:ring-2 focus:ring-[#35C8F4]/20 transition-all duration-300 h-12 rounded-lg backdrop-blur-sm">
                      <SelectValue placeholder="Choisissez un service" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 backdrop-blur-sm">
                      <SelectItem value="standard">Intérieur Simple+</SelectItem>
                      <SelectItem value="premium">Sièges et Plafon</SelectItem>
                      <SelectItem value="livraison">Express (Extérieur complet)</SelectItem>
                      <SelectItem value="moteur">Luxury (Extérieur complet + Intérieur)</SelectItem>
                      <SelectItem value="ceramique">Nettoyage de canapé</SelectItem>
                      <SelectItem value="produits">Nettoyage de tapis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-white font-medium text-sm uppercase tracking-wide">
                      Date souhaitée
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      min={new Date().toISOString().split("T")[0]} // empêche les dates passées
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="bg-gray-800/50 border-gray-700/50 text-white focus:border-[#35C8F4] focus:ring-2 focus:ring-[#35C8F4]/20 transition-all duration-300 h-12 rounded-lg backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="heure" className="text-white font-medium text-sm uppercase tracking-wide">
                      Heure souhaitée
                    </Label>
                    <Input
                      id="heure"
                      type="time"
                      value={formData.heure}
                      onChange={(e) => handleInputChange("heure", e.target.value)}
                      className="bg-gray-800/50 border-gray-700/50 text-white focus:border-[#35C8F4] focus:ring-2 focus:ring-[#35C8F4]/20 transition-all duration-300 h-12 rounded-lg backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white font-medium text-sm uppercase tracking-wide">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Informations complémentaires sur votre véhicule ou vos besoins..."
                    className="bg-gray-800/50 border-gray-700/50 text-white focus:border-[#35C8F4] focus:ring-2 focus:ring-[#35C8F4]/20 transition-all duration-300 rounded-lg backdrop-blur-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#35C8F4] to-[#2bb5e0] hover:from-[#2bb5e0] hover:to-[#35C8F4] text-black font-bold text-lg py-4 h-14 rounded-lg shadow-lg hover:shadow-[#35C8F4]/25 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Envoyer via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-800/50 shadow-xl hover:shadow-2xl hover:shadow-[#35C8F4]/10 transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-gradient-to-br from-[#35C8F4]/20 to-[#35C8F4]/10 rounded-2xl group-hover:from-[#35C8F4]/30 group-hover:to-[#35C8F4]/20 transition-all duration-300">
                      <Phone className="w-8 h-8 text-[#35C8F4]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 text-lg">Téléphone</h4>
                      <a
                        href="tel:0781633288"
                        className="text-[#35C8F4] hover:text-white transition-colors text-xl font-bold tracking-wide"
                      >
                        07 81 63 32 88
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-800/50 shadow-xl hover:shadow-2xl hover:shadow-[#35C8F4]/10 transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-gradient-to-br from-[#35C8F4]/20 to-[#35C8F4]/10 rounded-2xl group-hover:from-[#35C8F4]/30 group-hover:to-[#35C8F4]/20 transition-all duration-300">
                      <MapPin className="w-8 h-8 text-[#35C8F4]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 text-lg">Adresse</h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        9 rue Jules Védrines
                        <br />
                        56100 Lorient
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-800/50 shadow-xl hover:shadow-2xl hover:shadow-[#35C8F4]/10 transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-gradient-to-br from-[#35C8F4]/20 to-[#35C8F4]/10 rounded-2xl group-hover:from-[#35C8F4]/30 group-hover:to-[#35C8F4]/20 transition-all duration-300">
                      <Clock className="w-8 h-8 text-[#35C8F4]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 text-lg">Horaires</h4>
                      <div className="text-gray-300 space-y-1 text-lg">
                        <p>Lun-Ven: 9h-12h / 13h30-18h</p>
                        <p>Samedi: 9h-14h</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-black to-gray-900 border border-gray-800/50 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.8!2d-3.3647!3d47.7463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48101e8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2s9%20Rue%20Jules%20V%C3%A9drines%2C%2056100%20Lorient!5e0!3m2!1sfr!2sfr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
