//          AWAIT SIEMPRE SE USA DENTRO DE ASYNC FUNCTION

import { buscarHeroeAsync } from "./promesas";
import {buscarHeroe} from './promesas'
const heroesIds=["capi","iron","spider"];
const heroesPromesas=heroesIds.map(buscarHeroe)
export const obtenerHeroesArr=async()=>{
    return await Promise.all( heroesIds.map(buscarHeroe));
    // Todo lo de aca se puede simplificar con un map
    const heroesArr=[];
    for(const id of heroesIds){
        heroesArr.push(buscarHeroe(id));
    //    const heroe= await buscarHeroe(id); //espera que se resuelva el buscarHeroeAsync y despues se dispara
    //    heroesArr.push(heroe);
    }
    // buscarHeroeAsync()
    // setTimeout(() => {
    //    console.table(heroesArr); 
    //    console.log("Obtener heroe");
    // }, 1000);

    //Retornariamos Promise.all para ejecutar todas al mismo tiempo
    //Ojo que sin el await da un falso positivo
    return await Promise.all(heroesArr);

}
//MANEJO DE ERRORES CON AWAIT
export const obtenerHeroeAwait=async(id)=>{
    try {      // intenta realizar este codigo, si algo malo sucede entonces ejecuta el catch,sino ejecuta el try entero
        const heroe= await buscarHeroeAsync(id);
        return heroe;
    } catch (err) { //catch: error
        console.log("CATCH!!");
    //    console.log(err);   con esto trabo el codigo aca
    // con un objeto mando info para que no trabe aca el codigo
    return {
        nombre: "Sin nombre",
        poder: "Sin poder"
    };
    };
//CUANDO SE EJECUTA EL TRY Y CATCH EN UN ASYNC EJECUTA EL CATCH y no sigue al catch del index
// tendria que colocar un throw err,para que salga
//    const heroe= await buscarHeroeAsync(id);
//    return heroe;
}

export const heroesCiclo=async()=>{
    console.time("Heroes ciclo");


//   const heroes=await Promise.all(heroesPromesas)
//   heroes.forEach(heroe=>console.log(heroe));
//Esto se puede simplificar en 1 sola linea
    for await (const  heroe of heroesPromesas) {
        console.log(heroe);
    }
    console.timeEnd("Heroes ciclo");
}
export const heroesIfAwait=async(id)=>{
    if( (await buscarHeroeAsync(id)).nombre === "IronMan"){
        console.log("Es el mejor de todos");
    }else{
        console.log("No ,no es el mejor");
    }
}