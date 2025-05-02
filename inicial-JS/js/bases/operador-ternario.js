// dia de semana abrimos 11hs
// fin de semana abrimos 9hs
//entrar al sitio web para consultar si esta abierto hoy
const dia=0;
const hora=10;

let horaApertura;
let mensaje; // esta abierto o esta cerrado, hoy abrimos a las ??

// if(dia===6 || dia===0){
//     console.log("Fin de semana");
//     horaApertura=9;
// }else{
//     console.log("Dia de semana");
//     horaApertura=11;
// }
//MANERA MAS RAPIDA Y CON ARREGLO
if([0,6].includes(dia)){ // el includes me dice si dentro del array existe el parametro del include (dia)
    console.log("Fin de semana");
    horaApertura=9;
}else{
    console.log("Dia de semana");
    horaApertura=11;
}

//                                      SIN EMBARGO ,CON OPERADORES TERNARIOS PUEDO RESUMIR TODO

horaApertura=([0,6].includes(dia)) ?9 : 11   // si es domingo o sabado ,la horaActual es 9 sino es 11

mensaje=(hora>=horaApertura)? `Abierto`:`Cerrado,abrimos a las ${horaApertura}`;

//if (hora >=horaApertura){
 //   mensaje="Esta abierto";
//}else{
 //   mensaje=`Esta cerrado,abrimos a las: ${horaApertura}`;//usar backticks para concatenar, ya que sino puede dar errores en tipo de datos
//}
// tambien puedo hacer interpolaciones de string ej: console.log("Hoy abrimos a las ${horaApertura}, ahora esta cerrado")
// alt gr + } = ``

console.log({horaApertura,mensaje});