'use strict'

let plate = 'ABC-2030'

let pos = plate.indexOf('-');
let numeroPlate = plate.substring (pos+1);

alert("Placa: " + plate);
alert("Numero de Placa: " + numeroPlate);