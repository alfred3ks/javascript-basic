/*

Existen varias formas de hacer comparaciones de variables y objetos en JS, para usar comparaciones en JS usaremos el doble signo igua (==).Esto realiza la comparacion en tipos de los elementos comparados.

Cuando realizamos comparaciones es recomendable usar el triple igual (===). Esto permite a JS hacer la comparacion en valor y tipo de los dos elementos comparados.

En JS existen 5 tipos de datos que son primitivos:
- Boolean
- Null
- Undefined
- Number
- String

Veamos los ejemplos a continuacion:

*/

let x = 4;
let y = '4';

console.log(x == y); // true

// Cuando usamos doble igual (==) JS lo que hace es comparar ambas variables en el tipo de la varaible, agarra el valor de x = 4 numerico  y lo tranasforma a un string y lo compara con la variable y = '4' que es otro string. Por eso nos devuuelve true.

console.log(x === y); // false

// En este caso hace la comparacion en valor y tipo. Es recomendable usar triple igual siempre que hagamos comparaciones.

console.log('====================================');
// Ahora vamos a comparar 2 objetos.

let usuarioUno = {
    nombre: 'Sacha'
}

let usuarioDos = {
    nombre: 'Sacha'
}

console.log(usuarioUno == usuarioDos); // false
console.log(usuarioUno === usuarioDos); // false

// Para el caso de objetos es muy diferente que con los primitivos. Aqui lo que hace JS es preguntar por la referencia de la variable que estamos utilizando. Si necesitamos que nos de true es hacer que un objeto apunte a la referencia del otro. Lo vemos a continuacion:
console.log('====================================');

let usuarioTres = {
    nombre: 'Andres'
}

let usuarioCuatro = usuarioTres;

console.log(usuarioTres == usuarioCuatro); // true
console.log(usuarioTres === usuarioCuatro); // true

console.log('====================================');
// Ahora veamos con la creacion de objetos

let usuarioCinco = {
    ...usuarioTres
}

console.log(usuarioTres == usuarioCinco); // false
console.log(usuarioTres === usuarioCinco); // false

// Como podemos ver en ambos coso da false porque dentro del onjeto usuarioCinco estamos creando un nuevo usuario y tiene otra referencia en memoria.
console.log('====================================');

// Ahora veamos un ejemplo donde creamos un primer objeto, un segundo objeto apunta al primer objeto. Luego modificamos el segundo objeto y veremos que al modificar el segundo se nos modifica el primero.

let obj1 = {
    nombre: 'Batman'
}
console.log(obj1); // Batman

let obj2 = obj1;
console.log(obj2); // Batman


obj2.nombre = 'Superman';
console.log(obj1);
console.log(obj2);

