// arreglos es parecido a una lista de informacion
// usualmente son del mismo tipo de dato pero no pasa en JS

let arreglo1=[]
arreglo1=["Alberto",24,"come mucho",false]
console.log({arreglo1});
// los corchetes se puede colocar para ocultar la informacion del arreglo en el navegador

// arreglo constante de 10 elementos (0-9), manera vieja de definir un arreglo
const arreglo2= new Array(10)
// es parecido a const arreglo2 = []; solo que no coloco la longitud de 10
console.log({arreglo2});

// mostar diferentes espacios del array
let arreglo3=["Alberto","Fernando","Julian","Federico"]
console.log(arreglo3[2]);
console.log(arreglo3[3]);

let arreglo4=[
    true,
    1234,
    32.21,
    "Alvaro",
    25*2, //se puede hacer operaciones matematicas, 1ro se ejecuta la operacion y desp la inserta en el arreglo
    12/2,
    function(){},  // podemos agregar tambien funciones
    ()=>{},
    { a: 1 },
    ["X","MegaMan","SpiderMan","Hulk",[
        "SpiderMan jr","Hulk jr","MegaMan jr"
    ]]
];
console.log( arreglo4 );
console.log(arreglo4[9][4][1]); //Ingreso al array posicion 9 y dentro de ese 9 hay otro array, ingreso a la pos 1 de ese array
// Posicion 9 , posicion 4 (otro array), pos 1 (dentro del array, posicion 1)


let arreglito=[];

arreglito=["Alvaro","Reynoso",24,true,["Alvarito","Alv",["Hijo de Alvarito",["Soy el hijo de Alvarito",["Soy el ultimo hijo de todos"],"Hermano del hijo de alvarito"],"Hijo de Alv"]]];
console.log(arreglito[4][2][1][1]);