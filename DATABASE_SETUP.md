# Configuration de la Base de Données avec Supabase

## 🚀 Étapes de Configuration

### 1. Créer un compte Supabase

1. Aller sur [supabase.com](https://supabase.com)
2. Créer un compte gratuit
3. Créer un nouveau projet

### 2. Récupérer l'URL de la base de données

Dans votre projet Supabase :
1. Aller dans **Settings** → **Database**
2. Copier la **Connection string** (URI)
3. Elle ressemble à : `postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres`

### 3. Configurer les variables d'environnement

Créer un fichier `.env` à la racine du projet :

```env
# Database
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"

# Supabase (optionnel pour l'authentification future)
NEXT_PUBLIC_SUPABASE_URL="https://[YOUR-PROJECT-REF].supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="[YOUR-ANON-KEY]"
```

**Note** : 
- `DATABASE_URL` utilise le pooler de connexions (pgbouncer)
- `DIRECT_URL` est pour les migrations

### 4. Mettre à jour le schéma Prisma

Dans `prisma/schema.prisma`, ajouter après la datasource :

```prisma
datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}
```

### 5. Générer le client Prisma

```bash
npm run db:generate
```

### 6. Pousser le schéma vers la base de données

```bash
npm run db:push
```

### 7. Peupler la base de données

```bash
npm run db:seed
```

### 8. Explorer la base de données

```bash
npm run db:studio
```

Cela ouvre Prisma Studio dans votre navigateur pour visualiser et éditer les données.

## 🔧 Commandes Utiles

- `npm run db:push` : Synchronise le schéma sans migration
- `npm run db:migrate` : Crée et applique une migration
- `npm run db:seed` : Peuple la base avec des données de test
- `npm run db:studio` : Ouvre l'interface graphique
- `npm run db:generate` : Génère le client TypeScript

## 📝 Variables d'Environnement pour Vercel

Dans Vercel Dashboard :
1. Aller dans **Settings** → **Environment Variables**
2. Ajouter :
   - `DATABASE_URL`
   - `DIRECT_URL`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 🎯 Prochaines Étapes

Une fois la base de données configurée, nous pourrons :
1. Créer les API Routes pour accéder aux données
2. Migrer le panier pour persister en base de données
3. Implémenter l'authentification
4. Gérer les commandes réelles

## ⚠️ Sécurité

- Ne jamais committer le fichier `.env`
- Utiliser des variables d'environnement différentes pour dev/prod
- Activer Row Level Security (RLS) dans Supabase pour la production