//Ejercicio de codificación
//Se tiene los siguientes datos:

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

/* Utilizar la siguiente formula para carcular el IMC (Índice de masa corporal) de Luis y de Carlos,
IMC es igual al peso dividido entre la altura al cuadrado, luego comparar e indicar si el IMC de Carlos
es superior al de Luis.*/

//Solución:

var luisIMC, carlosIMC, superiorIMC;

luisIMC = pesoLuis / (alturaLuis * alturaLuis);
console.log("El IMC de Luis es: " + luisIMC);

carlosIMC = pesoCarlos / (alturaCarlos * alturaCarlos);
console.log("El IMC de Carlos es: " + carlosIMC);

superiorIMC = carlosIMC > luisIMC;
console.log("¿El IMC de Carlos es superior al IMC de Luis? " + superiorIMC);