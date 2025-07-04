'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Leaf, User } from 'lucide-react'
import { CartIcon } from '@/components/ui/CartIcon'
import { CartDrawer } from '@/components/ui/CartDrawer'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <>
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
              <CartIcon onClick={() => setIsCartOpen(true)} />
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
              <div className="flex items-center gap-4 pt-4 border-t border-jade/10 mt-4">
                <button className="p-2 hover:bg-jade/10 rounded-full transition-colors">
                  <User className="w-5 h-5 text-ink" />
                </button>
                <CartIcon onClick={() => setIsCartOpen(true)} />
              </div>
            </div>
          )}
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}