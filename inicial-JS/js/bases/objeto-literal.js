// siempre despues de un = si viene unas {} es un objeto!!!
let personaje={
nombre: 'Tony Stark', //con coma, agrego mas propiedades al objeto
codeName: 'IronMan',
vivo: true,
murioDeUnTiro:true,
edad: 40,
coords: {
    latitud:34.034,
    longitud: -118.70
},
trajes: ['Mark 1','Mark 2', 'Mark V'], //si termino con ',' no pasa nada, no va a fallar el codigo 
direccion:{
    zipCode: '10880, 90265',
    ubicacion: "Malibu, California",
},
// en el caso de que necesite un espacio entre 2 palabras para una variable ,la coloco entre ''
'ultima pelicula':"End Game"
};

console.log("Nombre", personaje.nombre);  //para imprimir tengo que ver que este llamando al objeto y luego a la propiedad ej: personajes.nombre
console.log(personaje.coords.latitud); //aca ingreso cada vez mas profundo en el objeto ,como vemos hay un array interno en el objeto.
console.log(personaje.trajes);
console.log(personaje);
console.log('Nombre en Codigo:' ,personaje['codeName']);
console.log('Numero de trajes de Ironman:',personaje.trajes.length)
// Asi direcciono al array y luego despues del = ingreso al array y con .length -1 agarro el valor de ese array y lo imprimo
console.log("Ultimo Traje:" ,personaje.trajes[personaje.trajes.length-1]);
// Ademas de usar ej: personajes.codeName puedo usar personajes[codeName], se puede con Corchetes

const ALIVE='vivo';
console.log("Esta vivo?:" ,personaje[ALIVE]);
const TIRO="murioDeUnTiro"
console.log("Murio de un tiro?:",personaje[TIRO]);

// fijese que esta variable esta entre '' porque son varias palabras, se puede colocar como ultima_pelicula tambien,esta se llama entre ['']
//no podemos usar la llamada con '.' ej: personajaes.ultima pelicula ==> esta mal, llamarla con ['']
console.log("Ultima pelicula:", personaje['ultima pelicula']);
// delete me permite borrar una propiedad especifica
delete personaje.edad;
console.log(personaje.edad);
personaje.casado= true

// manejo de propiedades como arrays,transforma el objeto como elementos de arrays
const entriesPares= Object.entries(personaje);
console.log(entriesPares);


Object.freeze(personaje);
//Este metodo me permite bloquear("lo congela") el ingreso de propiedades al objeto ,no me permite manipular la informacion del objeto
// PERO no me congela los objetos dentro del objeto
//Metodo que puede cambiar la direccion interna y las coordenadas internas (lat, long)

//  Esto no lo hace porque esta congelada en estos terminos
personaje.adicto= true;
console.log(personaje)
//Esto si lo hace porque son objetos de objetos
personaje.coords.latitud= 25.2421;  //me cambio la latitud
personaje.direccion.ubicacion="Rosario"
console.log(personaje);

// Armo un listado de todas las propiedades
const listadoPropiedades= Object.getOwnPropertyNames(personaje);
// armo listado de los valores de las propiedades
const listadoValores=Object.values(personaje)
console.log(listadoPropiedades,listadoValores);
