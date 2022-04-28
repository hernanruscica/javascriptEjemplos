const $d = document;

const array1 = [1, 2, 3, 4, 5];  
const array2 = ['manzana', 'naranja', 'pera', 'banana', 'ciruela', 'uva'];  
const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
const colores = ['rojo', 'verde', 'azul'];
const figurasGeometricas = [
    { nombre: 'hexagono', lados: 6, color: 'marron' },
    { nombre: 'cuadrado', lados: 4, color: 'rojo' },
    { nombre: 'triangulo', lados: 3, color: 'amarillo'},
    { nombre: 'pentagono', lados: 5, color: 'verde' }
];

const palabras = ["casa", "Arbol", "Calle", "elefante", "Dedo", "diccionario"];

const mostrarResultado = (etiqueta, valor) => {
    const $elemento = $d.getElementById(etiqueta);
    //$elemento.innerHTML = "";
    $elemento.innerHTML += valor + "<br>";    
}

function ejemploPush(array1){
    mostrarResultado("resultado", "<h4>push()</h4>");
    mostrarResultado("resultado", "array1 = " + JSON.stringify(array1));
    const arrayResultado = array1.push(4);
    mostrarResultado("resultado", "const arrayResultado = array1.push(4);");
    mostrarResultado("resultado", "array1 = " + array1);
    mostrarResultado("resultado", "arrayResultado = " + arrayResultado);
}
function ejemploPop(array2){
    mostrarResultado("resultado", "<h4>pop()</h4>");
    mostrarResultado("resultado", "array2 = " + JSON.stringify(array2));
    const arrayResultado = array2.pop(4);
    mostrarResultado("resultado", "const arrayResultado = array1.pop(4);");
    mostrarResultado("resultado", "array2 = " + array2);
    mostrarResultado("resultado", "arrayResultado = " + arrayResultado);
}

//ejemploPush(array1);
//ejemploPop(array2);

/*  */

/*inserta un nuevo elemento a un array*/
console.log("Ejemplo de push");
console.log("array1 = [" + array1 + "] - longitud = " + array1.length  );
const longitudArrayDespuesPush = array1.push(3);
console.log("Despues de array1.push(3) - array1 = [" + array1 + "]" );
console.log("y push devuelve la longitud del nuevo array - " + longitudArrayDespuesPush );

/*pop() saca el ultimo elemento de un array*/
console.log("Ejemplo de pop");
console.log("array2 = [" + array2 + "] - longitud = " + array2.length );
const ultimoElementoArray2 = array2.pop();
console.log("Ultimo elemento del array, sacado con pop() = " + ultimoElementoArray2);
console.log("Nueva longitud de array2 = " + array2.length);

/*forEach() recorre todos los elementos de un array, devolviendo valor, indice y array original*/
console.log("Ejemplo del metodo forEach()");
diasSemana.forEach((nombreDia, indice) => console.log(`${nombreDia} indice: ${indice}`));

/*forEach() OJO que foreach sobreescribe elementos, como se ve abajo.
es por eso que como ejemplo uso esta copia del array que hice con el metodo de casteo */
const diasSemanaBorrable = [... diasSemana];
console.log("Ejemplo de sobreescribiendo un elemento con el metodo forEach()");
diasSemana.forEach((nombreDia, indice) => {
    nombreDia = "Dia sobreescrito";
    console.log(`${nombreDia} indice: ${indice}`);
});

/*Ejemplo de shift - Elimina un elemento al comienzo del array*/
console.log("Ejemplo de shift()");
console.log("colores = [" + colores + "] - longitud = " + colores.length  );
const eliminadoConShift = colores.shift();
console.log("Despues del colores.shift() - colores = [" + colores + "]");
console.log(`Elemento eliminado = ${eliminadoConShift} - Nueva longitud = ${colores.length}`);

/*Ejemplo de unshift - Inserta un nuevo elemento al comienzo del array*/
console.log("Ejemplo de unshift()");
console.log("colores = [" + colores + "] - longitud = " + colores.length  );
const longitudDespuesDeUnshift = colores.unshift('naranja');
console.log("Despues del colores.unshift('naranja) - colores = [" + colores + "]");
console.log(`Longitud del array despues de unshift = ${longitudDespuesDeUnshift}`);

/*Ejemplo de indexOf() - Encuentra el index de un elemento */
console.log("Ejemplo de indexOf()");
console.log(`El valor "verde" está en la posicion ${colores.indexOf('verde')}`);

/*Ejemplo de splice() - Elimina un único elemento mediante su posición
Los parametros son la posición del primer elemento que se elimina y el número de elementos que queremos eliminar a partir de ese.
Devuelve un array con los elementos eliminados*/
console.log("Ejemplo de splice");
console.log("colores = [" + colores + "] - longitud = " + colores.length  );
const coloresSacadosDelArray = colores.splice(1, 1);
console.log(`Despues de colores.splice(1, 1); - colores = [${colores}]`);
console.log(`Colores sacados del array = ${coloresSacadosDelArray}`);

/* cambiar el valor del atributo length de un array no agrega elementos, los elementos existentes estan en keys.
los foreachs recorren las keys*/
diasSemana.length = 10;
console.log(`${Object.keys(diasSemana)} pero tiene ${diasSemana.length} elementos`);
console.log(diasSemana[6]);
diasSemana.forEach(dia => console.log(dia));
console.log(diasSemana);
diasSemana.length = 7;

/*Ejemplos de map - recibe una funcion con la cual procesa a todos los elementos del array 
devuelve un nuevo array con los resultados de esa funcion para cada elemento del array orginal*/
const diasSemanaMayusculas = diasSemana.map(dia=>dia.toUpperCase());
console.log(`Con map armé un nuevo array con los dias en mayusculas.\ndiasSemanaMayusculas = ${diasSemanaMayusculas}`);
console.log(`diasSemana = ${diasSemana}`);


/*Ejemplos de reduce - ejecuta una funcion contra todos los elementos del array y devuelve un unico valor*/
let todosDiasSemanaCadena = diasSemana.reduce((diaAnterior, diaActual) => diaAnterior + ' ' + diaActual, ''); 
console.log(`Cadena generada con map a partir del array de diasSemana = ${todosDiasSemanaCadena}`);
//console.clear();


/*Ejemplos de sort - En este caso ordena un array de objetos por el nombre del color, de menos a mas letras
sobreescribe el propio array, asi que por le hice una copia con el metodo de casteo ...*/
const figurasGeometricasOrdenadas = [...figurasGeometricas].sort((a, b) => {return a.color.length - b.color.length;});
console.log("Ordenadas por la cantidad de letras del nombre del color: " + JSON.stringify(figurasGeometricasOrdenadas));

/*Otro ejemplo de sort - En este caso ordena un array de objetos por la cantidad de lados, valor de una de las propiedades del objeto*/
const figurasGeometricasOrdenadasDos = [...figurasGeometricas].sort((a, b) => {
    if (a.lados > b.lados) return 1;
    if (a.lados < b.lados) return -1;
    return 0;
});
console.log("Ordenadas por la cantidad de lados: " + JSON.stringify(figurasGeometricasOrdenadasDos));

/*ejemplos de filter() - devuelve un nuevo array con los elementos que hayan pasado la condicion pasada como funcion flecha
no altera el array original*/
const palabrasEnMinus = palabras.filter((palabra) => (palabra[0] === palabra[0].toLowerCase()));
console.log(palabrasEnMinus);

/*Otro ejemplo de filter - creo un nuevo array con el color violeta para las figuras geometricas con cantidad de lados impares*/
const figurasGeometricasLadosImpares =  figurasGeometricas.filter((figura) => figura.lados % 2 !== 0);
figurasGeometricasLadosImpares.forEach(figura => figura.color = 'violeta');
console.log(figurasGeometricasLadosImpares);

/*Ejemplo de concat() */
const frutasYcolores = array2.concat(colores);
console.log(frutasYcolores);

/*Ejemplos de casteo de valores en arrays, uso la funcion map para tomar solo los nombres*/
const figurasGeometricasNombres = [...figurasGeometricas].map(figura => figura.nombre);
console.log(figurasGeometricasNombres);

/*Ejemplo de find() - devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada. */
let primerPalabraMayusculas = palabras.find(palabra => palabra[0] === palabra[0].toUpperCase()); 
console.log(`La primer palabra en mayusculas del array "palabras" es : ${primerPalabraMayusculas}`);