'use strict'

let fila = prompt('Ingrese la fila de computadoras','LAB2#B');
let cod = 0;
let letra = fila.indexOf('#');

let siguienteLetra = fila.charCodeAt(letra+1);

cod = siguienteLetra + 1;
alert('La fila actual de la computadora es: ' + fila);
alert('La sigiente fila es: ' + String.fromCodePoint(cod));