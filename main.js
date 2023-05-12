//Proyecto de integracion de Js en una pagina web de compras online

//Recoleccion de datos del elementos del HTMl
const menuEmail = document.querySelector('.navbar-email') ;
const desktopMenu = document.querySelector('.desktop-menu') ;
const burgerMenu = document.querySelector('.menu') ;
const mobileMenu = document.querySelector('.mobile-menu') ;

//Interaccion para mostrar menu desplegable al hacer click
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);

//Funcion toggle para menu desplegable
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}


