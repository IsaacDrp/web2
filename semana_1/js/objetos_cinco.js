"use strict"
const alumno = {
    nombre: "pedro",
    matricula: "12312",
    semestre: 1,
    materias: {
        calculo:7,
        programacion:8,
    }
}
Object.seal(alumno);
//si se puede modificar, no agregar ni eliminar el objeto
console.log(Object.isSealed(alumno));