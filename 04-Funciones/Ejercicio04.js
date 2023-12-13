/************************
 * Ejercicio de codificación 3
 * 
 * Calcular cuantos años le falta a una persona para que se jubile.
 * Una persona se jubila a los 65 años de edad.
 * Enviar como datos a la función su año de nacimiento y su nombre.
 * 
 * Solución:
 */

function jubilacion(calcular) {
    var edad = 65 - (2023 - calcular);
    return edad;
};

var year = jubilacion(1991);
var nombre = "Linda";
console.log("A " + nombre + " le faltan " + year + " años para su jubilación.");

/***********************+
 * Ejercicio 4
 * Implementar una función que nos permita evaluar el 
 * porcentaje de respuetas positivas y negativas de un exámen
 * La función debe recibir el nombre, y la cantidad de 
 * respuestas positivas y negativas
 * 
 * La función debe calcular el porcentaje que represente cada
 * tipo de respuestas, en una base de 100 preguntas.
 * 
 * De las respuestas positivas se define el score de la persona en:
 * A(> 90%), B(70% - 89%), C(45% - 69%), D(< 45%)
 */

//Solución:

function porcentaje(nombre, rPositivas, rNegativas) {
    var calcularPositiva = (rPositivas / 100) * 100;
    var calcularNegativa = (rNegativas / 100) * 100;

    if (calcularPositiva > 90) {
        console.log(`${nombre} esta dentro el score A`);
    } else if (calcularPositiva >= 70 && calcularPositiva <= 89) {
        console.log(`${nombre} esta dentro el score B`);
    } else if (calcularPositiva >= 45 && calcularPositiva <= 69) {
        console.log(`${nombre} esta dentro el score C`);
    } else if (calcularPositiva < 45) {
        console.log(`${nombre} esta dentro el score D`);
    } else {
        console.log(`${nombre} no se encuentra dentro de ningún score`)
    }  
    return `${nombre} tiene ${calcularPositiva}% preguntas positivas y ${calcularNegativa}% preguntas negativas`;
};

console.log(porcentaje('Linda', 72, 28));