const heroes = {
  //las llaves de un objeto es el ID y apunta a un objeto literal con nombre y poder
  capi: {
    nombre: "Capitan America",
    poder: "Aguantar inyecciones sin morir",
  },
  iron: {
    nombre: "IronMan",
    poder: "Absurda cantidad de dinero",
  },
  spider: {
    nombre: "SpiderMan",
    poder: "La mejor reaccion alergica a las picaduras de arañas",
  },
};

// ACORDARSE LA INSTANCIA DE CLASE PROMISE()

//adentro de la funcion buscar heroe hago la promesa con sus parametros
export const buscarHeroe = (id) => {
  const heroe = heroes[id];

  // aca hacemos el return de la promesa
  // const promesa= new Promise();   // podemos retornar derecho el new Promise()
  return new Promise((resolve, reject) => {
    //ADENTRO DE LA PROMESA SE CREA UN CALLBACK Y SE PASAN 2 PARAMETROS (RESUELTO O RECHAZADO)
    //estos nombres son buenas practicas o (res,rej)
    if (heroe) {
      setTimeout(() => resolve(heroe), 1000);
    } else {
      reject(`No existe un heroe con id :${id}`);
    }
  });
};
// ASYNC: es una funcion que retorna una promesa,digamos que no es necesario retornar la promesa,solo el if y else en este caso
export const buscarHeroeAsync = async (id) => {
  const heroe = heroes[id];

  // aca hacemos el return de la promesa
  // const promesa= new Promise();   // podemos retornar derecho el new Promise()
  //estos nombres son buenas practicas o (res,rej)
  if (heroe) {
    return heroe; // borraria el resolve 
  } else {
    throw `No existe un heroe con id :${id}`; //borraria el reject y solo lanzaria el error
  }
};

// PUEDO EXPORTAR TODAS COMO OBJETO
const promesaLenta = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa lenta"), 2000);
});
const promesaMedia = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa media"), 1500);
});
const promesaRapida = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa rapida"), 1000);
});
export { promesaLenta, promesaMedia, promesaRapida };
