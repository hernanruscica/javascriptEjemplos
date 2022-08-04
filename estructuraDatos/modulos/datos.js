//Algunos arrays para practicar
export const animales = ["Gorila", "Chimpancé", "Caballo", "Ballena", "Perro", "Gato", "León", "Tigre"];
export const colores = ["negro", "Blanco", "rojo", "verde", "azul", "amarillo", "violeta", "celeste", "naranja", "bordo", "fucsia", "marron", "turquesa"];
export const nombres = ["hernan", "ana", "juan", "carlos", "ezequiel", "cristina", "norma", "florencia", "maria", "damian", "sergio", "jonathan", "brian", "nelson", "leandro"]; 
export const precios = [1, 2.5, 3.45, 0.8, 1.7, 24.78];

//enlaces interesantes metidos en un array de objetos para mas placer
export const enlacesInteresantes = [
    {   id: 0,
        url : "https://dev.to/gdcodev/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d",
        titulo : "25 Métodos de Arrays en JavaScript que todo desarrollador debe conocer.",
        descripcion: "Articulo interesante en el cual se basa el principio de estas practicas"},
    {   id: 1,
        url : "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array",
        titulo : "Documentacion sobre Arrays en MDN",
        descripcion: "Estan todo los metodos para chequear"},
    {   id: 2,
        url : "https://www.youtube.com/watch?v=G6J2kl1aVao",
        titulo : "JavaScript Array Map Method Practice in 5 Minutes",
        descripcion: "ejemplos del metodo map de los arrays"}
]

export const productos = [
    {   
        id: 0,
        nombre: "ravioles",
        precio: 220,
        unidad: "caja",
        imagen: "ravioles.png"
    },
    {   
        id: 1,
        nombre: "Fideos rellenos",
        precio: 400,
        unidad: "kilogramos",
        imagen: "fideosRellenos.jpg"
    },
    {   
        id: 2,
        nombre: "Fideos",
        precio: 250,
        unidad: "kilogramos",
        imagen: "fideos.png"
    },
    
]

/*
creador de personas aleatorias
*/

export let nombresHombres = ["juan", "carlos", "ernesto", "ezequiel", "damian", "cristian", "sergio", "jonathan", "brian", "nelson", 
"leandro", "genaro", "claudio", "ignacio", "david", "luciano", "ismael", "eugenio", "francisco", "gervasio", "oscar", "enrique"];

export let apellidos = ["Gonzalez", "perez", "rodríguez", "fonseca", "castro", "hernández", "villalba", "luna", "olivera", "mansilla", "ponce", "sosa", "quiroga",
"ramírez", "juárez", "fernández", "acosta", "campos", "gracía", "navarro", "vargas", "moreno", "álvarez", "blanco", "cruz", "godoy", "molina",
"soria", "lópez", "torres", "herrera", "giménez", "carrizo", "domínguez", "peralta", "acuña", "benítez", "chávez", "muñoz",
"paz", "sanchez", "vera", "ruiz", "silva", "aguero", "castillo", "ledesma", "moyano", "pérez, rivero", "soto", "torre", "vega",
"cáceres", "arias", "bustos", "córdoba", "farías", "leiva", "maldonado", "nuñez", "ojeda", "velázquez", "toledo", "roldán", "pereyra", "miranda", "lucero",
"ferreyra", "vázquez", "díaz", "bravo", "ávila", "barrios", "cabrera", "domínguez", "figueroa", "gutiérrez", "russo", "maidana", "ortiz", "rojas", "ayala", "correa",
"medina", "valdez", "rivero", "peralta", "morales", "gímenez", "franco", "martín", "páez", "ramos", "aguirre", "cáceres", "duarte", "flores", "mendoza", "martínez", "ríos", "coronel", "méndez", "romero"]

export let proviciasArgentinas = ["buenos aires", "santa fe", "cordoba", "tierra del fuego", "santa cruz", "chubut", "rio negro", "la pampa", "entre rios", "san luis", "san juan",
 "mendoza", "catamarca", "misiones", "salta", "jujuy", "ciudad autonoma de buenos aires", "santiago del estero", "formosa", "chaco", "tucuman", "corrientes", "La Rioja", "neuquen"];

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