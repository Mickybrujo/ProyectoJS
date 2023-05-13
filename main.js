//Proyecto de integracion de Js en una pagina web de compras online

//Recoleccion de datos del elementos del HTMl
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const asideCarrito = document.querySelector("#shoppingCartContainer");
const productDetail = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");
const cardsContainer = document.querySelector(".cards-container");

//Interaccion para mostrar menu desplegable al hacer click
menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleAsideCarrito);
productDetailClose.addEventListener("click", closeDetailProduct);

//Funciones para menus desplegables
function toggleDesktopMenu() {
  asideCarrito.classList.add("inactive");
  productDetail.classList.add("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  asideCarrito.classList.add("inactive");
  productDetail.classList.add("inactive");
  mobileMenu.classList.toggle("inactive");
}

function toggleAsideCarrito() {
  desktopMenu.classList.add("inactive"); //Ocultar el menu de usuario
  mobileMenu.classList.add("inactive"); //Ocultar el menu desplegable
  productDetail.classList.add("inactive"); //Ocultar el detalle del producto
  asideCarrito.classList.toggle("inactive"); //Mostar y ocultar el aside
}

//Funcion para mostrar el detalle del producto
function showDetailProduct() {
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  asideCarrito.classList.add("inactive");
  productDetail.classList.remove("inactive");
}
function closeDetailProduct() {
  productDetail.classList.add("inactive");
}

//Mostrar los productos

//Creacion de un array para almacenar los productos
const productList = [];

//Simulacion de una base de datos para agregar los productos

for (let i = 0; i < 4; i++) {
  productList.push({
    name: "Bike",
    price: 1001 + i,
    img: "https://cdn.shopify.com/s/files/1/0541/0154/1047/products/0711964_b_1200x1200.jpg?v=1614971567",
    detail: "Bicicleta de montaña",
  });
  productList.push({
    name: "Moto",
    price: 1002 + i,
    img: "https://fratelliglobal.com/wp-content/uploads/2021/12/Moto-Fratelli-FS-110-Semi-automatica-1.jpg",
    detail: "Moto de pista",
  });
  productList.push({
    name: "Auto",
    price: 1003 + i,
    img: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_05a99b23df054e0eb2c93b3885eaa13e.jpg",
    detail: "Auto deportivo",
  });
}

//Creacion de los elementos HTML para mostrar los productos

//Funcion para renderizar los productos
function renderProducts(productList) {
  //Recorrer el array de productos
  for (product of productList) {
    //Contenedor de la tarjeta del producto
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //Imagen del producto
    const imgProduct = document.createElement("img");
    imgProduct.setAttribute("src", product.img);
    imgProduct.addEventListener("click", showDetailProduct);

    //Contenedor de la informacion del producto
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    //Contenedor de los datos del producto
    const productInfoDiv = document.createElement("div");

    //Parrafos para agregar los datos del producto (nombre y precio)
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    //Creacion de la figura para el icono de agregar al carrito
    const productInfoFigure = document.createElement("figure");
    const productFigureImg = document.createElement("img");
    productFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    //Maquetacion de los elementos HTML para organizar los elementos
    productInfoFigure.appendChild(productFigureImg);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(imgProduct);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
  }
}

//Llamado a la funcion para mostrar los productos pasando el array de productos
renderProducts(productList);
