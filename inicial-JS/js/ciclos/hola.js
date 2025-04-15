const arrowf=(edad,...args)=>{
return {edad,args}

}

const arrowfDatos=arrowf(27,1,2,3,4);
console.log(arrowfDatos.edad);
console.log({datos:arrowfDatos.args});