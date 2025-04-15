const regresaTrue=()=>{
    console.log("Regresa True");
    return true;
}
const regresaFalse=()=>{
    console.log("Regresa False");
    return false;
} 
//                        NEGACION
console.warn("Not o la negacion");
console.log(true);
//logica booleana, pasa al contrario, negacion es !
//mientras + ! haya ,mas 0 y 1 serian ej: !!! => f,t,f
console.log(!true);
//aca niego el return , el clg es el mismo pero el resultado (return) cambia.
console.log(!regresaFalse());

//                          AND
//and tiene que tener los 2 valores true para regresar true ,si hay 1 que es falso retorna false
console.warn("And")
console.log(true && true); // true y true es = true
console.log(true && false); // true y false es = false
console.log(true && !false); // true y !false es = true
console.log(regresaTrue() && regresaFalse()); //Me devuelve los 2 porque el 1ro es true 
console.log(regresaFalse() && regresaTrue()); // return false y return true = false, en el clg de la func me trae 1 solo false y ya esta
//No evalua mas porque ya el 1ro es false ,entonces no imprime mas los siguientes (esto es solo en AND )
console.log(!regresaFalse() && regresaTrue()); // return !false y return true = true
regresaFalse() && regresaTrue() // Puedo hacer esto ,sin el clg
console.log('-----------------------------');
//                         OR
//Si uno es true ya es todo true 
console.warn("Or");
console.log(true || false); //true or false = true 
console.log(true || true); //true or true = true
console.log(false || false); //false or false = false
console.log( regresaFalse() || regresaTrue()); // devuelve true
console.log(regresaTrue() || regresaFalse()); // devuelve true y rompe con el true en clg de la funcion
// Si ya hay 1 true al principio ,no imprime mas
console.log('-----------------------------');
console.log("4 condiciones : true && true && true && false" , true && true && true && false);
console.log("4 condiciones :  false || false || false || true" , false || false || false || true);

console.warn("Asignaciones")

//              PROTIP!! = ASIGNACION
const soyUndefined=undefined;
const soyNull= null;
const soyFalse= false;
const soyTrue=true;

const a1= true && "Hola mundo" && 150; // en este caso imprime el ultimo valor 
//si pongo false ,me devuelve falso
const a2= "Hola" && "Mundo" && soyFalse // va a devolver el ultimo valor o en caso que encuentre un false ,es false
const a3= soyFalse || "Ya no soy false" //ya no soy false= no es ni falso ,ni null ,ni undef, entonces muestra ese valor
const a4= soyFalse || soyNull || soyUndefined || "Ya no soy falso de nuevo" ||false || true //no encuentra valores hasta que llega a "ya no soy fals...", no llega a true ya que encontro un valor antes y todo lo siguiente no se ejecuta
const a5= soyFalse || soyNull || regresaTrue() || "Ya no soy falso de nuevo" ||false || true // ejecuta la funcion true entonces termina ahi
console.log({a1,a2,a3,a4,a5});
console.log('-----------------------------');
//NO USAR MAS DE 3 CONDICIONES,SINO ES ENGORROSO
if(true || false || true || false){
    console.log("devuelvo true");
}else{
    console.log("no llego a devolver porque es true en el if anterior");
}