'use strict'

let url1 = prompt('Ingrese su Url de Facebook','facebook.com/nombreuser');
let pos = url1.indexOf('/');
let user = url1.substring (pos+1);

alert(url1);
alert('Su nombre de Usuario es: ' + user);