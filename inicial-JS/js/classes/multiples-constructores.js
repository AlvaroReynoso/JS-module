class PersonaNueva{
    constructor(nombre,apellido,pais){
        this.nombre=nombre;
        this.apellido=apellido;
        this.pais=pais;
    }

                // ESTE ES EL PROTIP

    static porObjeto({nombre,apellido,pais}){               // METODO      
        return new PersonaNueva(nombre,apellido,pais)   //devuelve una nueva instancia de persona 
    }


    getInfo(){
        console.log(this.nombre,this.apellido,this.pais);
    }
}

const nombre1="Juan",
apellido1="Franco",
pais="Argentina";

//NO PUEDO MANDAR UN OBJETO DIRECTO A UNA INSTANCIA, HAY QUE IMPLEMENTAR UN PROTIP DE MULTIPLES CONSTRUCTORES
const datosAlvaro={
    nombre:"Alvaro",
    apellido:"Reynoso",
    pais: "Argentina"    
}

const persona1= new PersonaNueva(nombre1,apellido1,pais);
persona1.getInfo();
// no le paso un new porque no es una instancia sino un metodo
const persona2= PersonaNueva.porObjeto(datosAlvaro);
persona2.getInfo()


class Per{
    constructor(valor1,valor2,valor3){
        this.valor1=valor1;
        this.valor2=valor2;
        this.valor3=valor3;
    }
    static person({valor1,valor2,valor3}){
        return new Per(valor1,valor2,valor3)
    }
    static set setHola(hola){
        this.hola=hola
    }

    getInfo(){
        console.log("Bienvenido ",this.valor1,this.valor2,this.valor3);
    }

}

datosV2={
    valor1: 12, valor2: 13, valor3 :14
}

const v1=new Per(21,22,23);
const v2=Per.person(datosV2);
v1.setHola='hola Gente';
console.log(v1);