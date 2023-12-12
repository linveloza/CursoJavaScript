//Se tienen los siguientes datos:

var pesoLuis = 72;
var alturaLuis = 1.72;

var pesoCarlos = 89;
var alturaCarlos = 1.75;

/*Utilizar la siguiente fórmula para calcular el IMC (índice de masa corporal) de Luis y de Carlos,
IMC es igual al peso dividido entre la altura al cuadrado, luego comparar e indicar si el IMC de Carlos 
es superior al de Luis.*/

//Solución:

var luisIMC = pesoLuis / (alturaLuis * alturaLuis);
console.log("El IMC de luis es: " + luisIMC);

var carlosIMC = pesoCarlos / (alturaCarlos * alturaCarlos);
console.log("El IMC de Carlos es: " + carlosIMC);

var IMCSuperior = carlosIMC > luisIMC;
console.log("¿El IMC de Carlos es superior al de Luis?: " + IMCSuperior);