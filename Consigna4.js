// se deben de ingresar el numero entero
const numero1 = process.argv[2];

// declaro varieble r para almacenar la suma de los divisores
let r = 0;
// recorro todos los numero y si el divisor es cero quiere decir que ese numero es divisible
for (let i = 1; i < numero1 - 1;i++){
    if(numero1%i==0){
        r += i;
    }
}

console.log("Un número deficiente es todo número natural que cumple que la suma de sus divisores propios es menor que el propio número.");
// muestro si el numero ingresado por consola es Deficiente
if(r < numero1){
    console.log("El número ingresado ",numero1," es Deficiente");
}else{
    console.log("El número ingresado ",numero1,"- NO - es Deficiente");
}
