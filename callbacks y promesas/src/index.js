import "./styles.css";

// import { promesaLenta,promesaRapida,promesaMedia} from './js/promesas'
import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";
import { obtenerHeroesArr,obtenerHeroeAwait,heroesCiclo,heroesIfAwait } from "./js/await";
// promesaLenta.then(mensaje=>console.log(mensaje));  esto es lo mismo que los de abajo
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

//PROMISE.RACE = Ejecuta las promesas en conjunto y obtener el mensaje de la promesa que se resuelve mas rapido

// Promise.race([promesaLenta,promesaMedia,promesaRapida]).then(console.log).catch(console.warn).finally(()=>{
//   console.log("Termino, y la promesa mas rapida fue",promesaRapida);
//})   el console.log imprime la 1ra que llega
// Aca esta imprimiendo la promesa que llega primero

//Si tengo algun reject pero no es la 1ra que llega,no marcaria el error ,ya que llego 1ro un resolve
//Si llega la rapida con reject ahi si marcaria el error ,ya que es la 1ra que llega

// ASYNC
// buscarHeroe('capi').then(console.log).catch(console.warn);
// buscarHeroeAsync('spider').then(heroe=>console.log(heroe)).catch(console.warn);
console.time("Await");
const heroes = obtenerHeroesArr();
obtenerHeroeAwait("cap2").then(heroe => {
  console.log(heroe);
  console.timeEnd("Await");  //no se dispara por un error   
  //Tarda mucho, 3 segundos aprox, por eso no usar await dentro de fors
}).catch(console.warn);



// heroesCiclo();
heroesIfAwait("IronMan");