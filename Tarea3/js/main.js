import {genProduct} from './productos.js';

const productos = [
    { index: 1, path: './img/silla.png', name: 'Silla gamer', price: 3200, delivery: 5 },
    { index: 2, path: './img/teclado.png', name: 'Teclado mecánico RGB', price: 1500, delivery: 3 },
    { index: 3, path: './img/mouse.png', name: 'Mouse inalámbrico', price: 800, delivery: 2 },
    { index: 4, path: './img/monitor.png', name: 'Monitor 27" 144Hz', price: 9400, delivery: 7 },
    { index: 5, path: './img/auriculares.png', name: 'Auriculares Bluetooth', price: 1200, delivery: 4 }
];

const etiqueta = document.querySelector('#Productos');

productos.forEach(d=>{
    etiqueta.appendChild(genProduct(d.index,d.path,d.name,d.price,d.delivery));
})

const generatedProducts = [];

const slectAllItems = document.querySelector('#SelectItems');

slectAllItems.addEventListener('click', () => {
    etiqueta.childNodes.forEach(e => {
        if (e.className === "product") {
            e.childNodes.forEach(f => {
                if (f.className === "image") {
                    f.childNodes.forEach(node => {
                        if (node.tagName === 'INPUT' && node.type === 'checkbox') {
                            node.checked = true;  // O false si quieres desmarcarlo
                        }
                    });
                }
            });
        }
    });
});
//checkout
let products = etiqueta.childNodes;
let check = document.querySelector('#summary-box');


document.querySelector('#Productos').addEventListener('click',()=>{
    let checkout = 0;
    let totalProducts = 0;
    let taxes = 0;
    products.forEach(p => {
        if(p.className === 'product'){
            p.childNodes.forEach(q => {
                if (q.className === 'info'){
                    q.childNodes.forEach(r => {
                        if (r.className === "price" && p.childNodes[0].childNodes[0].checked){
                            q.childNodes[3].childNodes[0].textContent = 'Subtotal $' + (parseInt(r.textContent.replace('$', '')) * parseInt(q.childNodes[5].value))
                            checkout += parseInt(r.textContent.replace('$','')) * parseInt(q.childNodes[5].value);
                            totalProducts ++;
                        }
                    })
                }
            })
        }
    })
    taxes = checkout * 0.16;
    
    check.childNodes[0].textContent = "Total de productos: " + totalProducts;
    check.childNodes[1].textContent = "Subtotal: $" + checkout;
    check.childNodes[2].textContent = "Impuestos: $" + taxes;
    check.childNodes[3].textContent = "Total: $" + (checkout + taxes);
})

let deletelem = document.querySelectorAll('.remove-product');
deletelem.forEach(deletee => {
    deletee.addEventListener('click', () => {
        // Obtener el nodo del producto completo (2 niveles hacia arriba)
        let productNode = deletee.closest('.product');
        
        // Obtener el nodo padre y eliminar el producto completo
        if (productNode && productNode.parentNode) {
            productNode.parentNode.removeChild(productNode);
        }
    });
});

let later = document.querySelectorAll('.save-for-later');

later.forEach(late => {
    late.addEventListener('click', () => {
        // Obtener el nodo del producto completo (2 niveles hacia arriba)
        let productNode = late.closest('.product');  // Usamos .closest() para obtener el nodo más cercano con la clase 'product'

        // Eliminar el botón "Guardar para más tarde"
        let saveForLaterBtn = productNode.querySelector('.save-for-later');
        if (saveForLaterBtn && saveForLaterBtn.parentNode) {
            saveForLaterBtn.parentNode.removeChild(saveForLaterBtn);
        }

        // Eliminar el checkbox de selección (suponiendo que tiene clase 'select-product')
        let selectCheckbox = productNode.querySelector('.select-product');
        if (selectCheckbox && selectCheckbox.parentNode) {
            selectCheckbox.parentNode.removeChild(selectCheckbox);
        }
        let selectList = productNode.querySelector('.select');
        if(selectList && selectList.parentNode){
            selectList.parentNode.removeChild(selectList);
        }


        // Obtener el nodo padre actual
        let currentParent = productNode.parentNode;

        // Buscar el contenedor "#Mas_tarde"
        let laterNode = document.querySelector('#Mas_tarde');

        // Eliminar el producto del nodo padre actual
        if (currentParent && productNode) {
            currentParent.removeChild(productNode);
        }

        // Transferir el producto al contenedor "#Mas_tarde"
        laterNode.appendChild(productNode);
    });
});
