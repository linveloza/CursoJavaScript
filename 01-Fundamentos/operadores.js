//Operadores matemáticos (+, -, *, /)

var edadGrover, edadPablo, diferenciaEdad, yearGrover, yearPablo, yearActual, sumaEdades;

edadGrover = 34;
edadPablo = 28;
yearActual = 2023;

diferenciaEdad = edadGrover - edadPablo;
console.log(diferenciaEdad);

yearGrover = yearActual - edadGrover;
yearPablo = yearActual - edadPablo;

console.log("Año en que nació Grover: " + yearGrover);
console.log("Año en que nació Pablo: " + yearPablo);

sumaEdades = edadGrover + edadPablo;
console.log(sumaEdades);

console.log(yearActual * 5);
console.log(yearActual / 2);

//Operadores lógicos

var mayorEdad, mayorEdad1, mayorEdad2;

mayorEdad = edadGrover > edadPablo;
console.log(mayorEdad);

mayorEdad1 = edadGrover < edadPablo;
console.log(mayorEdad1);

mayorEdad2 = edadGrover == edadPablo;
console.log(mayorEdad2);

//Operador typeof
/**** Tipo de dato que tiene una variable ***/

console.log(typeof edadGrover);
console.log(typeof mayorEdad);
console.log(typeof "Grover es mayor que pablo");

//Operadores Unarios aritméticos
//++ Incremento
//-- Decremento

var edadCarmen = 18;
var edadMaria = 14;

console.log(edadCarmen++);
console.log(edadCarmen);

console.log(--edadMaria);

//Operadores de asignación
//=

var a = 5;
var b = 18;

a += b;
a -= b;
a *= b;
a /= b;

var c;

c = a % b; //% devuelve el residuo de la división.
a %= b;

//Operadores javaScript https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators