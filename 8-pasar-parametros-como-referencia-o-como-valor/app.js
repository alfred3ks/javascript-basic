/*
JS se comporta de manera distinta cuando le pasamos un objeto como parametro, no pasa igual con los valores primitivo.

Cuando le pasamos un objeto como una referecia, todo lo que hagamos dentro modificara al objeto fuera. Para evitar esto debemos crear un nuevo objeto. Lo vemos a continuacion:
*/
// Declaramos nuestros objetos personas.

let leonardo = {
    nombre: 'Leonardo',
    apellido: 'Sánchez',
    edad: 17,
    peso: 75
}

let marcos = {
    nombre: 'Marcos',
    apellido: 'Rodriguez',
    edad: 22,
    peso: 68
}

console.log(leonardo);
console.log(marcos);

// Crearemos una funcion que incrementara el peso
function aumentaPeso(persona) {
    // aumenta de peso en 2 kg
    persona =  persona.peso +=2;
}

aumentaPeso(leonardo);
console.log(leonardo);
/*
Como podemos ver el objeto original se modifico.
{nombre: "Leonardo", apellido: "Sánchez", edad: 17, peso: 77}
*/
console.log('====================================');

/*
Los objetos que pasamos por parametros se pasan por referencia, esto quiere decir que si lo modificamos dentro del cuerpo de una funcion este se modificara fuera de esta. A continuacion veremos como evitar esto, ¿pero como evitamos esto? Una opcion es dejarlo como queda sabiendo que nuestro objeto inicial se ha modificado o tambien podemos devolver un nuevo objeto, lo vemos a continuacion.

*/
// Asi aumentamos la edad a un objeto
function cumpleanos(persona) {
    //Asi devolvemos un nuevo objetos
    return {
        ...persona,
        edad:persona.edad +1
    }

}

console.log(cumpleanos(marcos)); // Esto es equivalente a lo de abajo

// Asi devolvemos un nuevo objeto y conservamos el original
let marcosMasViejo = cumpleanos(marcos);

console.log(marcos);
console.log(marcosMasViejo);

console.log('====================================');

// Ahora podemos ver el caso de un primitivo, como vemos el primitivo no se modifica despues de pasar por dentro de la funcion.

let altura = 23;
function aumentarAltura(altura) {
    altura = altura +=7;
    console.log(altura);
}

aumentarAltura(altura);
console.log(altura);