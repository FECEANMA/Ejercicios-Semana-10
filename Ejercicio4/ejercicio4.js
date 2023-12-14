'use strict'

let inicialesNumero = prompt('Ingrese la Inicial y el Numero de un jugador', 'MAGB-20');

let pos = inicialesNumero.indexOf('-');
let inciales = inicialesNumero.substring (0,pos);

alert('Inicial y Numero de Jugador: ' + inicialesNumero);
alert('Iniciales del Jugador: ' + inciales);