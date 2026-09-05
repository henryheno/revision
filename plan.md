# Plan d'Implémentation : Mode QCM (Choix Multiples)

Ce document détaille le plan de transformation de l'application de révision en une plateforme de QCM interactive avec génération intelligente de fausses réponses (distracteurs) basées sur les mots-clés.

---

## 1. Objectifs

1. **Passage au format QCM** :
   - Proposer 4 choix pour chaque question (1 assertion correcte + 3 distracteurs).
2. **Génération automatique des choix alternatifs** :
   - Analyser le vocabulaire et les mots-clés des réponses (ex: notions liées à l'audit, à la gouvernance, aux normes, etc.).
   - Piocher 3 réponses alternatives parmi les autres questions partageant des thématiques proches.
3. **Interface utilisateur & Gamification** :
   - Affichage de 4 options cliquables avec animations fluides.
   - Feedback immédiat : vert si correct, rouge si incorrect avec révélation de la bonne réponse.
   - Compteur de score en direct (ex: Score : 12 / 15).
   - Conservation de la synthèse vocale (lecture de la question et de la solution).
4. **Conservation de la navigation & du sommaire** :
   - Possibilité de réviser par chapitre ou sous-point spécifique depuis le menu latéral.

---

## 2. Architecture des Données

Chaque question sera enrichie dans `app.js` avec la structure suivante :

```javascript
{
    id: 1,
    chapitre: "Chapitre 1",
    sousPoint: "1. Introduction à l’audit informatique",
    question: "De quel verbe latin vient le mot « audit » ?",
    answer: "Il vient du verbe latin *audire*, qui signifie « écouter ».",
    options: [
        "Il vient du verbe latin *audire*, qui signifie « écouter ».",
        "Il est dérivé du mot latin *computare*, relatif au calcul.",
        "Il provient des directives du référentiel COBIT pour la gouvernance.",
        "Il s'agit d'une définition issue de la norme ISO 27001."
    ],
    correctIndex: 0 // Index de la bonne réponse après mélange
}
```

---

## 3. Étapes d'Exécution

### Phase 1 : Algorithme de génération des distracteurs (`builder.js`)
- Extraction et filtrage des mots-clés (exclusion des stopwords français).
- Calcul du score de similarité thématique entre les réponses du corpus.
- Sélection des 3 meilleures assertions alternatives + réponse exacte.
- Mélange aléatoire des 4 propositions avec la méthode de Fisher-Yates.

### Phase 2 : Refonte de l'interface (`index.html` et `style.css`)
- Remplacement du conteneur unique de carte par une structure de QCM :
  - En-tête avec question et bouton de répétition audio.
  - Grille/liste verticale de 4 boutons d'options ergonomiques.
  - Bannière de verdict avec explication complète.
  - Barre de score et indicateur de progression.
- Ajout des animations d'interaction (effet tactile, validation verte/rouge).

### Phase 3 : Logique d'interaction et Audio (`app.js`)
- Gestion du clic sur une proposition :
  - Contrôle et affichage du résultat en temps réel.
  - Mise à jour du score cumulé.
  - Lecture vocale de la réponse et du statut (réussi/manqué).
- Transitions avec les boutons Précédent/Suivant ou les touches du clavier.

### Phase 4 : Tests & Déploiement
- Génération via `node builder.js`.
- Validation du comportement dans le navigateur.
- Synchronisation sur GitHub Pages via `git commit` & `git push`.
