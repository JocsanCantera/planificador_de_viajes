function generarSubconjuntos(num){
    const resultado = [];

    function backtrack(inicio, camino){
        //Guardar un camino del camino actual
        resultado.push([...camino]);

        for(let i = inicio; i < num.length; i++){
            // Elegir
            camino.push(num[i]);

            // Explorar
            backtrack( i + 1, camino);

            // Deshacer la desicion
            camino.pop();
        }
    }

    backtrack(0, []);
    return resultado;
}

console.log(generarSubconjuntos([1,2,3]));