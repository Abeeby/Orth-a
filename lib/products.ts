export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  category: string;
  origin: string;
  brewingTemp: number;
  brewingTime: string;
  caffeineLevel: "none" | "low" | "medium" | "high";
  flavor: string[];
  benefits: string[];
  inStock: boolean;
}

export const products: Product[] = [
  // Thés Noirs
  {
    id: "1",
    name: "Darjeeling Premier Flush",
    slug: "darjeeling-premier-flush",
    description: "Le champagne des thés, récolte printanière aux notes florales délicates",
    longDescription: "Notre Darjeeling Premier Flush capture l'essence même du renouveau printanier. Cultivé entre 1800 et 2100 mètres d'altitude dans les jardins certifiés biologiques de Darjeeling, ce thé incarne la rencontre entre tradition séculaire et agriculture responsable.",
    price: 10,
    category: "Thés Noirs",
    origin: "Inde - Darjeeling",
    brewingTemp: 85,
    brewingTime: "3 minutes",
    caffeineLevel: "medium",
    flavor: ["Floral", "Fruité", "Délicat"],
    benefits: ["Antioxydants", "Concentration", "Énergie douce"],
    inStock: true,
  },
  {
    id: "2",
    name: "Earl Grey Bergamote",
    slug: "earl-grey-bergamote",
    description: "Thé noir de Ceylan sublimé par l'essence naturelle de bergamote",
    longDescription: "Un classique réinventé avec élégance. Notre Earl Grey marie la robustesse du thé noir de Ceylan à la fraîcheur citronnée de la bergamote de Calabre.",
    price: 10,
    category: "Thés Noirs",
    origin: "Sri Lanka",
    brewingTemp: 95,
    brewingTime: "4 minutes",
    caffeineLevel: "high",
    flavor: ["Agrumes", "Bergamote", "Corsé"],
    benefits: ["Digestion", "Antistress", "Vitalité"],
    inStock: true,
  },

  // Thés Verts
  {
    id: "3",
    name: "Sencha Impérial",
    slug: "sencha-imperial",
    description: "Thé vert japonais d'ombre aux notes umami incomparables",
    longDescription: "Cultivé sous voiles d'ombrage pendant 21 jours, notre Sencha Impérial développe une douceur umami et une couleur jade hypnotique. Un voyage sensoriel au cœur des plantations de Shizuoka.",
    price: 10,
    category: "Thés Verts",
    origin: "Japon - Shizuoka",
    brewingTemp: 70,
    brewingTime: "90 secondes",
    caffeineLevel: "medium",
    flavor: ["Umami", "Végétal", "Doux"],
    benefits: ["Métabolisme", "Détox", "Anti-âge"],
    inStock: true,
  },
  {
    id: "4",
    name: "Gunpowder Temple of Heaven",
    slug: "gunpowder-temple-heaven",
    description: "Perles de thé vert roulées, fraîcheur intense et notes grillées",
    longDescription: "Les feuilles de ce thé vert chinois sont roulées en petites perles qui se déploient majestueusement dans l'eau chaude, libérant des arômes frais et légèrement fumés.",
    price: 10,
    category: "Thés Verts",
    origin: "Chine - Zhejiang",
    brewingTemp: 80,
    brewingTime: "2-3 minutes",
    caffeineLevel: "medium",
    flavor: ["Frais", "Grillé", "Herbacé"],
    benefits: ["Antioxydants", "Minceur", "Clarté mentale"],
    inStock: true,
  },

  // Thés Blancs
  {
    id: "5",
    name: "Bai Mudan - Pivoine Blanche",
    slug: "bai-mudan-pivoine-blanche",
    description: "Le joyau de notre collection, délicatesse infinie et arômes sucrés",
    longDescription: "Composé de bourgeons argentés et de jeunes feuilles, notre Bai Mudan offre une expérience gustative d'une pureté absolue. Récolté une fois l'an dans les montagnes brumeuses du Fujian.",
    price: 10,
    category: "Thés Blancs",
    origin: "Chine - Fujian",
    brewingTemp: 80,
    brewingTime: "5-7 minutes",
    caffeineLevel: "low",
    flavor: ["Miellé", "Fruité", "Floral"],
    benefits: ["Anti-âge", "Hydratation", "Relaxation"],
    inStock: true,
  },

  // Oolongs
  {
    id: "6",
    name: "Oolong Dong Ding",
    slug: "oolong-dong-ding",
    description: "Perles de jade taïwanaises, équilibre parfait entre fraîcheur et rondeur",
    longDescription: "Ces perles de jade, roulées à la main selon la tradition, se déploient dans votre tasse pour révéler un bouquet aromatique d'une complexité envoûtante.",
    price: 10,
    category: "Oolongs",
    origin: "Taiwan - Nantou",
    brewingTemp: 90,
    brewingTime: "30s-2min",
    caffeineLevel: "medium",
    flavor: ["Floral", "Beurré", "Crémeux"],
    benefits: ["Digestion", "Cholestérol", "Concentration"],
    inStock: true,
  },

  // Infusions
  {
    id: "7",
    name: "Rooibos Vanille Bourbon",
    slug: "rooibos-vanille-bourbon",
    description: "Infusion sans théine enrichie de vanille Bourbon de Madagascar",
    longDescription: "Notre Rooibos rouge d'Afrique du Sud, enrichi de gousses de vanille Bourbon, offre un moment de réconfort absolu à toute heure.",
    price: 10,
    category: "Infusions",
    origin: "Afrique du Sud",
    brewingTemp: 95,
    brewingTime: "7-10 minutes",
    caffeineLevel: "none",
    flavor: ["Vanille", "Biscuité", "Noisette"],
    benefits: ["Sans théine", "Anti-inflammatoire", "Minéraux"],
    inStock: true,
  },
  {
    id: "8",
    name: "Camomille Miel",
    slug: "camomille-miel",
    description: "Fleurs de camomille entières pour un sommeil réparateur",
    longDescription: "Des fleurs de camomille soigneusement sélectionnées pour leurs propriétés apaisantes, avec une touche de miel naturel.",
    price: 10,
    category: "Infusions",
    origin: "Égypte",
    brewingTemp: 100,
    brewingTime: "5-7 minutes",
    caffeineLevel: "none",
    flavor: ["Miellé", "Floral", "Doux"],
    benefits: ["Sommeil", "Apaisement", "Digestion"],
    inStock: true,
  },
];

export const categories = [
  "Tous",
  "Thés Noirs",
  "Thés Verts",
  "Thés Blancs",
  "Oolongs",
  "Infusions",
];

export const filterProducts = (
  products: Product[],
  category: string,
  maxPrice: number,
  caffeineLevel?: string
): Product[] => {
  return products.filter((product) => {
    const categoryMatch = category === "Tous" || product.category === category;
    const priceMatch = product.price <= maxPrice;
    const caffeineMatch = !caffeineLevel || product.caffeineLevel === caffeineLevel;
    
    return categoryMatch && priceMatch && caffeineMatch;
  });
}; 