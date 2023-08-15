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