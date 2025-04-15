//Acostumbrarse a que la primera letra de la clase sea en Mayus
//tener ojos con los scopes ,siempre usar this (metodos por fuera de ese mismo ,propiedades, etc)


//TODAS LAS CLASES TIENEN POR DEFECTO USE STRICT!
class Persona {
                //DEBAJO DE LAS LLAVES CREO LAS PROPIEDADES, terminan con ; no como los objetos que terminan con ,
  nombre = "";
  codigo = "";            //estas propiedades la puedo sacar y colocar como estan en el constructor ,no hay problema.
  frase = "";
  comida="";
                //1ERO EL CONSTRUCTOR: metodo que se crea apenas se cree una instancia de la clase
  //Si no enviamos parametros ,las propiedades son undefined, es mejor asignarlas en los argumentos del constructor
  constructor(nombre="Sin nombre",codigo,frase) {
    this.nombre= nombre;
    this.codigo= codigo;         // no me permite definir el codigo ya que no estoy usando this ,el this es importante
    this.frase= frase;
  };
                //LOS SETS Y GETS VAN DEBAJO DE EL CONSTRUCTOR
  //Los sets ::: Son funciones que tienen un argumento y que se ejecutan cuando se establece una propiedad.
  //Los gets ::: Son funciones que no tienen argumentos y que se ejecutan cuando se lee una propiedad.
  

  set setComidaFav(comida){         //los sets no pueden tener el mismo nombre de la propiedad que le paso y recibe 1 solo parametro
    this.comida=comida.toUpperCase();     //capitalizo la comida que estoy ingresando en this.comida
    //el setComidaFav va a estar en el _proto_
  }
  get getComidaFav(){
    return `La comida favorita de ${this.nombre} es ${this.comida}`
  }


                //LOS METODOS SE ACOSTUMBRA QUE ESTEN DEBAJO DEL CONSTRUCTOR O DEBAJO DE LOS SETS Y GETS SI HAY
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi codigo es ${this.codigo}`);
    //para usar metodos ,tengo que llamar a la propiedad.metodo ej:alvaro.quienSoy(), la propiedad tiene que estar creada!
  };
  miFrase(){
    this.quienSoy();        //Puedo llamar distintos metodos de la clase dentro de un metodo especifico,siempre con THIS!!!!
    console.log(`${this.codigo} dice: ${this.frase}`);
  }

}
const alvaro = new Persona("Alvaro","1AD2","Hola, soy Alvaro");
const juan = new Persona("Juan","1A321D1","Hola, soy Juan");
// console.log(alvaro);
// console.log(juan);
alvaro.quienSoy(); 
console.log('----------------');
juan.miFrase();     //contiene el metodo quienSoy()
console.log('----------------');
alvaro.setComidaFav='Hamburgesa';  //como vemos el set es una propiedad,no un metodo entonces = 'Valor'
console.log(alvaro); 
console.log(alvaro.getComidaFav);


//si necesito crear una instancia static ,la haria de la siguiente forma , con un conteo dentro del constructor
        // Metodos Estaticos son aquellos que no necesitan que crees un objeto (instancia) de la clase para usarlos.
class Datos{

  
  //LO MEJOR ES COLOCAR LOS STATICS(metodos,prop,gets) debajo de la llave de creacion de la clase(esta linea)
  //    PROPIEDAD STATIC
  static _conteo=0

  constructor(nombre,edad,codigo){
    this.nombre=nombre;
    this.edad= edad;
    this.codigo=codigo;
    Datos._conteo++
  }

  set setEmail(email){
    this.email=email.toUpperCase()
  }
  get getEdad(){
    return `Mi edad actual es ${this.edad}`
  }
//      GET STATICS (se coloca arriba)
  static get getConteo(){
    return Datos._conteo + " Instancias"
  }

//     METODOS STATIC (se coloca arriba)
  static mensaje(){
    console.log("Hola soy un metodo estatico!");
  }

  quienSoy(){
    console.log(`Mi nombre es ${this.nombre}`);
  }
  codigoYquienSoy(){
    this.quienSoy()
    console.log(`Y mi codigo es ${this.codigo}`);
  }

}

const datosJuan=new Datos("Juan",27,"24E12");
console.log(datosJuan);
datosJuan.setEmail='juan@gmail.com';
console.log(datosJuan);
datosJuan.codigoYquienSoy();
console.log(datosJuan.getEdad);
console.log('Mi conteo es:',Datos._conteo); //propiedad static
console.log(Datos.getConteo);     // get static
Datos.mensaje()            // metodo static