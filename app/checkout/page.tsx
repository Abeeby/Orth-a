'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CreditCard, Truck, Shield } from 'lucide-react'
import { useCart } from '@/lib/contexts/CartContext'
import { MainLayout } from '@/components/layout/MainLayout'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotalPrice, clearCart } = useCart()
  const totalPrice = getTotalPrice()
  const [isProcessing, setIsProcessing] = useState(false)
  
  // Form states
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Adresse de livraison
    address: '',
    addressComplement: '',
    postalCode: '',
    city: '',
    country: 'Suisse',
    
    // Paiement
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    
    // Options
    newsletter: false,
    acceptTerms: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.acceptTerms) {
      alert('Veuillez accepter les conditions générales de vente')
      return
    }

    setIsProcessing(true)
    
    // Simulation du traitement du paiement
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // En production, ici on ferait l'appel API pour traiter la commande
    
    // Vider le panier et rediriger
    clearCart()
    router.push('/checkout/success')
  }

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-porcelain flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-playfair text-3xl text-ink mb-4">Votre panier est vide</h1>
            <p className="font-crimson text-ink/70 mb-8">
              Découvrez notre collection de thés d'exception
            </p>
            <Link
              href="/boutique"
              className="inline-flex items-center gap-2 bg-jade hover:bg-jade/90 text-porcelain px-6 py-3 rounded-full font-montserrat transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à la boutique
            </Link>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-porcelain py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="font-playfair text-4xl text-ink mb-8">Finaliser la commande</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulaire principal */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Informations personnelles */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="font-playfair text-2xl text-ink mb-6">Informations personnelles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-montserrat text-sm text-ink/70 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:border-jade"
                      />
                    </div>
                    <div>
                      <label className="block font-montserrat text-sm text-ink/70 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:border-jade"
                      />
                    </div>
                    <div>
                      <label className="block font-montserrat text-sm text-ink/70 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:border-jade"
                      />
                    </div>
                    <div>
                      <label className="block font-montserrat text-sm text-ink/70 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:border-jade"
                      />
                    </div>
                  </div>
                </div>

                {/* Adresse de livraison */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="font-playfair text-2xl text-ink mb-6">Adresse de livraison</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-montserrat text-sm text-ink/70 mb-2">
                        Adresse *
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:border-jade"
                      />
                    </div>
                    <div>
                      <label className="block font-montserrat text-sm text-ink/70 mb-2">
                        Complément d'adresse
                      </label>
                      <input
                        type="text"
                        name="addressComplement"
                        value={formData.addressComplement}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:border-jade"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-montserrat text-sm text-ink/70 mb-2">
                          Code postal *
                        </label>
                        <input
                          type="text"
                          name="postalCode"
                          required
                          value={formData.postalCode}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:border-jade"
                        />
                      </div>
                      <div>
                        <label className="block font-montserrat text-sm text-ink/70 mb-2">
                          Ville *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:border-jade"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informations de paiement */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h2 className="font-playfair text-2xl text-ink mb-6">Paiement sécurisé</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-montserrat text-sm text-ink/70 mb-2">
                        Numéro de carte *
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        required
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:border-jade"
                      />
                    </div>
                    <div>
                      <label className="block font-montserrat text-sm text-ink/70 mb-2">
                        Nom sur la carte *
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        required
                        value={formData.cardName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:border-jade"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block font-montserrat text-sm text-ink/70 mb-2">
                          Date d'expiration *
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          required
                          placeholder="MM/AA"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:border-jade"
                        />
                      </div>
                      <div>
                        <label className="block font-montserrat text-sm text-ink/70 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          required
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-jade/20 rounded-lg focus:outline-none focus:border-jade"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Icônes de sécurité */}
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-jade/10">
                    <Shield className="w-5 h-5 text-jade" />
                    <span className="font-montserrat text-sm text-ink/70">
                      Paiement 100% sécurisé avec cryptage SSL
                    </span>
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <span className="font-crimson text-ink/70">
                      Je souhaite recevoir la newsletter Orthéa avec des offres exclusives
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="mt-1"
                      required
                    />
                    <span className="font-crimson text-ink/70">
                      J'accepte les <Link href="/cgv" className="text-jade hover:underline">conditions générales de vente</Link> *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-jade hover:bg-jade/90 disabled:bg-jade/50 text-porcelain px-8 py-4 rounded-full font-montserrat font-medium transition-all flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Traitement en cours...
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      Payer {totalPrice.toFixed(2)} CHF
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Résumé de la commande */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                <h2 className="font-playfair text-2xl text-ink mb-6">Résumé</h2>
                
                {/* Produits */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="font-crimson text-ink/70">
                        {item.name} x{item.quantity}
                      </span>
                      <span className="font-montserrat text-ink">
                        {(item.price * item.quantity).toFixed(2)} CHF
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totaux */}
                <div className="space-y-3 pt-6 border-t border-jade/10">
                  <div className="flex justify-between">
                    <span className="font-montserrat text-ink/70">Sous-total</span>
                    <span className="font-montserrat text-ink">{totalPrice.toFixed(2)} CHF</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-montserrat text-ink/70">Livraison</span>
                    <span className="font-montserrat text-jade">Gratuite</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-jade/10">
                    <span className="font-playfair text-xl text-ink">Total</span>
                    <span className="font-playfair text-xl text-jade">{totalPrice.toFixed(2)} CHF</span>
                  </div>
                </div>

                {/* Avantages */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Truck className="w-4 h-4 text-jade flex-shrink-0" />
                    <span className="font-crimson text-ink/70">Livraison gratuite en Suisse</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-4 h-4 text-jade flex-shrink-0" />
                    <span className="font-crimson text-ink/70">Paiement sécurisé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}