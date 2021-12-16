const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');


menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

});

const btnScrollToTop = document.getElementById("btnscrollToTop");

btnScrollToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})