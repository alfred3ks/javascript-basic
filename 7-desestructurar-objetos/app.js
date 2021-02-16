/*
Aqui vamos a ver otras formas de acceder a los atributos de los objetos con la desestructuracion de los mismos
*/

// Crearemos nuestros primeros objetos de persona.

let leonel = {
    nombre: 'Leonel',
    apellido: 'Messi',
    edad: 32,
    profesion: 'Futbolista'
}

let andres = {
    nombre: 'Andres',
    apellido: 'Iniesta',
    edad: 33,
    profesion: 'Futbolista'
}

// Vamos a crear una funcion que nos imprima los nombres de los dos objetos en mayusculas. Le pasamos por parametros a la funcion el objeto.

function imprimeNombreMay(persona) {
    // desestructuramos aqui dentro
    // let nombre = nombre.persona;
    let { nombre } = persona;
    console.log(nombre);
    nombre = persona.nombre.toUpperCase();
    console.log(nombre);
}

imprimeNombreMay(leonel);
imprimeNombreMay(andres);
console.log('====================================');

//Reto hacer una funcion que imprima el nombre, apellido, edad y profesion con desestructuracion del objeto

function imprimirTodo(persona) {
    // Desestructuramos el objeto persona
    let { nombre, edad, profesion } = persona;
    console.log(`Hola me llamo ${nombre}, tengo ${edad} años y soy ${profesion}.`);
}

imprimirTodo(leonel);
imprimirTodo(andres);


