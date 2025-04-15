//devolver argumentos especificos 
function nombre(nombre,nombre2do,apellido){
    return{
        nombre,nombre2do,apellido
    }
}
const {nombre:nomb,nombre2do:nombre2,apellido:surname}=nombre("Alvaro","Julian","Reynoso");
console.log({nomb,nombre2,surname});

const arreglo=(nombre,apellido,dni)=>{return {nombre,apellido,dni}};
console.log(arreglo("Alvaro","Reynoso",40619544));

// devolver todos los argumentos (en un array)
function num(){
    return arguments
}
const numConst=num(12,13,14,15,16);
console.log({numConst});

const numbers=(...args)=>{
return args
}
const [num1,num2,num3,num4,num5]=numbers(22,23,24,25,26)
console.log({num1,num2,num3,num4,num5});

// devolver todos los argumentos pero separar otro argumento en otro array

const arrowSeparado=(edad,...args)=>{
    console.log({edad},{args});
}
const arregloSeparadoConst=arrowSeparado(27,1,2,3,4,5,6)


function funcSeparado(edad,...args){
   return{edad,args}
}
const valores=funcSeparado(27,2,3)
console.log({valores});




// destructuracion de objeto

let heroe={
    nombre:"Alvaro",
    codigo:"Alv",
    cordenadas:{
        alt:25.52121415,
        lat:41.512131
    },
    edad:27,
    sangre:"A+",
    superPoder:"Parar el Tiempo"
}
// fijarse que para llamar a un objeto de un objeto: tengo que llamar al objeto y luego con : {el parametro interno}
function datos({superPoder,nombre,codigo,cordenadas:{alt},edad}){
    console.log({nombre});
    console.log({codigo});
    console.log({superPoder});
    console.log({edad});
    console.log({alt});   
}
datos(heroe);
