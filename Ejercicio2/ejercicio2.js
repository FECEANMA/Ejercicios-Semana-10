'use strict'

let numeracionOficina = "01.24"
let pos = numeracionOficina.indexOf(".");
let numeroPiso = numeracionOficina.substring(0,pos);

alert("Numero de Oficina: " + numeracionOficina);
alert("Numero de Piso: " + numeroPiso);