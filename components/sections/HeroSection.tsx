import React from "react";
import Button from "../ui/Button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orthea-jade/90 to-orthea-night/90 z-10" />
        <div className="w-full h-full bg-orthea-jade">
          {/* Pour l'instant, un placeholder. Plus tard, on mettra une image ou vidéo */}
          <div className="w-full h-full bg-[url('/hero-tea.jpg')] bg-cover bg-center opacity-30" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="container-orthea relative z-20 text-center py-20">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Tagline */}
          <p className="font-script text-orthea-gold text-2xl md:text-3xl">
            Où l'Orient rencontre la Suisse
          </p>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-orthea-porcelain leading-tight">
            L'Or du Thé
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-orthea-gold">
              à portée de tasse
            </span>
          </h1>

          {/* Description */}
          <p className="font-serif text-lg md:text-xl text-orthea-porcelain/90 max-w-2xl mx-auto">
            Découvrez l'excellence du thé oriental, sublimée par la précision suisse. 
            Une expérience premium accessible, où chaque infusion raconte une histoire millénaire.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button href="/boutique" size="lg">
              Découvrir la Collection
            </Button>
            <Button href="/a-propos" variant="secondary" size="lg">
              Notre Histoire
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-12">
            <div className="text-orthea-porcelain/80">
              <span className="font-display text-3xl text-orthea-gold">100%</span>
              <p className="text-sm">Bio Certifié</p>
            </div>
            <div className="text-orthea-porcelain/80">
              <span className="font-display text-3xl text-orthea-gold">10 CHF</span>
              <p className="text-sm">Prix Unique</p>
            </div>
            <div className="text-orthea-porcelain/80">
              <span className="font-display text-3xl text-orthea-gold">24h</span>
              <p className="text-sm">Livraison Suisse</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-orthea-porcelain/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orthea-porcelain/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 