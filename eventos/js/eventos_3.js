const buscar = document.querySelector('#f0');

//evento se presiona la tecla keydown
//evento se presiona la tecla keyup
//evento de dar click afuera del componente focusout
//evento de copy
//evento de paste
//evento de cut
//evento ejecuta todos los ateriores menor focusout input

buscar.addEventListener('cut',(evt) => {
    console.log('Evento se ejecuta')
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    
    if (evt.target.value=='a'){
        console.log('aaaaa');
    }
});