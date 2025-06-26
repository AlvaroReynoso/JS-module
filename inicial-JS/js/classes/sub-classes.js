class Persona {
  nombre = "";
  codigo = "";
  frase = "";

  constructor(nombre = "Sin nombre", codigo = "Sin codigo",frase = "Sin frase"){
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }

  set setComidaFav(comida) {
    this.comida = comida.toUpperCase();
  }
  get getComidaFav() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi codigo es ${this.codigo}`);
  }
  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

//          HERENCIA O EXTENDS
// creo la clase que quiera y si necesito copiar propiedades la extiendo o hago que herede de otra clase
class Heroe extends Persona {
  clan = "Sin Clan"; //inicializo

  //          ACA VOY A TENER UN PROBLEMA XQ EL PADRE (Persona) TIENE UN CONSTRUCTOR
  constructor(nombre, codigo, frase) {
    // al constructor le paso los argumentos del padre
    //para llamar al constructor del padre uso super() y le paso los argumentos que tiene el padre
    super(nombre, codigo, frase);
    // Siempre coloco el SUPER al inicio a no se que use algo que no requiera "this."
    this.clan = "Paladins"; //llamado correcto a clan, debajo del super

    //SI QUIERO LLAMAR A UN METODO IGUAL PERO NO SOBREESCRIBIRLO USO super();
    //A LOS METODOS Y CONSTRUCTORES TENGO QUE PONER super();
  }
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi clan es ${this.clan}`);   //esto lo imprimo dentro del metodo como agregado
    super.quienSoy();               //aca llamo el metodo del padre, digamos que lo copio
  }
}

const alvaro = new Heroe("Alvaro", "1AD2", "Hola, soy Alvaro");
alvaro.setComidaFav = "Hamburgesa";
// alvaro.clan='Paladins'
console.log(alvaro);
// Puedo usar todo lo que tiene la clase menos los statics
alvaro.quienSoy();


class Alumno extends Persona{
  dni='sin dni'
  constructor(nombre,codigo,frase){
    super(nombre,codigo,frase)
  }
  dni=40619544;
  
  

  soy(){
    console.log("Soy Alvaro");
    super.quienSoy()
  }

  set setSangre(sangre){
    this.sangre=sangre;
  }

}

const alumno1=new Alumno("Alvaro","14311","QWERTY");
console.log(alumno1);
alumno1.setSangre='A+';
console.log(alumno1);