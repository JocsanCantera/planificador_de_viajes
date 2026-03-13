function encontrarPar(arr, objetivo) {
    // Puntero que inicia al principio de mi arreglo
    let izquierda = 0;

    // Puntero que inicia al final del arreeglo
    let derecha = arr.length -1;

    // Mientras los puntros no se junten
    while (izquierda < derecha){

        // Calcular la suma de ambos valores
        let suma = arr[izquierda] + arr[derecha];

        // Si encontramos el objetivo
        if (suma === objetivo){
            // Regresar el par encontrado
            return [arr[izquierda], arr[derecha]];
        }
        // Si la suma es menor que el ibjetivo nos movemos hacia la izquierda
        else if (suma < objetivo){
            // Nos movemos hacia el otro lado
            izquierda++;
        }else{
            // Si la suma es mayor
            derecha--;
        }
    }
    // Si no encontramos ningun par
    return null;
}

let numeros = [2, 4, 7, 10, 11, 15, 20, 40, 80];
let resultado = encontrarPar(numeros, 25);
console.log(resultado);


function esPalindromo(texto) {

  // Convertimos a minúsculas y eliminamos espacios
  let limpio = texto.toLowerCase().replace(/\s/g, "");

  let izquierda = 0;
  let derecha = limpio.length - 1;

  // Recorremos desde los extremos hacia el centro
  while (izquierda < derecha) {
    if (limpio[izquierda] !== limpio[derecha]) {
      console.log(`"${texto}" no es un palíndromo`);
      return;
    }
    izquierda++;
    derecha--;
  }

  // Si terminó el ciclo sin diferencias
  console.log(`"${texto}" sí es un palíndromo`);
}

// Ejemplos
esPalindromo("Anita lava la tina");
esPalindromo("Radar");
esPalindromo("Hola");
esPalindromo("Oso");
esPalindromo("Aveces");