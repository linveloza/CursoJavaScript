/*************************
 * Ejercicio de sentencias
 */

/**************************
 * Tienes dos alumnos, Pablo y María.
 * Pablo tiene las siguientes notas en el curso de JavaScript: 14, 8, 16.
 * María tiene las siguientes notas en el curso de JavaScript: 12, 18, 10.
 * 
 * Calcular el promedio de cada alumno, además indicar quién tiene el promedio
 * superior, e indicar si el alumno esta aprobado, para ello su promedio
 * debe ser superior a 13.
 */

var notaPablo, notaMaria, promedioPablo, promedioMaria, promedioSuperior;

notaPablo = (14 + 8 + 16) / 3;
notaMaria = (12 + 18 + 10) / 3;

promedioPablo = notaPablo;
    console.log("El promedio del alumno Pablo es: " + promedioPablo);

promedioMaria = notaMaria;
    console.log("El promedio de la alumna María es: " + promedioMaria);

promedioSuperior = 13;

if((notaPablo > notaMaria) && (notaPablo >= promedioSuperior)){
    console.log("Pablo tiene el promedio superior y aprobo");
}else {
    console.log("María tiene el promedio superior y aprobo");
};