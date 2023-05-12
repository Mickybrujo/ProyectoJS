//Proyecto de integracion de Js en una pagina web de compras online

//Recoleccion de datos del elementos del HTMl
const menuEmail = document.querySelector('.navbar-email') ;
const desktopMenu = document.querySelector('.desktop-menu') ;

//Interaccion para mostrar menu desplegable al hacer click
menuEmail.addEventListener('click', toggleDesktopMenu);

//Funcion toggle para menu desplegable
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}


