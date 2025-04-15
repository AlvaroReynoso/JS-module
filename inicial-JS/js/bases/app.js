
// alert: input para el usuario
alert("Hola desde app.js")

// Variables var... causan hoisting, mala practica porque se pueden usar antes de ser definidas!

// variables let
let a=20;
let b=30;

let num1=30;
let num2=40;
let resultado=num1+num2;
console.log(resultado);
console.log("a + b = "+(a + b));  //Vamos a aplicar un breakpoint aqui ,punto de quiebre para que termine el programa aca

// variables var, no se usan mas ya que pueden aceptar valores antes de inicializarlas
var c=30;

//  podemos definir variables asi, definiendo 1 sola vez el let y separados por coma seguir definiendo
let q=20,
    w=20,
    e=30,
    f=10,
    z=40,
    v=q+w+e+f+z;
    
// manera de mostrar objetos en variables
console.log("%c Mis variables en forma de objetos","color:blue;background-color:beige;font-weight:bold")
console.log({q})
console.log({w})
console.log({e})
console.log({f})
console.log({z})

//otras formas de console.
console.log( "El resultado es:",v);
console.warn("Esto es una advertencia"); // warning 
console.info("Esto es informacion");
console.error("Esto es un error");

// console.table para manejar arreglos o objetos
let color="Amarillo";
let numero=21;
let saludar= "Hola";
let superheroe="IronMan";
let esAliado=true;
// Las constantes van en mayusculas para buena practica ..SALUDO
const SALUDO= saludar + " " + superheroe;
console.log(SALUDO);

console.table({color,numero,superheroe,esAliado}); //imprime todo tipo de dato en forma de TABLA