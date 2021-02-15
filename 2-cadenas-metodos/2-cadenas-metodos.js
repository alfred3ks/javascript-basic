//Metodos basicos para cadenas de textos.

/*
.chart()
.length
.charCodeAt()
.concat()
.indexOf()
.lastIndexOf()
.match()
.replace()
.search()
.slice()
.split()
.substr()
.substring()
.toUpperCase()
.toLowerCase()

*/

// .charAt() este metodo devuelve el indice de la letra indicada, si no le indicamos un indice nos devuelve la primera letra

let cadenaTexto = 'Soy una cadena de texto.';
console.log(cadenaTexto);
console.log(cadenaTexto.charAt());
console.log(cadenaTexto.charAt(4));
console.log(cadenaTexto.charAt(cadenaTexto.length-1));

// .length podemos saber la longitud del string.
let cadenaTextoBis = 'Bienvenidos al curso';
console.log(cadenaTextoBis.length);// 20

// .charCodeAt() Este método devuelve el valor Unicode del caracter en el índice indicado.
let cadenaTexto1 = 'Mañana es lunes y toca trabajar.';
console.log(cadenaTexto1.charCodeAt(1)); //97
console.log(cadenaTexto1.charCodeAt(cadenaTexto1.length-1)); //46


//.concat() Para concatenar un literal con una cadena antes declarada
let cadenaTexto3 = 'Hoy toca hacer ejercicio'
let cadenaAlternativa = 'Y nos pondremos a tope!!!!.';
console.log(cadenaTexto3.concat(' Y aqui concatenamos más texto. ').concat(cadenaAlternativa));

// .indexOf() Este método devuelve el primer índice donde se dé una coincidencia entre la cadena especificada como argumento y la cadena de la que se emplea el método. Si no hay coincidencia, el método devuelve -1:
let cadenaTexto4 = 'Vamos a actualizar el pc con una actualización importante';
console.log(cadenaTexto4.indexOf('z')); //15
console.log(cadenaTexto4.indexOf('v')); //-1

//.lastIndexOf() Es muy parecido al metodo anterior, pero este nos devuelve el indice que coincida entre la cadena pero desde la ultima coincidencia, desde el final de la cadena al principio.

let texto = 'Soy una nueva cadena de texto en JS';
console.log(texto.length);//35
console.log(texto.lastIndexOf('J'));//33
console.log(texto.lastIndexOf('a'));//19

//.match() Este método lo que devuelve la primera la subcadena coincidente. Por ello, si no hay coincidencia, no devuelve nada.

let texto1 = 'Vamos al cine el domingo en familia en el coche de papa.';
console.log(texto1.match('en'));
/* [
'en',
index: 25,
input: 'Vamos al cine el domingo en familia en elcoche de papa.',
groups: undefined
] */

//.replace() Este metodo se utiliza para sustituir un subcadena dentro de una cadena o la cadena entera recibe 2 parametros la cadena que se busca y la cadena que deseamos sustituir

let cadena2 = ' Esto es una cadena de texto EEjemplo';
console.log(cadena2.replace('EEjemplo', 'ejemplo.'));
console.log(cadena2);

//.search() busca la cadena suministrada como parámetro, pero a diferencia de match() no devuelve la subcadena coincidente, sino el índice de la primera coincidencia.Si no hay concidencia, devuelve -1:

let cadena3 = 'Esto es otra cadena de prueba';
console.log(cadena3.search('cadena')); // 13

// .slice() Este metodo devuelve un fragmento de una cadena de texto, sino le pasamos parametros devuelve toda la cadena, al pasarle parametro el indice donde queremos que inicie la cadena y donde queremos que termine, si le pasamos un solo primer parametro nos muestra a partir de ese indice la cadena

let cadena4 = 'Curso de manipulacion del dom';
console.log(cadena4.slice(3,9));
console.log(cadena4.slice(3,-9)); // Los negativos cuentan de derecha a izquierda
console.log(cadena4.slice(9));
console.log(cadena4.slice(1));
console.log(cadena4);

// .split() Este metodo devuelve una matriz con tantos valores como fragmentos resulten en dividir la cadena, tomando como separador el caracter o cadena suministrada como parametro, si se le suministra un argumento como parametro que no esta en la cadena devuelve la cadena completa

let cadena5 = 'Los jueves tengo clase de matematicas';
console.log(cadena5.split(''));
/*
(37) ["L", "o", "s", " ", "j", "u", "e", "v", "e", "s", " ", "t", "e", "n", "g", "o", " ", "c", "l", "a", "s", "e", " ", "d", "e", " ", "m", "a", "t", "e", "m", "a", "t", "i", "c", "a", "s"]
*/
console.log(cadena5.split('t'));
/*
(4) ["Los jueves ", "engo clase de ma", "ema", "icas"]
*/

// .substr() Este metodo es muy similar a .slice() salvo por dos detalles:1. cuando se emplean 2 parametros positivos si devuelve el caracter correspondiente al segundo indice. 2.No esta incluido en ECMA-262

let cadena6 = 'Por la tarde del dia de hoy ha llovido mucho.';
console.log(cadena6.substr(4,6)); //la tar
console.log(cadena6.substr(4)); // la tarde del dia de hoy ha llovido mucho.

// .substring() Este metodo es similar a slice() salvo que como segundo parametro no acepta un valor negativo. Pero si aun asi metemos un vaor negativo este solo cuenta de izquierda a derecha los indices del primer parametros

let cadena7 = 'Vamos a analizar la energia consumida';
console.log(cadena7.substring(3,-7)); // Vam
console.log(cadena7.substring(3,13)); // os a anali
console.log(cadena7.substring(3)); // os a analizar la energia consumida

// .toUpperCase() Nos devuelve una cadena en mayusculas.
let cadena8 = 'El iPad es muy buen tablet.';
console.log(cadena8.toUpperCase());

// .toLowerCase() Nos devuelve uan cadena en minusculas.
let cadena9 = 'Los iPhones siguen siendo muy bueno telefonos pero bastantes caros.';
console.log(cadena9.toLowerCase());
