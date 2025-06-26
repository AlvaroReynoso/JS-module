//          SINGLETON: Instancia unica de una clase: solo tengo 1 instancia de una clase
// no importa si tengo new muchas veces ,que siempre me regrese la instancia de la clase

class Singleton {
  static instancia; //undefined   // instancia inicializada de clase ,no se puede reinicilizar
  nombre = ""; // propiedad global

  constructor(nombre) {
                        // ATENTO A LAS NEGACIONES DE UNDEFINED!!!!!!!!!!!!!
    if (!!Singleton.instancia) {
                        //cuando es UNDEFINED la 1ra negacion ! da TRUE, entonces pregunto por 2 negacion = FALSE
      return Singleton.instancia;
      // corta despues de aqui
    }
    Singleton.instancia = this; // HACE REFERENCIA A ESTA INSTANCIA DE LA CLASE EN ESTE MOMENTO
    this.nombre = nombre;
  }
}

// no importa despues de la 1ra instancia cuantas mas inicie ..tiene que retornar siempre los valores de la 1!!
const instancia1 = new Singleton("Alvaro");
const instancia2 = new Singleton("Juan");
const instancia3 = new Singleton("Roberto");
console.log("Nombre en la instancia 1:", instancia1.nombre);
console.log("Nombre en la instancia 2:", instancia2.nombre);
console.log("Nombre en la instancia 3:", instancia3.nombre);
