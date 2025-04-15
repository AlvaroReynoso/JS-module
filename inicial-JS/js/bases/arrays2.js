let juegos = ["Call of Duty", "DayZ", "Zelda", "Squad 44", "World Of Warcraft"];

console.log("Largo del array:", juegos.length);

//Instancias del array

let primero = juegos[2 - 2]; //2-2=0 osea el primer valor del array
let segundo = juegos[1];
let ultimo = juegos[juegos.length - 1]; //busca el ultimo valor del array y lo imprime

// Ultimo valor del array
console.log(ultimo);

// Ejecuta una instruccion por cada elemento del arreglo, va imprimiendo cada indice hasta el final del array
juegos.forEach((elemento, indice, array) => {
  console.log({ elemento, indice, array });
});

// metodos: push, unshift, pop, splice, indexOf
juegoEncontrado= juegos.indexOf("DayZ")
console.log({juegoEncontrado, "y es el juego:":juegos[juegoEncontrado], juegos});

// no puedo llamar el valor en clg unsh, sino que tengo que llamar a la posicion del array.. [unshPos]
unsh= juegos.unshift("Bf4");
let unshPos=0;
console.log("Se agrego el juego:",juegos[unshPos],"en la posicion",unshPos); //juegos[unshPos]= imprimo el contenido de la pos

// como añadir elemento dentro del array
let nuevaLongitud = juegos.push("Minecraft");

// las llaves me permiten imprimir el nombre de la variable y el resultado de la variable !!!
console.log({ nuevaLongitud, juegos });

// Permite ingresar elementos al principio del array
nuevaLongitud = juegos.unshift("R6");
console.log({ nuevaLongitud, juegos });

// borrar ultimo elemento del array
juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

//Si necesito borrar un elemento en una posicion especifica

let pos= 1; //2do elemento
// borra la pos 1 , 1 sola vez
let juegosBorrados=juegos.splice(pos,1);
console.log({juegosBorrados, juegos});

// si quiero buscar un elemento especifico, se altera si agregue o borre otros elementos anteriormente
let squad44= juegos.indexOf("Squad 44");
// Un indexOf de un elemento que no existe devuelve un -1 !!!
console.log(squad44);
