# Orthéa - E-commerce de Thés Premium

Site e-commerce moderne pour Orthéa, spécialisé dans les thés premium alliant tradition orientale et précision suisse.

## 🌟 État du Projet

### ✅ Fonctionnalités Implémentées

#### 1. **Infrastructure de Base**
- ✅ Next.js 14 avec App Router
- ✅ TypeScript pour la sécurité du typage
- ✅ Tailwind CSS v3 (corrigé) pour le styling
- ✅ Polices Google Fonts personnalisées (Playfair Display, Montserrat, Crimson Text, Dancing Script)

#### 2. **Système de Panier (Cart)**
- ✅ Context API pour la gestion d'état globale
- ✅ Persistance dans localStorage
- ✅ Fonctionnalités complètes :
  - Ajout/suppression de produits
  - Modification des quantités
  - Calcul automatique des totaux
  - Indicateur du nombre d'articles
- ✅ Composants UI :
  - `CartIcon` avec badge de notification
  - `CartDrawer` panneau latéral interactif

#### 3. **Pages E-commerce**
- ✅ Page d'accueil avec sections marketing
- ✅ Page boutique avec :
  - Grille de produits responsive
  - Système de filtres (catégorie, prix, caféine)
  - Barre de recherche
- ✅ Page checkout complète avec :
  - Formulaire multi-étapes
  - Validation des champs
  - Simulation de paiement
- ✅ Page de confirmation de commande

#### 4. **Composants Réutilisables**
- ✅ `MainLayout` avec navigation et footer
- ✅ `NavBar` responsive avec menu mobile
- ✅ `ProductCard` avec intégration panier
- ✅ `FilterSidebar` pour les filtres produits
- ✅ Composants UI de base (Button, etc.)

## 🚀 Installation et Démarrage

```bash
# Cloner le repository
git clone https://github.com/Abeeby/Orth-a.git
cd Orth-a

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build
```

Le site sera accessible sur `http://localhost:3000`

## 📋 Prochaines Étapes de Développement

### Phase 1 : Authentification (Priorité Haute)
- [ ] Intégration NextAuth.js ou Clerk
- [ ] Pages login/register
- [ ] Gestion des sessions utilisateur
- [ ] Protection des routes privées
- [ ] Page compte utilisateur

### Phase 2 : Base de Données ✅ (Complétée)
- [x] Configuration Prisma + PostgreSQL
- [x] Schémas complets créés (User, Product, Order, Cart, Review, etc.)
- [x] Script de seed pour migration des données
- [x] API Routes de base (products)
- [x] Configuration Supabase et migration réelle
- [x] Base de données peuplée avec données de test
- [ ] API Routes complètes (orders, cart, reviews)
- [ ] Migration du frontend pour utiliser la BDD

### Phase 3 : Intégration Paiement (Priorité Haute)
- [ ] Stripe ou PayPal integration
- [ ] Webhook pour confirmation paiement
- [ ] Gestion des erreurs de paiement
- [ ] Factures PDF automatiques

### Phase 4 : Fonctionnalités Avancées
- [ ] **Système de favoris**
  - Sauvegarde en base de données
  - Page "Mes favoris"
- [ ] **Avis et notations**
  - Système 5 étoiles
  - Modération des commentaires
- [ ] **Newsletter**
  - Intégration SendGrid/Mailchimp
  - Templates d'emails
- [ ] **Historique des commandes**
  - Suivi des commandes
  - Récommander facilement

### Phase 5 : Optimisations
- [ ] **Performance**
  - Images optimisées avec next/image
  - Lazy loading
  - Mise en cache API
- [ ] **SEO**
  - Métadonnées dynamiques
  - Sitemap.xml
  - Schema.org pour produits
- [ ] **Analytics**
  - Google Analytics 4
  - Événements e-commerce

### Phase 6 : Features Mobiles
- [ ] **PWA**
  - Manifest.json
  - Service Worker
  - Installation mobile

## 🛠️ Technologies Utilisées

- **Frontend**: Next.js 14, React 19, TypeScript
- **Styling**: Tailwind CSS v3, CSS Modules
- **State Management**: React Context API
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Montserrat, Crimson Text, Dancing Script)

## 📂 Structure du Projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal avec CartProvider
│   ├── page.tsx          # Page d'accueil
│   ├── boutique/         # Page boutique
│   ├── checkout/         # Pages checkout
│   └── ...
├── components/           # Composants React
│   ├── layout/          # Composants de mise en page
│   ├── sections/        # Sections de page
│   └── ui/              # Composants UI réutilisables
├── lib/                 # Utilitaires et contextes
│   ├── contexts/        # React Contexts
│   └── products.ts      # Données produits
├── public/              # Assets statiques
└── styles/              # Styles globaux
```

## 🔧 Variables d'Environnement (À configurer)

```env
# Base de données
DATABASE_URL=

# Authentification
NEXTAUTH_URL=
NEXTAUTH_SECRET=

# Paiement
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=

# Email
SENDGRID_API_KEY=

# Analytics
NEXT_PUBLIC_GA_ID=
```

## 🐛 Problèmes Connus

- Le système de paiement est actuellement une simulation
- Les données produits sont stockées localement (pas de base de données)
- L'authentification n'est pas encore implémentée

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📝 License

Ce projet est propriétaire. Tous droits réservés à Orthéa.

---

Développé avec ❤️ pour Orthéa - L'Orient rencontre la Suisse
