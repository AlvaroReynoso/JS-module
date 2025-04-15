let edad=14;
let edadMin=21;

//El while puede no entrar al ciclo, 1ro evalua y despues ejecuta
console.warn("While");
const autos=["VW","Mazda","Audi","Toyota"];
let i=0; // Bandera ,lo uso tambien en la pos del array asi sumo el valor 
while( i<autos.length){
    if(i === autos.length){
        break;       // corto cuando llegue al final del array asi puede seguir con el codigo,si no se usa puede dar ciclos extraños
    }
    console.log(autos[i]);
    i++  //incrementador o aumento de a 1 
   // i+=2;     para aumentar mas de 1
}
 





// do while ejecuta por lo menos 1 sola vez ,ejecuta y despues evalua
console.warn("Do While");
let j=0;
do{
console.log(autos[j]);
j++    
}while(j<autos.length)