class Rectangulo{

    #area=0;
    constructor(base=0,altura=0)
{
    this.base=base;
    this.altura=altura;
    this.#area= base*altura;
}

// puedo ingresar el #area pero NO puedo hacer un metodo privado ej: #calcularArea() 
calcularArea(){
    console.log("El area es:",this.#area);
}

};

const rec1=new Rectangulo(20,30)
// rec1.#area=1421;
console.log(rec1);
rec1.calcularArea();