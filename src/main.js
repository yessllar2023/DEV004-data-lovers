import { example, mostrarTarjetas, ordenarTarjetas } from './data.js';
import data from './data/ghibli/ghibli.js';
console.log(example, data.films);
mostrarTarjetas(data.films);
//ordenarTarjetas(data.films.title)// va abajo o es uno por cada h de usuario el importar//

 

/*Recomendamos usar src/main.js para todo tu código que tenga que ver con mostrar los datos en la pantalla. 
Con esto nos referimos básicamente a la interacción con el DOM. Operaciones como creación de nodos, registro 
de manejadores de eventos (event listeners o event handlers), ....
Esta no es la única forma de dividir tu código, puedes usar más archivos y carpetas, siempre y cuando la
 estructura sea clara para tus compañeras.*/