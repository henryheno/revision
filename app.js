// Fichier généré automatiquement - Application de Révision Interactive
const allCourses = {
  "parallele": {
    "id": "parallele",
    "title": "Programmation Parallèle",
    "icon": "⚡",
    "questions": [
      {
        "id": 1,
        "chapitre": "\udd39 INTRODUCTION",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce que la programmation parallèle ?",
        "answer": "C'est une technique qui consiste à exécuter <strong>plusieurs sous-tâches en même temps</strong> afin de résoudre plus rapidement un problème complexe ou de grande taille.",
        "cleanAnswer": "C'est une technique qui consiste à exécuter plusieurs sous-tâches en même temps afin de résoudre plus rapidement un problème complexe ou de grande taille.",
        "type": "qcm",
        "options": [
          "C'est un ensemble de processeurs qui coopèrent et communiquent pour exécuter un traitement.",
          "C'est une technique qui consiste à exécuter plusieurs sous-tâches en même temps afin de résoudre plus rapidement un problème complexe ou de grande taille.",
          "Décomposer → répartir → exécuter en parallèle → synchroniser → réunir les résultats.",
          "Elle divise le processeur en plusieurs unités fonctionnelles spécialisées qui peuvent travailler en parallèle."
        ],
        "correctIndex": 1
      },
      {
        "id": 2,
        "chapitre": "\udd39 INTRODUCTION",
        "sousPoint": "Généralités",
        "question": "Quel est l'objectif principal de la programmation parallèle ?",
        "answer": "<strong>Augmenter les performances et réduire le temps d'exécution.</strong>",
        "cleanAnswer": "Augmenter les performances et réduire le temps d'exécution.",
        "type": "qcm",
        "options": [
          "Pour exécuter plusieurs parties indépendantes d'un programme en parallèle et réduire le temps d'exécution .",
          "Réduire le temps d'exécution et augmenter les performances.",
          "Augmenter les performances et réduire le temps d'exécution.",
          "Décomposer → répartir → exécuter en parallèle → synchroniser → réunir les résultats."
        ],
        "correctIndex": 2
      },
      {
        "id": 3,
        "chapitre": "\udd39 INTRODUCTION",
        "sousPoint": "Généralités",
        "question": "Quelle question faut-il se poser avant de paralléliser un problème ?",
        "answer": "Il faut se demander : <strong>« Est-ce que le problème est décomposable ? »</strong>",
        "cleanAnswer": "Il faut se demander : « Est-ce que le problème est décomposable ? »",
        "type": "qcm",
        "options": [
          "Il faut se demander : « Est-ce que le problème est décomposable ? »",
          "Parce qu'en plus du calcul, il faut gérer la communication et la coordination entre les processeurs .",
          "C'est une technique qui consiste à exécuter plusieurs sous-tâches en même temps afin de résoudre plus rapidement un problème complexe ou de grande taille.",
          "Décomposer le problème en sous-problèmes. • Les sous-problèmes doivent être suffisamment indépendants. • Répartir efficacement le travail. • Limiter le coût de communication entre les unités."
        ],
        "correctIndex": 0
      },
      {
        "id": 4,
        "chapitre": "\udd39 INTRODUCTION",
        "sousPoint": "Généralités",
        "question": "Que faut-il pour qu'un problème soit parallélisable ?",
        "answer": "<ul class=\"styled-ul\"><li>Décomposer le problème en sous-problèmes.</li><li>Les sous-problèmes doivent être suffisamment indépendants.</li><li>Répartir efficacement le travail.</li><li>Limiter le coût de communication entre les unités.</li></ul>",
        "cleanAnswer": "Décomposer le problème en sous-problèmes. • Les sous-problèmes doivent être suffisamment indépendants. • Répartir efficacement le travail. • Limiter le coût de communication entre les unités.",
        "type": "checkbox",
        "allItems": [
          "Les sous-problèmes doivent être suffisamment indépendants.",
          "Décomposer le problème en sous-problèmes.",
          "Limiter le coût de communication entre les unités.",
          "OpenMP → mémoire partagée et utilisation de threads.",
          "α = partie non parallélisable ;",
          "Répartir efficacement le travail.",
          "MPI → mémoire distribuée et communication par messages."
        ],
        "correctItems": [
          "Décomposer le problème en sous-problèmes.",
          "Les sous-problèmes doivent être suffisamment indépendants.",
          "Répartir efficacement le travail.",
          "Limiter le coût de communication entre les unités."
        ],
        "distractors": [
          "α = partie non parallélisable ;",
          "MPI → mémoire distribuée et communication par messages.",
          "OpenMP → mémoire partagée et utilisation de threads."
        ]
      },
      {
        "id": 5,
        "chapitre": "\udd39 INTRODUCTION",
        "sousPoint": "Généralités",
        "question": "Pourquoi la parallélisation peut-elle avoir un surcoût ?",
        "answer": "Parce qu'en plus du calcul, il faut gérer <strong>la communication et la coordination entre les processeurs</strong>.",
        "cleanAnswer": "Parce qu'en plus du calcul, il faut gérer la communication et la coordination entre les processeurs .",
        "type": "qcm",
        "options": [
          "Parce qu'en plus du calcul, il faut gérer la communication et la coordination entre les processeurs .",
          "T1 écrit X :E(T1) = \\{X\\}T2 lit X :L(T2) = \\{X, C\\}Donc :E(T1) ∩ L(T2) = \\{X\\}Ce n'est pas vide :\\{X\\} ≠ ∅Donc il existe une dépendance RAW . Conclusion : T1 -> T2Il faut terminer T1 avant d'exécuter T2.",
          "C'est le fait de répartir le travail équitablement entre les processeurs afin qu'ils terminent approximativement au même moment.",
          "L'accélération est inférieure au nombre de processeurs , notamment à cause des surcoûts et des parties séquentielles."
        ],
        "correctIndex": 0
      },
      {
        "id": 6,
        "chapitre": "\udd39 INTRODUCTION",
        "sousPoint": "Généralités",
        "question": "Tous les problèmes sont-ils parallélisables de la même manière ?",
        "answer": "Non. Les problèmes réels sont parallélisables <strong>à des degrés différents</strong>.",
        "cleanAnswer": "Non. Les problèmes réels sont parallélisables à des degrés différents .",
        "type": "qcm",
        "options": [
          "Non. Les problèmes réels sont parallélisables à des degrés différents .",
          "Réponse : Non.",
          "C'est un ensemble de plusieurs ordinateurs reliés entre eux , chaque ordinateur possédant ses propres ressources.",
          "Non. Une version parallèle peut avoir une formulation très différente de la version séquentielle."
        ],
        "correctIndex": 0
      },
      {
        "id": 7,
        "chapitre": "\udd39 INTRODUCTION",
        "sousPoint": "Généralités",
        "question": "Une version parallèle est-elle toujours similaire à la version séquentielle ?",
        "answer": "Non. Une version parallèle peut avoir une <strong>formulation très différente</strong> de la version séquentielle.",
        "cleanAnswer": "Non. Une version parallèle peut avoir une formulation très différente de la version séquentielle.",
        "type": "qcm",
        "options": [
          "C'est une technique qui consiste à exécuter plusieurs sous-tâches en même temps afin de résoudre plus rapidement un problème complexe ou de grande taille.",
          "Non. Une version parallèle peut avoir une formulation très différente de la version séquentielle.",
          "C'est un ensemble de processeurs qui coopèrent et communiquent pour exécuter un traitement.",
          "L'accélération est toujours limitée par la partie séquentielle du programme ."
        ],
        "correctIndex": 1
      },
      {
        "id": 8,
        "chapitre": "\udd39 CHAPITRE 1 : MODÈLES DE MACHINES PARALLÈLES",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce qu'une machine parallèle ?",
        "answer": "C'est un ensemble de <strong>processeurs qui coopèrent et communiquent</strong> pour exécuter un traitement.",
        "cleanAnswer": "C'est un ensemble de processeurs qui coopèrent et communiquent pour exécuter un traitement.",
        "type": "qcm",
        "options": [
          "Pour exécuter plusieurs parties indépendantes d'un programme en parallèle et réduire le temps d'exécution .",
          "C'est un ensemble de processeurs qui coopèrent et communiquent pour exécuter un traitement.",
          "Non. Une version parallèle peut avoir une formulation très différente de la version séquentielle.",
          "C'est une technique qui consiste à exécuter plusieurs sous-tâches en même temps afin de résoudre plus rapidement un problème complexe ou de grande taille."
        ],
        "correctIndex": 1
      },
      {
        "id": 9,
        "chapitre": "\udd39 CHAPITRE 1 : MODÈLES DE MACHINES PARALLÈLES",
        "sousPoint": "Généralités",
        "question": "Sur quoi se base la classification de Flynn ?",
        "answer": "Elle se base sur :<ul class=\"styled-ul\"><li>le <strong>flot d'instructions</strong> ;</li><li>le <strong>flot de données</strong>.</li></ul>",
        "cleanAnswer": "Elle se base sur : • le flot d'instructions ; • le flot de données .",
        "type": "checkbox",
        "allItems": [
          "La modélisation des calculs.",
          "le flot de données.",
          "La détection du parallélisme maximal.",
          "le flot d'instructions ;"
        ],
        "correctItems": [
          "le flot d'instructions ;",
          "le flot de données."
        ],
        "distractors": [
          "La modélisation des calculs.",
          "La détection du parallélisme maximal."
        ]
      },
      {
        "id": 10,
        "chapitre": "\udd39 CHAPITRE 1 : MODÈLES DE MACHINES PARALLÈLES",
        "sousPoint": "Généralités",
        "question": "Combien de types de machines distingue la taxonomie de Flynn ?",
        "answer": "Elle distingue <strong>4 types : SISD, SIMD, MISD et MIMD.</strong>",
        "cleanAnswer": "Elle distingue 4 types : SISD, SIMD, MISD et MIMD.",
        "type": "qcm",
        "options": [
          "RAW → Read After Write • WAR → Write After Read • WAW → Write After Write",
          "SISD, SIMD, MISD, MIMD",
          "Multiple Instruction, Multiple Data. Chaque processeur peut exécuter une instruction différente sur des données différentes .",
          "Elle distingue 4 types : SISD, SIMD, MISD et MIMD."
        ],
        "correctIndex": 3
      },
      {
        "id": 11,
        "chapitre": "\udd39 Taxonomie de Flynn",
        "sousPoint": "Généralités",
        "question": "Que signifie SISD ?",
        "answer": "<strong>Single Instruction, Single Data.</strong><br>Une seule instruction travaille sur une seule donnée. C'est le modèle classique <strong>séquentiel de Von Neumann</strong>.",
        "cleanAnswer": "Single Instruction, Single Data. Une seule instruction travaille sur une seule donnée. C'est le modèle classique séquentiel de Von Neumann .",
        "type": "qcm",
        "options": [
          "L(S1) ∩ E(S2) = ∅S1 ne doit pas lire une donnée que S2 doit écrire . C'est une anti-dépendance WAR (Write After Read).",
          "Multiple Instruction, Single Data. Plusieurs instructions sont exécutées simultanément sur une même donnée .",
          "Single Instruction, Multiple Data. Une même instruction est exécutée simultanément sur plusieurs données .",
          "Single Instruction, Single Data. Une seule instruction travaille sur une seule donnée. C'est le modèle classique séquentiel de Von Neumann ."
        ],
        "correctIndex": 3
      },
      {
        "id": 12,
        "chapitre": "\udd39 Taxonomie de Flynn",
        "sousPoint": "Généralités",
        "question": "Que signifie SIMD ?",
        "answer": "<strong>Single Instruction, Multiple Data.</strong><br>Une même instruction est exécutée simultanément sur <strong>plusieurs données</strong>.",
        "cleanAnswer": "Single Instruction, Multiple Data. Une même instruction est exécutée simultanément sur plusieurs données .",
        "type": "qcm",
        "options": [
          "Multiple Instruction, Single Data. Plusieurs instructions sont exécutées simultanément sur une même donnée .",
          "Multiple Instruction, Multiple Data. Chaque processeur peut exécuter une instruction différente sur des données différentes .",
          "Single Instruction, Multiple Data. Une même instruction est exécutée simultanément sur plusieurs données .",
          "Single Instruction, Single Data. Une seule instruction travaille sur une seule donnée. C'est le modèle classique séquentiel de Von Neumann ."
        ],
        "correctIndex": 2
      },
      {
        "id": 13,
        "chapitre": "\udd39 Taxonomie de Flynn",
        "sousPoint": "Généralités",
        "question": "Donnez un exemple simple de SIMD.",
        "answer": "<pre class=\"code-block\"><code>Instruction : × 2\n\nCPU 1 → A × 2\nCPU 2 → B × 2\nCPU 3 → C × 2\nCPU 4 → D × 2</code></pre>Même instruction, données différentes.",
        "cleanAnswer": "[Bloc de code] Même instruction, données différentes.",
        "type": "qcm",
        "options": [
          "[Bloc de code] Même instruction, données différentes.",
          "[Bloc de code] Donc T1 et T2 peuvent être exécutées en parallèle , puis T3.",
          "Il représente une relation de précédence ou de dépendance entre deux tâches. Exemple : [Bloc de code] Cela signifie que T1 doit être exécutée avant T2 .",
          "[Bloc de code]"
        ],
        "correctIndex": 0
      },
      {
        "id": 14,
        "chapitre": "\udd39 Taxonomie de Flynn",
        "sousPoint": "Généralités",
        "question": "Que signifie MISD ?",
        "answer": "<strong>Multiple Instruction, Single Data.</strong><br>Plusieurs instructions sont exécutées simultanément sur <strong>une même donnée</strong>.",
        "cleanAnswer": "Multiple Instruction, Single Data. Plusieurs instructions sont exécutées simultanément sur une même donnée .",
        "type": "qcm",
        "options": [
          "Single Instruction, Single Data. Une seule instruction travaille sur une seule donnée. C'est le modèle classique séquentiel de Von Neumann .",
          "Multiple Instruction, Multiple Data. Chaque processeur peut exécuter une instruction différente sur des données différentes .",
          "Single Instruction, Multiple Data. Une même instruction est exécutée simultanément sur plusieurs données .",
          "Multiple Instruction, Single Data. Plusieurs instructions sont exécutées simultanément sur une même donnée ."
        ],
        "correctIndex": 3
      },
      {
        "id": 15,
        "chapitre": "\udd39 Taxonomie de Flynn",
        "sousPoint": "Généralités",
        "question": "Que signifie MIMD ?",
        "answer": "<strong>Multiple Instruction, Multiple Data.</strong><br>Chaque processeur peut exécuter <strong>une instruction différente sur des données différentes</strong>.",
        "cleanAnswer": "Multiple Instruction, Multiple Data. Chaque processeur peut exécuter une instruction différente sur des données différentes .",
        "type": "qcm",
        "options": [
          "Multiple Instruction, Multiple Data. Chaque processeur peut exécuter une instruction différente sur des données différentes .",
          "Single Instruction, Single Data. Une seule instruction travaille sur une seule donnée. C'est le modèle classique séquentiel de Von Neumann .",
          "Multiple Instruction, Single Data. Plusieurs instructions sont exécutées simultanément sur une même donnée .",
          "Single Instruction, Multiple Data. Une même instruction est exécutée simultanément sur plusieurs données ."
        ],
        "correctIndex": 0
      },
      {
        "id": 16,
        "chapitre": "\udd39 Taxonomie de Flynn",
        "sousPoint": "Généralités",
        "question": "Quel modèle est le plus intuitif pour les systèmes multiprocesseurs modernes ?",
        "answer": "Le modèle <strong>MIMD</strong>.",
        "cleanAnswer": "Le modèle MIMD .",
        "type": "qcm",
        "options": [
          "Le modèle MIMD .",
          "Single Instruction, Single Data. Une seule instruction travaille sur une seule donnée. C'est le modèle classique séquentiel de Von Neumann .",
          "Le partage des ressources permet une communication plus rapide entre les cœurs .",
          "C'est une technique qui consiste à exécuter plusieurs sous-tâches en même temps afin de résoudre plus rapidement un problème complexe ou de grande taille."
        ],
        "correctIndex": 0
      },
      {
        "id": 17,
        "chapitre": "\udd39 TYPES DE PARALLÉLISME MATÉRIEL",
        "sousPoint": "Généralités",
        "question": "Quels sont les principaux types de parallélisme matériel étudiés ?",
        "answer": "<ol class=\"styled-ol\"><li>Parallélisme au niveau d'instruction.</li><li>Parallélisme au niveau des threads.</li><li>Parallélisme multicœur.</li><li>Parallélisme multiprocesseur.</li></ol>",
        "cleanAnswer": "Parallélisme au niveau d'instruction. • Parallélisme au niveau des threads. • Parallélisme multicœur. • Parallélisme multiprocesseur.",
        "type": "order",
        "correctOrder": [
          "Parallélisme au niveau d'instruction.",
          "Parallélisme au niveau des threads.",
          "Parallélisme multicœur.",
          "Parallélisme multiprocesseur."
        ],
        "shuffledItems": [
          "Parallélisme au niveau d'instruction.",
          "Parallélisme multicœur.",
          "Parallélisme multiprocesseur.",
          "Parallélisme au niveau des threads."
        ]
      },
      {
        "id": 18,
        "chapitre": "\udd39 TYPES DE PARALLÉLISME MATÉRIEL",
        "sousPoint": "Généralités",
        "question": "Quelles sont les trois techniques du parallélisme au niveau d'instruction ?",
        "answer": "<ul class=\"styled-ul\"><li>Pipeline</li><li>Superscalaire</li><li>VLIW</li></ul>",
        "cleanAnswer": "Pipeline • Superscalaire • VLIW",
        "type": "checkbox",
        "allItems": [
          "La détection du parallélisme maximal.",
          "Superscalaire",
          "WAR → Write After Read",
          "VLIW",
          "Pipeline"
        ],
        "correctItems": [
          "Pipeline",
          "Superscalaire",
          "VLIW"
        ],
        "distractors": [
          "WAR → Write After Read",
          "La détection du parallélisme maximal."
        ]
      },
      {
        "id": 19,
        "chapitre": "\udd39 PIPELINE",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce qu'un pipeline ?",
        "answer": "Le pipeline consiste à <strong>diviser l'exécution d'une instruction en plusieurs étapes</strong> afin de pouvoir traiter plusieurs instructions simultanément.",
        "cleanAnswer": "Le pipeline consiste à diviser l'exécution d'une instruction en plusieurs étapes afin de pouvoir traiter plusieurs instructions simultanément.",
        "type": "qcm",
        "options": [
          "Le pipeline consiste à diviser l'exécution d'une instruction en plusieurs étapes afin de pouvoir traiter plusieurs instructions simultanément.",
          "Il permet de traiter plusieurs instructions en même temps , chaque instruction étant à une étape différente.",
          "Multiple Instruction, Single Data. Plusieurs instructions sont exécutées simultanément sur une même donnée .",
          "C'est une technique qui consiste à exécuter plusieurs sous-tâches en même temps afin de résoudre plus rapidement un problème complexe ou de grande taille."
        ],
        "correctIndex": 0
      },
      {
        "id": 20,
        "chapitre": "\udd39 PIPELINE",
        "sousPoint": "Généralités",
        "question": "Quelles sont les quatre étapes d'une instruction ?",
        "answer": "<pre class=\"code-block\"><code>1. Chargement (Loading)\n2. Décodage\n3. Exécution\n4. Écriture du résultat</code></pre>",
        "cleanAnswer": "[Bloc de code]",
        "type": "qcm",
        "options": [
          "Il représente une relation de précédence ou de dépendance entre deux tâches. Exemple : [Bloc de code] Cela signifie que T1 doit être exécutée avant T2 .",
          "[Bloc de code] Donc T1 et T2 peuvent être exécutées en parallèle , puis T3.",
          "[Bloc de code]",
          "[Bloc de code] Même instruction, données différentes."
        ],
        "correctIndex": 2
      },
      {
        "id": 21,
        "chapitre": "\udd39 PIPELINE",
        "sousPoint": "Généralités",
        "question": "Quel est l'intérêt du pipeline ?",
        "answer": "Il permet de <strong>traiter plusieurs instructions en même temps</strong>, chaque instruction étant à une étape différente.",
        "cleanAnswer": "Il permet de traiter plusieurs instructions en même temps , chaque instruction étant à une étape différente.",
        "type": "qcm",
        "options": [
          "Le pipeline consiste à diviser l'exécution d'une instruction en plusieurs étapes afin de pouvoir traiter plusieurs instructions simultanément.",
          "La première instruction écrit X . • La troisième instruction lit X .Donc :E(T1) ∩ L(T3) ≠ ∅Il existe une dépendance entre T1 et T3. De même : • T2 écrit Z. • T3 lit Z.Donc :E(T2) ∩ L(T3) ≠ ∅",
          "Le partage des ressources permet une communication plus rapide entre les cœurs .",
          "Il permet de traiter plusieurs instructions en même temps , chaque instruction étant à une étape différente."
        ],
        "correctIndex": 3
      },
      {
        "id": 22,
        "chapitre": "\udd39 SUPERSCALAIRE",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce qu'une architecture superscalaire ?",
        "answer": "Elle divise le processeur en <strong>plusieurs unités fonctionnelles spécialisées</strong> qui peuvent travailler en parallèle.",
        "cleanAnswer": "Elle divise le processeur en plusieurs unités fonctionnelles spécialisées qui peuvent travailler en parallèle.",
        "type": "qcm",
        "options": [
          "Réponse : Non.",
          "Il offre généralement une meilleure fiabilité : la panne d'un processeur n'affecte pas nécessairement les autres.",
          "Elle divise le processeur en plusieurs unités fonctionnelles spécialisées qui peuvent travailler en parallèle.",
          "C'est une technique qui consiste à exécuter plusieurs sous-tâches en même temps afin de résoudre plus rapidement un problème complexe ou de grande taille."
        ],
        "correctIndex": 2
      },
      {
        "id": 23,
        "chapitre": "\udd39 SUPERSCALAIRE",
        "sousPoint": "Généralités",
        "question": "Donnez des exemples d'opérations pouvant être exécutées par des unités fonctionnelles.",
        "answer": "<pre class=\"code-block\"><code>ADD → addition\nSUB → soustraction\nMUL → multiplication</code></pre>",
        "cleanAnswer": "[Bloc de code]",
        "type": "qcm",
        "options": [
          "[Bloc de code]",
          "Il représente une relation de précédence ou de dépendance entre deux tâches. Exemple : [Bloc de code] Cela signifie que T1 doit être exécutée avant T2 .",
          "[Bloc de code] Même instruction, données différentes.",
          "[Bloc de code] Donc T1 et T2 peuvent être exécutées en parallèle , puis T3."
        ],
        "correctIndex": 0
      },
      {
        "id": 24,
        "chapitre": "\udd39 THREADS",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce qu'un thread ?",
        "answer": "Un thread est un <strong>processus léger</strong>, c'est-à-dire une unité d'exécution à l'intérieur d'un processus.",
        "cleanAnswer": "Un thread est un processus léger , c'est-à-dire une unité d'exécution à l'intérieur d'un processus.",
        "type": "qcm",
        "options": [
          "C'est un ensemble d'ordinateurs reliés entre eux pour travailler comme une plateforme de calcul parallèle .",
          "[Bloc de code]",
          "Un thread est un processus léger , c'est-à-dire une unité d'exécution à l'intérieur d'un processus.",
          "Le pipeline consiste à diviser l'exécution d'une instruction en plusieurs étapes afin de pouvoir traiter plusieurs instructions simultanément."
        ],
        "correctIndex": 2
      },
      {
        "id": 25,
        "chapitre": "\udd39 THREADS",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce que le parallélisme au niveau des threads ?",
        "answer": "Il consiste à exploiter le parallélisme en utilisant <strong>plusieurs fils d'exécution (threads)</strong>.",
        "cleanAnswer": "Il consiste à exploiter le parallélisme en utilisant plusieurs fils d'exécution (threads) .",
        "type": "qcm",
        "options": [
          "Il consiste à exploiter le parallélisme en utilisant plusieurs fils d'exécution (threads) .",
          "Le pipeline consiste à diviser l'exécution d'une instruction en plusieurs étapes afin de pouvoir traiter plusieurs instructions simultanément.",
          "C'est une technique qui consiste à exécuter plusieurs sous-tâches en même temps afin de résoudre plus rapidement un problème complexe ou de grande taille.",
          "Parallélisme au niveau d'instruction. • Parallélisme au niveau des threads. • Parallélisme multicœur. • Parallélisme multiprocesseur."
        ],
        "correctIndex": 0
      },
      {
        "id": 26,
        "chapitre": "\udd39 THREADS",
        "sousPoint": "Généralités",
        "question": "Pourquoi utilise-t-on plusieurs threads ?",
        "answer": "Pour exécuter plusieurs parties indépendantes d'un programme en parallèle et <strong>réduire le temps d'exécution</strong>.",
        "cleanAnswer": "Pour exécuter plusieurs parties indépendantes d'un programme en parallèle et réduire le temps d'exécution .",
        "type": "qcm",
        "options": [
          "Ce sont les parties du programme qui peuvent être exécutées par plusieurs threads simultanément .",
          "Pour exécuter plusieurs parties indépendantes d'un programme en parallèle et réduire le temps d'exécution .",
          "Pour réduire le temps d'accès aux données .",
          "Un programme OpenMP est exécuté par un seul processus qui peut créer plusieurs threads."
        ],
        "correctIndex": 1
      },
      {
        "id": 27,
        "chapitre": "\udd39 THREADS",
        "sousPoint": "Généralités",
        "question": "Que doit mémoriser le processeur pour gérer plusieurs threads ?",
        "answer": "<ul class=\"styled-ul\"><li>PC (Program Counter)</li><li>CO</li><li>registre d'état</li><li>registres généraux.</li></ul>",
        "cleanAnswer": "PC (Program Counter) • CO • registre d'état • registres généraux.",
        "type": "checkbox",
        "allItems": [
          "PC (Program Counter)",
          "CO",
          "registres généraux.",
          "OpenMP → mémoire partagée et utilisation de threads.",
          "Répartir efficacement le travail.",
          "une bibliothèque logicielle ;",
          "registre d'état"
        ],
        "correctItems": [
          "PC (Program Counter)",
          "CO",
          "registre d'état",
          "registres généraux."
        ],
        "distractors": [
          "OpenMP → mémoire partagée et utilisation de threads.",
          "une bibliothèque logicielle ;",
          "Répartir efficacement le travail."
        ]
      },
      {
        "id": 28,
        "chapitre": "\udd39 MULTICŒURS / MULTIPROCESSEURS",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce qu'un processeur multicœur ?",
        "answer": "C'est une <strong>seule puce contenant plusieurs cœurs de calcul</strong>.",
        "cleanAnswer": "C'est une seule puce contenant plusieurs cœurs de calcul .",
        "type": "qcm",
        "options": [
          "C'est une seule puce contenant plusieurs cœurs de calcul .",
          "Il permet de traiter plusieurs instructions en même temps , chaque instruction étant à une étape différente.",
          "Il offre généralement une meilleure fiabilité : la panne d'un processeur n'affecte pas nécessairement les autres.",
          "Le partage des ressources permet une communication plus rapide entre les cœurs ."
        ],
        "correctIndex": 0
      },
      {
        "id": 29,
        "chapitre": "\udd39 MULTICŒURS / MULTIPROCESSEURS",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce qu'un multiprocesseur ?",
        "answer": "C'est un système contenant <strong>plusieurs processeurs physiques</strong>, généralement sur des puces distinctes.",
        "cleanAnswer": "C'est un système contenant plusieurs processeurs physiques , généralement sur des puces distinctes.",
        "type": "qcm",
        "options": [
          "La tâche maître, appelée généralement thread maître .",
          "[Tableau comparatif]",
          "Il offre généralement une meilleure fiabilité : la panne d'un processeur n'affecte pas nécessairement les autres.",
          "C'est un système contenant plusieurs processeurs physiques , généralement sur des puces distinctes."
        ],
        "correctIndex": 3
      },
      {
        "id": 30,
        "chapitre": "\udd39 MULTICŒURS / MULTIPROCESSEURS",
        "sousPoint": "Généralités",
        "question": "Quelle est la différence entre multicœur et multiprocesseur ?",
        "answer": "<div class=\"table-responsive\"><table class=\"markdown-table\"><tr><th>Multicœur</th><th>Multiprocesseur</th></tr><tr><td>Plusieurs cœurs</td><td>Plusieurs processeurs physiques</td></tr><tr><td>Sur une même puce</td><td>Sur des puces distinctes</td></tr><tr><td>Partage davantage de ressources</td><td>Processeurs plus indépendants</td></tr></table></div>",
        "cleanAnswer": "[Tableau comparatif]",
        "type": "qcm",
        "options": [
          "La première instruction écrit X . • La troisième instruction lit X .Donc :E(T1) ∩ L(T3) ≠ ∅Il existe une dépendance entre T1 et T3. De même : • T2 écrit Z. • T3 lit Z.Donc :E(T2) ∩ L(T3) ≠ ∅",
          "[Tableau comparatif]",
          "C'est un système contenant plusieurs processeurs physiques , généralement sur des puces distinctes.",
          "Le partage des ressources permet une communication plus rapide entre les cœurs ."
        ],
        "correctIndex": 1
      },
      {
        "id": 31,
        "chapitre": "\udd39 MULTICŒURS / MULTIPROCESSEURS",
        "sousPoint": "Généralités",
        "question": "Quel est l'avantage du multicœur ?",
        "answer": "Le partage des ressources permet une <strong>communication plus rapide entre les cœurs</strong>.",
        "cleanAnswer": "Le partage des ressources permet une communication plus rapide entre les cœurs .",
        "type": "qcm",
        "options": [
          "Le partage des ressources permet une communication plus rapide entre les cœurs .",
          "Il offre généralement une meilleure fiabilité : la panne d'un processeur n'affecte pas nécessairement les autres.",
          "[Tableau comparatif]",
          "Il permet de traiter plusieurs instructions en même temps , chaque instruction étant à une étape différente."
        ],
        "correctIndex": 0
      },
      {
        "id": 32,
        "chapitre": "\udd39 MULTICŒURS / MULTIPROCESSEURS",
        "sousPoint": "Généralités",
        "question": "Quel est l'avantage du multiprocesseur ?",
        "answer": "Il offre généralement une <strong>meilleure fiabilité</strong> : la panne d'un processeur n'affecte pas nécessairement les autres.",
        "cleanAnswer": "Il offre généralement une meilleure fiabilité : la panne d'un processeur n'affecte pas nécessairement les autres.",
        "type": "qcm",
        "options": [
          "Il offre généralement une meilleure fiabilité : la panne d'un processeur n'affecte pas nécessairement les autres.",
          "Parce qu'un processeur qui termine trop tôt peut rester inactif pendant que les autres travaillent encore.",
          "C'est une seule puce contenant plusieurs cœurs de calcul .",
          "Elle divise le processeur en plusieurs unités fonctionnelles spécialisées qui peuvent travailler en parallèle."
        ],
        "correctIndex": 0
      },
      {
        "id": 33,
        "chapitre": "\udd39 MULTICŒURS / MULTIPROCESSEURS",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce qu'un multi-ordinateur ?",
        "answer": "C'est un ensemble de <strong>plusieurs ordinateurs reliés entre eux</strong>, chaque ordinateur possédant ses propres ressources.",
        "cleanAnswer": "C'est un ensemble de plusieurs ordinateurs reliés entre eux , chaque ordinateur possédant ses propres ressources.",
        "type": "qcm",
        "options": [
          "C'est un ensemble d'ordinateurs reliés entre eux pour travailler comme une plateforme de calcul parallèle .",
          "C'est un ensemble de plusieurs ordinateurs reliés entre eux , chaque ordinateur possédant ses propres ressources.",
          "La communication entre les ordinateurs est plus lente que la communication entre les processeurs d'une même machine.",
          "Single Instruction, Multiple Data. Une même instruction est exécutée simultanément sur plusieurs données ."
        ],
        "correctIndex": 1
      },
      {
        "id": 34,
        "chapitre": "\udd39 MULTICŒURS / MULTIPROCESSEURS",
        "sousPoint": "Généralités",
        "question": "Quel est l'inconvénient d'un multi-ordinateur ?",
        "answer": "La communication entre les ordinateurs est <strong>plus lente</strong> que la communication entre les processeurs d'une même machine.",
        "cleanAnswer": "La communication entre les ordinateurs est plus lente que la communication entre les processeurs d'une même machine.",
        "type": "qcm",
        "options": [
          "C'est un ensemble d'ordinateurs reliés entre eux pour travailler comme une plateforme de calcul parallèle .",
          "C'est un ensemble de plusieurs ordinateurs reliés entre eux , chaque ordinateur possédant ses propres ressources.",
          "La communication entre les ordinateurs est plus lente que la communication entre les processeurs d'une même machine.",
          "C'est un ensemble de processeurs qui coopèrent et communiquent pour exécuter un traitement."
        ],
        "correctIndex": 2
      },
      {
        "id": 35,
        "chapitre": "\udd39 MULTICŒURS / MULTIPROCESSEURS",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce qu'un cluster ?",
        "answer": "C'est un ensemble d'ordinateurs reliés entre eux pour <strong>travailler comme une plateforme de calcul parallèle</strong>.",
        "cleanAnswer": "C'est un ensemble d'ordinateurs reliés entre eux pour travailler comme une plateforme de calcul parallèle .",
        "type": "qcm",
        "options": [
          "C'est un ensemble d'ordinateurs reliés entre eux pour travailler comme une plateforme de calcul parallèle .",
          "C'est un ensemble de processeurs qui coopèrent et communiquent pour exécuter un traitement.",
          "C'est une API de programmation parallèle destinée principalement aux architectures à mémoire partagée.",
          "C'est un ensemble de plusieurs ordinateurs reliés entre eux , chaque ordinateur possédant ses propres ressources."
        ],
        "correctIndex": 0
      },
      {
        "id": 36,
        "chapitre": "\udd39 MÉMOIRE CACHE",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce que la mémoire cache ?",
        "answer": "C'est une mémoire <strong>rapide</strong> qui conserve temporairement des copies de données afin de réduire le temps d'accès.",
        "cleanAnswer": "C'est une mémoire rapide qui conserve temporairement des copies de données afin de réduire le temps d'accès.",
        "type": "qcm",
        "options": [
          "Augmenter les performances et réduire le temps d'exécution.",
          "C'est une mémoire rapide qui conserve temporairement des copies de données afin de réduire le temps d'accès.",
          "C'est une API de programmation parallèle destinée principalement aux architectures à mémoire partagée.",
          "Pour réduire le temps d'accès aux données ."
        ],
        "correctIndex": 1
      },
      {
        "id": 37,
        "chapitre": "\udd39 MÉMOIRE CACHE",
        "sousPoint": "Généralités",
        "question": "Pourquoi utilise-t-on une mémoire cache ?",
        "answer": "Pour <strong>réduire le temps d'accès aux données</strong>.",
        "cleanAnswer": "Pour réduire le temps d'accès aux données .",
        "type": "qcm",
        "options": [
          "Pour réduire le temps d'accès aux données .",
          "C'est une mémoire rapide qui conserve temporairement des copies de données afin de réduire le temps d'accès.",
          "C'est une API de programmation parallèle destinée principalement aux architectures à mémoire partagée.",
          "Pour exécuter plusieurs parties indépendantes d'un programme en parallèle et réduire le temps d'exécution ."
        ],
        "correctIndex": 0
      },
      {
        "id": 38,
        "chapitre": "\udd39 MÉMOIRE CACHE",
        "sousPoint": "Généralités",
        "question": "Quels sont les trois niveaux de cache ?",
        "answer": "<pre class=\"code-block\"><code>L1 → très rapide\nL2 → rapide\nL3 → plus grande mais généralement plus lente</code></pre>",
        "cleanAnswer": "[Bloc de code]",
        "type": "qcm",
        "options": [
          "[Bloc de code]",
          "[Bloc de code] Donc T1 et T2 peuvent être exécutées en parallèle , puis T3.",
          "Il représente une relation de précédence ou de dépendance entre deux tâches. Exemple : [Bloc de code] Cela signifie que T1 doit être exécutée avant T2 .",
          "[Bloc de code] Même instruction, données différentes."
        ],
        "correctIndex": 0
      },
      {
        "id": 39,
        "chapitre": "\udd39 MÉMOIRE CACHE",
        "sousPoint": "Généralités",
        "question": "Où se trouve généralement le cache L1 ?",
        "answer": "Il est intégré à la puce du processeur et peut être séparé en <strong>cache instructions et cache données</strong>.",
        "cleanAnswer": "Il est intégré à la puce du processeur et peut être séparé en cache instructions et cache données .",
        "type": "qcm",
        "options": [
          "Pour réduire le temps d'accès aux données .",
          "Il est intégré à la puce du processeur et peut être séparé en cache instructions et cache données .",
          "Il offre généralement une meilleure fiabilité : la panne d'un processeur n'affecte pas nécessairement les autres.",
          "Il se trouve généralement sur la même puce que le processeur ."
        ],
        "correctIndex": 1
      },
      {
        "id": 40,
        "chapitre": "\udd39 MÉMOIRE CACHE",
        "sousPoint": "Généralités",
        "question": "Où se trouve généralement le cache L2 ?",
        "answer": "Il se trouve généralement <strong>sur la même puce que le processeur</strong>.",
        "cleanAnswer": "Il se trouve généralement sur la même puce que le processeur .",
        "type": "qcm",
        "options": [
          "Il se trouve généralement sur la même puce que le processeur .",
          "Il est intégré à la puce du processeur et peut être séparé en cache instructions et cache données .",
          "La tâche maître, appelée généralement thread maître .",
          "C'est une mémoire rapide qui conserve temporairement des copies de données afin de réduire le temps d'accès."
        ],
        "correctIndex": 0
      },
      {
        "id": 41,
        "chapitre": "\udd25 LOI D'AMDAHL",
        "sousPoint": "Généralités",
        "question": "Que permet de déterminer la loi d'Amdahl ?",
        "answer": "Elle permet de déterminer <strong>l'accélération théorique maximale</strong> obtenue grâce à la parallélisation.",
        "cleanAnswer": "Elle permet de déterminer l'accélération théorique maximale obtenue grâce à la parallélisation.",
        "type": "qcm",
        "options": [
          "Elle prédit l'accélération lorsqu'on augmente la taille du problème avec le nombre de processeurs .",
          "Elle permet de déterminer l'accélération théorique maximale obtenue grâce à la parallélisation.",
          "Elle permet de savoir si deux séquences d'instructions peuvent être exécutées en parallèle .",
          "L'accélération est toujours limitée par la partie séquentielle du programme ."
        ],
        "correctIndex": 1
      },
      {
        "id": 42,
        "chapitre": "\udd25 LOI D'AMDAHL",
        "sousPoint": "Généralités",
        "question": "Quelle est la formule de l'accélération ?",
        "answer": "<div class=\"math-block\">$$Acc = \\frac{T_s}{T_p}$$</div>avec :<ul class=\"styled-ul\"><li><span class=\"math-inline\">\\(T_s\\)</span> = temps séquentiel ;</li><li><span class=\"math-inline\">\\(T_p\\)</span> = temps parallèle.</li></ul>",
        "cleanAnswer": "Acc = (Ts / Tp)avec : • Ts = temps séquentiel ; • Tp = temps parallèle.",
        "type": "checkbox",
        "allItems": [
          "p = nombre de cœurs/processeurs.",
          "α = partie non parallélisable ;",
          "Tp = temps parallèle.",
          "Ts = temps séquentiel ;"
        ],
        "correctItems": [
          "Ts = temps séquentiel ;",
          "Tp = temps parallèle."
        ],
        "distractors": [
          "α = partie non parallélisable ;",
          "p = nombre de cœurs/processeurs."
        ]
      },
      {
        "id": 43,
        "chapitre": "\udd25 LOI D'AMDAHL",
        "sousPoint": "Généralités",
        "question": "Quelle est la formule d'Amdahl ?",
        "answer": "<div class=\"math-block\">$$Acc(p) = \\frac{1}{\\alpha + \\frac{1-\\alpha}{p}}$$</div>avec :<ul class=\"styled-ul\"><li><span class=\"math-inline\">\\(\\alpha\\)</span> = partie non parallélisable ;</li><li><span class=\"math-inline\">\\(p\\)</span> = nombre de cœurs/processeurs.</li></ul>",
        "cleanAnswer": "Acc(p) = (1 / α + \\frac{1-α){p}}avec : • α = partie non parallélisable ; • p = nombre de cœurs/processeurs.",
        "type": "checkbox",
        "allItems": [
          "α = partie non parallélisable ;",
          "p = nombre de cœurs/processeurs.",
          "p = nombre de processeurs ;",
          "α = partie séquentielle."
        ],
        "correctItems": [
          "α = partie non parallélisable ;",
          "p = nombre de cœurs/processeurs."
        ],
        "distractors": [
          "p = nombre de processeurs ;",
          "α = partie séquentielle."
        ]
      },
      {
        "id": 44,
        "chapitre": "\udd25 LOI D'AMDAHL",
        "sousPoint": "Généralités",
        "question": "Que signifie une accélération linéaire ?",
        "answer": "Une accélération linéaire signifie que le gain obtenu est <strong>égal au nombre de processeurs</strong>.<br>Exemple :<div class=\"math-block\">$$4\\ CPU \\Rightarrow Acc=4$$</div>",
        "cleanAnswer": "Une accélération linéaire signifie que le gain obtenu est égal au nombre de processeurs . Exemple :4\\ CPU => Acc=4",
        "type": "qcm",
        "options": [
          "E(S1) ∩ E(S2) = ∅S1 et S2 ne doivent pas écrire la même donnée . C'est une dépendance WAW (Write After Write).",
          "T1 écrit X :E(T1) = \\{X\\}T2 lit X :L(T2) = \\{X, C\\}Donc :E(T1) ∩ L(T2) = \\{X\\}Ce n'est pas vide :\\{X\\} ≠ ∅Donc il existe une dépendance RAW . Conclusion : T1 -> T2Il faut terminer T1 avant d'exécuter T2.",
          "La première instruction écrit X . • La troisième instruction lit X .Donc :E(T1) ∩ L(T3) ≠ ∅Il existe une dépendance entre T1 et T3. De même : • T2 écrit Z. • T3 lit Z.Donc :E(T2) ∩ L(T3) ≠ ∅",
          "Une accélération linéaire signifie que le gain obtenu est égal au nombre de processeurs . Exemple :4\\ CPU => Acc=4"
        ],
        "correctIndex": 3
      },
      {
        "id": 45,
        "chapitre": "\udd25 LOI D'AMDAHL",
        "sousPoint": "Généralités",
        "question": "Que signifie une accélération sublinéaire ?",
        "answer": "L'accélération est <strong>inférieure au nombre de processeurs</strong>, notamment à cause des surcoûts et des parties séquentielles.",
        "cleanAnswer": "L'accélération est inférieure au nombre de processeurs , notamment à cause des surcoûts et des parties séquentielles.",
        "type": "qcm",
        "options": [
          "L'accélération est inférieure au nombre de processeurs , notamment à cause des surcoûts et des parties séquentielles.",
          "Elle prédit l'accélération lorsqu'on augmente la taille du problème avec le nombre de processeurs .",
          "Une accélération linéaire signifie que le gain obtenu est égal au nombre de processeurs . Exemple :4\\ CPU => Acc=4",
          "Single Instruction, Single Data. Une seule instruction travaille sur une seule donnée. C'est le modèle classique séquentiel de Von Neumann ."
        ],
        "correctIndex": 0
      },
      {
        "id": 46,
        "chapitre": "\udd25 LOI D'AMDAHL",
        "sousPoint": "Généralités",
        "question": "Que dit la loi d'Amdahl ?",
        "answer": "L'accélération est toujours limitée par <strong>la partie séquentielle du programme</strong>.",
        "cleanAnswer": "L'accélération est toujours limitée par la partie séquentielle du programme .",
        "type": "qcm",
        "options": [
          "Elle permet de déterminer l'accélération théorique maximale obtenue grâce à la parallélisation.",
          "Non. Une version parallèle peut avoir une formulation très différente de la version séquentielle.",
          "Elle prédit l'accélération lorsqu'on augmente la taille du problème avec le nombre de processeurs .",
          "L'accélération est toujours limitée par la partie séquentielle du programme ."
        ],
        "correctIndex": 3
      },
      {
        "id": 47,
        "chapitre": "\udd25 LOI DE GUSTAFSON-BARSIS",
        "sousPoint": "Généralités",
        "question": "Que prédit la loi de Gustafson-Barsis ?",
        "answer": "Elle prédit l'accélération lorsqu'on <strong>augmente la taille du problème avec le nombre de processeurs</strong>.",
        "cleanAnswer": "Elle prédit l'accélération lorsqu'on augmente la taille du problème avec le nombre de processeurs .",
        "type": "qcm",
        "options": [
          "L'accélération est toujours limitée par la partie séquentielle du programme .",
          "Elle prédit l'accélération lorsqu'on augmente la taille du problème avec le nombre de processeurs .",
          "Une accélération linéaire signifie que le gain obtenu est égal au nombre de processeurs . Exemple :4\\ CPU => Acc=4",
          "L'accélération est inférieure au nombre de processeurs , notamment à cause des surcoûts et des parties séquentielles."
        ],
        "correctIndex": 1
      },
      {
        "id": 48,
        "chapitre": "\udd25 LOI DE GUSTAFSON-BARSIS",
        "sousPoint": "Généralités",
        "question": "Quelle est la formule de Gustafson ?",
        "answer": "<div class=\"math-block\">$$Acc(p) = p - \\alpha(p-1)$$</div>où :<ul class=\"styled-ul\"><li><span class=\"math-inline\">\\(p\\)</span> = nombre de processeurs ;</li><li><span class=\"math-inline\">\\(\\alpha\\)</span> = partie séquentielle.</li></ul>",
        "cleanAnswer": "Acc(p) = p - α(p-1)où : • p = nombre de processeurs ; • α = partie séquentielle.",
        "type": "checkbox",
        "allItems": [
          "p = nombre de processeurs ;",
          "p = nombre de cœurs/processeurs.",
          "α = partie non parallélisable ;",
          "α = partie séquentielle."
        ],
        "correctItems": [
          "p = nombre de processeurs ;",
          "α = partie séquentielle."
        ],
        "distractors": [
          "p = nombre de cœurs/processeurs.",
          "α = partie non parallélisable ;"
        ]
      },
      {
        "id": 49,
        "chapitre": "\udd39 PARALLÉLISME DE TÂCHES",
        "sousPoint": "Généralités",
        "question": "Sur quoi se concentre le parallélisme de tâches ?",
        "answer": "<ul class=\"styled-ul\"><li>La modélisation des calculs.</li><li>Le calcul du temps d'exécution minimal.</li><li>La détection du parallélisme maximal.</li></ul>",
        "cleanAnswer": "La modélisation des calculs. • Le calcul du temps d'exécution minimal. • La détection du parallélisme maximal.",
        "type": "checkbox",
        "allItems": [
          "le flot de données.",
          "La détection du parallélisme maximal.",
          "La modélisation des calculs.",
          "Le calcul du temps d'exécution minimal.",
          "le flot d'instructions ;"
        ],
        "correctItems": [
          "La modélisation des calculs.",
          "Le calcul du temps d'exécution minimal.",
          "La détection du parallélisme maximal."
        ],
        "distractors": [
          "le flot de données.",
          "le flot d'instructions ;"
        ]
      },
      {
        "id": 50,
        "chapitre": "\udd39 PARALLÉLISME DE TÂCHES",
        "sousPoint": "Généralités",
        "question": "Quels sont les outils principaux ?",
        "answer": "<ul class=\"styled-ul\"><li>Graphe de dépendances.</li><li>Conditions de Bernstein.</li><li>Loi d'Amdahl.</li><li>Loi de Gustafson.</li><li>Graphe de précédence.</li></ul>",
        "cleanAnswer": "Graphe de dépendances. • Conditions de Bernstein. • Loi d'Amdahl. • Loi de Gustafson. • Graphe de précédence.",
        "type": "checkbox",
        "allItems": [
          "WAW → Write After Write",
          "Graphe de dépendances.",
          "Conditions de Bernstein.",
          "α = partie séquentielle.",
          "Loi d'Amdahl.",
          "Loi de Gustafson.",
          "α = partie non parallélisable ;",
          "Graphe de précédence."
        ],
        "correctItems": [
          "Graphe de dépendances.",
          "Conditions de Bernstein.",
          "Loi d'Amdahl.",
          "Loi de Gustafson.",
          "Graphe de précédence."
        ],
        "distractors": [
          "α = partie séquentielle.",
          "WAW → Write After Write",
          "α = partie non parallélisable ;"
        ]
      },
      {
        "id": 51,
        "chapitre": "\udd39 GRAPHE DE PRÉCÉDENCE",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce qu'un graphe de précédence ?",
        "answer": "C'est un graphe permettant de représenter <strong>les dépendances entre les tâches</strong>.",
        "cleanAnswer": "C'est un graphe permettant de représenter les dépendances entre les tâches .",
        "type": "qcm",
        "options": [
          "Graphe de dépendances. • Conditions de Bernstein. • Loi d'Amdahl. • Loi de Gustafson. • Graphe de précédence.",
          "[Bloc de code] Donc T1 et T2 peuvent être exécutées en parallèle , puis T3.",
          "Il représente une relation de précédence ou de dépendance entre deux tâches. Exemple : [Bloc de code] Cela signifie que T1 doit être exécutée avant T2 .",
          "C'est un graphe permettant de représenter les dépendances entre les tâches ."
        ],
        "correctIndex": 3
      },
      {
        "id": 52,
        "chapitre": "\udd39 GRAPHE DE PRÉCÉDENCE",
        "sousPoint": "Généralités",
        "question": "Que représente un nœud ?",
        "answer": "Un nœud représente <strong>une tâche à exécuter</strong>.",
        "cleanAnswer": "Un nœud représente une tâche à exécuter .",
        "type": "qcm",
        "options": [
          "Multiple Instruction, Multiple Data. Chaque processeur peut exécuter une instruction différente sur des données différentes .",
          "Un nœud représente une tâche à exécuter .",
          "Multiple Instruction, Single Data. Plusieurs instructions sont exécutées simultanément sur une même donnée .",
          "Il représente une relation de précédence ou de dépendance entre deux tâches. Exemple : [Bloc de code] Cela signifie que T1 doit être exécutée avant T2 ."
        ],
        "correctIndex": 1
      },
      {
        "id": 53,
        "chapitre": "\udd39 GRAPHE DE PRÉCÉDENCE",
        "sousPoint": "Généralités",
        "question": "Que représente un arc orienté ?",
        "answer": "Il représente une <strong>relation de précédence ou de dépendance</strong> entre deux tâches.<br>Exemple :<pre class=\"code-block\"><code>T1 ─────→ T2</code></pre>Cela signifie que <strong>T1 doit être exécutée avant T2</strong>.",
        "cleanAnswer": "Il représente une relation de précédence ou de dépendance entre deux tâches. Exemple : [Bloc de code] Cela signifie que T1 doit être exécutée avant T2 .",
        "type": "qcm",
        "options": [
          "Une accélération linéaire signifie que le gain obtenu est égal au nombre de processeurs . Exemple :4\\ CPU => Acc=4",
          "[Bloc de code]",
          "Il représente une relation de précédence ou de dépendance entre deux tâches. Exemple : [Bloc de code] Cela signifie que T1 doit être exécutée avant T2 .",
          "[Bloc de code] Donc T1 et T2 peuvent être exécutées en parallèle , puis T3."
        ],
        "correctIndex": 2
      },
      {
        "id": 54,
        "chapitre": "\udd25 CONDITION DE BERNSTEIN",
        "sousPoint": "Généralités",
        "question": "Que permet de déterminer la condition de Bernstein ?",
        "answer": "Elle permet de savoir si <strong>deux séquences d'instructions peuvent être exécutées en parallèle</strong>.",
        "cleanAnswer": "Elle permet de savoir si deux séquences d'instructions peuvent être exécutées en parallèle .",
        "type": "qcm",
        "options": [
          "Il permet de traiter plusieurs instructions en même temps , chaque instruction étant à une étape différente.",
          "Multiple Instruction, Single Data. Plusieurs instructions sont exécutées simultanément sur une même donnée .",
          "[Bloc de code] Donc T1 et T2 peuvent être exécutées en parallèle , puis T3.",
          "Elle permet de savoir si deux séquences d'instructions peuvent être exécutées en parallèle ."
        ],
        "correctIndex": 3
      },
      {
        "id": 55,
        "chapitre": "\udd25 CONDITION DE BERNSTEIN",
        "sousPoint": "Généralités",
        "question": "Quelles sont les trois conditions de Bernstein ?",
        "answer": "Pour deux séquences <span class=\"math-inline\">\\(S_1\\)</span> et <span class=\"math-inline\">\\(S_2\\)</span> :<div class=\"math-block\">$$E(S_1) \\cap L(S_2) = \\varnothing$$</div><div class=\"math-block\">$$L(S_1) \\cap E(S_2) = \\varnothing$$</div><div class=\"math-block\">$$E(S_1) \\cap E(S_2) = \\varnothing$$</div>Avec :<ul class=\"styled-ul\"><li><span class=\"math-inline\">\\(E\\)</span> = ensemble des écritures ;</li><li><span class=\"math-inline\">\\(L\\)</span> = ensemble des lectures.</li></ul>",
        "cleanAnswer": "Pour deux séquences S1 et S2 :E(S1) ∩ L(S2) = ∅L(S1) ∩ E(S2) = ∅E(S1) ∩ E(S2) = ∅Avec : • E = ensemble des écritures ; • L = ensemble des lectures.",
        "type": "checkbox",
        "allItems": [
          "L = ensemble des lectures.",
          "E = ensemble des écritures ;",
          "p = nombre de cœurs/processeurs.",
          "α = partie non parallélisable ;"
        ],
        "correctItems": [
          "E = ensemble des écritures ;",
          "L = ensemble des lectures."
        ],
        "distractors": [
          "α = partie non parallélisable ;",
          "p = nombre de cœurs/processeurs."
        ]
      },
      {
        "id": 56,
        "chapitre": "\udd25 CONDITION DE BERNSTEIN",
        "sousPoint": "Généralités",
        "question": "Que signifie la première condition ?",
        "answer": "<div class=\"math-block\">$$E(S_1) \\cap L(S_2) = \\varnothing$$</div>S1 ne doit pas <strong>écrire</strong> une donnée que S2 doit <strong>lire</strong>.<br>C'est une dépendance <strong>RAW</strong> (Read After Write).",
        "cleanAnswer": "E(S1) ∩ L(S2) = ∅S1 ne doit pas écrire une donnée que S2 doit lire . C'est une dépendance RAW (Read After Write).",
        "type": "qcm",
        "options": [
          "E(S1) ∩ E(S2) = ∅S1 et S2 ne doivent pas écrire la même donnée . C'est une dépendance WAW (Write After Write).",
          "L(S1) ∩ E(S2) = ∅S1 ne doit pas lire une donnée que S2 doit écrire . C'est une anti-dépendance WAR (Write After Read).",
          "E(S1) ∩ L(S2) = ∅S1 ne doit pas écrire une donnée que S2 doit lire . C'est une dépendance RAW (Read After Write).",
          "T1 écrit X :E(T1) = \\{X\\}T2 lit X :L(T2) = \\{X, C\\}Donc :E(T1) ∩ L(T2) = \\{X\\}Ce n'est pas vide :\\{X\\} ≠ ∅Donc il existe une dépendance RAW . Conclusion : T1 -> T2Il faut terminer T1 avant d'exécuter T2."
        ],
        "correctIndex": 2
      },
      {
        "id": 57,
        "chapitre": "\udd25 CONDITION DE BERNSTEIN",
        "sousPoint": "Généralités",
        "question": "Que signifie la deuxième condition ?",
        "answer": "<div class=\"math-block\">$$L(S_1) \\cap E(S_2) = \\varnothing$$</div>S1 ne doit pas <strong>lire</strong> une donnée que S2 doit <strong>écrire</strong>.<br>C'est une <strong>anti-dépendance WAR</strong> (Write After Read).",
        "cleanAnswer": "L(S1) ∩ E(S2) = ∅S1 ne doit pas lire une donnée que S2 doit écrire . C'est une anti-dépendance WAR (Write After Read).",
        "type": "qcm",
        "options": [
          "E(S1) ∩ L(S2) = ∅S1 ne doit pas écrire une donnée que S2 doit lire . C'est une dépendance RAW (Read After Write).",
          "L(S1) ∩ E(S2) = ∅S1 ne doit pas lire une donnée que S2 doit écrire . C'est une anti-dépendance WAR (Write After Read).",
          "La première instruction écrit X . • La troisième instruction lit X .Donc :E(T1) ∩ L(T3) ≠ ∅Il existe une dépendance entre T1 et T3. De même : • T2 écrit Z. • T3 lit Z.Donc :E(T2) ∩ L(T3) ≠ ∅",
          "E(S1) ∩ E(S2) = ∅S1 et S2 ne doivent pas écrire la même donnée . C'est une dépendance WAW (Write After Write)."
        ],
        "correctIndex": 1
      },
      {
        "id": 58,
        "chapitre": "\udd25 CONDITION DE BERNSTEIN",
        "sousPoint": "Généralités",
        "question": "Que signifie la troisième condition ?",
        "answer": "<div class=\"math-block\">$$E(S_1) \\cap E(S_2) = \\varnothing$$</div>S1 et S2 ne doivent pas <strong>écrire la même donnée</strong>.<br>C'est une dépendance <strong>WAW</strong> (Write After Write).",
        "cleanAnswer": "E(S1) ∩ E(S2) = ∅S1 et S2 ne doivent pas écrire la même donnée . C'est une dépendance WAW (Write After Write).",
        "type": "qcm",
        "options": [
          "E(S1) ∩ L(S2) = ∅S1 ne doit pas écrire une donnée que S2 doit lire . C'est une dépendance RAW (Read After Write).",
          "E(S1) ∩ E(S2) = ∅S1 et S2 ne doivent pas écrire la même donnée . C'est une dépendance WAW (Write After Write).",
          "L(S1) ∩ E(S2) = ∅S1 ne doit pas lire une donnée que S2 doit écrire . C'est une anti-dépendance WAR (Write After Read).",
          "La première instruction écrit X . • La troisième instruction lit X .Donc :E(T1) ∩ L(T3) ≠ ∅Il existe une dépendance entre T1 et T3. De même : • T2 écrit Z. • T3 lit Z.Donc :E(T2) ∩ L(T3) ≠ ∅"
        ],
        "correctIndex": 1
      },
      {
        "id": 59,
        "chapitre": "\udd25 EXERCICE DE BERNSTEIN",
        "sousPoint": "Généralités",
        "question": "T1 et T2 peuvent-elles être exécutées en parallèle ?",
        "answer": "<strong>Réponse : Non.</strong>",
        "cleanAnswer": "Réponse : Non.",
        "type": "qcm",
        "options": [
          "[Bloc de code] Donc T1 et T2 peuvent être exécutées en parallèle , puis T3.",
          "Elle permet de savoir si deux séquences d'instructions peuvent être exécutées en parallèle .",
          "Ce sont les parties du programme qui peuvent être exécutées par plusieurs threads simultanément .",
          "Réponse : Non."
        ],
        "correctIndex": 3
      },
      {
        "id": 60,
        "chapitre": "\udd25 EXERCICE DE BERNSTEIN",
        "sousPoint": "Généralités",
        "question": "Pourquoi ?",
        "answer": "T1 <strong>écrit X</strong> :<div class=\"math-block\">$$E(T1) = \\{X\\}$$</div>T2 <strong>lit X</strong> :<div class=\"math-block\">$$L(T2) = \\{X, C\\}$$</div>Donc :<div class=\"math-block\">$$E(T1) \\cap L(T2) = \\{X\\}$$</div>Ce n'est pas vide :<div class=\"math-block\">$$\\{X\\} \\neq \\varnothing$$</div>Donc il existe une dépendance <strong>RAW</strong>.<br><strong>Conclusion :</strong><div class=\"math-block\">$$T1 \\rightarrow T2$$</div>Il faut terminer T1 avant d'exécuter T2.",
        "cleanAnswer": "T1 écrit X :E(T1) = \\{X\\}T2 lit X :L(T2) = \\{X, C\\}Donc :E(T1) ∩ L(T2) = \\{X\\}Ce n'est pas vide :\\{X\\} ≠ ∅Donc il existe une dépendance RAW . Conclusion : T1 -> T2Il faut terminer T1 avant d'exécuter T2.",
        "type": "qcm",
        "options": [
          "La première instruction écrit X . • La troisième instruction lit X .Donc :E(T1) ∩ L(T3) ≠ ∅Il existe une dépendance entre T1 et T3. De même : • T2 écrit Z. • T3 lit Z.Donc :E(T2) ∩ L(T3) ≠ ∅",
          "E(S1) ∩ E(S2) = ∅S1 et S2 ne doivent pas écrire la même donnée . C'est une dépendance WAW (Write After Write).",
          "E(S1) ∩ L(S2) = ∅S1 ne doit pas écrire une donnée que S2 doit lire . C'est une dépendance RAW (Read After Write).",
          "T1 écrit X :E(T1) = \\{X\\}T2 lit X :L(T2) = \\{X, C\\}Donc :E(T1) ∩ L(T2) = \\{X\\}Ce n'est pas vide :\\{X\\} ≠ ∅Donc il existe une dépendance RAW . Conclusion : T1 -> T2Il faut terminer T1 avant d'exécuter T2."
        ],
        "correctIndex": 3
      },
      {
        "id": 61,
        "chapitre": "\udd25 EXERCICE : X, Z, W",
        "sousPoint": "Généralités",
        "question": "Peut-on exécuter les trois instructions simultanément ?",
        "answer": "<strong>Réponse : Non.</strong>",
        "cleanAnswer": "Réponse : Non.",
        "type": "qcm",
        "options": [
          "Multiple Instruction, Single Data. Plusieurs instructions sont exécutées simultanément sur une même donnée .",
          "Réponse : Non.",
          "Le pipeline consiste à diviser l'exécution d'une instruction en plusieurs étapes afin de pouvoir traiter plusieurs instructions simultanément.",
          "Il est intégré à la puce du processeur et peut être séparé en cache instructions et cache données ."
        ],
        "correctIndex": 1
      },
      {
        "id": 62,
        "chapitre": "\udd25 EXERCICE : X, Z, W",
        "sousPoint": "Généralités",
        "question": "Pourquoi ?",
        "answer": "<ul class=\"styled-ul\"><li>La première instruction <strong>écrit X</strong>.</li><li>La troisième instruction <strong>lit X</strong>.</li></ul>Donc :<div class=\"math-block\">$$E(T1) \\cap L(T3) \\neq \\varnothing$$</div>Il existe une dépendance entre T1 et T3.<br>De même :<ul class=\"styled-ul\"><li>T2 écrit Z.</li><li>T3 lit Z.</li></ul>Donc :<div class=\"math-block\">$$E(T2) \\cap L(T3) \\neq \\varnothing$$</div>",
        "cleanAnswer": "La première instruction écrit X . • La troisième instruction lit X .Donc :E(T1) ∩ L(T3) ≠ ∅Il existe une dépendance entre T1 et T3. De même : • T2 écrit Z. • T3 lit Z.Donc :E(T2) ∩ L(T3) ≠ ∅",
        "type": "checkbox",
        "allItems": [
          "T2 écrit Z.",
          "E = ensemble des écritures ;",
          "p = nombre de processeurs ;",
          "La troisième instruction lit X.",
          "T3 lit Z.",
          "La première instruction écrit X.",
          "L = ensemble des lectures."
        ],
        "correctItems": [
          "La première instruction écrit X.",
          "La troisième instruction lit X.",
          "T2 écrit Z.",
          "T3 lit Z."
        ],
        "distractors": [
          "E = ensemble des écritures ;",
          "L = ensemble des lectures.",
          "p = nombre de processeurs ;"
        ]
      },
      {
        "id": 63,
        "chapitre": "\udd25 EXERCICE : X, Z, W",
        "sousPoint": "Généralités",
        "question": "Quel est le graphe de dépendance ?",
        "answer": "<pre class=\"code-block\"><code>T1 ───→\n        \\\n         → T3\n        /\nT2 ───→</code></pre>Donc <strong>T1 et T2 peuvent être exécutées en parallèle</strong>, puis T3.",
        "cleanAnswer": "[Bloc de code] Donc T1 et T2 peuvent être exécutées en parallèle , puis T3.",
        "type": "qcm",
        "options": [
          "Il représente une relation de précédence ou de dépendance entre deux tâches. Exemple : [Bloc de code] Cela signifie que T1 doit être exécutée avant T2 .",
          "[Bloc de code] Donc T1 et T2 peuvent être exécutées en parallèle , puis T3.",
          "[Bloc de code]",
          "[Bloc de code] Même instruction, données différentes."
        ],
        "correctIndex": 1
      },
      {
        "id": 64,
        "chapitre": "\udd25 ÉQUILIBRAGE DE CHARGE",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce que l'équilibrage de charge ?",
        "answer": "C'est le fait de <strong>répartir le travail équitablement entre les processeurs</strong> afin qu'ils terminent approximativement au même moment.",
        "cleanAnswer": "C'est le fait de répartir le travail équitablement entre les processeurs afin qu'ils terminent approximativement au même moment.",
        "type": "qcm",
        "options": [
          "C'est le fait de répartir le travail équitablement entre les processeurs afin qu'ils terminent approximativement au même moment.",
          "L'accélération est inférieure au nombre de processeurs , notamment à cause des surcoûts et des parties séquentielles.",
          "Parce qu'en plus du calcul, il faut gérer la communication et la coordination entre les processeurs .",
          "Parce qu'un processeur qui termine trop tôt peut rester inactif pendant que les autres travaillent encore."
        ],
        "correctIndex": 0
      },
      {
        "id": 65,
        "chapitre": "\udd25 ÉQUILIBRAGE DE CHARGE",
        "sousPoint": "Généralités",
        "question": "Pourquoi l'équilibrage de charge est-il important ?",
        "answer": "Parce qu'un processeur qui termine trop tôt peut rester <strong>inactif</strong> pendant que les autres travaillent encore.",
        "cleanAnswer": "Parce qu'un processeur qui termine trop tôt peut rester inactif pendant que les autres travaillent encore.",
        "type": "qcm",
        "options": [
          "Parce qu'un processeur qui termine trop tôt peut rester inactif pendant que les autres travaillent encore.",
          "C'est le fait de répartir le travail équitablement entre les processeurs afin qu'ils terminent approximativement au même moment.",
          "Elle divise le processeur en plusieurs unités fonctionnelles spécialisées qui peuvent travailler en parallèle.",
          "Il offre généralement une meilleure fiabilité : la panne d'un processeur n'affecte pas nécessairement les autres."
        ],
        "correctIndex": 0
      },
      {
        "id": 66,
        "chapitre": "\udd25 EXERCICE DES 10 000 ÉLÉMENTS",
        "sousPoint": "Généralités",
        "question": "Quel est le temps total du type A ?",
        "answer": "<div class=\"math-block\">$$8000 \\times 1 = 8000\\ \\mu s$$</div>",
        "cleanAnswer": "8000 × 1 = 8000\\ µs",
        "type": "qcm",
        "options": [
          "8000 + 8000 = 16000\\ µs",
          "2000 × 4 = 8000\\ µs",
          "(16000 / 4) = 4000\\ µsDonc :4000\\ µs/CPU",
          "8000 × 1 = 8000\\ µs"
        ],
        "correctIndex": 3
      },
      {
        "id": 67,
        "chapitre": "\udd25 EXERCICE DES 10 000 ÉLÉMENTS",
        "sousPoint": "Généralités",
        "question": "Quel est le temps total du type B ?",
        "answer": "<div class=\"math-block\">$$2000 \\times 4 = 8000\\ \\mu s$$</div>",
        "cleanAnswer": "2000 × 4 = 8000\\ µs",
        "type": "qcm",
        "options": [
          "(16000 / 4) = 4000\\ µsDonc :4000\\ µs/CPU",
          "8000 × 1 = 8000\\ µs",
          "2000 × 4 = 8000\\ µs",
          "8000 + 8000 = 16000\\ µs"
        ],
        "correctIndex": 2
      },
      {
        "id": 68,
        "chapitre": "\udd25 EXERCICE DES 10 000 ÉLÉMENTS",
        "sousPoint": "Généralités",
        "question": "Quel est le temps total ?",
        "answer": "<div class=\"math-block\">$$8000 + 8000 = 16000\\ \\mu s$$</div>",
        "cleanAnswer": "8000 + 8000 = 16000\\ µs",
        "type": "qcm",
        "options": [
          "8000 + 8000 = 16000\\ µs",
          "2000 × 4 = 8000\\ µs",
          "(16000 / 4) = 4000\\ µsDonc :4000\\ µs/CPU",
          "8000 × 1 = 8000\\ µs"
        ],
        "correctIndex": 0
      },
      {
        "id": 69,
        "chapitre": "\udd25 EXERCICE DES 10 000 ÉLÉMENTS",
        "sousPoint": "Généralités",
        "question": "Quel temps de travail moyen par CPU ?",
        "answer": "<div class=\"math-block\">$$\\frac{16000}{4} = 4000\\ \\mu s$$</div>Donc :<div class=\"math-block\">$$4000\\ \\mu s/CPU$$</div>",
        "cleanAnswer": "(16000 / 4) = 4000\\ µsDonc :4000\\ µs/CPU",
        "type": "qcm",
        "options": [
          "2000 × 4 = 8000\\ µs",
          "8000 × 1 = 8000\\ µs",
          "(16000 / 4) = 4000\\ µsDonc :4000\\ µs/CPU",
          "8000 + 8000 = 16000\\ µs"
        ],
        "correctIndex": 2
      },
      {
        "id": 70,
        "chapitre": "\udd25 EXERCICE DES 10 000 ÉLÉMENTS",
        "sousPoint": "Généralités",
        "question": "Quel est l'objectif de la répartition ?",
        "answer": "Répartir les éléments de type A et B pour que <strong>chaque CPU ait environ 4000 µs de travail</strong>.",
        "cleanAnswer": "Répartir les éléments de type A et B pour que chaque CPU ait environ 4000 µs de travail .",
        "type": "qcm",
        "options": [
          "Répartir les éléments de type A et B pour que chaque CPU ait environ 4000 µs de travail .",
          "Augmenter les performances et réduire le temps d'exécution.",
          "Mémoire partagée.",
          "Réduire le temps d'exécution et augmenter les performances."
        ],
        "correctIndex": 0
      },
      {
        "id": 71,
        "chapitre": "\udd39 OPENMP",
        "sousPoint": "Généralités",
        "question": "Que signifie OpenMP ?",
        "answer": "<strong>Open Multi-Processing.</strong>",
        "cleanAnswer": "Open Multi-Processing.",
        "type": "qcm",
        "options": [
          "L(S1) ∩ E(S2) = ∅S1 ne doit pas lire une donnée que S2 doit écrire . C'est une anti-dépendance WAR (Write After Read).",
          "Open Multi-Processing.",
          "Single Instruction, Single Data. Une seule instruction travaille sur une seule donnée. C'est le modèle classique séquentiel de Von Neumann .",
          "C'est une API de programmation parallèle destinée principalement aux architectures à mémoire partagée."
        ],
        "correctIndex": 1
      },
      {
        "id": 72,
        "chapitre": "\udd39 OPENMP",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce qu'OpenMP ?",
        "answer": "C'est une <strong>API de programmation parallèle</strong> destinée principalement aux architectures à mémoire partagée.",
        "cleanAnswer": "C'est une API de programmation parallèle destinée principalement aux architectures à mémoire partagée.",
        "type": "qcm",
        "options": [
          "Un processus → plusieurs threads → mémoire partagée.",
          "Pour réduire le temps d'accès aux données .",
          "MPI → mémoire distribuée et communication par messages. • OpenMP → mémoire partagée et utilisation de threads.",
          "C'est une API de programmation parallèle destinée principalement aux architectures à mémoire partagée."
        ],
        "correctIndex": 3
      },
      {
        "id": 73,
        "chapitre": "\udd39 OPENMP",
        "sousPoint": "Généralités",
        "question": "Quels langages sont supportés ?",
        "answer": "<ul class=\"styled-ul\"><li>C</li><li>C++</li><li>Fortran</li></ul>",
        "cleanAnswer": "C • C++ • Fortran",
        "type": "checkbox",
        "allItems": [
          "Tp = temps parallèle.",
          "C++",
          "C",
          "Fortran",
          "registre d'état"
        ],
        "correctItems": [
          "C",
          "C++",
          "Fortran"
        ],
        "distractors": [
          "registre d'état",
          "Tp = temps parallèle."
        ]
      },
      {
        "id": 74,
        "chapitre": "\udd39 OPENMP",
        "sousPoint": "Généralités",
        "question": "Sur quels systèmes OpenMP peut-il fonctionner ?",
        "answer": "Sur de nombreuses plateformes, notamment <strong>Linux et Windows</strong>.",
        "cleanAnswer": "Sur de nombreuses plateformes, notamment Linux et Windows .",
        "type": "qcm",
        "options": [
          "Open Multi-Processing.",
          "Le modèle MIMD .",
          "C'est une API de programmation parallèle destinée principalement aux architectures à mémoire partagée.",
          "Sur de nombreuses plateformes, notamment Linux et Windows ."
        ],
        "correctIndex": 3
      },
      {
        "id": 75,
        "chapitre": "\udd39 OPENMP",
        "sousPoint": "Généralités",
        "question": "Sur quel type de mémoire OpenMP fonctionne-t-il ?",
        "answer": "<strong>Mémoire partagée.</strong>",
        "cleanAnswer": "Mémoire partagée.",
        "type": "qcm",
        "options": [
          "Mémoire partagée.",
          "Un processus → plusieurs threads → mémoire partagée.",
          "MPI → mémoire distribuée et communication par messages. • OpenMP → mémoire partagée et utilisation de threads.",
          "C'est une API de programmation parallèle destinée principalement aux architectures à mémoire partagée."
        ],
        "correctIndex": 0
      },
      {
        "id": 76,
        "chapitre": "\udd39 OPENMP",
        "sousPoint": "Généralités",
        "question": "Comment se présente OpenMP ?",
        "answer": "Il comprend :<ul class=\"styled-ul\"><li>des directives ;</li><li>une bibliothèque logicielle ;</li><li>des variables d'environnement.</li></ul>",
        "cleanAnswer": "Il comprend : • des directives ; • une bibliothèque logicielle ; • des variables d'environnement.",
        "type": "checkbox",
        "allItems": [
          "des variables d'environnement.",
          "une bibliothèque logicielle ;",
          "MPI → mémoire distribuée et communication par messages.",
          "OpenMP → mémoire partagée et utilisation de threads.",
          "des directives ;"
        ],
        "correctItems": [
          "des directives ;",
          "une bibliothèque logicielle ;",
          "des variables d'environnement."
        ],
        "distractors": [
          "MPI → mémoire distribuée et communication par messages.",
          "OpenMP → mémoire partagée et utilisation de threads."
        ]
      },
      {
        "id": 77,
        "chapitre": "\udd39 OPENMP",
        "sousPoint": "Généralités",
        "question": "Un programme OpenMP utilise combien de processus ?",
        "answer": "Un programme OpenMP est exécuté par <strong>un seul processus</strong> qui peut créer plusieurs threads.",
        "cleanAnswer": "Un programme OpenMP est exécuté par un seul processus qui peut créer plusieurs threads.",
        "type": "qcm",
        "options": [
          "Pour exécuter plusieurs parties indépendantes d'un programme en parallèle et réduire le temps d'exécution .",
          "Ce sont les parties du programme qui peuvent être exécutées par plusieurs threads simultanément .",
          "Un processus → plusieurs threads → mémoire partagée.",
          "Un programme OpenMP est exécuté par un seul processus qui peut créer plusieurs threads."
        ],
        "correctIndex": 3
      },
      {
        "id": 78,
        "chapitre": "\udd39 OPENMP",
        "sousPoint": "Généralités",
        "question": "Que sont les régions séquentielles ?",
        "answer": "Ce sont les parties du programme exécutées <strong>séquentiellement</strong>.",
        "cleanAnswer": "Ce sont les parties du programme exécutées séquentiellement .",
        "type": "qcm",
        "options": [
          "Ce sont les parties du programme qui peuvent être exécutées par plusieurs threads simultanément .",
          "L'accélération est inférieure au nombre de processeurs , notamment à cause des surcoûts et des parties séquentielles.",
          "Pour exécuter plusieurs parties indépendantes d'un programme en parallèle et réduire le temps d'exécution .",
          "Ce sont les parties du programme exécutées séquentiellement ."
        ],
        "correctIndex": 3
      },
      {
        "id": 79,
        "chapitre": "\udd39 OPENMP",
        "sousPoint": "Généralités",
        "question": "Que sont les régions parallèles ?",
        "answer": "Ce sont les parties du programme qui peuvent être exécutées <strong>par plusieurs threads simultanément</strong>.",
        "cleanAnswer": "Ce sont les parties du programme qui peuvent être exécutées par plusieurs threads simultanément .",
        "type": "qcm",
        "options": [
          "Pour exécuter plusieurs parties indépendantes d'un programme en parallèle et réduire le temps d'exécution .",
          "Ce sont les parties du programme exécutées séquentiellement .",
          "Ce sont les parties du programme qui peuvent être exécutées par plusieurs threads simultanément .",
          "Un programme OpenMP est exécuté par un seul processus qui peut créer plusieurs threads."
        ],
        "correctIndex": 2
      },
      {
        "id": 80,
        "chapitre": "\udd39 OPENMP",
        "sousPoint": "Généralités",
        "question": "Qui exécute la région séquentielle ?",
        "answer": "La tâche maître, appelée généralement <strong>thread maître</strong>.",
        "cleanAnswer": "La tâche maître, appelée généralement thread maître .",
        "type": "qcm",
        "options": [
          "La tâche maître, appelée généralement thread maître .",
          "C'est un système contenant plusieurs processeurs physiques , généralement sur des puces distinctes.",
          "Il est intégré à la puce du processeur et peut être séparé en cache instructions et cache données .",
          "Non. Une version parallèle peut avoir une formulation très différente de la version séquentielle."
        ],
        "correctIndex": 0
      },
      {
        "id": 81,
        "chapitre": "QUESTIONS TRÈS PROBABLES À L'EXAMEN",
        "sousPoint": "Généralités",
        "question": "Quels sont les 4 modèles de Flynn ?",
        "answer": "<strong>SISD, SIMD, MISD, MIMD</strong>",
        "cleanAnswer": "SISD, SIMD, MISD, MIMD",
        "type": "qcm",
        "options": [
          "Elle se base sur : • le flot d'instructions ; • le flot de données .",
          "Elle distingue 4 types : SISD, SIMD, MISD et MIMD.",
          "Multiple Instruction, Single Data. Plusieurs instructions sont exécutées simultanément sur une même donnée .",
          "SISD, SIMD, MISD, MIMD"
        ],
        "correctIndex": 3
      },
      {
        "id": 82,
        "chapitre": "QUESTIONS TRÈS PROBABLES À L'EXAMEN",
        "sousPoint": "Généralités",
        "question": "Quels sont les 3 types de parallélisme au niveau d'instruction ?",
        "answer": "<ol class=\"styled-ol\"><li>Pipeline</li><li>Superscalaire</li><li>VLIW</li></ol>",
        "cleanAnswer": "Pipeline • Superscalaire • VLIW",
        "type": "order",
        "correctOrder": [
          "Pipeline",
          "Superscalaire",
          "VLIW"
        ],
        "shuffledItems": [
          "Pipeline",
          "Superscalaire",
          "VLIW"
        ]
      },
      {
        "id": 83,
        "chapitre": "QUESTIONS TRÈS PROBABLES À L'EXAMEN",
        "sousPoint": "Généralités",
        "question": "Quelle est la formule du speedup ?",
        "answer": "<div class=\"math-block\">$$Acc = \\frac{T_s}{T_p}$$</div>",
        "cleanAnswer": "Acc = (Ts / Tp)",
        "type": "qcm",
        "options": [
          "Acc = (Ts / Tp)avec : • Ts = temps séquentiel ; • Tp = temps parallèle.",
          "Acc(p) = (1 / α + \\frac{1-α){p}}",
          "Acc(p) = (1 / α + \\frac{1-α){p}}avec : • α = partie non parallélisable ; • p = nombre de cœurs/processeurs.",
          "Acc = (Ts / Tp)"
        ],
        "correctIndex": 3
      },
      {
        "id": 84,
        "chapitre": "QUESTIONS TRÈS PROBABLES À L'EXAMEN",
        "sousPoint": "Généralités",
        "question": "Quelle est la formule d'Amdahl ?",
        "answer": "<div class=\"math-block\">$$Acc(p) = \\frac{1}{\\alpha + \\frac{1-\\alpha}{p}}$$</div>",
        "cleanAnswer": "Acc(p) = (1 / α + \\frac{1-α){p}}",
        "type": "qcm",
        "options": [
          "Acc(p) = (1 / α + \\frac{1-α){p}}avec : • α = partie non parallélisable ; • p = nombre de cœurs/processeurs.",
          "Acc(p) = p - α(p-1)",
          "Acc = (Ts / Tp)",
          "Acc(p) = (1 / α + \\frac{1-α){p}}"
        ],
        "correctIndex": 3
      },
      {
        "id": 85,
        "chapitre": "QUESTIONS TRÈS PROBABLES À L'EXAMEN",
        "sousPoint": "Généralités",
        "question": "Quelle est la formule de Gustafson ?",
        "answer": "<div class=\"math-block\">$$Acc(p) = p - \\alpha(p-1)$$</div>",
        "cleanAnswer": "Acc(p) = p - α(p-1)",
        "type": "qcm",
        "options": [
          "Acc(p) = p - α(p-1)où : • p = nombre de processeurs ; • α = partie séquentielle.",
          "Acc(p) = p - α(p-1)",
          "Acc = (Ts / Tp)",
          "Acc(p) = (1 / α + \\frac{1-α){p}}"
        ],
        "correctIndex": 1
      },
      {
        "id": 86,
        "chapitre": "QUESTIONS TRÈS PROBABLES À L'EXAMEN",
        "sousPoint": "Généralités",
        "question": "Quels sont les trois types de dépendance de Bernstein ?",
        "answer": "<ul class=\"styled-ul\"><li><strong>RAW</strong> → Read After Write</li><li><strong>WAR</strong> → Write After Read</li><li><strong>WAW</strong> → Write After Write</li></ul>",
        "cleanAnswer": "RAW → Read After Write • WAR → Write After Read • WAW → Write After Write",
        "type": "checkbox",
        "allItems": [
          "L = ensemble des lectures.",
          "WAR → Write After Read",
          "RAW → Read After Write",
          "E = ensemble des écritures ;",
          "WAW → Write After Write"
        ],
        "correctItems": [
          "RAW → Read After Write",
          "WAR → Write After Read",
          "WAW → Write After Write"
        ],
        "distractors": [
          "E = ensemble des écritures ;",
          "L = ensemble des lectures."
        ]
      },
      {
        "id": 87,
        "chapitre": "QUESTIONS TRÈS PROBABLES À L'EXAMEN",
        "sousPoint": "Généralités",
        "question": "Quel est le principe d'OpenMP ?",
        "answer": "<strong>Un processus → plusieurs threads → mémoire partagée.</strong>",
        "cleanAnswer": "Un processus → plusieurs threads → mémoire partagée.",
        "type": "qcm",
        "options": [
          "MPI → mémoire distribuée et communication par messages. • OpenMP → mémoire partagée et utilisation de threads.",
          "C'est une API de programmation parallèle destinée principalement aux architectures à mémoire partagée.",
          "Un programme OpenMP est exécuté par un seul processus qui peut créer plusieurs threads.",
          "Un processus → plusieurs threads → mémoire partagée."
        ],
        "correctIndex": 3
      },
      {
        "id": 88,
        "chapitre": "QUESTIONS TRÈS PROBABLES À L'EXAMEN",
        "sousPoint": "Généralités",
        "question": "Quelle est la différence essentielle entre MPI et OpenMP ?",
        "answer": "<ul class=\"styled-ul\"><li><strong>MPI</strong> → mémoire distribuée et communication par messages.</li><li><strong>OpenMP</strong> → mémoire partagée et utilisation de threads.</li></ul>",
        "cleanAnswer": "MPI → mémoire distribuée et communication par messages. • OpenMP → mémoire partagée et utilisation de threads.",
        "type": "checkbox",
        "allItems": [
          "MPI → mémoire distribuée et communication par messages.",
          "OpenMP → mémoire partagée et utilisation de threads.",
          "registres généraux.",
          "Limiter le coût de communication entre les unités."
        ],
        "correctItems": [
          "MPI → mémoire distribuée et communication par messages.",
          "OpenMP → mémoire partagée et utilisation de threads."
        ],
        "distractors": [
          "registres généraux.",
          "Limiter le coût de communication entre les unités."
        ]
      },
      {
        "id": 89,
        "chapitre": "QUESTIONS TRÈS PROBABLES À L'EXAMEN",
        "sousPoint": "Généralités",
        "question": "Quel est le principe général de la programmation parallèle ?",
        "answer": "<strong>Décomposer → répartir → exécuter en parallèle → synchroniser → réunir les résultats.</strong>",
        "cleanAnswer": "Décomposer → répartir → exécuter en parallèle → synchroniser → réunir les résultats.",
        "type": "qcm",
        "options": [
          "Décomposer → répartir → exécuter en parallèle → synchroniser → réunir les résultats.",
          "Augmenter les performances et réduire le temps d'exécution.",
          "C'est une technique qui consiste à exécuter plusieurs sous-tâches en même temps afin de résoudre plus rapidement un problème complexe ou de grande taille.",
          "C'est un ensemble de processeurs qui coopèrent et communiquent pour exécuter un traitement."
        ],
        "correctIndex": 0
      },
      {
        "id": 90,
        "chapitre": "QUESTIONS TRÈS PROBABLES À L'EXAMEN",
        "sousPoint": "Généralités",
        "question": "Quel est l'objectif final ?",
        "answer": "<strong>Réduire le temps d'exécution et augmenter les performances.</strong>",
        "cleanAnswer": "Réduire le temps d'exécution et augmenter les performances.",
        "type": "qcm",
        "options": [
          "Pour exécuter plusieurs parties indépendantes d'un programme en parallèle et réduire le temps d'exécution .",
          "Pour réduire le temps d'accès aux données .",
          "Augmenter les performances et réduire le temps d'exécution.",
          "Réduire le temps d'exécution et augmenter les performances."
        ],
        "correctIndex": 3
      }
    ]
  },
  "audit": {
    "id": "audit",
    "title": "Audit Informatique",
    "icon": "🛡️",
    "questions": [
      {
        "id": 1,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un audit ?",
        "answer": "L’audit est une démarche méthodique effectuée par un agent compétent, indépendant, intègre et professionnel afin de porter un jugement par rapport à une norme sur les états financiers, le contrôle interne, l’organisation, une procédure ou une opération quelconque d’une entité.",
        "cleanAnswer": "L’audit est une démarche méthodique effectuée par un agent compétent, indépendant, intègre et professionnel afin de porter un jugement par rapport à une norme sur les états financiers, le contrôle interne, l’organisation, une procédure ou une opération quelconque d’une entité.",
        "type": "qcm",
        "options": [
          "La mission comprend principalement la préparation et la planification, l'évaluation de l'environnement du contrôle interne, les investigations, puis la conclusion des travaux et la restitution du rapport.",
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables.",
          "L’audit est une démarche méthodique effectuée par un agent compétent, indépendant, intègre et professionnel afin de porter un jugement par rapport à une norme sur les états financiers, le contrôle interne, l’organisation, une procédure ou une opération quelconque d’une entité.",
          "L’audit interne est une activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations, lui apporte des conseils pour les améliorer et contribue à créer de la valeur ajoutée."
        ],
        "correctIndex": 2
      },
      {
        "id": 2,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quelle est l’origine du terme « audit » ?",
        "answer": "Le terme « audit » vient de l’anglais et d’une locution latine proche des notions de contrôle, vérification, expertise et évaluation.",
        "cleanAnswer": "Le terme « audit » vient de l’anglais et d’une locution latine proche des notions de contrôle, vérification, expertise et évaluation.",
        "type": "qcm",
        "options": [
          "Le terme « audit » vient de l’anglais et d’une locution latine proche des notions de contrôle, vérification, expertise et évaluation.",
          "La mission comprend principalement la préparation et la planification, l'évaluation de l'environnement du contrôle interne, les investigations, puis la conclusion des travaux et la restitution du rapport.",
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
          "Les Romains employaient ce terme pour désigner un contrôle effectué au nom de l’empereur sur la gestion des provinces."
        ],
        "correctIndex": 0
      },
      {
        "id": 3,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "De quel verbe latin vient le mot « audit » ?",
        "answer": "Il vient du verbe latin <em>audire</em>, qui signifie « écouter ».",
        "cleanAnswer": "Il vient du verbe latin audire , qui signifie « écouter ».",
        "type": "qcm",
        "options": [
          "COBIT signifie Control Objectives for Information and related Technology .",
          "Il vient du verbe latin audire , qui signifie « écouter ».",
          "ISACA signifie Information Systems Audit & Control Association .",
          "Auditer une entreprise ou un service consiste notamment à écouter les différents acteurs afin de comprendre et de faire évoluer le système en place."
        ],
        "correctIndex": 1
      },
      {
        "id": 4,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Comment les Romains utilisaient-ils le terme audit ?",
        "answer": "Les Romains employaient ce terme pour désigner un contrôle effectué au nom de l’empereur sur la gestion des provinces.",
        "cleanAnswer": "Les Romains employaient ce terme pour désigner un contrôle effectué au nom de l’empereur sur la gestion des provinces.",
        "type": "qcm",
        "options": [
          "Le terme « audit » vient de l’anglais et d’une locution latine proche des notions de contrôle, vérification, expertise et évaluation.",
          "Elles sont regroupées sous ce terme en raison d’exigences réglementaires ou normatives qui imposent notamment des procédures écrites avec des responsables identifiés.",
          "Il fut introduit par les Anglo-Saxons au début du XIIIᵉ siècle dans le domaine de la gestion.",
          "Les Romains employaient ce terme pour désigner un contrôle effectué au nom de l’empereur sur la gestion des provinces."
        ],
        "correctIndex": 3
      },
      {
        "id": 5,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quand le terme audit fut-il introduit par les Anglo-Saxons ?",
        "answer": "Il fut introduit par les Anglo-Saxons au début du XIIIᵉ siècle dans le domaine de la gestion.",
        "cleanAnswer": "Il fut introduit par les Anglo-Saxons au début du XIIIᵉ siècle dans le domaine de la gestion.",
        "type": "qcm",
        "options": [
          "Il fut introduit par les Anglo-Saxons au début du XIIIᵉ siècle dans le domaine de la gestion.",
          "Le terme « audit » vient de l’anglais et d’une locution latine proche des notions de contrôle, vérification, expertise et évaluation.",
          "Il cherche à déterminer dans quelle mesure les éléments du système observé satisfont aux exigences des référentiels du domaine concerné.",
          "Les Romains employaient ce terme pour désigner un contrôle effectué au nom de l’empereur sur la gestion des provinces."
        ],
        "correctIndex": 0
      },
      {
        "id": 6,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quelles sont les principales opérations regroupées sous le terme audit ?",
        "answer": "Il s’agit notamment des évaluations, investigations, observations, entretiens, vérifications et contrôles.",
        "cleanAnswer": "Il s’agit notamment des évaluations, investigations, observations, entretiens, vérifications et contrôles.",
        "type": "qcm",
        "options": [
          "Il s’agit notamment des évaluations, investigations, observations, entretiens, vérifications et contrôles.",
          "Elles comprennent : • la collecte de documents ; • la planification et la réalisation d'entretiens ; • les tests de cheminement ; • les tests de conformité et de pénétration ; • l'analyse des logs et des accès.",
          "L’audit interne est une activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations, lui apporte des conseils pour les améliorer et contribue à créer de la valeur ajoutée.",
          "Elles sont regroupées sous ce terme en raison d’exigences réglementaires ou normatives qui imposent notamment des procédures écrites avec des responsables identifiés."
        ],
        "correctIndex": 0
      },
      {
        "id": 7,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Pourquoi ces opérations sont-elles regroupées sous le terme audit ?",
        "answer": "Elles sont regroupées sous ce terme en raison d’exigences réglementaires ou normatives qui imposent notamment des procédures écrites avec des responsables identifiés.",
        "cleanAnswer": "Elles sont regroupées sous ce terme en raison d’exigences réglementaires ou normatives qui imposent notamment des procédures écrites avec des responsables identifiés.",
        "type": "qcm",
        "options": [
          "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
          "Elles sont regroupées sous ce terme en raison d’exigences réglementaires ou normatives qui imposent notamment des procédures écrites avec des responsables identifiés.",
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
          "Il s’agit notamment des évaluations, investigations, observations, entretiens, vérifications et contrôles."
        ],
        "correctIndex": 1
      },
      {
        "id": 8,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Pourquoi l’audit est-il considéré comme un outil d’amélioration continue ?",
        "answer": "Parce qu’il permet de faire le point sur l’existant afin d’identifier les points faibles ou les éléments non conformes et de mettre en œuvre des actions correctives.",
        "cleanAnswer": "Parce qu’il permet de faire le point sur l’existant afin d’identifier les points faibles ou les éléments non conformes et de mettre en œuvre des actions correctives.",
        "type": "qcm",
        "options": [
          "Il permet de s'assurer que les recommandations sont effectivement mises en œuvre et qu'elles produisent les effets attendus sur la sécurité et l'efficacité des systèmes.",
          "Il consiste à accompagner l’organisation dans la mise en œuvre des recommandations et à vérifier leur efficacité.",
          "Il vérifie que les recommandations ont été mises en œuvre et qu'elles produisent les effets attendus.",
          "Parce qu’il permet de faire le point sur l’existant afin d’identifier les points faibles ou les éléments non conformes et de mettre en œuvre des actions correctives."
        ],
        "correctIndex": 3
      },
      {
        "id": 9,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Comment les résultats d’un audit sont-ils formalisés ?",
        "answer": "Ils sont nécessairement formalisés sous la forme d’un rapport écrit.",
        "cleanAnswer": "Ils sont nécessairement formalisés sous la forme d’un rapport écrit.",
        "type": "qcm",
        "options": [
          "Il contient notamment les constats, les recommandations et le plan d'action.",
          "Ils sont nécessairement formalisés sous la forme d’un rapport écrit.",
          "Elle se termine par la rédaction du rapport final, l'évaluation des risques résiduels et la présentation des conclusions à la direction et aux parties prenantes.",
          "Les tests de pénétration, les analyses de vulnérabilités, la revue des politiques de sécurité et des configurations, ainsi que les simulations d’attaques et les évaluations des réponses."
        ],
        "correctIndex": 1
      },
      {
        "id": 10,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel est l’objectif du rapport d’audit ?",
        "answer": "Il permet de présenter les constats et de mener les actions nécessaires pour corriger les écarts et les dysfonctionnements relevés.",
        "cleanAnswer": "Il permet de présenter les constats et de mener les actions nécessaires pour corriger les écarts et les dysfonctionnements relevés.",
        "type": "qcm",
        "options": [
          "Il permet de présenter les constats et de mener les actions nécessaires pour corriger les écarts et les dysfonctionnements relevés.",
          "Il doit synthétiser les constats, les recommandations et les actions correctives.",
          "Il contient les constatations, les conclusions et les recommandations.",
          "Assurer la conformité aux exigences légales et réglementaires, identifier les écarts par rapport aux normes et proposer des mesures correctives."
        ],
        "correctIndex": 0
      },
      {
        "id": 11,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quelles sont les principales caractéristiques d’un audit ?",
        "answer": "L’audit est un processus systématique, indépendant et précisément documenté.",
        "cleanAnswer": "L’audit est un processus systématique, indépendant et précisément documenté.",
        "type": "qcm",
        "options": [
          "Les tests de pénétration, les analyses de vulnérabilités, la revue des politiques de sécurité et des configurations, ainsi que les simulations d’attaques et les évaluations des réponses.",
          "Un test de pénétration permettant d’identifier les failles de sécurité.",
          "L’audit est un processus systématique, indépendant et précisément documenté.",
          "L’audit de performance."
        ],
        "correctIndex": 2
      },
      {
        "id": 12,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Que cherche à déterminer un audit ?",
        "answer": "Il cherche à déterminer dans quelle mesure les éléments du système observé satisfont aux exigences des référentiels du domaine concerné.",
        "cleanAnswer": "Il cherche à déterminer dans quelle mesure les éléments du système observé satisfont aux exigences des référentiels du domaine concerné.",
        "type": "qcm",
        "options": [
          "Il cherche à déterminer dans quelle mesure les éléments du système observé satisfont aux exigences des référentiels du domaine concerné.",
          "Il coordonne les activités de l’organisation et lui permet ainsi d’atteindre ses objectifs.",
          "Cela permet de présenter les résultats de la mission à la direction et aux parties prenantes concernées.",
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes."
        ],
        "correctIndex": 0
      },
      {
        "id": 13,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quels éléments l’audit cherche-t-il notamment à détecter ?",
        "answer": "Il cherche notamment à détecter les anomalies et les risques associés dans les organismes et secteurs d’activité examinés.",
        "cleanAnswer": "Il cherche notamment à détecter les anomalies et les risques associés dans les organismes et secteurs d’activité examinés.",
        "type": "qcm",
        "options": [
          "On cherche notamment à détecter les anomalies et les privilèges excessifs.",
          "Il cherche notamment à détecter les anomalies et les risques associés dans les organismes et secteurs d’activité examinés.",
          "L’audit de sécurité.",
          "Il cherche notamment à identifier les risques opérationnels, financiers et de réputation."
        ],
        "correctIndex": 1
      },
      {
        "id": 14,
        "chapitre": "1. Introduction à l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Que signifie auditer une entreprise ou un service ?",
        "answer": "Auditer une entreprise ou un service consiste notamment à écouter les différents acteurs afin de comprendre et de faire évoluer le système en place.",
        "cleanAnswer": "Auditer une entreprise ou un service consiste notamment à écouter les différents acteurs afin de comprendre et de faire évoluer le système en place.",
        "type": "qcm",
        "options": [
          "C’est une évaluation de l’efficacité des mesures de sécurité mises en place pour protéger les systèmes d’information contre les menaces internes et externes.",
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
          "Elle permet d’apporter une assurance sur la qualité et la maîtrise du risque relatif au système d’information.",
          "Auditer une entreprise ou un service consiste notamment à écouter les différents acteurs afin de comprendre et de faire évoluer le système en place."
        ],
        "correctIndex": 3
      },
      {
        "id": 15,
        "chapitre": "2. Définition et nécessité de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Pourquoi l’audit informatique est-il devenu nécessaire ?",
        "answer": "Parce que l’informatique est devenue le support privilégié du système d’information, notamment pour les données et les traitements.",
        "cleanAnswer": "Parce que l’informatique est devenue le support privilégié du système d’information, notamment pour les données et les traitements.",
        "type": "qcm",
        "options": [
          "Principalement à cause de l’automatisation des tâches, de la numérisation des informations de gestion et des pièces justificatives, ainsi que de la dématérialisation des processus.",
          "Il permet d’assurer la fiabilité des données, la sécurité des systèmes, l’optimisation des processus et la conformité réglementaire.",
          "Parce qu’il est nécessaire de comprendre le système d’information et d’être capable d’apprécier la capacité des systèmes informatiques à assurer la fiabilité de l’information de gestion.",
          "Parce que l’informatique est devenue le support privilégié du système d’information, notamment pour les données et les traitements."
        ],
        "correctIndex": 3
      },
      {
        "id": 16,
        "chapitre": "2. Définition et nécessité de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Pourquoi l’informatique est-elle devenue un support privilégié du système d’information ?",
        "answer": "Principalement à cause de l’automatisation des tâches, de la numérisation des informations de gestion et des pièces justificatives, ainsi que de la dématérialisation des processus.",
        "cleanAnswer": "Principalement à cause de l’automatisation des tâches, de la numérisation des informations de gestion et des pièces justificatives, ainsi que de la dématérialisation des processus.",
        "type": "qcm",
        "options": [
          "C’est la transformation des informations et pièces justificatives en données numériques pouvant être traitées informatiquement.",
          "Parce que l’informatique est devenue le support privilégié du système d’information, notamment pour les données et les traitements.",
          "Cela signifie garantir que les informations restent exactes, complètes et ne soient pas modifiées de manière non autorisée.",
          "Principalement à cause de l’automatisation des tâches, de la numérisation des informations de gestion et des pièces justificatives, ainsi que de la dématérialisation des processus."
        ],
        "correctIndex": 3
      },
      {
        "id": 17,
        "chapitre": "2. Définition et nécessité de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce que l’automatisation des tâches ?",
        "answer": "C’est l’utilisation de systèmes informatiques pour exécuter automatiquement certaines tâches auparavant réalisées manuellement.",
        "cleanAnswer": "C’est l’utilisation de systèmes informatiques pour exécuter automatiquement certaines tâches auparavant réalisées manuellement.",
        "type": "qcm",
        "options": [
          "C’est une évaluation de l’efficacité des mesures de sécurité mises en place pour protéger les systèmes d’information contre les menaces internes et externes.",
          "C’est l’utilisation de systèmes informatiques pour exécuter automatiquement certaines tâches auparavant réalisées manuellement.",
          "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
          "Parce qu’il est nécessaire de comprendre le système d’information et d’être capable d’apprécier la capacité des systèmes informatiques à assurer la fiabilité de l’information de gestion."
        ],
        "correctIndex": 1
      },
      {
        "id": 18,
        "chapitre": "2. Définition et nécessité de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce que la numérisation des informations de gestion ?",
        "answer": "C’est la transformation des informations et pièces justificatives en données numériques pouvant être traitées informatiquement.",
        "cleanAnswer": "C’est la transformation des informations et pièces justificatives en données numériques pouvant être traitées informatiquement.",
        "type": "qcm",
        "options": [
          "Un référentiel est un ensemble structuré de données, d’informations ou de connaissances servant de base de référence pour un domaine spécifique.",
          "Il décrit les données utilisées dans une organisation.",
          "C’est la transformation des informations et pièces justificatives en données numériques pouvant être traitées informatiquement.",
          "Principalement à cause de l’automatisation des tâches, de la numérisation des informations de gestion et des pièces justificatives, ainsi que de la dématérialisation des processus."
        ],
        "correctIndex": 2
      },
      {
        "id": 19,
        "chapitre": "2. Définition et nécessité de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce que la dématérialisation des processus ?",
        "answer": "C’est le remplacement des processus utilisant des supports physiques par des processus réalisés sous forme numérique.",
        "cleanAnswer": "C’est le remplacement des processus utilisant des supports physiques par des processus réalisés sous forme numérique.",
        "type": "qcm",
        "options": [
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
          "C’est le remplacement des processus utilisant des supports physiques par des processus réalisés sous forme numérique.",
          "C’est une évaluation de l’efficacité des mesures de sécurité mises en place pour protéger les systèmes d’information contre les menaces internes et externes.",
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables."
        ],
        "correctIndex": 1
      },
      {
        "id": 20,
        "chapitre": "2. Définition et nécessité de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Pourquoi les contrôles automatisés nécessitent-ils un audit informatique ?",
        "answer": "Parce qu’il est nécessaire de comprendre le système d’information et d’être capable d’apprécier la capacité des systèmes informatiques à assurer la fiabilité de l’information de gestion.",
        "cleanAnswer": "Parce qu’il est nécessaire de comprendre le système d’information et d’être capable d’apprécier la capacité des systèmes informatiques à assurer la fiabilité de l’information de gestion.",
        "type": "qcm",
        "options": [
          "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit.",
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
          "Afin d’assurer la pérennité, l’intégrité et la confidentialité du système d’information.",
          "Parce qu’il est nécessaire de comprendre le système d’information et d’être capable d’apprécier la capacité des systèmes informatiques à assurer la fiabilité de l’information de gestion."
        ],
        "correctIndex": 3
      },
      {
        "id": 21,
        "chapitre": "2. Définition et nécessité de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "À quelle condition les contrôles automatisés sont-ils fiables et pérennes ?",
        "answer": "Ils ne sont fiables et pérennes que si l’environnement informatique est efficacement contrôlé.",
        "cleanAnswer": "Ils ne sont fiables et pérennes que si l’environnement informatique est efficacement contrôlé.",
        "type": "qcm",
        "options": [
          "Ce sont les contrôles qui concernent l’environnement général informatique et qui permettent notamment d’assurer un fonctionnement maîtrisé des systèmes.",
          "Ils ne sont fiables et pérennes que si l’environnement informatique est efficacement contrôlé.",
          "Parce qu’il est nécessaire de comprendre le système d’information et d’être capable d’apprécier la capacité des systèmes informatiques à assurer la fiabilité de l’information de gestion.",
          "Parce que ces contrôles permettent de s’assurer que l’environnement informatique fonctionne de manière fiable et maîtrisée."
        ],
        "correctIndex": 1
      },
      {
        "id": 22,
        "chapitre": "2. Définition et nécessité de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Pourquoi faut-il connaître les contrôles effectués par la fonction informatique ?",
        "answer": "Parce que ces contrôles permettent de s’assurer que l’environnement informatique fonctionne de manière fiable et maîtrisée.",
        "cleanAnswer": "Parce que ces contrôles permettent de s’assurer que l’environnement informatique fonctionne de manière fiable et maîtrisée.",
        "type": "qcm",
        "options": [
          "Afin d’assurer la pérennité, l’intégrité et la confidentialité du système d’information.",
          "Parce que ces contrôles permettent de s’assurer que l’environnement informatique fonctionne de manière fiable et maîtrisée.",
          "Ce sont les contrôles qui concernent l’environnement général informatique et qui permettent notamment d’assurer un fonctionnement maîtrisé des systèmes.",
          "Pour vérifier qu’ils existent, qu’ils fonctionnent correctement et qu’ils permettent effectivement de maîtriser les risques."
        ],
        "correctIndex": 1
      },
      {
        "id": 23,
        "chapitre": "2. Définition et nécessité de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel est l’objectif de l’audit informatique ?",
        "answer": "L’audit informatique a pour objectif d’identifier et d’évaluer les risques associés aux activités informatiques d’une entreprise ou d’une administration.",
        "cleanAnswer": "L’audit informatique a pour objectif d’identifier et d’évaluer les risques associés aux activités informatiques d’une entreprise ou d’une administration.",
        "type": "qcm",
        "options": [
          "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit.",
          "Elles permettent d’identifier, d’évaluer et de gérer les risques liés aux technologies de l’information.",
          "L’audit informatique a pour objectif d’identifier et d’évaluer les risques associés aux activités informatiques d’une entreprise ou d’une administration.",
          "Elle se termine par la rédaction du rapport final, l'évaluation des risques résiduels et la présentation des conclusions à la direction et aux parties prenantes."
        ],
        "correctIndex": 2
      },
      {
        "id": 24,
        "chapitre": "2. Définition et nécessité de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quels risques l’audit informatique cherche-t-il à identifier ?",
        "answer": "Il cherche notamment à identifier les risques opérationnels, financiers et de réputation.",
        "cleanAnswer": "Il cherche notamment à identifier les risques opérationnels, financiers et de réputation.",
        "type": "qcm",
        "options": [
          "Il cherche notamment à identifier les risques opérationnels, financiers et de réputation.",
          "L’audit de sécurité.",
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
          "L’audit informatique a pour objectif d’identifier et d’évaluer les risques associés aux activités informatiques d’une entreprise ou d’une administration."
        ],
        "correctIndex": 0
      },
      {
        "id": 25,
        "chapitre": "2. Définition et nécessité de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Sur quoi l’audit informatique se base-t-il ?",
        "answer": "Il se base sur le cadre réglementaire du secteur d’activité du pays concerné, les référentiels de bonnes pratiques, les benchmarks disponibles et l’expérience professionnelle des auditeurs.",
        "cleanAnswer": "Il se base sur le cadre réglementaire du secteur d’activité du pays concerné, les référentiels de bonnes pratiques, les benchmarks disponibles et l’expérience professionnelle des auditeurs.",
        "type": "qcm",
        "options": [
          "Elles fournissent des cadres de référence et des bonnes pratiques permettant d’évaluer et d’améliorer les systèmes d’information.",
          "Il se base sur le cadre réglementaire du secteur d’activité du pays concerné, les référentiels de bonnes pratiques, les benchmarks disponibles et l’expérience professionnelle des auditeurs.",
          "Il permet d’assurer la fiabilité des données, la sécurité des systèmes, l’optimisation des processus et la conformité réglementaire.",
          "Elles offrent un cadre structuré permettant aux auditeurs de suivre des procédures standardisées et reconnues internationalement."
        ],
        "correctIndex": 1
      },
      {
        "id": 26,
        "chapitre": "2. Définition et nécessité de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel exemple de référentiel de bonnes pratiques est cité dans le cours ?",
        "answer": "Le référentiel COBIT est cité comme exemple.",
        "cleanAnswer": "Le référentiel COBIT est cité comme exemple.",
        "type": "qcm",
        "options": [
          "Il se base sur le cadre réglementaire du secteur d’activité du pays concerné, les référentiels de bonnes pratiques, les benchmarks disponibles et l’expérience professionnelle des auditeurs.",
          "ITIL est un recueil de bonnes pratiques concernant les niveaux et le support des services informatiques.",
          "COBIT.",
          "Le référentiel COBIT est cité comme exemple."
        ],
        "correctIndex": 3
      },
      {
        "id": 27,
        "chapitre": "3. Importance et objectifs de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quelle est l’importance de l’audit informatique ?",
        "answer": "Il permet d’assurer la fiabilité des données, la sécurité des systèmes, l’optimisation des processus et la conformité réglementaire.",
        "cleanAnswer": "Il permet d’assurer la fiabilité des données, la sécurité des systèmes, l’optimisation des processus et la conformité réglementaire.",
        "type": "qcm",
        "options": [
          "Évaluer l’efficacité des processus de gestion des risques, de contrôle et de gouvernance, améliorer les opérations et assurer la conformité aux politiques internes et aux réglementations.",
          "L’analyse des indicateurs de performance, la revue des processus et systèmes de gestion, les interviews des parties prenantes et l’analyse des données.",
          "Il permet d’assurer la fiabilité des données, la sécurité des systèmes, l’optimisation des processus et la conformité réglementaire.",
          "Parce que l’informatique est devenue le support privilégié du système d’information, notamment pour les données et les traitements."
        ],
        "correctIndex": 2
      },
      {
        "id": 28,
        "chapitre": "3. Importance et objectifs de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quels sont les principaux objectifs de l’audit informatique ?",
        "answer": "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit.",
        "cleanAnswer": "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit.",
        "type": "qcm",
        "options": [
          "Afin d’assurer la pérennité, l’intégrité et la confidentialité du système d’information.",
          "Les interviews, observations et tests de contrôle sont utilisés de manière complémentaire afin d’obtenir une vue d’ensemble complète et précise des systèmes d’information et des contrôles en place.",
          "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit.",
          "Parce qu’il est nécessaire de comprendre le système d’information et d’être capable d’apprécier la capacité des systèmes informatiques à assurer la fiabilité de l’information de gestion."
        ],
        "correctIndex": 2
      },
      {
        "id": 29,
        "chapitre": "3. Importance et objectifs de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Pourquoi faut-il comprendre le contrôle interne lié à l’environnement informatique ?",
        "answer": "Afin d’assurer la pérennité, l’intégrité et la confidentialité du système d’information.",
        "cleanAnswer": "Afin d’assurer la pérennité, l’intégrité et la confidentialité du système d’information.",
        "type": "qcm",
        "options": [
          "Ce sont les contrôles qui concernent l’environnement général informatique et qui permettent notamment d’assurer un fonctionnement maîtrisé des systèmes.",
          "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit.",
          "Afin d’assurer la pérennité, l’intégrité et la confidentialité du système d’information.",
          "Parce qu’il est nécessaire de comprendre le système d’information et d’être capable d’apprécier la capacité des systèmes informatiques à assurer la fiabilité de l’information de gestion."
        ],
        "correctIndex": 2
      },
      {
        "id": 30,
        "chapitre": "3. Importance et objectifs de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Que signifie assurer la pérennité du système d’information ?",
        "answer": "Cela signifie veiller à ce que le système d’information puisse fonctionner et rester disponible dans le temps.",
        "cleanAnswer": "Cela signifie veiller à ce que le système d’information puisse fonctionner et rester disponible dans le temps.",
        "type": "qcm",
        "options": [
          "Cela signifie empêcher que les informations soient accessibles à des personnes non autorisées.",
          "Afin d’assurer la pérennité, l’intégrité et la confidentialité du système d’information.",
          "Cela signifie garantir que les informations restent exactes, complètes et ne soient pas modifiées de manière non autorisée.",
          "Cela signifie veiller à ce que le système d’information puisse fonctionner et rester disponible dans le temps."
        ],
        "correctIndex": 3
      },
      {
        "id": 31,
        "chapitre": "3. Importance et objectifs de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Que signifie assurer l’intégrité du système d’information ?",
        "answer": "Cela signifie garantir que les informations restent exactes, complètes et ne soient pas modifiées de manière non autorisée.",
        "cleanAnswer": "Cela signifie garantir que les informations restent exactes, complètes et ne soient pas modifiées de manière non autorisée.",
        "type": "qcm",
        "options": [
          "Cela signifie garantir que les informations restent exactes, complètes et ne soient pas modifiées de manière non autorisée.",
          "Cela signifie veiller à ce que le système d’information puisse fonctionner et rester disponible dans le temps.",
          "Parce qu’il est nécessaire de comprendre le système d’information et d’être capable d’apprécier la capacité des systèmes informatiques à assurer la fiabilité de l’information de gestion.",
          "Cela signifie empêcher que les informations soient accessibles à des personnes non autorisées."
        ],
        "correctIndex": 0
      },
      {
        "id": 32,
        "chapitre": "3. Importance et objectifs de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Que signifie assurer la confidentialité du système d’information ?",
        "answer": "Cela signifie empêcher que les informations soient accessibles à des personnes non autorisées.",
        "cleanAnswer": "Cela signifie empêcher que les informations soient accessibles à des personnes non autorisées.",
        "type": "qcm",
        "options": [
          "Cela signifie veiller à ce que le système d’information puisse fonctionner et rester disponible dans le temps.",
          "Afin d’assurer la pérennité, l’intégrité et la confidentialité du système d’information.",
          "Cela signifie garantir que les informations restent exactes, complètes et ne soient pas modifiées de manière non autorisée.",
          "Cela signifie empêcher que les informations soient accessibles à des personnes non autorisées."
        ],
        "correctIndex": 3
      },
      {
        "id": 33,
        "chapitre": "3. Importance et objectifs de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Que sont les contrôles généraux informatiques ?",
        "answer": "Ce sont les contrôles qui concernent l’environnement général informatique et qui permettent notamment d’assurer un fonctionnement maîtrisé des systèmes.",
        "cleanAnswer": "Ce sont les contrôles qui concernent l’environnement général informatique et qui permettent notamment d’assurer un fonctionnement maîtrisé des systèmes.",
        "type": "qcm",
        "options": [
          "Ce sont les contrôles qui concernent l’environnement général informatique et qui permettent notamment d’assurer un fonctionnement maîtrisé des systèmes.",
          "Parce que ces contrôles permettent de s’assurer que l’environnement informatique fonctionne de manière fiable et maîtrisée.",
          "Parce qu’il est nécessaire de comprendre le système d’information et d’être capable d’apprécier la capacité des systèmes informatiques à assurer la fiabilité de l’information de gestion.",
          "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit."
        ],
        "correctIndex": 0
      },
      {
        "id": 34,
        "chapitre": "3. Importance et objectifs de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Que sont les contrôles applicatifs ?",
        "answer": "Ce sont les contrôles intégrés ou liés aux applications informatiques afin de vérifier la validité et la conformité des traitements effectués.",
        "cleanAnswer": "Ce sont les contrôles intégrés ou liés aux applications informatiques afin de vérifier la validité et la conformité des traitements effectués.",
        "type": "qcm",
        "options": [
          "Ce sont les contrôles intégrés ou liés aux applications informatiques afin de vérifier la validité et la conformité des traitements effectués.",
          "Il est nécessaire de mettre en place une démarche d’audit afin de répondre aux enjeux liés à la maîtrise des systèmes d’information et aux risques informatiques.",
          "On sélectionne un échantillon de transactions ou de processus, on applique des tests spécifiques pour vérifier la conformité aux contrôles établis et on documente les résultats.",
          "Il constitue un référentiel concernant les contrôles applicatifs."
        ],
        "correctIndex": 0
      },
      {
        "id": 35,
        "chapitre": "3. Importance et objectifs de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Pourquoi faut-il tester les contrôles généraux et applicatifs ?",
        "answer": "Pour vérifier qu’ils existent, qu’ils fonctionnent correctement et qu’ils permettent effectivement de maîtriser les risques.",
        "cleanAnswer": "Pour vérifier qu’ils existent, qu’ils fonctionnent correctement et qu’ils permettent effectivement de maîtriser les risques.",
        "type": "qcm",
        "options": [
          "Ils fournissent des preuves tangibles de l’efficacité des contrôles et permettent de quantifier les écarts et les risques.",
          "Ils permettent de vérifier que les contrôles sont effectivement appliqués au cours du traitement des transactions.",
          "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit.",
          "Pour vérifier qu’ils existent, qu’ils fonctionnent correctement et qu’ils permettent effectivement de maîtriser les risques."
        ],
        "correctIndex": 3
      },
      {
        "id": 36,
        "chapitre": "3. Importance et objectifs de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’une piste d’audit ?",
        "answer": "La piste d’audit, également appelée chemin de révision, permet de retracer et de suivre les opérations effectuées dans le système.",
        "cleanAnswer": "La piste d’audit, également appelée chemin de révision, permet de retracer et de suivre les opérations effectuées dans le système.",
        "type": "qcm",
        "options": [
          "Elle permet de proposer des recommandations destinées à améliorer la qualité et la sécurité du système d’information.",
          "Elle permet d’apporter une assurance sur la qualité et la maîtrise du risque relatif au système d’information.",
          "La piste d’audit, également appelée chemin de révision, permet de retracer et de suivre les opérations effectuées dans le système.",
          "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit."
        ],
        "correctIndex": 2
      },
      {
        "id": 37,
        "chapitre": "3. Importance et objectifs de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle de la piste d’audit ?",
        "answer": "Elle permet d’apporter une assurance sur la qualité et la maîtrise du risque relatif au système d’information.",
        "cleanAnswer": "Elle permet d’apporter une assurance sur la qualité et la maîtrise du risque relatif au système d’information.",
        "type": "qcm",
        "options": [
          "La piste d’audit, également appelée chemin de révision, permet de retracer et de suivre les opérations effectuées dans le système.",
          "Elle permet d’apporter une assurance sur la qualité et la maîtrise du risque relatif au système d’information.",
          "Elle permet de proposer des recommandations destinées à améliorer la qualité et la sécurité du système d’information.",
          "Non. Elle s’inscrit dans une démarche plus globale de gouvernance informatique et concerne également la fonction d’audit interne."
        ],
        "correctIndex": 1
      },
      {
        "id": 38,
        "chapitre": "3. Importance et objectifs de l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel autre objectif est lié à la piste d’audit ?",
        "answer": "Elle permet de proposer des recommandations destinées à améliorer la qualité et la sécurité du système d’information.",
        "cleanAnswer": "Elle permet de proposer des recommandations destinées à améliorer la qualité et la sécurité du système d’information.",
        "type": "qcm",
        "options": [
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
          "La piste d’audit, également appelée chemin de révision, permet de retracer et de suivre les opérations effectuées dans le système.",
          "Elle permet de proposer des recommandations destinées à améliorer la qualité et la sécurité du système d’information.",
          "Elle permet d’apporter une assurance sur la qualité et la maîtrise du risque relatif au système d’information."
        ],
        "correctIndex": 2
      },
      {
        "id": 39,
        "chapitre": "4. Système d’information et enjeux",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un système d’information ?",
        "answer": "C’est un ensemble de personnes, de procédures et de ressources qui recueillent l’information, la transforment et la distribuent au sein d’une organisation.",
        "cleanAnswer": "C’est un ensemble de personnes, de procédures et de ressources qui recueillent l’information, la transforment et la distribuent au sein d’une organisation.",
        "type": "qcm",
        "options": [
          "C’est un ensemble de personnes, de procédures et de ressources qui recueillent l’information, la transforment et la distribuent au sein d’une organisation.",
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables.",
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
          "C’est une évaluation de l’efficacité des mesures de sécurité mises en place pour protéger les systèmes d’information contre les menaces internes et externes."
        ],
        "correctIndex": 0
      },
      {
        "id": 40,
        "chapitre": "4. Système d’information et enjeux",
        "sousPoint": "Généralités",
        "question": "Quel rôle joue le système d’information dans une organisation ?",
        "answer": "Il constitue le véhicule de la communication dans l’organisation.",
        "cleanAnswer": "Il constitue le véhicule de la communication dans l’organisation.",
        "type": "qcm",
        "options": [
          "Il coordonne les activités de l’organisation et lui permet ainsi d’atteindre ses objectifs.",
          "Il constitue le véhicule de la communication dans l’organisation.",
          "C’est un ensemble de personnes, de procédures et de ressources qui recueillent l’information, la transforment et la distribuent au sein d’une organisation.",
          "Elle permet d’apporter une assurance sur la qualité et la maîtrise du risque relatif au système d’information."
        ],
        "correctIndex": 1
      },
      {
        "id": 41,
        "chapitre": "4. Système d’information et enjeux",
        "sousPoint": "Généralités",
        "question": "De quelles ressources est constituée la structure d’un système d’information ?",
        "answer": "Elle est constituée des hommes, du matériel et des logiciels organisés pour collecter, stocker, traiter et communiquer les informations.",
        "cleanAnswer": "Elle est constituée des hommes, du matériel et des logiciels organisés pour collecter, stocker, traiter et communiquer les informations.",
        "type": "qcm",
        "options": [
          "Cela signifie garantir que les informations restent exactes, complètes et ne soient pas modifiées de manière non autorisée.",
          "Elle est constituée des hommes, du matériel et des logiciels organisés pour collecter, stocker, traiter et communiquer les informations.",
          "Collecter, stocker, traiter et communiquer les informations.",
          "C’est un ensemble de personnes, de procédures et de ressources qui recueillent l’information, la transforment et la distribuent au sein d’une organisation."
        ],
        "correctIndex": 1
      },
      {
        "id": 42,
        "chapitre": "4. Système d’information et enjeux",
        "sousPoint": "Généralités",
        "question": "Quelles sont les principales fonctions d’un système d’information ?",
        "answer": "Collecter, stocker, traiter et communiquer les informations.",
        "cleanAnswer": "Collecter, stocker, traiter et communiquer les informations.",
        "type": "qcm",
        "options": [
          "Collecter, stocker, traiter et communiquer les informations.",
          "Cela signifie empêcher que les informations soient accessibles à des personnes non autorisées.",
          "Elle est constituée des hommes, du matériel et des logiciels organisés pour collecter, stocker, traiter et communiquer les informations.",
          "Principalement à cause de l’automatisation des tâches, de la numérisation des informations de gestion et des pièces justificatives, ainsi que de la dématérialisation des processus."
        ],
        "correctIndex": 0
      },
      {
        "id": 43,
        "chapitre": "4. Système d’information et enjeux",
        "sousPoint": "Généralités",
        "question": "Comment le système d’information contribue-t-il aux activités de l’organisation ?",
        "answer": "Il coordonne les activités de l’organisation et lui permet ainsi d’atteindre ses objectifs.",
        "cleanAnswer": "Il coordonne les activités de l’organisation et lui permet ainsi d’atteindre ses objectifs.",
        "type": "qcm",
        "options": [
          "Il constitue le véhicule de la communication dans l’organisation.",
          "Elle permet de proposer des recommandations destinées à améliorer la qualité et la sécurité du système d’information.",
          "Elle permet d’apporter une assurance sur la qualité et la maîtrise du risque relatif au système d’information.",
          "Il coordonne les activités de l’organisation et lui permet ainsi d’atteindre ses objectifs."
        ],
        "correctIndex": 3
      },
      {
        "id": 44,
        "chapitre": "4. Système d’information et enjeux",
        "sousPoint": "Généralités",
        "question": "La maîtrise des systèmes d’information relève-t-elle uniquement des spécialistes de la DSI ?",
        "answer": "Non. Elle s’inscrit dans une démarche plus globale de gouvernance informatique et concerne également la fonction d’audit interne.",
        "cleanAnswer": "Non. Elle s’inscrit dans une démarche plus globale de gouvernance informatique et concerne également la fonction d’audit interne.",
        "type": "qcm",
        "options": [
          "Il est nécessaire de mettre en place une démarche d’audit afin de répondre aux enjeux liés à la maîtrise des systèmes d’information et aux risques informatiques.",
          "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit.",
          "Non. Elle s’inscrit dans une démarche plus globale de gouvernance informatique et concerne également la fonction d’audit interne.",
          "Elle permet d’apporter une assurance sur la qualité et la maîtrise du risque relatif au système d’information."
        ],
        "correctIndex": 2
      },
      {
        "id": 45,
        "chapitre": "4. Système d’information et enjeux",
        "sousPoint": "Généralités",
        "question": "Pourquoi faut-il mettre en place une démarche d’audit ?",
        "answer": "Il est nécessaire de mettre en place une démarche d’audit afin de répondre aux enjeux liés à la maîtrise des systèmes d’information et aux risques informatiques.",
        "cleanAnswer": "Il est nécessaire de mettre en place une démarche d’audit afin de répondre aux enjeux liés à la maîtrise des systèmes d’information et aux risques informatiques.",
        "type": "qcm",
        "options": [
          "Non. Elle s’inscrit dans une démarche plus globale de gouvernance informatique et concerne également la fonction d’audit interne.",
          "Elle permet d’apporter une assurance sur la qualité et la maîtrise du risque relatif au système d’information.",
          "Il est nécessaire de mettre en place une démarche d’audit afin de répondre aux enjeux liés à la maîtrise des systèmes d’information et aux risques informatiques.",
          "Les interviews, observations et tests de contrôle sont utilisés de manière complémentaire afin d’obtenir une vue d’ensemble complète et précise des systèmes d’information et des contrôles en place."
        ],
        "correctIndex": 2
      },
      {
        "id": 46,
        "chapitre": "5. Risques dans un environnement informatique",
        "sousPoint": "Généralités",
        "question": "Quel est un des principaux risques liés au manque de traces matérielles ?",
        "answer": "Le manque de traces matérielles peut entraîner un risque important de non-détection des erreurs, des malveillances ou des fraudes.",
        "cleanAnswer": "Le manque de traces matérielles peut entraîner un risque important de non-détection des erreurs, des malveillances ou des fraudes.",
        "type": "qcm",
        "options": [
          "Une séparation insuffisante des fonctions peut favoriser les erreurs, les malveillances ou les fraudes, notamment dans un système fortement intégré.",
          "Elles peuvent provenir d’erreurs humaines dans la conception, la maintenance et la mise en œuvre, ou d’utilisateurs non autorisés.",
          "Il peut notamment se produire lorsque le système d’information est fortement intégré sans possibilité de mettre en place des journaux d’événements.",
          "Le manque de traces matérielles peut entraîner un risque important de non-détection des erreurs, des malveillances ou des fraudes."
        ],
        "correctIndex": 3
      },
      {
        "id": 47,
        "chapitre": "5. Risques dans un environnement informatique",
        "sousPoint": "Généralités",
        "question": "Dans quelle situation le manque de traces matérielles peut-il se produire ?",
        "answer": "Il peut notamment se produire lorsque le système d’information est fortement intégré sans possibilité de mettre en place des journaux d’événements.",
        "cleanAnswer": "Il peut notamment se produire lorsque le système d’information est fortement intégré sans possibilité de mettre en place des journaux d’événements.",
        "type": "qcm",
        "options": [
          "Il est nécessaire de mettre en place une démarche d’audit afin de répondre aux enjeux liés à la maîtrise des systèmes d’information et aux risques informatiques.",
          "Il peut notamment se produire lorsque le système d’information est fortement intégré sans possibilité de mettre en place des journaux d’événements.",
          "Une séparation insuffisante des fonctions peut favoriser les erreurs, les malveillances ou les fraudes, notamment dans un système fortement intégré.",
          "Le manque de traces matérielles peut entraîner un risque important de non-détection des erreurs, des malveillances ou des fraudes."
        ],
        "correctIndex": 1
      },
      {
        "id": 48,
        "chapitre": "5. Risques dans un environnement informatique",
        "sousPoint": "Généralités",
        "question": "Quel avantage l’uniformité du traitement des opérations procure-t-elle ?",
        "answer": "Elle permet d’éliminer quasiment toutes les erreurs humaines.",
        "cleanAnswer": "Elle permet d’éliminer quasiment toutes les erreurs humaines.",
        "type": "qcm",
        "options": [
          "Elles peuvent provenir d’erreurs humaines dans la conception, la maintenance et la mise en œuvre, ou d’utilisateurs non autorisés.",
          "Elle fournit une vue objective et directe des opérations et permet de détecter des pratiques non documentées ou des écarts.",
          "Les erreurs de programmation peuvent entraîner un traitement incorrect de toutes les opérations.",
          "Elle permet d’éliminer quasiment toutes les erreurs humaines."
        ],
        "correctIndex": 3
      },
      {
        "id": 49,
        "chapitre": "5. Risques dans un environnement informatique",
        "sousPoint": "Généralités",
        "question": "Quel risque est associé à l’uniformité du traitement informatique ?",
        "answer": "Les erreurs de programmation peuvent entraîner un traitement incorrect de toutes les opérations.",
        "cleanAnswer": "Les erreurs de programmation peuvent entraîner un traitement incorrect de toutes les opérations.",
        "type": "qcm",
        "options": [
          "Les erreurs de programmation peuvent entraîner un traitement incorrect de toutes les opérations.",
          "Elle permet d’éliminer quasiment toutes les erreurs humaines.",
          "Une séparation insuffisante des fonctions peut favoriser les erreurs, les malveillances ou les fraudes, notamment dans un système fortement intégré.",
          "Le manque de traces matérielles peut entraîner un risque important de non-détection des erreurs, des malveillances ou des fraudes."
        ],
        "correctIndex": 0
      },
      {
        "id": 50,
        "chapitre": "5. Risques dans un environnement informatique",
        "sousPoint": "Généralités",
        "question": "Quel est le risque lié à une séparation insuffisante des fonctions ?",
        "answer": "Une séparation insuffisante des fonctions peut favoriser les erreurs, les malveillances ou les fraudes, notamment dans un système fortement intégré.",
        "cleanAnswer": "Une séparation insuffisante des fonctions peut favoriser les erreurs, les malveillances ou les fraudes, notamment dans un système fortement intégré.",
        "type": "qcm",
        "options": [
          "Il peut notamment se produire lorsque le système d’information est fortement intégré sans possibilité de mettre en place des journaux d’événements.",
          "Elle permet d’apporter une assurance sur la qualité et la maîtrise du risque relatif au système d’information.",
          "Une séparation insuffisante des fonctions peut favoriser les erreurs, les malveillances ou les fraudes, notamment dans un système fortement intégré.",
          "Le manque de traces matérielles peut entraîner un risque important de non-détection des erreurs, des malveillances ou des fraudes."
        ],
        "correctIndex": 2
      },
      {
        "id": 51,
        "chapitre": "5. Risques dans un environnement informatique",
        "sousPoint": "Généralités",
        "question": "D’où peuvent provenir les erreurs, malveillances et fraudes ?",
        "answer": "Elles peuvent provenir d’erreurs humaines dans la conception, la maintenance et la mise en œuvre, ou d’utilisateurs non autorisés.",
        "cleanAnswer": "Elles peuvent provenir d’erreurs humaines dans la conception, la maintenance et la mise en œuvre, ou d’utilisateurs non autorisés.",
        "type": "qcm",
        "options": [
          "Le manque de traces matérielles peut entraîner un risque important de non-détection des erreurs, des malveillances ou des fraudes.",
          "Elles peuvent provenir d’erreurs humaines dans la conception, la maintenance et la mise en œuvre, ou d’utilisateurs non autorisés.",
          "Ils peuvent accéder aux données, les modifier ou les supprimer.",
          "Une séparation insuffisante des fonctions peut favoriser les erreurs, les malveillances ou les fraudes, notamment dans un système fortement intégré."
        ],
        "correctIndex": 1
      },
      {
        "id": 52,
        "chapitre": "5. Risques dans un environnement informatique",
        "sousPoint": "Généralités",
        "question": "Que peuvent faire des utilisateurs non autorisés ?",
        "answer": "Ils peuvent accéder aux données, les modifier ou les supprimer.",
        "cleanAnswer": "Ils peuvent accéder aux données, les modifier ou les supprimer.",
        "type": "qcm",
        "options": [
          "Elles peuvent provenir d’erreurs humaines dans la conception, la maintenance et la mise en œuvre, ou d’utilisateurs non autorisés.",
          "Elles doivent notamment produire des effets attendus sur la sécurité et l'efficacité des systèmes.",
          "Ils peuvent accéder aux données, les modifier ou les supprimer.",
          "Les réseaux, applications, données et infrastructures."
        ],
        "correctIndex": 2
      },
      {
        "id": 53,
        "chapitre": "6. Types d’audit informatique",
        "sousPoint": "Généralités",
        "question": "Dans quels domaines peut s’appliquer la démarche d’audit informatique ?",
        "answer": "Elle peut s’appliquer à la fonction informatique, aux études informatiques, aux projets informatiques, à l’exploitation, à la planification informatique, aux réseaux et télécommunications, à la sécurité informatique, aux achats informatiques, à l’informatique locale ou décentralisée, à la qualité de service, à l’externalisation, à la gestion de parc et aux applications opérationnelles.",
        "cleanAnswer": "Elle peut s’appliquer à la fonction informatique, aux études informatiques, aux projets informatiques, à l’exploitation, à la planification informatique, aux réseaux et télécommunications, à la sécurité informatique, aux achats informatiques, à l’informatique locale ou décentralisée, à la qualité de service, à l’externalisation, à la gestion de parc et aux applications opérationnelles.",
        "type": "qcm",
        "options": [
          "Il est nécessaire de mettre en place une démarche d’audit afin de répondre aux enjeux liés à la maîtrise des systèmes d’information et aux risques informatiques.",
          "Il constitue une démarche d’évaluation de la qualité de la gestion des projets informatiques.",
          "Elle peut s’appliquer à la fonction informatique, aux études informatiques, aux projets informatiques, à l’exploitation, à la planification informatique, aux réseaux et télécommunications, à la sécurité informatique, aux achats informatiques, à l’informatique locale ou décentralisée, à la qualité de service, à l’externalisation, à la gestion de parc et aux applications opérationnelles.",
          "Non. Elle s’inscrit dans une démarche plus globale de gouvernance informatique et concerne également la fonction d’audit interne."
        ],
        "correctIndex": 2
      },
      {
        "id": 54,
        "chapitre": "6. Types d’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quelles sont les deux grandes catégories de types d’audit informatique présentées dans le cours ?",
        "answer": "<ol class=\"styled-ol\"><li>Audit interne versus audit externe ;</li><li>Audit de conformité, audit de sécurité et audit de performance.</li></ol>",
        "cleanAnswer": "Audit interne versus audit externe ; • Audit de conformité, audit de sécurité et audit de performance.",
        "type": "qcm",
        "options": [
          "Il s'agit : • Du risque inhérent, également appelé « risk associated with IT » (RAIT) ; • Du risque lié au contrôle, également appelé « risk associated with the control » (RAWC).",
          "Audit interne versus audit externe ; • Audit de conformité, audit de sécurité et audit de performance.",
          "Elles comprennent : • La rédaction du rapport final ; • L'évaluation des risques résiduels ; • Le partage des conclusions.",
          "Les principaux livrables sont : • la cartographie réseau et applicative ; • la fiche de description de l'environnement informatique ; • le mémo de prise de connaissance ; • le rapport d'audit détaillé."
        ],
        "correctIndex": 1
      },
      {
        "id": 55,
        "chapitre": "7. Audit interne",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un audit interne ?",
        "answer": "L’audit interne est une activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations, lui apporte des conseils pour les améliorer et contribue à créer de la valeur ajoutée.",
        "cleanAnswer": "L’audit interne est une activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations, lui apporte des conseils pour les améliorer et contribue à créer de la valeur ajoutée.",
        "type": "qcm",
        "options": [
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables.",
          "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
          "L’audit interne est une activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations, lui apporte des conseils pour les améliorer et contribue à créer de la valeur ajoutée."
        ],
        "correctIndex": 3
      },
      {
        "id": 56,
        "chapitre": "7. Audit interne",
        "sousPoint": "Généralités",
        "question": "Quels sont les objectifs de l’audit interne ?",
        "answer": "Évaluer l’efficacité des processus de gestion des risques, de contrôle et de gouvernance, améliorer les opérations et assurer la conformité aux politiques internes et aux réglementations.",
        "cleanAnswer": "Évaluer l’efficacité des processus de gestion des risques, de contrôle et de gouvernance, améliorer les opérations et assurer la conformité aux politiques internes et aux réglementations.",
        "type": "qcm",
        "options": [
          "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
          "Évaluer l’efficacité des processus de gestion des risques, de contrôle et de gouvernance, améliorer les opérations et assurer la conformité aux politiques internes et aux réglementations.",
          "Évaluer l’efficacité des contrôles internes en place.",
          "Assurer la conformité aux exigences légales et réglementaires, identifier les écarts par rapport aux normes et proposer des mesures correctives."
        ],
        "correctIndex": 1
      },
      {
        "id": 57,
        "chapitre": "7. Audit interne",
        "sousPoint": "Généralités",
        "question": "Quelle est la portée de l’audit interne ?",
        "answer": "Il couvre tous les aspects des opérations de l’organisation et peut inclure des audits financiers, opérationnels, de conformité et de systèmes d’information.",
        "cleanAnswer": "Il couvre tous les aspects des opérations de l’organisation et peut inclure des audits financiers, opérationnels, de conformité et de systèmes d’information.",
        "type": "qcm",
        "options": [
          "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers.",
          "Il est principalement axé sur les états financiers et les contrôles financiers, mais peut également inclure des audits de conformité et de performance.",
          "Il couvre les processus opérationnels, les systèmes de gestion et les performances financières.",
          "Il couvre tous les aspects des opérations de l’organisation et peut inclure des audits financiers, opérationnels, de conformité et de systèmes d’information."
        ],
        "correctIndex": 3
      },
      {
        "id": 58,
        "chapitre": "7. Audit interne",
        "sousPoint": "Généralités",
        "question": "À qui sont destinés les rapports d’audit interne ?",
        "answer": "Ils sont destinés à la direction et au conseil d’administration.",
        "cleanAnswer": "Ils sont destinés à la direction et au conseil d’administration.",
        "type": "qcm",
        "options": [
          "Audit interne versus audit externe ; • Audit de conformité, audit de sécurité et audit de performance.",
          "Les rapports internes sont destinés à la direction et au conseil d’administration, tandis que les rapports externes sont destinés notamment aux actionnaires, investisseurs et régulateurs.",
          "Ils sont destinés à la direction et au conseil d’administration.",
          "Ils sont destinés aux actionnaires, aux investisseurs et aux régulateurs."
        ],
        "correctIndex": 2
      },
      {
        "id": 59,
        "chapitre": "7. Audit interne",
        "sousPoint": "Généralités",
        "question": "Qui met généralement en œuvre les recommandations de l’audit interne ?",
        "answer": "L’organisation elle-même met généralement en œuvre les recommandations.",
        "cleanAnswer": "L’organisation elle-même met généralement en œuvre les recommandations.",
        "type": "qcm",
        "options": [
          "L’audit interne peut être continu ou périodique, alors que l’audit externe est généralement annuel ou réalisé selon les exigences réglementaires.",
          "Il couvre tous les aspects des opérations de l’organisation et peut inclure des audits financiers, opérationnels, de conformité et de systèmes d’information.",
          "L’organisation elle-même met généralement en œuvre les recommandations.",
          "Il consiste à accompagner l’organisation dans la mise en œuvre des recommandations et à vérifier leur efficacité."
        ],
        "correctIndex": 2
      },
      {
        "id": 60,
        "chapitre": "7. Audit interne",
        "sousPoint": "Généralités",
        "question": "Quelle est la fréquence de l’audit interne ?",
        "answer": "Il peut être réalisé de manière continue ou périodique selon les besoins de l’organisation.",
        "cleanAnswer": "Il peut être réalisé de manière continue ou périodique selon les besoins de l’organisation.",
        "type": "qcm",
        "options": [
          "Il couvre tous les aspects des opérations de l’organisation et peut inclure des audits financiers, opérationnels, de conformité et de systèmes d’information.",
          "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers.",
          "Il peut être réalisé de manière continue ou périodique selon les besoins de l’organisation.",
          "L’audit interne peut être continu ou périodique, alors que l’audit externe est généralement annuel ou réalisé selon les exigences réglementaires."
        ],
        "correctIndex": 2
      },
      {
        "id": 61,
        "chapitre": "7. Audit interne",
        "sousPoint": "Généralités",
        "question": "Les auditeurs internes doivent-ils être indépendants ?",
        "answer": "Oui. Même s’ils sont employés par l’organisation, ils doivent maintenir leur indépendance et leur objectivité.",
        "cleanAnswer": "Oui. Même s’ils sont employés par l’organisation, ils doivent maintenir leur indépendance et leur objectivité.",
        "type": "qcm",
        "options": [
          "Oui. Même s’ils sont employés par l’organisation, ils doivent maintenir leur indépendance et leur objectivité.",
          "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers.",
          "Il consiste à accompagner l’organisation dans la mise en œuvre des recommandations et à vérifier leur efficacité.",
          "Il se base sur le cadre réglementaire du secteur d’activité du pays concerné, les référentiels de bonnes pratiques, les benchmarks disponibles et l’expérience professionnelle des auditeurs."
        ],
        "correctIndex": 0
      },
      {
        "id": 62,
        "chapitre": "8. Audit externe",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un audit externe ?",
        "answer": "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables.",
        "cleanAnswer": "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables.",
        "type": "qcm",
        "options": [
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables.",
          "Fournir une opinion indépendante sur la véracité et la fidélité des états financiers et rassurer les parties prenantes externes sur la fiabilité des informations financières.",
          "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation."
        ],
        "correctIndex": 0
      },
      {
        "id": 63,
        "chapitre": "8. Audit externe",
        "sousPoint": "Généralités",
        "question": "Quels sont les objectifs de l’audit externe ?",
        "answer": "Fournir une opinion indépendante sur la véracité et la fidélité des états financiers et rassurer les parties prenantes externes sur la fiabilité des informations financières.",
        "cleanAnswer": "Fournir une opinion indépendante sur la véracité et la fidélité des états financiers et rassurer les parties prenantes externes sur la fiabilité des informations financières.",
        "type": "qcm",
        "options": [
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables.",
          "Fournir une opinion indépendante sur la véracité et la fidélité des états financiers et rassurer les parties prenantes externes sur la fiabilité des informations financières.",
          "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers.",
          "Il est principalement axé sur les états financiers et les contrôles financiers, mais peut également inclure des audits de conformité et de performance."
        ],
        "correctIndex": 1
      },
      {
        "id": 64,
        "chapitre": "8. Audit externe",
        "sousPoint": "Généralités",
        "question": "Qui sont les parties prenantes concernées par l’audit externe ?",
        "answer": "Notamment les investisseurs et les régulateurs.",
        "cleanAnswer": "Notamment les investisseurs et les régulateurs.",
        "type": "qcm",
        "options": [
          "Notamment les investisseurs et les régulateurs.",
          "Fournir une opinion indépendante sur la véracité et la fidélité des états financiers et rassurer les parties prenantes externes sur la fiabilité des informations financières.",
          "Ils sont présentés à la direction et aux parties prenantes concernées.",
          "Cela permet de présenter les résultats de la mission à la direction et aux parties prenantes concernées."
        ],
        "correctIndex": 0
      },
      {
        "id": 65,
        "chapitre": "8. Audit externe",
        "sousPoint": "Généralités",
        "question": "Quelle est la portée de l’audit externe ?",
        "answer": "Il est principalement axé sur les états financiers et les contrôles financiers, mais peut également inclure des audits de conformité et de performance.",
        "cleanAnswer": "Il est principalement axé sur les états financiers et les contrôles financiers, mais peut également inclure des audits de conformité et de performance.",
        "type": "qcm",
        "options": [
          "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers.",
          "Il couvre tous les aspects des opérations de l’organisation et peut inclure des audits financiers, opérationnels, de conformité et de systèmes d’information.",
          "Il est principalement axé sur les états financiers et les contrôles financiers, mais peut également inclure des audits de conformité et de performance.",
          "Fournir une opinion indépendante sur la véracité et la fidélité des états financiers et rassurer les parties prenantes externes sur la fiabilité des informations financières."
        ],
        "correctIndex": 2
      },
      {
        "id": 66,
        "chapitre": "8. Audit externe",
        "sousPoint": "Généralités",
        "question": "À qui sont destinés les rapports d’audit externe ?",
        "answer": "Ils sont destinés aux actionnaires, aux investisseurs et aux régulateurs.",
        "cleanAnswer": "Ils sont destinés aux actionnaires, aux investisseurs et aux régulateurs.",
        "type": "qcm",
        "options": [
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables.",
          "Les rapports internes sont destinés à la direction et au conseil d’administration, tandis que les rapports externes sont destinés notamment aux actionnaires, investisseurs et régulateurs.",
          "Ils sont destinés aux actionnaires, aux investisseurs et aux régulateurs.",
          "Ils sont destinés à la direction et au conseil d’administration."
        ],
        "correctIndex": 2
      },
      {
        "id": 67,
        "chapitre": "8. Audit externe",
        "sousPoint": "Généralités",
        "question": "Quelle est la fréquence de l’audit externe ?",
        "answer": "Il est généralement réalisé annuellement ou selon les exigences réglementaires.",
        "cleanAnswer": "Il est généralement réalisé annuellement ou selon les exigences réglementaires.",
        "type": "qcm",
        "options": [
          "L’audit interne peut être continu ou périodique, alors que l’audit externe est généralement annuel ou réalisé selon les exigences réglementaires.",
          "Il peut être réalisé de manière continue ou périodique selon les besoins de l’organisation.",
          "Il est généralement réalisé annuellement ou selon les exigences réglementaires.",
          "Assurer la conformité aux exigences légales et réglementaires, identifier les écarts par rapport aux normes et proposer des mesures correctives."
        ],
        "correctIndex": 2
      },
      {
        "id": 68,
        "chapitre": "8. Audit externe",
        "sousPoint": "Généralités",
        "question": "Quel est le niveau d’indépendance de l’auditeur externe ?",
        "answer": "L’auditeur externe est totalement indépendant de l’organisation auditée.",
        "cleanAnswer": "L’auditeur externe est totalement indépendant de l’organisation auditée.",
        "type": "qcm",
        "options": [
          "L’auditeur externe est totalement indépendant de l’organisation auditée.",
          "Il coordonne les activités de l’organisation et lui permet ainsi d’atteindre ses objectifs.",
          "Il est principalement axé sur les états financiers et les contrôles financiers, mais peut également inclure des audits de conformité et de performance.",
          "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers."
        ],
        "correctIndex": 0
      },
      {
        "id": 69,
        "chapitre": "9. Audit interne vs audit externe",
        "sousPoint": "Généralités",
        "question": "Quelle est la principale différence entre audit interne et audit externe ?",
        "answer": "L’audit interne est une activité indépendante réalisée à l’intérieur de l’organisation et orientée vers l’amélioration des opérations, tandis que l’audit externe est une évaluation indépendante réalisée par un tiers, principalement orientée vers l’opinion sur les états financiers.",
        "cleanAnswer": "L’audit interne est une activité indépendante réalisée à l’intérieur de l’organisation et orientée vers l’amélioration des opérations, tandis que l’audit externe est une évaluation indépendante réalisée par un tiers, principalement orientée vers l’opinion sur les états financiers.",
        "type": "qcm",
        "options": [
          "L’audit interne est une activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations, lui apporte des conseils pour les améliorer et contribue à créer de la valeur ajoutée.",
          "L’audit interne est une activité indépendante réalisée à l’intérieur de l’organisation et orientée vers l’amélioration des opérations, tandis que l’audit externe est une évaluation indépendante réalisée par un tiers, principalement orientée vers l’opinion sur les états financiers.",
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables.",
          "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers."
        ],
        "correctIndex": 1
      },
      {
        "id": 70,
        "chapitre": "9. Audit interne vs audit externe",
        "sousPoint": "Généralités",
        "question": "Quelle est la différence concernant la portée ?",
        "answer": "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers.",
        "cleanAnswer": "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers.",
        "type": "qcm",
        "options": [
          "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers.",
          "Il est principalement axé sur les états financiers et les contrôles financiers, mais peut également inclure des audits de conformité et de performance.",
          "Il couvre tous les aspects des opérations de l’organisation et peut inclure des audits financiers, opérationnels, de conformité et de systèmes d’information.",
          "L’audit interne peut être continu ou périodique, alors que l’audit externe est généralement annuel ou réalisé selon les exigences réglementaires."
        ],
        "correctIndex": 0
      },
      {
        "id": 71,
        "chapitre": "9. Audit interne vs audit externe",
        "sousPoint": "Généralités",
        "question": "Quelle est la différence concernant les rapports ?",
        "answer": "Les rapports internes sont destinés à la direction et au conseil d’administration, tandis que les rapports externes sont destinés notamment aux actionnaires, investisseurs et régulateurs.",
        "cleanAnswer": "Les rapports internes sont destinés à la direction et au conseil d’administration, tandis que les rapports externes sont destinés notamment aux actionnaires, investisseurs et régulateurs.",
        "type": "qcm",
        "options": [
          "Les rapports internes sont destinés à la direction et au conseil d’administration, tandis que les rapports externes sont destinés notamment aux actionnaires, investisseurs et régulateurs.",
          "Ils sont destinés à la direction et au conseil d’administration.",
          "Elle se termine par la rédaction du rapport final, l'évaluation des risques résiduels et la présentation des conclusions à la direction et aux parties prenantes.",
          "Ils sont destinés aux actionnaires, aux investisseurs et aux régulateurs."
        ],
        "correctIndex": 0
      },
      {
        "id": 72,
        "chapitre": "9. Audit interne vs audit externe",
        "sousPoint": "Généralités",
        "question": "Quelle est la différence concernant la fréquence ?",
        "answer": "L’audit interne peut être continu ou périodique, alors que l’audit externe est généralement annuel ou réalisé selon les exigences réglementaires.",
        "cleanAnswer": "L’audit interne peut être continu ou périodique, alors que l’audit externe est généralement annuel ou réalisé selon les exigences réglementaires.",
        "type": "qcm",
        "options": [
          "L’audit interne peut être continu ou périodique, alors que l’audit externe est généralement annuel ou réalisé selon les exigences réglementaires.",
          "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers.",
          "Il peut être réalisé de manière continue ou périodique selon les besoins de l’organisation.",
          "Il est généralement réalisé annuellement ou selon les exigences réglementaires."
        ],
        "correctIndex": 0
      },
      {
        "id": 73,
        "chapitre": "9. Audit interne vs audit externe",
        "sousPoint": "Généralités",
        "question": "Quelle est la différence concernant l’indépendance ?",
        "answer": "L’audit interne possède une indépendance relative, tandis que l’audit externe possède une indépendance totale.",
        "cleanAnswer": "L’audit interne possède une indépendance relative, tandis que l’audit externe possède une indépendance totale.",
        "type": "qcm",
        "options": [
          "L’audit interne possède une indépendance relative, tandis que l’audit externe possède une indépendance totale.",
          "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers.",
          "L’audit interne peut être continu ou périodique, alors que l’audit externe est généralement annuel ou réalisé selon les exigences réglementaires.",
          "Fournir une opinion indépendante sur la véracité et la fidélité des états financiers et rassurer les parties prenantes externes sur la fiabilité des informations financières."
        ],
        "correctIndex": 0
      },
      {
        "id": 74,
        "chapitre": "10. Audit de conformité",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un audit de conformité ?",
        "answer": "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
        "cleanAnswer": "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
        "type": "qcm",
        "options": [
          "Elles permettent de vérifier que les systèmes d’information respectent les exigences légales, réglementaires et internes.",
          "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables."
        ],
        "correctIndex": 1
      },
      {
        "id": 75,
        "chapitre": "10. Audit de conformité",
        "sousPoint": "Généralités",
        "question": "Quels sont les objectifs de l’audit de conformité ?",
        "answer": "Assurer la conformité aux exigences légales et réglementaires, identifier les écarts par rapport aux normes et proposer des mesures correctives.",
        "cleanAnswer": "Assurer la conformité aux exigences légales et réglementaires, identifier les écarts par rapport aux normes et proposer des mesures correctives.",
        "type": "qcm",
        "options": [
          "Elles permettent de vérifier que les systèmes d’information respectent les exigences légales, réglementaires et internes.",
          "Évaluer l’efficacité des processus de gestion des risques, de contrôle et de gouvernance, améliorer les opérations et assurer la conformité aux politiques internes et aux réglementations.",
          "Améliorer la performance opérationnelle, identifier les inefficacités et les gaspillages et proposer des recommandations pour optimiser les ressources.",
          "Assurer la conformité aux exigences légales et réglementaires, identifier les écarts par rapport aux normes et proposer des mesures correctives."
        ],
        "correctIndex": 3
      },
      {
        "id": 76,
        "chapitre": "10. Audit de conformité",
        "sousPoint": "Généralités",
        "question": "Quelle est la portée de l’audit de conformité ?",
        "answer": "Il couvre les aspects légaux, réglementaires et internes.",
        "cleanAnswer": "Il couvre les aspects légaux, réglementaires et internes.",
        "type": "qcm",
        "options": [
          "Il couvre tous les aspects des opérations de l’organisation et peut inclure des audits financiers, opérationnels, de conformité et de systèmes d’information.",
          "Assurer la conformité aux exigences légales et réglementaires, identifier les écarts par rapport aux normes et proposer des mesures correctives.",
          "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers.",
          "Il couvre les aspects légaux, réglementaires et internes."
        ],
        "correctIndex": 3
      },
      {
        "id": 77,
        "chapitre": "10. Audit de conformité",
        "sousPoint": "Généralités",
        "question": "Quelle méthodologie utilise l’audit de conformité ?",
        "answer": "Il utilise notamment la revue des documents et politiques, les interviews avec les parties prenantes, les tests de conformité et les vérifications sur le terrain.",
        "cleanAnswer": "Il utilise notamment la revue des documents et politiques, les interviews avec les parties prenantes, les tests de conformité et les vérifications sur le terrain.",
        "type": "qcm",
        "options": [
          "Il utilise notamment la revue des documents et politiques, les interviews avec les parties prenantes, les tests de conformité et les vérifications sur le terrain.",
          "On collecte les documents, réalise les entretiens, effectue les tests de cheminement, les tests de conformité et de pénétration, puis analyse les logs et les accès.",
          "Elles comprennent : • la collecte de documents ; • la planification et la réalisation d'entretiens ; • les tests de cheminement ; • les tests de conformité et de pénétration ; • l'analyse des logs et des accès.",
          "L’analyse des indicateurs de performance, la revue des processus et systèmes de gestion, les interviews des parties prenantes et l’analyse des données."
        ],
        "correctIndex": 0
      },
      {
        "id": 78,
        "chapitre": "10. Audit de conformité",
        "sousPoint": "Généralités",
        "question": "Donnez des exemples d’audit de conformité.",
        "answer": "La vérification de la conformité aux normes ISO et aux réglementations GDPR/RGPD.",
        "cleanAnswer": "La vérification de la conformité aux normes ISO et aux réglementations GDPR/RGPD.",
        "type": "qcm",
        "options": [
          "Assurer la conformité aux exigences légales et réglementaires, identifier les écarts par rapport aux normes et proposer des mesures correctives.",
          "La vérification de la conformité aux normes ISO et aux réglementations GDPR/RGPD.",
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables.",
          "Évaluer l’efficacité des processus de gestion des risques, de contrôle et de gouvernance, améliorer les opérations et assurer la conformité aux politiques internes et aux réglementations."
        ],
        "correctIndex": 1
      },
      {
        "id": 79,
        "chapitre": "10. Audit de conformité",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce que le RGPD/GDPR ?",
        "answer": "Le Règlement Général sur la Protection des Données, ou GDPR en anglais, est une réglementation européenne visant à protéger les données personnelles des individus au sein de l’Union européenne.",
        "cleanAnswer": "Le Règlement Général sur la Protection des Données, ou GDPR en anglais, est une réglementation européenne visant à protéger les données personnelles des individus au sein de l’Union européenne.",
        "type": "qcm",
        "options": [
          "Le Règlement Général sur la Protection des Données, ou GDPR en anglais, est une réglementation européenne visant à protéger les données personnelles des individus au sein de l’Union européenne.",
          "C’est une évaluation de l’efficacité des mesures de sécurité mises en place pour protéger les systèmes d’information contre les menaces internes et externes.",
          "Il décrit les données utilisées dans une organisation.",
          "L’audit interne est une activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations, lui apporte des conseils pour les améliorer et contribue à créer de la valeur ajoutée."
        ],
        "correctIndex": 0
      },
      {
        "id": 80,
        "chapitre": "11. Audit de sécurité",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un audit de sécurité ?",
        "answer": "C’est une évaluation de l’efficacité des mesures de sécurité mises en place pour protéger les systèmes d’information contre les menaces internes et externes.",
        "cleanAnswer": "C’est une évaluation de l’efficacité des mesures de sécurité mises en place pour protéger les systèmes d’information contre les menaces internes et externes.",
        "type": "qcm",
        "options": [
          "C’est une évaluation de l’efficacité des mesures de sécurité mises en place pour protéger les systèmes d’information contre les menaces internes et externes.",
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
          "C’est un test permettant de vérifier l’efficacité des contrôles internes en place.",
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables."
        ],
        "correctIndex": 0
      },
      {
        "id": 81,
        "chapitre": "11. Audit de sécurité",
        "sousPoint": "Généralités",
        "question": "Quels sont les objectifs d’un audit de sécurité ?",
        "answer": "Identifier les vulnérabilités et les risques de sécurité, évaluer l’efficacité des contrôles de sécurité et proposer des améliorations.",
        "cleanAnswer": "Identifier les vulnérabilités et les risques de sécurité, évaluer l’efficacité des contrôles de sécurité et proposer des améliorations.",
        "type": "qcm",
        "options": [
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
          "Identifier les vulnérabilités et les risques de sécurité, évaluer l’efficacité des contrôles de sécurité et proposer des améliorations.",
          "Évaluer l’efficacité des processus de gestion des risques, de contrôle et de gouvernance, améliorer les opérations et assurer la conformité aux politiques internes et aux réglementations.",
          "L’audit de sécurité."
        ],
        "correctIndex": 1
      },
      {
        "id": 82,
        "chapitre": "11. Audit de sécurité",
        "sousPoint": "Généralités",
        "question": "Quelle est la portée d’un audit de sécurité ?",
        "answer": "Il couvre les aspects physiques, logiques et organisationnels de la sécurité.",
        "cleanAnswer": "Il couvre les aspects physiques, logiques et organisationnels de la sécurité.",
        "type": "qcm",
        "options": [
          "Il couvre les aspects physiques, logiques et organisationnels de la sécurité.",
          "Un test de pénétration permettant d’identifier les failles de sécurité.",
          "Il couvre les aspects légaux, réglementaires et internes.",
          "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers."
        ],
        "correctIndex": 0
      },
      {
        "id": 83,
        "chapitre": "11. Audit de sécurité",
        "sousPoint": "Généralités",
        "question": "Quels éléments peuvent être concernés par un audit de sécurité ?",
        "answer": "Les réseaux, applications, données et infrastructures.",
        "cleanAnswer": "Les réseaux, applications, données et infrastructures.",
        "type": "qcm",
        "options": [
          "Les tests de pénétration, les analyses de vulnérabilités, la revue des politiques de sécurité et des configurations, ainsi que les simulations d’attaques et les évaluations des réponses.",
          "Ils peuvent accéder aux données, les modifier ou les supprimer.",
          "L’audit de sécurité.",
          "Les réseaux, applications, données et infrastructures."
        ],
        "correctIndex": 3
      },
      {
        "id": 84,
        "chapitre": "11. Audit de sécurité",
        "sousPoint": "Généralités",
        "question": "Quelles méthodes peuvent être utilisées lors d’un audit de sécurité ?",
        "answer": "Les tests de pénétration, les analyses de vulnérabilités, la revue des politiques de sécurité et des configurations, ainsi que les simulations d’attaques et les évaluations des réponses.",
        "cleanAnswer": "Les tests de pénétration, les analyses de vulnérabilités, la revue des politiques de sécurité et des configurations, ainsi que les simulations d’attaques et les évaluations des réponses.",
        "type": "qcm",
        "options": [
          "Les tests de pénétration, les analyses de vulnérabilités, la revue des politiques de sécurité et des configurations, ainsi que les simulations d’attaques et les évaluations des réponses.",
          "Identifier les vulnérabilités et les risques de sécurité, évaluer l’efficacité des contrôles de sécurité et proposer des améliorations.",
          "Il couvre les aspects physiques, logiques et organisationnels de la sécurité.",
          "Un test de pénétration permettant d’identifier les failles de sécurité."
        ],
        "correctIndex": 0
      },
      {
        "id": 85,
        "chapitre": "11. Audit de sécurité",
        "sousPoint": "Généralités",
        "question": "Donnez un exemple de test réalisé lors d’un audit de sécurité.",
        "answer": "Un test de pénétration permettant d’identifier les failles de sécurité.",
        "cleanAnswer": "Un test de pénétration permettant d’identifier les failles de sécurité.",
        "type": "qcm",
        "options": [
          "Il couvre les aspects physiques, logiques et organisationnels de la sécurité.",
          "Les tests de pénétration, les analyses de vulnérabilités, la revue des politiques de sécurité et des configurations, ainsi que les simulations d’attaques et les évaluations des réponses.",
          "Identifier les vulnérabilités et les risques de sécurité, évaluer l’efficacité des contrôles de sécurité et proposer des améliorations.",
          "Un test de pénétration permettant d’identifier les failles de sécurité."
        ],
        "correctIndex": 3
      },
      {
        "id": 86,
        "chapitre": "11. Audit de sécurité",
        "sousPoint": "Généralités",
        "question": "Pourquoi les politiques de gestion des mots de passe peuvent-elles être auditées ?",
        "answer": "Pour évaluer leur efficacité et vérifier qu’elles contribuent correctement à la sécurité des systèmes.",
        "cleanAnswer": "Pour évaluer leur efficacité et vérifier qu’elles contribuent correctement à la sécurité des systèmes.",
        "type": "qcm",
        "options": [
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
          "Pour évaluer leur efficacité et vérifier qu’elles contribuent correctement à la sécurité des systèmes.",
          "Elles doivent notamment produire des effets attendus sur la sécurité et l'efficacité des systèmes.",
          "Évaluer l’efficacité des processus de gestion des risques, de contrôle et de gouvernance, améliorer les opérations et assurer la conformité aux politiques internes et aux réglementations."
        ],
        "correctIndex": 1
      },
      {
        "id": 87,
        "chapitre": "12. Audit de performance",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un audit de performance ?",
        "answer": "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
        "cleanAnswer": "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
        "type": "qcm",
        "options": [
          "C’est une évaluation de l’efficacité des mesures de sécurité mises en place pour protéger les systèmes d’information contre les menaces internes et externes.",
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables.",
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
          "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes."
        ],
        "correctIndex": 2
      },
      {
        "id": 88,
        "chapitre": "12. Audit de performance",
        "sousPoint": "Généralités",
        "question": "Quels sont les objectifs de l’audit de performance ?",
        "answer": "Améliorer la performance opérationnelle, identifier les inefficacités et les gaspillages et proposer des recommandations pour optimiser les ressources.",
        "cleanAnswer": "Améliorer la performance opérationnelle, identifier les inefficacités et les gaspillages et proposer des recommandations pour optimiser les ressources.",
        "type": "qcm",
        "options": [
          "Assurer la conformité aux exigences légales et réglementaires, identifier les écarts par rapport aux normes et proposer des mesures correctives.",
          "L’audit de conformité vérifie le respect des exigences, l’audit de sécurité vérifie la protection contre les menaces et vulnérabilités, tandis que l’audit de performance cherche à améliorer l’efficacité, l’efficience et l’utilisation des ressources.",
          "Améliorer la performance opérationnelle, identifier les inefficacités et les gaspillages et proposer des recommandations pour optimiser les ressources.",
          "Identifier les vulnérabilités et les risques de sécurité, évaluer l’efficacité des contrôles de sécurité et proposer des améliorations."
        ],
        "correctIndex": 2
      },
      {
        "id": 89,
        "chapitre": "12. Audit de performance",
        "sousPoint": "Généralités",
        "question": "Quelle est la portée de l’audit de performance ?",
        "answer": "Il couvre les processus opérationnels, les systèmes de gestion et les performances financières.",
        "cleanAnswer": "Il couvre les processus opérationnels, les systèmes de gestion et les performances financières.",
        "type": "qcm",
        "options": [
          "L’analyse des indicateurs de performance, la revue des processus et systèmes de gestion, les interviews des parties prenantes et l’analyse des données.",
          "Il couvre tous les aspects des opérations de l’organisation et peut inclure des audits financiers, opérationnels, de conformité et de systèmes d’information.",
          "Il est principalement axé sur les états financiers et les contrôles financiers, mais peut également inclure des audits de conformité et de performance.",
          "Il couvre les processus opérationnels, les systèmes de gestion et les performances financières."
        ],
        "correctIndex": 3
      },
      {
        "id": 90,
        "chapitre": "12. Audit de performance",
        "sousPoint": "Généralités",
        "question": "Que peut inclure un audit de performance ?",
        "answer": "Il peut inclure des audits de productivité, de qualité et de gestion des ressources.",
        "cleanAnswer": "Il peut inclure des audits de productivité, de qualité et de gestion des ressources.",
        "type": "qcm",
        "options": [
          "Il est principalement axé sur les états financiers et les contrôles financiers, mais peut également inclure des audits de conformité et de performance.",
          "Il constitue une démarche d’évaluation de la qualité de la gestion des projets informatiques.",
          "Il couvre tous les aspects des opérations de l’organisation et peut inclure des audits financiers, opérationnels, de conformité et de systèmes d’information.",
          "Il peut inclure des audits de productivité, de qualité et de gestion des ressources."
        ],
        "correctIndex": 3
      },
      {
        "id": 91,
        "chapitre": "12. Audit de performance",
        "sousPoint": "Généralités",
        "question": "Quelle méthodologie utilise l’audit de performance ?",
        "answer": "L’analyse des indicateurs de performance, la revue des processus et systèmes de gestion, les interviews des parties prenantes et l’analyse des données.",
        "cleanAnswer": "L’analyse des indicateurs de performance, la revue des processus et systèmes de gestion, les interviews des parties prenantes et l’analyse des données.",
        "type": "qcm",
        "options": [
          "Il couvre les processus opérationnels, les systèmes de gestion et les performances financières.",
          "Il permet d’assurer la fiabilité des données, la sécurité des systèmes, l’optimisation des processus et la conformité réglementaire.",
          "L’analyse des indicateurs de performance, la revue des processus et systèmes de gestion, les interviews des parties prenantes et l’analyse des données.",
          "Il utilise notamment la revue des documents et politiques, les interviews avec les parties prenantes, les tests de conformité et les vérifications sur le terrain."
        ],
        "correctIndex": 2
      },
      {
        "id": 92,
        "chapitre": "12. Audit de performance",
        "sousPoint": "Généralités",
        "question": "Donnez deux exemples d’audit de performance.",
        "answer": "L’évaluation de la productivité des employés et l’analyse de l’efficacité des processus de production.",
        "cleanAnswer": "L’évaluation de la productivité des employés et l’analyse de l’efficacité des processus de production.",
        "type": "qcm",
        "options": [
          "L’évaluation de la productivité des employés et l’analyse de l’efficacité des processus de production.",
          "Audit interne versus audit externe ; • Audit de conformité, audit de sécurité et audit de performance.",
          "La vérification de la conformité aux normes ISO et aux réglementations GDPR/RGPD.",
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation."
        ],
        "correctIndex": 0
      },
      {
        "id": 93,
        "chapitre": "13. Comparaison des trois types d’audit",
        "sousPoint": "Généralités",
        "question": "Quel audit vérifie principalement le respect des lois, normes et règlements ?",
        "answer": "L’audit de conformité.",
        "cleanAnswer": "L’audit de conformité.",
        "type": "qcm",
        "options": [
          "L’audit de conformité vérifie le respect des exigences, l’audit de sécurité vérifie la protection contre les menaces et vulnérabilités, tandis que l’audit de performance cherche à améliorer l’efficacité, l’efficience et l’utilisation des ressources.",
          "L’audit de performance.",
          "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
          "L’audit de conformité."
        ],
        "correctIndex": 3
      },
      {
        "id": 94,
        "chapitre": "13. Comparaison des trois types d’audit",
        "sousPoint": "Généralités",
        "question": "Quel audit cherche principalement à identifier les vulnérabilités et les risques de sécurité ?",
        "answer": "L’audit de sécurité.",
        "cleanAnswer": "L’audit de sécurité.",
        "type": "qcm",
        "options": [
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
          "Identifier les vulnérabilités et les risques de sécurité, évaluer l’efficacité des contrôles de sécurité et proposer des améliorations.",
          "L’audit de sécurité.",
          "L’audit de conformité vérifie le respect des exigences, l’audit de sécurité vérifie la protection contre les menaces et vulnérabilités, tandis que l’audit de performance cherche à améliorer l’efficacité, l’efficience et l’utilisation des ressources."
        ],
        "correctIndex": 2
      },
      {
        "id": 95,
        "chapitre": "13. Comparaison des trois types d’audit",
        "sousPoint": "Généralités",
        "question": "Quel audit cherche principalement à améliorer l’efficacité et l’efficience ?",
        "answer": "L’audit de performance.",
        "cleanAnswer": "L’audit de performance.",
        "type": "qcm",
        "options": [
          "L’audit de performance.",
          "L’audit de sécurité.",
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
          "L’audit de conformité vérifie le respect des exigences, l’audit de sécurité vérifie la protection contre les menaces et vulnérabilités, tandis que l’audit de performance cherche à améliorer l’efficacité, l’efficience et l’utilisation des ressources."
        ],
        "correctIndex": 0
      },
      {
        "id": 96,
        "chapitre": "13. Comparaison des trois types d’audit",
        "sousPoint": "Généralités",
        "question": "Quelle est la différence fondamentale entre les trois ?",
        "answer": "L’audit de conformité vérifie le respect des exigences, l’audit de sécurité vérifie la protection contre les menaces et vulnérabilités, tandis que l’audit de performance cherche à améliorer l’efficacité, l’efficience et l’utilisation des ressources.",
        "cleanAnswer": "L’audit de conformité vérifie le respect des exigences, l’audit de sécurité vérifie la protection contre les menaces et vulnérabilités, tandis que l’audit de performance cherche à améliorer l’efficacité, l’efficience et l’utilisation des ressources.",
        "type": "qcm",
        "options": [
          "L’audit de performance.",
          "L’audit de conformité vérifie le respect des exigences, l’audit de sécurité vérifie la protection contre les menaces et vulnérabilités, tandis que l’audit de performance cherche à améliorer l’efficacité, l’efficience et l’utilisation des ressources.",
          "C’est une évaluation de l’efficacité des mesures de sécurité mises en place pour protéger les systèmes d’information contre les menaces internes et externes.",
          "L’audit de sécurité."
        ],
        "correctIndex": 1
      },
      {
        "id": 97,
        "chapitre": "14. Missions d’audit informatique",
        "sousPoint": "Généralités",
        "question": "Combien de types de missions d’audit informatique sont présentés dans le cours ?",
        "answer": "Deux types.",
        "cleanAnswer": "Deux types.",
        "type": "qcm",
        "options": [
          "L’audit contractuel et l’audit légal.",
          "Deux types.",
          "Audit interne versus audit externe ; • Audit de conformité, audit de sécurité et audit de performance.",
          "Le document le présente comme l’un des deux types de missions d’audit informatique, mais ne donne pas dans l’extrait fourni une définition détaillée supplémentaire."
        ],
        "correctIndex": 1
      },
      {
        "id": 98,
        "chapitre": "14. Missions d’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quels sont les deux types de missions d’audit informatique ?",
        "answer": "L’audit contractuel et l’audit légal.",
        "cleanAnswer": "L’audit contractuel et l’audit légal.",
        "type": "qcm",
        "options": [
          "Le document le présente comme l’un des deux types de missions d’audit informatique, mais ne donne pas dans l’extrait fourni une définition détaillée supplémentaire.",
          "Audit interne versus audit externe ; • Audit de conformité, audit de sécurité et audit de performance.",
          "L’audit contractuel et l’audit légal.",
          "Deux types."
        ],
        "correctIndex": 2
      },
      {
        "id": 99,
        "chapitre": "14. Missions d’audit informatique",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un audit contractuel ?",
        "answer": "Le document le présente comme l’un des deux types de missions d’audit informatique, mais ne donne pas dans l’extrait fourni une définition détaillée supplémentaire.",
        "cleanAnswer": "Le document le présente comme l’un des deux types de missions d’audit informatique, mais ne donne pas dans l’extrait fourni une définition détaillée supplémentaire.",
        "type": "qcm",
        "options": [
          "L’audit interne est une activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations, lui apporte des conseils pour les améliorer et contribue à créer de la valeur ajoutée.",
          "Le document le présente comme le deuxième type de mission d’audit informatique, sans fournir dans l’extrait une définition détaillée supplémentaire.",
          "Le document le présente comme l’un des deux types de missions d’audit informatique, mais ne donne pas dans l’extrait fourni une définition détaillée supplémentaire.",
          "L’audit contractuel et l’audit légal."
        ],
        "correctIndex": 2
      },
      {
        "id": 100,
        "chapitre": "14. Missions d’audit informatique",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un audit légal ?",
        "answer": "Le document le présente comme le deuxième type de mission d’audit informatique, sans fournir dans l’extrait une définition détaillée supplémentaire.",
        "cleanAnswer": "Le document le présente comme le deuxième type de mission d’audit informatique, sans fournir dans l’extrait une définition détaillée supplémentaire.",
        "type": "qcm",
        "options": [
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
          "Le document le présente comme le deuxième type de mission d’audit informatique, sans fournir dans l’extrait une définition détaillée supplémentaire.",
          "Le document le présente comme l’un des deux types de missions d’audit informatique, mais ne donne pas dans l’extrait fourni une définition détaillée supplémentaire.",
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables."
        ],
        "correctIndex": 1
      },
      {
        "id": 101,
        "chapitre": "15. Référentiel",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un référentiel ?",
        "answer": "Un référentiel est un ensemble structuré de données, d’informations ou de connaissances servant de base de référence pour un domaine spécifique.",
        "cleanAnswer": "Un référentiel est un ensemble structuré de données, d’informations ou de connaissances servant de base de référence pour un domaine spécifique.",
        "type": "qcm",
        "options": [
          "Il modélise les concepts et les processus d’un domaine métier.",
          "Il décrit la structure d’une organisation.",
          "Un référentiel est un ensemble structuré de données, d’informations ou de connaissances servant de base de référence pour un domaine spécifique.",
          "Il décrit les données utilisées dans une organisation."
        ],
        "correctIndex": 2
      },
      {
        "id": 102,
        "chapitre": "15. Référentiel",
        "sousPoint": "Généralités",
        "question": "À quoi peut-on comparer simplement un référentiel ?",
        "answer": "On peut le comparer à un dictionnaire ou une encyclopédie adaptée à un sujet particulier.",
        "cleanAnswer": "On peut le comparer à un dictionnaire ou une encyclopédie adaptée à un sujet particulier.",
        "type": "qcm",
        "options": [
          "On peut le comparer à un dictionnaire ou une encyclopédie adaptée à un sujet particulier.",
          "Elle consiste à créer un modèle conceptuel du référentiel.",
          "Elle consiste à mettre régulièrement à jour le référentiel.",
          "Il décrit les données utilisées dans une organisation."
        ],
        "correctIndex": 0
      },
      {
        "id": 103,
        "chapitre": "15. Référentiel",
        "sousPoint": "Généralités",
        "question": "Quels sont les rôles d’un référentiel ?",
        "answer": "Il permet de définir un vocabulaire commun, de structurer l’information, de faciliter la communication et d’assurer la cohérence.",
        "cleanAnswer": "Il permet de définir un vocabulaire commun, de structurer l’information, de faciliter la communication et d’assurer la cohérence.",
        "type": "qcm",
        "options": [
          "Il permet de disposer d’informations vérifiables et fiables.",
          "Il permet à tous les acteurs d’un domaine d’utiliser les mêmes termes avec la même signification.",
          "Il rend les échanges plus efficaces grâce à l’utilisation d’un langage commun.",
          "Il permet de définir un vocabulaire commun, de structurer l’information, de faciliter la communication et d’assurer la cohérence."
        ],
        "correctIndex": 3
      },
      {
        "id": 104,
        "chapitre": "15. Référentiel",
        "sousPoint": "Généralités",
        "question": "Comment un référentiel définit-il un vocabulaire commun ?",
        "answer": "Il permet à tous les acteurs d’un domaine d’utiliser les mêmes termes avec la même signification.",
        "cleanAnswer": "Il permet à tous les acteurs d’un domaine d’utiliser les mêmes termes avec la même signification.",
        "type": "qcm",
        "options": [
          "Il rend les échanges plus efficaces grâce à l’utilisation d’un langage commun.",
          "Il permet à tous les acteurs d’un domaine d’utiliser les mêmes termes avec la même signification.",
          "Il modélise les concepts et les processus d’un domaine métier.",
          "Il permet de définir un vocabulaire commun, de structurer l’information, de faciliter la communication et d’assurer la cohérence."
        ],
        "correctIndex": 1
      },
      {
        "id": 105,
        "chapitre": "15. Référentiel",
        "sousPoint": "Généralités",
        "question": "Comment un référentiel structure-t-il l’information ?",
        "answer": "Il organise les connaissances de manière logique et hiérarchisée.",
        "cleanAnswer": "Il organise les connaissances de manière logique et hiérarchisée.",
        "type": "qcm",
        "options": [
          "Il organise les connaissances de manière logique et hiérarchisée.",
          "Un référentiel est un ensemble structuré de données, d’informations ou de connaissances servant de base de référence pour un domaine spécifique.",
          "Il décrit la structure d’une organisation.",
          "COBIT."
        ],
        "correctIndex": 0
      },
      {
        "id": 106,
        "chapitre": "15. Référentiel",
        "sousPoint": "Généralités",
        "question": "Comment un référentiel facilite-t-il la communication ?",
        "answer": "Il rend les échanges plus efficaces grâce à l’utilisation d’un langage commun.",
        "cleanAnswer": "Il rend les échanges plus efficaces grâce à l’utilisation d’un langage commun.",
        "type": "qcm",
        "options": [
          "Il rend les échanges plus efficaces grâce à l’utilisation d’un langage commun.",
          "Ils rendent les échanges plus clairs et plus précis.",
          "Il permet à tous les acteurs d’un domaine d’utiliser les mêmes termes avec la même signification.",
          "Il permet de définir un vocabulaire commun, de structurer l’information, de faciliter la communication et d’assurer la cohérence."
        ],
        "correctIndex": 0
      },
      {
        "id": 107,
        "chapitre": "15. Référentiel",
        "sousPoint": "Généralités",
        "question": "Comment un référentiel assure-t-il la cohérence ?",
        "answer": "Il permet de disposer d’informations vérifiables et fiables.",
        "cleanAnswer": "Il permet de disposer d’informations vérifiables et fiables.",
        "type": "qcm",
        "options": [
          "Il permet de disposer d’informations vérifiables et fiables.",
          "Il permet à tous les acteurs d’un domaine d’utiliser les mêmes termes avec la même signification.",
          "Il permet de définir un vocabulaire commun, de structurer l’information, de faciliter la communication et d’assurer la cohérence.",
          "Un référentiel est un ensemble structuré de données, d’informations ou de connaissances servant de base de référence pour un domaine spécifique."
        ],
        "correctIndex": 0
      },
      {
        "id": 108,
        "chapitre": "16. Types de référentiels",
        "sousPoint": "Généralités",
        "question": "Quels sont les principaux types de référentiels ?",
        "answer": "Les référentiels de données, les référentiels métiers, les référentiels techniques informatiques et les référentiels organisationnels.",
        "cleanAnswer": "Les référentiels de données, les référentiels métiers, les référentiels techniques informatiques et les référentiels organisationnels.",
        "type": "qcm",
        "options": [
          "Les données sont mieux structurées et plus cohérentes.",
          "Ils permettent l’amélioration de la qualité des données, la facilitation de la communication, l’amélioration de la prise de décision et la réduction des coûts.",
          "Les référentiels de données, les référentiels métiers, les référentiels techniques informatiques et les référentiels organisationnels.",
          "Le référentiel des clients et le référentiel des produits."
        ],
        "correctIndex": 2
      },
      {
        "id": 109,
        "chapitre": "16. Types de référentiels",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un référentiel de données ?",
        "answer": "Il décrit les données utilisées dans une organisation.",
        "cleanAnswer": "Il décrit les données utilisées dans une organisation.",
        "type": "qcm",
        "options": [
          "L’audit interne est une activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations, lui apporte des conseils pour les améliorer et contribue à créer de la valeur ajoutée.",
          "Un référentiel est un ensemble structuré de données, d’informations ou de connaissances servant de base de référence pour un domaine spécifique.",
          "Il décrit la structure d’une organisation.",
          "Il décrit les données utilisées dans une organisation."
        ],
        "correctIndex": 3
      },
      {
        "id": 110,
        "chapitre": "16. Types de référentiels",
        "sousPoint": "Généralités",
        "question": "Donnez des exemples de référentiels de données.",
        "answer": "Le référentiel des clients et le référentiel des produits.",
        "cleanAnswer": "Le référentiel des clients et le référentiel des produits.",
        "type": "qcm",
        "options": [
          "Un référentiel est un ensemble structuré de données, d’informations ou de connaissances servant de base de référence pour un domaine spécifique.",
          "Le référentiel des clients et le référentiel des produits.",
          "Un référentiel des processus de fabrication.",
          "Ils permettent l’amélioration de la qualité des données, la facilitation de la communication, l’amélioration de la prise de décision et la réduction des coûts."
        ],
        "correctIndex": 1
      },
      {
        "id": 111,
        "chapitre": "16. Types de référentiels",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un référentiel métier ?",
        "answer": "Il modélise les concepts et les processus d’un domaine métier.",
        "cleanAnswer": "Il modélise les concepts et les processus d’un domaine métier.",
        "type": "qcm",
        "options": [
          "Il décrit les éléments techniques d’un système.",
          "Un référentiel est un ensemble structuré de données, d’informations ou de connaissances servant de base de référence pour un domaine spécifique.",
          "Il décrit la structure d’une organisation.",
          "Il modélise les concepts et les processus d’un domaine métier."
        ],
        "correctIndex": 3
      },
      {
        "id": 112,
        "chapitre": "16. Types de référentiels",
        "sousPoint": "Généralités",
        "question": "Donnez un exemple de référentiel métier.",
        "answer": "Un référentiel des processus de fabrication.",
        "cleanAnswer": "Un référentiel des processus de fabrication.",
        "type": "qcm",
        "options": [
          "Un référentiel des composants logiciels.",
          "Un organigramme ou un référentiel décrivant les rôles et responsabilités.",
          "Il modélise les concepts et les processus d’un domaine métier.",
          "Un référentiel des processus de fabrication."
        ],
        "correctIndex": 3
      },
      {
        "id": 113,
        "chapitre": "16. Types de référentiels",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un référentiel technique informatique ?",
        "answer": "Il décrit les éléments techniques d’un système.",
        "cleanAnswer": "Il décrit les éléments techniques d’un système.",
        "type": "qcm",
        "options": [
          "Il décrit les éléments techniques d’un système.",
          "Il modélise les concepts et les processus d’un domaine métier.",
          "Il décrit la structure d’une organisation.",
          "Il décrit les données utilisées dans une organisation."
        ],
        "correctIndex": 0
      },
      {
        "id": 114,
        "chapitre": "16. Types de référentiels",
        "sousPoint": "Généralités",
        "question": "Donnez un exemple de référentiel technique informatique.",
        "answer": "Un référentiel des composants logiciels.",
        "cleanAnswer": "Un référentiel des composants logiciels.",
        "type": "qcm",
        "options": [
          "Il décrit les éléments techniques d’un système.",
          "Un organigramme ou un référentiel décrivant les rôles et responsabilités.",
          "Un référentiel des composants logiciels.",
          "Un référentiel des processus de fabrication."
        ],
        "correctIndex": 2
      },
      {
        "id": 115,
        "chapitre": "16. Types de référentiels",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un référentiel organisationnel ?",
        "answer": "Il décrit la structure d’une organisation.",
        "cleanAnswer": "Il décrit la structure d’une organisation.",
        "type": "qcm",
        "options": [
          "Il décrit les éléments techniques d’un système.",
          "C’est un ensemble de personnes, de procédures et de ressources qui recueillent l’information, la transforment et la distribuent au sein d’une organisation.",
          "Il décrit les données utilisées dans une organisation.",
          "Il décrit la structure d’une organisation."
        ],
        "correctIndex": 3
      },
      {
        "id": 116,
        "chapitre": "16. Types de référentiels",
        "sousPoint": "Généralités",
        "question": "Donnez un exemple de référentiel organisationnel.",
        "answer": "Un organigramme ou un référentiel décrivant les rôles et responsabilités.",
        "cleanAnswer": "Un organigramme ou un référentiel décrivant les rôles et responsabilités.",
        "type": "qcm",
        "options": [
          "Un organigramme ou un référentiel décrivant les rôles et responsabilités.",
          "Il permet de définir un vocabulaire commun, de structurer l’information, de faciliter la communication et d’assurer la cohérence.",
          "Un référentiel des processus de fabrication.",
          "Un référentiel des composants logiciels."
        ],
        "correctIndex": 0
      },
      {
        "id": 117,
        "chapitre": "17. Référentiels utilisés en audit informatique",
        "sousPoint": "Généralités",
        "question": "Que signifie COBIT ?",
        "answer": "COBIT signifie <em>Control Objectives for Information and related Technology</em>.",
        "cleanAnswer": "COBIT signifie Control Objectives for Information and related Technology .",
        "type": "qcm",
        "options": [
          "Il vient du verbe latin audire , qui signifie « écouter ».",
          "COBIT signifie Control Objectives for Information and related Technology .",
          "CISA signifie Certified Information Systems Auditor .",
          "CISM signifie Certified Information Security Manager ."
        ],
        "correctIndex": 1
      },
      {
        "id": 118,
        "chapitre": "17. Référentiels utilisés en audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle de COBIT ?",
        "answer": "COBIT constitue le principal référentiel des auditeurs informatiques et sert notamment de cadre pour la gouvernance et la gestion des technologies de l’information.",
        "cleanAnswer": "COBIT constitue le principal référentiel des auditeurs informatiques et sert notamment de cadre pour la gouvernance et la gestion des technologies de l’information.",
        "type": "qcm",
        "options": [
          "Il constitue un référentiel concernant les contrôles applicatifs.",
          "COBIT constitue le principal référentiel des auditeurs informatiques et sert notamment de cadre pour la gouvernance et la gestion des technologies de l’information.",
          "Il constitue une démarche d’évaluation de la qualité de la gestion des projets informatiques.",
          "COBIT."
        ],
        "correctIndex": 1
      },
      {
        "id": 119,
        "chapitre": "17. Référentiels utilisés en audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle de Val IT ?",
        "answer": "Val IT permet d’évaluer la création de valeur par projet ou par portefeuille de projets.",
        "cleanAnswer": "Val IT permet d’évaluer la création de valeur par projet ou par portefeuille de projets.",
        "type": "qcm",
        "options": [
          "Val IT.",
          "Elles permettent d’aligner les projets informatiques sur les objectifs stratégiques de l’organisation et de maximiser les retours sur investissement.",
          "Val IT permet d’évaluer la création de valeur par projet ou par portefeuille de projets.",
          "Elles fournissent des cadres de référence et des bonnes pratiques permettant d’évaluer et d’améliorer les systèmes d’information."
        ],
        "correctIndex": 2
      },
      {
        "id": 120,
        "chapitre": "17. Référentiels utilisés en audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel est l’objectif de Risk IT ?",
        "answer": "Risk IT a pour objectif d’améliorer la maîtrise des risques liés à l’informatique.",
        "cleanAnswer": "Risk IT a pour objectif d’améliorer la maîtrise des risques liés à l’informatique.",
        "type": "qcm",
        "options": [
          "Elles permettent d’identifier, d’évaluer et de gérer les risques liés aux technologies de l’information.",
          "L’audit informatique a pour objectif d’identifier et d’évaluer les risques associés aux activités informatiques d’une entreprise ou d’une administration.",
          "Il est nécessaire de mettre en place une démarche d’audit afin de répondre aux enjeux liés à la maîtrise des systèmes d’information et aux risques informatiques.",
          "Risk IT a pour objectif d’améliorer la maîtrise des risques liés à l’informatique."
        ],
        "correctIndex": 3
      },
      {
        "id": 121,
        "chapitre": "17. Référentiels utilisés en audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle de COBIT and Applications Controls ?",
        "answer": "Il constitue un référentiel concernant les contrôles applicatifs.",
        "cleanAnswer": "Il constitue un référentiel concernant les contrôles applicatifs.",
        "type": "qcm",
        "options": [
          "Ce sont les contrôles intégrés ou liés aux applications informatiques afin de vérifier la validité et la conformité des traitements effectués.",
          "COBIT constitue le principal référentiel des auditeurs informatiques et sert notamment de cadre pour la gouvernance et la gestion des technologies de l’information.",
          "Il constitue un référentiel concernant les contrôles applicatifs.",
          "Il constitue le véhicule de la communication dans l’organisation."
        ],
        "correctIndex": 2
      },
      {
        "id": 122,
        "chapitre": "17. Référentiels utilisés en audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle de l’ISO 27002 ?",
        "answer": "L’ISO 27002 est un code de bonnes pratiques en matière de management de la sécurité des systèmes d’information.",
        "cleanAnswer": "L’ISO 27002 est un code de bonnes pratiques en matière de management de la sécurité des systèmes d’information.",
        "type": "qcm",
        "options": [
          "Elles fournissent des cadres de référence et des bonnes pratiques permettant d’évaluer et d’améliorer les systèmes d’information.",
          "L’ISO 27002 est un code de bonnes pratiques en matière de management de la sécurité des systèmes d’information.",
          "C’est une évaluation de l’efficacité des mesures de sécurité mises en place pour protéger les systèmes d’information contre les menaces internes et externes.",
          "Il couvre tous les aspects des opérations de l’organisation et peut inclure des audits financiers, opérationnels, de conformité et de systèmes d’information."
        ],
        "correctIndex": 1
      },
      {
        "id": 123,
        "chapitre": "17. Référentiels utilisés en audit informatique",
        "sousPoint": "Généralités",
        "question": "Que signifie CMMI ?",
        "answer": "CMMI signifie <em>Capability Maturity Model Integration</em>.",
        "cleanAnswer": "CMMI signifie Capability Maturity Model Integration .",
        "type": "qcm",
        "options": [
          "CMMI signifie Capability Maturity Model Integration .",
          "ISACA signifie Information Systems Audit & Control Association .",
          "CISM signifie Certified Information Security Manager .",
          "COBIT signifie Control Objectives for Information and related Technology ."
        ],
        "correctIndex": 0
      },
      {
        "id": 124,
        "chapitre": "17. Référentiels utilisés en audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle du CMMI ?",
        "answer": "Il constitue une démarche d’évaluation de la qualité de la gestion des projets informatiques.",
        "cleanAnswer": "Il constitue une démarche d’évaluation de la qualité de la gestion des projets informatiques.",
        "type": "qcm",
        "options": [
          "COBIT constitue le principal référentiel des auditeurs informatiques et sert notamment de cadre pour la gouvernance et la gestion des technologies de l’information.",
          "Il est nécessaire de mettre en place une démarche d’audit afin de répondre aux enjeux liés à la maîtrise des systèmes d’information et aux risques informatiques.",
          "Il constitue une démarche d’évaluation de la qualité de la gestion des projets informatiques.",
          "La certification CMMI."
        ],
        "correctIndex": 2
      },
      {
        "id": 125,
        "chapitre": "17. Référentiels utilisés en audit informatique",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’ITIL ?",
        "answer": "ITIL est un recueil de bonnes pratiques concernant les niveaux et le support des services informatiques.",
        "cleanAnswer": "ITIL est un recueil de bonnes pratiques concernant les niveaux et le support des services informatiques.",
        "type": "qcm",
        "options": [
          "ITIL est un recueil de bonnes pratiques concernant les niveaux et le support des services informatiques.",
          "ITIL.",
          "Le référentiel COBIT est cité comme exemple.",
          "Elles fournissent des cadres de référence et des bonnes pratiques permettant d’évaluer et d’améliorer les systèmes d’information."
        ],
        "correctIndex": 0
      },
      {
        "id": 126,
        "chapitre": "18. Certifications",
        "sousPoint": "Généralités",
        "question": "Existe-t-il une certification des directions informatiques selon le cours ?",
        "answer": "Non, le cours indique que cela n’existe pas.",
        "cleanAnswer": "Non, le cours indique que cela n’existe pas.",
        "type": "qcm",
        "options": [
          "Non. Elle s’inscrit dans une démarche plus globale de gouvernance informatique et concerne également la fonction d’audit interne.",
          "Le cours indique que cela n’existe pas.",
          "Non, le cours indique que cela n’existe pas.",
          "Il est nécessaire de mettre en place une démarche d’audit afin de répondre aux enjeux liés à la maîtrise des systèmes d’information et aux risques informatiques."
        ],
        "correctIndex": 2
      },
      {
        "id": 127,
        "chapitre": "18. Certifications",
        "sousPoint": "Généralités",
        "question": "Existe-t-il une certification des applications informatiques ?",
        "answer": "Le cours indique que cela n’existe pas.",
        "cleanAnswer": "Le cours indique que cela n’existe pas.",
        "type": "qcm",
        "options": [
          "Non, le cours indique que cela n’existe pas.",
          "Le cours indique que cela n’existe pas.",
          "Il est nécessaire de mettre en place une démarche d’audit afin de répondre aux enjeux liés à la maîtrise des systèmes d’information et aux risques informatiques.",
          "Il constitue une démarche d’évaluation de la qualité de la gestion des projets informatiques."
        ],
        "correctIndex": 1
      },
      {
        "id": 128,
        "chapitre": "18. Certifications",
        "sousPoint": "Généralités",
        "question": "Quelle certification concerne la qualité des projets informatiques ?",
        "answer": "La certification CMMI.",
        "cleanAnswer": "La certification CMMI.",
        "type": "qcm",
        "options": [
          "La certification CMMI.",
          "Il constitue une démarche d’évaluation de la qualité de la gestion des projets informatiques.",
          "La certification CISA.",
          "Elles permettent d’aligner les projets informatiques sur les objectifs stratégiques de l’organisation et de maximiser les retours sur investissement."
        ],
        "correctIndex": 0
      },
      {
        "id": 129,
        "chapitre": "18. Certifications",
        "sousPoint": "Généralités",
        "question": "Quelle norme concerne la qualité du service fourni par l’exploitation ?",
        "answer": "La norme ISO 20000.",
        "cleanAnswer": "La norme ISO 20000.",
        "type": "qcm",
        "options": [
          "Le cours présente ISO 20000 comme un sous-ensemble d’ITIL.",
          "La norme ISO 20000.",
          "Ils vérifient que les processus mis en œuvre offrent la qualité de service attendue.",
          "La certification CMMI."
        ],
        "correctIndex": 1
      },
      {
        "id": 130,
        "chapitre": "18. Certifications",
        "sousPoint": "Généralités",
        "question": "Quel rapport existe entre ISO 20000 et ITIL selon le cours ?",
        "answer": "Le cours présente ISO 20000 comme un sous-ensemble d’ITIL.",
        "cleanAnswer": "Le cours présente ISO 20000 comme un sous-ensemble d’ITIL.",
        "type": "qcm",
        "options": [
          "On rédige le rapport, on présente les résultats et on assure le suivi des actions correctives.",
          "Le cours présente ISO 20000 comme un sous-ensemble d’ITIL.",
          "La norme ISO 20000.",
          "Non, le cours indique que cela n’existe pas."
        ],
        "correctIndex": 1
      },
      {
        "id": 131,
        "chapitre": "18. Certifications",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce que SAS 70 ?",
        "answer": "SAS 70 signifie <em>Statement on Auditing Standards no 70</em>. Il s’agit d’une norme créée pour les organismes concernés par l’externalisation et les audits de leurs processus.",
        "cleanAnswer": "SAS 70 signifie Statement on Auditing Standards no 70 . Il s’agit d’une norme créée pour les organismes concernés par l’externalisation et les audits de leurs processus.",
        "type": "qcm",
        "options": [
          "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
          "Elle a été créée pour éviter que les organismes aient à supporter successivement plusieurs audits informatiques sur des sujets voisins.",
          "SAS 70 signifie Statement on Auditing Standards no 70 . Il s’agit d’une norme créée pour les organismes concernés par l’externalisation et les audits de leurs processus."
        ],
        "correctIndex": 3
      },
      {
        "id": 132,
        "chapitre": "18. Certifications",
        "sousPoint": "Généralités",
        "question": "Qui a créé SAS 70 ?",
        "answer": "Elle a été créée par l’American Institute of Certified Public Accountants (AICPA).",
        "cleanAnswer": "Elle a été créée par l’American Institute of Certified Public Accountants (AICPA).",
        "type": "qcm",
        "options": [
          "SAS 70 a été remplacée par la norme ISAE 3402.",
          "SAS 70 signifie Statement on Auditing Standards no 70 . Il s’agit d’une norme créée pour les organismes concernés par l’externalisation et les audits de leurs processus.",
          "Elle a été créée pour éviter que les organismes aient à supporter successivement plusieurs audits informatiques sur des sujets voisins.",
          "Elle a été créée par l’American Institute of Certified Public Accountants (AICPA)."
        ],
        "correctIndex": 3
      },
      {
        "id": 133,
        "chapitre": "18. Certifications",
        "sousPoint": "Généralités",
        "question": "Pourquoi SAS 70 a-t-elle été créée ?",
        "answer": "Elle a été créée pour éviter que les organismes aient à supporter successivement plusieurs audits informatiques sur des sujets voisins.",
        "cleanAnswer": "Elle a été créée pour éviter que les organismes aient à supporter successivement plusieurs audits informatiques sur des sujets voisins.",
        "type": "qcm",
        "options": [
          "Parce qu’il est nécessaire de comprendre le système d’information et d’être capable d’apprécier la capacité des systèmes informatiques à assurer la fiabilité de l’information de gestion.",
          "SAS 70 signifie Statement on Auditing Standards no 70 . Il s’agit d’une norme créée pour les organismes concernés par l’externalisation et les audits de leurs processus.",
          "Elle a été créée pour éviter que les organismes aient à supporter successivement plusieurs audits informatiques sur des sujets voisins.",
          "Elle a été créée par l’American Institute of Certified Public Accountants (AICPA)."
        ],
        "correctIndex": 2
      },
      {
        "id": 134,
        "chapitre": "18. Certifications",
        "sousPoint": "Généralités",
        "question": "Que vérifient les audits réalisés dans ce cadre ?",
        "answer": "Ils vérifient que les processus mis en œuvre offrent la qualité de service attendue.",
        "cleanAnswer": "Ils vérifient que les processus mis en œuvre offrent la qualité de service attendue.",
        "type": "qcm",
        "options": [
          "La norme ISO 20000.",
          "Il peut inclure des audits de productivité, de qualité et de gestion des ressources.",
          "SAS 70 signifie Statement on Auditing Standards no 70 . Il s’agit d’une norme créée pour les organismes concernés par l’externalisation et les audits de leurs processus.",
          "Ils vérifient que les processus mis en œuvre offrent la qualité de service attendue."
        ],
        "correctIndex": 3
      },
      {
        "id": 135,
        "chapitre": "18. Certifications",
        "sousPoint": "Généralités",
        "question": "Par quelle norme SAS 70 a-t-elle été remplacée ?",
        "answer": "SAS 70 a été remplacée par la norme ISAE 3402.",
        "cleanAnswer": "SAS 70 a été remplacée par la norme ISAE 3402.",
        "type": "qcm",
        "options": [
          "SAS 70 signifie Statement on Auditing Standards no 70 . Il s’agit d’une norme créée pour les organismes concernés par l’externalisation et les audits de leurs processus.",
          "La norme ISO 20000.",
          "SAS 70 a été remplacée par la norme ISAE 3402.",
          "En juin 2011."
        ],
        "correctIndex": 2
      },
      {
        "id": 136,
        "chapitre": "18. Certifications",
        "sousPoint": "Généralités",
        "question": "Quand SAS 70 a-t-elle été remplacée ?",
        "answer": "En juin 2011.",
        "cleanAnswer": "En juin 2011.",
        "type": "qcm",
        "options": [
          "Elle a été créée pour éviter que les organismes aient à supporter successivement plusieurs audits informatiques sur des sujets voisins.",
          "En juin 2011.",
          "SAS 70 signifie Statement on Auditing Standards no 70 . Il s’agit d’une norme créée pour les organismes concernés par l’externalisation et les audits de leurs processus.",
          "SAS 70 a été remplacée par la norme ISAE 3402."
        ],
        "correctIndex": 1
      },
      {
        "id": 137,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "Que certifie-t-on en matière d’audit informatique ?",
        "answer": "On certifie les auditeurs informatiques.",
        "cleanAnswer": "On certifie les auditeurs informatiques.",
        "type": "qcm",
        "options": [
          "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit.",
          "Le document le présente comme l’un des deux types de missions d’audit informatique, mais ne donne pas dans l’extrait fourni une définition détaillée supplémentaire.",
          "On certifie les auditeurs informatiques.",
          "Deux types."
        ],
        "correctIndex": 2
      },
      {
        "id": 138,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "Quelle est la certification de référence des auditeurs informatiques ?",
        "answer": "La certification CISA.",
        "cleanAnswer": "La certification CISA.",
        "type": "qcm",
        "options": [
          "On certifie les auditeurs informatiques.",
          "Le cours indique que cela n’existe pas.",
          "Elles offrent un cadre structuré permettant aux auditeurs de suivre des procédures standardisées et reconnues internationalement.",
          "La certification CISA."
        ],
        "correctIndex": 3
      },
      {
        "id": 139,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "Que signifie CISA ?",
        "answer": "CISA signifie <em>Certified Information Systems Auditor</em>.",
        "cleanAnswer": "CISA signifie Certified Information Systems Auditor .",
        "type": "qcm",
        "options": [
          "CISM signifie Certified Information Security Manager .",
          "ISACA signifie Information Systems Audit & Control Association .",
          "COBIT signifie Control Objectives for Information and related Technology .",
          "CISA signifie Certified Information Systems Auditor ."
        ],
        "correctIndex": 3
      },
      {
        "id": 140,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "Qui organise la certification CISA ?",
        "answer": "Elle est organisée par l’ISACA.",
        "cleanAnswer": "Elle est organisée par l’ISACA.",
        "type": "qcm",
        "options": [
          "Elle est organisée par l’ISACA.",
          "La certification CISA.",
          "Le CISM.",
          "Il s’agit d’une certification professionnelle destinée aux managers en sécurité de l’information."
        ],
        "correctIndex": 0
      },
      {
        "id": 141,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "Que signifie ISACA ?",
        "answer": "ISACA signifie <em>Information Systems Audit & Control Association</em>.",
        "cleanAnswer": "ISACA signifie Information Systems Audit & Control Association .",
        "type": "qcm",
        "options": [
          "Il vient du verbe latin audire , qui signifie « écouter ».",
          "ISACA signifie Information Systems Audit & Control Association .",
          "CISA signifie Certified Information Systems Auditor .",
          "COBIT signifie Control Objectives for Information and related Technology ."
        ],
        "correctIndex": 1
      },
      {
        "id": 142,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle de l’ISACA ?",
        "answer": "C’est l’association internationale des auditeurs informatiques, notamment connue pour son corpus normatif et son knowledge center.",
        "cleanAnswer": "C’est l’association internationale des auditeurs informatiques, notamment connue pour son corpus normatif et son knowledge center.",
        "type": "qcm",
        "options": [
          "La certification CISA.",
          "C’est l’association internationale des auditeurs informatiques, notamment connue pour son corpus normatif et son knowledge center.",
          "COBIT constitue le principal référentiel des auditeurs informatiques et sert notamment de cadre pour la gouvernance et la gestion des technologies de l’information.",
          "C’est l’utilisation de systèmes informatiques pour exécuter automatiquement certaines tâches auparavant réalisées manuellement."
        ],
        "correctIndex": 1
      },
      {
        "id": 143,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce que l’AFAI ?",
        "answer": "L’AFAI est l’Association Française de l’Audit et du Conseil Informatique.",
        "cleanAnswer": "L’AFAI est l’Association Française de l’Audit et du Conseil Informatique.",
        "type": "qcm",
        "options": [
          "L’AFAI est l’Association Française de l’Audit et du Conseil Informatique.",
          "Parce que l’informatique est devenue le support privilégié du système d’information, notamment pour les données et les traitements.",
          "Elles fournissent des cadres de référence et des bonnes pratiques permettant d’évaluer et d’améliorer les systèmes d’information.",
          "L’audit informatique a pour objectif d’identifier et d’évaluer les risques associés aux activités informatiques d’une entreprise ou d’une administration."
        ],
        "correctIndex": 0
      },
      {
        "id": 144,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle de l’AFAI ?",
        "answer": "Elle constitue le chapitre français de l’ISACA et fournit de nombreux supports.",
        "cleanAnswer": "Elle constitue le chapitre français de l’ISACA et fournit de nombreux supports.",
        "type": "qcm",
        "options": [
          "C’est l’association internationale des auditeurs informatiques, notamment connue pour son corpus normatif et son knowledge center.",
          "COBIT constitue le principal référentiel des auditeurs informatiques et sert notamment de cadre pour la gouvernance et la gestion des technologies de l’information.",
          "Elle constitue le chapitre français de l’ISACA et fournit de nombreux supports.",
          "Il constitue une démarche d’évaluation de la qualité de la gestion des projets informatiques."
        ],
        "correctIndex": 2
      },
      {
        "id": 145,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "Quelle est la deuxième certification de référence mentionnée dans le cours ?",
        "answer": "Le CISM.",
        "cleanAnswer": "Le CISM.",
        "type": "qcm",
        "options": [
          "Le CISM.",
          "Le cours indique que cela n’existe pas.",
          "Non, le cours indique que cela n’existe pas.",
          "Il s’agit d’une certification professionnelle destinée aux managers en sécurité de l’information."
        ],
        "correctIndex": 0
      },
      {
        "id": 146,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "Que signifie CISM ?",
        "answer": "CISM signifie <em>Certified Information Security Manager</em>.",
        "cleanAnswer": "CISM signifie Certified Information Security Manager .",
        "type": "qcm",
        "options": [
          "L’IFACI délivre la certification CIA ( Certified Internal Auditor ).",
          "CISA signifie Certified Information Systems Auditor .",
          "COBIT signifie Control Objectives for Information and related Technology .",
          "CISM signifie Certified Information Security Manager ."
        ],
        "correctIndex": 3
      },
      {
        "id": 147,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "À qui s’adresse principalement le CISM ?",
        "answer": "Il s’agit d’une certification professionnelle destinée aux managers en sécurité de l’information.",
        "cleanAnswer": "Il s’agit d’une certification professionnelle destinée aux managers en sécurité de l’information.",
        "type": "qcm",
        "options": [
          "Elles permettent la certification des systèmes et des processus et offrent une assurance supplémentaire aux parties prenantes.",
          "C’est une évaluation indépendante des états financiers d’une organisation par un auditeur externe, généralement un cabinet d’audit, afin de fournir une opinion sur leur exactitude et leur conformité aux normes comptables.",
          "L’audit de sécurité.",
          "Il s’agit d’une certification professionnelle destinée aux managers en sécurité de l’information."
        ],
        "correctIndex": 3
      },
      {
        "id": 148,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "Quelle organisation délivre le CISM ?",
        "answer": "Le CISM est également délivré par l’ISACA.",
        "cleanAnswer": "Le CISM est également délivré par l’ISACA.",
        "type": "qcm",
        "options": [
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
          "Le CISM est également délivré par l’ISACA.",
          "Il décrit les données utilisées dans une organisation.",
          "Le CISM."
        ],
        "correctIndex": 1
      },
      {
        "id": 149,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "Que signifie IFACI ?",
        "answer": "IFACI signifie Institut Français de l’Audit et du Contrôle Interne.",
        "cleanAnswer": "IFACI signifie Institut Français de l’Audit et du Contrôle Interne.",
        "type": "qcm",
        "options": [
          "Évaluer l’efficacité des processus de gestion des risques, de contrôle et de gouvernance, améliorer les opérations et assurer la conformité aux politiques internes et aux réglementations.",
          "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit.",
          "IFACI signifie Institut Français de l’Audit et du Contrôle Interne.",
          "L’audit interne couvre tous les aspects des opérations de l’organisation, tandis que l’audit externe est principalement axé sur les états financiers et les contrôles financiers."
        ],
        "correctIndex": 2
      },
      {
        "id": 150,
        "chapitre": "19. Certifications des auditeurs informatiques",
        "sousPoint": "Généralités",
        "question": "Quelle certification l’IFACI délivre-t-il ?",
        "answer": "L’IFACI délivre la certification CIA (<em>Certified Internal Auditor</em>).",
        "cleanAnswer": "L’IFACI délivre la certification CIA ( Certified Internal Auditor ).",
        "type": "qcm",
        "options": [
          "Il s’agit d’une certification professionnelle destinée aux managers en sécurité de l’information.",
          "L’IFACI délivre la certification CIA ( Certified Internal Auditor ).",
          "CISM signifie Certified Information Security Manager .",
          "CISA signifie Certified Information Systems Auditor ."
        ],
        "correctIndex": 1
      },
      {
        "id": 151,
        "chapitre": "20. Intérêt des référentiels",
        "sousPoint": "Généralités",
        "question": "Quels sont les principaux intérêts des référentiels ?",
        "answer": "Ils permettent l’amélioration de la qualité des données, la facilitation de la communication, l’amélioration de la prise de décision et la réduction des coûts.",
        "cleanAnswer": "Ils permettent l’amélioration de la qualité des données, la facilitation de la communication, l’amélioration de la prise de décision et la réduction des coûts.",
        "type": "qcm",
        "options": [
          "Ils permettent l’amélioration de la qualité des données, la facilitation de la communication, l’amélioration de la prise de décision et la réduction des coûts.",
          "Les référentiels de données, les référentiels métiers, les référentiels techniques informatiques et les référentiels organisationnels.",
          "Les données sont mieux structurées et plus cohérentes.",
          "Les données sont plus facilement accessibles et analysables."
        ],
        "correctIndex": 0
      },
      {
        "id": 152,
        "chapitre": "20. Intérêt des référentiels",
        "sousPoint": "Généralités",
        "question": "Comment les référentiels améliorent-ils la qualité des données ?",
        "answer": "Les données sont mieux structurées et plus cohérentes.",
        "cleanAnswer": "Les données sont mieux structurées et plus cohérentes.",
        "type": "qcm",
        "options": [
          "Le référentiel des clients et le référentiel des produits.",
          "Ils permettent l’amélioration de la qualité des données, la facilitation de la communication, l’amélioration de la prise de décision et la réduction des coûts.",
          "Les données sont plus facilement accessibles et analysables.",
          "Les données sont mieux structurées et plus cohérentes."
        ],
        "correctIndex": 3
      },
      {
        "id": 153,
        "chapitre": "20. Intérêt des référentiels",
        "sousPoint": "Généralités",
        "question": "Comment les référentiels facilitent-ils la communication ?",
        "answer": "Ils rendent les échanges plus clairs et plus précis.",
        "cleanAnswer": "Ils rendent les échanges plus clairs et plus précis.",
        "type": "qcm",
        "options": [
          "Les données sont mieux structurées et plus cohérentes.",
          "Les données sont plus facilement accessibles et analysables.",
          "Il rend les échanges plus efficaces grâce à l’utilisation d’un langage commun.",
          "Ils rendent les échanges plus clairs et plus précis."
        ],
        "correctIndex": 3
      },
      {
        "id": 154,
        "chapitre": "20. Intérêt des référentiels",
        "sousPoint": "Généralités",
        "question": "Comment les référentiels améliorent-ils la prise de décision ?",
        "answer": "Les données sont plus facilement accessibles et analysables.",
        "cleanAnswer": "Les données sont plus facilement accessibles et analysables.",
        "type": "qcm",
        "options": [
          "Le référentiel des clients et le référentiel des produits.",
          "Ils permettent l’amélioration de la qualité des données, la facilitation de la communication, l’amélioration de la prise de décision et la réduction des coûts.",
          "Les données sont mieux structurées et plus cohérentes.",
          "Les données sont plus facilement accessibles et analysables."
        ],
        "correctIndex": 3
      },
      {
        "id": 155,
        "chapitre": "20. Intérêt des référentiels",
        "sousPoint": "Généralités",
        "question": "Comment les référentiels contribuent-ils à réduire les coûts ?",
        "answer": "Les processus sont optimisés et les erreurs sont réduites.",
        "cleanAnswer": "Les processus sont optimisés et les erreurs sont réduites.",
        "type": "qcm",
        "options": [
          "Les processus sont optimisés et les erreurs sont réduites.",
          "Elles permettent de rencontrer les parties prenantes afin de mieux comprendre les processus et les contrôles existants.",
          "Elles permettent la certification des systèmes et des processus et offrent une assurance supplémentaire aux parties prenantes.",
          "Ils permettent l’amélioration de la qualité des données, la facilitation de la communication, l’amélioration de la prise de décision et la réduction des coûts."
        ],
        "correctIndex": 0
      },
      {
        "id": 156,
        "chapitre": "21. Mise en œuvre d’un référentiel",
        "sousPoint": "Généralités",
        "question": "Quelles sont les étapes de mise en œuvre d’un référentiel ?",
        "answer": "Il y a quatre étapes principales : définition des besoins, modélisation, implémentation et maintenance.",
        "cleanAnswer": "Il y a quatre étapes principales : définition des besoins, modélisation, implémentation et maintenance.",
        "type": "qcm",
        "options": [
          "Collecter, stocker, traiter et communiquer les informations.",
          "Elles peuvent provenir d’erreurs humaines dans la conception, la maintenance et la mise en œuvre, ou d’utilisateurs non autorisés.",
          "Il rend les échanges plus efficaces grâce à l’utilisation d’un langage commun.",
          "Il y a quatre étapes principales : définition des besoins, modélisation, implémentation et maintenance."
        ],
        "correctIndex": 3
      },
      {
        "id": 157,
        "chapitre": "21. Mise en œuvre d’un référentiel",
        "sousPoint": "Généralités",
        "question": "En quoi consiste la définition des besoins ?",
        "answer": "Elle consiste à identifier les besoins de l’organisation.",
        "cleanAnswer": "Elle consiste à identifier les besoins de l’organisation.",
        "type": "qcm",
        "options": [
          "Elle consiste à mettre régulièrement à jour le référentiel.",
          "Elle consiste à identifier les besoins de l’organisation.",
          "Elle consiste notamment à réaliser des interviews et des observations, effectuer des tests de contrôle et analyser les données.",
          "Il peut être réalisé de manière continue ou périodique selon les besoins de l’organisation."
        ],
        "correctIndex": 1
      },
      {
        "id": 158,
        "chapitre": "21. Mise en œuvre d’un référentiel",
        "sousPoint": "Généralités",
        "question": "En quoi consiste la modélisation ?",
        "answer": "Elle consiste à créer un modèle conceptuel du référentiel.",
        "cleanAnswer": "Elle consiste à créer un modèle conceptuel du référentiel.",
        "type": "qcm",
        "options": [
          "Elle consiste à mettre régulièrement à jour le référentiel.",
          "Elle consiste à créer un modèle conceptuel du référentiel.",
          "Elle consiste à identifier les besoins de l’organisation.",
          "Elle consiste à mettre en place le référentiel dans un outil de gestion de données."
        ],
        "correctIndex": 1
      },
      {
        "id": 159,
        "chapitre": "21. Mise en œuvre d’un référentiel",
        "sousPoint": "Généralités",
        "question": "En quoi consiste l’implémentation ?",
        "answer": "Elle consiste à mettre en place le référentiel dans un outil de gestion de données.",
        "cleanAnswer": "Elle consiste à mettre en place le référentiel dans un outil de gestion de données.",
        "type": "qcm",
        "options": [
          "Elle consiste à créer un modèle conceptuel du référentiel.",
          "Elle consiste à mettre régulièrement à jour le référentiel.",
          "Elle consiste à mettre en place le référentiel dans un outil de gestion de données.",
          "Elle consiste notamment à réaliser des interviews et des observations, effectuer des tests de contrôle et analyser les données."
        ],
        "correctIndex": 2
      },
      {
        "id": 160,
        "chapitre": "21. Mise en œuvre d’un référentiel",
        "sousPoint": "Généralités",
        "question": "En quoi consiste la maintenance ?",
        "answer": "Elle consiste à mettre régulièrement à jour le référentiel.",
        "cleanAnswer": "Elle consiste à mettre régulièrement à jour le référentiel.",
        "type": "qcm",
        "options": [
          "Elle consiste à créer un modèle conceptuel du référentiel.",
          "Elle consiste à mettre en place le référentiel dans un outil de gestion de données.",
          "Elle consiste notamment à réaliser des interviews et des observations, effectuer des tests de contrôle et analyser les données.",
          "Elle consiste à mettre régulièrement à jour le référentiel."
        ],
        "correctIndex": 3
      },
      {
        "id": 161,
        "chapitre": "22. Rôle des normes dans l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle général des normes dans l’audit informatique ?",
        "answer": "Elles fournissent des cadres de référence et des bonnes pratiques permettant d’évaluer et d’améliorer les systèmes d’information.",
        "cleanAnswer": "Elles fournissent des cadres de référence et des bonnes pratiques permettant d’évaluer et d’améliorer les systèmes d’information.",
        "type": "qcm",
        "options": [
          "Elles permettent de vérifier que les systèmes d’information respectent les exigences légales, réglementaires et internes.",
          "L’ISO 27002 est un code de bonnes pratiques en matière de management de la sécurité des systèmes d’information.",
          "Elles fournissent des cadres de référence et des bonnes pratiques permettant d’évaluer et d’améliorer les systèmes d’information.",
          "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit."
        ],
        "correctIndex": 2
      },
      {
        "id": 162,
        "chapitre": "22. Rôle des normes dans l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Comment les normes servent-elles de cadre de référence ?",
        "answer": "Elles offrent un cadre structuré permettant aux auditeurs de suivre des procédures standardisées et reconnues internationalement.",
        "cleanAnswer": "Elles offrent un cadre structuré permettant aux auditeurs de suivre des procédures standardisées et reconnues internationalement.",
        "type": "qcm",
        "options": [
          "Elles offrent un cadre structuré permettant aux auditeurs de suivre des procédures standardisées et reconnues internationalement.",
          "Elles permettent la certification des systèmes et des processus et offrent une assurance supplémentaire aux parties prenantes.",
          "Elles fournissent des cadres de référence et des bonnes pratiques permettant d’évaluer et d’améliorer les systèmes d’information.",
          "Ils vérifient que les processus mis en œuvre offrent la qualité de service attendue."
        ],
        "correctIndex": 0
      },
      {
        "id": 163,
        "chapitre": "22. Rôle des normes dans l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel référentiel est cité comme exemple pour la gouvernance et la gestion des technologies de l’information ?",
        "answer": "COBIT.",
        "cleanAnswer": "COBIT.",
        "type": "qcm",
        "options": [
          "Le référentiel COBIT est cité comme exemple.",
          "COBIT.",
          "COBIT constitue le principal référentiel des auditeurs informatiques et sert notamment de cadre pour la gouvernance et la gestion des technologies de l’information.",
          "Elles permettent d’identifier, d’évaluer et de gérer les risques liés aux technologies de l’information."
        ],
        "correctIndex": 1
      },
      {
        "id": 164,
        "chapitre": "22. Rôle des normes dans l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Comment les normes permettent-elles d’évaluer la conformité ?",
        "answer": "Elles permettent de vérifier que les systèmes d’information respectent les exigences légales, réglementaires et internes.",
        "cleanAnswer": "Elles permettent de vérifier que les systèmes d’information respectent les exigences légales, réglementaires et internes.",
        "type": "qcm",
        "options": [
          "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
          "Elles permettent de vérifier que les systèmes d’information respectent les exigences légales, réglementaires et internes.",
          "Elles fournissent des cadres de référence et des bonnes pratiques permettant d’évaluer et d’améliorer les systèmes d’information.",
          "Assurer la conformité aux exigences légales et réglementaires, identifier les écarts par rapport aux normes et proposer des mesures correctives."
        ],
        "correctIndex": 1
      },
      {
        "id": 165,
        "chapitre": "22. Rôle des normes dans l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quels référentiels sont cités concernant la sécurité de l’information ?",
        "answer": "ISO 27001 et ISO 27002.",
        "cleanAnswer": "ISO 27001 et ISO 27002.",
        "type": "qcm",
        "options": [
          "ISO 27001 et ISO 27002.",
          "C’est un ensemble de personnes, de procédures et de ressources qui recueillent l’information, la transforment et la distribuent au sein d’une organisation.",
          "L’ISO 27002 est un code de bonnes pratiques en matière de management de la sécurité des systèmes d’information.",
          "Il s’agit d’une certification professionnelle destinée aux managers en sécurité de l’information."
        ],
        "correctIndex": 0
      },
      {
        "id": 166,
        "chapitre": "22. Rôle des normes dans l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Comment les normes favorisent-elles l’amélioration continue ?",
        "answer": "Elles encouragent l’amélioration continue des processus et des systèmes.",
        "cleanAnswer": "Elles encouragent l’amélioration continue des processus et des systèmes.",
        "type": "qcm",
        "options": [
          "L’analyse des indicateurs de performance, la revue des processus et systèmes de gestion, les interviews des parties prenantes et l’analyse des données.",
          "Elles encouragent l’amélioration continue des processus et des systèmes.",
          "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
          "Elles permettent la certification des systèmes et des processus et offrent une assurance supplémentaire aux parties prenantes."
        ],
        "correctIndex": 1
      },
      {
        "id": 167,
        "chapitre": "22. Rôle des normes dans l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel référentiel est cité pour la gestion des services informatiques ?",
        "answer": "ITIL.",
        "cleanAnswer": "ITIL.",
        "type": "qcm",
        "options": [
          "Risk IT.",
          "ITIL.",
          "COBIT.",
          "ITIL est un recueil de bonnes pratiques concernant les niveaux et le support des services informatiques."
        ],
        "correctIndex": 1
      },
      {
        "id": 168,
        "chapitre": "22. Rôle des normes dans l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Comment les normes contribuent-elles à la gestion des risques ?",
        "answer": "Elles permettent d’identifier, d’évaluer et de gérer les risques liés aux technologies de l’information.",
        "cleanAnswer": "Elles permettent d’identifier, d’évaluer et de gérer les risques liés aux technologies de l’information.",
        "type": "qcm",
        "options": [
          "L’audit informatique a pour objectif d’identifier et d’évaluer les risques associés aux activités informatiques d’une entreprise ou d’une administration.",
          "Elles permettent d’identifier, d’évaluer et de gérer les risques liés aux technologies de l’information.",
          "Elles permettent d’aligner les projets informatiques sur les objectifs stratégiques de l’organisation et de maximiser les retours sur investissement.",
          "Elles permettent la certification des systèmes et des processus et offrent une assurance supplémentaire aux parties prenantes."
        ],
        "correctIndex": 1
      },
      {
        "id": 169,
        "chapitre": "22. Rôle des normes dans l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel référentiel est cité pour la gestion des risques informatiques ?",
        "answer": "Risk IT.",
        "cleanAnswer": "Risk IT.",
        "type": "qcm",
        "options": [
          "COBIT constitue le principal référentiel des auditeurs informatiques et sert notamment de cadre pour la gouvernance et la gestion des technologies de l’information.",
          "COBIT.",
          "ITIL.",
          "Risk IT."
        ],
        "correctIndex": 3
      },
      {
        "id": 170,
        "chapitre": "22. Rôle des normes dans l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Comment les normes contribuent-elles à la création de valeur ?",
        "answer": "Elles permettent d’aligner les projets informatiques sur les objectifs stratégiques de l’organisation et de maximiser les retours sur investissement.",
        "cleanAnswer": "Elles permettent d’aligner les projets informatiques sur les objectifs stratégiques de l’organisation et de maximiser les retours sur investissement.",
        "type": "qcm",
        "options": [
          "Elles permettent la certification des systèmes et des processus et offrent une assurance supplémentaire aux parties prenantes.",
          "Elles permettent d’identifier, d’évaluer et de gérer les risques liés aux technologies de l’information.",
          "Elles permettent d’aligner les projets informatiques sur les objectifs stratégiques de l’organisation et de maximiser les retours sur investissement.",
          "Val IT permet d’évaluer la création de valeur par projet ou par portefeuille de projets."
        ],
        "correctIndex": 2
      },
      {
        "id": 171,
        "chapitre": "22. Rôle des normes dans l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quel référentiel est associé à la création de valeur ?",
        "answer": "Val IT.",
        "cleanAnswer": "Val IT.",
        "type": "qcm",
        "options": [
          "Elles permettent d’aligner les projets informatiques sur les objectifs stratégiques de l’organisation et de maximiser les retours sur investissement.",
          "Le référentiel COBIT est cité comme exemple.",
          "Val IT permet d’évaluer la création de valeur par projet ou par portefeuille de projets.",
          "Val IT."
        ],
        "correctIndex": 3
      },
      {
        "id": 172,
        "chapitre": "22. Rôle des normes dans l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Comment les normes contribuent-elles à la certification et à l’assurance ?",
        "answer": "Elles permettent la certification des systèmes et des processus et offrent une assurance supplémentaire aux parties prenantes.",
        "cleanAnswer": "Elles permettent la certification des systèmes et des processus et offrent une assurance supplémentaire aux parties prenantes.",
        "type": "qcm",
        "options": [
          "Elles permettent de rencontrer les parties prenantes afin de mieux comprendre les processus et les contrôles existants.",
          "Elles permettent la certification des systèmes et des processus et offrent une assurance supplémentaire aux parties prenantes.",
          "Elles permettent d’identifier, d’évaluer et de gérer les risques liés aux technologies de l’information.",
          "L’analyse des indicateurs de performance, la revue des processus et systèmes de gestion, les interviews des parties prenantes et l’analyse des données."
        ],
        "correctIndex": 1
      },
      {
        "id": 173,
        "chapitre": "22. Rôle des normes dans l’audit informatique",
        "sousPoint": "Généralités",
        "question": "Quelle certification est citée comme reconnaissance internationale des compétences en audit des systèmes d’information ?",
        "answer": "La certification CISA.",
        "cleanAnswer": "La certification CISA.",
        "type": "qcm",
        "options": [
          "C’est une évaluation de l’efficacité des mesures de sécurité mises en place pour protéger les systèmes d’information contre les menaces internes et externes.",
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
          "Parce qu’il est nécessaire de comprendre le système d’information et d’être capable d’apprécier la capacité des systèmes informatiques à assurer la fiabilité de l’information de gestion.",
          "La certification CISA."
        ],
        "correctIndex": 3
      },
      {
        "id": 174,
        "chapitre": "23. Méthodologie d’audit",
        "sousPoint": "Généralités",
        "question": "Quelles sont les trois phases principales d’une mission d’audit informatique ?",
        "answer": "La planification, l’exécution et le rapport.",
        "cleanAnswer": "La planification, l’exécution et le rapport.",
        "type": "qcm",
        "options": [
          "La cartographie réseau et applicative, la fiche de description de l'environnement informatique, le mémo de prise de connaissance et le rapport d'audit détaillé.",
          "Elles comprennent : • La rédaction du rapport final ; • L'évaluation des risques résiduels ; • Le partage des conclusions.",
          "La planification, l’exécution et le rapport.",
          "La mission comprend principalement la préparation et la planification, l'évaluation de l'environnement du contrôle interne, les investigations, puis la conclusion des travaux et la restitution du rapport."
        ],
        "correctIndex": 2
      },
      {
        "id": 175,
        "chapitre": "23. Méthodologie d’audit",
        "sousPoint": "Phase 1 : Planification",
        "question": "Que fait-on pendant la phase de planification ?",
        "answer": "On définit le périmètre, on évalue les risques, on élabore le plan d’audit et on collecte les informations.",
        "cleanAnswer": "On définit le périmètre, on évalue les risques, on élabore le plan d’audit et on collecte les informations.",
        "type": "qcm",
        "options": [
          "On définit le périmètre, on évalue les risques, on élabore le plan d’audit et on collecte les informations.",
          "Elles comprennent : • La définition du périmètre ; • L'évaluation des risques ; • L'élaboration du plan d'audit ; • La collecte d'informations ; • La préparation des outils.",
          "Il définit notamment les objectifs, les ressources nécessaires et le calendrier.",
          "On définit le périmètre, évalue les risques, élabore le plan d'audit, collecte les informations et prépare les outils."
        ],
        "correctIndex": 0
      },
      {
        "id": 176,
        "chapitre": "23. Méthodologie d’audit",
        "sousPoint": "Phase 1 : Planification",
        "question": "Qu’est-ce que la définition du périmètre ?",
        "answer": "Elle consiste à identifier les systèmes, processus et zones qui seront audités.",
        "cleanAnswer": "Elle consiste à identifier les systèmes, processus et zones qui seront audités.",
        "type": "qcm",
        "options": [
          "Elle consiste à identifier les systèmes, les processus et les zones qui doivent être audités.",
          "Elle consiste à identifier les systèmes, processus et zones qui seront audités.",
          "Elle consiste à analyser les risques potentiels et à déterminer les priorités de l’audit.",
          "On définit le périmètre, on évalue les risques, on élabore le plan d’audit et on collecte les informations."
        ],
        "correctIndex": 1
      },
      {
        "id": 177,
        "chapitre": "23. Méthodologie d’audit",
        "sousPoint": "Phase 1 : Planification",
        "question": "En quoi consiste l’évaluation des risques ?",
        "answer": "Elle consiste à analyser les risques potentiels et à déterminer les priorités de l’audit.",
        "cleanAnswer": "Elle consiste à analyser les risques potentiels et à déterminer les priorités de l’audit.",
        "type": "qcm",
        "options": [
          "Pour rassembler les documents, politiques et procédures pertinents nécessaires à la réalisation de l’audit.",
          "Elle consiste à analyser les risques potentiels et à déterminer les priorités de l'audit.",
          "Elle consiste à analyser les risques potentiels et à déterminer les priorités de l’audit.",
          "Elle consiste à identifier les systèmes, processus et zones qui seront audités."
        ],
        "correctIndex": 2
      },
      {
        "id": 178,
        "chapitre": "23. Méthodologie d’audit",
        "sousPoint": "Phase 1 : Planification",
        "question": "Que contient le plan d’audit ?",
        "answer": "Il définit notamment les objectifs, les ressources nécessaires et le calendrier.",
        "cleanAnswer": "Il définit notamment les objectifs, les ressources nécessaires et le calendrier.",
        "type": "qcm",
        "options": [
          "On définit le périmètre, on évalue les risques, on élabore le plan d’audit et on collecte les informations.",
          "Elle consiste à définir les objectifs de l'audit, les ressources nécessaires et le calendrier des travaux.",
          "Pour rassembler les documents, politiques et procédures pertinents nécessaires à la réalisation de l’audit.",
          "Il définit notamment les objectifs, les ressources nécessaires et le calendrier."
        ],
        "correctIndex": 3
      },
      {
        "id": 179,
        "chapitre": "23. Méthodologie d’audit",
        "sousPoint": "Phase 1 : Planification",
        "question": "Pourquoi faut-il collecter les informations avant l’audit ?",
        "answer": "Pour rassembler les documents, politiques et procédures pertinents nécessaires à la réalisation de l’audit.",
        "cleanAnswer": "Pour rassembler les documents, politiques et procédures pertinents nécessaires à la réalisation de l’audit.",
        "type": "qcm",
        "options": [
          "On définit le périmètre, on évalue les risques, on élabore le plan d’audit et on collecte les informations.",
          "Il faut rassembler les documents, les politiques et les procédures nécessaires afin de mieux connaître l'environnement informatique et préparer les travaux d'audit.",
          "Pour rassembler les documents, politiques et procédures pertinents nécessaires à la réalisation de l’audit.",
          "Il définit notamment les objectifs, les ressources nécessaires et le calendrier."
        ],
        "correctIndex": 2
      },
      {
        "id": 180,
        "chapitre": "24. Phase d’exécution",
        "sousPoint": "Généralités",
        "question": "Que fait-on pendant la phase d’exécution ?",
        "answer": "On réalise notamment les interviews et observations, les tests de contrôle, l’analyse des données et la documentation des constatations.",
        "cleanAnswer": "On réalise notamment les interviews et observations, les tests de contrôle, l’analyse des données et la documentation des constatations.",
        "type": "qcm",
        "options": [
          "On réalise des interviews et observations, des tests de contrôle et une analyse des données.",
          "Elle consiste notamment à réaliser des interviews et des observations, effectuer des tests de contrôle et analyser les données.",
          "On réalise notamment les interviews et observations, les tests de contrôle, l’analyse des données et la documentation des constatations.",
          "Les interviews, les observations et les tests de contrôle."
        ],
        "correctIndex": 2
      },
      {
        "id": 181,
        "chapitre": "24. Phase d’exécution",
        "sousPoint": "Généralités",
        "question": "Pourquoi réalise-t-on des interviews ?",
        "answer": "Pour rencontrer les parties prenantes et recueillir des informations sur les processus, contrôles et risques.",
        "cleanAnswer": "Pour rencontrer les parties prenantes et recueillir des informations sur les processus, contrôles et risques.",
        "type": "qcm",
        "options": [
          "Pour rencontrer les parties prenantes et recueillir des informations sur les processus, contrôles et risques.",
          "Elles permettent de rencontrer les parties prenantes afin de mieux comprendre les processus et les contrôles existants.",
          "Recueillir des informations détaillées sur les processus, les contrôles et les risques directement auprès des parties prenantes.",
          "L’analyse des indicateurs de performance, la revue des processus et systèmes de gestion, les interviews des parties prenantes et l’analyse des données."
        ],
        "correctIndex": 0
      },
      {
        "id": 182,
        "chapitre": "24. Phase d’exécution",
        "sousPoint": "Généralités",
        "question": "Pourquoi réalise-t-on des observations ?",
        "answer": "Pour observer les processus en action et vérifier leur fonctionnement réel.",
        "cleanAnswer": "Pour observer les processus en action et vérifier leur fonctionnement réel.",
        "type": "qcm",
        "options": [
          "Elles permettent d'observer les processus en action afin de vérifier leur fonctionnement réel.",
          "Vérifier directement les processus et les contrôles en action.",
          "Pour observer les processus en action et vérifier leur fonctionnement réel.",
          "On sélectionne un échantillon de transactions ou de processus, on applique des tests spécifiques pour vérifier la conformité aux contrôles établis et on documente les résultats."
        ],
        "correctIndex": 2
      },
      {
        "id": 183,
        "chapitre": "24. Phase d’exécution",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce qu’un test de contrôle ?",
        "answer": "C’est un test permettant de vérifier l’efficacité des contrôles internes en place.",
        "cleanAnswer": "C’est un test permettant de vérifier l’efficacité des contrôles internes en place.",
        "type": "qcm",
        "options": [
          "C’est un test permettant de vérifier l’efficacité des contrôles internes en place.",
          "Évaluer l’efficacité des contrôles internes en place.",
          "On sélectionne un échantillon de transactions ou de processus, on applique des tests spécifiques pour vérifier la conformité aux contrôles établis et on documente les résultats.",
          "C’est une évaluation de l’efficacité des mesures de sécurité mises en place pour protéger les systèmes d’information contre les menaces internes et externes."
        ],
        "correctIndex": 0
      },
      {
        "id": 184,
        "chapitre": "24. Phase d’exécution",
        "sousPoint": "Généralités",
        "question": "Pourquoi analyse-t-on les données ?",
        "answer": "Pour identifier les anomalies et les risques.",
        "cleanAnswer": "Pour identifier les anomalies et les risques.",
        "type": "qcm",
        "options": [
          "Pour identifier les anomalies et les risques.",
          "L'analyse des données permet de détecter les anomalies et les risques.",
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
          "L'analyse des logs permet notamment de détecter des anomalies."
        ],
        "correctIndex": 0
      },
      {
        "id": 185,
        "chapitre": "24. Phase d’exécution",
        "sousPoint": "Généralités",
        "question": "Pourquoi documenter les constatations ?",
        "answer": "Pour documenter les écarts identifiés entre les contrôles prévus et les contrôles réellement appliqués.",
        "cleanAnswer": "Pour documenter les écarts identifiés entre les contrôles prévus et les contrôles réellement appliqués.",
        "type": "qcm",
        "options": [
          "Ils permettent de vérifier que les contrôles sont effectivement appliqués au cours du traitement des transactions.",
          "Il faut rédiger les écarts identifiés entre les contrôles prévus et les contrôles réellement appliqués.",
          "Pour documenter les écarts identifiés entre les contrôles prévus et les contrôles réellement appliqués.",
          "Il faut documenter les résultats et les écarts identifiés."
        ],
        "correctIndex": 2
      },
      {
        "id": 186,
        "chapitre": "25. Phase de rapport",
        "sousPoint": "Généralités",
        "question": "Que fait-on pendant la phase de rapport ?",
        "answer": "On rédige le rapport, on présente les résultats et on assure le suivi des actions correctives.",
        "cleanAnswer": "On rédige le rapport, on présente les résultats et on assure le suivi des actions correctives.",
        "type": "qcm",
        "options": [
          "On documente les constats, évalue leurs impacts, formule des recommandations et assure le suivi des actions correctives.",
          "Il permet de s'assurer que les recommandations sont effectivement mises en œuvre et qu'elles produisent les effets attendus sur la sécurité et l'efficacité des systèmes.",
          "On rédige le rapport, on présente les résultats et on assure le suivi des actions correctives.",
          "Il consiste à accompagner l’organisation dans la mise en œuvre des recommandations et à vérifier leur efficacité."
        ],
        "correctIndex": 2
      },
      {
        "id": 187,
        "chapitre": "25. Phase de rapport",
        "sousPoint": "Généralités",
        "question": "Que contient le rapport d’audit ?",
        "answer": "Il contient les constatations, les conclusions et les recommandations.",
        "cleanAnswer": "Il contient les constatations, les conclusions et les recommandations.",
        "type": "qcm",
        "options": [
          "Elle se termine par la rédaction du rapport final, l'évaluation des risques résiduels et la présentation des conclusions à la direction et aux parties prenantes.",
          "Il contient les constatations, les conclusions et les recommandations.",
          "Il contient les constats, les recommandations et le plan d'action.",
          "Il contient notamment les constats, les recommandations et le plan d'action."
        ],
        "correctIndex": 1
      },
      {
        "id": 188,
        "chapitre": "25. Phase de rapport",
        "sousPoint": "Généralités",
        "question": "À qui présente-t-on les résultats de l’audit ?",
        "answer": "Ils sont présentés à la direction et aux parties prenantes concernées.",
        "cleanAnswer": "Ils sont présentés à la direction et aux parties prenantes concernées.",
        "type": "qcm",
        "options": [
          "Cela permet de présenter les résultats de la mission à la direction et aux parties prenantes concernées.",
          "Elles doivent être présentées à la direction et aux parties prenantes concernées.",
          "Notamment les investisseurs et les régulateurs.",
          "Ils sont présentés à la direction et aux parties prenantes concernées."
        ],
        "correctIndex": 3
      },
      {
        "id": 189,
        "chapitre": "25. Phase de rapport",
        "sousPoint": "Généralités",
        "question": "Qu’est-ce que le suivi des actions correctives ?",
        "answer": "Il consiste à accompagner l’organisation dans la mise en œuvre des recommandations et à vérifier leur efficacité.",
        "cleanAnswer": "Il consiste à accompagner l’organisation dans la mise en œuvre des recommandations et à vérifier leur efficacité.",
        "type": "qcm",
        "options": [
          "Il consiste à accompagner l’organisation dans la mise en œuvre des recommandations et à vérifier leur efficacité.",
          "Il permet de s'assurer que les recommandations sont effectivement mises en œuvre et qu'elles produisent les effets attendus sur la sécurité et l'efficacité des systèmes.",
          "Il vérifie que les recommandations ont été mises en œuvre et qu'elles produisent les effets attendus.",
          "On documente les constats, évalue leurs impacts, formule des recommandations et assure le suivi des actions correctives."
        ],
        "correctIndex": 0
      },
      {
        "id": 190,
        "chapitre": "26. Techniques d’audit",
        "sousPoint": "Généralités",
        "question": "Quelles sont les principales techniques d’audit présentées dans le cours ?",
        "answer": "Les interviews, les observations et les tests de contrôle.",
        "cleanAnswer": "Les interviews, les observations et les tests de contrôle.",
        "type": "qcm",
        "options": [
          "On réalise des interviews et observations, des tests de contrôle et une analyse des données.",
          "Elle consiste notamment à réaliser des interviews et des observations, effectuer des tests de contrôle et analyser les données.",
          "Les interviews, observations et tests de contrôle sont utilisés de manière complémentaire afin d’obtenir une vue d’ensemble complète et précise des systèmes d’information et des contrôles en place.",
          "Les interviews, les observations et les tests de contrôle."
        ],
        "correctIndex": 3
      },
      {
        "id": 191,
        "chapitre": "26. Techniques d’audit",
        "sousPoint": "Interviews",
        "question": "Quel est l’objectif d’une interview d’audit ?",
        "answer": "Recueillir des informations détaillées sur les processus, les contrôles et les risques directement auprès des parties prenantes.",
        "cleanAnswer": "Recueillir des informations détaillées sur les processus, les contrôles et les risques directement auprès des parties prenantes.",
        "type": "qcm",
        "options": [
          "Recueillir des informations détaillées sur les processus, les contrôles et les risques directement auprès des parties prenantes.",
          "Pour rencontrer les parties prenantes et recueillir des informations sur les processus, contrôles et risques.",
          "Les entretiens permettent de recueillir des informations directement auprès des responsables concernés par les processus et les contrôles.",
          "Elles permettent d’obtenir des informations qualitatives et contextuelles et d’aider à comprendre les perceptions et préoccupations des parties prenantes."
        ],
        "correctIndex": 0
      },
      {
        "id": 192,
        "chapitre": "26. Techniques d’audit",
        "sousPoint": "Interviews",
        "question": "Comment prépare-t-on une interview ?",
        "answer": "Il faut préparer une liste de questions pertinentes.",
        "cleanAnswer": "Il faut préparer une liste de questions pertinentes.",
        "type": "qcm",
        "options": [
          "Recueillir des informations détaillées sur les processus, les contrôles et les risques directement auprès des parties prenantes.",
          "Il faut documenter les réponses et les observations.",
          "Il faut préparer une liste de questions pertinentes.",
          "Elles peuvent être subjectives et dépendre de la franchise des répondants. Elles nécessitent également du temps et des compétences en communication."
        ],
        "correctIndex": 2
      },
      {
        "id": 193,
        "chapitre": "26. Techniques d’audit",
        "sousPoint": "Interviews",
        "question": "Avec qui peut-on réaliser des interviews ?",
        "answer": "Avec les responsables des processus, les utilisateurs clés et les membres de l’équipe informatique.",
        "cleanAnswer": "Avec les responsables des processus, les utilisateurs clés et les membres de l’équipe informatique.",
        "type": "qcm",
        "options": [
          "Recueillir des informations détaillées sur les processus, les contrôles et les risques directement auprès des parties prenantes.",
          "Les entretiens permettent de recueillir des informations directement auprès des responsables concernés par les processus et les contrôles.",
          "Avec les responsables des processus, les utilisateurs clés et les membres de l’équipe informatique.",
          "Elles permettent d’obtenir des informations qualitatives et contextuelles et d’aider à comprendre les perceptions et préoccupations des parties prenantes."
        ],
        "correctIndex": 2
      },
      {
        "id": 194,
        "chapitre": "26. Techniques d’audit",
        "sousPoint": "Interviews",
        "question": "Que faut-il faire après une interview ?",
        "answer": "Il faut documenter les réponses et les observations.",
        "cleanAnswer": "Il faut documenter les réponses et les observations.",
        "type": "qcm",
        "options": [
          "Il faut documenter les réponses et les observations.",
          "On réalise des interviews et observations, des tests de contrôle et une analyse des données.",
          "Recueillir des informations détaillées sur les processus, les contrôles et les risques directement auprès des parties prenantes.",
          "Il faut préparer une liste de questions pertinentes."
        ],
        "correctIndex": 0
      },
      {
        "id": 195,
        "chapitre": "26. Techniques d’audit",
        "sousPoint": "Interviews",
        "question": "Quels sont les avantages des interviews ?",
        "answer": "Elles permettent d’obtenir des informations qualitatives et contextuelles et d’aider à comprendre les perceptions et préoccupations des parties prenantes.",
        "cleanAnswer": "Elles permettent d’obtenir des informations qualitatives et contextuelles et d’aider à comprendre les perceptions et préoccupations des parties prenantes.",
        "type": "qcm",
        "options": [
          "Pour rencontrer les parties prenantes et recueillir des informations sur les processus, contrôles et risques.",
          "Elles permettent d’obtenir des informations qualitatives et contextuelles et d’aider à comprendre les perceptions et préoccupations des parties prenantes.",
          "Recueillir des informations détaillées sur les processus, les contrôles et les risques directement auprès des parties prenantes.",
          "Elles permettent de rencontrer les parties prenantes afin de mieux comprendre les processus et les contrôles existants."
        ],
        "correctIndex": 1
      },
      {
        "id": 196,
        "chapitre": "26. Techniques d’audit",
        "sousPoint": "Interviews",
        "question": "Quelles sont les limites des interviews ?",
        "answer": "Elles peuvent être subjectives et dépendre de la franchise des répondants. Elles nécessitent également du temps et des compétences en communication.",
        "cleanAnswer": "Elles peuvent être subjectives et dépendre de la franchise des répondants. Elles nécessitent également du temps et des compétences en communication.",
        "type": "qcm",
        "options": [
          "Recueillir des informations détaillées sur les processus, les contrôles et les risques directement auprès des parties prenantes.",
          "Elles permettent d’obtenir des informations qualitatives et contextuelles et d’aider à comprendre les perceptions et préoccupations des parties prenantes.",
          "Ils peuvent nécessiter des compétences techniques spécifiques et leurs résultats peuvent être influencés par la qualité de l’échantillonnage.",
          "Elles peuvent être subjectives et dépendre de la franchise des répondants. Elles nécessitent également du temps et des compétences en communication."
        ],
        "correctIndex": 3
      },
      {
        "id": 197,
        "chapitre": "27. Observations",
        "sousPoint": "Généralités",
        "question": "Quel est l’objectif de l’observation en audit ?",
        "answer": "Vérifier directement les processus et les contrôles en action.",
        "cleanAnswer": "Vérifier directement les processus et les contrôles en action.",
        "type": "qcm",
        "options": [
          "Les entretiens permettent de recueillir des informations directement auprès des responsables concernés par les processus et les contrôles.",
          "Vérifier directement les processus et les contrôles en action.",
          "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
          "On sélectionne un échantillon de transactions ou de processus, on applique des tests spécifiques pour vérifier la conformité aux contrôles établis et on documente les résultats."
        ],
        "correctIndex": 1
      },
      {
        "id": 198,
        "chapitre": "27. Observations",
        "sousPoint": "Généralités",
        "question": "Comment réalise-t-on une observation ?",
        "answer": "On observe les opérations quotidiennes et les procédures en temps réel.",
        "cleanAnswer": "On observe les opérations quotidiennes et les procédures en temps réel.",
        "type": "qcm",
        "options": [
          "Il doit notamment rechercher les écarts entre les procédures documentées et les pratiques réelles.",
          "On observe les opérations quotidiennes et les procédures en temps réel.",
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation.",
          "Elle peut être intrusive, perturber les opérations normales et nécessite une présence physique ainsi que du temps."
        ],
        "correctIndex": 1
      },
      {
        "id": 199,
        "chapitre": "27. Observations",
        "sousPoint": "Généralités",
        "question": "Que doit rechercher l’auditeur pendant une observation ?",
        "answer": "Il doit notamment rechercher les écarts entre les procédures documentées et les pratiques réelles.",
        "cleanAnswer": "Il doit notamment rechercher les écarts entre les procédures documentées et les pratiques réelles.",
        "type": "qcm",
        "options": [
          "Elle fournit une vue objective et directe des opérations et permet de détecter des pratiques non documentées ou des écarts.",
          "On réalise des interviews et observations, des tests de contrôle et une analyse des données.",
          "Il doit notamment rechercher les écarts entre les procédures documentées et les pratiques réelles.",
          "On observe les opérations quotidiennes et les procédures en temps réel."
        ],
        "correctIndex": 2
      },
      {
        "id": 200,
        "chapitre": "27. Observations",
        "sousPoint": "Généralités",
        "question": "Quel outil peut être utilisé pendant les observations ?",
        "answer": "Des check-lists peuvent être utilisées pour s’assurer que tous les aspects sont couverts.",
        "cleanAnswer": "Des check-lists peuvent être utilisées pour s’assurer que tous les aspects sont couverts.",
        "type": "qcm",
        "options": [
          "Des check-lists peuvent être utilisées pour s’assurer que tous les aspects sont couverts.",
          "On réalise des interviews et observations, des tests de contrôle et une analyse des données.",
          "Les tests de pénétration, les analyses de vulnérabilités, la revue des politiques de sécurité et des configurations, ainsi que les simulations d’attaques et les évaluations des réponses.",
          "On réalise notamment les interviews et observations, les tests de contrôle, l’analyse des données et la documentation des constatations."
        ],
        "correctIndex": 0
      },
      {
        "id": 201,
        "chapitre": "27. Observations",
        "sousPoint": "Généralités",
        "question": "Quels sont les avantages de l’observation ?",
        "answer": "Elle fournit une vue objective et directe des opérations et permet de détecter des pratiques non documentées ou des écarts.",
        "cleanAnswer": "Elle fournit une vue objective et directe des opérations et permet de détecter des pratiques non documentées ou des écarts.",
        "type": "qcm",
        "options": [
          "Il doit notamment rechercher les écarts entre les procédures documentées et les pratiques réelles.",
          "Elle peut être intrusive, perturber les opérations normales et nécessite une présence physique ainsi que du temps.",
          "Elle fournit une vue objective et directe des opérations et permet de détecter des pratiques non documentées ou des écarts.",
          "Elle fournit une première évaluation des risques et des contrôles existants."
        ],
        "correctIndex": 2
      },
      {
        "id": 202,
        "chapitre": "27. Observations",
        "sousPoint": "Généralités",
        "question": "Quelles sont les limites de l’observation ?",
        "answer": "Elle peut être intrusive, perturber les opérations normales et nécessite une présence physique ainsi que du temps.",
        "cleanAnswer": "Elle peut être intrusive, perturber les opérations normales et nécessite une présence physique ainsi que du temps.",
        "type": "qcm",
        "options": [
          "Elle fournit une vue objective et directe des opérations et permet de détecter des pratiques non documentées ou des écarts.",
          "L’audit interne est une activité indépendante et objective qui donne à une organisation une assurance sur le degré de maîtrise de ses opérations, lui apporte des conseils pour les améliorer et contribue à créer de la valeur ajoutée.",
          "Elle peut être intrusive, perturber les opérations normales et nécessite une présence physique ainsi que du temps.",
          "On observe les opérations quotidiennes et les procédures en temps réel."
        ],
        "correctIndex": 2
      },
      {
        "id": 203,
        "chapitre": "28. Tests de contrôle",
        "sousPoint": "Généralités",
        "question": "Quel est l’objectif des tests de contrôle ?",
        "answer": "Évaluer l’efficacité des contrôles internes en place.",
        "cleanAnswer": "Évaluer l’efficacité des contrôles internes en place.",
        "type": "qcm",
        "options": [
          "Les interviews, observations et tests de contrôle sont utilisés de manière complémentaire afin d’obtenir une vue d’ensemble complète et précise des systèmes d’information et des contrôles en place.",
          "Ils fournissent des preuves tangibles de l’efficacité des contrôles et permettent de quantifier les écarts et les risques.",
          "Évaluer l’efficacité des contrôles internes en place.",
          "C’est un test permettant de vérifier l’efficacité des contrôles internes en place."
        ],
        "correctIndex": 2
      },
      {
        "id": 204,
        "chapitre": "28. Tests de contrôle",
        "sousPoint": "Généralités",
        "question": "Comment réalise-t-on un test de contrôle ?",
        "answer": "On sélectionne un échantillon de transactions ou de processus, on applique des tests spécifiques pour vérifier la conformité aux contrôles établis et on documente les résultats.",
        "cleanAnswer": "On sélectionne un échantillon de transactions ou de processus, on applique des tests spécifiques pour vérifier la conformité aux contrôles établis et on documente les résultats.",
        "type": "qcm",
        "options": [
          "Évaluer l’efficacité des processus de gestion des risques, de contrôle et de gouvernance, améliorer les opérations et assurer la conformité aux politiques internes et aux réglementations.",
          "Ils permettent de vérifier l'efficacité des contrôles internes au moyen de tests ciblés.",
          "On sélectionne un échantillon de transactions ou de processus, on applique des tests spécifiques pour vérifier la conformité aux contrôles établis et on documente les résultats.",
          "C'est un test qui consiste à suivre le flux des transactions afin de vérifier l'application des contrôles."
        ],
        "correctIndex": 2
      },
      {
        "id": 205,
        "chapitre": "28. Tests de contrôle",
        "sousPoint": "Généralités",
        "question": "Pourquoi sélectionner un échantillon ?",
        "answer": "Pour tester un ensemble représentatif de transactions ou de processus sans nécessairement examiner toutes les opérations.",
        "cleanAnswer": "Pour tester un ensemble représentatif de transactions ou de processus sans nécessairement examiner toutes les opérations.",
        "type": "qcm",
        "options": [
          "Pour tester un ensemble représentatif de transactions ou de processus sans nécessairement examiner toutes les opérations.",
          "On sélectionne un échantillon de transactions ou de processus, on applique des tests spécifiques pour vérifier la conformité aux contrôles établis et on documente les résultats.",
          "Il vise à vérifier que les processus, systèmes et opérations d’une organisation respectent les lois, règlements, normes et politiques internes.",
          "C’est une évaluation de l’efficacité, de l’efficience et de l’économie des opérations et processus d’une organisation."
        ],
        "correctIndex": 0
      },
      {
        "id": 206,
        "chapitre": "28. Tests de contrôle",
        "sousPoint": "Généralités",
        "question": "Que faut-il documenter après un test de contrôle ?",
        "answer": "Il faut documenter les résultats et les écarts identifiés.",
        "cleanAnswer": "Il faut documenter les résultats et les écarts identifiés.",
        "type": "qcm",
        "options": [
          "Il faut documenter les résultats et les écarts identifiés.",
          "Il faut rédiger les écarts identifiés entre les contrôles prévus et les contrôles réellement appliqués.",
          "Pour documenter les écarts identifiés entre les contrôles prévus et les contrôles réellement appliqués.",
          "Il faut évaluer leur impact potentiel."
        ],
        "correctIndex": 0
      },
      {
        "id": 207,
        "chapitre": "28. Tests de contrôle",
        "sousPoint": "Généralités",
        "question": "Quels sont les avantages des tests de contrôle ?",
        "answer": "Ils fournissent des preuves tangibles de l’efficacité des contrôles et permettent de quantifier les écarts et les risques.",
        "cleanAnswer": "Ils fournissent des preuves tangibles de l’efficacité des contrôles et permettent de quantifier les écarts et les risques.",
        "type": "qcm",
        "options": [
          "C’est un test permettant de vérifier l’efficacité des contrôles internes en place.",
          "Ils permettent de vérifier l'efficacité des contrôles internes au moyen de tests ciblés.",
          "Évaluer l’efficacité des contrôles internes en place.",
          "Ils fournissent des preuves tangibles de l’efficacité des contrôles et permettent de quantifier les écarts et les risques."
        ],
        "correctIndex": 3
      },
      {
        "id": 208,
        "chapitre": "28. Tests de contrôle",
        "sousPoint": "Généralités",
        "question": "Quelles sont les limites des tests de contrôle ?",
        "answer": "Ils peuvent nécessiter des compétences techniques spécifiques et leurs résultats peuvent être influencés par la qualité de l’échantillonnage.",
        "cleanAnswer": "Ils peuvent nécessiter des compétences techniques spécifiques et leurs résultats peuvent être influencés par la qualité de l’échantillonnage.",
        "type": "qcm",
        "options": [
          "Les interviews, observations et tests de contrôle sont utilisés de manière complémentaire afin d’obtenir une vue d’ensemble complète et précise des systèmes d’information et des contrôles en place.",
          "On sélectionne un échantillon de transactions ou de processus, on applique des tests spécifiques pour vérifier la conformité aux contrôles établis et on documente les résultats.",
          "Ils peuvent nécessiter des compétences techniques spécifiques et leurs résultats peuvent être influencés par la qualité de l’échantillonnage.",
          "Les interviews, les observations et les tests de contrôle."
        ],
        "correctIndex": 2
      },
      {
        "id": 209,
        "chapitre": "28. Tests de contrôle",
        "sousPoint": "Généralités",
        "question": "Pourquoi les trois techniques d’audit sont-elles complémentaires ?",
        "answer": "Les interviews, observations et tests de contrôle sont utilisés de manière complémentaire afin d’obtenir une vue d’ensemble complète et précise des systèmes d’information et des contrôles en place.",
        "cleanAnswer": "Les interviews, observations et tests de contrôle sont utilisés de manière complémentaire afin d’obtenir une vue d’ensemble complète et précise des systèmes d’information et des contrôles en place.",
        "type": "qcm",
        "options": [
          "Il est nécessaire de mettre en place une démarche d’audit afin de répondre aux enjeux liés à la maîtrise des systèmes d’information et aux risques informatiques.",
          "On réalise des interviews et observations, des tests de contrôle et une analyse des données.",
          "Les interviews, observations et tests de contrôle sont utilisés de manière complémentaire afin d’obtenir une vue d’ensemble complète et précise des systèmes d’information et des contrôles en place.",
          "Les interviews, les observations et les tests de contrôle."
        ],
        "correctIndex": 2
      },
      {
        "id": 210,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1. Préparer et planifier la mission",
        "question": "Quelles sont les principales étapes de la préparation et de la planification d'une mission d'audit informatique ?",
        "answer": "Elles comprennent :<ol class=\"styled-ol\"><li>La définition du périmètre ;</li><li>L'évaluation des risques ;</li><li>L'élaboration du plan d'audit ;</li><li>La collecte d'informations ;</li><li>La préparation des outils.</li></ol>",
        "cleanAnswer": "Elles comprennent : • La définition du périmètre ; • L'évaluation des risques ; • L'élaboration du plan d'audit ; • La collecte d'informations ; • La préparation des outils.",
        "type": "order",
        "correctOrder": [
          "La définition du périmètre ;",
          "L'évaluation des risques ;",
          "L'élaboration du plan d'audit ;",
          "La collecte d'informations ;",
          "La préparation des outils."
        ],
        "shuffledItems": [
          "L'évaluation des risques ;",
          "La définition du périmètre ;",
          "La préparation des outils.",
          "L'élaboration du plan d'audit ;",
          "La collecte d'informations ;"
        ]
      },
      {
        "id": 211,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1. Préparer et planifier la mission",
        "question": "En quoi consiste la définition du périmètre d'un audit ?",
        "answer": "Elle consiste à identifier les systèmes, les processus et les zones qui doivent être audités.",
        "cleanAnswer": "Elle consiste à identifier les systèmes, les processus et les zones qui doivent être audités.",
        "type": "qcm",
        "options": [
          "Elles comprennent : • La définition du périmètre ; • L'évaluation des risques ; • L'élaboration du plan d'audit ; • La collecte d'informations ; • La préparation des outils.",
          "Elle consiste à analyser les risques potentiels et à déterminer les priorités de l'audit.",
          "Elle consiste à identifier les systèmes, processus et zones qui seront audités.",
          "Elle consiste à identifier les systèmes, les processus et les zones qui doivent être audités."
        ],
        "correctIndex": 3
      },
      {
        "id": 212,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1. Préparer et planifier la mission",
        "question": "En quoi consiste l'évaluation des risques ?",
        "answer": "Elle consiste à analyser les risques potentiels et à déterminer les priorités de l'audit.",
        "cleanAnswer": "Elle consiste à analyser les risques potentiels et à déterminer les priorités de l'audit.",
        "type": "qcm",
        "options": [
          "Elle consiste à analyser les risques potentiels et à déterminer les priorités de l'audit.",
          "Elle consiste à définir les objectifs de l'audit, les ressources nécessaires et le calendrier des travaux.",
          "Elle consiste à identifier les systèmes, les processus et les zones qui doivent être audités.",
          "Elles comprennent : • La définition du périmètre ; • L'évaluation des risques ; • L'élaboration du plan d'audit ; • La collecte d'informations ; • La préparation des outils."
        ],
        "correctIndex": 0
      },
      {
        "id": 213,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1. Préparer et planifier la mission",
        "question": "En quoi consiste l'élaboration du plan d'audit ?",
        "answer": "Elle consiste à définir les objectifs de l'audit, les ressources nécessaires et le calendrier des travaux.",
        "cleanAnswer": "Elle consiste à définir les objectifs de l'audit, les ressources nécessaires et le calendrier des travaux.",
        "type": "qcm",
        "options": [
          "Elle consiste à analyser les risques potentiels et à déterminer les priorités de l'audit.",
          "Il faut configurer les outils et les logiciels nécessaires à la réalisation des travaux d'audit.",
          "Elles comprennent : • La définition du périmètre ; • L'évaluation des risques ; • L'élaboration du plan d'audit ; • La collecte d'informations ; • La préparation des outils.",
          "Elle consiste à définir les objectifs de l'audit, les ressources nécessaires et le calendrier des travaux."
        ],
        "correctIndex": 3
      },
      {
        "id": 214,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1. Préparer et planifier la mission",
        "question": "Pourquoi faut-il collecter des informations avant de commencer l'audit ?",
        "answer": "Il faut rassembler les documents, les politiques et les procédures nécessaires afin de mieux connaître l'environnement informatique et préparer les travaux d'audit.",
        "cleanAnswer": "Il faut rassembler les documents, les politiques et les procédures nécessaires afin de mieux connaître l'environnement informatique et préparer les travaux d'audit.",
        "type": "qcm",
        "options": [
          "Il faut rassembler les documents, les politiques et les procédures nécessaires afin de mieux connaître l'environnement informatique et préparer les travaux d'audit.",
          "Elle consiste à définir les objectifs de l'audit, les ressources nécessaires et le calendrier des travaux.",
          "Il faut configurer les outils et les logiciels nécessaires à la réalisation des travaux d'audit.",
          "Pour rassembler les documents, politiques et procédures pertinents nécessaires à la réalisation de l’audit."
        ],
        "correctIndex": 0
      },
      {
        "id": 215,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1. Préparer et planifier la mission",
        "question": "Pourquoi faut-il préparer les outils d'audit ?",
        "answer": "Il faut configurer les outils et les logiciels nécessaires à la réalisation des travaux d'audit.",
        "cleanAnswer": "Il faut configurer les outils et les logiciels nécessaires à la réalisation des travaux d'audit.",
        "type": "qcm",
        "options": [
          "Elle consiste à définir les objectifs de l'audit, les ressources nécessaires et le calendrier des travaux.",
          "Il faut configurer les outils et les logiciels nécessaires à la réalisation des travaux d'audit.",
          "Il faut rassembler les documents, les politiques et les procédures nécessaires afin de mieux connaître l'environnement informatique et préparer les travaux d'audit.",
          "Elles comprennent : • La définition du périmètre ; • L'évaluation des risques ; • L'élaboration du plan d'audit ; • La collecte d'informations ; • La préparation des outils."
        ],
        "correctIndex": 1
      },
      {
        "id": 216,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1.1. Cartographie du réseau et des applications",
        "question": "Pourquoi la cartographie du réseau et des applications est-elle importante ?",
        "answer": "Elle permet de visualiser l'architecture informatique, d'identifier les flux d'information, les points sensibles et les applications critiques.",
        "cleanAnswer": "Elle permet de visualiser l'architecture informatique, d'identifier les flux d'information, les points sensibles et les applications critiques.",
        "type": "qcm",
        "options": [
          "Le réseau et les applications peuvent notamment être cartographiés afin de visualiser l'architecture informatique et les différents flux.",
          "Elle permet notamment d'identifier les flux d'information, les points sensibles et les applications critiques.",
          "Elle permet de représenter l'architecture réseau et applicative ainsi que les éléments importants de l'environnement informatique.",
          "Elle permet de visualiser l'architecture informatique, d'identifier les flux d'information, les points sensibles et les applications critiques."
        ],
        "correctIndex": 3
      },
      {
        "id": 217,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1.1. Cartographie du réseau et des applications",
        "question": "Que permet d'identifier la cartographie informatique ?",
        "answer": "Elle permet notamment d'identifier les flux d'information, les points sensibles et les applications critiques.",
        "cleanAnswer": "Elle permet notamment d'identifier les flux d'information, les points sensibles et les applications critiques.",
        "type": "qcm",
        "options": [
          "Elle aide l'auditeur à cibler les zones à risque et à mieux planifier les investigations.",
          "Elle permet de visualiser l'architecture informatique, d'identifier les flux d'information, les points sensibles et les applications critiques.",
          "Elle permet notamment d'identifier les flux d'information, les points sensibles et les applications critiques.",
          "Le réseau et les applications peuvent notamment être cartographiés afin de visualiser l'architecture informatique et les différents flux."
        ],
        "correctIndex": 2
      },
      {
        "id": 218,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1.1. Cartographie du réseau et des applications",
        "question": "Comment la cartographie aide-t-elle l'auditeur ?",
        "answer": "Elle aide l'auditeur à cibler les zones à risque et à mieux planifier les investigations.",
        "cleanAnswer": "Elle aide l'auditeur à cibler les zones à risque et à mieux planifier les investigations.",
        "type": "qcm",
        "options": [
          "Elle aide l'auditeur à cibler les zones à risque et à mieux planifier les investigations.",
          "Elle permet notamment d'identifier les flux d'information, les points sensibles et les applications critiques.",
          "Elle permet de visualiser l'architecture informatique, d'identifier les flux d'information, les points sensibles et les applications critiques.",
          "Le réseau et les applications peuvent notamment être cartographiés afin de visualiser l'architecture informatique et les différents flux."
        ],
        "correctIndex": 0
      },
      {
        "id": 219,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1.1. Cartographie du réseau et des applications",
        "question": "Quels éléments peuvent être cartographiés dans un environnement informatique ?",
        "answer": "Le réseau et les applications peuvent notamment être cartographiés afin de visualiser l'architecture informatique et les différents flux.",
        "cleanAnswer": "Le réseau et les applications peuvent notamment être cartographiés afin de visualiser l'architecture informatique et les différents flux.",
        "type": "qcm",
        "options": [
          "Elle permet de visualiser l'architecture informatique, d'identifier les flux d'information, les points sensibles et les applications critiques.",
          "Elle permet notamment d'identifier les flux d'information, les points sensibles et les applications critiques.",
          "Elle permet de représenter l'architecture réseau et applicative ainsi que les éléments importants de l'environnement informatique.",
          "Le réseau et les applications peuvent notamment être cartographiés afin de visualiser l'architecture informatique et les différents flux."
        ],
        "correctIndex": 3
      },
      {
        "id": 220,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1.2. Prise de connaissance de l'environnement informatique",
        "question": "Quelles informations doit-on collecter lors de la prise de connaissance de l'environnement informatique ?",
        "answer": "Il faut notamment collecter :<ul class=\"styled-ul\"><li>les organigrammes ;</li><li>les cartographies applicatives ;</li><li>les rapports d'audit antérieurs ;</li><li>les informations sur la structure de l'équipe informatique ;</li><li>les rôles et responsabilités ;</li><li>les systèmes et applications utilisés ;</li><li>les versions des systèmes et applications ;</li><li>leur localisation ;</li><li>les informations sur les prestataires externes et leur rôle.</li></ul>",
        "cleanAnswer": "Il faut notamment collecter : • les organigrammes ; • les cartographies applicatives ; • les rapports d'audit antérieurs ; • les informations sur la structure de l'équipe informatique ; • les rôles et responsabilités ; • les systèmes et applications utilisés ; • les versions des systèmes et applications ; • leur localisation ; • les informations sur les prestataires externes et leur rôle.",
        "type": "qcm",
        "options": [
          "Il faut identifier les systèmes et applications utilisés, leurs versions et leur localisation.",
          "Il faut connaître sa structure ainsi que les rôles et responsabilités de ses membres.",
          "Ils permettent de prendre connaissance des constats et éléments déjà identifiés lors des audits précédents.",
          "Il faut notamment collecter : • les organigrammes ; • les cartographies applicatives ; • les rapports d'audit antérieurs ; • les informations sur la structure de l'équipe informatique ; • les rôles et responsabilités ; • les systèmes et applications utilisés ; • les versions des systèmes et applications ; • leur localisation ; • les informations sur les prestataires externes et leur rôle."
        ],
        "correctIndex": 3
      },
      {
        "id": 221,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1.2. Prise de connaissance de l'environnement informatique",
        "question": "Pourquoi faut-il consulter les organigrammes ?",
        "answer": "Ils permettent de comprendre la structure de l'organisation et de connaître les différentes responsabilités.",
        "cleanAnswer": "Ils permettent de comprendre la structure de l'organisation et de connaître les différentes responsabilités.",
        "type": "qcm",
        "options": [
          "Il faut connaître les prestataires externes ainsi que leur rôle dans l'environnement informatique.",
          "Il faut connaître sa structure ainsi que les rôles et responsabilités de ses membres.",
          "Ils permettent de prendre connaissance des constats et éléments déjà identifiés lors des audits précédents.",
          "Ils permettent de comprendre la structure de l'organisation et de connaître les différentes responsabilités."
        ],
        "correctIndex": 3
      },
      {
        "id": 222,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1.2. Prise de connaissance de l'environnement informatique",
        "question": "Pourquoi faut-il examiner les rapports d'audit antérieurs ?",
        "answer": "Ils permettent de prendre connaissance des constats et éléments déjà identifiés lors des audits précédents.",
        "cleanAnswer": "Ils permettent de prendre connaissance des constats et éléments déjà identifiés lors des audits précédents.",
        "type": "qcm",
        "options": [
          "Il faut connaître sa structure ainsi que les rôles et responsabilités de ses membres.",
          "Ils permettent de prendre connaissance des constats et éléments déjà identifiés lors des audits précédents.",
          "Ils permettent de comprendre la structure de l'organisation et de connaître les différentes responsabilités.",
          "Il faut identifier les systèmes et applications utilisés, leurs versions et leur localisation."
        ],
        "correctIndex": 1
      },
      {
        "id": 223,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1.2. Prise de connaissance de l'environnement informatique",
        "question": "Quelles informations faut-il connaître concernant l'équipe informatique ?",
        "answer": "Il faut connaître sa structure ainsi que les rôles et responsabilités de ses membres.",
        "cleanAnswer": "Il faut connaître sa structure ainsi que les rôles et responsabilités de ses membres.",
        "type": "qcm",
        "options": [
          "Il faut connaître les prestataires externes ainsi que leur rôle dans l'environnement informatique.",
          "Il faut identifier les systèmes et applications utilisés, leurs versions et leur localisation.",
          "Ils permettent de comprendre la structure de l'organisation et de connaître les différentes responsabilités.",
          "Il faut connaître sa structure ainsi que les rôles et responsabilités de ses membres."
        ],
        "correctIndex": 3
      },
      {
        "id": 224,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1.2. Prise de connaissance de l'environnement informatique",
        "question": "Quelles informations faut-il recueillir sur les systèmes et applications ?",
        "answer": "Il faut identifier les systèmes et applications utilisés, leurs versions et leur localisation.",
        "cleanAnswer": "Il faut identifier les systèmes et applications utilisés, leurs versions et leur localisation.",
        "type": "qcm",
        "options": [
          "Ils permettent de prendre connaissance des constats et éléments déjà identifiés lors des audits précédents.",
          "Il faut identifier les systèmes et applications utilisés, leurs versions et leur localisation.",
          "Il faut connaître sa structure ainsi que les rôles et responsabilités de ses membres.",
          "Il faut connaître les prestataires externes ainsi que leur rôle dans l'environnement informatique."
        ],
        "correctIndex": 1
      },
      {
        "id": 225,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1.2. Prise de connaissance de l'environnement informatique",
        "question": "Pourquoi faut-il identifier les prestataires externes ?",
        "answer": "Il faut connaître les prestataires externes ainsi que leur rôle dans l'environnement informatique.",
        "cleanAnswer": "Il faut connaître les prestataires externes ainsi que leur rôle dans l'environnement informatique.",
        "type": "qcm",
        "options": [
          "Il faut connaître sa structure ainsi que les rôles et responsabilités de ses membres.",
          "Il faut identifier les systèmes et applications utilisés, leurs versions et leur localisation.",
          "Il faut connaître les prestataires externes ainsi que leur rôle dans l'environnement informatique.",
          "Ils permettent de comprendre la structure de l'organisation et de connaître les différentes responsabilités."
        ],
        "correctIndex": 2
      },
      {
        "id": 226,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1.3. Fiche de description de l'environnement informatique",
        "question": "Quel est l'objectif de la fiche de description de l'environnement informatique ?",
        "answer": "Elle synthétise les informations collectées sur les systèmes, les applications et les risques identifiés.",
        "cleanAnswer": "Elle synthétise les informations collectées sur les systèmes, les applications et les risques identifiés.",
        "type": "qcm",
        "options": [
          "Elle synthétise les informations collectées sur les systèmes, les applications et les risques identifiés.",
          "Les systèmes, les applications et les risques identifiés.",
          "Il faut identifier les systèmes et applications utilisés, leurs versions et leur localisation.",
          "Elle synthétise les informations collectées sur les systèmes, applications et risques identifiés et sert de base pour ajuster le plan d'audit."
        ],
        "correctIndex": 0
      },
      {
        "id": 227,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1.3. Fiche de description de l'environnement informatique",
        "question": "À quoi sert la fiche de description de l'environnement informatique ?",
        "answer": "Elle sert de base pour ajuster le plan d'audit.",
        "cleanAnswer": "Elle sert de base pour ajuster le plan d'audit.",
        "type": "qcm",
        "options": [
          "Les systèmes, les applications et les risques identifiés.",
          "Elle synthétise les informations collectées sur les systèmes, les applications et les risques identifiés.",
          "Elle synthétise les informations collectées sur les systèmes, applications et risques identifiés et sert de base pour ajuster le plan d'audit.",
          "Elle sert de base pour ajuster le plan d'audit."
        ],
        "correctIndex": 3
      },
      {
        "id": 228,
        "chapitre": "CHAPITRE 2 — DÉROULEMENT D'UNE MISSION D'AUDIT INFORMATIQUE",
        "sousPoint": "2.1.3. Fiche de description de l'environnement informatique",
        "question": "Quels éléments sont synthétisés dans la fiche de description de l'environnement informatique ?",
        "answer": "Les systèmes, les applications et les risques identifiés.",
        "cleanAnswer": "Les systèmes, les applications et les risques identifiés.",
        "type": "qcm",
        "options": [
          "Les systèmes, les applications et les risques identifiés.",
          "Elle synthétise les informations collectées sur les systèmes, applications et risques identifiés et sert de base pour ajuster le plan d'audit.",
          "Elle synthétise les informations collectées sur les systèmes, les applications et les risques identifiés.",
          "Elle sert de base pour ajuster le plan d'audit."
        ],
        "correctIndex": 0
      },
      {
        "id": 229,
        "chapitre": "2.2. Évaluer l'environnement du contrôle interne",
        "sousPoint": "Généralités",
        "question": "En quoi consiste l'évaluation de l'environnement du contrôle interne ?",
        "answer": "Elle consiste notamment à réaliser des interviews et des observations, effectuer des tests de contrôle et analyser les données.",
        "cleanAnswer": "Elle consiste notamment à réaliser des interviews et des observations, effectuer des tests de contrôle et analyser les données.",
        "type": "qcm",
        "options": [
          "L'analyse des données permet de détecter les anomalies et les risques.",
          "On réalise des interviews et observations, des tests de contrôle et une analyse des données.",
          "Elle consiste notamment à réaliser des interviews et des observations, effectuer des tests de contrôle et analyser les données.",
          "On réalise notamment les interviews et observations, les tests de contrôle, l’analyse des données et la documentation des constatations."
        ],
        "correctIndex": 2
      },
      {
        "id": 230,
        "chapitre": "2.2. Évaluer l'environnement du contrôle interne",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle des interviews dans l'évaluation du contrôle interne ?",
        "answer": "Elles permettent de rencontrer les parties prenantes afin de mieux comprendre les processus et les contrôles existants.",
        "cleanAnswer": "Elles permettent de rencontrer les parties prenantes afin de mieux comprendre les processus et les contrôles existants.",
        "type": "qcm",
        "options": [
          "Elle permet de comprendre le dispositif réel de contrôle interne, d'identifier les faiblesses et de fournir une première évaluation des risques et des contrôles existants.",
          "Elles permettent de rencontrer les parties prenantes afin de mieux comprendre les processus et les contrôles existants.",
          "Pour rencontrer les parties prenantes et recueillir des informations sur les processus, contrôles et risques.",
          "On réalise des interviews et observations, des tests de contrôle et une analyse des données."
        ],
        "correctIndex": 1
      },
      {
        "id": 231,
        "chapitre": "2.2. Évaluer l'environnement du contrôle interne",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle des observations ?",
        "answer": "Elles permettent d'observer les processus en action afin de vérifier leur fonctionnement réel.",
        "cleanAnswer": "Elles permettent d'observer les processus en action afin de vérifier leur fonctionnement réel.",
        "type": "qcm",
        "options": [
          "Vérifier directement les processus et les contrôles en action.",
          "Elles permettent d'observer les processus en action afin de vérifier leur fonctionnement réel.",
          "Pour observer les processus en action et vérifier leur fonctionnement réel.",
          "Ils permettent de vérifier l'efficacité des contrôles internes au moyen de tests ciblés."
        ],
        "correctIndex": 1
      },
      {
        "id": 232,
        "chapitre": "2.2. Évaluer l'environnement du contrôle interne",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle des tests de contrôle ?",
        "answer": "Ils permettent de vérifier l'efficacité des contrôles internes au moyen de tests ciblés.",
        "cleanAnswer": "Ils permettent de vérifier l'efficacité des contrôles internes au moyen de tests ciblés.",
        "type": "qcm",
        "options": [
          "Ils fournissent des preuves tangibles de l’efficacité des contrôles et permettent de quantifier les écarts et les risques.",
          "Évaluer l’efficacité des contrôles internes en place.",
          "Ils permettent de vérifier l'efficacité des contrôles internes au moyen de tests ciblés.",
          "Elles permettent de rencontrer les parties prenantes afin de mieux comprendre les processus et les contrôles existants."
        ],
        "correctIndex": 2
      },
      {
        "id": 233,
        "chapitre": "2.2. Évaluer l'environnement du contrôle interne",
        "sousPoint": "Généralités",
        "question": "Pourquoi analyser les données lors de l'évaluation du contrôle interne ?",
        "answer": "L'analyse des données permet de détecter les anomalies et les risques.",
        "cleanAnswer": "L'analyse des données permet de détecter les anomalies et les risques.",
        "type": "qcm",
        "options": [
          "L'analyse des données permet de détecter les anomalies et les risques.",
          "Elle permet de comprendre le dispositif réel de contrôle interne, d'identifier les faiblesses et de fournir une première évaluation des risques et des contrôles existants.",
          "L'analyse des logs permet notamment de détecter des anomalies.",
          "On réalise des interviews et observations, des tests de contrôle et une analyse des données."
        ],
        "correctIndex": 0
      },
      {
        "id": 234,
        "chapitre": "2.2. Évaluer l'environnement du contrôle interne",
        "sousPoint": "Généralités",
        "question": "Pourquoi l'évaluation de l'environnement du contrôle interne est-elle incontournable ?",
        "answer": "Elle permet de comprendre le dispositif réel de contrôle interne, d'identifier les faiblesses et de fournir une première évaluation des risques et des contrôles existants.",
        "cleanAnswer": "Elle permet de comprendre le dispositif réel de contrôle interne, d'identifier les faiblesses et de fournir une première évaluation des risques et des contrôles existants.",
        "type": "qcm",
        "options": [
          "Elles permettent de rencontrer les parties prenantes afin de mieux comprendre les processus et les contrôles existants.",
          "Elle permet notamment d'identifier les faiblesses du dispositif de contrôle interne.",
          "Elle permet de comprendre le dispositif réel de contrôle interne, d'identifier les faiblesses et de fournir une première évaluation des risques et des contrôles existants.",
          "Elle fournit une première évaluation des risques et des contrôles existants."
        ],
        "correctIndex": 2
      },
      {
        "id": 235,
        "chapitre": "2.2. Évaluer l'environnement du contrôle interne",
        "sousPoint": "Généralités",
        "question": "Que permet d'identifier l'évaluation du contrôle interne ?",
        "answer": "Elle permet notamment d'identifier les faiblesses du dispositif de contrôle interne.",
        "cleanAnswer": "Elle permet notamment d'identifier les faiblesses du dispositif de contrôle interne.",
        "type": "qcm",
        "options": [
          "Elle permet notamment d'identifier les faiblesses du dispositif de contrôle interne.",
          "La mission comprend principalement la préparation et la planification, l'évaluation de l'environnement du contrôle interne, les investigations, puis la conclusion des travaux et la restitution du rapport.",
          "Elle permet de comprendre le dispositif réel de contrôle interne, d'identifier les faiblesses et de fournir une première évaluation des risques et des contrôles existants.",
          "L'analyse des données permet de détecter les anomalies et les risques."
        ],
        "correctIndex": 0
      },
      {
        "id": 236,
        "chapitre": "2.2. Évaluer l'environnement du contrôle interne",
        "sousPoint": "Généralités",
        "question": "Que permet de fournir cette évaluation ?",
        "answer": "Elle fournit une première évaluation des risques et des contrôles existants.",
        "cleanAnswer": "Elle fournit une première évaluation des risques et des contrôles existants.",
        "type": "qcm",
        "options": [
          "L'analyse des données permet de détecter les anomalies et les risques.",
          "Elle fournit une première évaluation des risques et des contrôles existants.",
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
          "Elle permet de comprendre le dispositif réel de contrôle interne, d'identifier les faiblesses et de fournir une première évaluation des risques et des contrôles existants."
        ],
        "correctIndex": 1
      },
      {
        "id": 237,
        "chapitre": "2.3. Investiguer : mener les investigations",
        "sousPoint": "Généralités",
        "question": "Quelles sont les principales actions menées lors des investigations ?",
        "answer": "Elles comprennent :<ul class=\"styled-ul\"><li>la collecte de documents ;</li><li>la planification et la réalisation d'entretiens ;</li><li>les tests de cheminement ;</li><li>les tests de conformité et de pénétration ;</li><li>l'analyse des logs et des accès.</li></ul>",
        "cleanAnswer": "Elles comprennent : • la collecte de documents ; • la planification et la réalisation d'entretiens ; • les tests de cheminement ; • les tests de conformité et de pénétration ; • l'analyse des logs et des accès.",
        "type": "checkbox",
        "allItems": [
          "les tests de cheminement ;",
          "La vérification du temps de travail et de repos par les Ressources Humaines ;",
          "l'analyse des logs et des accès.",
          "la collecte de documents ;",
          "les tests de conformité et de pénétration ;",
          "Le contrôle de l'authenticité des justificatifs lors d'une immatriculation ;",
          "la planification et la réalisation d'entretiens ;",
          "La définition du périmètre ;"
        ],
        "correctItems": [
          "la collecte de documents ;",
          "la planification et la réalisation d'entretiens ;",
          "les tests de cheminement ;",
          "les tests de conformité et de pénétration ;",
          "l'analyse des logs et des accès."
        ],
        "distractors": [
          "La définition du périmètre ;",
          "La vérification du temps de travail et de repos par les Ressources Humaines ;",
          "Le contrôle de l'authenticité des justificatifs lors d'une immatriculation ;"
        ]
      },
      {
        "id": 238,
        "chapitre": "2.3. Investiguer : mener les investigations",
        "sousPoint": "Généralités",
        "question": "Quels documents peuvent être collectés lors des investigations ?",
        "answer": "Les politiques, les procédures, les logs système et les rapports antérieurs.",
        "cleanAnswer": "Les politiques, les procédures, les logs système et les rapports antérieurs.",
        "type": "qcm",
        "options": [
          "Elles comprennent : • la collecte de documents ; • la planification et la réalisation d'entretiens ; • les tests de cheminement ; • les tests de conformité et de pénétration ; • l'analyse des logs et des accès.",
          "C’est un ensemble de personnes, de procédures et de ressources qui recueillent l’information, la transforment et la distribuent au sein d’une organisation.",
          "Les politiques, les procédures, les logs système et les rapports antérieurs.",
          "Les tests de pénétration, les analyses de vulnérabilités, la revue des politiques de sécurité et des configurations, ainsi que les simulations d’attaques et les évaluations des réponses."
        ],
        "correctIndex": 2
      },
      {
        "id": 239,
        "chapitre": "2.3. Investiguer : mener les investigations",
        "sousPoint": "Généralités",
        "question": "Pourquoi réaliser des entretiens avec les responsables ?",
        "answer": "Les entretiens permettent de recueillir des informations directement auprès des responsables concernés par les processus et les contrôles.",
        "cleanAnswer": "Les entretiens permettent de recueillir des informations directement auprès des responsables concernés par les processus et les contrôles.",
        "type": "qcm",
        "options": [
          "Recueillir des informations détaillées sur les processus, les contrôles et les risques directement auprès des parties prenantes.",
          "Pour rencontrer les parties prenantes et recueillir des informations sur les processus, contrôles et risques.",
          "Elles permettent de rencontrer les parties prenantes afin de mieux comprendre les processus et les contrôles existants.",
          "Les entretiens permettent de recueillir des informations directement auprès des responsables concernés par les processus et les contrôles."
        ],
        "correctIndex": 3
      },
      {
        "id": 240,
        "chapitre": "2.3. Investiguer : mener les investigations",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce qu'un test de cheminement ?",
        "answer": "C'est un test qui consiste à suivre le flux des transactions afin de vérifier l'application des contrôles.",
        "cleanAnswer": "C'est un test qui consiste à suivre le flux des transactions afin de vérifier l'application des contrôles.",
        "type": "qcm",
        "options": [
          "Ils permettent de vérifier que les contrôles sont effectivement appliqués au cours du traitement des transactions.",
          "C’est un test permettant de vérifier l’efficacité des contrôles internes en place.",
          "On sélectionne un échantillon de transactions ou de processus, on applique des tests spécifiques pour vérifier la conformité aux contrôles établis et on documente les résultats.",
          "C'est un test qui consiste à suivre le flux des transactions afin de vérifier l'application des contrôles."
        ],
        "correctIndex": 3
      },
      {
        "id": 241,
        "chapitre": "2.3. Investiguer : mener les investigations",
        "sousPoint": "Généralités",
        "question": "Pourquoi réaliser des tests de cheminement ?",
        "answer": "Ils permettent de vérifier que les contrôles sont effectivement appliqués au cours du traitement des transactions.",
        "cleanAnswer": "Ils permettent de vérifier que les contrôles sont effectivement appliqués au cours du traitement des transactions.",
        "type": "qcm",
        "options": [
          "Ils permettent de vérifier que les contrôles sont effectivement appliqués au cours du traitement des transactions.",
          "C'est un test qui consiste à suivre le flux des transactions afin de vérifier l'application des contrôles.",
          "Ils permettent de vérifier l'efficacité des contrôles internes au moyen de tests ciblés.",
          "On sélectionne un échantillon de transactions ou de processus, on applique des tests spécifiques pour vérifier la conformité aux contrôles établis et on documente les résultats."
        ],
        "correctIndex": 0
      },
      {
        "id": 242,
        "chapitre": "2.3. Investiguer : mener les investigations",
        "sousPoint": "Généralités",
        "question": "Quel est l'objectif des tests de conformité ?",
        "answer": "Ils permettent de vérifier le respect des politiques et des exigences applicables.",
        "cleanAnswer": "Ils permettent de vérifier le respect des politiques et des exigences applicables.",
        "type": "qcm",
        "options": [
          "Elles permettent de vérifier que les systèmes d’information respectent les exigences légales, réglementaires et internes.",
          "Ils permettent de vérifier le respect des politiques et des exigences applicables.",
          "Il utilise notamment la revue des documents et politiques, les interviews avec les parties prenantes, les tests de conformité et les vérifications sur le terrain.",
          "On sélectionne un échantillon de transactions ou de processus, on applique des tests spécifiques pour vérifier la conformité aux contrôles établis et on documente les résultats."
        ],
        "correctIndex": 1
      },
      {
        "id": 243,
        "chapitre": "2.3. Investiguer : mener les investigations",
        "sousPoint": "Généralités",
        "question": "Quel est l'objectif des tests de pénétration ?",
        "answer": "Ils permettent notamment de simuler des attaques afin d'évaluer la sécurité du système.",
        "cleanAnswer": "Ils permettent notamment de simuler des attaques afin d'évaluer la sécurité du système.",
        "type": "qcm",
        "options": [
          "Les tests de pénétration, les analyses de vulnérabilités, la revue des politiques de sécurité et des configurations, ainsi que les simulations d’attaques et les évaluations des réponses.",
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
          "Ils permettent notamment de simuler des attaques afin d'évaluer la sécurité du système.",
          "Ils permettent de vérifier le respect des politiques et des exigences applicables."
        ],
        "correctIndex": 2
      },
      {
        "id": 244,
        "chapitre": "2.3. Investiguer : mener les investigations",
        "sousPoint": "Généralités",
        "question": "Pourquoi analyser les logs système ?",
        "answer": "L'analyse des logs permet notamment de détecter des anomalies.",
        "cleanAnswer": "L'analyse des logs permet notamment de détecter des anomalies.",
        "type": "qcm",
        "options": [
          "On cherche notamment à détecter les anomalies et les privilèges excessifs.",
          "L'analyse des accès permet notamment de détecter les privilèges excessifs et les anomalies d'accès.",
          "L'analyse des logs permet notamment de détecter des anomalies.",
          "L'analyse des données permet de détecter les anomalies et les risques."
        ],
        "correctIndex": 2
      },
      {
        "id": 245,
        "chapitre": "2.3. Investiguer : mener les investigations",
        "sousPoint": "Généralités",
        "question": "Pourquoi analyser les accès ?",
        "answer": "L'analyse des accès permet notamment de détecter les privilèges excessifs et les anomalies d'accès.",
        "cleanAnswer": "L'analyse des accès permet notamment de détecter les privilèges excessifs et les anomalies d'accès.",
        "type": "qcm",
        "options": [
          "L'analyse des données permet de détecter les anomalies et les risques.",
          "On cherche notamment à détecter les anomalies et les privilèges excessifs.",
          "L'analyse des accès permet notamment de détecter les privilèges excessifs et les anomalies d'accès.",
          "L'analyse des logs permet notamment de détecter des anomalies."
        ],
        "correctIndex": 2
      },
      {
        "id": 246,
        "chapitre": "2.3. Investiguer : mener les investigations",
        "sousPoint": "Généralités",
        "question": "Que cherche-t-on à détecter grâce à l'analyse des logs et des accès ?",
        "answer": "On cherche notamment à détecter les anomalies et les privilèges excessifs.",
        "cleanAnswer": "On cherche notamment à détecter les anomalies et les privilèges excessifs.",
        "type": "qcm",
        "options": [
          "L'analyse des accès permet notamment de détecter les privilèges excessifs et les anomalies d'accès.",
          "On cherche notamment à détecter les anomalies et les privilèges excessifs.",
          "Elles comprennent : • la collecte de documents ; • la planification et la réalisation d'entretiens ; • les tests de cheminement ; • les tests de conformité et de pénétration ; • l'analyse des logs et des accès.",
          "L'analyse des logs permet notamment de détecter des anomalies."
        ],
        "correctIndex": 1
      },
      {
        "id": 247,
        "chapitre": "2.3.1. Documenter les constats et formuler les recommandations",
        "sousPoint": "Généralités",
        "question": "Comment faut-il documenter les constats d'audit ?",
        "answer": "Il faut rédiger les écarts identifiés entre les contrôles prévus et les contrôles réellement appliqués.",
        "cleanAnswer": "Il faut rédiger les écarts identifiés entre les contrôles prévus et les contrôles réellement appliqués.",
        "type": "qcm",
        "options": [
          "Il faut documenter les résultats et les écarts identifiés.",
          "Il faut rédiger les écarts identifiés entre les contrôles prévus et les contrôles réellement appliqués.",
          "Il contient les constats, les recommandations et le plan d'action.",
          "Pour documenter les écarts identifiés entre les contrôles prévus et les contrôles réellement appliqués."
        ],
        "correctIndex": 1
      },
      {
        "id": 248,
        "chapitre": "2.3.1. Documenter les constats et formuler les recommandations",
        "sousPoint": "Généralités",
        "question": "Que faut-il faire après avoir identifié les écarts ?",
        "answer": "Il faut évaluer leur impact potentiel.",
        "cleanAnswer": "Il faut évaluer leur impact potentiel.",
        "type": "qcm",
        "options": [
          "Il faut documenter les résultats et les écarts identifiés.",
          "Pour s'assurer que les objectifs de l'audit sont atteints et apprécier les risques qui demeurent.",
          "Il faut évaluer leur impact potentiel.",
          "Cette évaluation permet de déterminer l'importance des écarts et leurs conséquences potentielles."
        ],
        "correctIndex": 2
      },
      {
        "id": 249,
        "chapitre": "2.3.1. Documenter les constats et formuler les recommandations",
        "sousPoint": "Généralités",
        "question": "Pourquoi faut-il évaluer l'impact potentiel des écarts ?",
        "answer": "Cette évaluation permet de déterminer l'importance des écarts et leurs conséquences potentielles.",
        "cleanAnswer": "Cette évaluation permet de déterminer l'importance des écarts et leurs conséquences potentielles.",
        "type": "qcm",
        "options": [
          "Elle fournit une première évaluation des risques et des contrôles existants.",
          "Il faut documenter les résultats et les écarts identifiés.",
          "Il faut évaluer leur impact potentiel.",
          "Cette évaluation permet de déterminer l'importance des écarts et leurs conséquences potentielles."
        ],
        "correctIndex": 3
      },
      {
        "id": 250,
        "chapitre": "2.3.1. Documenter les constats et formuler les recommandations",
        "sousPoint": "Généralités",
        "question": "Comment formuler les recommandations ?",
        "answer": "Il faut proposer des mesures correctives et valider leur faisabilité avec les parties prenantes.",
        "cleanAnswer": "Il faut proposer des mesures correctives et valider leur faisabilité avec les parties prenantes.",
        "type": "qcm",
        "options": [
          "Assurer la conformité aux exigences légales et réglementaires, identifier les écarts par rapport aux normes et proposer des mesures correctives.",
          "Cela permet de présenter les résultats de la mission à la direction et aux parties prenantes concernées.",
          "Il faut proposer des mesures correctives et valider leur faisabilité avec les parties prenantes.",
          "Pour s'assurer que les mesures correctives proposées peuvent effectivement être mises en œuvre par l'organisation."
        ],
        "correctIndex": 2
      },
      {
        "id": 251,
        "chapitre": "2.3.1. Documenter les constats et formuler les recommandations",
        "sousPoint": "Généralités",
        "question": "Pourquoi faut-il valider la faisabilité des recommandations ?",
        "answer": "Pour s'assurer que les mesures correctives proposées peuvent effectivement être mises en œuvre par l'organisation.",
        "cleanAnswer": "Pour s'assurer que les mesures correctives proposées peuvent effectivement être mises en œuvre par l'organisation.",
        "type": "qcm",
        "options": [
          "Il vérifie que les recommandations ont été mises en œuvre et qu'elles produisent les effets attendus.",
          "Il permet de s'assurer que les recommandations sont effectivement mises en œuvre et qu'elles produisent les effets attendus sur la sécurité et l'efficacité des systèmes.",
          "Pour s'assurer que les mesures correctives proposées peuvent effectivement être mises en œuvre par l'organisation.",
          "Il faut proposer des mesures correctives et valider leur faisabilité avec les parties prenantes."
        ],
        "correctIndex": 2
      },
      {
        "id": 252,
        "chapitre": "2.3.2. Suivi des actions correctives",
        "sousPoint": "Généralités",
        "question": "Pourquoi le suivi des actions correctives est-il important ?",
        "answer": "Il permet de s'assurer que les recommandations sont effectivement mises en œuvre et qu'elles produisent les effets attendus sur la sécurité et l'efficacité des systèmes.",
        "cleanAnswer": "Il permet de s'assurer que les recommandations sont effectivement mises en œuvre et qu'elles produisent les effets attendus sur la sécurité et l'efficacité des systèmes.",
        "type": "qcm",
        "options": [
          "Elles doivent notamment produire des effets attendus sur la sécurité et l'efficacité des systèmes.",
          "Il permet de s'assurer que les recommandations sont effectivement mises en œuvre et qu'elles produisent les effets attendus sur la sécurité et l'efficacité des systèmes.",
          "Il vérifie que les recommandations ont été mises en œuvre et qu'elles produisent les effets attendus.",
          "Pour s'assurer que les mesures correctives proposées peuvent effectivement être mises en œuvre par l'organisation."
        ],
        "correctIndex": 1
      },
      {
        "id": 253,
        "chapitre": "2.3.2. Suivi des actions correctives",
        "sousPoint": "Généralités",
        "question": "Que vérifie le suivi des actions correctives ?",
        "answer": "Il vérifie que les recommandations ont été mises en œuvre et qu'elles produisent les effets attendus.",
        "cleanAnswer": "Il vérifie que les recommandations ont été mises en œuvre et qu'elles produisent les effets attendus.",
        "type": "qcm",
        "options": [
          "Pour s'assurer que les mesures correctives proposées peuvent effectivement être mises en œuvre par l'organisation.",
          "Il permet de s'assurer que les recommandations sont effectivement mises en œuvre et qu'elles produisent les effets attendus sur la sécurité et l'efficacité des systèmes.",
          "Il vérifie que les recommandations ont été mises en œuvre et qu'elles produisent les effets attendus.",
          "Il consiste à accompagner l’organisation dans la mise en œuvre des recommandations et à vérifier leur efficacité."
        ],
        "correctIndex": 2
      },
      {
        "id": 254,
        "chapitre": "2.3.2. Suivi des actions correctives",
        "sousPoint": "Généralités",
        "question": "Quels domaines peuvent être améliorés grâce aux actions correctives ?",
        "answer": "Elles doivent notamment produire des effets attendus sur la sécurité et l'efficacité des systèmes.",
        "cleanAnswer": "Elles doivent notamment produire des effets attendus sur la sécurité et l'efficacité des systèmes.",
        "type": "qcm",
        "options": [
          "Elles doivent notamment produire des effets attendus sur la sécurité et l'efficacité des systèmes.",
          "Il vérifie que les recommandations ont été mises en œuvre et qu'elles produisent les effets attendus.",
          "Pour évaluer leur efficacité et vérifier qu’elles contribuent correctement à la sécurité des systèmes.",
          "Il permet de s'assurer que les recommandations sont effectivement mises en œuvre et qu'elles produisent les effets attendus sur la sécurité et l'efficacité des systèmes."
        ],
        "correctIndex": 0
      },
      {
        "id": 255,
        "chapitre": "2.4. Conclure les travaux d'audit et restituer le rapport",
        "sousPoint": "Généralités",
        "question": "Quelles sont les principales étapes de la conclusion d'une mission d'audit informatique ?",
        "answer": "Elles comprennent :<ol class=\"styled-ol\"><li>La rédaction du rapport final ;</li><li>L'évaluation des risques résiduels ;</li><li>Le partage des conclusions.</li></ol>",
        "cleanAnswer": "Elles comprennent : • La rédaction du rapport final ; • L'évaluation des risques résiduels ; • Le partage des conclusions.",
        "type": "order",
        "correctOrder": [
          "La rédaction du rapport final ;",
          "L'évaluation des risques résiduels ;",
          "Le partage des conclusions."
        ],
        "shuffledItems": [
          "La rédaction du rapport final ;",
          "L'évaluation des risques résiduels ;",
          "Le partage des conclusions."
        ]
      },
      {
        "id": 256,
        "chapitre": "2.4. Conclure les travaux d'audit et restituer le rapport",
        "sousPoint": "Généralités",
        "question": "Que doit contenir le rapport final ?",
        "answer": "Il doit synthétiser les constats, les recommandations et les actions correctives.",
        "cleanAnswer": "Il doit synthétiser les constats, les recommandations et les actions correctives.",
        "type": "qcm",
        "options": [
          "On documente les constats, évalue leurs impacts, formule des recommandations et assure le suivi des actions correctives.",
          "Il consiste à accompagner l’organisation dans la mise en œuvre des recommandations et à vérifier leur efficacité.",
          "Il doit synthétiser les constats, les recommandations et les actions correctives.",
          "Il contient notamment les constats, les recommandations et le plan d'action."
        ],
        "correctIndex": 2
      },
      {
        "id": 257,
        "chapitre": "2.4. Conclure les travaux d'audit et restituer le rapport",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce que l'évaluation des risques résiduels ?",
        "answer": "Elle consiste à évaluer les risques qui subsistent après les travaux d'audit et à s'assurer que les objectifs de l'audit sont atteints.",
        "cleanAnswer": "Elle consiste à évaluer les risques qui subsistent après les travaux d'audit et à s'assurer que les objectifs de l'audit sont atteints.",
        "type": "qcm",
        "options": [
          "Elles comprennent : • La rédaction du rapport final ; • L'évaluation des risques résiduels ; • Le partage des conclusions.",
          "Évaluer l’efficacité des processus de gestion des risques, de contrôle et de gouvernance, améliorer les opérations et assurer la conformité aux politiques internes et aux réglementations.",
          "Pour s'assurer que les objectifs de l'audit sont atteints et apprécier les risques qui demeurent.",
          "Elle consiste à évaluer les risques qui subsistent après les travaux d'audit et à s'assurer que les objectifs de l'audit sont atteints."
        ],
        "correctIndex": 3
      },
      {
        "id": 258,
        "chapitre": "2.4. Conclure les travaux d'audit et restituer le rapport",
        "sousPoint": "Généralités",
        "question": "Pourquoi faut-il évaluer les risques résiduels ?",
        "answer": "Pour s'assurer que les objectifs de l'audit sont atteints et apprécier les risques qui demeurent.",
        "cleanAnswer": "Pour s'assurer que les objectifs de l'audit sont atteints et apprécier les risques qui demeurent.",
        "type": "qcm",
        "options": [
          "Elle consiste à évaluer les risques qui subsistent après les travaux d'audit et à s'assurer que les objectifs de l'audit sont atteints.",
          "Évaluer l’efficacité des processus de gestion des risques, de contrôle et de gouvernance, améliorer les opérations et assurer la conformité aux politiques internes et aux réglementations.",
          "Identifier les vulnérabilités et les risques de sécurité, évaluer l’efficacité des contrôles de sécurité et proposer des améliorations.",
          "Pour s'assurer que les objectifs de l'audit sont atteints et apprécier les risques qui demeurent."
        ],
        "correctIndex": 3
      },
      {
        "id": 259,
        "chapitre": "2.4. Conclure les travaux d'audit et restituer le rapport",
        "sousPoint": "Généralités",
        "question": "À qui les conclusions de l'audit doivent-elles être présentées ?",
        "answer": "Elles doivent être présentées à la direction et aux parties prenantes concernées.",
        "cleanAnswer": "Elles doivent être présentées à la direction et aux parties prenantes concernées.",
        "type": "qcm",
        "options": [
          "Elle se termine par la rédaction du rapport final, l'évaluation des risques résiduels et la présentation des conclusions à la direction et aux parties prenantes.",
          "Elles doivent être présentées à la direction et aux parties prenantes concernées.",
          "Ils sont présentés à la direction et aux parties prenantes concernées.",
          "Cela permet de présenter les résultats de la mission à la direction et aux parties prenantes concernées."
        ],
        "correctIndex": 1
      },
      {
        "id": 260,
        "chapitre": "2.4. Conclure les travaux d'audit et restituer le rapport",
        "sousPoint": "Généralités",
        "question": "Pourquoi faut-il partager les conclusions de l'audit ?",
        "answer": "Cela permet de présenter les résultats de la mission à la direction et aux parties prenantes concernées.",
        "cleanAnswer": "Cela permet de présenter les résultats de la mission à la direction et aux parties prenantes concernées.",
        "type": "qcm",
        "options": [
          "Elle se termine par la rédaction du rapport final, l'évaluation des risques résiduels et la présentation des conclusions à la direction et aux parties prenantes.",
          "Ils sont présentés à la direction et aux parties prenantes concernées.",
          "Cela permet de présenter les résultats de la mission à la direction et aux parties prenantes concernées.",
          "Elles doivent être présentées à la direction et aux parties prenantes concernées."
        ],
        "correctIndex": 2
      },
      {
        "id": 261,
        "chapitre": "2.4.1. Les livrables de la mission d'audit",
        "sousPoint": "Généralités",
        "question": "Quels sont les principaux livrables à produire à la fin d'une mission d'audit informatique ?",
        "answer": "Les principaux livrables sont :<ul class=\"styled-ul\"><li>la cartographie réseau et applicative ;</li><li>la fiche de description de l'environnement informatique ;</li><li>le mémo de prise de connaissance ;</li><li>le rapport d'audit détaillé.</li></ul>",
        "cleanAnswer": "Les principaux livrables sont : • la cartographie réseau et applicative ; • la fiche de description de l'environnement informatique ; • le mémo de prise de connaissance ; • le rapport d'audit détaillé.",
        "type": "checkbox",
        "allItems": [
          "La rédaction du rapport final ;",
          "le mémo de prise de connaissance ;",
          "la fiche de description de l'environnement informatique ;",
          "la cartographie réseau et applicative ;",
          "L'évaluation des risques résiduels ;",
          "le rapport d'audit détaillé.",
          "Le partage des conclusions."
        ],
        "correctItems": [
          "la cartographie réseau et applicative ;",
          "la fiche de description de l'environnement informatique ;",
          "le mémo de prise de connaissance ;",
          "le rapport d'audit détaillé."
        ],
        "distractors": [
          "Le partage des conclusions.",
          "L'évaluation des risques résiduels ;",
          "La rédaction du rapport final ;"
        ]
      },
      {
        "id": 262,
        "chapitre": "2.4.1. Les livrables de la mission d'audit",
        "sousPoint": "Généralités",
        "question": "Que contient le rapport d'audit détaillé ?",
        "answer": "Il contient notamment les constats, les recommandations et le plan d'action.",
        "cleanAnswer": "Il contient notamment les constats, les recommandations et le plan d'action.",
        "type": "qcm",
        "options": [
          "Il contient notamment les constats, les recommandations et le plan d'action.",
          "Il contient les constats, les recommandations et le plan d'action.",
          "Les principaux livrables sont : • la cartographie réseau et applicative ; • la fiche de description de l'environnement informatique ; • le mémo de prise de connaissance ; • le rapport d'audit détaillé.",
          "Il contient les constatations, les conclusions et les recommandations."
        ],
        "correctIndex": 0
      },
      {
        "id": 263,
        "chapitre": "2.4.1. Les livrables de la mission d'audit",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle de la cartographie réseau et applicative comme livrable ?",
        "answer": "Elle permet de représenter l'architecture réseau et applicative ainsi que les éléments importants de l'environnement informatique.",
        "cleanAnswer": "Elle permet de représenter l'architecture réseau et applicative ainsi que les éléments importants de l'environnement informatique.",
        "type": "qcm",
        "options": [
          "Les principaux livrables sont : • la cartographie réseau et applicative ; • la fiche de description de l'environnement informatique ; • le mémo de prise de connaissance ; • le rapport d'audit détaillé.",
          "Elle permet de représenter l'architecture réseau et applicative ainsi que les éléments importants de l'environnement informatique.",
          "La cartographie réseau et applicative, la fiche de description de l'environnement informatique, le mémo de prise de connaissance et le rapport d'audit détaillé.",
          "C'est un livrable qui formalise les éléments recueillis lors de la prise de connaissance de l'environnement informatique."
        ],
        "correctIndex": 1
      },
      {
        "id": 264,
        "chapitre": "2.4.1. Les livrables de la mission d'audit",
        "sousPoint": "Généralités",
        "question": "Quel est le rôle de la fiche de description de l'environnement informatique ?",
        "answer": "Elle synthétise les informations collectées sur les systèmes, applications et risques identifiés et sert de base pour ajuster le plan d'audit.",
        "cleanAnswer": "Elle synthétise les informations collectées sur les systèmes, applications et risques identifiés et sert de base pour ajuster le plan d'audit.",
        "type": "qcm",
        "options": [
          "Les systèmes, les applications et les risques identifiés.",
          "Elle synthétise les informations collectées sur les systèmes, applications et risques identifiés et sert de base pour ajuster le plan d'audit.",
          "Elle sert de base pour ajuster le plan d'audit.",
          "Elle synthétise les informations collectées sur les systèmes, les applications et les risques identifiés."
        ],
        "correctIndex": 1
      },
      {
        "id": 265,
        "chapitre": "2.4.1. Les livrables de la mission d'audit",
        "sousPoint": "Généralités",
        "question": "Qu'est-ce que le mémo de prise de connaissance ?",
        "answer": "C'est un livrable qui formalise les éléments recueillis lors de la prise de connaissance de l'environnement informatique.",
        "cleanAnswer": "C'est un livrable qui formalise les éléments recueillis lors de la prise de connaissance de l'environnement informatique.",
        "type": "qcm",
        "options": [
          "La cartographie réseau et applicative, la fiche de description de l'environnement informatique, le mémo de prise de connaissance et le rapport d'audit détaillé.",
          "C'est un livrable qui formalise les éléments recueillis lors de la prise de connaissance de l'environnement informatique.",
          "Les principaux livrables sont : • la cartographie réseau et applicative ; • la fiche de description de l'environnement informatique ; • le mémo de prise de connaissance ; • le rapport d'audit détaillé.",
          "Elle permet de représenter l'architecture réseau et applicative ainsi que les éléments importants de l'environnement informatique."
        ],
        "correctIndex": 1
      },
      {
        "id": 266,
        "chapitre": "2.4.1. Les livrables de la mission d'audit",
        "sousPoint": "Généralités",
        "question": "Que contient le rapport d'audit détaillé ?",
        "answer": "Il contient les constats, les recommandations et le plan d'action.",
        "cleanAnswer": "Il contient les constats, les recommandations et le plan d'action.",
        "type": "qcm",
        "options": [
          "Il contient notamment les constats, les recommandations et le plan d'action.",
          "Il contient les constats, les recommandations et le plan d'action.",
          "Il doit synthétiser les constats, les recommandations et les actions correctives.",
          "Il contient les constatations, les conclusions et les recommandations."
        ],
        "correctIndex": 1
      },
      {
        "id": 267,
        "chapitre": "Questions générales de révision",
        "sousPoint": "Généralités",
        "question": "Quelles sont les grandes étapes du déroulement d'une mission d'audit informatique ?",
        "answer": "La mission comprend principalement la préparation et la planification, l'évaluation de l'environnement du contrôle interne, les investigations, puis la conclusion des travaux et la restitution du rapport.",
        "cleanAnswer": "La mission comprend principalement la préparation et la planification, l'évaluation de l'environnement du contrôle interne, les investigations, puis la conclusion des travaux et la restitution du rapport.",
        "type": "qcm",
        "options": [
          "La mission comprend principalement la préparation et la planification, l'évaluation de l'environnement du contrôle interne, les investigations, puis la conclusion des travaux et la restitution du rapport.",
          "La première étape est la préparation et la planification de la mission.",
          "Elles comprennent : • La rédaction du rapport final ; • L'évaluation des risques résiduels ; • Le partage des conclusions.",
          "La cartographie réseau et applicative, la fiche de description de l'environnement informatique, le mémo de prise de connaissance et le rapport d'audit détaillé."
        ],
        "correctIndex": 0
      },
      {
        "id": 268,
        "chapitre": "Questions générales de révision",
        "sousPoint": "Généralités",
        "question": "Quelle est la première étape d'une mission d'audit informatique ?",
        "answer": "La première étape est la préparation et la planification de la mission.",
        "cleanAnswer": "La première étape est la préparation et la planification de la mission.",
        "type": "qcm",
        "options": [
          "Elle se termine par la rédaction du rapport final, l'évaluation des risques résiduels et la présentation des conclusions à la direction et aux parties prenantes.",
          "La première étape est la préparation et la planification de la mission.",
          "Elles comprennent : • La rédaction du rapport final ; • L'évaluation des risques résiduels ; • Le partage des conclusions.",
          "La mission comprend principalement la préparation et la planification, l'évaluation de l'environnement du contrôle interne, les investigations, puis la conclusion des travaux et la restitution du rapport."
        ],
        "correctIndex": 1
      },
      {
        "id": 269,
        "chapitre": "Questions générales de révision",
        "sousPoint": "Généralités",
        "question": "Que fait-on pendant la préparation et la planification ?",
        "answer": "On définit le périmètre, évalue les risques, élabore le plan d'audit, collecte les informations et prépare les outils.",
        "cleanAnswer": "On définit le périmètre, évalue les risques, élabore le plan d'audit, collecte les informations et prépare les outils.",
        "type": "qcm",
        "options": [
          "Elles comprennent : • La définition du périmètre ; • L'évaluation des risques ; • L'élaboration du plan d'audit ; • La collecte d'informations ; • La préparation des outils.",
          "On définit le périmètre, on évalue les risques, on élabore le plan d’audit et on collecte les informations.",
          "Elle synthétise les informations collectées sur les systèmes, applications et risques identifiés et sert de base pour ajuster le plan d'audit.",
          "On définit le périmètre, évalue les risques, élabore le plan d'audit, collecte les informations et prépare les outils."
        ],
        "correctIndex": 3
      },
      {
        "id": 270,
        "chapitre": "Questions générales de révision",
        "sousPoint": "Généralités",
        "question": "Que fait-on pendant l'évaluation du contrôle interne ?",
        "answer": "On réalise des interviews et observations, des tests de contrôle et une analyse des données.",
        "cleanAnswer": "On réalise des interviews et observations, des tests de contrôle et une analyse des données.",
        "type": "qcm",
        "options": [
          "Les interviews, observations et tests de contrôle sont utilisés de manière complémentaire afin d’obtenir une vue d’ensemble complète et précise des systèmes d’information et des contrôles en place.",
          "Elle consiste notamment à réaliser des interviews et des observations, effectuer des tests de contrôle et analyser les données.",
          "On réalise notamment les interviews et observations, les tests de contrôle, l’analyse des données et la documentation des constatations.",
          "On réalise des interviews et observations, des tests de contrôle et une analyse des données."
        ],
        "correctIndex": 3
      },
      {
        "id": 271,
        "chapitre": "Questions générales de révision",
        "sousPoint": "Généralités",
        "question": "Que fait-on pendant la phase d'investigation ?",
        "answer": "On collecte les documents, réalise les entretiens, effectue les tests de cheminement, les tests de conformité et de pénétration, puis analyse les logs et les accès.",
        "cleanAnswer": "On collecte les documents, réalise les entretiens, effectue les tests de cheminement, les tests de conformité et de pénétration, puis analyse les logs et les accès.",
        "type": "qcm",
        "options": [
          "On réalise notamment les interviews et observations, les tests de contrôle, l’analyse des données et la documentation des constatations.",
          "On réalise des interviews et observations, des tests de contrôle et une analyse des données.",
          "Elles comprennent : • la collecte de documents ; • la planification et la réalisation d'entretiens ; • les tests de cheminement ; • les tests de conformité et de pénétration ; • l'analyse des logs et des accès.",
          "On collecte les documents, réalise les entretiens, effectue les tests de cheminement, les tests de conformité et de pénétration, puis analyse les logs et les accès."
        ],
        "correctIndex": 3
      },
      {
        "id": 272,
        "chapitre": "Questions générales de révision",
        "sousPoint": "Généralités",
        "question": "Que fait-on après les investigations ?",
        "answer": "On documente les constats, évalue leurs impacts, formule des recommandations et assure le suivi des actions correctives.",
        "cleanAnswer": "On documente les constats, évalue leurs impacts, formule des recommandations et assure le suivi des actions correctives.",
        "type": "qcm",
        "options": [
          "Il vérifie que les recommandations ont été mises en œuvre et qu'elles produisent les effets attendus.",
          "On rédige le rapport, on présente les résultats et on assure le suivi des actions correctives.",
          "Il consiste à accompagner l’organisation dans la mise en œuvre des recommandations et à vérifier leur efficacité.",
          "On documente les constats, évalue leurs impacts, formule des recommandations et assure le suivi des actions correctives."
        ],
        "correctIndex": 3
      },
      {
        "id": 273,
        "chapitre": "Questions générales de révision",
        "sousPoint": "Généralités",
        "question": "Comment se termine une mission d'audit informatique ?",
        "answer": "Elle se termine par la rédaction du rapport final, l'évaluation des risques résiduels et la présentation des conclusions à la direction et aux parties prenantes.",
        "cleanAnswer": "Elle se termine par la rédaction du rapport final, l'évaluation des risques résiduels et la présentation des conclusions à la direction et aux parties prenantes.",
        "type": "qcm",
        "options": [
          "La mission comprend principalement la préparation et la planification, l'évaluation de l'environnement du contrôle interne, les investigations, puis la conclusion des travaux et la restitution du rapport.",
          "Cela permet de présenter les résultats de la mission à la direction et aux parties prenantes concernées.",
          "Elle se termine par la rédaction du rapport final, l'évaluation des risques résiduels et la présentation des conclusions à la direction et aux parties prenantes.",
          "Elles comprennent : • La rédaction du rapport final ; • L'évaluation des risques résiduels ; • Le partage des conclusions."
        ],
        "correctIndex": 2
      },
      {
        "id": 274,
        "chapitre": "Questions générales de révision",
        "sousPoint": "Généralités",
        "question": "Quels sont les quatre principaux livrables d'une mission d'audit informatique ?",
        "answer": "La cartographie réseau et applicative, la fiche de description de l'environnement informatique, le mémo de prise de connaissance et le rapport d'audit détaillé.",
        "cleanAnswer": "La cartographie réseau et applicative, la fiche de description de l'environnement informatique, le mémo de prise de connaissance et le rapport d'audit détaillé.",
        "type": "qcm",
        "options": [
          "Elle synthétise les informations collectées sur les systèmes, applications et risques identifiés et sert de base pour ajuster le plan d'audit.",
          "La cartographie réseau et applicative, la fiche de description de l'environnement informatique, le mémo de prise de connaissance et le rapport d'audit détaillé.",
          "Les principaux livrables sont : • la cartographie réseau et applicative ; • la fiche de description de l'environnement informatique ; • le mémo de prise de connaissance ; • le rapport d'audit détaillé.",
          "La mission comprend principalement la préparation et la planification, l'évaluation de l'environnement du contrôle interne, les investigations, puis la conclusion des travaux et la restitution du rapport."
        ],
        "correctIndex": 1
      },
      {
        "id": 275,
        "chapitre": "Questions générales de révision",
        "sousPoint": "Généralités",
        "question": "Quel est l'objectif global d'une mission d'audit informatique ?",
        "answer": "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
        "cleanAnswer": "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
        "type": "qcm",
        "options": [
          "Parce qu’il est nécessaire de comprendre le système d’information et d’être capable d’apprécier la capacité des systèmes informatiques à assurer la fiabilité de l’information de gestion.",
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
          "Identifier les vulnérabilités et les risques de sécurité, évaluer l’efficacité des contrôles de sécurité et proposer des améliorations.",
          "Elle permet de comprendre le dispositif réel de contrôle interne, d'identifier les faiblesses et de fournir une première évaluation des risques et des contrôles existants."
        ],
        "correctIndex": 1
      },
      {
        "id": 276,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1. Le Risque",
        "question": "Qu'est-ce qu'un risque de manière générale ?",
        "answer": "Un risque est la possibilité qu'un événement ou une action ait un impact négatif sur la réalisation des objectifs. C'est une situation ou un événement incertain susceptible de causer des dommages ou des pertes.",
        "cleanAnswer": "Un risque est la possibilité qu'un événement ou une action ait un impact négatif sur la réalisation des objectifs. C'est une situation ou un événement incertain susceptible de causer des dommages ou des pertes.",
        "type": "qcm",
        "options": [
          "Un risque est considéré comme majeur lorsque son évaluation démontre qu'il peut porter atteinte aux objectifs stratégiques, affecter de manière critique la pérennité de l'organisation ou compromettre ses opérations essentielles.",
          "Un risque est la possibilité qu'un événement ou une action ait un impact négatif sur la réalisation des objectifs. C'est une situation ou un événement incertain susceptible de causer des dommages ou des pertes.",
          "C'est la gravité et l'ampleur des conséquences (financières, opérationnelles ou réputationnelles) si le risque se concrétise.",
          "Le risque résiduel se mesure selon : • L'impact potentiel des dommages ; • La probabilité que le risque survienne après l'application des contrôles en place."
        ],
        "correctIndex": 1
      },
      {
        "id": 277,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1. Le Risque",
        "question": "Quels sont les 5 principaux types de risques pour une organisation ?",
        "answer": "Les cinq principaux types de risques sont :<ol class=\"styled-ol\"><li>Les risques financiers (perte d'argent ou d'actifs financiers) ;</li><li>Les risques opérationnels (dysfonctionnements dans les processus internes) ;</li><li>Les risques de sécurité (menaces pesant sur les informations ou les infrastructures) ;</li><li>Les risques de conformité (non-respect des lois, règlements ou normes) ;</li><li>Les risques stratégiques (décisions ou événements affectant la stratégie de l'organisation).</li></ol>",
        "cleanAnswer": "Les cinq principaux types de risques sont : • Les risques financiers (perte d'argent ou d'actifs financiers) ; • Les risques opérationnels (dysfonctionnements dans les processus internes) ; • Les risques de sécurité (menaces pesant sur les informations ou les infrastructures) ; • Les risques de conformité (non-respect des lois, règlements ou normes) ; • Les risques stratégiques (décisions ou événements affectant la stratégie de l'organisation).",
        "type": "order",
        "correctOrder": [
          "Les risques financiers (perte d'argent ou d'actifs financiers) ;",
          "Les risques opérationnels (dysfonctionnements dans les processus internes) ;",
          "Les risques de sécurité (menaces pesant sur les informations ou les infrastructures) ;",
          "Les risques de conformité (non-respect des lois, règlements ou normes) ;",
          "Les risques stratégiques (décisions ou événements affectant la stratégie de l'organisation)."
        ],
        "shuffledItems": [
          "Les risques opérationnels (dysfonctionnements dans les processus internes) ;",
          "Les risques de sécurité (menaces pesant sur les informations ou les infrastructures) ;",
          "Les risques de conformité (non-respect des lois, règlements ou normes) ;",
          "Les risques stratégiques (décisions ou événements affectant la stratégie de l'organisation).",
          "Les risques financiers (perte d'argent ou d'actifs financiers) ;"
        ]
      },
      {
        "id": 278,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1. Le Risque",
        "question": "En quoi consiste un risque financier ?",
        "answer": "Il s'agit du risque de perte d'argent ou de dépréciation d'actifs financiers pour l'organisation.",
        "cleanAnswer": "Il s'agit du risque de perte d'argent ou de dépréciation d'actifs financiers pour l'organisation.",
        "type": "qcm",
        "options": [
          "Il s'agit des menaces qui pèsent directement sur la sécurité, la confidentialité et l'intégrité des informations ou des infrastructures technologiques.",
          "Il correspond aux dysfonctionnements survenant dans les processus internes, les personnes ou les systèmes de l'organisation.",
          "Il concerne les décisions stratégiques erronées ou les événements externes majeurs qui affectent directement la stratégie et les orientations globales de l'organisation.",
          "Il s'agit du risque de perte d'argent ou de dépréciation d'actifs financiers pour l'organisation."
        ],
        "correctIndex": 3
      },
      {
        "id": 279,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1. Le Risque",
        "question": "En quoi consiste un risque opérationnel ?",
        "answer": "Il correspond aux dysfonctionnements survenant dans les processus internes, les personnes ou les systèmes de l'organisation.",
        "cleanAnswer": "Il correspond aux dysfonctionnements survenant dans les processus internes, les personnes ou les systèmes de l'organisation.",
        "type": "qcm",
        "options": [
          "Elle consiste à mettre en place des stratégies et des mesures de traitement appropriées dès lors que le niveau d'un risque évalué dépasse le seuil tolérable ou acceptable par l'entreprise.",
          "Il concerne les décisions stratégiques erronées ou les événements externes majeurs qui affectent directement la stratégie et les orientations globales de l'organisation.",
          "Il correspond aux dysfonctionnements survenant dans les processus internes, les personnes ou les systèmes de l'organisation.",
          "Il s'agit du risque de perte d'argent ou de dépréciation d'actifs financiers pour l'organisation."
        ],
        "correctIndex": 2
      },
      {
        "id": 280,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1. Le Risque",
        "question": "En quoi consiste un risque de sécurité ?",
        "answer": "Il s'agit des menaces qui pèsent directement sur la sécurité, la confidentialité et l'intégrité des informations ou des infrastructures technologiques.",
        "cleanAnswer": "Il s'agit des menaces qui pèsent directement sur la sécurité, la confidentialité et l'intégrité des informations ou des infrastructures technologiques.",
        "type": "qcm",
        "options": [
          "Il concerne les décisions stratégiques erronées ou les événements externes majeurs qui affectent directement la stratégie et les orientations globales de l'organisation.",
          "Il s'agit du risque de perte d'argent ou de dépréciation d'actifs financiers pour l'organisation.",
          "Il s'agit des menaces qui pèsent directement sur la sécurité, la confidentialité et l'intégrité des informations ou des infrastructures technologiques.",
          "Il correspond aux dysfonctionnements survenant dans les processus internes, les personnes ou les systèmes de l'organisation."
        ],
        "correctIndex": 2
      },
      {
        "id": 281,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1. Le Risque",
        "question": "En quoi consiste un risque de conformité ?",
        "answer": "C'est le risque de sanctions légales, financières ou réputationnelles lié au non-respect des lois, réglementations ou normes applicables.",
        "cleanAnswer": "C'est le risque de sanctions légales, financières ou réputationnelles lié au non-respect des lois, réglementations ou normes applicables.",
        "type": "qcm",
        "options": [
          "C'est la gravité et l'ampleur des conséquences (financières, opérationnelles ou réputationnelles) si le risque se concrétise.",
          "Il concerne les décisions stratégiques erronées ou les événements externes majeurs qui affectent directement la stratégie et les orientations globales de l'organisation.",
          "Il correspond aux dysfonctionnements survenant dans les processus internes, les personnes ou les systèmes de l'organisation.",
          "C'est le risque de sanctions légales, financières ou réputationnelles lié au non-respect des lois, réglementations ou normes applicables."
        ],
        "correctIndex": 3
      },
      {
        "id": 282,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1. Le Risque",
        "question": "En quoi consiste un risque stratégique ?",
        "answer": "Il concerne les décisions stratégiques erronées ou les événements externes majeurs qui affectent directement la stratégie et les orientations globales de l'organisation.",
        "cleanAnswer": "Il concerne les décisions stratégiques erronées ou les événements externes majeurs qui affectent directement la stratégie et les orientations globales de l'organisation.",
        "type": "qcm",
        "options": [
          "Il s'agit du risque de perte d'argent ou de dépréciation d'actifs financiers pour l'organisation.",
          "Il concerne les décisions stratégiques erronées ou les événements externes majeurs qui affectent directement la stratégie et les orientations globales de l'organisation.",
          "Il correspond aux dysfonctionnements survenant dans les processus internes, les personnes ou les systèmes de l'organisation.",
          "Il s'agit des menaces qui pèsent directement sur la sécurité, la confidentialité et l'intégrité des informations ou des infrastructures technologiques."
        ],
        "correctIndex": 1
      },
      {
        "id": 283,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1. Le Risque",
        "question": "Quels sont les trois composants fondamentaux d'un risque ?",
        "answer": "Les trois composants sont :<ol class=\"styled-ol\"><li>La probabilité (la chance ou fréquence que l'événement se produise) ;</li><li>L'impact (la gravité des conséquences si l'événement survient) ;</li><li>La vulnérabilité (la susceptibilité de l'organisation à être affectée par le risque).</li></ol>",
        "cleanAnswer": "Les trois composants sont : • La probabilité (la chance ou fréquence que l'événement se produise) ; • L'impact (la gravité des conséquences si l'événement survient) ; • La vulnérabilité (la susceptibilité de l'organisation à être affectée par le risque).",
        "type": "order",
        "correctOrder": [
          "La probabilité (la chance ou fréquence que l'événement se produise) ;",
          "L'impact (la gravité des conséquences si l'événement survient) ;",
          "La vulnérabilité (la susceptibilité de l'organisation à être affectée par le risque)."
        ],
        "shuffledItems": [
          "La probabilité (la chance ou fréquence que l'événement se produise) ;",
          "La vulnérabilité (la susceptibilité de l'organisation à être affectée par le risque).",
          "L'impact (la gravité des conséquences si l'événement survient) ;"
        ]
      },
      {
        "id": 284,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1. Le Risque",
        "question": "Qu'est-ce que la probabilité dans l'analyse d'un risque ?",
        "answer": "C'est la chance, la fréquence ou la vraisemblance qu'un événement à risque se réalise.",
        "cleanAnswer": "C'est la chance, la fréquence ou la vraisemblance qu'un événement à risque se réalise.",
        "type": "qcm",
        "options": [
          "C'est la chance, la fréquence ou la vraisemblance qu'un événement à risque se réalise.",
          "C'est le degré de susceptibilité, de faiblesse ou d'exposition de l'organisation à subir les effets néfastes du risque.",
          "C'est la gravité et l'ampleur des conséquences (financières, opérationnelles ou réputationnelles) si le risque se concrétise.",
          "Un risque est la possibilité qu'un événement ou une action ait un impact négatif sur la réalisation des objectifs. C'est une situation ou un événement incertain susceptible de causer des dommages ou des pertes."
        ],
        "correctIndex": 0
      },
      {
        "id": 285,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1. Le Risque",
        "question": "Qu'est-ce que l'impact dans l'analyse d'un risque ?",
        "answer": "C'est la gravité et l'ampleur des conséquences (financières, opérationnelles ou réputationnelles) si le risque se concrétise.",
        "cleanAnswer": "C'est la gravité et l'ampleur des conséquences (financières, opérationnelles ou réputationnelles) si le risque se concrétise.",
        "type": "qcm",
        "options": [
          "Un risque est la possibilité qu'un événement ou une action ait un impact négatif sur la réalisation des objectifs. C'est une situation ou un événement incertain susceptible de causer des dommages ou des pertes.",
          "C'est la gravité et l'ampleur des conséquences (financières, opérationnelles ou réputationnelles) si le risque se concrétise.",
          "C'est la chance, la fréquence ou la vraisemblance qu'un événement à risque se réalise.",
          "C'est le risque de sanctions légales, financières ou réputationnelles lié au non-respect des lois, réglementations ou normes applicables."
        ],
        "correctIndex": 1
      },
      {
        "id": 286,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1. Le Risque",
        "question": "Qu'est-ce que la vulnérabilité face à un risque ?",
        "answer": "C'est le degré de susceptibilité, de faiblesse ou d'exposition de l'organisation à subir les effets néfastes du risque.",
        "cleanAnswer": "C'est le degré de susceptibilité, de faiblesse ou d'exposition de l'organisation à subir les effets néfastes du risque.",
        "type": "qcm",
        "options": [
          "C'est le degré de susceptibilité, de faiblesse ou d'exposition de l'organisation à subir les effets néfastes du risque.",
          "Il s'agit du risque de perte d'argent ou de dépréciation d'actifs financiers pour l'organisation.",
          "Il correspond aux dysfonctionnements survenant dans les processus internes, les personnes ou les systèmes de l'organisation.",
          "Il concerne les décisions stratégiques erronées ou les événements externes majeurs qui affectent directement la stratégie et les orientations globales de l'organisation."
        ],
        "correctIndex": 0
      },
      {
        "id": 287,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1. Le Risque",
        "question": "Quelles sont les trois étapes fondamentales de la gestion des risques ?",
        "answer": "La gestion des risques comprend :<ol class=\"styled-ol\"><li>L'identification des risques (détecter les risques potentiels) ;</li><li>L'évaluation des risques (analyser la probabilité et l'impact de chaque risque) ;</li><li>Le traitement des risques (mettre en place des mesures pour atténuer ou éliminer les risques).</li></ol>",
        "cleanAnswer": "La gestion des risques comprend : • L'identification des risques (détecter les risques potentiels) ; • L'évaluation des risques (analyser la probabilité et l'impact de chaque risque) ; • Le traitement des risques (mettre en place des mesures pour atténuer ou éliminer les risques).",
        "type": "order",
        "correctOrder": [
          "L'identification des risques (détecter les risques potentiels) ;",
          "L'évaluation des risques (analyser la probabilité et l'impact de chaque risque) ;",
          "Le traitement des risques (mettre en place des mesures pour atténuer ou éliminer les risques)."
        ],
        "shuffledItems": [
          "L'évaluation des risques (analyser la probabilité et l'impact de chaque risque) ;",
          "Le traitement des risques (mettre en place des mesures pour atténuer ou éliminer les risques).",
          "L'identification des risques (détecter les risques potentiels) ;"
        ]
      },
      {
        "id": 288,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1. Le Risque",
        "question": "En quoi consiste le traitement des risques ?",
        "answer": "Il consiste à mettre en place des mesures et des dispositifs de contrôle appropriés afin d'atténuer, éliminer, transférer ou accepter les risques identifiés.",
        "cleanAnswer": "Il consiste à mettre en place des mesures et des dispositifs de contrôle appropriés afin d'atténuer, éliminer, transférer ou accepter les risques identifiés.",
        "type": "qcm",
        "options": [
          "Parce qu'aucun dispositif de contrôle ne peut éliminer totalement les risques ; le risque zéro n'existe pas et il subsiste toujours un risque résiduel.",
          "C'est le niveau de risque qui subsiste après la prise en compte et la mise en œuvre effective de l'ensemble des dispositifs de contrôle et de maîtrise des risques existants.",
          "Il consiste à mettre en place des mesures et des dispositifs de contrôle appropriés afin d'atténuer, éliminer, transférer ou accepter les risques identifiés.",
          "Elle consiste à mettre en place des stratégies et des mesures de traitement appropriées dès lors que le niveau d'un risque évalué dépasse le seuil tolérable ou acceptable par l'entreprise."
        ],
        "correctIndex": 2
      },
      {
        "id": 289,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.2. Le risque en audit informatique",
        "question": "Quand un risque est-il considéré comme majeur en audit informatique ?",
        "answer": "Un risque est considéré comme majeur lorsque son évaluation démontre qu'il peut porter atteinte aux objectifs stratégiques, affecter de manière critique la pérennité de l'organisation ou compromettre ses opérations essentielles.",
        "cleanAnswer": "Un risque est considéré comme majeur lorsque son évaluation démontre qu'il peut porter atteinte aux objectifs stratégiques, affecter de manière critique la pérennité de l'organisation ou compromettre ses opérations essentielles.",
        "type": "qcm",
        "options": [
          "Il s'agit : • Du risque inhérent, également appelé « risk associated with IT » (RAIT) ; • Du risque lié au contrôle, également appelé « risk associated with the control » (RAWC).",
          "Un risque est considéré comme majeur lorsque son évaluation démontre qu'il peut porter atteinte aux objectifs stratégiques, affecter de manière critique la pérennité de l'organisation ou compromettre ses opérations essentielles.",
          "Parce qu'elle n'est pas figée : elle est réévaluée, actualisée et affinée de manière continue tout au long des différentes étapes de la mission d'audit.",
          "Parce qu'ils brisent la séparation des tâches (SOD) et permettent à un même utilisateur d'effectuer sans surveillance des actions conflictuelles ou frauduleuses."
        ],
        "correctIndex": 1
      },
      {
        "id": 290,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.2. Le risque en audit informatique",
        "question": "Quels sont les deux types majeurs de risques distingués pendant un audit informatique ?",
        "answer": "Il s'agit :<ol class=\"styled-ol\"><li>Du risque inhérent, également appelé « risk associated with IT » (RAIT) ;</li><li>Du risque lié au contrôle, également appelé « risk associated with the control » (RAWC).</li></ol>",
        "cleanAnswer": "Il s'agit : • Du risque inhérent, également appelé « risk associated with IT » (RAIT) ; • Du risque lié au contrôle, également appelé « risk associated with the control » (RAWC).",
        "type": "qcm",
        "options": [
          "C'est la possibilité qu'une anomalie significative se produise dans le système ou les données, sans tenir compte de l'effet des contrôles internes existants dans l'entité.",
          "Audit interne versus audit externe ; • Audit de conformité, audit de sécurité et audit de performance.",
          "C'est le risque qu'une anomalie significative ne soit ni prévenue ni détectée par le dispositif de contrôle interne en place, et qu'elle ne soit donc pas corrigée à temps. C'est le risque qu'un contrôle soit inefficace.",
          "Il s'agit : • Du risque inhérent, également appelé « risk associated with IT » (RAIT) ; • Du risque lié au contrôle, également appelé « risk associated with the control » (RAWC)."
        ],
        "correctIndex": 3
      },
      {
        "id": 291,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.2. Le risque en audit informatique",
        "question": "Qu'est-ce que le risque inhérent ou RAIT (risk associated with IT) ?",
        "answer": "C'est la possibilité qu'une anomalie significative se produise dans le système ou les données, sans tenir compte de l'effet des contrôles internes existants dans l'entité.",
        "cleanAnswer": "C'est la possibilité qu'une anomalie significative se produise dans le système ou les données, sans tenir compte de l'effet des contrôles internes existants dans l'entité.",
        "type": "qcm",
        "options": [
          "C'est la possibilité qu'une anomalie significative se produise dans le système ou les données, sans tenir compte de l'effet des contrôles internes existants dans l'entité.",
          "C'est le risque qu'une anomalie significative ne soit ni prévenue ni détectée par le dispositif de contrôle interne en place, et qu'elle ne soit donc pas corrigée à temps. C'est le risque qu'un contrôle soit inefficace.",
          "L'objectif est d'identifier les risques et les faiblesses du système, d'évaluer les contrôles existants, de formuler des recommandations et de contribuer à améliorer la sécurité et l'efficacité des systèmes.",
          "Il s'agit : • Du risque inhérent, également appelé « risk associated with IT » (RAIT) ; • Du risque lié au contrôle, également appelé « risk associated with the control » (RAWC)."
        ],
        "correctIndex": 0
      },
      {
        "id": 292,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.2. Le risque en audit informatique",
        "question": "Quels sont les exemples typiques de risques inhérents liés à l'informatique (RAIT) ?",
        "answer": "Ils comprennent notamment :<ul class=\"styled-ul\"><li>Des privilèges d'accès accordés au-delà des besoins stricts, créant une séparation inappropriée des tâches ;</li><li>Des modifications directes apportées aux données financières hors transactions applicatives régulières ;</li><li>Des modifications inappropriées apportées aux systèmes d'exploitation, réseaux ou logiciels de sécurité ;</li><li>Des modifications non autorisées touchant les programmes hébergeant des contrôles automatisés ou des calculs clés ;</li><li>L'impossibilité d'accéder aux données financières ou de les restaurer à temps en cas de sinistre.</li></ul>",
        "cleanAnswer": "Ils comprennent notamment : • Des privilèges d'accès accordés au-delà des besoins stricts, créant une séparation inappropriée des tâches ; • Des modifications directes apportées aux données financières hors transactions applicatives régulières ; • Des modifications inappropriées apportées aux systèmes d'exploitation, réseaux ou logiciels de sécurité ; • Des modifications non autorisées touchant les programmes hébergeant des contrôles automatisés ou des calculs clés ; • L'impossibilité d'accéder aux données financières ou de les restaurer à temps en cas de sinistre.",
        "type": "checkbox",
        "allItems": [
          "L'évaluation des risques découlant de l'informatique (au niveau applicatif et entrepôt de données) ;",
          "Des modifications directes apportées aux données financières hors transactions applicatives régulières ;",
          "Des modifications non autorisées touchant les programmes hébergeant des contrôles automatisés ou des calculs clés ;",
          "Des modifications inappropriées apportées aux systèmes d'exploitation, réseaux ou logiciels de sécurité ;",
          "Des privilèges d'accès accordés au-delà des besoins stricts, créant une séparation inappropriée des tâches ;",
          "La définition et la communication d'objectifs annuels pour chaque département ;",
          "L'identification des contrôles permettant de traiter les RAIT sur toute l'infrastructure ;",
          "L'impossibilité d'accéder aux données financières ou de les restaurer à temps en cas de sinistre."
        ],
        "correctItems": [
          "Des privilèges d'accès accordés au-delà des besoins stricts, créant une séparation inappropriée des tâches ;",
          "Des modifications directes apportées aux données financières hors transactions applicatives régulières ;",
          "Des modifications inappropriées apportées aux systèmes d'exploitation, réseaux ou logiciels de sécurité ;",
          "Des modifications non autorisées touchant les programmes hébergeant des contrôles automatisés ou des calculs clés ;",
          "L'impossibilité d'accéder aux données financières ou de les restaurer à temps en cas de sinistre."
        ],
        "distractors": [
          "L'identification des contrôles permettant de traiter les RAIT sur toute l'infrastructure ;",
          "La définition et la communication d'objectifs annuels pour chaque département ;",
          "L'évaluation des risques découlant de l'informatique (au niveau applicatif et entrepôt de données) ;"
        ]
      },
      {
        "id": 293,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.2. Le risque en audit informatique",
        "question": "Pourquoi des privilèges d'accès excessifs constituent-ils un risque inhérent majeur ?",
        "answer": "Parce qu'ils brisent la séparation des tâches (SOD) et permettent à un même utilisateur d'effectuer sans surveillance des actions conflictuelles ou frauduleuses.",
        "cleanAnswer": "Parce qu'ils brisent la séparation des tâches (SOD) et permettent à un même utilisateur d'effectuer sans surveillance des actions conflictuelles ou frauduleuses.",
        "type": "qcm",
        "options": [
          "C'est la possibilité qu'une anomalie significative se produise dans le système ou les données, sans tenir compte de l'effet des contrôles internes existants dans l'entité.",
          "C'est une analyse indépendante conduite principalement par des spécialistes en audit informatique, avec la contribution d'autres parties prenantes métiers et techniques.",
          "Parce qu'ils brisent la séparation des tâches (SOD) et permettent à un même utilisateur d'effectuer sans surveillance des actions conflictuelles ou frauduleuses.",
          "Il s'agit : • Du risque inhérent, également appelé « risk associated with IT » (RAIT) ; • Du risque lié au contrôle, également appelé « risk associated with the control » (RAWC)."
        ],
        "correctIndex": 2
      },
      {
        "id": 294,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.2. Le risque en audit informatique",
        "question": "Qu'est-ce que le risque lié au contrôle ou RAWC (risk associated with the control) ?",
        "answer": "C'est le risque qu'une anomalie significative ne soit ni prévenue ni détectée par le dispositif de contrôle interne en place, et qu'elle ne soit donc pas corrigée à temps. C'est le risque qu'un contrôle soit inefficace.",
        "cleanAnswer": "C'est le risque qu'une anomalie significative ne soit ni prévenue ni détectée par le dispositif de contrôle interne en place, et qu'elle ne soit donc pas corrigée à temps. C'est le risque qu'un contrôle soit inefficace.",
        "type": "qcm",
        "options": [
          "Parce qu'aucun dispositif de contrôle ne peut éliminer totalement les risques ; le risque zéro n'existe pas et il subsiste toujours un risque résiduel.",
          "C'est le risque qu'une anomalie significative ne soit ni prévenue ni détectée par le dispositif de contrôle interne en place, et qu'elle ne soit donc pas corrigée à temps. C'est le risque qu'un contrôle soit inefficace.",
          "C'est la possibilité qu'une anomalie significative se produise dans le système ou les données, sans tenir compte de l'effet des contrôles internes existants dans l'entité.",
          "Il s'agit : • Du risque inhérent, également appelé « risk associated with IT » (RAIT) ; • Du risque lié au contrôle, également appelé « risk associated with the control » (RAWC)."
        ],
        "correctIndex": 1
      },
      {
        "id": 295,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.2. Le risque en audit informatique",
        "question": "Pourquoi l'évaluation des risques est-elle qualifiée de processus itératif en audit ?",
        "answer": "Parce qu'elle n'est pas figée : elle est réévaluée, actualisée et affinée de manière continue tout au long des différentes étapes de la mission d'audit.",
        "cleanAnswer": "Parce qu'elle n'est pas figée : elle est réévaluée, actualisée et affinée de manière continue tout au long des différentes étapes de la mission d'audit.",
        "type": "qcm",
        "options": [
          "Elles comprennent : • La définition du périmètre ; • L'évaluation des risques ; • L'élaboration du plan d'audit ; • La collecte d'informations ; • La préparation des outils.",
          "Un risque est considéré comme majeur lorsque son évaluation démontre qu'il peut porter atteinte aux objectifs stratégiques, affecter de manière critique la pérennité de l'organisation ou compromettre ses opérations essentielles.",
          "Elles comprennent : • La rédaction du rapport final ; • L'évaluation des risques résiduels ; • Le partage des conclusions.",
          "Parce qu'elle n'est pas figée : elle est réévaluée, actualisée et affinée de manière continue tout au long des différentes étapes de la mission d'audit."
        ],
        "correctIndex": 3
      },
      {
        "id": 296,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.5. L'évaluation des RAIT et la séparation des tâches (SOD)",
        "question": "Quel est l'objet de l'évaluation des risques inhérents liés à l'IT (RAIT) ?",
        "answer": "Elle vise à déterminer la nature, le calendrier et l'étendue des tests d'audit à réaliser sur le périmètre audité, indépendamment des contrôles internes déployés par l'organisation.",
        "cleanAnswer": "Elle vise à déterminer la nature, le calendrier et l'étendue des tests d'audit à réaliser sur le périmètre audité, indépendamment des contrôles internes déployés par l'organisation.",
        "type": "qcm",
        "options": [
          "Parce que des déficiences avérées en matière de SOD peuvent, à elles seules, remettre en cause l'ensemble de l'approche d'audit et la fiabilité globale des systèmes et des données financières.",
          "Elle vise à déterminer la nature, le calendrier et l'étendue des tests d'audit à réaliser sur le périmètre audité, indépendamment des contrôles internes déployés par l'organisation.",
          "Ils doivent couvrir l'ensemble des couches des systèmes clés : la couche applicative, les bases de données, le système d'exploitation et le réseau.",
          "C'est une analyse indépendante conduite principalement par des spécialistes en audit informatique, avec la contribution d'autres parties prenantes métiers et techniques."
        ],
        "correctIndex": 1
      },
      {
        "id": 297,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.5. L'évaluation des RAIT et la séparation des tâches (SOD)",
        "question": "Qui mène l'évaluation des RAIT ?",
        "answer": "C'est une analyse indépendante conduite principalement par des spécialistes en audit informatique, avec la contribution d'autres parties prenantes métiers et techniques.",
        "cleanAnswer": "C'est une analyse indépendante conduite principalement par des spécialistes en audit informatique, avec la contribution d'autres parties prenantes métiers et techniques.",
        "type": "qcm",
        "options": [
          "Elle vise à déterminer la nature, le calendrier et l'étendue des tests d'audit à réaliser sur le périmètre audité, indépendamment des contrôles internes déployés par l'organisation.",
          "C'est une analyse indépendante conduite principalement par des spécialistes en audit informatique, avec la contribution d'autres parties prenantes métiers et techniques.",
          "C'est un principe de contrôle interne fondamental consistant à répartir les responsabilités et les accès entre plusieurs personnes afin d'éviter qu'une seule personne puisse initier, autoriser, exécuter et contrôler une opération.",
          "Parce que des déficiences avérées en matière de SOD peuvent, à elles seules, remettre en cause l'ensemble de l'approche d'audit et la fiabilité globale des systèmes et des données financières."
        ],
        "correctIndex": 1
      },
      {
        "id": 298,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.5. L'évaluation des RAIT et la séparation des tâches (SOD)",
        "question": "En combien de parties se décompose le processus d'évaluation des RAIT ?",
        "answer": "Il se décompose en 3 parties :<ol class=\"styled-ol\"><li>L'évaluation des risques découlant de l'informatique (au niveau applicatif et entrepôt de données) ;</li><li>L'identification des contrôles permettant de traiter les RAIT sur toute l'infrastructure ;</li><li>L'évaluation de l'efficacité de ces contrôles.</li></ol>",
        "cleanAnswer": "Il se décompose en 3 parties : • L'évaluation des risques découlant de l'informatique (au niveau applicatif et entrepôt de données) ; • L'identification des contrôles permettant de traiter les RAIT sur toute l'infrastructure ; • L'évaluation de l'efficacité de ces contrôles.",
        "type": "order",
        "correctOrder": [
          "L'évaluation des risques découlant de l'informatique (au niveau applicatif et entrepôt de données) ;",
          "L'identification des contrôles permettant de traiter les RAIT sur toute l'infrastructure ;",
          "L'évaluation de l'efficacité de ces contrôles."
        ],
        "shuffledItems": [
          "L'évaluation de l'efficacité de ces contrôles.",
          "L'identification des contrôles permettant de traiter les RAIT sur toute l'infrastructure ;",
          "L'évaluation des risques découlant de l'informatique (au niveau applicatif et entrepôt de données) ;"
        ]
      },
      {
        "id": 299,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.5. L'évaluation des RAIT et la séparation des tâches (SOD)",
        "question": "Sur quelles couches de l'infrastructure les contrôles traitant les RAIT doivent-ils être identifiés ?",
        "answer": "Ils doivent couvrir l'ensemble des couches des systèmes clés : la couche applicative, les bases de données, le système d'exploitation et le réseau.",
        "cleanAnswer": "Ils doivent couvrir l'ensemble des couches des systèmes clés : la couche applicative, les bases de données, le système d'exploitation et le réseau.",
        "type": "qcm",
        "options": [
          "Ils doivent couvrir l'ensemble des couches des systèmes clés : la couche applicative, les bases de données, le système d'exploitation et le réseau.",
          "Parce que des déficiences avérées en matière de SOD peuvent, à elles seules, remettre en cause l'ensemble de l'approche d'audit et la fiabilité globale des systèmes et des données financières.",
          "Elle vise à déterminer la nature, le calendrier et l'étendue des tests d'audit à réaliser sur le périmètre audité, indépendamment des contrôles internes déployés par l'organisation.",
          "C'est un principe de contrôle interne fondamental consistant à répartir les responsabilités et les accès entre plusieurs personnes afin d'éviter qu'une seule personne puisse initier, autoriser, exécuter et contrôler une opération."
        ],
        "correctIndex": 0
      },
      {
        "id": 300,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.5. L'évaluation des RAIT et la séparation des tâches (SOD)",
        "question": "Qu'est-ce que la séparation des tâches ou SOD (Segregation of Duties) ?",
        "answer": "C'est un principe de contrôle interne fondamental consistant à répartir les responsabilités et les accès entre plusieurs personnes afin d'éviter qu'une seule personne puisse initier, autoriser, exécuter et contrôler une opération.",
        "cleanAnswer": "C'est un principe de contrôle interne fondamental consistant à répartir les responsabilités et les accès entre plusieurs personnes afin d'éviter qu'une seule personne puisse initier, autoriser, exécuter et contrôler une opération.",
        "type": "qcm",
        "options": [
          "Parce que des déficiences avérées en matière de SOD peuvent, à elles seules, remettre en cause l'ensemble de l'approche d'audit et la fiabilité globale des systèmes et des données financières.",
          "C'est un principe de contrôle interne fondamental consistant à répartir les responsabilités et les accès entre plusieurs personnes afin d'éviter qu'une seule personne puisse initier, autoriser, exécuter et contrôler une opération.",
          "C'est une analyse indépendante conduite principalement par des spécialistes en audit informatique, avec la contribution d'autres parties prenantes métiers et techniques.",
          "C'est l'entente secrète ou la complicité entre deux ou plusieurs personnes pour contourner délibérément les contrôles et la séparation des tâches en vue de commettre ou dissimuler une fraude."
        ],
        "correctIndex": 1
      },
      {
        "id": 301,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.5. L'évaluation des RAIT et la séparation des tâches (SOD)",
        "question": "Pourquoi les déficiences de séparation des tâches (SOD) sont-elles si critiques en audit IT ?",
        "answer": "Parce que des déficiences avérées en matière de SOD peuvent, à elles seules, remettre en cause l'ensemble de l'approche d'audit et la fiabilité globale des systèmes et des données financières.",
        "cleanAnswer": "Parce que des déficiences avérées en matière de SOD peuvent, à elles seules, remettre en cause l'ensemble de l'approche d'audit et la fiabilité globale des systèmes et des données financières.",
        "type": "qcm",
        "options": [
          "Ils doivent couvrir l'ensemble des couches des systèmes clés : la couche applicative, les bases de données, le système d'exploitation et le réseau.",
          "Parce que des déficiences avérées en matière de SOD peuvent, à elles seules, remettre en cause l'ensemble de l'approche d'audit et la fiabilité globale des systèmes et des données financières.",
          "C'est une analyse indépendante conduite principalement par des spécialistes en audit informatique, avec la contribution d'autres parties prenantes métiers et techniques.",
          "Elle vise à déterminer la nature, le calendrier et l'étendue des tests d'audit à réaliser sur le périmètre audité, indépendamment des contrôles internes déployés par l'organisation."
        ],
        "correctIndex": 1
      },
      {
        "id": 302,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.1.5. L'évaluation des RAIT et la séparation des tâches (SOD)",
        "question": "Quels sont les éléments clés du triangle de la fraude ?",
        "answer": "Le triangle de la fraude repose sur trois facteurs explicatifs :<ol class=\"styled-ol\"><li>La pression ou motivation (besoin financier, objectifs professionnels irréalistes) ;</li><li>L'opportunité (faiblesses du contrôle interne ou privilèges excessifs permettant d'agir sans être découvert) ;</li><li>La rationalisation ou justification (justification morale de l'acte par le fraudeur).</li></ol>",
        "cleanAnswer": "Le triangle de la fraude repose sur trois facteurs explicatifs : • La pression ou motivation (besoin financier, objectifs professionnels irréalistes) ; • L'opportunité (faiblesses du contrôle interne ou privilèges excessifs permettant d'agir sans être découvert) ; • La rationalisation ou justification (justification morale de l'acte par le fraudeur).",
        "type": "order",
        "correctOrder": [
          "La pression ou motivation (besoin financier, objectifs professionnels irréalistes) ;",
          "L'opportunité (faiblesses du contrôle interne ou privilèges excessifs permettant d'agir sans être découvert) ;",
          "La rationalisation ou justification (justification morale de l'acte par le fraudeur)."
        ],
        "shuffledItems": [
          "La rationalisation ou justification (justification morale de l'acte par le fraudeur).",
          "La pression ou motivation (besoin financier, objectifs professionnels irréalistes) ;",
          "L'opportunité (faiblesses du contrôle interne ou privilèges excessifs permettant d'agir sans être découvert) ;"
        ]
      },
      {
        "id": 303,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.2. Le Contrôle Interne",
        "question": "Donnez des exemples concrets de contrôles mis en œuvre au sein d'une entreprise.",
        "answer": "Les exemples incluent :<ul class=\"styled-ul\"><li>La définition et la communication d'objectifs annuels pour chaque département ;</li><li>La formalisation et la mise à jour des procédures et modes opératoires ;</li><li>La revue obligatoire des clauses contractuelles par le service juridique avant signature ;</li><li>La vérification du temps de travail et de repos par les Ressources Humaines ;</li><li>Le contrôle de l'authenticité des justificatifs lors d'une immatriculation ;</li><li>L'approbation hiérarchique obligatoire avant l'attribution d'accès informatiques par la DSI.</li></ul>",
        "cleanAnswer": "Les exemples incluent : • La définition et la communication d'objectifs annuels pour chaque département ; • La formalisation et la mise à jour des procédures et modes opératoires ; • La revue obligatoire des clauses contractuelles par le service juridique avant signature ; • La vérification du temps de travail et de repos par les Ressources Humaines ; • Le contrôle de l'authenticité des justificatifs lors d'une immatriculation ; • L'approbation hiérarchique obligatoire avant l'attribution d'accès informatiques par la DSI.",
        "type": "checkbox",
        "allItems": [
          "La vérification du temps de travail et de repos par les Ressources Humaines ;",
          "La collusion entre plusieurs collaborateurs contournant les contrôles ;",
          "L'approbation hiérarchique obligatoire avant l'attribution d'accès informatiques par la DSI.",
          "Le contrôle de l'authenticité des justificatifs lors d'une immatriculation ;",
          "La formalisation et la mise à jour des procédures et modes opératoires ;",
          "Le facteur humain (inattention, fatigue ou erreur de jugement) ;",
          "La fraude délibérée et le contournement des procédures par la direction.",
          "La définition et la communication d'objectifs annuels pour chaque département ;",
          "La revue obligatoire des clauses contractuelles par le service juridique avant signature ;"
        ],
        "correctItems": [
          "La définition et la communication d'objectifs annuels pour chaque département ;",
          "La formalisation et la mise à jour des procédures et modes opératoires ;",
          "La revue obligatoire des clauses contractuelles par le service juridique avant signature ;",
          "La vérification du temps de travail et de repos par les Ressources Humaines ;",
          "Le contrôle de l'authenticité des justificatifs lors d'une immatriculation ;",
          "L'approbation hiérarchique obligatoire avant l'attribution d'accès informatiques par la DSI."
        ],
        "distractors": [
          "Le facteur humain (inattention, fatigue ou erreur de jugement) ;",
          "La collusion entre plusieurs collaborateurs contournant les contrôles ;",
          "La fraude délibérée et le contournement des procédures par la direction."
        ]
      },
      {
        "id": 304,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.2. Le Contrôle Interne",
        "question": "Quel contrôle informatique est indispensable avant d'octroyer un accès à un collaborateur ?",
        "answer": "L'obtention formelle de l'approbation du supérieur hiérarchique par le département des Systèmes d'Information avant la création ou l'attribution des droits d'accès.",
        "cleanAnswer": "L'obtention formelle de l'approbation du supérieur hiérarchique par le département des Systèmes d'Information avant la création ou l'attribution des droits d'accès.",
        "type": "qcm",
        "options": [
          "Les principaux objectifs sont d’auditer les systèmes d’information, de comprendre le contrôle interne informatique, d’identifier et tester les contrôles généraux et applicatifs, et de s’assurer de l’existence d’une piste d’audit.",
          "Un contrôle manuel est exécuté directement par un individu sans automatisation (ex : rapprochement visuel), tandis qu'un contrôle automatisé est exécuté par le système informatique lui-même (ex : blocage d'une transaction non conforme).",
          "C'est le risque qu'une anomalie significative ne soit ni prévenue ni détectée par le dispositif de contrôle interne en place, et qu'elle ne soit donc pas corrigée à temps. C'est le risque qu'un contrôle soit inefficace.",
          "L'obtention formelle de l'approbation du supérieur hiérarchique par le département des Systèmes d'Information avant la création ou l'attribution des droits d'accès."
        ],
        "correctIndex": 3
      },
      {
        "id": 305,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.2. Le Contrôle Interne",
        "question": "Quel est le lien fondamental entre Contrôles, Objectifs et Risques ?",
        "answer": "Les objectifs déterminent ce que l'entreprise cherche à accomplir ; les risques représentent les obstacles à l'atteinte de ces objectifs ; et les contrôles sont les mécanismes mis en place pour réduire ces risques à un niveau acceptable.",
        "cleanAnswer": "Les objectifs déterminent ce que l'entreprise cherche à accomplir ; les risques représentent les obstacles à l'atteinte de ces objectifs ; et les contrôles sont les mécanismes mis en place pour réduire ces risques à un niveau acceptable.",
        "type": "qcm",
        "options": [
          "Évaluer l’efficacité des processus de gestion des risques, de contrôle et de gouvernance, améliorer les opérations et assurer la conformité aux politiques internes et aux réglementations.",
          "Elle consiste à mettre en place des stratégies et des mesures de traitement appropriées dès lors que le niveau d'un risque évalué dépasse le seuil tolérable ou acceptable par l'entreprise.",
          "Risque Résiduel = Risque Inhérent - Effet des Contrôles Internes (ou Risque Inhérent modéré par l'efficacité du contrôle interne).",
          "Les objectifs déterminent ce que l'entreprise cherche à accomplir ; les risques représentent les obstacles à l'atteinte de ces objectifs ; et les contrôles sont les mécanismes mis en place pour réduire ces risques à un niveau acceptable."
        ],
        "correctIndex": 3
      },
      {
        "id": 306,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.2. Le Contrôle Interne",
        "question": "Quelles sont les principales catégories de contrôles selon leur mode d'action ?",
        "answer": "On distingue :<ul class=\"styled-ul\"><li>Les contrôles préventifs (visant à empêcher la survenance d'une anomalie) ;</li><li>Les contrôles détectifs (visant à détecter et alerter sur une anomalie déjà survenue) ;</li><li>Les contrôles correctifs (visant à réparer les conséquences d'une anomalie détectée).</li></ul>",
        "cleanAnswer": "On distingue : • Les contrôles préventifs (visant à empêcher la survenance d'une anomalie) ; • Les contrôles détectifs (visant à détecter et alerter sur une anomalie déjà survenue) ; • Les contrôles correctifs (visant à réparer les conséquences d'une anomalie détectée).",
        "type": "checkbox",
        "allItems": [
          "Les contrôles détectifs (visant à détecter et alerter sur une anomalie déjà survenue) ;",
          "Les contrôles préventifs (visant à empêcher la survenance d'une anomalie) ;",
          "La fraude délibérée et le contournement des procédures par la direction.",
          "La collusion entre plusieurs collaborateurs contournant les contrôles ;",
          "Les contrôles correctifs (visant à réparer les conséquences d'une anomalie détectée)."
        ],
        "correctItems": [
          "Les contrôles préventifs (visant à empêcher la survenance d'une anomalie) ;",
          "Les contrôles détectifs (visant à détecter et alerter sur une anomalie déjà survenue) ;",
          "Les contrôles correctifs (visant à réparer les conséquences d'une anomalie détectée)."
        ],
        "distractors": [
          "La collusion entre plusieurs collaborateurs contournant les contrôles ;",
          "La fraude délibérée et le contournement des procédures par la direction."
        ]
      },
      {
        "id": 307,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.2. Le Contrôle Interne",
        "question": "Quelle est la différence entre un contrôle manuel et un contrôle automatisé ?",
        "answer": "Un contrôle manuel est exécuté directement par un individu sans automatisation (ex : rapprochement visuel), tandis qu'un contrôle automatisé est exécuté par le système informatique lui-même (ex : blocage d'une transaction non conforme).",
        "cleanAnswer": "Un contrôle manuel est exécuté directement par un individu sans automatisation (ex : rapprochement visuel), tandis qu'un contrôle automatisé est exécuté par le système informatique lui-même (ex : blocage d'une transaction non conforme).",
        "type": "qcm",
        "options": [
          "L'obtention formelle de l'approbation du supérieur hiérarchique par le département des Systèmes d'Information avant la création ou l'attribution des droits d'accès.",
          "Un contrôle manuel est exécuté directement par un individu sans automatisation (ex : rapprochement visuel), tandis qu'un contrôle automatisé est exécuté par le système informatique lui-même (ex : blocage d'une transaction non conforme).",
          "Parce qu'aucun dispositif de contrôle ne peut éliminer totalement les risques ; le risque zéro n'existe pas et il subsiste toujours un risque résiduel.",
          "C'est le risque qu'une anomalie significative ne soit ni prévenue ni détectée par le dispositif de contrôle interne en place, et qu'elle ne soit donc pas corrigée à temps. C'est le risque qu'un contrôle soit inefficace."
        ],
        "correctIndex": 1
      },
      {
        "id": 308,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.2. Le Contrôle Interne",
        "question": "Quelles sont les principales limites inhérentes au contrôle interne ?",
        "answer": "Le contrôle interne présente plusieurs limites majeures :<ul class=\"styled-ul\"><li>Il ne procure qu'une assurance relative ou raisonnable (le risque zéro n'existe pas) ;</li><li>Le facteur humain (inattention, fatigue ou erreur de jugement) ;</li><li>L'attitude défaillante de l'encadrement (manque d'implication, défaut de communication ou de sensibilisation) ;</li><li>La collusion entre plusieurs collaborateurs contournant les contrôles ;</li><li>La fraude délibérée et le contournement des procédures par la direction.</li></ul>",
        "cleanAnswer": "Le contrôle interne présente plusieurs limites majeures : • Il ne procure qu'une assurance relative ou raisonnable (le risque zéro n'existe pas) ; • Le facteur humain (inattention, fatigue ou erreur de jugement) ; • L'attitude défaillante de l'encadrement (manque d'implication, défaut de communication ou de sensibilisation) ; • La collusion entre plusieurs collaborateurs contournant les contrôles ; • La fraude délibérée et le contournement des procédures par la direction.",
        "type": "checkbox",
        "allItems": [
          "La vérification du temps de travail et de repos par les Ressources Humaines ;",
          "La fraude délibérée et le contournement des procédures par la direction.",
          "Le facteur humain (inattention, fatigue ou erreur de jugement) ;",
          "La collusion entre plusieurs collaborateurs contournant les contrôles ;",
          "L'attitude défaillante de l'encadrement (manque d'implication, défaut de communication ou de sensibilisation) ;",
          "La formalisation et la mise à jour des procédures et modes opératoires ;",
          "Il ne procure qu'une assurance relative ou raisonnable (le risque zéro n'existe pas) ;",
          "Le contrôle de l'authenticité des justificatifs lors d'une immatriculation ;"
        ],
        "correctItems": [
          "Il ne procure qu'une assurance relative ou raisonnable (le risque zéro n'existe pas) ;",
          "Le facteur humain (inattention, fatigue ou erreur de jugement) ;",
          "L'attitude défaillante de l'encadrement (manque d'implication, défaut de communication ou de sensibilisation) ;",
          "La collusion entre plusieurs collaborateurs contournant les contrôles ;",
          "La fraude délibérée et le contournement des procédures par la direction."
        ],
        "distractors": [
          "Le contrôle de l'authenticité des justificatifs lors d'une immatriculation ;",
          "La formalisation et la mise à jour des procédures et modes opératoires ;",
          "La vérification du temps de travail et de repos par les Ressources Humaines ;"
        ]
      },
      {
        "id": 309,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.2. Le Contrôle Interne",
        "question": "Pourquoi dit-on que le contrôle interne ne donne qu'une assurance relative ?",
        "answer": "Parce qu'aucun dispositif de contrôle ne peut éliminer totalement les risques ; le risque zéro n'existe pas et il subsiste toujours un risque résiduel.",
        "cleanAnswer": "Parce qu'aucun dispositif de contrôle ne peut éliminer totalement les risques ; le risque zéro n'existe pas et il subsiste toujours un risque résiduel.",
        "type": "qcm",
        "options": [
          "C'est le niveau de risque qui subsiste après la prise en compte et la mise en œuvre effective de l'ensemble des dispositifs de contrôle et de maîtrise des risques existants.",
          "Risque Résiduel = Risque Inhérent - Effet des Contrôles Internes (ou Risque Inhérent modéré par l'efficacité du contrôle interne).",
          "C'est le risque qu'une anomalie significative ne soit ni prévenue ni détectée par le dispositif de contrôle interne en place, et qu'elle ne soit donc pas corrigée à temps. C'est le risque qu'un contrôle soit inefficace.",
          "Parce qu'aucun dispositif de contrôle ne peut éliminer totalement les risques ; le risque zéro n'existe pas et il subsiste toujours un risque résiduel."
        ],
        "correctIndex": 3
      },
      {
        "id": 310,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.2. Le Contrôle Interne",
        "question": "Qu'est-ce que la collusion dans le contexte du contrôle interne ?",
        "answer": "C'est l'entente secrète ou la complicité entre deux ou plusieurs personnes pour contourner délibérément les contrôles et la séparation des tâches en vue de commettre ou dissimuler une fraude.",
        "cleanAnswer": "C'est l'entente secrète ou la complicité entre deux ou plusieurs personnes pour contourner délibérément les contrôles et la séparation des tâches en vue de commettre ou dissimuler une fraude.",
        "type": "qcm",
        "options": [
          "C'est un principe de contrôle interne fondamental consistant à répartir les responsabilités et les accès entre plusieurs personnes afin d'éviter qu'une seule personne puisse initier, autoriser, exécuter et contrôler une opération.",
          "C'est l'entente secrète ou la complicité entre deux ou plusieurs personnes pour contourner délibérément les contrôles et la séparation des tâches en vue de commettre ou dissimuler une fraude.",
          "Parce qu'aucun dispositif de contrôle ne peut éliminer totalement les risques ; le risque zéro n'existe pas et il subsiste toujours un risque résiduel.",
          "Les objectifs déterminent ce que l'entreprise cherche à accomplir ; les risques représentent les obstacles à l'atteinte de ces objectifs ; et les contrôles sont les mécanismes mis en place pour réduire ces risques à un niveau acceptable."
        ],
        "correctIndex": 1
      },
      {
        "id": 311,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.3. La Maîtrise des Risques et le Risque Résiduel",
        "question": "En quoi consiste la réponse aux risques ?",
        "answer": "Elle consiste à mettre en place des stratégies et des mesures de traitement appropriées dès lors que le niveau d'un risque évalué dépasse le seuil tolérable ou acceptable par l'entreprise.",
        "cleanAnswer": "Elle consiste à mettre en place des stratégies et des mesures de traitement appropriées dès lors que le niveau d'un risque évalué dépasse le seuil tolérable ou acceptable par l'entreprise.",
        "type": "qcm",
        "options": [
          "Elle consiste à mettre en place des stratégies et des mesures de traitement appropriées dès lors que le niveau d'un risque évalué dépasse le seuil tolérable ou acceptable par l'entreprise.",
          "Elle permet de croiser la probabilité d'occurrence et l'impact potentiel afin de classer, prioriser et visualiser les risques clés nécessitant des actions correctives prioritaires.",
          "Le risque résiduel se mesure selon : • L'impact potentiel des dommages ; • La probabilité que le risque survienne après l'application des contrôles en place.",
          "Il consiste à mettre en place des mesures et des dispositifs de contrôle appropriés afin d'atténuer, éliminer, transférer ou accepter les risques identifiés."
        ],
        "correctIndex": 0
      },
      {
        "id": 312,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.3. La Maîtrise des Risques et le Risque Résiduel",
        "question": "Pourquoi la cartographie des risques ne doit-elle jamais être un document figé ?",
        "answer": "Parce que l'environnement technologique, réglementaire et opérationnel évolue en permanence ; les risques changent de nature et la cartographie doit être actualisée de manière itérative et continue.",
        "cleanAnswer": "Parce que l'environnement technologique, réglementaire et opérationnel évolue en permanence ; les risques changent de nature et la cartographie doit être actualisée de manière itérative et continue.",
        "type": "qcm",
        "options": [
          "Elle permet de croiser la probabilité d'occurrence et l'impact potentiel afin de classer, prioriser et visualiser les risques clés nécessitant des actions correctives prioritaires.",
          "Parce que l'environnement technologique, réglementaire et opérationnel évolue en permanence ; les risques changent de nature et la cartographie doit être actualisée de manière itérative et continue.",
          "Risque Résiduel = Risque Inhérent - Effet des Contrôles Internes (ou Risque Inhérent modéré par l'efficacité du contrôle interne).",
          "Parce qu'elle n'est pas figée : elle est réévaluée, actualisée et affinée de manière continue tout au long des différentes étapes de la mission d'audit."
        ],
        "correctIndex": 1
      },
      {
        "id": 313,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.3. La Maîtrise des Risques et le Risque Résiduel",
        "question": "Qu'est-ce que le risque résiduel ?",
        "answer": "C'est le niveau de risque qui subsiste après la prise en compte et la mise en œuvre effective de l'ensemble des dispositifs de contrôle et de maîtrise des risques existants.",
        "cleanAnswer": "C'est le niveau de risque qui subsiste après la prise en compte et la mise en œuvre effective de l'ensemble des dispositifs de contrôle et de maîtrise des risques existants.",
        "type": "qcm",
        "options": [
          "Elle consiste à mettre en place des stratégies et des mesures de traitement appropriées dès lors que le niveau d'un risque évalué dépasse le seuil tolérable ou acceptable par l'entreprise.",
          "Risque Résiduel = Risque Inhérent - Effet des Contrôles Internes (ou Risque Inhérent modéré par l'efficacité du contrôle interne).",
          "Le risque résiduel se mesure selon : • L'impact potentiel des dommages ; • La probabilité que le risque survienne après l'application des contrôles en place.",
          "C'est le niveau de risque qui subsiste après la prise en compte et la mise en œuvre effective de l'ensemble des dispositifs de contrôle et de maîtrise des risques existants."
        ],
        "correctIndex": 3
      },
      {
        "id": 314,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.3. La Maîtrise des Risques et le Risque Résiduel",
        "question": "Quelles sont les deux dimensions permettant de mesurer le risque résiduel ?",
        "answer": "Le risque résiduel se mesure selon :<ol class=\"styled-ol\"><li>L'impact potentiel des dommages ;</li><li>La probabilité que le risque survienne après l'application des contrôles en place.</li></ol>",
        "cleanAnswer": "Le risque résiduel se mesure selon : • L'impact potentiel des dommages ; • La probabilité que le risque survienne après l'application des contrôles en place.",
        "type": "qcm",
        "options": [
          "Il s'agit : • Du risque inhérent, également appelé « risk associated with IT » (RAIT) ; • Du risque lié au contrôle, également appelé « risk associated with the control » (RAWC).",
          "Elles comprennent : • La définition du périmètre ; • L'évaluation des risques ; • L'élaboration du plan d'audit ; • La collecte d'informations ; • La préparation des outils.",
          "Elle permet de croiser la probabilité d'occurrence et l'impact potentiel afin de classer, prioriser et visualiser les risques clés nécessitant des actions correctives prioritaires.",
          "Le risque résiduel se mesure selon : • L'impact potentiel des dommages ; • La probabilité que le risque survienne après l'application des contrôles en place."
        ],
        "correctIndex": 3
      },
      {
        "id": 315,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.3. La Maîtrise des Risques et le Risque Résiduel",
        "question": "Quelle formule conceptuelle relie le risque inhérent, les contrôles et le risque résiduel ?",
        "answer": "Risque Résiduel = Risque Inhérent - Effet des Contrôles Internes (ou Risque Inhérent modéré par l'efficacité du contrôle interne).",
        "cleanAnswer": "Risque Résiduel = Risque Inhérent - Effet des Contrôles Internes (ou Risque Inhérent modéré par l'efficacité du contrôle interne).",
        "type": "qcm",
        "options": [
          "C'est le niveau de risque qui subsiste après la prise en compte et la mise en œuvre effective de l'ensemble des dispositifs de contrôle et de maîtrise des risques existants.",
          "Le risque résiduel se mesure selon : • L'impact potentiel des dommages ; • La probabilité que le risque survienne après l'application des contrôles en place.",
          "C'est la possibilité qu'une anomalie significative se produise dans le système ou les données, sans tenir compte de l'effet des contrôles internes existants dans l'entité.",
          "Risque Résiduel = Risque Inhérent - Effet des Contrôles Internes (ou Risque Inhérent modéré par l'efficacité du contrôle interne)."
        ],
        "correctIndex": 3
      },
      {
        "id": 316,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.3. La Maîtrise des Risques et le Risque Résiduel",
        "question": "À quoi sert la matrice d'évaluation des risques ?",
        "answer": "Elle permet de croiser la probabilité d'occurrence et l'impact potentiel afin de classer, prioriser et visualiser les risques clés nécessitant des actions correctives prioritaires.",
        "cleanAnswer": "Elle permet de croiser la probabilité d'occurrence et l'impact potentiel afin de classer, prioriser et visualiser les risques clés nécessitant des actions correctives prioritaires.",
        "type": "qcm",
        "options": [
          "Elle consiste à mettre en place des stratégies et des mesures de traitement appropriées dès lors que le niveau d'un risque évalué dépasse le seuil tolérable ou acceptable par l'entreprise.",
          "Elle requiert que les risques clés soient systématiquement identifiés, évalués avec rigueur et fassent l'objet d'une maîtrise adéquate et surveillée.",
          "Elle permet de croiser la probabilité d'occurrence et l'impact potentiel afin de classer, prioriser et visualiser les risques clés nécessitant des actions correctives prioritaires.",
          "Le risque résiduel se mesure selon : • L'impact potentiel des dommages ; • La probabilité que le risque survienne après l'application des contrôles en place."
        ],
        "correctIndex": 2
      },
      {
        "id": 317,
        "chapitre": "CHAPITRE 3 — LE RISQUE ET LE CONTRÔLE",
        "sousPoint": "3.3. La Maîtrise des Risques et le Risque Résiduel",
        "question": "Que requiert une gestion adéquate des risques au sein d'une organisation ?",
        "answer": "Elle requiert que les risques clés soient systématiquement identifiés, évalués avec rigueur et fassent l'objet d'une maîtrise adéquate et surveillée.",
        "cleanAnswer": "Elle requiert que les risques clés soient systématiquement identifiés, évalués avec rigueur et fassent l'objet d'une maîtrise adéquate et surveillée.",
        "type": "qcm",
        "options": [
          "Le risque résiduel se mesure selon : • L'impact potentiel des dommages ; • La probabilité que le risque survienne après l'application des contrôles en place.",
          "Elle requiert que les risques clés soient systématiquement identifiés, évalués avec rigueur et fassent l'objet d'une maîtrise adéquate et surveillée.",
          "Elle permet de croiser la probabilité d'occurrence et l'impact potentiel afin de classer, prioriser et visualiser les risques clés nécessitant des actions correctives prioritaires.",
          "C'est le niveau de risque qui subsiste après la prise en compte et la mise en œuvre effective de l'ensemble des dispositifs de contrôle et de maîtrise des risques existants."
        ],
        "correctIndex": 1
      }
    ]
  }
};

// État Global de l'Application
let currentCourseId = localStorage.getItem('selected_course_id') || 'parallele';
if (!allCourses[currentCourseId]) {
    currentCourseId = 'parallele';
}

let questionsData = allCourses[currentCourseId].questions;
let currentIndex = 0;
let currentMode = localStorage.getItem('revision_mode') || 'qcm'; // 'qcm' ou 'card'

// État des scores par cours
const courseStats = JSON.parse(localStorage.getItem('revision_stats') || '{}');
function getCourseUserAnswers(courseId) {
    if (!courseStats[courseId]) {
        courseStats[courseId] = { userAnswers: {}, score: 0, answeredCount: 0 };
    }
    return courseStats[courseId];
}

function saveCourseStats() {
    localStorage.setItem('revision_stats', JSON.stringify(courseStats));
}

// Éléments du DOM
const feedContainer = document.getElementById('feed');
const progressText = document.getElementById('progress-text');
const scoreBadge = document.getElementById('score-badge');
const scoreVal = document.getElementById('score-val');
const answeredVal = document.getElementById('answered-val');
const dossierTitle = document.getElementById('dossier-title');
const chapText = document.getElementById('chapitre-title');
const spText = document.getElementById('sous-point-title');
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const sidebarContent = document.getElementById('sidebar-content');
const repeatBtn = document.getElementById('repeat-btn');
const modeBtn = document.getElementById('mode-btn');
const modeText = document.getElementById('mode-text');
const courseSelectorBtn = document.getElementById('course-selector-btn');

let currentSpeechText = '';

// Synthèse vocale
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        if (!text) return;
        
        // Nettoyer le texte pour une lecture fluide
        const cleanForVoice = text
            .replace(/<[^>]+>/g, ' ')
            .replace(/\\[a-zA-Z]+/g, ' ')
            .replace(/\$|\(|\)|\{|\}/g, ' ')
            .replace(/->/g, ' vers ')
            .replace(/=>/g, ' implique ')
            .replace(/∩/g, ' intersection ')
            .replace(/≠/g, ' différent de ')
            .replace(/∅/g, ' vide ')
            .replace(/µs/g, ' microsecondes ')
            .replace(/\s+/g, ' ')
            .trim();

        const utterance = new SpeechSynthesisUtterance(cleanForVoice);
        utterance.lang = 'fr-FR';
        utterance.rate = 1.05;
        window.speechSynthesis.speak(utterance);
    }
}

// Rendu KaTeX des formules s'il est disponible
function renderMathInContainer(element) {
    if (window.renderMathInElement) {
        window.renderMathInElement(element, {
            delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '\\(', right: '\\)', display: false },
                { left: '$', right: '$', display: false }
            ],
            throwOnError: false
        });
    }
}

// Changement de cours
function selectCourse(courseId) {
    if (!allCourses[courseId]) return;
    currentCourseId = courseId;
    localStorage.setItem('selected_course_id', courseId);
    questionsData = allCourses[courseId].questions;
    currentIndex = 0;
    buildNavigationMenu();
    renderCurrentQuestion();
    closeMenu();
}

function updateHeaders(chapitre, sousPoint) {
    const course = allCourses[currentCourseId];
    dossierTitle.textContent = (course.icon ? course.icon + ' ' : '') + course.title;
    chapText.textContent = chapitre || "Chapitre 1";
    spText.textContent = sousPoint || "Généralités";
}

function updateScoreDisplay() {
    const st = getCourseUserAnswers(currentCourseId);
    scoreVal.textContent = st.score;
    answeredVal.textContent = st.answeredCount;
}

// ==========================================
// RENDU PRINCIPAL
// ==========================================
function renderCurrentQuestion() {
    feedContainer.innerHTML = '';
    const item = questionsData[currentIndex];
    if (!item) {
        feedContainer.innerHTML = '<div class="empty-state">Aucune question disponible.</div>';
        return;
    }

    updateHeaders(item.chapitre, item.sousPoint);
    progressText.textContent = "Question " + (currentIndex + 1) + " / " + questionsData.length;
    updateScoreDisplay();

    if (currentMode === 'card') {
        renderCardView(item);
    } else {
        if (item.type === 'order') {
            renderOrderView(item);
        } else if (item.type === 'checkbox') {
            renderCheckboxView(item);
        } else {
            renderQcmView(item);
        }
    }

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === questionsData.length - 1;

    renderMathInContainer(feedContainer);
}

// ==========================================
// MODE QCM CLASSIQUE
// ==========================================
function renderQcmView(item) {
    const qcmContainer = document.createElement('div');
    qcmContainer.className = 'qcm-container';

    const qCard = document.createElement('div');
    qCard.className = 'qcm-question-card';
    qCard.innerHTML = item.question;
    qcmContainer.appendChild(qCard);

    const optionsList = document.createElement('div');
    optionsList.className = 'options-list';

    const letters = ['A', 'B', 'C', 'D'];
    const st = getCourseUserAnswers(currentCourseId);
    const previousAnswer = st.userAnswers[currentIndex];
    const isAnswered = !!previousAnswer;

    item.options.forEach((optText, index) => {
        const optBtn = document.createElement('button');
        optBtn.className = 'option-btn';
        optBtn.setAttribute('data-index', index);

        const badge = document.createElement('span');
        badge.className = 'option-badge';
        badge.textContent = letters[index];

        const textSpan = document.createElement('span');
        textSpan.className = 'option-text';
        textSpan.innerHTML = optText;

        optBtn.appendChild(badge);
        optBtn.appendChild(textSpan);

        if (isAnswered) {
            optBtn.disabled = true;
            if (index === item.correctIndex) {
                optBtn.classList.add(previousAnswer.isCorrect ? 'correct' : 'revealed-correct');
            } else if (index === previousAnswer.selectedIndex) {
                optBtn.classList.add('wrong');
            }
        } else {
            optBtn.addEventListener('click', () => handleOptionSelect(item, index, qcmContainer, optionsList));
        }

        optionsList.appendChild(optBtn);
    });

    qcmContainer.appendChild(optionsList);

    if (isAnswered) {
        showExplanation(qcmContainer, item, previousAnswer.isCorrect);
        currentSpeechText = previousAnswer.isCorrect
            ? "Bonne réponse ! " + item.cleanAnswer
            : "Mauvaise réponse. La bonne réponse est : " + item.cleanAnswer;
    } else {
        currentSpeechText = item.question;
        speak(currentSpeechText);
    }

    feedContainer.appendChild(qcmContainer);
}

function handleOptionSelect(item, selectedIdx, container, optionsList) {
    const st = getCourseUserAnswers(currentCourseId);
    if (st.userAnswers[currentIndex]) return;

    const isCorrect = selectedIdx === item.correctIndex;
    st.userAnswers[currentIndex] = { selectedIndex: selectedIdx, isCorrect: isCorrect };

    st.answeredCount++;
    if (isCorrect) st.score++;
    saveCourseStats();
    updateScoreDisplay();

    const buttons = optionsList.querySelectorAll('.option-btn');
    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === item.correctIndex) {
            btn.classList.add(isCorrect ? 'correct' : 'revealed-correct');
        } else if (idx === selectedIdx) {
            btn.classList.add('wrong');
        }
    });

    showExplanation(container, item, isCorrect);
    renderMathInContainer(container);

    if (isCorrect) {
        currentSpeechText = "Bonne réponse ! " + item.cleanAnswer;
    } else {
        currentSpeechText = "Ce n'est pas tout à fait ça. La bonne réponse est : " + item.cleanAnswer;
    }
    speak(currentSpeechText);
}

// ==========================================
// MODE ORDRE (Glisser-Déposer)
// ==========================================
function renderOrderView(item) {
    const container = document.createElement('div');
    container.className = 'qcm-container';

    const qCard = document.createElement('div');
    qCard.className = 'qcm-question-card';
    qCard.innerHTML = item.question + '<div class="type-badge order-badge">↕ Classez dans l\'ordre</div>';
    container.appendChild(qCard);

    const st = getCourseUserAnswers(currentCourseId);
    const previousAnswer = st.userAnswers[currentIndex];
    const isAnswered = !!previousAnswer;

    const sortList = document.createElement('div');
    sortList.className = 'sort-list';

    const displayItems = isAnswered ? previousAnswer.userOrder : [...item.shuffledItems];

    displayItems.forEach((text, idx) => {
        const sortItem = document.createElement('div');
        sortItem.className = 'sort-item';
        sortItem.setAttribute('data-idx', idx);
        sortItem.setAttribute('draggable', !isAnswered);

        const handle = document.createElement('span');
        handle.className = 'sort-handle';
        handle.textContent = (idx + 1) + '.';

        const label = document.createElement('span');
        label.className = 'sort-label';
        label.innerHTML = text;

        const grip = document.createElement('span');
        grip.className = 'sort-grip';
        grip.innerHTML = isAnswered ? '' : '⠿';

        sortItem.appendChild(handle);
        sortItem.appendChild(label);
        sortItem.appendChild(grip);

        if (isAnswered) {
            const correctIdx = item.correctOrder.indexOf(text);
            if (correctIdx === idx) {
                sortItem.classList.add('sort-correct');
            } else {
                sortItem.classList.add('sort-wrong');
            }
        }

        sortList.appendChild(sortItem);
    });

    container.appendChild(sortList);

    if (!isAnswered) {
        setupDragAndDrop(sortList);

        const validateBtn = document.createElement('button');
        validateBtn.className = 'validate-btn';
        validateBtn.textContent = '✓ Valider l\'ordre';
        validateBtn.addEventListener('click', () => {
            handleOrderValidation(item, sortList, container, validateBtn);
        });
        container.appendChild(validateBtn);

        currentSpeechText = item.question;
        speak(currentSpeechText);
    } else {
        showExplanation(container, item, previousAnswer.isCorrect);
        currentSpeechText = previousAnswer.isCorrect
            ? "Bonne réponse !"
            : "L'ordre n'est pas tout à fait correct.";
    }

    feedContainer.appendChild(container);
}

function setupDragAndDrop(sortList) {
    let draggedItem = null;

    sortList.addEventListener('dragstart', (e) => {
        draggedItem = e.target.closest('.sort-item');
        if (!draggedItem) return;
        draggedItem.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    });

    sortList.addEventListener('dragend', () => {
        if (draggedItem) draggedItem.classList.remove('dragging');
        draggedItem = null;
        updateHandleNumbers(sortList);
    });

    sortList.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(sortList, e.clientY);
        if (draggedItem) {
            if (afterElement == null) {
                sortList.appendChild(draggedItem);
            } else {
                sortList.insertBefore(draggedItem, afterElement);
            }
        }
    });

    // Touch events for mobile
    sortList.addEventListener('touchstart', (e) => {
        const item = e.target.closest('.sort-item');
        if (!item || item.getAttribute('draggable') === 'false') return;
        draggedItem = item;
        draggedItem.classList.add('dragging');
    }, { passive: true });

    sortList.addEventListener('touchmove', (e) => {
        if (!draggedItem) return;
        e.preventDefault();
        const touchY = e.touches[0].clientY;
        const afterElement = getDragAfterElement(sortList, touchY);
        if (afterElement == null) {
            sortList.appendChild(draggedItem);
        } else {
            sortList.insertBefore(draggedItem, afterElement);
        }
    }, { passive: false });

    sortList.addEventListener('touchend', () => {
        if (draggedItem) draggedItem.classList.remove('dragging');
        draggedItem = null;
        updateHandleNumbers(sortList);
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.sort-item:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function updateHandleNumbers(sortList) {
    sortList.querySelectorAll('.sort-item').forEach((item, idx) => {
        item.querySelector('.sort-handle').textContent = (idx + 1) + '.';
    });
}

function handleOrderValidation(item, sortList, container, validateBtn) {
    const sortItems = sortList.querySelectorAll('.sort-item');
    const userOrder = Array.from(sortItems).map(el => el.querySelector('.sort-label').textContent);
    const st = getCourseUserAnswers(currentCourseId);
    
    let allCorrect = true;
    sortItems.forEach((el, idx) => {
        const text = el.querySelector('.sort-label').textContent;
        el.setAttribute('draggable', false);
        el.querySelector('.sort-grip').innerHTML = '';
        if (item.correctOrder[idx] === text) {
            el.classList.add('sort-correct');
        } else {
            el.classList.add('sort-wrong');
            allCorrect = false;
        }
    });

    st.userAnswers[currentIndex] = { userOrder: userOrder, isCorrect: allCorrect };
    st.answeredCount++;
    if (allCorrect) st.score++;
    saveCourseStats();
    updateScoreDisplay();

    validateBtn.remove();
    showExplanation(container, item, allCorrect);
    renderMathInContainer(container);

    if (allCorrect) {
        currentSpeechText = "Bravo, l'ordre est parfait !";
    } else {
        currentSpeechText = "L'ordre n'est pas tout à fait correct. Voici le bon ordre.";
    }
    speak(currentSpeechText);
}

// ==========================================
// MODE CASES À COCHER (sélection multiple)
// ==========================================
function renderCheckboxView(item) {
    const container = document.createElement('div');
    container.className = 'qcm-container';

    const qCard = document.createElement('div');
    qCard.className = 'qcm-question-card';
    qCard.innerHTML = item.question + '<div class="type-badge checkbox-badge">☑ Cochez les bonnes réponses</div>';
    container.appendChild(qCard);

    const st = getCourseUserAnswers(currentCourseId);
    const previousAnswer = st.userAnswers[currentIndex];
    const isAnswered = !!previousAnswer;

    const checkList = document.createElement('div');
    checkList.className = 'options-list';

    item.allItems.forEach((text) => {
        const optBtn = document.createElement('button');
        optBtn.className = 'option-btn checkbox-option';
        optBtn.setAttribute('data-text', text);

        const checkbox = document.createElement('span');
        checkbox.className = 'checkbox-box';
        checkbox.innerHTML = '';

        const label = document.createElement('span');
        label.className = 'option-text';
        label.innerHTML = text;

        optBtn.appendChild(checkbox);
        optBtn.appendChild(label);

        const isCorrectItem = item.correctItems.includes(text);

        if (isAnswered) {
            optBtn.disabled = true;
            const wasChecked = previousAnswer.checked.includes(text);
            if (isCorrectItem && wasChecked) {
                optBtn.classList.add('correct');
                checkbox.innerHTML = '✓';
            } else if (isCorrectItem && !wasChecked) {
                optBtn.classList.add('revealed-correct');
                checkbox.innerHTML = '✓';
            } else if (!isCorrectItem && wasChecked) {
                optBtn.classList.add('wrong');
                checkbox.innerHTML = '✕';
            }
        } else {
            optBtn.addEventListener('click', () => {
                optBtn.classList.toggle('checked');
                checkbox.innerHTML = optBtn.classList.contains('checked') ? '✓' : '';
            });
        }

        checkList.appendChild(optBtn);
    });

    container.appendChild(checkList);

    if (!isAnswered) {
        const validateBtn = document.createElement('button');
        validateBtn.className = 'validate-btn';
        validateBtn.textContent = '✓ Valider ma sélection';
        validateBtn.addEventListener('click', () => {
            handleCheckboxValidation(item, checkList, container, validateBtn);
        });
        container.appendChild(validateBtn);

        currentSpeechText = item.question;
        speak(currentSpeechText);
    } else {
        showExplanation(container, item, previousAnswer.isCorrect);
        currentSpeechText = previousAnswer.isCorrect
            ? "Parfait, toutes les bonnes réponses sont cochées !"
            : "Certaines réponses ne sont pas correctes.";
    }

    feedContainer.appendChild(container);
}

function handleCheckboxValidation(item, checkList, container, validateBtn) {
    const allBtns = checkList.querySelectorAll('.checkbox-option');
    const checkedTexts = [];
    const st = getCourseUserAnswers(currentCourseId);
    
    allBtns.forEach(btn => {
        if (btn.classList.contains('checked')) {
            checkedTexts.push(btn.getAttribute('data-text'));
        }
    });

    let allCorrect = true;
    allBtns.forEach(btn => {
        const text = btn.getAttribute('data-text');
        const isCorrectItem = item.correctItems.includes(text);
        const wasChecked = checkedTexts.includes(text);
        const checkbox = btn.querySelector('.checkbox-box');
        btn.disabled = true;

        if (isCorrectItem && wasChecked) {
            btn.classList.remove('checked');
            btn.classList.add('correct');
            checkbox.innerHTML = '✓';
        } else if (isCorrectItem && !wasChecked) {
            btn.classList.add('revealed-correct');
            checkbox.innerHTML = '✓';
            allCorrect = false;
        } else if (!isCorrectItem && wasChecked) {
            btn.classList.remove('checked');
            btn.classList.add('wrong');
            checkbox.innerHTML = '✕';
            allCorrect = false;
        }
    });

    st.userAnswers[currentIndex] = { checked: checkedTexts, isCorrect: allCorrect };
    st.answeredCount++;
    if (allCorrect) st.score++;
    saveCourseStats();
    updateScoreDisplay();

    validateBtn.remove();
    showExplanation(container, item, allCorrect);
    renderMathInContainer(container);

    if (allCorrect) {
        currentSpeechText = "Parfait, toutes les bonnes réponses sont cochées !";
    } else {
        currentSpeechText = "Certaines réponses sont incorrectes ou manquantes.";
    }
    speak(currentSpeechText);
}

// ==========================================
// EXPLICATION COMMUNE
// ==========================================
function showExplanation(container, item, isCorrect) {
    let explCard = container.querySelector('.explanation-card');
    if (!explCard) {
        explCard = document.createElement('div');
        explCard.className = 'explanation-card';
        container.appendChild(explCard);
    }

    const statusHtml = isCorrect 
        ? "<div class='explanation-header verdict-success'><span>✓</span> Bonne réponse !</div>"
        : "<div class='explanation-header verdict-error'><span>✕</span> Réponse incorrecte</div>";

    explCard.innerHTML = statusHtml + 
        "<div class='explanation-content'>" + item.answer + "</div>";
}

// ==========================================
// MODE CARTE (Flashcard classique)
// ==========================================
function renderCardView(item) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = "<div class='card-question'>" + item.question + "</div>" +
                     "<div class='card-hint'>Appuyer pour voir la réponse</div>" +
                     "<div class='card-answer'>" + item.answer + "</div>";

    card.addEventListener('click', () => {
        const isShowing = card.classList.toggle('show-answer');
        if (isShowing) {
            currentSpeechText = item.cleanAnswer;
            speak(currentSpeechText);
        } else {
            currentSpeechText = item.question;
            speak(currentSpeechText);
        }
    });

    feedContainer.appendChild(card);
    currentSpeechText = item.question;
    speak(currentSpeechText);
}

// ==========================================
// CONTRÔLES GLOBAUX
// ==========================================
modeBtn.addEventListener('click', () => {
    currentMode = currentMode === 'qcm' ? 'card' : 'qcm';
    localStorage.setItem('revision_mode', currentMode);
    modeText.textContent = currentMode === 'qcm' ? 'Mode QCM' : 'Mode Carte';
    scoreBadge.style.display = currentMode === 'qcm' ? 'block' : 'none';
    renderCurrentQuestion();
});

repeatBtn.addEventListener('click', () => {
    speak(currentSpeechText);
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderCurrentQuestion();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < questionsData.length - 1) {
        currentIndex++;
        renderCurrentQuestion();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextBtn.click();
    } else if (e.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (e.key === 'Escape') {
        closeMenu();
    } else if (currentMode === 'qcm') {
        const keyMap = { '1': 0, 'a': 0, 'A': 0, '2': 1, 'b': 1, 'B': 1, '3': 2, 'c': 2, 'C': 2, '4': 3, 'd': 3, 'D': 3 };
        if (e.key in keyMap) {
            const idx = keyMap[e.key];
            const optBtns = feedContainer.querySelectorAll('.option-btn');
            if (optBtns && optBtns[idx] && !optBtns[idx].disabled) {
                optBtns[idx].click();
            }
        }
    }
});

// Menu Latéral & Sommaire
function openMenu() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
}

function closeMenu() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
}

menuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
sidebarOverlay.addEventListener('click', closeMenu);

function buildNavigationMenu() {
    sidebarContent.innerHTML = '';

    // Section 1 : Sélecteur de Cours
    const courseSection = document.createElement('div');
    courseSection.className = 'menu-course-section';
    courseSection.innerHTML = '<div class="menu-section-title">📚 Sélection du Cours</div>';

    const courseList = document.createElement('div');
    courseList.className = 'course-pills';

    Object.values(allCourses).forEach(c => {
        const pill = document.createElement('button');
        pill.className = 'course-pill' + (c.id === currentCourseId ? ' active' : '');
        pill.innerHTML = (c.icon ? c.icon + ' ' : '') + c.title;
        pill.addEventListener('click', () => selectCourse(c.id));
        courseList.appendChild(pill);
    });

    courseSection.appendChild(courseList);
    sidebarContent.appendChild(courseSection);

    // Section 2 : Sommaire du cours actif
    const tocSection = document.createElement('div');
    tocSection.className = 'menu-toc-section';
    tocSection.innerHTML = '<div class="menu-section-title">📑 Sommaire du Cours</div>';

    let currentC = null;
    let currentS = null;

    questionsData.forEach((q, index) => {
        if (q.chapitre !== currentC) {
            const chapEl = document.createElement('div');
            chapEl.className = 'menu-chapter';
            chapEl.textContent = q.chapitre;
            chapEl.addEventListener('click', () => {
                currentIndex = index;
                renderCurrentQuestion();
                closeMenu();
            });
            tocSection.appendChild(chapEl);
            currentC = q.chapitre;
            currentS = null;
        }

        if (q.sousPoint !== currentS && q.sousPoint !== 'Généralités') {
            const spEl = document.createElement('div');
            spEl.className = 'menu-souspoint';
            spEl.textContent = q.sousPoint;
            spEl.addEventListener('click', () => {
                currentIndex = index;
                renderCurrentQuestion();
                closeMenu();
            });
            tocSection.appendChild(spEl);
            currentS = q.sousPoint;
        }
    });

    sidebarContent.appendChild(tocSection);
}

// Initialisation
modeText.textContent = currentMode === 'qcm' ? 'Mode QCM' : 'Mode Carte';
scoreBadge.style.display = currentMode === 'qcm' ? 'block' : 'none';
buildNavigationMenu();
renderCurrentQuestion();
