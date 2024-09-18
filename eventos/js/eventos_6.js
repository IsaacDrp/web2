//evento bubbling se progpaga a maas elementos del evento

const card = document.querySelector('#card');
const info = document.querySelector('#info');
const clase = document.querySelector('#clase');

card.addEventListener('click',evt =>{
    console.log('clic en card');
})

info.addEventListener('click', evt =>{
    console.log('click en info');
})

clase.addEventListener('click', evt =>{
    console.log('clic en clase');
})

card.addEventListener('click',evt =>{
    evt.stopPropagation();
    console.log('clic en card');
})

info.addEventListener('click', evt =>{
    evt.stopPropagation();
    console.log('click en info');
})

clase.addEventListener('click', evt =>{
    evt.stopPropagation();
    console.log('clic en clase');
})