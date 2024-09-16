
function genImageNode (index, path) {
    const image = document.createElement('div')
    image.className = 'image';
    
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.className = 'select-product';
    
    const prodImage = document.createElement('img');
    prodImage.src = path;
    prodImage.alt = 'Producto ' + index;
    prodImage.width = '300';
    prodImage.height = '300';
    
    image.appendChild(checkbox);
    image.appendChild(prodImage);

    return image;
}

function genInfoNode(product, price, delivery){
    const info = document.createElement('div');
    info.className = 'info';

    const productIndex = document.createElement('p');
    productIndex.className = 'name';
    productIndex.textContent = product;

    const priceAttr = document.createElement('h6');
    priceAttr.className = 'price'
    priceAttr.textContent = '$' + price;

    const deliveryAttr = document.createElement('p');
    deliveryAttr.textContent = 'Entrega estimada: ' + delivery + ' dias';

    const quantity = document.createElement('label');
    quantity.htmlFor = 'quantity';
    quantity.textContent = 'Cantidad: ';

    const sel = document.createElement('select');
    sel.id = "quantity";
    sel.className = "quantity"

    for (let i = 1; i <= 5; i++){
        const option = document.createElement('option');
        option.value = i + '';
        option.textContent = i;
        sel.appendChild(option);
    }

    const removeProduct = document.createElement('a');
    removeProduct.href = '#';
    removeProduct.className = 'remove-product';

    const eliminar = document.createElement('p');
    eliminar.textContent = 'Eliminar';

    removeProduct.appendChild(eliminar);

    const masTarde = document.createElement('a');
    masTarde.href = '#Mas_tarde';
    masTarde.className = "save-for-later";
    
    const guardarTarde = document.createElement('p');
    guardarTarde.textContent = "Guardar para mas tarde";

    masTarde.appendChild(guardarTarde);

    const subtotalBox = document.createElement('div');
    subtotalBox.className = "subtotalbox";
    const subtotal = document.createElement('h1');
    subtotal.className = 'subtotal';
    subtotal.textContent = 'Precio: $' + price;

    subtotalBox.appendChild(subtotal);

    info.appendChild(productIndex);
    info.appendChild(priceAttr);
    info.appendChild(deliveryAttr);
    info.appendChild(subtotalBox);
    info.appendChild(quantity);
    info.appendChild(sel);
    info.appendChild(removeProduct);
    info.appendChild(masTarde);
    
    return info;
}

export function genProduct(index, path, name, price, delivery){
    const product = document.createElement('div');
    product.className = 'product';

    product.appendChild(genImageNode(index,path));
    product.appendChild(genInfoNode(name,price,delivery));
    
    return product;
}



