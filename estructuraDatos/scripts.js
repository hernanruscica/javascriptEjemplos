import {animales,colores, precios, nombres, enlacesInteresantes, nombresHombres, apellidos, proviciasArgentinas, productos} from './modulos/datos.js';
console.log("desde js");


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

console.log(crearPersonaAzar(), proviciasArgentinas.length);

/* Accediendo a los elementos del array y estructuras
 ***************************************************
console.log(animales);
console.log(colores[4]);
console.log(enlacesInteresantes);
console.log(enlacesInteresantes[0]);
console.log("titulo : ", enlacesInteresantes[0].titulo);
*/




/******************************************************** 
map() : Permite recorrer el array y modificar los elementos presentes en él, 
retornando un nuevo array con la misma longitud que el original.

Generar nuevos arrays con atributos buscados dentro de un array o array de objetos en particular. 
Aclarar que devuelve un array de la misma longitud que el original.
Por ejemplo, generar un nuevo array con el mismo array de objetos, pero con menos atributos en cada uno.
Devolver un nuevo array con atributos minificados, como por ejemplo, 
sacar los primeros nombres de un atributo del tipo "nombre y apellido"
********************************************************/

//Primer ejemplo donde le aplico un descuento a un array de precios
let descuento = 0.1;
const preciosConDescuentos = precios.map(precio => precio - precio * descuento);
console.log(`Precios originales: ${precios} \nPrecios con descuento: ${preciosConDescuentos}`);

/*segundo ejemplo donde pone en mayusculas todos los titulos del array enlacesInteresantes (array de objetos) 
y devuelve un array con los elementos procesados*/
const enlacesInteresantesMayusculas = enlacesInteresantes.map(enlace => enlace.titulo.toUpperCase());
console.log(`Enlaces originales (objetos): ${enlacesInteresantes} \nEnlaces con Mayusculas (elementos): ${enlacesInteresantesMayusculas}`);

/*Tercer ejemplo, donde uso una funcion para hacer algo en map*/
const leerPrimeraLetra = (palabra) => { return palabra.slice(0, 1); };
const primerasLetrasColores = colores.map(color => leerPrimeraLetra(color));
console.log(colores);
console.log(primerasLetrasColores);

/*Cuarto Ejemplo: consigo todos los nombres de los productos */
const nombreProductos = productos.map(producto => producto.nombre);
console.log(nombreProductos);

/*quinto ejemplo, donde retorno un array de objetos, con el nombre y enlace de cada uno de los elementos.*/
const atributosEnlacesProductos = productos.map((producto) => ({
    titulo: producto.nombre,
    enlace: `./imgs/${producto.imagen}`    
}));
console.log(atributosEnlacesProductos);




/*************************************************************** 
filter: devuelve un nuevo array con distinta cantidad de elementos que el original.
Con los resultados encontrados de la busqueda
******************************************************************/

/*Primer ejemplo: donde obtenemos productos, cuyos precios sean menores a 300*/
const productosEconomicos = productos.filter(elemento => elemento.precio < 300);
console.log(productosEconomicos);
/*Ahora si quisieramos saber solo los nombres de dichos productos, tendriamos que usar map */
const nombresProductosEconomicos = productosEconomicos.map(productoEconomico => productoEconomico.nombre);
console.log(nombresProductosEconomicos);


/*Segundo ejemplo: filtramos por letra inicial de los apellidos*/
const apellidosEmpiezanConA = apellidos.filter(apellido => apellido.slice(0, 1) === 'a' || apellido.slice(0, 1) === 'á');
console.log(apellidosEmpiezanConA);


/*Tercer ejemplo: le paso una funcion para filtrar por la letra inicial b para los apellidos */
const filtrarLetraInicialB = (apellido) => {
    let apellidoEncontrado = apellido.slice(0, 1) === 'b';
    if (apellidoEncontrado === true) {
        return apellido
    }    
}
const apellidosEmpiezanConB = apellidos.filter(apellido => filtrarLetraInicialB(apellido));
console.log(apellidosEmpiezanConB);


/*Cuarto ejemplo: le paso una funcion para filtrar por la letra inicial - Ademas a la funcion se le puede pasar la letra que tiene que buscar */
const filtrarLetraInicial = (apellido, letra) => {
    let apellidoEncontrado = apellido.slice(0, 1) === letra;
    if (apellidoEncontrado === true) {
        return apellido
    }    
}
const apellidosEmpiezanConC = apellidos.filter(apellido => filtrarLetraInicial(apellido, 'c'));
console.log(apellidosEmpiezanConC);




/*
SOME
busca dentro de una array, viendo si se cumple una cierta condicion, en al menos alguno de los elementos. 
Devuelve true o false. 
*/
/*Primer ejemplo, busco si en el array de colores, alguno empieza con la letra a */
let hayAlgunColorEmpieceConLetraA = colores.some(color => color.slice(0, 1) === 'a' );
console.log("hay algun color que empiece con la letra 'A'?: ", hayAlgunColorEmpieceConLetraA);

/*Segundo ejemplo: busco si en el array de colores, alguno empieza con la letra que paso como argumento */
const hayAlgunColorEmpieceConLetra = (color, letra) => {
    return color.slice(0, 1) === letra;    
};
let letraBuscada = 'b'
let hayAlgunColorEmpieceConLetraB = colores.some(color => hayAlgunColorEmpieceConLetra(color, letraBuscada));
console.log(`hay algun color que empiece con la letra ${letraBuscada}?: `, hayAlgunColorEmpieceConLetraB)


/*
SORT: Sirve para ordenar arrays. Utiliza la función de comparación.
Para cambiar el orden, hay que invertir el orden
*/

/*Primer ejemplo,  ordeno los productos de menor a mayor, segun su precio*/
const preciosProductosMenorMayor = productos.sort((a, b) => b.precio - a.precio);
console.log(preciosProductosMenorMayor);

/*Segundo ejemplo, ordeno por orden alfabetico, antes tengo que normalizarlas con la primer letra mayusculas */
const proviciasArgentinaMayus = proviciasArgentinas.map(provincia => provincia[0].toUpperCase() + provincia.slice(1));
const proviciasOrdenAlfabetico = proviciasArgentinaMayus.sort((a, b) => {
    if (b < a) return 1;
    return -1;
});
console.log(proviciasOrdenAlfabetico);


