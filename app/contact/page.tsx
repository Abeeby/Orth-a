'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Pour l'instant, on simule l'envoi
    console.log('Formulaire envoyé:', formData)
    alert('Merci pour votre message. Nous vous répondrons dans les plus brefs délais.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-porcelain">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-jade overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-jade/90 to-jade"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="font-playfair text-5xl md:text-6xl text-porcelain mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-porcelain/90 max-w-2xl mx-auto">
              Une question sur nos thés ? Un conseil personnalisé ? 
              Notre équipe est là pour vous accompagner dans votre voyage gustatif.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="font-playfair text-3xl text-ink mb-8">Restons en contact</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-jade/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-jade" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-ink mb-1">Email</h3>
                    <p className="text-ink/70">contact@orthea.ch</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-jade/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-jade" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-ink mb-1">Téléphone</h3>
                    <p className="text-ink/70">+41 22 123 45 67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-jade/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-jade" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-ink mb-1">Adresse</h3>
                    <p className="text-ink/70">
                      Rue du Marché 15<br />
                      1204 Genève, Suisse
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-jade/10 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-jade" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-ink mb-1">Horaires</h3>
                    <p className="text-ink/70">
                      Lun-Ven: 9h00 - 18h00<br />
                      Sam: 10h00 - 16h00
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-jade/5 rounded-xl p-8 text-center">
                <MapPin className="w-12 h-12 text-jade mx-auto mb-4" />
                <p className="text-ink/70">
                  Visitez notre boutique à Genève
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                <h2 className="font-playfair text-3xl text-ink mb-8">Envoyez-nous un message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-montserrat font-medium text-ink mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade/50 focus:border-jade transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-montserrat font-medium text-ink mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade/50 focus:border-jade transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-montserrat font-medium text-ink mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade/50 focus:border-jade transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="commande">Question sur une commande</option>
                      <option value="produit">Information produit</option>
                      <option value="conseil">Conseil personnalisé</option>
                      <option value="partenariat">Partenariat B2B</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-montserrat font-medium text-ink mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade/50 focus:border-jade transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-ink/60">* Champs obligatoires</p>
                    <button 
                      type="submit" 
                      className="inline-flex items-center gap-2 bg-jade hover:bg-jade/90 text-porcelain px-6 py-3 rounded-full font-montserrat font-medium transition-all hover:scale-105"
                    >
                      Envoyer le message
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="font-playfair text-2xl text-ink mb-6">Questions fréquentes</h3>
                <div className="space-y-4">
                  <details className="bg-white rounded-lg p-6 cursor-pointer group">
                    <summary className="font-montserrat font-semibold text-ink flex items-center justify-between">
                      Quels sont vos délais de livraison ?
                      <span className="text-jade group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="mt-4 text-ink/70">
                      Nous livrons en Suisse sous 2-3 jours ouvrables. 
                      Pour les commandes internationales, comptez 5-7 jours ouvrables.
                    </p>
                  </details>

                  <details className="bg-white rounded-lg p-6 cursor-pointer group">
                    <summary className="font-montserrat font-semibold text-ink flex items-center justify-between">
                      Proposez-vous des échantillons ?
                      <span className="text-jade group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="mt-4 text-ink/70">
                      Oui ! Nous proposons des coffrets découverte avec des échantillons 
                      de nos différentes gammes pour vous permettre d'explorer notre collection.
                    </p>
                  </details>

                  <details className="bg-white rounded-lg p-6 cursor-pointer group">
                    <summary className="font-montserrat font-semibold text-ink flex items-center justify-between">
                      Puis-je passer une commande B2B ?
                      <span className="text-jade group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="mt-4 text-ink/70">
                      Absolument ! Nous travaillons avec des hôtels, restaurants et cafés. 
                      Contactez-nous via le formulaire en sélectionnant "Partenariat B2B".
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 