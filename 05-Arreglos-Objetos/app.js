/*********************
 * Arreglos en JavaScript
 */

var nombre = ['Pablo','Carlos','Ana','Teresa'];
var vegetales = new Array('Tomate','Lechuga','Zanahoria');

console.log(nombre[2]);
console.log(nombre[1]);
console.log(vegetales[1]);

//Se puede cambiar la posición por otro nombre utilizandolo de esta manera
nombre[1] = 'José';
console.log(nombre[1]);

vegetales[2] = 'Nabo';
console.log(vegetales[2]);

//length = propiedad de los arreglos cuando queremos saber el tamaño de un arreglo
console.log(nombre.length);

/********************************************
 * Operaciones con arreglos
 */

var frutas = ['pera', 'manzana', 'uva', 'sandía'];
// nos imprime todo el arreglo (elemento, indice y array)
console.log(frutas);


// 2 formas de recorrer un arreglo
// 1.
for(var i = 0; i <= frutas.length -1; i++){
    console.log(frutas[i]);
}

//2.
frutas.forEach(function (elemento, indice, array){
    console.log(elemento, indice);
})

//Si queremos agregar algo más al final de nuestro arreglo se utiliza push
frutas.push('naranja');
console.log(frutas);

//Si queremos agregar algo más al inicio de nuestro arreglo se utiliza unshift
frutas.unshift('fresas');
console.log(frutas);

//Si queremos eliminar lo último agregado en nuestro arreglo se utilzia pop
frutas.pop();
console.log(frutas);

//Si queremos eliminar lo que se encuentra al inicio de nuestro arreglo se utiliza shift
frutas.shift();
console.log(frutas);

//La posición del elemento que escribamos con indexOf es decir el índice
var pos = frutas.indexOf('uva');
console.log(pos);

//Con splice podemos eliminar el elemento que queramos (indice donde se encuentra, cuantos elementos queremos eliminar)
frutas.splice(1,1);
console.log(frutas);

/**************************************
 * Arreglos con datos de diferentes tipos
 */

var persona = ['Pablo', 'Vasquez', 34, '9999999999', 1.75];
console.log(persona);

/**************************************
 * Objetos Literales
 */

var persona = {
    nombre: 'Pablo',
    apellido: 'Vasquez',
    gustos: ['fútbol', 'Películas', 'Inglés'],
    trabajo: 'Instructor',
    esCasado: true
};

console.log(persona);
console.log(persona.apellido);
console.log(persona['apellido']);

persona.esCasado = false;
console.log(persona.esCasado);

/*************************************
 * Objetos con la sintaxis Object
 */

var persona2 = new Object();
persona2.nombre = 'Ana';
persona2.apellido = 'Pinedo';
persona2['trabajo'] = 'WebDeveloper';

console.log(persona2);

/*************************************
 * Ojetos y Métodos
 */

var persona3 = {
    //Propiedades
    nombre: 'Pablo',
    apellido: 'Vasquez',
    gustos: ['fútbol', 'Películas', 'Inglés'],
    trabajo: 'Instructor',
    esCasado: true,
    yearNacimiento: 1991,

    //Métodos
    calcularEdad: function(){
        this.edad = 2023 - this.yearNacimiento;
    }
};

persona3.calcularEdad();
console.log(persona3);