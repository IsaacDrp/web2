const img = document.querySelector('#img');

img.addEventListener('click',()=>{
    img.style.width = '350px';
});

//mover el modo celular

//mouseenter
//mouseout

img.addEventListener('mouseenter',()=>{
    img.style.borderRadius='60px';
});

img.addEventListener('mouseout',()=>{
    img.style.borderRadius='10px';
});

//click y suelta
img.addEventListener('mouseup', () => {
    console.log('Evento de mouseut con apretar y soltar la imagen');
});

img.addEventListener('dblclick', () => {
    console.log('Evento de mouseut doble click en la imagen');
});