/*

Vamos a ver las variables de tipo number y las operaciones mas comunes en este tipo de variables

Las operaciones mas comunes veremos los operadores matematicos:

suma(+)
resta(-)
multiplicacion(*)
division(/)
modulo(%)

En operaciones con decimales debemos realizar operaciones adicionales para conseguir un resultado precisos, para redondear recordar la libreria de JS Math.round()

Tambien usaremos varios metodos:
.toFixed() -> para agregar los decimales que queremos.
.parseFloat -> para pasar un string a numero.

*/

// Asi declaramos una variable de tipo number
let edad = 45;
console.log(`La variable edad tiene el valor de ${edad}.`);

console.log('====================================');

// Incremento de una variable
edad += 1;
console.log(`La edad incrementada es: ${edad}.`);

// Decremento
let peso = 75;
peso -= 10;
console.log('====================================');

//Sumar dos numeros distintos
let sandwich = 3;
peso += sandwich;
console.log(`El peso ha aumentado en: ${peso}`);
console.log('====================================');

//Restar dos numeros
let jugarAlFutbol = 5;
peso -= jugarAlFutbol;
console.log(`El peso ha dsminuido en: ${peso}`);
console.log('====================================');

// Ejemplos con decimales
let precioDelVino = 200.3;
let totalVenta = precioDelVino * 3;
console.log(`El precio total de la venta es: ${totalVenta}.`);
// Usaremos Math.round() para obtener un valor redondeado
totalVenta = Math.round(precioDelVino * 3 * 100) / 100;
console.log(totalVenta);

// Si queremos mas decimales le aplicamos el metodo .toFixed()
totalVentaString = (totalVenta.toFixed(2)); // 600.90 ->string
console.log(totalVentaString);

//Para pasar el string a number. .parseFloat()
console.log(parseFloat(totalVentaString));
console.log('====================================');

// Ahora veremos una division
let pizza = 8;
let personas = 2;

let cantidadPorPersona = pizza / personas;
console.log(cantidadPorPersona);
console.log('====================================');

// Resto o residuo
let num1 = 11;
let residuo = num1 % 2;
console.log(residuo);







