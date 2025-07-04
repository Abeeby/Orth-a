export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'art-infusion-parfaite',
    title: "L'Art de l'Infusion Parfaite : Guide Complet",
    excerpt: "Découvrez les secrets d'une infusion réussie pour révéler toutes les saveurs de vos thés préférés.",
    image: '/images/blog/infusion-guide.jpg',
    category: 'Guide',
    author: 'Amin Tajeddin',
    date: '2024-03-15',
    readTime: '8 min',
    tags: ['infusion', 'guide', 'technique', 'débutant'],
    content: `
# L'Art de l'Infusion Parfaite

L'infusion du thé est un art millénaire qui demande patience et précision. Chaque type de thé a ses propres exigences pour révéler pleinement ses arômes et ses bienfaits.

## Les Paramètres Essentiels

### 1. La Température de l'Eau
La température est cruciale pour éviter de brûler les feuilles délicates ou de ne pas extraire suffisamment les arômes :

- **Thé vert** : 70-80°C - Une eau trop chaude rendrait le thé amer
- **Thé blanc** : 75-85°C - Pour préserver les notes délicates
- **Thé Oolong** : 85-95°C - Pour libérer la complexité des arômes
- **Thé noir** : 90-95°C - Pour une extraction complète
- **Pu-erh** : 95-100°C - Pour réveiller les feuilles fermentées

### 2. Le Temps d'Infusion
Chaque seconde compte :

- **Thé vert** : 2-3 minutes
- **Thé blanc** : 4-6 minutes
- **Thé Oolong** : 3-5 minutes
- **Thé noir** : 3-5 minutes
- **Pu-erh** : 3-5 minutes (première infusion)

### 3. La Quantité de Thé
La règle générale est de 2-3g de thé pour 200ml d'eau, mais cela peut varier selon vos préférences et le type de thé.

## Les Méthodes d'Infusion

### Méthode Occidentale
Simple et pratique pour le quotidien :
1. Préchauffez votre théière
2. Ajoutez le thé
3. Versez l'eau à la bonne température
4. Respectez le temps d'infusion
5. Filtrez et servez

### Méthode Gong Fu Cha
Pour les amateurs exigeants :
1. Utilisez plus de thé (5-7g pour 100ml)
2. Infusions courtes et multiples (30s à 1min)
3. Chaque infusion révèle de nouvelles saveurs
4. Jusqu'à 8-10 infusions possibles

## Conseils de Pro

1. **L'eau** : Utilisez une eau filtrée ou de source, jamais distillée
2. **Le préchauffage** : Toujours préchauffer vos ustensiles
3. **Le stockage** : Conservez vos thés à l'abri de la lumière, de l'humidité et des odeurs
4. **L'observation** : Regardez les feuilles s'ouvrir, c'est le spectacle de l'infusion

## Les Erreurs à Éviter

- Ne jamais réutiliser l'eau déjà bouillie
- Ne pas presser les feuilles de thé
- Éviter les contenants en métal (sauf inox)
- Ne pas laisser infuser trop longtemps

L'infusion parfaite est celle qui vous plaît. N'hésitez pas à expérimenter et à ajuster selon vos goûts !
    `
  },
  {
    slug: 'voyage-jardins-darjeeling',
    title: 'Voyage dans les Jardins de Darjeeling',
    excerpt: 'Partez à la découverte des mythiques jardins de thé de Darjeeling, perchés sur les contreforts de l\'Himalaya.',
    image: '/images/blog/darjeeling-gardens.jpg',
    category: 'Voyage',
    author: 'Semi Tajeddin',
    date: '2024-03-10',
    readTime: '12 min',
    tags: ['voyage', 'darjeeling', 'inde', 'terroir'],
    content: `
# Voyage dans les Jardins de Darjeeling

Surnommé le "Champagne des thés", le Darjeeling est cultivé sur les pentes escarpées de l'Himalaya, entre 600 et 2000 mètres d'altitude. Cette région unique produit certains des thés les plus prisés au monde.

## L'Histoire d'une Région d'Exception

### Les Origines Britanniques
C'est en 1841 que le Dr Campbell, chirurgien britannique, planta les premiers théiers chinois à Darjeeling. Le climat frais et brumeux, combiné au sol riche, créa des conditions idéales pour produire un thé aux caractéristiques uniques.

### L'Évolution des Jardins
Aujourd'hui, 87 jardins certifiés produisent le véritable Darjeeling, chacun avec son terroir distinct :
- **Castleton** : Notes muscatées légendaires
- **Margaret's Hope** : Élégance florale
- **Jungpana** : Fraîcheur montagnarde
- **Thurbo** : Complexité aromatique

## Les Saisons de Récolte

### First Flush (Mars-Avril)
Le "premier bourgeon" du printemps :
- Feuilles vert clair délicates
- Notes florales et végétales
- Liqueur claire et vive
- Le plus recherché des connaisseurs

### Second Flush (Mai-Juin)
La récolte de l'été :
- Feuilles plus matures
- Fameuses notes muscatées
- Liqueur ambrée
- Équilibre parfait

### Monsoon Flush (Juillet-Septembre)
Récolte de la mousson :
- Production plus importante
- Caractère plus corsé
- Idéal pour les mélanges

### Autumn Flush (Octobre-Novembre)
La dernière récolte :
- Feuilles cuivrées
- Notes boisées et épicées
- Douceur automnale

## Le Processus de Production

### La Cueillette
"Two leaves and a bud" - la règle d'or :
- Cueillette manuelle minutieuse
- 22 000 pousses pour 1kg de thé
- Travail des femmes expertes
- Tradition transmise de génération en génération

### La Transformation
1. **Flétrissage** : 12-16 heures pour réduire l'humidité
2. **Roulage** : Libération des huiles essentielles
3. **Oxydation** : Développement des arômes (partielle pour les Darjeeling)
4. **Séchage** : Fixation des saveurs
5. **Triage** : Classification par grades

## L'Impact Social et Environnemental

### Les Communautés
- 50 000 familles dépendent des jardins
- Écoles et dispensaires sur les plantations
- Préservation des traditions locales
- Commerce équitable en développement

### La Durabilité
- Agriculture biologique en expansion
- Protection de la biodiversité himalayenne
- Gestion durable de l'eau
- Lutte contre le changement climatique

## Déguster un Darjeeling

### Préparation Idéale
- Eau à 85-90°C
- 2,5g pour 200ml
- Infusion 3-4 minutes
- Sans lait ni sucre pour les First Flush
- Possible touche de lait pour les Second Flush

### Notes de Dégustation
Apprenez à reconnaître :
- L'astringence délicate
- Les notes fruitées (raisin, abricot)
- Les touches florales (jasmin, rose)
- La finale muscatée caractéristique

## L'Avenir du Darjeeling

Face aux défis climatiques et économiques, les jardins de Darjeeling s'adaptent :
- Innovation dans les méthodes de culture
- Valorisation du terroir unique
- Développement du tourisme responsable
- Protection de l'appellation d'origine

Chaque tasse de Darjeeling raconte l'histoire de ces montagnes mystiques, du travail patient des cueilleurs et de la magie d'un terroir unique au monde.
    `
  },
  {
    slug: 'bienfaits-the-vert-sante',
    title: 'Les Bienfaits du Thé Vert : Science et Tradition',
    excerpt: 'Explorez les vertus millénaires du thé vert confirmées par la science moderne.',
    image: '/images/blog/green-tea-benefits.jpg',
    category: 'Santé',
    author: 'Vionor Tajeddin',
    date: '2024-03-05',
    readTime: '10 min',
    tags: ['santé', 'thé vert', 'antioxydants', 'bien-être'],
    content: `
# Les Bienfaits du Thé Vert : Science et Tradition

Depuis plus de 4000 ans, le thé vert est vénéré en Asie pour ses propriétés médicinales. Aujourd'hui, la science moderne confirme ce que les anciens savaient intuitivement : le thé vert est un véritable élixir de santé.

## La Composition Unique du Thé Vert

### Les Polyphénols
Les stars du thé vert :
- **EGCG (Épigallocatéchine gallate)** : Le plus puissant antioxydant
- **Catéchines** : Protection cellulaire
- **Flavonoïdes** : Anti-inflammatoires naturels

### Les Autres Composés Actifs
- **L-théanine** : Acide aminé calmant unique au thé
- **Caféine** : 25-50mg par tasse (vs 95mg dans le café)
- **Vitamines** : C, B2, E, acide folique
- **Minéraux** : Potassium, calcium, phosphore, magnésium

## Les Bienfaits Scientifiquement Prouvés

### 1. Pouvoir Antioxydant
Le thé vert contient 10 fois plus d'antioxydants qu'une portion de fruits :
- Neutralisation des radicaux libres
- Protection contre le vieillissement cellulaire
- Prévention des dommages à l'ADN
- Soutien du système immunitaire

### 2. Santé Cardiovasculaire
Études sur 40 000 adultes japonais :
- Réduction de 26% du risque cardiovasculaire
- Diminution du cholestérol LDL
- Amélioration de la fonction endothéliale
- Régulation de la pression artérielle

### 3. Métabolisme et Poids
Effets thermogéniques documentés :
- Augmentation du métabolisme de 4-5%
- Oxydation des graisses améliorée de 17%
- Réduction de l'absorption des lipides
- Régulation de la glycémie

### 4. Fonction Cérébrale
La synergie caféine-théanine :
- Amélioration de la concentration
- Réduction du stress et de l'anxiété
- Protection contre les maladies neurodégénératives
- Amélioration de la mémoire

### 5. Prévention du Cancer
Études épidémiologiques prometteuses :
- Réduction du risque de certains cancers
- Inhibition de la croissance tumorale
- Protection de l'ADN
- Stimulation de l'apoptose des cellules cancéreuses

## Les Différents Types de Thé Vert et Leurs Spécificités

### Sencha
- Le plus consommé au Japon
- Riche en vitamine C
- Équilibre parfait catéchines/théanine

### Matcha
- Thé vert en poudre ultra-concentré
- 137x plus d'EGCG qu'un thé vert classique
- Énergie soutenue sans nervosité

### Gyokuro
- Cultivé à l'ombre
- Très riche en théanine
- Effet calmant prononcé

### Longjing (Dragon Well)
- Thé vert chinois prestigieux
- Doux et peu astringent
- Riche en acides aminés

## Comment Maximiser les Bienfaits

### Préparation Optimale
1. **Température** : 70-80°C pour préserver les antioxydants
2. **Durée** : 2-3 minutes (plus long = plus de catéchines)
3. **Quantité** : 2-3g pour 200ml
4. **Fréquence** : 3-4 tasses par jour pour bénéfices optimaux

### Timing Idéal
- **Matin** : Boost d'énergie et concentration
- **Après-midi** : Maintien de la vigilance sans insomnie
- **Avec les repas** : Amélioration de la digestion
- **Éviter** : Le soir (sauf thés décaféinés)

### Associations Bénéfiques
- **Citron** : Augmente l'absorption des catéchines de 80%
- **Miel** : Propriétés antibactériennes synergiques
- **Menthe** : Amélioration de la digestion
- **Gingembre** : Effet anti-inflammatoire renforcé

## Précautions et Contre-indications

### Interactions Médicamenteuses
- Anticoagulants (vitamine K)
- Suppléments de fer (tanins)
- Certains antibiotiques

### Populations Sensibles
- Femmes enceintes : limiter à 2 tasses/jour
- Personnes anémiques : éviter pendant les repas
- Sensibles à la caféine : préférer les thés décaféinés

## Intégrer le Thé Vert au Quotidien

### Rituels Bien-être
1. **Méditation matinale** : Une tasse en pleine conscience
2. **Pause active** : Remplacer le café de l'après-midi
3. **Routine beauté** : Masques et toniques au thé vert
4. **Cuisine santé** : Smoothies, desserts, plats au matcha

### Qualité vs Quantité
Mieux vaut 2-3 tasses de thé vert de qualité que 5-6 tasses de thé ordinaire :
- Choisir des thés biologiques
- Préférer les feuilles entières
- Conserver correctement
- Respecter les dates de fraîcheur

Le thé vert n'est pas qu'une boisson, c'est un mode de vie qui allie plaisir et santé. En l'intégrant intelligemment à votre quotidien, vous profitez d'une tradition millénaire soutenue par la science moderne.
    `
  }
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getRelatedPosts(currentSlug: string, limit: number = 2): BlogPost[] {
  const currentPost = getBlogPost(currentSlug)
  if (!currentPost) return []
  
  return blogPosts
    .filter(post => post.slug !== currentSlug)
    .filter(post => 
      post.tags.some(tag => currentPost.tags.includes(tag)) ||
      post.category === currentPost.category
    )
    .slice(0, limit)
} 