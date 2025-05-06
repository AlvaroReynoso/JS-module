const elMayor = (a, b) => ( a > b )? a : b;
console.log(elMayor(7, 6));

const tieneMembresia=(miembro)=>(miembro)? '2 dolares':'5 dolares';
console.log(tieneMembresia(false));

const amigo=false;
const amigosArray=['Julian',"Fede","Alberto",amigo?"Luciano":"Ivan", elMayor(30,20)]   //puedo agregar partes de codigo externa del array
console.log(amigosArray);

//En operadores ternarios puedo agregar varias condiciones, que serian similares a "else if"

const nota=75;
const valor=(nota>=95)? "A+":
            (nota >=90)? "A":
            (nota >=85)? "B+": 
            (nota >=80)? "B":
            (nota >=75)? "C+":
            (nota >=70)? "C": "F";
            (nota<0 || nota>100)?console.error("No existe esa nota"):
            
console.log({nota,valor});