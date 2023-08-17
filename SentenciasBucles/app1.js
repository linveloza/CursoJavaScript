/************
 * Sentencias if / else
 ************/

var nombre = "Pablo";
var estadoCivil = "Soltero";

if (estadoCivil == "Casado"){
    //si es verdadera la condición
    console.log(nombre + " esta Casado");
}else {
    //si es falsa la condición
    console.log(nombre + " esta Soltero");
};

/***********
 * Sentencias condicionales
 ***********/

var nombree = "Eduardo";
var edad = 67;

// edad < 12 es un niño
// edad > 11, es < 18, es un adolescente.
// edad > 17, es < 60, es un adulto.
// edad > 60, es un anciano.

if (edad < 12){
    console.log(nombree + " es un niño");
}else if((edad > 11) && (edad < 18)){
    console.log(nombree + " es un adolescente");
}else if((edad > 17) && (edad < 60)){
    console.log(nombree + " es un adulto");
}else {
    console.log(nombree + " es un anciano");
};

/*************
 * Operador ternario
 *************/

var edadd = 19;
var nombr = "Luis";

edadd >= 18 ? console.log(nombr + " es mayor de edad") : console.log(nombr + " es un adolescente");

/***********
 * Sentencia switch
 ***********/

var mes = 8;

switch(mes){
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    default:
        console.log("Mes no existe");
};

/*******
 * Sentencias repetitivas - Bucles
 * Sentencia For
 * Sentencia While
 * Sentencia Do..While
 */

//Sentencia For

for (var i = 0;i <= 10;i++){
    console.log(i);
};

for (var i = 10;i >= 1;i--){
    console.log(i);
};

//Sentencia While

var i = 1;

while(i <= 10){
    console.log(i);
    i++;
};

//Sentencia do..while
// asi la condicion sea falsa se va a ejecutar una vez 

var i = 1;

do{
    console.log(i);
    i++;
}while(i <= 10)

/***********
 * Valores verdaderos y falsos
 */

//Valores falsos: undefined, null, 0, ""
//Valores verdaderos: NOT valores falses

var edad;
edad = 0;

if(edad){
    console.log("Variable esta definida");
}else{
    console.log("Variable no definida");
};

//operadores de igualdad

//cuando es === debe ser extrictamente verdadero ya que valida el tipo de dato también
//cuando es == solo valida la información sin importar el tipo de dato que tenga

var mes
mes = "1";

if(mes === 1){
    console.log("Variable con coersión");
}else{
    console.log("Variable sin coersión");
};