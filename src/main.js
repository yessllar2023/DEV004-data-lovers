import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

console.log(example, data.films);
function tarjetas(array){
    const main = document.getElementById('root')

    for(let i=0; i< array.length; i++ ){
        console.log(array[i]);
        //template string y/o interpolacion de variables
        main.innerHTML += `<article>
        <h3>${array[i].title}</h3>
        <img src="${array[i].poster}" alt="">
      </article>`
    }
}
tarjetas(data.films)