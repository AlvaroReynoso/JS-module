
// Hacer console.log derecho en la funcion y en la llamada cuando se pasa REST y antes otro valor fuera del array args

const arr=(edad,...args)=>{console.log({edad},args);}
console.log(arr(27,12,13,14,156));


//En ECMA6, no hace falta que igualemos los 2 nombre y 2 apellidos, solo con ponerlo 1 sola vez basta

function crearPersona1(nombre, apellido){
    return{nombre,apellido}
    }
const perso1=crearPersona1("Alvaro","Reynoso");
console.log({perso1});

//COLOCO ENTRE PARENTESIS ya que sino el cuerpo de la funcion flecha no me estaria devolviendo nada
//digamos que los parentesis hacen el return ya para imprimir o guardarlo en una constante

const persona=(nombre,apellido)=>({nombre,apellido}) //ESTO ES UN PROTIP!!!!!! ({nombre,apellido})

//Ingreso la funcion en una constante/variable
const person=persona("Alvaro","Reynoso")

//Imprimo la constante
console.log(person);


function impArgum(){
    console.log(arguments);
}
impArgum(10,true,false,"Alvaro","Hola");


function argumentos(){
    return arguments
}
const argumentsArray=argumentos(12,13,14,15,16,7);     // Si hago esto en arrowFunc ,no se imprimen en pos de array ej: '0'=12, '1'=13 ,etc
console.log(argumentsArray);


// puedo llamarlos como args y para que me imprima todos los argumentos necesito colocar => ...args

const impVarios=(...args)=>{console.log(...args)} //OTRO PRO TIP ...args (...=crea un array de todos los argumentos!!!)
impVarios(12,true,false,"Alvaro","Hola");

//CONSIDERACIONES DEL ...(REST)
// 1= Despues del ...args no puede venir otro argumentos ej: (...args, otroArg)
// 2= otro argumento antes del args se puede llamar ,pero va a ser independiente


//Coloco la funcion flecha con sus args e imprimo dentro de la func args
const numeros=(edad,...args)=>{   // crea un array de todos los argumentos
    console.log({edad},...args);  // CONSIDERACION 2: LLAMO OTRO ARGS PERO VA ENTRE {},y queda fuera del array

//CUANDO HAY REST Y OTRO ARG, IMPRIMIR DERECHO Y LLAMAR A LA FUNCION CON SUS PARAMETROS
}
//llamo a la funcion y le paso los parametros
numeros(27,2,3,4,5);


//Puedo hacer el return y despues llamarlo , lo muestra igualmente
const naame=(...args)=>{return args}   //crea un array sola ,sin otro argumento por detras del ...args
const infoCompleta=naame("Alvaro","Reynoso",27,true);
console.log({infoCompleta});

// Si necesito darle nombre a cada uno de los argumentos que me esta pasando puedo hacer un array en el const [aca pasarle los nombres ,por posicion]

const infoCompleta1=(fechaNac,...args)=>{ return args}  //retorno solo argumentos ,estoy sacando fechaNac
const [nombre,apellido,edad,alto,casado]=infoCompleta1(1997,"Alvaro","Reynoso",27,true,false);//vemos que la fechaNac no la pasamos
console.log({nombre,apellido,edad,alto,casado});  //ESTAS 3 LINEAS SON PROTIPS!!! (const[nombresDeseados]=infoCompleta(nombre,apellido,etc))


//Ejemplo de destructuracion

// Funcion que colecta todos los argumentos en una array
const nombresArea=(...args)=>{return args}

// Desestructurando el array retornandolo en valores individuales
const [nombre1,nombre2,nombre3,nombre4,nombre5]=nombresArea("Alvaro","Julian","Roberto","Fernando","Rodolfo")

// Imprimiendo las variables usando la notación abreviada de objetos
console.log({nombre1,nombre2,nombre3,nombre4,nombre5}); 



function crearPersona(nombre1,apellido,nombre2){ return{
    nombre1,apellido,nombre2
}   
}
        //OTRO PROTIP!!!! renombrar desestructuraciones const{nombre1:name0, nombre2=name1}=crearPersona("Alvaro","Reynoso","Julian")
        // console.log({name0,name1});
//PUEDO RENOMBRAR LAS DESESTRUCTURACIONES (nombre1: nuevoNombre)
const {nombre1:name0,apellido:surname,nombre2:name1}=crearPersona("alvaro","Reynoso123","Julian") //vemos que no puedo llamarla apellido xq ya hay una llamda igual, entonces la renombro
console.log({name0,surname,name1});  //en la funcion la tengo que llamar diferente ,xq sino me imprime el ultimo name
    //no puedo dejar en la funcion nombre 2 veces ,xq si llamo a nombre me imprime 2 veces julian(ultimo valor nombre)


// ultimo PORTIP: DESTRUCTURACION DE ARGUMENTOS
const tony={
    nombre: 'Tony Stark',
    codeName: 'IronMan',
    vivo: true,
    murioDeUnTiro:true,
    // edad: 40,
    trajes:["Mark 1","Mark 2","Mark V"]
}

//Si quiero ponerle titulo a cada propiedad ,hago la desestructuracion de argumentos!,coloco {en los argumentos} y el clg tambien clg({})
const imprimirProp= ({nombre,edad=37,codeName,trajes})=>{ //edad por defecto 37
    console.log({nombre});
    //ya que edad no esta ,en los args le puedo definir un valor
    console.log({edad});
    console.log({codeName});
    console.log({trajes});
}
// estoy destructurando y cuando pasan valores undefined le asigno uno en los argumentos
imprimirProp(tony);


personas=[
    {name:"Alvaro",age:24},
    {name:"Roberto",age:21},
    {name:"Julian",age:17}
]


const persons=personas.some((persona)=>{
    console.log(persona);
    return persona.age >=30;
    
})
 