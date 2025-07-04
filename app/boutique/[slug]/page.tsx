'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '@/lib/products';
import Button from '@/components/ui/Button';
import { 
  ArrowLeft, 
  Thermometer, 
  Clock, 
  MapPin, 
  Zap,
  Heart,
  ShoppingBag,
  Minus,
  Plus
} from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find(p => p.slug === params.slug);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-orthea-jade/30 mx-auto mb-4" />
          <h1 className="font-display text-2xl text-orthea-ink mb-2">Produit non trouvé</h1>
          <Link href="/boutique" className="text-orthea-jade hover:underline">
            Retour à la boutique
          </Link>
        </div>
      </div>
    );
  }

  const incrementQuantity = () => setQuantity(prev => Math.min(prev + 1, 10));
  const decrementQuantity = () => setQuantity(prev => Math.max(prev - 1, 1));

  // Suggestions de produits similaires
  const suggestions = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orthea-porcelain to-white">
      {/* Fil d'Ariane */}
      <div className="px-6 py-4 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-orthea-ink/60">
          <Link href="/" className="hover:text-orthea-jade">Accueil</Link>
          <span>/</span>
          <Link href="/boutique" className="hover:text-orthea-jade">Boutique</Link>
          <span>/</span>
          <span className="text-orthea-ink">{product.name}</span>
        </nav>
      </div>

      {/* Contenu principal */}
      <div className="px-6 max-w-7xl mx-auto pb-20">
        <Link 
          href="/boutique"
          className="inline-flex items-center gap-2 text-orthea-jade hover:text-orthea-jade/80 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à la boutique
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image produit */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-orthea-tea-rose to-orthea-porcelain rounded-3xl flex items-center justify-center shadow-xl">
              <span className="text-[200px]">🍵</span>
            </div>
            
            {/* Badge catégorie */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-orthea-jade">{product.category}</span>
            </div>
            
            {/* Bouton favori */}
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-orthea-rose text-orthea-rose' : 'text-orthea-ink/60'}`} />
            </button>
          </div>

          {/* Informations produit */}
          <div>
            <h1 className="font-display text-4xl lg:text-5xl text-orthea-ink mb-4">
              {product.name}
            </h1>
            
            <p className="font-serif text-lg text-orthea-ink/70 mb-6">
              {product.longDescription}
            </p>

            {/* Prix */}
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-display text-3xl text-orthea-gold">{product.price} CHF</span>
              <span className="text-sm text-orthea-ink/60">/ 80g</span>
            </div>

            {/* Infos pratiques */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl">
                <div className="flex items-center gap-2 text-orthea-jade mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Origine</span>
                </div>
                <p className="text-orthea-ink">{product.origin}</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl">
                <div className="flex items-center gap-2 text-orthea-jade mb-1">
                  <Thermometer className="w-4 h-4" />
                  <span className="text-sm font-medium">Température</span>
                </div>
                <p className="text-orthea-ink">{product.brewingTemp}°C</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl">
                <div className="flex items-center gap-2 text-orthea-jade mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">Infusion</span>
                </div>
                <p className="text-orthea-ink">{product.brewingTime}</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl">
                <div className="flex items-center gap-2 text-orthea-jade mb-1">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">Théine</span>
                </div>
                <p className="text-orthea-ink capitalize">{
                  product.caffeineLevel === 'none' ? 'Sans théine' :
                  product.caffeineLevel === 'low' ? 'Faible' :
                  product.caffeineLevel === 'medium' ? 'Moyen' :
                  'Élevé'
                }</p>
              </div>
            </div>

            {/* Saveurs */}
            <div className="mb-8">
              <h3 className="font-display text-lg text-orthea-ink mb-3">Notes gustatives</h3>
              <div className="flex flex-wrap gap-2">
                {product.flavor.map((note) => (
                  <span key={note} className="px-3 py-1 bg-orthea-gold/10 text-orthea-gold rounded-full text-sm">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Bienfaits */}
            <div className="mb-8">
              <h3 className="font-display text-lg text-orthea-ink mb-3">Bienfaits</h3>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((benefit) => (
                  <span key={benefit} className="px-3 py-1 bg-orthea-jade/10 text-orthea-jade rounded-full text-sm">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Quantité et bouton d'ajout */}
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-white rounded-lg">
                <button
                  onClick={decrementQuantity}
                  className="p-3 hover:bg-orthea-jade/10 transition-colors rounded-l-lg"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 font-medium">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="p-3 hover:bg-orthea-jade/10 transition-colors rounded-r-lg"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              
              <Button size="lg" className="flex-1">
                Ajouter au panier
              </Button>
            </div>

            {/* Stock */}
            {product.inStock && (
              <p className="text-sm text-green-600 mt-4">✓ En stock</p>
            )}
          </div>
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-3xl text-orthea-ink mb-8">
              Vous pourriez aussi aimer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suggestions.map((suggestion) => (
                <Link key={suggestion.id} href={`/boutique/${suggestion.slug}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-48 bg-gradient-to-br from-orthea-tea-rose to-orthea-porcelain rounded-xl flex items-center justify-center mb-4">
                      <span className="text-6xl">🍵</span>
                    </div>
                    <h3 className="font-display text-lg text-orthea-jade mb-2">
                      {suggestion.name}
                    </h3>
                    <p className="text-sm text-orthea-ink/60 mb-3">
                      {suggestion.origin}
                    </p>
                    <span className="font-display text-xl text-orthea-gold">
                      {suggestion.price} CHF
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
