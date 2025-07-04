import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Heart, Globe, Mountain } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  const founders = [
    {
      name: "Vionor",
      role: "Co-fondateur & Expert Thé",
      description: "Passionné par les traditions orientales du thé, Vionor parcourt l'Asie depuis 15 ans à la recherche des meilleurs jardins de thé.",
      emoji: "🧘‍♂️"
    },
    {
      name: "Amin",
      role: "Co-fondateur & Directeur Créatif",
      description: "Avec son œil pour le design et sa passion pour l'excellence, Amin donne vie à l'expérience visuelle et sensorielle d'Orthéa.",
      emoji: "🎨"
    },
    {
      name: "Semi",
      role: "Co-fondateur & Responsable Qualité",
      description: "Expert en processus et qualité, Semi s'assure que chaque tasse d'Orthéa respecte nos standards d'excellence suisse.",
      emoji: "🔬"
    }
  ];

  const values = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Qualité Exceptionnelle",
      description: "Sélection rigoureuse des meilleurs jardins de thé du monde"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Pont Culturel",
      description: "Union harmonieuse entre traditions orientales et précision suisse"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Bien-être Accessible",
      description: "Le luxe du thé d'exception à un prix juste pour tous"
    },
    {
      icon: <Mountain className="w-6 h-6" />,
      title: "Durabilité",
      description: "Engagement envers des pratiques éthiques et responsables"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orthea-porcelain to-white">
      {/* Hero Section */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-4xl lg:text-6xl text-orthea-ink mb-6">
                Notre Histoire
              </h1>
              <p className="font-serif text-lg text-orthea-ink/70 mb-8">
                Orthéa est née de la rencontre de trois passionnés unis par une vision commune : 
                créer un pont entre les traditions millénaires du thé oriental et l&apos;excellence 
                suisse, pour offrir une expérience de dégustation incomparable accessible à tous.
              </p>
              <blockquote className="border-l-4 border-orthea-gold pl-6 italic text-orthea-ink/60">
                &quot;L&apos;Orient rencontre la Suisse, l&apos;excellence rencontre l&apos;âme&quot;
              </blockquote>
            </div>
            
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-orthea-jade to-orthea-jade/80">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[200px] opacity-20">🌿</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les Fondateurs */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl text-orthea-ink text-center mb-4">
            Les Fondateurs
          </h2>
          <p className="text-center text-orthea-ink/70 max-w-2xl mx-auto mb-12">
            Trois amis, trois expertises, une passion commune pour l&apos;excellence du thé
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div key={founder.name} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-orthea-tea-rose to-orthea-gold/30 flex items-center justify-center">
                  <span className="text-6xl">{founder.emoji}</span>
                </div>
                <h3 className="font-display text-xl text-orthea-jade mb-2">
                  {founder.name}
                </h3>
                <p className="text-sm text-orthea-gold mb-3">{founder.role}</p>
                <p className="text-orthea-ink/60">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* La Philosophie */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-orthea-gold/20 to-orthea-tea-rose/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[150px]">🍃</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl lg:text-4xl text-orthea-ink mb-6">
                Notre Philosophie
              </h2>
              <p className="font-serif text-lg text-orthea-ink/70 mb-6">
                Chez Orthéa, nous croyons que chaque tasse de thé est une invitation au voyage. 
                Un voyage qui commence dans les jardins brumeux d&apos;Asie et se termine dans le 
                confort de votre foyer suisse.
              </p>
              <p className="font-serif text-lg text-orthea-ink/70 mb-6">
                Notre mission est simple : démocratiser l&apos;excellence. Pourquoi le thé 
                d&apos;exception devrait-il être réservé à une élite ? Nous avons créé Orthéa 
                pour que chacun puisse accéder à cette expérience transcendante, à un prix juste.
              </p>
              <p className="font-serif text-lg text-orthea-ink/70">
                Chaque mélange est le fruit d&apos;une sélection rigoureuse, d&apos;un savoir-faire 
                artisanal et d&apos;un profond respect pour les traditions qui ont façonné la culture 
                du thé à travers les siècles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="px-6 py-16 bg-orthea-porcelain/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl text-orthea-ink text-center mb-12">
            Nos Valeurs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orthea-jade text-white flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="font-display text-lg text-orthea-ink mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-orthea-ink/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le Processus */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl text-orthea-ink text-center mb-12">
            De la Feuille à la Tasse
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="font-display text-lg text-orthea-jade mb-2">Sélection</h3>
              <p className="text-sm text-orthea-ink/60">
                Visite personnelle des jardins et sélection manuelle des meilleures récoltes
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🍂</div>
              <h3 className="font-display text-lg text-orthea-jade mb-2">Traitement</h3>
              <p className="text-sm text-orthea-ink/60">
                Respect des méthodes traditionnelles de séchage et de fermentation
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="font-display text-lg text-orthea-jade mb-2">Conditionnement</h3>
              <p className="text-sm text-orthea-ink/60">
                Emballage hermétique en Suisse pour préserver fraîcheur et arômes
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-6xl mb-4">🍵</div>
              <h3 className="font-display text-lg text-orthea-jade mb-2">Dégustation</h3>
              <p className="text-sm text-orthea-ink/60">
                Un moment de pur plaisir dans votre tasse
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-orthea-jade to-orthea-jade/90">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl lg:text-4xl mb-6">
            Rejoignez l&apos;Aventure Orthéa
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Découvrez notre collection et laissez-vous transporter par l&apos;excellence de nos thés
          </p>
          <Button variant="secondary" size="lg" href="/boutique">
            Explorer la Collection
          </Button>
        </div>
      </section>
    </div>
  );
}
