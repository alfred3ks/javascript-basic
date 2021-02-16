/*

Las funciones son fragmentos de codigo reutilizable.

Para definir una funcion utilizaremos a palabra reservada function.

Delimitaremos el cuerpo de la funcion usando las llaves { }. Los parametros son variables que se pasan a la funcion escribiendolos entre parentesis ().

*/

// Veamos un ejemplo de una funcion simple
let nombre = 'Omar';
let apellido = 'Vizquel';
let edad = 45;

function imprimirEdad(){
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años.`);
};

imprimirEdad();
console.log('====================================');

// Funcion que recibe parametros
function imprimirEdadConParametros(nombre,apellido,edad){
    console.log(`Hola me llamo ${nombre} ${apellido} tengo ${edad} y soy exjugador de beisbol en la MLB.`);
};

imprimirEdadConParametros('Omar','Vizquel', 45);
imprimirEdadConParametros('Andres','Galarraga', 40);
imprimirEdadConParametros('Antonio','Armas', 48);
console.log('====================================');

/*
Una cosa bastante interesante en JS es que los parametros se los debemos pasar en orden, si los invertimos JS no lanza ningun error, igual pasa si no le pasamos parametros, lo vemos a continuacion.
*/
imprimirEdadConParametros();
imprimirEdadConParametros(60, 'Maria','Lopez');
console.log('====================================');
