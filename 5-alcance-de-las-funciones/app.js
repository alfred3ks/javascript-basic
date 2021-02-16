/*
Alcance de las funciones y las variables:

Si una variable no esta definida dentro del cuerpo de una funcion dicha variable tiene alcance global, por el contrario una varible definida dentro de una funcion tiene alcance local.

Para que la ejecucion de una funcion no modifique la variable global usamos parametros en lugar de pasar directamente la variable.

Veamos unos ejemplos:

*/

let nombre = 'Michael';
let apellido = 'Jordan';
let profesion = 'Jugador de baloncesto';


function imprimirNombreEnMay() {
    nombre = nombre.toUpperCase();
    console.log(nombre); // MICHAEL
}

imprimirNombreEnMay();
console.log(nombre); // MICHAEL -> Como puedes ver la variable global se ha modificado.

// Veamos como no alterar la variable global y evitar este 'efecto de lado':

let fruta = 'Manzana';

function imprimirNombreEnMin(fruta) {
    console.log(fruta); // Manzana
    fruta = fruta.toLowerCase();
    console.log(fruta); // manzana
}

imprimirNombreEnMin(fruta);
console.log(fruta); // Manzana

// Si tratamos a acceder a la variable fruta dentro de la funcion veremos que nos da error que no se puede acceder a ella. Otra cosa bastante interesante en JS es que nos permite que le pasemos a nuestra funcion como parametro un parametro que se llame igual que la variable global, asi que nuestra variable existe dentro y fuera de la funcion. Es como si nuestra variable del scope global la metieramos en el scope local de la funcion.

/* console.log(fruta);
Uncaught ReferenceError: n is not defined at app.js:39
*/





