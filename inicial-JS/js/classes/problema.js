// ESTO ES PARA COMPATIBILIDAD CON NAVEGADORES ANTIGUOS , LA CREACION DE INSTANCIA DE CLASES NO SE USA ACTUALMENTE.

const roberto={
    nombre:"Alvaro",
    edad:15,
    imprimirNombre(){
        console.log(`El nombre es ${this.nombre} y la edad es: ${this.edad}`);
    }

//Usar this siempre para referirse a algo fuera del scope del objeto,como estamos dentro de un metodo no existe nombre.

};
const juan={
    nombre:"Juan",
    edad:25
};

roberto.imprimirNombre();

//Este es el problema, tengo que poner en todos los objetos, el metodo imprimirNombre() y es tedioso 

// La P mayus: marca que es instancia 
// (no se usa actualmente este metodo de clase)
function Persona(nombre,edad){
    //esto es un constructor, manera de construir una nueva instancia 
    this.nombre=nombre,
    this.edad=edad,
    //en funciones ,llamo con this y despues del = aclaro que es function()
    this.imprimirNombre=function(){
        console.log(`El nombre es ${this.nombre} y la edad es: ${this.edad}`);
    }
}

// new= Es que quiero crear una nueva instancia
const maria= new Persona("Maria",23);
const alvaro=new Persona("Alvaro",27);
//imprime la clase Persona con sus metodos y propiedades
console.log(alvaro);
//llamo a la funcion interna despues del nombre de la constante
alvaro.imprimirNombre();