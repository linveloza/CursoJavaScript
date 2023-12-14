/*//Examinando el DOM

*//**************** .dir muestra toda la información del documento*/
// console.dir(document);
// console.log(document.URL);

/**************Puedo cambiar el titulo del documento*/
// document.title = 'Prueba';
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);

/***************Todos los objetos que tiene el documento*/
// console.log(document.all);

/***************Mostrar solo el arreglo número 6 en este caso el título*/
// console.log(document.all[6]);
// console.log(document.forms[0]);

/***************getElementById() Devuelve el contenido de un elemento en su identificador*/
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(header);

/****************textContent o innerText son las formas que se utilizan para cambiar el 
contenido que tiene el texto*/
// headerTitle.textContent = 'Hola';
// headerTitle.innerText = 'Adios';

/**********también se puede cambiar código en el HTML*/
// headerTitle.innerHTML = '<h3>Prueba</h3>';

/***************getElementsByClassName() Devuelve el contenido de varios elementos*/
// var items = document.getElementsByClassName('list-group-item');
// console.log(items[0]);
// items[0].textContent = 'Prueba';

/***************getElementsByTagName Devuelve el contenido de las etiquetas*/
var items = document.getElementsByTagName('li');
items[2].textContent = 'Prueba02';


