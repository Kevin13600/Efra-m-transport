# Transport Herzberg - Site Web

Site web multilingue (Français, Anglais, Hébreu) pour l'entreprise de transport Herzberg, développé avec React et TypeScript.

## 🌟 Fonctionnalités

- Interface utilisateur moderne et responsive
- Support multilingue (FR, EN, HE) avec changement de direction RTL/LTR automatique
- Formulaire de demande de devis avec envoi d'email
- Contact direct via WhatsApp
- Carrousel de témoignages clients
- Optimisé pour le SEO
- Design adapté aux standards modernes du web

## 🛠 Technologies Utilisées

- **Frontend**
  - React 18
  - TypeScript
  - TailwindCSS
  - react-i18next
  - react-helmet-async
  - react-slick

- **Backend**
  - Node.js
  - Express
  - Nodemailer

## 📋 Prérequis

- Node.js (v16 ou supérieur)
- npm ou yarn
- Compte Gmail pour l'envoi d'emails

## 🚀 Installation

1. **Cloner le projet**
```bash
git clone [url-du-repo]
cd herzberg-transport
```

2. **Installer les dépendances**
```bash
# Installation des dépendances frontend
npm install

# Installation des dépendances backend
cd server
npm install
```

3. **Configuration**
```bash
# Copier le fichier d'exemple de configuration
cp .env.example .env
```
Puis modifiez le fichier `.env` avec vos informations :
- Configurez les informations Gmail pour l'envoi d'emails
- Ajustez les autres paramètres si nécessaire

## 🔧 Configuration des Emails

1. Activez l'authentification à deux facteurs sur votre compte Gmail
2. Générez un mot de passe d'application :
   - Allez dans les paramètres de votre compte Google
   - Sécurité > Mots de passe des applications
   - Générez un nouveau mot de passe
3. Utilisez ce mot de passe dans votre fichier `.env`

## 💻 Développement

1. **Démarrer le serveur de développement frontend**
```bash
npm run dev
```

2. **Démarrer le serveur backend**
```bash
cd server
npm run dev
```

Le site sera accessible à l'adresse : `http://localhost:5173`
L'API sera accessible à l'adresse : `http://localhost:3001`

## 🌐 Production

1. **Build du frontend**
```bash
npm run build
```

2. **Démarrer en production**
```bash
# Frontend
npm run preview

# Backend
cd server
npm start
```

## 📱 Fonctionnalités Principales

### Multilangue
- Support complet du français, anglais et hébreu
- Changement automatique de la direction du texte (RTL/LTR)
- Interface utilisateur adaptée à chaque langue

### Formulaire de Contact
- Formulaire de demande de devis
- Envoi d'emails automatique
- Option de contact direct via WhatsApp

### Témoignages
- Carrousel de témoignages clients
- Affichage adapté pour l'hébreu (RTL)
- Navigation intuitive

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request


## 📞 Contact

Pour toute question ou support, contactez-nous via :
- WhatsApp : +972 52-546-4894
- Email : [akoltov1967@gmail.com](mailto:akoltov1967@gmail.com)
