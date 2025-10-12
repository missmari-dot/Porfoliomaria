# Portfolio de Mariama Koulibaly

Un portfolio moderne et responsive pour présenter mes compétences et projets en tant qu'étudiante en génie logiciel.

## 🚀 Fonctionnalités

### ✨ Design & Interface
- **Design moderne et responsive** - Compatible avec tous les appareils
- **Animations fluides** - Utilisation d'AOS (Animate On Scroll) et CSS animations
- **Effet typewriter** - Animation de texte dynamique dans le header
- **Thème cohérent** - Palette de couleurs professionnelle
- **Navigation fluide** - Scroll smooth entre les sections

### 🎯 Sections
1. **Header** - Présentation avec animation typewriter
2. **À propos** - Informations personnelles et formation
3. **Compétences** - Technologies maîtrisées organisées par catégories
4. **Portfolio** - Projets avec système de filtrage
5. **Contact** - Formulaire de contact fonctionnel
6. **Footer** - Liens sociaux et informations

### 🛠️ Fonctionnalités Techniques
- **Filtrage de projets** - Par catégorie (Web, Applications, Jeux)
- **Formulaire de contact** - Validation côté client et envoi via Formspree
- **Modales de projets** - Détails supplémentaires pour chaque projet
- **Preloader** - Animation de chargement
- **Bouton "Retour en haut"** - Navigation rapide
- **Notifications** - Feedback utilisateur pour les actions
- **Optimisation des performances** - Lazy loading et optimisations

## 🏗️ Structure du Projet

```
Mon porfolio/
├── index.html                 # Page principale
├── assets/
│   ├── css/
│   │   ├── style.css         # Styles Bootstrap personnalisés
│   │   └── custom.css        # Styles personnalisés avancés
│   ├── js/
│   │   ├── config.js         # Configuration et utilitaires
│   │   ├── script.js         # Logique principale
│   │   └── typewritter.js    # Animation typewriter
│   ├── imgs/                 # Images du portfolio
│   └── docs/                 # Documents (CV, etc.)
├── README.md                 # Documentation
└── package.json             # Dépendances npm
```

## 🎨 Technologies Utilisées

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Styles avancés avec Flexbox/Grid
- **JavaScript (ES6+)** - Interactivité et animations
- **jQuery** - Manipulation DOM simplifiée
- **Bootstrap 4** - Framework CSS responsive

### Bibliothèques
- **Typewriter Effect** - Animation de texte
- **AOS (Animate On Scroll)** - Animations au scroll
- **Font Awesome** - Icônes vectorielles
- **Google Fonts** - Typographie

### Services
- **Formspree** - Gestion des formulaires de contact
- **GitHub Pages** - Hébergement (optionnel)

## 🚀 Installation et Utilisation

### Prérequis
- Navigateur web moderne
- Serveur web local (optionnel pour le développement)

### Installation
1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/portfolio.git
   cd portfolio
   ```

2. **Ouvrir le projet**
   - Ouvrir `index.html` dans un navigateur
   - Ou utiliser un serveur local :
     ```bash
     # Avec Python
     python -m http.server 8000
     
     # Avec Node.js (http-server)
     npx http-server
     
     # Avec PHP
     php -S localhost:8000
     ```

3. **Accéder au portfolio**
   - Navigateur : `file:///chemin/vers/index.html`
   - Serveur local : `http://localhost:8000`

## ⚙️ Configuration

### Personnalisation des informations
Modifier le fichier `assets/js/config.js` :

```javascript
const PortfolioConfig = {
    personal: {
        name: "Votre Nom",
        title: "Votre Titre",
        email: "votre.email@example.com",
        // ... autres informations
    }
};
```

### Ajout de projets
Modifier le tableau `TabProject` dans `assets/js/script.js` :

```javascript
const TabProject = [
    {
        link: 'https://votre-projet.com',
        img: 'assets/imgs/votre-projet.jpg',
        title: 'Nom du Projet',
        desc: 'Description du projet',
        category: 'web', // web, app, game
        technologies: ['HTML', 'CSS', 'JavaScript']
    }
];
```

### Configuration du formulaire de contact
1. Créer un compte sur [Formspree](https://formspree.io/)
2. Remplacer l'endpoint dans `index.html` :
   ```html
   <form action="https://formspree.io/f/VOTRE_ID">
   ```

## 🎨 Personnalisation du Design

### Couleurs
Modifier les variables CSS dans `assets/css/custom.css` :

```css
:root {
    --primary-color: #695aa6;
    --secondary-color: #7d83af;
    --accent-color: #ff6d02;
    /* ... autres couleurs */
}
```

### Animations
Ajuster les paramètres dans `assets/js/config.js` :

```javascript
animations: {
    typewriterSpeed: 75,
    scrollOffset: 70,
    animationDuration: 800
}
```

## 📱 Responsive Design

Le portfolio est entièrement responsive avec des breakpoints pour :
- **Mobile** : < 768px
- **Tablet** : 768px - 992px
- **Desktop** : > 992px

## 🔧 Optimisations

### Performance
- **Lazy loading** des images
- **Minification** des assets (recommandée pour la production)
- **Compression** des images
- **Cache** des ressources statiques

### SEO
- **Meta tags** optimisés
- **Structure sémantique** HTML5
- **Alt text** pour toutes les images
- **Schema markup** (à ajouter)

## 🐛 Dépannage

### Problèmes courants

1. **Animation typewriter ne fonctionne pas**
   - Vérifier que la bibliothèque Typewriter est chargée
   - Contrôler la console pour les erreurs JavaScript

2. **Formulaire de contact ne fonctionne pas**
   - Vérifier l'endpoint Formspree
   - Contrôler la configuration CORS

3. **Images ne s'affichent pas**
   - Vérifier les chemins des images
   - S'assurer que les fichiers existent

## 📈 Améliorations Futures

- [ ] Mode sombre/clair
- [ ] Multilingue (FR/EN)
- [ ] Blog intégré
- [ ] Système de commentaires
- [ ] Analytics intégrés
- [ ] PWA (Progressive Web App)
- [ ] Tests automatisés

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

**Mariama Koulibaly**
- Email : mariama.koulibaly@email.com
- LinkedIn : [Mariama Koulibaly](https://www.linkedin.com/in/mariama-koulibaly-892a83370/)
- GitHub : [missmari-dot](https://github.com/missmari-dot)

---

⭐ **N'hésitez pas à donner une étoile si ce projet vous a aidé !**