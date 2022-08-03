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


/*
creador de personas aleatoreas
*/

let nombresHombres = ["juan", "carlos", "ernesto", "ezequiel", "damian", "cristian", "sergio", "jonathan", "brian", "nelson", 
"leandro", "genaro", "claudio", "ignacio", "david", "luciano", "ismael", "eugenio", "francisco", "gervasio", "oscar", "enrique"];

let apellidos = ["Gonzalez", "perez", "rodríguez", "fonseca", "castro", "hernández", "villalba", "luna", "olivera", "mansilla", "ponce", "sosa", "quiroga",
"ramírez", "juárez", "fernández", "acosta", "campos", "gracía", "navarro", "vargas", "moreno", "álvarez", "blanco", "cruz", "godoy", "molina",
"soria", "lópez", "torres", "herrera", "giménez", "carrizo", "domínguez", "peralta", "acuña", "benítez", "chávez", "muñoz",
"paz", "sanchez", "vera", "ruiz", "silva", "aguero", "castillo", "ledesma", "moyano", "pérez, rivero", "soto", "torre", "vega",
"cáceres", "arias", "bustos", "córdoba", "farías", "leiva", "maldonado", "nuñez", "ojeda", "velázquez", "toledo", "roldán", "pereyra", "miranda", "lucero",
"ferreyra", "vázquez", "díaz", "bravo", "ávila", "barrios", "cabrera", "domínguez", "figueroa", "gutiérrez", "russo", "maidana", "ortiz", "rojas", "ayala", "correa",
"medina", "valdez", "rivero", "peralta", "morales", "gímenez", "franco", "martín", "páez", "ramos", "aguirre", "cáceres", "duarte", "flores", "mendoza", "martínez", "ríos", "coronel", "méndez", "romero"]

let proviciasArgentinas = ["buenos aires", "santa fe", "cordoba", "tierra del fuego", "santa cruz", "chubut", "rio negro", "la pampa", "entre rios", "san luis", "san juan",
 "mendoza", "catamarca", "misiones", "salta", "jujuy", "ciudad autonoma de buenos aires", "santiago del estero", "formosa"];

//altura en Cm. Peso en Kilogramos
const personaEjemplo = [
    {   id: 0,
        nombres: "juan carlos",
        apellidos: "gonzalez",
        colorPelo: "castaño",
        colorOjos: "castaño",
        edad: 22,
        altura: 164,
        peso: 70,    
        provincia: "Buenos Aires",
    }
]

//devuelve un numero aleatorio entre dos valores
const getNumeroAleatorio = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
} 
//console.log(getNumeroAleatorio(0, apellidos.length - 1));

const crearPersonaAzar = () => {
    let primerNombreAzar = nombresHombres[getNumeroAleatorio(0, nombresHombres.length - 1)];
    let segundoNombreAzar =  nombresHombres[getNumeroAleatorio(0, nombresHombres.length - 1)];
    let apellidoAzar = apellidos[getNumeroAleatorio(0, apellidos.length - 1)];
    let colorPeloAzar = "castaño";
    let colorOjosAzar = "castaño";
    let edadAzar = 22;
    let alturaAzar = 164;
    let pesoAzar = 70;
    let provinciaAzar = "Buenos Aires";

    return {   id: 0,
        nombres: primerNombreAzar + " " + segundoNombreAzar,
        apellidos: apellidoAzar,
        colorPelo: colorPeloAzar,
        colorOjos: colorOjosAzar,
        edad: edadAzar,
        altura: alturaAzar,
        peso: pesoAzar,    
        provincia: provinciaAzar,
    }    
}



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

Map
Generar nuevos arrays con atributos buscados dentro de un array o array de objetos en particular. 
Aclarar que devuelve un array de la misma longitud que el original.
Por ejemplo, generar un nuevo array con el mismo array de objetos, pero con menos atributos en cada uno.
Devolver un nuevo array con atributos momificados, como por ejemplo, 
sacar los primeros nombres de un atributo del tipo "nombre y apellido"
Some
Devuelve true o false. 
Revisa si ALGUNO de los elementos cumple con cierta condicion. Al menos uno de los elementos.

Sort
Sirve para ordenar arrays
Utiliza la función de comparación.
Let ArrayOrdenado
*/

console.log(crearPersonaAzar());

