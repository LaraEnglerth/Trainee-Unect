$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
        $('.desc_logo').toggleClass('hidden');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

const carrossel = document.getElementById('corpo_carossel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    carrossel.scrollBy({
        left: -carrossel.offsetWidth / 3, // Movimenta 1 card
        behavior: 'smooth'
    });
});

nextButton.addEventListener('click', () => {
    carrossel.scrollBy({
        left: carrossel.offsetWidth / 3, // Movimenta 1 card
        behavior: 'smooth'
    });
});