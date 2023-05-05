document.querySelector('.mobile-icon.open').addEventListener('click', () => {
    document.querySelector('.navigation__wrapper').classList.add('active');
});
document.querySelector('.mobile-icon.close').addEventListener('click', () => {
    document.querySelector('.navigation__wrapper').classList.remove('active');
});

// Animation au scroll de la page
window.addEventListener('scroll', ()=> {
    let scrollposY = window.scrollY;
    
    if (scrollposY > 50) {
        document.querySelector('header').classList.add('active')
    }else{
        document.querySelector('header').classList.remove('active');
    }
});

let menuLinks = document.querySelectorAll('.menu li');
for(let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', () => {
        for(let x = 0; x < menuLinks.length; x++) {
            menuLinks[x].classList.remove('current__item');

        }
        menuLinks[i].classList.add('current__item');
    });
}

let switcherContent = document.querySelectorAll('input[type="radio"]');
for(let i = 0; i < switcherContent.length; i++) {
    switcherContent[i].addEventListener('click', (e) => {
        if(switcherContent[i].checked == true && switcherContent[i].id == 'boutique') {
            window.setTimeout(function(){
                document.querySelector('.application-wrapper.boutique').style.display = "flex";
            },300);

            window.setTimeout(function(){
                document.querySelector('.application-wrapper.mes-billets').style.display = "none";
            },400);
        }
        else {
            window.setTimeout(function(){
                document.querySelector('.application-wrapper.mes-billets').style.display = "flex";
            },300);

            window.setTimeout(function(){
                document.querySelector('.application-wrapper.boutique').style.display = "none";
            },400);
        }
    });
}

// Récupérer tous les éléments accordéon
let serviceCards = document.querySelectorAll('.cards-wrapper .service-card');

// Récupérer mon image pour y ajouter l'animation mockupSlideInRight
let serviceMockup = document.querySelector('.application-wrapper.cybsafe .media-wrapper > img');

// Récupérer les éléments liées à chacun des mockup du switch
let serviceFeatures = document.querySelectorAll('.application-wrapper.cybsafe .media-wrapper > .features-wrapper');

// // Fonction pour récupérer l'élément cliqué et y ajouter ou enlever la classe "open"
// function toggleAccordion(event) {
//     let target = event.currentTarget;
//     let isOpen = target.classList.contains('open');
    
//     for (let x = 0; x < serviceCards.length; x++) {
//         serviceCards[x].classList.remove('open');
//     }

//     // Retirer la classe "mockupSlideInRight" lors de la fin de l'animation
//     serviceMockup.addEventListener('animationend', () => {
//         serviceMockup.classList.remove('mockupSlideInRight');
//     });

//     if (!isOpen) {
//         // Ajouter la classe "open" à l'élément cliqué et la classe "mockupSlideInRight"
//         target.classList.add('open');

//         // Changer l'image de l'application en fonction de l'accordéon ouvert
//         switch (target.className) {
//             case "service-card chat open":
//                 serviceMockup.src = "./img/phone-mockup-cybsafe-chat.png";

//                 break;
//             case "service-card alert open":
//                 serviceMockup.src = "./img/phone-mockup-cybsafe-localisation.png";

//                 break;
//             case "service-card localisation open":
//                 serviceMockup.src = "./img/phone-mockup-cybsafe-localisation.png";

//                 break;
        
//             default: serviceMockup.src = "./img/phone-mockup-cybsafe-chat.png";
//                 break;
//         }
//         // Ajouter la classe "mockupSlideInRight"
//         serviceMockup.classList.add('mockupSlideInRight');
//     }
// }

// Ajouter un gestionnaire d'événements au clic à chaque élément accordéon
for (let i = 0; i < serviceCards.length; i++) {
    serviceCards[i].addEventListener('click', toggleAccordion);

    // Ajouter le code suivant pour afficher les éléments de l'accordéon "chat" lorsqu'il est déjà ouvert
    if (serviceCards[i].classList.contains('chat') && serviceCards[i].classList.contains('open')) {
        for (let j = 0; j < serviceFeatures.length; j++) {
            if (serviceFeatures[j].classList.contains('chat')) {
                serviceFeatures[j].style.display = "block";
                serviceFeatures[j].classList.add('chatSlideIn');
            } else {
                serviceFeatures[j].style.display = "none";
                serviceFeatures[j].classList.remove('chatSlideIn');
            }
        }
    }
}

// Supprimer l'événement animationend avant de l'enregistrer à nouveau
function toggleAccordion(event) {
    let target = event.currentTarget;
    let isOpen = target.classList.contains('open');

    for (let x = 0; x < serviceCards.length; x++) {
        serviceCards[x].classList.remove('open');
    }

    // Retirer la classe "mockupSlideInRight" lors de la fin de l'animation
    serviceMockup.removeEventListener('animationend', removeMockupSlideInRightClass);
    serviceMockup.addEventListener('animationend', removeMockupSlideInRightClass);

    function removeMockupSlideInRightClass() {
        serviceMockup.classList.remove('mockupSlideInRight');
    }

    if (!isOpen) {
        // Ajouter la classe "open" à l'élément cliqué et la classe "mockupSlideInRight"
        target.classList.add('open');

        // Changer l'image de l'application en fonction de l'accordéon ouvert
        switch (target.className) {
            case "service-card chat open":
                serviceMockup.src = "./img/phone-mockup-cybsafe-chat.png";
                for (let j = 0; j < serviceFeatures.length; j++) {
                    if (serviceFeatures[j].classList.contains('chat')) {
                        serviceFeatures[j].style.display = "block";
                    } else {
                        serviceFeatures[j].style.display = "none";
                    }
                }
                break;
            case "service-card alert open":
                serviceMockup.src = "./img/phone-mockup-cybsafe-alert.png";
                for (let j = 0; j < serviceFeatures.length; j++) {
                    if (serviceFeatures[j].classList.contains('alert')) {
                        serviceFeatures[j].style.display = "block";
                    } else {
                        serviceFeatures[j].style.display = "none";
                    }
                }
                break;
            case "service-card localisation open":
                serviceMockup.src = "./img/phone-mockup-cybsafe-localisation.png";
                for (let j = 0; j < serviceFeatures.length; j++) {
                    if (serviceFeatures[j].classList.contains('localisation')) {
                        serviceFeatures[j].style.display = "block";
                    } else {
                        serviceFeatures[j].style.display = "none";
                    }
                }
                break;
            default:
                serviceMockup.src = "./img/phone-mockup-cybsafe-chat.png";
                break;
        }
        // Ajouter la classe "mockupSlideInRight"
        serviceMockup.classList.add('mockupSlideInRight');
    }
}

  