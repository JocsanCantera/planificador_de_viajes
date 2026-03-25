// Un arreglo puede tener cualquier tipo de dato en JS
// De preferencia usamos const 
const listaDeCompras = ['leche', 'huevos', 'pan', 'tortillas']

// Se pueden mezclar tipos 
const mezcla = ['Ariel', 23, true, false, {rol: 'estudiante'}, ['sublista']]

//Imprimir nuestro arreglo para ver que tiene dentro 
console.log(listaDeCompras)
console.log(mezcla)

// Aunque usemos const podemos modificar el contenido del arreglo
listaDeCompras.push('mantequilla') // Agregar un elemeto al final 
// Lo que NO se puede es reasignar la referencia
console.log(listaDeCompras)

//Usar Let solo si se va a remplazar el arreglo completo 
let numeros = [1,3,67,30]
numeros = [1,2,3,4,5,35, 8, 10, 45]
console.log(numeros)

// Indice 
console.log(mezcla[1]);
// Si accedemos a un elemento que no existe, nos entrega un undefined
console.log(mezcla[78]);
// Cuantos elementos tenemos 
console.log(mezcla.length);
// Acceder al ultimo elemento
console.log(mezcla[mezcla.length -1]);

const frutas = ['pera', 'papaya', 'sandia', 'melon']
// Forma tradicional de recorrer arrelgos
for(let i = 0; i < frutas.length; i++){
    console.log('Indice: ', i+1, 'Valor: ', frutas[i])
}

frutas.unshift('cereza') // Agregar al inicio de mi arreglo 
frutas.unshift('lulo') 
console.log(frutas)

frutas.shift() // Quitar elemento del inicio
console.log(frutas)

frutas.pop() // Quitar el ultimo elemento
console.log(frutas)

const usuarios = [
    {id: 1, nombre: 'Ana'},
    {id: 2, nombre: 'Fernanda'},
    {id: 3, nombre: 'Erick'},
    {id: 4, nombre: 'Misael'},
]

// El metodo find() sirve para encontrar el primer elemento que cumpla con una condicion 
// Usarlo cuando necesitemos una sola cosa
const encontrado = usuarios.find((m) => m.id == 2);
console.log(encontrado)

// El metodo filter() crea un arrelgo con los elementos que cumplen una condicion 
// No modifica el arreglo original 
const pares = numeros.filter((n) => n % 2 === 0);
console.log('Original:', numeros)
console.log('Copia de Pares:', pares)

// El metodo map() crea un nuevo arreglo pero con el resultado de aplicar un funcion 
const precios = [100, 200, 300, 400, 500]
const preciosConIVA = precios.map((p) => {
    const iva = p * 0.16; 
    const total = p + iva; 
    return total; // Esto se guarda en el nuevo arreglo 
});

console.log('Original; ', precios)
console.log('Con IVA; ', preciosConIVA)

// El meotod forEach() NO es para contruir un nuevo arreglo 
const apellidos = ['Villanueva', 'Velazquez', 'Serrano']

apellidos.forEach((apellido, index)=> {
    console.log('Posicion ', index, 'Apellido ', apellido)
})

// El metodo some() nos va decir si existe AL MENOS un elemento que cumpla con la condicion 
const preciosNuevos = apellidos.some((p) => p === 'Serrano');
console.log(preciosNuevos)

// El metodo every() es si todos cumplen 
const todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares);

// El metodo reduce() sirve para reducir un arreglo a un solo valor.
const numeritos = [1, 2, 3, 4];

const suma = numeritos.reduce((acumulador, actual) => {
    return acumulador + actual;
}, 0);

console.log(suma);
/*
0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10 
*/

// EJEMPLO: Suma de un carrito
const carrito = [
    { producto: "Laptop", precio: 1000 },
    { producto: "Mouse", precio: 50 },
    { producto: "Teclado", precio: 100 }
];

const total = carrito.reduce((acc, item) => {
    return acc + item.precio;
}, 0);

console.log(total);

// Uso de splice
let frutilla = ["manzana", "pera", "plátano", "uva"];
console.log("Arreglo original:");
console.log(frutilla);

// Usamos splice para eliminar un elemento
// splice(posicionInicio, cantidadAEliminar)

// En este caso:
// posición 1 = "pera"
// eliminar 1 elemento
frutilla.splice(1, 1);

// Mostramos el arreglo después de usar splice
console.log("Arreglo después de usar splice:");
console.log(frutilla);

//Arreglos de objetos 
const estudiantes = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Martin", edad: 22 },
    { nombre: "Antonella", edad: 21 }
];

console.log(estudiantes[0].nombre);

//Buscar estudiante de mayor edad 
const mayor = estudiantes.find(est => est.edad > 21);
console.log(mayor);