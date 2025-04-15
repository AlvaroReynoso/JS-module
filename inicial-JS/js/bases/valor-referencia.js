let juan={
    nombre:"Juan"
}
let ana={...juan};
ana.nombre="Ana"
console.log({ana,juan});

function cambioNombre({...persona}){
    persona.nombre="Roberto"
    return persona;
}

let alvaro={nombre:"Alvaro"}
let roberto= cambioNombre(alvaro)

console.log({alvaro,roberto});

//vemos que al cambiar el valor de nombre (Ana),se cambia tambien en juan ,esto es porque todos los objetos se pasan por referencia

//ACORDARSE QUE : TODOS LOS PRIMITIVOS SE PASAN POR VALOR 
//Y TODOS LOS OBJETOS SE PASAN POR REFERENCIA 

//El operador SPREAD me permite separar las propiedades y valores de un objeto

// No confundir REST con SPREAD ,el REST va en los parametros y transforma en array... ej: const funcion=(...args)=>{return args}
// SPREAD va en cualquier otro lugar menos en parametros o argumentos y significa ="Separar elementos" let ana= {...juan}


// Con arreglos

const canastaFrutas=["Frutilla","Kiwi","Sandia","Anana"];
console.time('slice')
const frutas=[...canastaFrutas];
console.timeEnd('slice')

//SPREAD ES MAS RAPIDO EN EJECUCION QUE EL SLICE

frutas.push("Melon");
// console.log(frutas,canastaFrutas);

console.table({frutas,canastaFrutas});


// puedo tambien usar el metodo slice ..si no le paso argumentos a slice(), me arma un nuevo arreglo
const caja=["cosa1","cosa2","cosa3"]
// creo un array nuevo para separar caja con cajaGrande
const cajaGrande=caja.slice()
// agrego elementos a cajaGrande
cajaGrande.push("cosa4","cosa5");
console.table({caja,cajaGrande});


const box=["box 1","box 2","box 3"]
console.time('corte1')
//separo bigBox de box, box queda en otro espacio de memoria y bigBox copio lo que tenia hasta el momento
const bigBox=box.slice();
console.timeEnd('corte1')
bigBox.push("box 4");
console.table({box,bigBox});


