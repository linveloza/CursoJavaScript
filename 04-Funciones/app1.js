/*******************
 * Funciones como expresiones
 */

var prueba = function(nombre){
    return 'Hola' + nombre;
};

console.log(prueba(" Linda"));

/*********************
 * Argumentos no definidos (undefined)
 */

var nombre;
var indefinido = function(n){
    return "Hola " + n;
};

console.log(indefinido(nombre));

/********************
 * Argumentos Nulos
 */

var a;
var valorNull = function(a){
    return a;
};

a = null;
console.log(valorNull(a));

/*******************
 * Argumentos por defecto (default)
 */

var sumar = function(a, b, c = 3){
    return a + b + c;
};

console.log(sumar(2, 10));