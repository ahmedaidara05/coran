// Données du Coran (extrait)
const coranData = {
  "sourates": [
    {
      "position": 1,
      "nom": "سورة الفاتحة",
      "nom_phonetique": "Al-Faatiha",
      "englishNameTranslation": "The Opening",
      "revelation": "Mecquoise",
      "versets": [
        {
          "position": 1,
          "text": "Au nom d'Allah, le Tout Miséricordieux, le Très Miséricordieux.",
          "position_ds_sourate": 1,
          "juz": 1,
          "manzil": 1,
          "page": 1,
          "ruku": 1,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "﻿بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"
        },
        {
          "position": 2,
          "text": "Louange à Allah, Seigneur de l'univers.",
          "position_ds_sourate": 2,
          "juz": 1,
          "manzil": 1,
          "page": 1,
          "ruku": 1,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ"
        },
        {
          "position": 3,
          "text": "Le Tout Miséricordieux, le Très Miséricordieux,",
          "position_ds_sourate": 3,
          "juz": 1,
          "manzil": 1,
          "page": 1,
          "ruku": 1,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"
        },
        {
          "position": 4,
          "text": "Maître du Jour de la rétribution.",
          "position_ds_sourate": 4,
          "juz": 1,
          "manzil": 1,
          "page": 1,
          "ruku": 1,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "مَٰلِكِ يَوْمِ ٱلدِّينِ"
        },
        {
          "position": 5,
          "text": "C'est Toi [Seul] que nous adorons, et c'est Toi [Seul] dont nous implorons secours.",
          "position_ds_sourate": 5,
          "juz": 1,
          "manzil": 1,
          "page": 1,
          "ruku": 1,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ"
        },
        {
          "position": 6,
          "text": "Guide-nous dans le droit chemin,",
          "position_ds_sourate": 6,
          "juz": 1,
          "manzil": 1,
          "page": 1,
          "ruku": 1,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ"
        },
        {
          "position": 7,
          "text": "le chemin de ceux que Tu as comblés de faveurs, non pas de ceux qui ont encouru Ta colère, ni des égarés.",
          "position_ds_sourate": 7,
          "juz": 1,
          "manzil": 1,
          "page": 1,
          "ruku": 1,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ"
        }
      ],
      "nom_sourate": "Prologue"
    },
    {
      "position": 2,
      "nom": "سورة البقرة",
      "nom_phonetique": "Al-Baqara",
      "englishNameTranslation": "The Cow",
      "revelation": "Medinois",
      "versets": [
        {
          "position": 8,
          "text": "Alif, Lâm, Mim.",
          "position_ds_sourate": 1,
          "juz": 1,
          "manzil": 1,
          "page": 2,
          "ruku": 2,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "الٓمٓ"
        },
        {
          "position": 9,
          "text": "C'est le Livre au sujet duquel il n'y a aucun doute, c'est un guide pour les pieux,",
          "position_ds_sourate": 2,
          "juz": 1,
          "manzil": 1,
          "page": 2,
          "ruku": 2,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "ذَٰلِكَ ٱلْكِتَٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ"
        },
        {
          "position": 10,
          "text": "qui croient à l'invisible et accomplissent la Salât et dépensent (dans l'obéissance à Allah), de ce que Nous leur avons attribué,",
          "position_ds_sourate": 3,
          "juz": 1,
          "manzil": 1,
          "page": 2,
          "ruku": 2,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "ٱلَّذِينَ يُؤْمِنُونَ بِٱلْغَيْبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ"
        },
        {
          "position": 11,
          "text": "Ceux qui croient à ce qui t'a été descendu (révélé) et à ce qui a été descendu avant toi et qui croient fermement à la vie future.",
          "position_ds_sourate": 4,
          "juz": 1,
          "manzil": 1,
          "page": 2,
          "ruku": 2,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "وَٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ إِلَيْكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِٱلْءَاخِرَةِ هُمْ يُوقِنُونَ"
        },
        {
          "position": 12,
          "text": "Ceux-là sont sur le bon chemin de leur Seigneur, et ce sont eux qui réussissent (dans cette vie et dans la vie future).",
          "position_ds_sourate": 5,
          "juz": 1,
          "manzil": 1,
          "page": 2,
          "ruku": 2,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "أُو۟لَٰٓئِكَ عَلَىٰ هُدًۭى مِّن رَّبِّهِمْ ۖ وَأُو۟لَٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ"
        },
        {
          "position": 13,
          "text": "[Mais] certes les infidèles que tu les avertisses ou que tu ne les avertisses pas, ils ne croient pas.",
          "position_ds_sourate": 6,
          "juz": 1,
          "manzil": 1,
          "page": 3,
          "ruku": 2,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "إِنَّ ٱلَّذِينَ كَفَرُوا۟ سَوَآءٌ عَلَيْهِمْ ءَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ"
        },
        {
          "position": 14,
          "text": "Allah a scellé leurs cœurs et leurs oreilles; et un voile épais leur couvre la vue; et pour eux il y aura un grand châtiment.",
          "position_ds_sourate": 7,
          "juz": 1,
          "manzil": 1,
          "page": 3,
          "ruku": 2,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "خَتَمَ ٱللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ ۖ وَعَلَىٰٓ أَبْصَٰرِهِمْ غِشَٰوَةٌۭ ۖ وَلَهُمْ عَذَابٌ عَظِيمٌۭ"
        },
        {
          "position": 15,
          "text": "Parmi les gens, il y a ceux qui disent: «Nous croyons en Allah et au Jour dernier!» tandis qu'en fait, ils n'y croient pas.",
          "position_ds_sourate": 8,
          "juz": 1,
          "manzil": 1,
          "page": 3,
          "ruku": 3,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "وَمِنَ ٱلنَّاسِ مَن يَقُولُ ءَامَنَّا بِٱللَّهِ وَبِٱلْيَوْمِ ٱلْءَاخِرِ وَمَا هُم بِمُؤْمِنِينَ"
        },
        {
          "position": 16,
          "text": "Ils cherchent à tromper Allah et les croyants; mais ils ne trompent qu'eux-mêmes, et ils ne s'en rendent pas compte.",
          "position_ds_sourate": 9,
          "juz": 1,
          "manzil": 1,
          "page": 3,
          "ruku": 3,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "يُخَٰدِعُونَ ٱللَّهَ وَٱلَّذِينَ ءَامَنُوا۟ وَمَا يَخْدَعُونَ إِلَّآ أَنفُسَهُمْ وَمَا يَشْعُرُونَ"
        },
        {
          "position": 17,
          "text": "Il y a dans leurs cœurs une maladie (de doute et d'hypocrisie), et Allah laisse croître leur maladie. Ils auront un châtiment douloureux, pour avoir menti.",
          "position_ds_sourate": 10,
          "juz": 1,
          "manzil": 1,
          "page": 3,
          "ruku": 3,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "فِى قُلُوبِهِم مَّرَضٌۭ فَزَادَهُمُ ٱللَّهُ مَرَضًۭا ۖ وَلَهُمْ عَذَابٌ أَلِيمٌۢ بِمَا كَانُوا۟ يَكْذِبُونَ"
        },
        {
          "position": 18,
          "text": "Et quand on leur dit: «Ne semez pas la corruption sur la terre», ils disent: «Au contraire nous ne sommes que des réformateurs!»",
          "position_ds_sourate": 11,
          "juz": 1,
          "manzil": 1,
          "page": 3,
          "ruku": 3,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا۟ فِى ٱلْأَرْضِ قَالُوٓا۟ إِنَّمَا نَحْنُ مُصْلِحُونَ"
        },
        {
          "position": 19,
          "text": "Certes, ce sont eux les véritables corrupteurs, mais ils ne s'en rendent pas compte.",
          "position_ds_sourate": 12,
          "juz": 1,
          "manzil": 1,
          "page": 3,
          "ruku": 3,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "أَلَآ إِنَّهُمْ هُمُ ٱلْمُفْسِدُونَ وَلَٰكِن لَّa يَشْعُرُونَ"
        },
        {
          "position": 20,
          "text": "Et quand on leur dit: «Croyez comme les gens ont cru», ils disent: «Croirons-nous comme ont cru les faibles d'esprit?» Certes, ce sont eux les véritables faibles d'esprit, mais ils ne le savent pas.",
          "position_ds_sourate": 13,
          "juz": 1,
          "manzil": 1,
          "page": 3,
          "ruku": 3,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "وَإِذَا قِيلَ لَهُمْ ءَامِنُوا۟ كَمَآ ءَامَنَ ٱلنَّاسُ قَالُوٓا۟ أَنُؤْمِنُ كَمَآ ءَامَنَ ٱلسُّفَهَآءُ ۗ أَلَآ إِنَّهُمْ هُمُ ٱلسُّفَهَآءُ وَلَٰكِن لَّا يَعْلَمُونَ"
        },
        {
          "position": 21,
          "text": "Quand ils rencontrent ceux qui ont cru, ils disent: «Nous croyons» mais quand ils se trouvent seuls avec leurs diables, ils disent: «Nous sommes avec vous; en effet nous ne faisions que nous moquer (d'eux)».",
          "position_ds_sourate": 14,
          "juz": 1,
          "manzil": 1,
          "page": 3,
          "ruku": 3,
          "hizbQuarter": 1,
          "sajda": false,
          "text_arabe": "وَإِذَا لَقُوا۟ ٱلَّذِينَ ءَامَنُوا۟ قَالُوٓا۟ ءَامَنَّا وَإِذَا خَلَوْا۟ إِلَىٰ شَيَٰطِينِهِمْ قَالُoٓا۟ إِنَّا مَعَكُمْ إِنَّمَا نَحْنُ مُسْتَهْزِءُونَ"
        }
      ],
      "nom_sourate": "La Vache"
    }
  ]
};

// État de l'application
let currentState = {
  currentSourate: null,
  currentVerse: null,
  showArabic: true,
  showTranslation: true,
  bookmarks: [],
  recentReadings: [],
  settings: {
    theme: 'light',
    fontFamily: 'system-ui',
    fontSize: 18,
    lineHeight: 2,
    scrollSpeed: 5,
    hideNavReading: false
  },
  autoScroll: {
    active: false,
    interval: null,
    speed: 5
  }
};

// Initialisation de l'application
document.addEventListener('DOMContentLoaded', function() {
  initApp();
});

function initApp() {
  loadSettings();
  renderSouratesList();
  setupEventListeners();
  updateUI();
}

// Charger les paramètres depuis le localStorage
function loadSettings() {
  const savedSettings = localStorage.getItem('quranSettings');
  if (savedSettings) {
    currentState.settings = {...currentState.settings, ...JSON.parse(savedSettings)};
    applySettings();
  }
  
  const savedBookmarks = localStorage.getItem('quranBookmarks');
  if (savedBookmarks) {
    currentState.bookmarks = JSON.parse(savedBookmarks);
  }
  
  const savedRecent = localStorage.getItem('quranRecent');
  if (savedRecent) {
    currentState.recentReadings = JSON.parse(savedRecent);
    updateRecentReadings();
  }
}

// Sauvegarder les paramètres dans le localStorage
function saveSettings() {
  localStorage.setItem('quranSettings', JSON.stringify(currentState.settings));
  localStorage.setItem('quranBookmarks', JSON.stringify(currentState.bookmarks));
  localStorage.setItem('quranRecent', JSON.stringify(currentState.recentReadings));
}

// Appliquer les paramètres à l'interface
function applySettings() {
  const { theme, fontFamily, fontSize, lineHeight, hideNavReading } = currentState.settings;
  
  // Appliquer le thème
  document.documentElement.setAttribute('data-theme', theme);
  
  // Appliquer la police
  document.documentElement.style.setProperty('--french-font', fontFamily);
  
  // Appliquer la taille de police
  document.documentElement.style.setProperty('--font-size', `${fontSize}px`);
  document.getElementById('font-size').value = fontSize;
  document.getElementById('font-size-value').textContent = `${fontSize}px`;
  
  // Appliquer l'interligne
  document.documentElement.style.setProperty('--line-height', lineHeight);
  document.getElementById('line-height').value = lineHeight;
  document.getElementById('line-height-value').textContent = lineHeight;
  
  // Appliquer la vitesse de défilement
  document.getElementById('scroll-speed').value = currentState.settings.scrollSpeed;
  document.getElementById('scroll-speed-value').textContent = currentState.settings.scrollSpeed;
  document.getElementById('modal-scroll-speed').value = currentState.settings.scrollSpeed;
  document.getElementById('modal-speed-value').textContent = currentState.settings.scrollSpeed;
  
  // Sélectionner le thème dans le menu
  document.getElementById('theme-select').value = theme;
  
  // Sélectionner la police dans le menu
  document.getElementById('font-family').value = fontFamily;
  
  // Cacher la navigation en lecture si nécessaire
  if (hideNavReading) {
    document.getElementById('hide-nav-reading').checked = true;
  }
}

// Mettre à jour l'interface utilisateur
function updateUI() {
  // Mettre à jour les boutons de langue
  document.getElementById('toggle-arabic').classList.toggle('active', currentState.showArabic);
  document.getElementById('toggle-translation').classList.toggle('active', currentState.showTranslation);
  
  // Mettre à jour les favoris
  renderBookmarks();
}

// Configurer les écouteurs d'événements
function setupEventListeners() {
  // Menu toggle
  document.getElementById('menu-toggle').addEventListener('click', toggleSidebar);
  document.getElementById('sidebar-close').addEventListener('click', toggleSidebar);
  document.getElementById('overlay').addEventListener('click', toggleSidebar);
  
  // Recherche
  document.getElementById('search-toggle').addEventListener('click', toggleSearch);
  document.getElementById('search-close').addEventListener('click', toggleSearch);
  document.getElementById('search-input').addEventListener('input', handleSearch);
  
  // Navigation inférieure
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      switchScreen(this.dataset.target);
    });
  });
  
  // Navigation dans les sourates
  document.getElementById('goto-feature').addEventListener('click', toggleSidebar);
  document.getElementById('bookmarks-feature').addEventListener('click', () => switchScreen('bookmarks-screen'));
  document.getElementById('settings-feature').addEventListener('click', () => switchScreen('settings-screen'));
  
  // Contrôles de lecture
  document.getElementById('toggle-arabic').addEventListener('click', () => {
    currentState.showArabic = !currentState.showArabic;
    updateUI();
    if (currentState.currentSourate !== null) {
      renderSourate(currentState.currentSourate);
    }
  });
  
  document.getElementById('toggle-translation').addEventListener('click', () => {
    currentState.showTranslation = !currentState.showTranslation;
    updateUI();
    if (currentState.currentSourate !== null) {
      renderSourate(currentState.currentSourate);
    }
  });
  
  document.getElementById('auto-scroll').addEventListener('click', toggleAutoScroll);
  
  document.getElementById('prev-sourate').addEventListener('click', goToPreviousSourate);
  document.getElementById('next-sourate').addEventListener('click', goToNextSourate);
  
  // Paramètres
  document.getElementById('theme-select').addEventListener('change', function() {
    currentState.settings.theme = this.value;
    applySettings();
    saveSettings();
  });
  
  document.getElementById('font-family').addEventListener('change', function() {
    currentState.settings.fontFamily = this.value;
    applySettings();
    saveSettings();
  });
  
  document.getElementById('font-size').addEventListener('input', function() {
    const size = this.value;
    document.documentElement.style.setProperty('--font-size', `${size}px`);
    document.getElementById('font-size-value').textContent = `${size}px`;
    currentState.settings.fontSize = parseInt(size);
    saveSettings();
  });
  
  document.getElementById('line-height').addEventListener('input', function() {
    const height = this.value;
    document.documentElement.style.setProperty('--line-height', height);
    document.getElementById('line-height-value').textContent = height;
    currentState.settings.lineHeight = parseFloat(height);
    saveSettings();
  });
  
  document.getElementById('scroll-speed').addEventListener('input', function() {
    const speed = this.value;
    document.getElementById('scroll-speed-value').textContent = speed;
    document.getElementById('modal-scroll-speed').value = speed;
    document.getElementById('modal-speed-value').textContent = speed;
    currentState.settings.scrollSpeed = parseInt(speed);
    if (currentState.autoScroll.active) {
      stopAutoScroll();
      startAutoScroll();
    }
    saveSettings();
  });
  
  document.getElementById('hide-nav-reading').addEventListener('change', function() {
    currentState.settings.hideNavReading = this.checked;
    saveSettings();
  });
  
  document.getElementById('reset-settings').addEventListener('click', resetSettings);
  
  // Contrôles du défilement automatique
  document.getElementById('modal-scroll-speed').addEventListener('input', function() {
    const speed = this.value;
    document.getElementById('modal-speed-value').textContent = speed;
    document.getElementById('scroll-speed').value = speed;
    document.getElementById('scroll-speed-value').textContent = speed;
    currentState.settings.scrollSpeed = parseInt(speed);
    if (currentState.autoScroll.active) {
      stopAutoScroll();
      startAutoScroll();
    }
    saveSettings();
  });
  
  document.getElementById('pause-scroll').addEventListener('click', pauseAutoScroll);
  document.getElementById('resume-scroll').addEventListener('click', resumeAutoScroll);
  document.getElementById('stop-scroll').addEventListener('click', stopAutoScroll);
  document.getElementById('close-scroll-modal').addEventListener('click', () => {
    document.getElementById('auto-scroll-modal').classList.add('hidden');
  });
  
  // Navigation par swipe
  setupSwipeNavigation();
}

// Basculer la sidebar
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  
  sidebar.classList.toggle('visible');
  overlay.classList.toggle('hidden');
}

// Basculer la barre de recherche
function toggleSearch() {
  const searchBar = document.getElementById('search-bar');
  searchBar.classList.toggle('hidden');
  
  if (!searchBar.classList.contains('hidden')) {
    document.getElementById('search-input').focus();
  }
}

// Changer d'écran
function switchScreen(screenId) {
  // Cacher tous les écrans
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Désactiver tous les boutons de navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Afficher l'écran demandé
  document.getElementById(screenId).classList.add('active');
  
  // Activer le bouton de navigation correspondant
  document.querySelector(`.nav-btn[data-target="${screenId}"]`).classList.add('active');
  
  // Si on passe à l'écran de lecture et que la navigation doit être cachée
  if (screenId === 'reading-screen' && currentState.settings.hideNavReading) {
    setTimeout(() => {
      document.getElementById('header').style.transform = 'translateY(-100%)';
      document.getElementById('bottom-nav').style.transform = 'translateY(100%)';
    }, 2000);
  } else {
    document.getElementById('header').style.transform = 'translateY(0)';
    document.getElementById('bottom-nav').style.transform = 'translateY(0)';
  }
}

// Rendre la liste des sourates
function renderSouratesList() {
  const container = document.getElementById('sourates-list');
  container.innerHTML = '';
  
  coranData.sourates.forEach(sourate => {
    const item = document.createElement('div');
    item.className = 'sourate-item';
    item.innerHTML = `
      <span>${sourate.position}. ${sourate.nom_phonetique}</span>
      <span class="sourate-number">${sourate.versets.length}</span>
    `;
    
    item.addEventListener('click', () => {
      openSourate(sourate.position - 1);
      toggleSidebar();
    });
    
    container.appendChild(item);
  });
}

// Ouvrir une sourate
function openSourate(index) {
  currentState.currentSourate = index;
  renderSourate(index);
  switchScreen('reading-screen');
  
  // Ajouter à l'historique de lecture
  addToRecentReadings(index);
}

// Rendre une sourate
function renderSourate(index) {
  const sourate = coranData.sourates[index];
  const container = document.getElementById('verses-container');
  
  // Mettre à jour l'en-tête
  document.getElementById('sourate-name').textContent = `${sourate.position}. ${sourate.nom_phonetique} - ${sourate.nom_sourate}`;
  document.getElementById('sourate-revelation').textContent = sourate.revelation;
  document.getElementById('verses-count').textContent = sourate.versets.length;
  document.getElementById('current-title').textContent = sourate.nom_phonetique;
  
  // Rendre les versets
  container.innerHTML = '';
  
  sourate.versets.forEach(verse => {
    const verseElement = document.createElement('div');
    verseElement.className = 'verse';
    
    let content = `
      <div class="verse-header">
        <span class="verse-number">${verse.position_ds_sourate}</span>
        <span>Juz ${verse.juz}, Page ${verse.page}</span>
      </div>
    `;
    
    if (currentState.showArabic) {
      content += `
        <div class="verse-arabic">${verse.text_arabe}</div>
      `;
    }
    
    if (currentState.showTranslation) {
      content += `
        <div class="verse-translation">${verse.text}</div>
      `;
    }
    
    content += `
      <div class="verse-actions">
        <button class="bookmark-btn" data-sourate="${index}" data-verse="${verse.position_ds_sourate - 1}">
          <i class="fas fa-bookmark"></i> Favori
        </button>
        <button class="share-btn">
          <i class="fas fa-share"></i> Partager
        </button>
      </div>
    `;
    
    verseElement.innerHTML = content;
    
    // Gérer les favoris
    const bookmarkBtn = verseElement.querySelector('.bookmark-btn');
    const isBookmarked = currentState.bookmarks.some(b => 
      b.sourate === index && b.verse === verse.position_ds_sourate - 1
    );
    
    if (isBookmarked) {
      bookmarkBtn.innerHTML = '<i class="fas fa-bookmark" style="color: var(--primary-color)"></i> Favori';
    }
    
    bookmarkBtn.addEventListener('click', function() {
      const sourateIndex = parseInt(this.dataset.sourate);
      const verseIndex = parseInt(this.dataset.verse);
      toggleBookmark(sourateIndex, verseIndex, this);
    });
    
    // Gérer le partage
    verseElement.querySelector('.share-btn').addEventListener('click', () => {
      shareVerse(sourate.position, verse.position_ds_sourate);
    });
    
    container.appendChild(verseElement);
  });
  
  // Faire défiler vers le haut
  container.scrollTo(0, 0);
}

// Aller à la sourate précédente
function goToPreviousSourate() {
  if (currentState.currentSourate > 0) {
    openSourate(currentState.currentSourate - 1);
  }
}

// Aller à la sourate suivante
function goToNextSourate() {
  if (currentState.currentSourate < coranData.sourates.length - 1) {
    openSourate(currentState.currentSourate + 1);
  }
}

// Basculer le défilement automatique
function toggleAutoScroll() {
  if (currentState.autoScroll.active) {
    stopAutoScroll();
  } else {
    startAutoScroll();
    // Afficher le modal de contrôle
    document.getElementById('auto-scroll-modal').classList.remove('hidden');
  }
}

// Démarrer le défilement automatique
function startAutoScroll() {
  const speed = 110 - (currentState.settings.scrollSpeed * 10); // Entre 20ms et 100ms
  const container = document.getElementById('verses-container');
  
  currentState.autoScroll = {
    active: true,
    interval: setInterval(() => {
      container.scrollBy(0, 1);
      
      // Si on atteint le bas, arrêter le défilement
      if (container.scrollTop + container.clientHeight >= container.scrollHeight - 10) {
        stopAutoScroll();
      }
    }, speed),
    speed: currentState.settings.scrollSpeed
  };
  
  document.getElementById('auto-scroll').textContent = 'Arrêter défilement';
}

// Mettre en pause le défilement automatique
function pauseAutoScroll() {
  if (currentState.autoScroll.active && currentState.autoScroll.interval) {
    clearInterval(currentState.autoScroll.interval);
    currentState.autoScroll.interval = null;
  }
}

// Reprendre le défilement automatique
function resumeAutoScroll() {
  if (currentState.autoScroll.active && !currentState.autoScroll.interval) {
    startAutoScroll();
  }
}

// Arrêter le défilement automatique
function stopAutoScroll() {
  if (currentState.autoScroll.interval) {
    clearInterval(currentState.autoScroll.interval);
  }
  
  currentState.autoScroll = {
    active: false,
    interval: null,
    speed: 5
  };
  
  document.getElementById('auto-scroll').textContent = 'Défilement auto';
  document.getElementById('auto-scroll-modal').classList.add('hidden');
}

// Gérer la recherche
function handleSearch() {
  const query = this.value.trim().toLowerCase();
  
  if (query.length < 2) {
    switchScreen('home-screen');
    return;
  }
  
  const results = [];
  
  // Rechercher dans les noms de sourates
  coranData.sourates.forEach((sourate, sIndex) => {
    if (sourate.nom_phonetique.toLowerCase().includes(query) || 
        sourate.nom_sourate.toLowerCase().includes(query) ||
        sourate.nom.toLowerCase().includes(query)) {
      results.push({
        type: 'sourate',
        sourate: sIndex,
        text: `${sourate.position}. ${sourate.nom_phonetique} - ${sourate.nom_sourate}`
      });
    }
    
    // Rechercher dans les versets
    sourate.versets.forEach((verse, vIndex) => {
      if (verse.text.toLowerCase().includes(query) || 
          verse.text_arabe.includes(query)) {
        results.push({
          type: 'verse',
          sourate: sIndex,
          verse: vIndex,
          text: `Sourate ${sourate.nom_phonetique}, Verset ${verse.position_ds_sourate}: ${verse.text.substring(0, 100)}...`
        });
      }
    });
  });
  
  // Afficher les résultats
  renderSearchResults(results);
  switchScreen('search-screen');
}

// Rendre les résultats de recherche
function renderSearchResults(results) {
  const container = document.getElementById('search-results');
  
  if (results.length === 0) {
    container.innerHTML = '<p class="empty-state">Aucun résultat trouvé</p>';
    return;
  }
  
  container.innerHTML = '';
  
  results.forEach(result => {
    const item = document.createElement('div');
    item.className = 'search-result-item';
    
    item.innerHTML = `
      <div class="result-header">
        <span>${result.type === 'sourate' ? 'Sourate' : 'Verset'}</span>
      </div>
      <div class="result-verse">${result.text}</div>
    `;
    
    item.addEventListener('click', () => {
      if (result.type === 'sourate') {
        openSourate(result.sourate);
      } else {
        openSourate(result.sourate);
        // Faire défiler jusqu'au verset
        setTimeout(() => {
          const verseElement = document.querySelector(`.verse:nth-child(${result.verse + 1})`);
          if (verseElement) {
            verseElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    });
    
    container.appendChild(item);
  });
}

// Basculer un favori
function toggleBookmark(sourateIndex, verseIndex, button) {
  const existingIndex = currentState.bookmarks.findIndex(b => 
    b.sourate === sourateIndex && b.verse === verseIndex
  );
  
  if (existingIndex >= 0) {
    // Retirer des favoris
    currentState.bookmarks.splice(existingIndex, 1);
    button.innerHTML = '<i class="fas fa-bookmark"></i> Favori';
  } else {
    // Ajouter aux favoris
    const sourate = coranData.sourates[sourateIndex];
    const verse = sourate.versets[verseIndex];
    
    currentState.bookmarks.push({
      sourate: sourateIndex,
      verse: verseIndex,
      sourateName: sourate.nom_phonetique,
      verseNumber: verse.position_ds_sourate,
      verseText: verse.text.substring(0, 50) + '...',
      timestamp: new Date().getTime()
    });
    
    button.innerHTML = '<i class="fas fa-bookmark" style="color: var(--primary-color)"></i> Favori';
  }
  
  saveSettings();
  renderBookmarks();
}

// Rendre les favoris
function renderBookmarks() {
  const container = document.getElementById('bookmarks-container');
  
  if (currentState.bookmarks.length === 0) {
    container.innerHTML = '<p class="empty-state">Aucun favori pour le moment</p>';
    return;
  }
  
  // Trier par date (du plus récent au plus ancien)
  const sortedBookmarks = [...currentState.bookmarks].sort((a, b) => b.timestamp - a.timestamp);
  
  container.innerHTML = '';
  
  sortedBookmarks.forEach(bookmark => {
    const item = document.createElement('div');
    item.className = 'bookmark-item';
    
    item.innerHTML = `
      <div class="bookmark-header">
        <span>Sourate ${bookmark.sourateName}</span>
        <span>Verset ${bookmark.verseNumber}</span>
      </div>
      <div class="bookmark-verse">${bookmark.verseText}</div>
    `;
    
    item.addEventListener('click', () => {
      openSourate(bookmark.sourate);
      // Faire défiler jusqu'au verset
      setTimeout(() => {
        const verseElement = document.querySelector(`.verse:nth-child(${bookmark.verse + 1})`);
        if (verseElement) {
          verseElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    });
    
    container.appendChild(item);
  });
}

// Ajouter à l'historique de lecture
function addToRecentReadings(sourateIndex) {
  const existingIndex = currentState.recentReadings.findIndex(r => r.sourate === sourateIndex);
  
  if (existingIndex >= 0) {
    // Mettre à jour le timestamp
    currentState.recentReadings[existingIndex].timestamp = new Date().getTime();
  } else {
    // Ajouter une nouvelle entrée
    const sourate = coranData.sourates[sourateIndex];
    currentState.recentReadings.push({
      sourate: sourateIndex,
      sourateName: sourate.nom_phonetique,
      timestamp: new Date().getTime()
    });
  }
  
  // Garder seulement les 5 plus récents
  if (currentState.recentReadings.length > 5) {
    currentState.recentReadings.sort((a, b) => b.timestamp - a.timestamp);
    currentState.recentReadings = currentState.recentReadings.slice(0, 5);
  }
  
  saveSettings();
  updateRecentReadings();
}

// Mettre à jour les lectures récentes
function updateRecentReadings() {
  const container = document.getElementById('recent-reading');
  
  if (currentState.recentReadings.length === 0) {
    container.innerHTML = '<p>Aucune lecture récente</p>';
    return;
  }
  
  // Trier par date (du plus récent au plus ancien)
  const sortedReadings = [...currentState.recentReadings].sort((a, b) => b.timestamp - a.timestamp);
  
  container.innerHTML = '';
  
  sortedReadings.forEach(reading => {
    const sourate = coranData.sourates[reading.sourate];
    const item = document.createElement('div');
    item.className = 'recent-item';
    
    item.innerHTML = `
      <div>
        <strong>${sourate.position}. ${sourate.nom_phonetique}</strong>
        <span>${sourate.versets.length} versets</span>
      </div>
      <i class="fas fa-chevron-right"></i>
    `;
    
    item.addEventListener('click', () => {
      openSourate(reading.sourate);
    });
    
    container.appendChild(item);
  });
}

// Partager un verset
function shareVerse(sourateNumber, verseNumber) {
  const sourate = coranData.sourates[sourateNumber - 1];
  const verse = sourate.versets[verseNumber - 1];
  
  const shareText = `Sourate ${sourate.nom_phonetique}, Verset ${verseNumber} : ${verse.text}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Verset du Coran',
      text: shareText
    });
  } else {
    // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
    navigator.clipboard.writeText(shareText).then(() => {
      alert('Verset copié dans le presse-papier !');
    });
  }
}

// Réinitialiser les paramètres
function resetSettings() {
  if (confirm('Êtes-vous sûr de vouloir réinitialiser tous les paramètres ?')) {
    currentState.settings = {
      theme: 'light',
      fontFamily: 'system-ui',
      fontSize: 18,
      lineHeight: 2,
      scrollSpeed: 5,
      hideNavReading: false
    };
    
    applySettings();
    saveSettings();
  }
}

// Configurer la navigation par swipe
function setupSwipeNavigation() {
  let touchStartX = 0;
  let touchEndX = 0;
  const mainContent = document.getElementById('main-content');
  
  mainContent.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  });
  
  mainContent.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
  
  function handleSwipe() {
    const minSwipeDistance = 50; // Distance minimale pour considérer un swipe
    
    if (touchEndX < touchStartX - minSwipeDistance) {
      // Swipe gauche -> sourate suivante
      if (currentState.currentSourate !== null) {
        goToNextSourate();
      }
    }
    
    if (touchEndX > touchStartX + minSwipeDistance) {
      // Swipe droite -> sourate précédente
      if (currentState.currentSourate !== null) {
        goToPreviousSourate();
      }
    }
  }
}
