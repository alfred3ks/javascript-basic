/* Los condicionales.

Estructura de control que nos permite decidir el flujo de nuestro codigo.

if(){
    //code
} else {
    //code
}

Los condiconales nos permite decidir si se ejecuta o no un codigo. Para esta estructura de control veremos un primitivo, el boolean, que determian si un valor es falso o verdadero. Las estructuras de control solo ejecutan el codigo que es true.
Veamos un ejemplo:

*/

let sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 15,
    ingeniero: true,
    cocinero: false,
    dj: false,
    cantante: false,
    guitarrista: true,
    drone: true
}


// Vamos a definir una funcion que nos dice que profesion tiene una persona.

function imprimirProfesion(persona){
    console.log(`${persona.nombre} es: `);

    if(persona.ingeniero){
        console.log('Ingeniero.');
    } else {
        console.log('No es ingeniero.');
    }
    if(persona.cocinero){
        console.log('Cocinero.');
    }
    if(persona.cantante){
        console.log('Cantante.');
    }
    if(persona.guitarrista){
        console.log('Cantante.');
    }
    if(persona.dj){
        console.log('DJ');
    }
    if(persona.drone){
        console.log('Piloto de drones');
    }
}

imprimirProfesion(sacha);

// Reto: escribir una funcion que imprima si es mayor de edad.

function esMayorDeEdad(persona){
    if(persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad.`);
    } else {
        console.log(`${persona.nombre} es menor de edad.`);
    }
}

esMayorDeEdad(sacha);

