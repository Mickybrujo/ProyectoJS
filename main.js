//Proyecto de integracion de Js en una pagina web de compras online

//Recoleccion de datos del elementos del HTMl
const menuEmail = document.querySelector('.navbar-email') ;
const desktopMenu = document.querySelector('.desktop-menu') ;
const burgerMenu = document.querySelector('.menu') ;
const mobileMenu = document.querySelector('.mobile-menu') ;
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart') ;
const asideCarrito = document.querySelector('.product-detail') ;

//Interaccion para mostrar menu desplegable al hacer click
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleAsideCarrito);

//Funcion toggle para menu desplegable
function toggleDesktopMenu() {
    asideCarrito.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    asideCarrito.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleAsideCarrito() { 
    desktopMenu.classList.add('inactive');//Ocultar el menu de usuario
    mobileMenu.classList.add('inactive'); //Ocultar el menu desplegable
    asideCarrito.classList.toggle('inactive'); //Mostar y ocultar el aside
}



