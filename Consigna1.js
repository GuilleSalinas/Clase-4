const operaciones = require('./funciones.js');

// se deben de ingresar los numeros por consola separados por un espacio ej. 15 18
const numero1 = process.argv[2];
const numero2 = process.argv[3];

console.log('Primer numero ingresado : ',numero1);
console.log('Segundo numero ingresado : ',numero2);

// guardo en resultado la diferencia de los dos numeros ingresados
const resultado = operaciones.igual(numero1, numero2);

// los comparo y si es cero quiere decir que los numero son iguales y se corta el proceso
if (resultado == 0 ) {
    console.log('el resultado es true, los numeros ingresados son iguales')
    return;
} 
// si los numeros no son iguales muestro el resultado
console.log('el resultado es False, los numeros ingresados son distintos');

