console.log("desde js");


//Algunos arrays para practicar
const animales = ["Gorila", "Chimpancé", "Caballo", "Ballena", "Perro", "Gato", "León", "Tigre"];
const colores = ["negro", "Blanco", "rojo", "verde", "azul", "amarillo", "violeta", "celeste", "naranja", "bordo", "fucsia", "marron", "turquesa"];
const nombres = ["hernan", "ana", "juan", "carlos", "ezequiel", "cristina", "norma", "florencia", "maria", "damian", "sergio", "jonathan", "brian", "nelson", "leandro"]; 
const precios = [1, 2.5, 3.45, 0.8, 1.7, 24.78];

//enlaces interesantes metidos en un array de objetos para mas placer
const enlacesInteresantes = [
    {   id: 0,
        url : "https://dev.to/gdcodev/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d",
        titulo : "25 Métodos de Arrays en JavaScript que todo desarrollador debe conocer.",
        descripcion: "Articulo interesante en el cual se basa el principio de estas practicas"},
    {   id: 1,
        url : "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array",
        titulo : "Documentacion sobre Arrays en MDN",
        descripcion: "Estan todo los metodos para chequear"}
]


/* Accediendo a los elementos del array y estructuras
 ****************************************************/
console.log(animales);
console.log(colores[4]);
console.log(enlacesInteresantes);
console.log(enlacesInteresantes[0]);
console.log("titulo : ", enlacesInteresantes[0].titulo);


/******************************************************** 
map() : Permite recorrer el array y modificar los elementos presentes en él, 
retornando un nuevo array con la misma longitud que el original.
********************************************************/

//Primer ejemplo donde le aplico un descuento a un array de precios
let descuento = 0.1;
const preciosConDescuentos = precios.map(precio => precio - precio * descuento);
console.log(`Precios originales: ${precios} \nPrecios con descuento: ${preciosConDescuentos}`);


/*segundo ejemplo donde pone en mayusculas todos los titulos del array enlacesInteresantes (array de objetos) 
y devuelve un array con los elementos procesados
**********************************/
const enlacesInteresantesMayusculas = enlacesInteresantes.map(enlace => enlace.titulo.toUpperCase());
console.log(`Enlaces originales (objetos): ${enlacesInteresantes} \nEnlaces con Mayusculas (elementos): ${enlacesInteresantesMayusculas}`);


/*Tercer ejemplo, donde uso una funcion para hacer algo en map
******************************************/
const leerPrimeraLetra = (palabra) => { return palabra.slice(0, 1); };
const primerasLetrasColores = colores.map(color => leerPrimeraLetra(color));
console.log(colores);
console.log(primerasLetrasColores);

/* Ejemplos para filter: Usar un array de objetos alumnos,
O personas o algo que tengan distintas características, y filtrar por
Esas características, generando un array con los resultados
*/
