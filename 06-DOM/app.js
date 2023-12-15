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
// var items = document.getElementsByTagName('li');
// items[2].textContent = 'Prueba02';

/*******************************
 * querySelector = significa seleccionar el primer elemento 
 */

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hola mundo';

// var input1 = document.querySelector('input[type="submit"]');
// input1.value = 'Ingresar';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

/**************************
 * querySelectorAll = significa seleccionar todos los elementos, funcionando como un arreglo, se
 * debe indicar a cual de todos se le debe realizar el cambio ej: [2]
 */

// var items = document.querySelectorAll('.list-group-item');
// items[2].style.color = 'red';

// var titulos = document.querySelectorAll('.title');
// console.log(titulos);
// titulos[0].textContent = 'Prueba';

//Para ponerle fondo a todos los items impares
// var impar = document.querySelectorAll('li:nth-child(odd)');

//Para ponerle fondo a todos los items pares
// var par = document.querySelectorAll('li:nth-child(even)');

// for(var i=0; i < impar.length; i++){
//     impar[i].style.backgroundColor = '#ccc';
//     par[i].style.backgroundColor = '#FF00FF';
// }

/*****************************
 * ParentNode
 */
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// var main = itemList.parentNode;
// main.style.backgroundColor = '#f4f4f4';
// console.log(main.parentNode.parentNode);

/*****************************
 * ParentElement
 */

// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// var main = itemList.parentElement;
// main.style.backgroundColor = '#f4f4f4';
// console.log(main.parentNode.parentElement);

/*******************
 * childNodes
 */
// console.log(itemList.childNodes);

/*******************
 * children = Niños
 */
// console.log(itemList.children);

/*******************
 * firstElementChild
 */
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'prueba';

/*******************
 * lastChild = 
 */
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'prueba';

/******************
 * previousSibling = Hermanos
 */
// console.log(itemList.previousSibling);

/******************
 * previousElementSibling
 */
// console.log(itemList.previousElementSibling);

/******************
 * nextSibling
 */
// console.log(itemList.nextSibling);

/******************
 * nextElementSibling
 */
// console.log(itemList.nextElementSibling);

/***************************
 * Crear elementos y nodos 
 */
/*******
 * createElement
 * tagName
 */

// var nuevoDiv = document.createElement('div');
// nuevoDiv.className = 'hola';
// nuevoDiv.id = 'div-hola';
// nuevoDiv.setAttribute('title','Hola mundo');

/*******
 * createTextNode
 */
//poner texto dentro de la etiqueta creada anteriormente
// var nuevoNodoText = document.createTextNode('Hola mundo');
// nuevoDiv.appendChild(nuevoNodoText);

// console.log(nuevoDiv);

//ubicación donde queremos insertar el nuevo div
// var contenedor = document.querySelector('.container');
// console.log(contenedor);

//posición donde queremos insertar nuestra etiqueta
// var h1 = document.querySelector('h1');
// console.log(h1);

// contenedor.insertBefore(nuevoDiv, h1);

/******************
 * Agregar eventos = escuchas que estan dentro del sitio web a espera del usuario
 */

// document.getElementById('boton').addEventListener('click', hacerClick);

// function hacerClick(){
//     document.getElementById('header-title').textContent = 'Texto cambiado';
//     // console.log('Usted hizo click')
// }

/****************
 * Actualizar el diseño
 */

