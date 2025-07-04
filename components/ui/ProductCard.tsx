'use client'

import React from "react";
import Link from "next/link";
import Button from "./Button";
import { useCart } from "@/lib/contexts/CartContext";

interface ProductCardProps {
  id?: string;
  name: string;
  description: string;
  price: number;
  slug?: string;
  category?: string;
  origin?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  slug,
  category,
  origin,
}) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (id) {
      addItem({
        id,
        name,
        price,
        description,
      });
    }
  };

  const CardContent = (
    <>
      <div className="h-64 bg-gradient-to-br from-orthea-tea-rose to-orthea-porcelain flex items-center justify-center">
        <span className="text-6xl">🍵</span>
      </div>
      
      <div className="p-6">
        <h3 className="font-display text-xl text-orthea-jade mb-2">
          {name}
        </h3>
        <p className="font-serif text-orthea-ink/70 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Catégorie et origine */}
        {(category || origin) && (
          <div className="flex gap-4 text-xs text-orthea-ink/60 mb-4">
            {category && <span>{category}</span>}
            {origin && <span>• {origin}</span>}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl text-orthea-gold">
            {price} CHF
          </span>
          <Button size="sm" onClick={handleAddToCart}>
            Ajouter
          </Button>
        </div>
      </div>
    </>
  );

  const cardClass = "bg-white rounded-2xl shadow-lg overflow-hidden card-hover group";
  
  // Si pas de slug, retourner juste la carte sans lien
  if (!slug) {
    return <div className={cardClass}>{CardContent}</div>;
  }

  return (
    <div className={cardClass}>
      <Link href={`/boutique/${slug}`}>
        {CardContent}
      </Link>
    </div>
  );
};

export default ProductCard; 