const heroes={
    //las llaves de un objeto es el ID y apunta a un objeto literal con nombre y poder
    capi:{
        nombre:'Capitan America',
        poder:'Aguantar inyecciones sin morir'
    },
    iron:{
        nombre:'Ironman',
        poder:'Absurda cantidad de dinero'
    },
    spider:{
        nombre:"SpiderMan",
        poder:"La mejor reaccion alergica a las picaduras de arañas"
    },
}

//El callback es la funcion que se debe llamar cuando se termina de ejecutar el proceso de buscar el heroe por ID
//el callback retorna...en este caso heroe
export const buscarHeroe=(id,callback)=>{

   const heroe=heroes[id];
    if (heroe){
        callback(null,heroe)
    }else{
        callback(`No existe un heroe con id :${id}`);

    }

}