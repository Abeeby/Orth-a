"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navLinks = [
    { href: "/boutique", label: "Boutique" },
    { href: "/a-propos", label: "À propos" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-orthea-porcelain/95 backdrop-blur-sm z-50 transition-all duration-300">
      <nav className="container-orthea">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display text-3xl text-orthea-jade">Orthéa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-orthea-ink hover:text-orthea-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="hover:text-orthea-gold transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/compte" className="hover:text-orthea-gold transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/panier" className="relative hover:text-orthea-gold transition-colors">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orthea-gold text-orthea-porcelain text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-orthea-porcelain z-40 animate-slide-up">
            <div className="flex flex-col space-y-6 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-sans text-xl text-orthea-ink hover:text-orthea-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center space-x-6 pt-6 border-t border-orthea-tea-rose">
                <button className="hover:text-orthea-gold transition-colors">
                  <Search className="w-6 h-6" />
                </button>
                <Link href="/compte" className="hover:text-orthea-gold transition-colors">
                  <User className="w-6 h-6" />
                </Link>
                <Link href="/panier" className="relative hover:text-orthea-gold transition-colors">
                  <ShoppingCart className="w-6 h-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orthea-gold text-orthea-porcelain text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 