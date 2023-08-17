//Una función es una operación, que nos va a devolver un resultado
function bienvenido(){
    return "Hola bienvenido a la sección de funciones";
}
var mensaje = bienvenido();
console.log(mensaje);

//Partes de una función
//entradas(argumento), código, salida(return)

function cuadradoNumero(num){
    var resultado = num * num;
    return resultado;
}

var numero = 3;
var valor = cuadradoNumero(numero);
console.log(valor);
console.log(cuadradoNumero(5));

//Función que convierte de grados Fahrenheit a Celsius
// 32F = 0C, 68F = 20C.
// C = (F - 32) * 5 / 9

function convertirFahaCelsius(gradoFah){
    var celsius = (gradoFah - 32) * 5 / 9;
    return celsius;
}

var tempUno = convertirFahaCelsius(32);
var tempDos = convertirFahaCelsius(68);
console.log("32F equivalen a " + tempUno + "C");
console.log("68F equivalen a " + tempDos + "C");

//Devolver la edad de una persona con el año

function edad(convertir){
    var edadPersona = 2023 - convertir;
    return edadPersona;
}

var year = edad(1991);
console.log("La persona tiene: " + year + " años");

/**************
 * Ejercicio de codificación 3
 * 
 * Calcular cuantos años le falta a una persona para que se jubile.
 * Una persona se jubila a los 65 años de edad.
 * Enviar como datos a la función su año de nacimiento y su nombre.
 * 
 * Solución:
 */

function calculoJubilacion(jubilacion, nombre){
    var edadPersona = edad(jubilacion);
    var jubilar = 65 - edadPersona;
    console.log("A " + nombre + " le faltan " + jubilar + " años para jubilarse");
};

calculoJubilacion(1990, "Pablo");