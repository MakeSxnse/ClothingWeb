const targetElement = document.getElementById('targetElement');

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;  // Pozice scrollu
    let elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;  // Pozice elementu

    // Změní opacity na základě scroll pozice
    let distance = elementPosition - scrollPosition;
    
    // Změna opacity v závislosti na pozici scrollu
    if (distance < 200) {
        targetElement.style.opacity = 1;
    } else if (distance < 500) {
        targetElement.style.opacity = 1;
    } else {
        targetElement.style.opacity = 0;
    }
});
