"use strict";
const alumno = {
    nombre: "pedro",
    matricula: "12312",
    semestre: 1,
    materias: {
        calculo:7,
        programacion:8,
    }
}
//no se puede modificar el objeto

Object.freeze(alumno);
//si intentas moverle al objeto, da error el archivo js
console.log(Object.isFrozen(alumno));