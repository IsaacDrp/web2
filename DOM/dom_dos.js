//seleccionar elementos por clase

const clase = document.getElementsByClassName('fondo');
console.log(clase);

const clase2 = document.getElementsByClassName('fondo2');
console.log(clase2);

//seleccionar formulario
const formulario = document.getElementById('f0');
console.log(formulario);

const formulario1 = document.getElementById('f1');
console.log(formulario1);

//query selector para clases
//el primero que se encuentre

const selector = document.querySelector('.fondo');
console.log(selector);

//query selector id
const form_dos = document.querySelector('.fondo #f0');
console.log(form_dos);

//query selector por su etiqueta
const etiqueta = document.querySelector('img');
console.log(etiqueta);

//queryselector All

const todos = document.querySelectorAll('img');
