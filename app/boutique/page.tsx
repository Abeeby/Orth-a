'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search } from 'lucide-react';
import { products, filterProducts } from '@/lib/products';
import ProductCard from '@/components/ui/ProductCard';
import FilterSidebar from '@/components/ui/FilterSidebar';

export default function BoutiquePage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [maxPrice, setMaxPrice] = useState(50);
  const [selectedCaffeine, setSelectedCaffeine] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrer les produits
  const filteredProducts = filterProducts(products, selectedCategory, maxPrice, selectedCaffeine)
    .filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orthea-porcelain to-white">
      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-24 text-center">
        <h1 className="font-display text-4xl lg:text-6xl text-orthea-ink mb-6">
          Notre Collection
        </h1>
        <p className="font-body text-lg text-orthea-ink/70 max-w-2xl mx-auto">
          Découvrez nos thés d&apos;exception, sélectionnés avec soin dans les meilleures 
          plantations du monde et préparés selon les traditions ancestrales.
        </p>
      </section>

      {/* Barre de recherche */}
      <div className="px-6 max-w-7xl mx-auto mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orthea-ink/40" />
          <input
            type="text"
            placeholder="Rechercher un thé..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-orthea-jade/20 focus:outline-none focus:border-orthea-jade transition-colors"
          />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="px-6 max-w-7xl mx-auto pb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtres desktop */}
          <div className="hidden lg:block">
            <FilterSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              maxPrice={maxPrice}
              onPriceChange={setMaxPrice}
              selectedCaffeine={selectedCaffeine}
              onCaffeineChange={setSelectedCaffeine}
            />
          </div>

          {/* Grille de produits */}
          <div className="flex-1">
            {/* Nombre de résultats */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-orthea-ink/60">
                {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
              </p>
              <select 
                className="px-4 py-2 rounded-lg border border-orthea-jade/20 bg-white focus:outline-none focus:border-orthea-jade"
                defaultValue="name"
              >
                <option value="name">Nom (A-Z)</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
              </select>
            </div>

            {/* Grille */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/boutique/${product.slug}`}>
                    <ProductCard
                      name={product.name}
                      description={product.description}
                      price={product.price}
                      origin={product.origin}
                      category={product.category}
                    />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <ShoppingBag className="w-16 h-16 text-orthea-jade/30 mx-auto mb-4" />
                <h3 className="font-display text-2xl text-orthea-ink mb-2">
                  Aucun produit trouvé
                </h3>
                <p className="text-orthea-ink/60 mb-6">
                  Essayez de modifier vos critères de recherche
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('Tous');
                    setMaxPrice(50);
                    setSelectedCaffeine(undefined);
                    setSearchQuery('');
                  }}
                  className="text-orthea-jade hover:text-orthea-jade/80 font-medium"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Filtres mobile */}
      <div className="lg:hidden">
        <FilterSidebar
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          maxPrice={maxPrice}
          onPriceChange={setMaxPrice}
          selectedCaffeine={selectedCaffeine}
          onCaffeineChange={setSelectedCaffeine}
          isMobile
        />
      </div>
    </div>
  );
}
