// Criando menu mobile

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

});

// Botão de arrastar para cima - Scroll to top 

const btnScrollToTop = document.getElementById("btnscrollToTop");

btnScrollToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})


// Dark mode

const darktheme = document.getElementsByClassName ('darkmode');

darktheme.addEventListener("click", function() {
    var darkmode = document.darkmode
} )