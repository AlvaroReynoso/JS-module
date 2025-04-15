//ACLARAR: FUNCION ES UNA FUNCION GENERAL 
// METODO: Es una funcion dentro de un objeto
//Poner las funciones siempre arriba y llamarlas abajo ,es buena practica
//SI EN LA FUNCION NO HAY UN RETURN ,ESTE ES =Undefined
// diferentes metodo de definir funciones
function saludar(){
console.log(arguments); //va a imprimir todos los argumentos que le paso en la llamada
}

let hola=(nombre)=>{
    if (nombre=="Alvaro")
    {
        console.log("Hola alvaro");
        return 1;

    }
    else{
        console.log("Hola desconocido");
        return 0;
    }

}
const nombre="Juan"
const nombreSaludo=hola(nombre)

hola(nombre);
console.log(nombreSaludo);



//funcion anonima: funcion sin nombre pero que ya esta en una variable
const saludar1= 
function(){
console.log("hola mundo");
}

// funcion con argumento: argumento va entre los parentesis y se definen en el llamado de la funcion
let holaNombre= function(nombre){
console.log("Hola "+nombre);
}

//Funcion Flecha (ECMA6)
let saludarFlecha= (nombre)=>{
    console.log("Hola",nombre);
    //puedo retornar arreglos si quiero
    return [1,4,10];//aca termina la funcion , con estructura de control (if/while/do-while) puedo bifurcar para que siga despues del return
    console.log("Hola chicos ,soy anonimo") //esto no se ejecuta ya que esta despues del return
}


// retorno de un resultado en una funcion
let sumar=(a,b)=>{
return a+b;
}
const sumaDosNumeros= sumar(2,4)



//SI ES 1 SOLA LINEA DE CODIGO PODEMOS SIMPLIFICARLA ASI  


let sumarRapido = (a , b) => a + b;  // despues de la flecha coloco el return derecho (en caso de ser solo el return o 1 valor de resultado)
const sumaRap = sumarRapido(4 , 6)  
console.log("La suma rapida es:",sumaRap);




//funcion con retorno de funcion
function getAleatorio(){
    return Math.random();
}
// imprimo la funcion con los parametros nulos (ya que es una funcion de una funcion)
console.log(getAleatorio());



const saludo = saludarFlecha("Alvaro");
//llamada a funciones con argumentos
holaNombre("Bocha");
// lee todos los argumentos
saludar("Alvaro","Reynoso",27,true,15);
saludar1();
saludarFlecha("Alvaro Flecha")
console.log(saludo[1],saludo[2]); //accedo a 2 posiciones del arreglo ,se llama una pos por constante o variable
console.log("La suma da:",sumaDosNumeros);


function alea(){
  return Math.random()
}
console.log("El numero aleatorio es: ",alea());