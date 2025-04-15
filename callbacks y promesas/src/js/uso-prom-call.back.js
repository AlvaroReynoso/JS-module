import "./styles.css";

// COMO TENEMOS LOS MISMOS NOMBRES LE ASIGNAMOS UN ALIAS
import { buscarHeroe as buscarHeroeCallback } from "./js/callbacks";
import { buscarHeroe as buscarHeroe } from "./js/promesas";
//              CALLBACKS
// Es una funcion mandada como argumento

//Vemos que se manda un argumento heroeId y otro argumento que es una funcion
// Dentro de buscar heroe se dispara una funcion cuando termine el procedimiento

//le paso el nombre del objeto interno
const heroeId1 = "spider";
const heroeId2 = "iron";
const heroeId3 = "capi";

//le paso el id (nombre del obj) y el callback heroe, al callback le paso el error como 1er parametro y 2do el heroe
buscarHeroe(heroeId1, (err, heroe) => {
  if (err) {
    console.error(err);
  } else {
    console.log(heroe);
  }
});

//          ESTO ES UN CALLBACK HELL, llamadas dentro de cada funcion esperando que se cumplan las otras funciones
buscarHeroe(heroeId1, (err, heroe1) => {
  if (err) {
    return console.error(err);
  }
  buscarHeroe(heroeId2, (err, heroe2) => {
    if (err) {
      return console.error(err);
    }
    buscarHeroe(heroeId3, (err, heroe3) => {
      if (err) {
        return console.error(err);
      }
      console.log(
        `Enviando a la mision a ${heroe1.nombre}, ${heroe2.nombre} y ${heroe3.nombre} `
      );
    });
  });
});

// EN BASE A ESTE PROBLEMA SE CREARON LAS PROMESAS

//PROMESAS:             ACUERDO ENTRE 2 PARTES PARA REALIZAR ALGO Y DESPUES NOTIFICAR A LA OTRA PARTE LO CUMPLIDO O NO CUMPLIDO

// Para manipular promesas usamos then (resolve), catch(reject) , finally(limpieza final)

//      Las promesas tambien dan Hells, codigo comentado para resolverlo sin Hell 
// buscarHeroe(heroeId1).then((heroe1) => {
//   buscarHeroe(heroeId2).then((heroe2)=>{               
//     console.log(`Mandando a la mision a ${heroe1.nombre} y a ${heroe2.nombre}`);     //ESTO TAMBIEN ES UN HELL ,PROMISES HELL
//   })
// });

// Con las promesas se ejecuta en otro plano previniendo que se bloquee el codigo de js y cuando se resuelven vulven a la cola de procesos


//     Para no producir hells en las promesas ,puedo ejecutar varias promesas en paralelo asi

// con Promise.all puedo enviar tambien funciones com parametro, hasta que no se ejecute TODO no termina la promesa 
//Se le pasa un array de funciones con sus parametros de busqueda en este caso         aca destructuro un array
Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2),buscarHeroe(heroeId3)]).then(([heroe1,heroe2,heroe3])=>{
console.log(`Mandando a la mision a ${heroe1.nombre}, ${heroe2.nombre}, ${heroe3.nombre}`);    // puedo pasar heroe[0].nombre tambien para cada posicion del array
//vemos que despues de toda la promesa y el then(resolve) puedo colocar el catch(reject)
}).catch(((err)=>{
  alert(err);
})).finally(()=>{
  console.log("Finally, se termino el Promise.all()");
})
//Si falla algo dentro de la promesa ,no se ejecuta el codigo, si no falla se ejecuta el finally y termina la promesa