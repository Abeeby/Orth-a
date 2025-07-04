'use client'

import Link from 'next/link'
import { CheckCircle, Mail, Package, ArrowRight } from 'lucide-react'
import { MainLayout } from '@/components/layout/MainLayout'

export default function CheckoutSuccessPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-porcelain flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center">
          {/* Animation de succès */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <CheckCircle className="w-24 h-24 text-jade animate-fade-in" />
              <div className="absolute inset-0 bg-jade/20 rounded-full animate-ping" />
            </div>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl text-ink mb-4">
            Merci pour votre commande !
          </h1>
          
          <p className="font-crimson text-xl text-ink/70 mb-8">
            Votre commande a été confirmée et sera traitée dans les plus brefs délais.
          </p>

          {/* Numéro de commande */}
          <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
            <p className="font-montserrat text-sm text-ink/60 mb-2">
              Numéro de commande
            </p>
            <p className="font-playfair text-2xl text-jade">
              #ORD-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>

          {/* Prochaines étapes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 text-left">
              <Mail className="w-8 h-8 text-jade mb-4" />
              <h3 className="font-playfair text-xl text-ink mb-2">
                Email de confirmation
              </h3>
              <p className="font-crimson text-ink/70">
                Vous recevrez un email de confirmation avec tous les détails de votre commande.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 text-left">
              <Package className="w-8 h-8 text-jade mb-4" />
              <h3 className="font-playfair text-xl text-ink mb-2">
                Livraison rapide
              </h3>
              <p className="font-crimson text-ink/70">
                Votre commande sera expédiée sous 24-48h. Livraison gratuite en Suisse.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-jade hover:bg-jade/90 text-porcelain px-8 py-4 rounded-full font-montserrat font-medium transition-all"
            >
              Retour à l'accueil
            </Link>
            <Link
              href="/boutique"
              className="inline-flex items-center justify-center gap-2 border-2 border-jade text-jade hover:bg-jade hover:text-porcelain px-8 py-4 rounded-full font-montserrat font-medium transition-all"
            >
              Continuer vos achats
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Message de remerciement */}
          <div className="mt-12 p-6 bg-jade/5 rounded-2xl">
            <p className="font-dancing text-3xl text-jade mb-2">
              Bienvenue dans la famille Orthéa
            </p>
            <p className="font-crimson text-ink/70">
              Nous sommes ravis de vous compter parmi nos connaisseurs de thé. 
              Préparez-vous à vivre une expérience gustative exceptionnelle !
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}