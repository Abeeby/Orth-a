'use client';

import { categories } from '@/lib/products';
import { X, Filter } from 'lucide-react';
import { useState } from 'react';

interface FilterSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  maxPrice: number;
  onPriceChange: (price: number) => void;
  selectedCaffeine?: string;
  onCaffeineChange: (level: string | undefined) => void;
  isMobile?: boolean;
}

export default function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  maxPrice,
  onPriceChange,
  selectedCaffeine,
  onCaffeineChange,
  isMobile = false,
}: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(!isMobile);

  const caffeineOptions = [
    { value: undefined, label: "Tous" },
    { value: "none", label: "Sans théine" },
    { value: "low", label: "Faible" },
    { value: "medium", label: "Moyen" },
    { value: "high", label: "Élevé" },
  ];

  const filterContent = (
    <div className="space-y-8">
      {/* Catégories */}
      <div>
        <h3 className="font-display text-lg mb-4">Catégories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-orthea-jade text-white'
                  : 'hover:bg-orthea-jade/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Prix */}
      <div>
        <h3 className="font-display text-lg mb-4">Prix maximum</h3>
        <div className="space-y-3">
          <input
            type="range"
            min="5"
            max="50"
            value={maxPrice}
            onChange={(e) => onPriceChange(Number(e.target.value))}
            className="w-full accent-orthea-jade"
          />
          <div className="flex justify-between text-sm text-orthea-ink/60">
            <span>5 CHF</span>
            <span className="font-semibold text-orthea-jade">{maxPrice} CHF</span>
            <span>50 CHF</span>
          </div>
        </div>
      </div>

      {/* Théine */}
      <div>
        <h3 className="font-display text-lg mb-4">Niveau de théine</h3>
        <div className="space-y-2">
          {caffeineOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => onCaffeineChange(option.value)}
              className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCaffeine === option.value
                  ? 'bg-orthea-gold text-white'
                  : 'hover:bg-orthea-gold/10'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // Version mobile
  if (isMobile) {
    return (
      <>
        {/* Bouton d'ouverture */}
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-orthea-jade text-white p-4 rounded-full shadow-lg lg:hidden"
        >
          <Filter className="w-6 h-6" />
        </button>

        {/* Sidebar mobile */}
        <div
          className={`fixed inset-0 z-50 lg:hidden transition-opacity ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <div
            className={`absolute left-0 top-0 h-full w-80 bg-white p-6 shadow-xl transition-transform ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-2xl">Filtres</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-orthea-jade/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {filterContent}
          </div>
        </div>
      </>
    );
  }

  // Version desktop
  return (
    <aside className="w-full lg:w-64 bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="font-display text-2xl mb-6">Filtres</h2>
      {filterContent}
    </aside>
  );
} 