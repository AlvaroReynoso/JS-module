const heroes=["Batman","SuperMan","Mujer Maravilla","Hulk","Dr Strange"];


//    CICLO FOR TRADICIONAL
console.warn("For tradicional");
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}

console.warn("For In");
// for in = let i in 
// 1ero asignacion de variable... in heroes (el array)===> EL IN va a ir hasta que no haya mas elementos de array
for(let i in heroes){
    console.log(heroes[i]);
}

// FOR OF SE USA MUCHO
console.warn("For Of")
// no se nombra la variable en el for Of, se aconseja el singular de el array con nombre plural
//Extrae el valor del array y en cada iteracion se va aumentando hasta el final del array
 for(let heroe of heroes){
    console.log([heroe]);
 }