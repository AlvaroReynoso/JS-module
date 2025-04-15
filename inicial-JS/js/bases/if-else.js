dia1 = 3;
if (dia1 == 3) {
  console.log("Hoy es Miercoles");
} else if (dia1 == 2) {
  console.log("Hoy es Martes");
} else if (dia1==1){
  console.log("Hoy es dia Lunes");
}

//Vemos que es mucho codigo para llegar al dia deseado

// Podemos usar objetos para que sea mas rapido

const dias = new Date();
let dia = dias.getDay();

const diasTodos = {
  0: "domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miercoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sabado",
};

//con arreglos se puede tambien 
const diasTodos2 = [
  "domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

console.log("Hoy es:", diasTodos[dia] || "Dia no definido");
