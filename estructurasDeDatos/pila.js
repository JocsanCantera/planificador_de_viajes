// crear una class llamada pila
class Pila {

    // Metodo constructor
    constructor(){
        this.elementos = [];
    }

    // Metodo para agregar un elemento (push)
    agregarElemento(valor){
        this.elementos.push(valor);
    }

    // Metodo para quitar el ultimo elemento (pop)
    quitarElemento(){
        return this.elementos.pop()
    }

    verUltimoElemento(){
        return this.elementos[this.elementos.length-1]
        // Ver el ultimo elemento sin quitarlo
    }

    // Metodo para saber si esta vacio
    estaVacio(){
        return this.elementos.length === 0;
    }

    // Mostrar elementos
    mostrarPila(){
        return this.elementos;
    }
}

let pila = new Pila(); // Creando una instancia
pila.agregarElemento(20);
pila.agregarElemento(10);
pila.agregarElemento(5);
pila.agregarElemento(48);

console.log(pila.mostrarPila());
console.log(pila.verUltimoElemento());
console.log(pila.quitarElemento());
console.log(pila.mostrarPila());
console.log(pila.estaVacio());