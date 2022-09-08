// se deben de ingresar un numero 
const numero1 = process.argv[2];

// si el numero ingresado es cero, muestro texto y sale del proceso
if (numero1 == 0) {
    console.log('El numero :',numero1,' es par, impar o ninguno? ');
    return;
}

// Un número par es divisible por 2, es decir que al dividir el número por 2 el resto de la división es 0
// por lo tanto la expresion numero1%2 nos da el resto y si es cero quiere decir que es par
if(numero1%2==0){
    console.log("El número ingresado ",numero1," es par");
}else{
    console.log("El número ingresado ",numero1," es impar");
}
