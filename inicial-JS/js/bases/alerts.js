let outerHeight = 600;
const outerWidth =1200;
// Las variables let y constantes no sobreescriben las variables del objeto global de window
// Se puede corroborar en el navegador ,viendo el window.outerHeight
// El var si las sobreescribe, mala practica
console.log(miNombre + "Reynoso");

var miNombre= "Alvaro";
// Undefined Reynoso
// Ya que es interpretado y lee linea por linea ,en el momento del console.log no esta definido, sino que esta definido abajo

// si cambio var por let me da error de que no se puede usar antes de inicializarse

console.log(global); //existe en node
// alerts:

alert("Hola mundo");

// prompts:
let nombre=prompt("Ingrese su nombre"); //2do valor, es por defecto
// Si cancela el prompt, devuelve un null ,importante saber que es un valor nulo
// null != undefined
console.log(nombre , "a");

// confirm:
// me devuelve un booleano (true or false)
let borro=confirm("Esta seguro de borrar?")
console.log(borro)

// Si ejecuto este codigo con node va a dar errores ya que los navegadores manejas objetos en donde usamos ciertos elementos como funciones confirm,alert,prompt


// Hay que ver donde ejecutamos js ,si es front en el navegador o si es back(node) ,ya que usan diferentes objetos 
// en back no podemos usar prompt, confirm, alert
// EN NODE NO EXISTE EL OBJETO WINDOW (FUNCIONES COMO PROMPT, ALERT, CONFIRM)