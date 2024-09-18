const botonF = document.querySelector('#botonfooter');
const footer = document.querySelector('.footer');
botonF.addEventListener('click',mostrarFooter);

function mostrarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.textContent = 'Desplegar';
    }
    else{
        footer.classList.add('activo');
        this.textContent='Cerrar'
    }

}