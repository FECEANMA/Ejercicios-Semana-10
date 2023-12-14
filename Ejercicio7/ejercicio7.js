'use strict'

let url1 = prompt('Ingrese el url de drive:','https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link');
let pos = url1.indexOf('d/');
let ubi = url1.substring(pos+2,pos+35);

alert('El URL es: ' + url1);
alert('ID: '+ ubi);