# Guide de Déploiement Vercel - Orthéa

## 🚀 Déploiement Rapide (Recommandé)

### Option 1 : Via l'Interface Vercel (Plus Simple)

1. **Connecter GitHub à Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Se connecter avec GitHub
   - Cliquer sur "Import Project"
   - Sélectionner le repository `Orth-a`

2. **Configuration du Projet**
   - Framework Preset: `Next.js` (auto-détecté)
   - Root Directory: `./` (laisser vide)
   - Build Command: `npm run build` (par défaut)
   - Output Directory: `.next` (par défaut)

3. **Variables d'Environnement**
   - Pour l'instant, aucune variable n'est requise
   - Les futures variables seront ajoutées depuis le dashboard Vercel

4. **Deploy**
   - Cliquer sur "Deploy"
   - Attendre 2-3 minutes
   - Votre site sera disponible sur `https://[votre-projet].vercel.app`

### Option 2 : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Dans le dossier du projet
vercel

# Suivre les instructions :
# - Se connecter à votre compte
# - Confirmer le projet
# - Laisser les paramètres par défaut
```

## 🌐 Configuration du Domaine Personnalisé

1. Dans le dashboard Vercel, aller dans "Settings" → "Domains"
2. Ajouter votre domaine : `orthea.ch` ou `www.orthea.ch`
3. Configurer les DNS selon les instructions Vercel

## 📊 Analytics et Monitoring

### Vercel Analytics (Gratuit)
1. Dans le dashboard, aller dans "Analytics"
2. Activer "Enable Analytics"
3. Le code est automatiquement injecté

### Monitoring des Erreurs
- Les erreurs de build sont visibles dans l'onglet "Functions"
- Les logs en temps réel dans "Functions" → "Logs"

## 🔧 Optimisations pour la Production

### 1. Images
- Placer les images dans `/public/images/`
- Utiliser `next/image` pour l'optimisation automatique
- Formats recommandés : WebP, AVIF

### 2. Performance
- Le site est déjà optimisé avec :
  - Code splitting automatique
  - Prefetching des liens
  - CSS optimisé avec Tailwind

### 3. SEO
À ajouter dans les prochaines phases :
- Sitemap dynamique
- Robots.txt
- Métadonnées Open Graph

## 🚨 Points d'Attention

1. **Variables d'Environnement**
   - Ne jamais committer de secrets dans le code
   - Utiliser le dashboard Vercel pour les variables sensibles

2. **Limites du Plan Gratuit**
   - 100GB de bande passante/mois
   - Parfait pour le développement et les tests

3. **Preview Deployments**
   - Chaque PR GitHub crée automatiquement un déploiement de preview
   - URL unique pour tester les changements

## 📈 Prochaines Étapes Post-Déploiement

1. **Tester sur Mobile**
   - Scanner le QR code dans Vercel
   - Vérifier la responsivité

2. **Partager pour Feedback**
   - Envoyer le lien aux parties prenantes
   - Collecter les retours utilisateurs

3. **Monitoring**
   - Vérifier les Web Vitals
   - Analyser le trafic initial

## 🆘 Dépannage

### Build Failed
- Vérifier les logs de build dans Vercel
- S'assurer que `npm run build` fonctionne localement
- Vérifier les versions de Node.js (18.x recommandé)

### 404 sur les Routes
- Les routes dynamiques Next.js sont automatiquement gérées
- Vérifier la casse des fichiers (sensible sur Vercel)

### Performance Lente
- Activer la région "Paris" (cdg1) pour l'Europe
- Vérifier la taille des images

## 📞 Support

- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Status : [vercel-status.com](https://www.vercel-status.com)
- Community : [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)

---

💡 **Tip** : Une fois déployé, activez les notifications Vercel sur GitHub pour être alerté des déploiements réussis ou échoués.