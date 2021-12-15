const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

});

const scrollToTop = document.getElementById("btnscrollToTop");

scrollToTop.addEventListener("click", function (){
    window.scrollTo ({
        top:0,
        behavior: "smooth"
    })
})
