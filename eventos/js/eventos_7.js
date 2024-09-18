
const card = document.querySelector('#card');
const info = document.querySelector('#info');
const clase = document.querySelector('#clase');


card.addEventListener('click', e=>{
    if(e.target.classlist.contains('info')){
        console.log('info');
    }
    if(e.target.classlist.contains('clase')){
        console.log('clase');
    }
    if(e.target.classlist.contains('card')){
        console.log('card');
    }
})