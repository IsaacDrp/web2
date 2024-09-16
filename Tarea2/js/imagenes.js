const imageLinks = ["uno","dos","tres","cuatro","cinco","seis"];
const boton = document.querySelector("button");
const altTxt = document.querySelector(".alt-text");
let contador = 0;

function comencemos() {
    if (contador < imageLinks.length) {
        boton.textContent = "Mas fases";
        
        const imagen = new Image(300, 200);
        imagen.src = "../image/" + imageLinks[contador] + ".png";
        
        
        imagen.onclick = (function(index) {
            return function() {
                modifyAltTxt(index);
            };
        })(contador);

        const contenedor = document.querySelector('.gallery-container');
        contenedor.appendChild(imagen);

        contador++;
    }
}

const fases = [
    {fase:'fase 1', desc: "Se pone mas mamao"},
    {fase:'fase 2', desc: "Se pone mamao en rayitos"},
    {fase:'fase 3', desc: "Mamao L'OREAL PARIS"},
    {fase:'Dios', desc: "Tiene el pelo azul"},
    {fase:'El rojo', desc: "Tiene el pelo rojo"},
    {fase:'Ultrainstinto', desc: "No se, pero la musiquita esta chida"},
]

function modifyAltTxt(index) {

    const faseTexto = fases[index].fase || "fase desconocida";
    
    altTxt.querySelector('.miniTitle').textContent = faseTexto;
    altTxt.querySelector('.miniDesc').textContent = fases[index].desc;
    console.log(faseTexto);
}
