# AB Auto — site de location de voiture

Site vitrine + réservation pour **AB Auto**, location de voiture à l'aéroport
Houari Boumediene (Alger). React + Vite + TypeScript, trilingue **FR / AR / EN**
(l'arabe bascule automatiquement en RTL), thème sombre, accent rouge.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:5173

## Build de production

```bash
npm run build      # génère /dist
npm run preview    # prévisualise le build
```

## Déploiement Vercel

1. Pousser le repo sur GitHub (voir plus bas).
2. Sur https://vercel.com → **Add New… → Project** → importer `samdem-ai/ab_auto`.
3. Vercel détecte Vite automatiquement :
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Deploy**. Le fichier `vercel.json` gère déjà les routes SPA.

## Modifier le contenu

| Quoi | Fichier |
|------|---------|
| Voitures, prix, specs | `src/data/cars.ts` |
| Téléphones, WhatsApp, réseaux, adresse, map | `src/config.ts` |
| Textes FR | `src/i18n/fr.json` |
| Textes AR | `src/i18n/ar.json` |
| Textes EN | `src/i18n/en.json` |
| Couleurs / design (accent, fond…) | `src/styles/global.css` (variables `:root`) |
| Photos des voitures | `public/assets/cars/<id>.jpg` (remplacer par tes propres photos, même nom) |
| Logo | `public/assets/brand/` |

### Numéro WhatsApp

Dans `src/config.ts`, `BRAND.whatsapp` est au format international sans `+` ni
espaces : `213551789895`. À l'envoi du formulaire, un message pré-rempli
(voiture, dates, nom, téléphone) s'ouvre dans WhatsApp vers ce numéro.

### Remplacer les photos des voitures

Les photos actuelles proviennent de Wikimedia Commons (modèles réels, à titre
illustratif). Pour mettre **tes vraies voitures** : dépose un JPG au même nom
dans `public/assets/cars/` (`symbol.jpg`, `picanto.jpg`, `tipo.jpg`,
`corsa.jpg`, `clio2023.jpg`, `p208.jpg`, `clio2024.jpg`, `golf8.jpg`),
idéalement en 1200×750.

## Stack

React 18 · Vite 5 · TypeScript · react-i18next · framer-motion (léger) · CSS
maison (aucun framework UI).
