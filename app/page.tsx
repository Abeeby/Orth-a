'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Leaf, Heart, Globe, Star, Menu, X, ShoppingBag, User } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-porcelain">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-jade/10">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-jade rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-porcelain" />
              </div>
              <span className="font-playfair text-2xl text-ink">Orthéa</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/boutique" className="font-montserrat text-ink hover:text-jade transition-colors">
                Boutique
              </Link>
              <Link href="/a-propos" className="font-montserrat text-ink hover:text-jade transition-colors">
                À Propos
              </Link>
              <Link href="/blog" className="font-montserrat text-ink hover:text-jade transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="font-montserrat text-ink hover:text-jade transition-colors">
                Contact
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button className="p-2 hover:bg-jade/10 rounded-full transition-colors">
                <User className="w-5 h-5 text-ink" />
              </button>
              <button className="p-2 hover:bg-jade/10 rounded-full transition-colors">
                <ShoppingBag className="w-5 h-5 text-ink" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-jade/10">
              <Link href="/boutique" className="block py-2 font-montserrat text-ink hover:text-jade">
                Boutique
              </Link>
              <Link href="/a-propos" className="block py-2 font-montserrat text-ink hover:text-jade">
                À Propos
              </Link>
              <Link href="/blog" className="block py-2 font-montserrat text-ink hover:text-jade">
                Blog
              </Link>
              <Link href="/contact" className="block py-2 font-montserrat text-ink hover:text-jade">
                Contact
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-jade to-jade/90 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="font-playfair text-5xl md:text-7xl text-porcelain mb-6 animate-fade-in">
              L'Orient rencontre la Suisse
            </h1>
            <p className="font-crimson text-xl md:text-2xl text-porcelain/90 mb-8 animate-fade-in-delay">
              Découvrez l'excellence du thé oriental sublimée par la précision suisse. 
              Des thés d'exception à prix accessibles.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in-delay-2">
              <Link href="/boutique" className="bg-gold hover:bg-gold/90 text-ink px-8 py-4 rounded-full font-montserrat font-medium transition-all hover:scale-105">
                Découvrir la Collection
              </Link>
              <Link href="/a-propos" className="border-2 border-porcelain text-porcelain hover:bg-porcelain hover:text-jade px-8 py-4 rounded-full font-montserrat font-medium transition-all">
                Notre Histoire
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-porcelain to-transparent"></div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-4xl md:text-5xl text-ink mb-6">
              L'Excellence du Thé à Votre Portée
            </h2>
            <p className="font-crimson text-lg text-ink/70 leading-relaxed mb-8">
              Orthéa marie l'art millénaire du thé oriental à la précision suisse. 
              Chaque tasse est une invitation au voyage, une pause méditative dans votre quotidien, 
              un moment de pure dégustation.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-jade/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-jade" />
                </div>
                <span className="font-montserrat text-ink">100% Naturel</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-gold" />
                </div>
                <span className="font-montserrat text-ink">Qualité Premium</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-tea-rose/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-tea-rose" />
                </div>
                <span className="font-montserrat text-ink">Sélection Artisanale</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="py-20 bg-porcelain">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl text-ink mb-4">
              Nos Collections Signatures
            </h2>
            <p className="font-crimson text-lg text-ink/70 max-w-2xl mx-auto">
              Trois voyages sensoriels, trois moments de la journée, trois invitations à la découverte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Collection Éveil */}
            <div className="group cursor-pointer">
              <div className="relative h-80 bg-gradient-to-br from-jade/20 to-jade/10 rounded-2xl overflow-hidden mb-6 transition-transform group-hover:scale-105">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-20 h-20 bg-jade/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🌅</span>
                    </div>
                    <h3 className="font-playfair text-2xl text-jade mb-2">Collection Éveil</h3>
                    <p className="font-crimson text-jade/70">Des thés énergisants pour commencer la journée avec sérénité et vitalité</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link href="/boutique" className="inline-flex items-center gap-2 text-jade hover:gap-3 transition-all font-montserrat">
                  Explorer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Collection Zen */}
            <div className="group cursor-pointer">
              <div className="relative h-80 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl overflow-hidden mb-6 transition-transform group-hover:scale-105">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🧘</span>
                    </div>
                    <h3 className="font-playfair text-2xl text-gold mb-2">Collection Zen</h3>
                    <p className="font-crimson text-gold/70">L'équilibre parfait entre concentration et relaxation pour votre journée</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link href="/boutique" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all font-montserrat">
                  Explorer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Collection Sérénité */}
            <div className="group cursor-pointer">
              <div className="relative h-80 bg-gradient-to-br from-tea-rose/20 to-tea-rose/10 rounded-2xl overflow-hidden mb-6 transition-transform group-hover:scale-105">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-6">
                    <div className="w-20 h-20 bg-tea-rose/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">🌙</span>
                    </div>
                    <h3 className="font-playfair text-2xl text-tea-rose mb-2">Collection Sérénité</h3>
                    <p className="font-crimson text-tea-rose/70">Des infusions apaisantes pour clôturer votre journée en douceur</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link href="/boutique" className="inline-flex items-center gap-2 text-tea-rose hover:gap-3 transition-all font-montserrat">
                  Explorer <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl text-ink mb-4">
              Nos Best-Sellers
            </h2>
            <p className="font-crimson text-lg text-ink/70 max-w-2xl mx-auto">
              Les thés préférés de nos connaisseurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Darjeeling */}
            <div className="bg-porcelain rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-[4/3] bg-gradient-to-br from-jade/10 to-gold/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-jade/30 text-6xl font-dancing">Darjeeling</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl text-ink mb-2">Darjeeling First Flush</h3>
                <p className="font-crimson text-ink/70 mb-4">Le champagne des thés, notes florales délicates</p>
                <div className="flex items-center justify-between">
                  <span className="font-montserrat text-jade font-semibold">10 CHF</span>
                  <Link href="/boutique/darjeeling-first-flush" className="text-jade hover:text-jade/80 transition-colors">
                    Découvrir →
                  </Link>
                </div>
              </div>
            </div>

            {/* Earl Grey */}
            <div className="bg-porcelain rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-[4/3] bg-gradient-to-br from-jade/10 to-gold/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-jade/30 text-6xl font-dancing">Earl Grey</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl text-ink mb-2">Earl Grey Suprême</h3>
                <p className="font-crimson text-ink/70 mb-4">Thé noir Ceylon avec huile de bergamote naturelle</p>
                <div className="flex items-center justify-between">
                  <span className="font-montserrat text-jade font-semibold">10 CHF</span>
                  <Link href="/boutique/earl-grey-supreme" className="text-jade hover:text-jade/80 transition-colors">
                    Découvrir →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sencha */}
            <div className="bg-porcelain rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-[4/3] bg-gradient-to-br from-jade/10 to-gold/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-jade/30 text-6xl font-dancing">Sencha</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl text-ink mb-2">Sencha Premium</h3>
                <p className="font-crimson text-ink/70 mb-4">Thé vert japonais aux notes végétales fraîches</p>
                <div className="flex items-center justify-between">
                  <span className="font-montserrat text-jade font-semibold">10 CHF</span>
                  <Link href="/boutique/sencha-premium" className="text-jade hover:text-jade/80 transition-colors">
                    Découvrir →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/boutique" className="inline-flex items-center gap-2 bg-jade hover:bg-jade/90 text-porcelain px-8 py-4 rounded-full font-montserrat font-medium transition-all hover:scale-105">
              Découvrir Toute la Collection
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-jade text-porcelain">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl text-center mb-16">
              Nos Valeurs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-porcelain/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10" />
                </div>
                <h3 className="font-playfair text-2xl mb-4">Authenticité</h3>
                <p className="font-crimson text-porcelain/80">
                  Nous travaillons directement avec les producteurs pour garantir 
                  l'origine et la qualité de chaque feuille
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-porcelain/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10" />
                </div>
                <h3 className="font-playfair text-2xl mb-4">Passion</h3>
                <p className="font-crimson text-porcelain/80">
                  Chaque thé est sélectionné avec amour et expertise pour vous offrir 
                  une expérience gustative exceptionnelle
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-porcelain/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-10 h-10" />
                </div>
                <h3 className="font-playfair text-2xl mb-4">Durabilité</h3>
                <p className="font-crimson text-porcelain/80">
                  Nous privilégions les pratiques éco-responsables et le commerce 
                  équitable pour un impact positif
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl text-ink mb-6">
            Prêt pour Votre Voyage Gustatif ?
          </h2>
          <p className="font-crimson text-lg text-ink/70 mb-8 max-w-2xl mx-auto">
            Rejoignez la communauté Orthéa et découvrez comment le thé peut transformer 
            votre quotidien en moments d'exception.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/boutique" className="bg-jade hover:bg-jade/90 text-porcelain px-8 py-4 rounded-full font-montserrat font-medium transition-all hover:scale-105">
              Commander Maintenant
            </Link>
            <Link href="/a-propos" className="border-2 border-jade text-jade hover:bg-jade hover:text-porcelain px-8 py-4 rounded-full font-montserrat font-medium transition-all">
              Notre Histoire
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-porcelain py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-jade rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-porcelain" />
                </div>
                <span className="font-playfair text-xl">Orthéa</span>
              </div>
              <p className="font-crimson text-porcelain/70">
                L'Orient rencontre la Suisse. L'excellence du thé à prix accessible.
              </p>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold mb-4">Boutique</h3>
              <ul className="space-y-2 font-crimson text-porcelain/70">
                <li><Link href="/boutique" className="hover:text-porcelain transition-colors">Tous les Thés</Link></li>
                <li><Link href="/boutique" className="hover:text-porcelain transition-colors">Collection Éveil</Link></li>
                <li><Link href="/boutique" className="hover:text-porcelain transition-colors">Collection Zen</Link></li>
                <li><Link href="/boutique" className="hover:text-porcelain transition-colors">Collection Sérénité</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold mb-4">À Propos</h3>
              <ul className="space-y-2 font-crimson text-porcelain/70">
                <li><Link href="/a-propos" className="hover:text-porcelain transition-colors">Notre Histoire</Link></li>
                <li><Link href="/blog" className="hover:text-porcelain transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-porcelain transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold mb-4">Newsletter</h3>
              <p className="font-crimson text-porcelain/70 mb-4">
                Recevez nos conseils et offres exclusives
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-porcelain/10 border border-porcelain/20 rounded-lg text-porcelain placeholder:text-porcelain/50 focus:outline-none focus:border-porcelain/40"
                />
                <button className="px-4 py-2 bg-jade hover:bg-jade/90 text-porcelain rounded-lg font-montserrat transition-colors">
                  OK
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-porcelain/20 pt-8 text-center font-crimson text-porcelain/60">
            <p>&copy; 2024 Orthéa. Tous droits réservés. Fait avec ❤️ en Suisse.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  )
}
