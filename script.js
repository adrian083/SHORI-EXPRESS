// Lógica para el Modal de Login
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeButton = document.querySelector('.close-button');

    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'flex'; 
    });

    closeButton.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });


    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });
});



let slideIndex = 0;
let slides = []; 
function showSlides() {
    if (slides.length === 0) { 
        slides = document.getElementsByClassName("carousel-slide");
        if (slides.length === 0) return; 
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); 
}

function plusSlides(n) {
    if (slides.length === 0) {
        slides = document.getElementsByClassName("carousel-slide");
        if (slides.length === 0) return;
    }
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

document.addEventListener('DOMContentLoaded', () => {
    slides = document.getElementsByClassName("carousel-slide"); 
    if (slides.length > 0) {
        showSlides();
    }
});