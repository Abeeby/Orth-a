'use client'

import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/contexts/CartContext'

interface CartIconProps {
  onClick?: () => void
  className?: string
}

export function CartIcon({ onClick, className = '' }: CartIconProps) {
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <button
      onClick={onClick}
      className={`relative p-2 hover:bg-jade/10 rounded-full transition-colors ${className}`}
    >
      <ShoppingBag className="w-5 h-5 text-ink" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-jade text-porcelain text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  )
}