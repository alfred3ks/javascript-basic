// Las Variables

// Declaracion de una variable

let nombre;
console.log(nombre); // undefined

// Asignacion a una variable

nombre = 'Alfred';
console.log(nombre); // Alfred

// Concatenar dos Variables, podemos usar el (+) o usar comillas dobles invertidas que se llaman backtip ``.

let autor = 'Albert'
let contenido = 'La energia no se crea ni se destruye, solo se transforma';

console.log(autor + ' tiene una gran teoria que dice asi: ' + contenido);

console.log(`${autor} tiene una gran teoria que dice asi: ${contenido}`);

// JS es devilmente tipado y debemos tener cuidado con eso

let mario = 'Mario'
let edad = 45;
console.log(typeof edad);//number
console.log(`${mario} tiene ${edad} años.`);

// Asignamos a esta variable un string
edad = '45';
console.log(typeof edad);//string
console.log(`${mario} tiene ${edad} años.`);

/* Ves alguna diferencia en la respuesta? pues eso JS es devilmente tipado y a una variable podemos cambiar su valor a lo largo de la ejecucion, primero es un number y luego le asignamos un string, pero vemos que la salida a simple vista es igual */




