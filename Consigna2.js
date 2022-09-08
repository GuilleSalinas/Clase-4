const operaciones = require('./funciones.js');

// se deben de ingresar un numero por consola
const numero1 = process.argv[2];

console.log('Numero ingresado : ',numero1);

// guardo en resultado la diferencia entre el numero ingresado menos 90
const resultado = operaciones.igual(numero1, 90);

// comparo en resultado y si es mayor a 90 es true
if (resultado >= 0 ) {
    console.log('el resultado es true, el numero ingresado es mayor o igual a 90')
    return;
} 
console.log('el resultado es False, el numero ingresado es menor a 90');
