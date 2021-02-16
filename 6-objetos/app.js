/*
Vamos a ver los objetos en JS, como declararlos, cuales son sus ventajas, como asignarles atributos y como trabajar con ellos dentro d elas funciones.

Los objetos se definen delimitados mediante llaves {}

Un atributo se componen de una clave (key) y un valor (value) que se separan entre si por dos puntos ':'.

Los valores pueden ser de tipo string, number, boolean.etc.

Escribir el nombre de un objeto separado por el punto del nombre de un atributo, nos permite acceder al valor de dicho atributo para ese objeto. Un objeto tambien se puede pasar acomo atributo a una funcion.

Las ultimas versiones de JS nos permite desglosar dicho objeto para acceder unicamente al atributo que nos interesa. Esto se llama desestructurar el objeto y se consigue pasando el atributo entre llaves { }.
*/

// Crearemos nuestros primeros objetos de persona.

let leonel = {
    nombre: 'Leonel',
    apellido: 'Messi',
    edad: 32
}

let andres = {
    nombre: 'Andres',
    apellido: 'Iniesta',
    edad: 33
}

// Vamos a crear una funcion que nos imprima los nombres de los dos objetos en mayusculas. Le pasamos por parametros a la funcion el objeto.

function imprimeNombreMay(persona) {
    let nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}

imprimeNombreMay(leonel);
imprimeNombreMay(andres);

console.log('====================================');

// Ahora vamos a ver como crear una funcion que recibe por parametro un atributo del objeto, esto se llama desestructurar el objeto para solo pasar por parametro lo que deseamos.

function imprimeNombreMin({ nombre }) {
    console.log(nombre);
    let nombreMin = nombre.toLowerCase();
    console.log(nombreMin);
}

imprimeNombreMin(leonel);
imprimeNombreMin(andres);

// Otra forma de pasar solo el atributo en la llamada de la funcion.

imprimeNombreMin({nombre:'Pepito'});

