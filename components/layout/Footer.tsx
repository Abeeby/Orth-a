import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    boutique: [
      { href: "/boutique/thes-noirs", label: "Thés Noirs" },
      { href: "/boutique/thes-verts", label: "Thés Verts" },
      { href: "/boutique/thes-blancs", label: "Thés Blancs" },
      { href: "/boutique/oolongs", label: "Oolongs" },
      { href: "/boutique/infusions", label: "Infusions" },
    ],
    informations: [
      { href: "/a-propos", label: "Notre Histoire" },
      { href: "/nos-valeurs", label: "Nos Valeurs" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
    legal: [
      { href: "/mentions-legales", label: "Mentions Légales" },
      { href: "/cgv", label: "CGV" },
      { href: "/politique-confidentialite", label: "Confidentialité" },
      { href: "/cookies", label: "Cookies" },
    ],
  };

  return (
    <footer className="bg-orthea-night text-orthea-porcelain mt-20">
      <div className="container-orthea py-12">
        {/* Footer Main */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl text-orthea-gold mb-4">Orthéa</h3>
            <p className="font-serif text-orthea-porcelain/80 mb-6 max-w-sm">
              L'Orient rencontre la Suisse, l'excellence rencontre l'âme. 
              Découvrez l'art du thé accessible.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/orthea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orthea-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/orthea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orthea-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@orthea.ch"
                className="hover:text-orthea-gold transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Boutique Links */}
          <div>
            <h4 className="font-sans font-semibold text-orthea-gold mb-4">Boutique</h4>
            <ul className="space-y-2">
              {footerLinks.boutique.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-orthea-porcelain/80 hover:text-orthea-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h4 className="font-sans font-semibold text-orthea-gold mb-4">Informations</h4>
            <ul className="space-y-2">
              {footerLinks.informations.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-orthea-porcelain/80 hover:text-orthea-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-sans font-semibold text-orthea-gold mb-4">Légal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-orthea-porcelain/80 hover:text-orthea-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-orthea-porcelain/20 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-sans font-semibold text-orthea-gold mb-2">
                Rejoignez le cercle des initiés
              </h4>
              <p className="text-orthea-porcelain/80 text-sm">
                Conseils exclusifs et 10% de réduction sur votre première commande
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 bg-orthea-porcelain/10 border border-orthea-porcelain/20 rounded-full text-orthea-porcelain placeholder:text-orthea-porcelain/50 focus:outline-none focus:border-orthea-gold transition-colors"
                required
              />
              <button 
                type="submit" 
                className="btn-primary whitespace-nowrap"
              >
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-orthea-porcelain/20 mt-8 pt-8 text-center">
          <p className="text-orthea-porcelain/60 text-sm">
            © {currentYear} Orthéa. Tous droits réservés. Fait avec ❤️ à Lausanne, Suisse.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 