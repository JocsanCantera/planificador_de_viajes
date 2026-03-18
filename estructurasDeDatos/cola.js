// FIFO - First in Fisrt out (primero en entrar, primero en salir)

class Cola{

    constructor(){
        this.elementos = [];
    }

    // Metodo para agregar al final (enqueue)
    agregarElemento(valor){
        this.elementos.push(valor);
    }

    // Metodo para quitar el primero (dequeue)
    quitarElemento(){
        return this.elementos.shift();
    }

    // Metodo de ver el primero
    verPrimero(){
        return this.elementos[0];
    }

    estaVacio(){
        return this.elementos.length === 0;
    }

    mostrarCola(){
        return this.elementos;
    }

}

let filaTortillas = new Cola();

filaTortillas.agregarElemento('Lupita');
filaTortillas.agregarElemento('Luis');
filaTortillas.agregarElemento('Paty');

console.log(filaTortillas.mostrarCola());
console.log(filaTortillas.verPrimero());
console.log(filaTortillas.quitarElemento());
console.log(filaTortillas.mostrarCola());