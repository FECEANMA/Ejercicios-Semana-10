'use strict'

let email = prompt('Ingrese su Correo Electronico','nombredeuser@magbdigital.net');
let pos = email.indexOf('@');
let user = email.substring (0,pos);

alert('Su correo es: '+ email);
alert('Su nombre de Usuario es: ' + user);