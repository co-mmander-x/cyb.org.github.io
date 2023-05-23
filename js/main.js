// Menu Sticky 
window.addEventListener('scroll', ()=> {
    let scrollposY = window.scrollY;
    
    if (scrollposY > 50) {
        document.querySelector('body').classList.add('active')
    }else{
        document.querySelector('body').classList.remove('active');
    }
});

// Menu Mobile
document.querySelector('.mobile-icon.open').addEventListener('click', () => {
    document.querySelector('.navigation__wrapper').classList.add('active');
});
document.querySelector('.mobile-icon.close').addEventListener('click', () => {
    document.querySelector('.navigation__wrapper').classList.remove('active');
});

let menuLinks = document.querySelectorAll('.menu li');
for(let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
        for(let x = 0; x < menuLinks.length; x++) {
            menuLinks[x].classList.remove('current__item');
            document.querySelector('.navigation__wrapper').classList.remove('active');
        }
        menuLinks[i].classList.add('current__item');
    });
}

// CybFest Switcher Content Boutique / Mes billets
let switcherContent = document.querySelectorAll('input[type="radio"]');
for (let i = 0; i < switcherContent.length; i++) {
    switcherContent[i].addEventListener('click', (e) => {
        let target = e.currentTarget;
        let switcherClass = target.getAttribute('data-class');
        let allViews = document.querySelectorAll('.switcher-wrapper .application-wrapper');
        
        // Ajouter la classe "elSlideOut" et rendre visible l'élément cliqué
        for (let x = 0; x < allViews.length; x++) {
            let currentView = allViews[x];
            let currentViewClass = currentView.getAttribute('data-class');

            if (currentViewClass === switcherClass) {
                currentView.style.opacity = "1";
                
            } else {
                currentView.style.opacity = "0";
            }
        }
    });
}
// Gestion des accordéons
// Récupérer tous les éléments accordéon
let allAccordion = document.querySelectorAll('.content-wrapper > ul > li');
// Récupérer toutes les features
let allFeatures = document.querySelectorAll('.cybsafe-wrapper > .media-wrapper > video');

// Ajouter un gestionnaire d'événements au clic à chaque élément accordéon
for (let i = 0; i < allAccordion.length; i++) {
    allAccordion[i].addEventListener('click', (e) => {
        let target = e.currentTarget;
        let isOpen = target.classList.contains('open');
        let accordionClass = target.getAttribute('data-class');

        for (let x = 0; x < allAccordion.length; x++) {
            allAccordion[x].classList.remove('open');
        }
        if (!isOpen) {
            // Ajouter la classe "open" à l'élément cliqué et la classe "elSlideIn"
            target.classList.add('open');
            for (let x = 0; x < allFeatures.length; x++) {
                let feature = allFeatures[x];
                let featureClass = feature.getAttribute('data-class');
                if (featureClass === accordionClass) {
                    for (let i = 0; i < allFeatures.length; i++) {
                        let currentFeature = allFeatures[i];
                        let currentFeatureClass = currentFeature.getAttribute('data-class');
                        if (currentFeatureClass === featureClass) {
                            currentFeature.style.opacity = "1";
                            currentFeature.classList.add('elSlideIn');
                            currentFeature.load();
                        } else {
                            currentFeature.style.opacity = "0";
                            currentFeature.classList.remove('elSlideIn');
                            
                        }
                    }
                }
            }
        }
    });
}

// Animated Section on Scroll 
// Créer un nouvel objet avec l'écran comme élément racine
var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Ajouter la classe lorsque l'élément est visible dans la fenêtre d'affichage
            if (entry.target === mockupMap) {
                entry.target.classList.add('elSlideOut');
            } else if (entry.target === contentMap) {
                entry.target.classList.add('elSlideIn');
            } else if (entry.target === handLeft) {
                entry.target.querySelector('.media-wrapper .metallic-hand.left').classList.add('elSlideOut');
            }
            else if (entry.target === overviewApp) {
                entry.target.querySelectorAll('.switcher-wrapper .application-wrapper > .media-wrapper > img').forEach(el => {
                    el.classList.add('elSlideOut');
                });
                entry.target.querySelectorAll('.switcher-wrapper .application-wrapper > .content-wrapper').forEach(el => {
                    el.classList.add('elSlideIn');
                });
            }
        } else {
            // Supprimer la classe lorsque l'élément n'est plus visible dans la fenêtre d'affichage
            if (entry.target === mockupMap) {
                entry.target.classList.remove('elSlideOut');
            } else if (entry.target === contentMap) {
                entry.target.classList.remove('elSlideIn');
            } else if (entry.target === handLeft) {
                entry.target.querySelector('.media-wrapper .metallic-hand.left').classList.remove('elSlideOut');
            }
            else if (entry.target === overviewApp) {
                entry.target.querySelectorAll('.switcher-wrapper .application-wrapper > .media-wrapper > img').forEach(el => {
                    el.classList.remove('elSlideOut');
                });
                entry.target.querySelectorAll('.switcher-wrapper .application-wrapper > .content-wrapper').forEach(el => {
                    el.classList.remove('elSlideIn');
                });
            }
        }
    });
}, { root: null, threshold: [0] });

// Observer les éléments cibles
let mockupMap = document.querySelector('#interactive-map .media-wrapper > video');
let contentMap = document.querySelector('#interactive-map .content-wrapper');
let overviewApp = document.querySelector('.switcher-wrapper');
let handLeft = document.querySelector('#panels__section');
observer.observe(mockupMap);
observer.observe(contentMap);
observer.observe(handLeft);
observer.observe(overviewApp);

// Animated lines CybFest Logo
anime({
    targets: '.cybfest-animated-logo path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeOutBack',
    duration: 1000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });
