const $d = document;

const array1 = [1, 2, 3, 4, 5];  
const array2 = ['manzana', 'naranja', 'pera', 'banana', 'ciruela', 'uva'];  
const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
const colores = ['rojo', 'verde', 'azul'];

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