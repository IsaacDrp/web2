const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); //dame el id del carrito y luego la etiqueta tbody
const vaciarCarrito = document.querySelector('#lista-libros');
const listaLibros = document.querySelector('#lista-libros');

let itemsCarrito = [];
registrarListener();

function registrarListener(){
    listaLibros.addEventListener('click', agregarLibro);
}

function agregarLibro(evt) {
    evt.preventDefault();
    if(evt.target.classList.contains('agregar-carrito')){
        const libroSeleccionado = evt.target.parentElement.parentElement;
        leerLibro(libroSeleccionado);
    }
}

function leerLibro(libro) {
    const libroInfo = {
        imagen: libro.querySelector('img').src,
        nombre: libro.querySelector('h4').textContent,
        precio: libro.querySelector('.precio span').textContent,
        id: libro.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(libroInfo);
}