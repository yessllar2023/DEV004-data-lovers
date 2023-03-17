export function mostrarTarjetas(array){
  const main = document.getElementById('root')
  main.innerHTML = ''

  for(let i=0; i< array.length; i++ ){
      //console.log(array[i]);
      //template string y/o interpolacion de variables
      main.innerHTML += `<article>
      <h3>${array[i].title}</h3>
      <img src="${array[i].poster}" alt="">
    </article>`
  }
}

export const ordenar = (arreglo)=> {
return arreglo.sort((a,b) => {
  if (a.title == b.title) {
    return 0;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 1;
});
}

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
/*esta función sort u ordenar recibe tres parámetros. El primer parámetro,
data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de
 la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera 
 ascendente o descendente.*/


/*El corazón de este proyecto es la manipulación de datos a través de arreglos y objetos.

Te recomendamos que este archivo contenga toda la funcionalidad que corresponda a obtener, procesar y manipular
 datos (tus funciones). Por ejemplo:

    filterData(data, condition): esta función filter o filtrar recibiría la data, y nos retornaría aquellos
     datos que sí cumplan con la condición.

   
    computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos 
    para ser mostrados de acuerdo a la data proporcionada.

Estos nombres de funciones y de parámetros son solamente referenciales, lo que decidas depende de tu propia 
implementación.

Estas funciones deben ser puras e independientes del DOM. Estas funciones serán después usadas desde el
 archivo src/main.js, al cargar la página, y cada vez que el usuario interactúe 
 (click, filtrado, ordenado, ...).*/
