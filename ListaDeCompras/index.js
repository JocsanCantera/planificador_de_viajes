let listaDeCompras = [];

const agregarProducto = (producto) => {

    if (listaDeCompras.includes(producto)) {
        console.log(`El producto "${producto}" ya está en la lista!!`);
    } else {

        listaDeCompras.push(producto);
        console.log(`Producto agregado: ${producto}`);
    }
};


const eliminarProducto = (producto) => {

    const indice = listaDeCompras.indexOf(producto);
    if (indice !== -1) {

        listaDeCompras.splice(indice, 1);
        console.log(`Producto eliminado: ${producto}`);
    } else {
        console.log(`El producto "${producto}" no se encuentra en la lista`);
    }
};


const mostrarLista = () => {
    console.log("Lista de Compras:");
    if (listaDeCompras.length === 0) {
        console.log("La lista está vacía.");
        return;
    }

    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
};


agregarProducto("Mermelada");
agregarProducto("Yogurt griego");
agregarProducto("Cafe");
agregarProducto("Cafe");
mostrarLista();
eliminarProducto("Jamon");
mostrarLista();