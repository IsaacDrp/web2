const f = document.querySelector('#f0');
/*
f.addEventListener('submit',(evt) =>{
    evt.preventDefault(); //evita que pida el servicio que iba a hacer el server
    console.log(evt.target.method);
    console.log(evt.target.action);
    console.log(evt)
})
*/
f.addEventListener('submit',eventos)

function eventos(evt){
    evt.preventDefault(); //evita que pida el servicio que iba a hacer el server
    console.log(evt.target.method);
    console.log(evt.target.action);
    console.log(evt)
}