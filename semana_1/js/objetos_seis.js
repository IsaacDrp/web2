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
const servicio = {
    tipo : "Asociado",
    empresa : "telmex",
    horas: 6,
}

const union = Object.assign(alumno,servicio);
console.log(union);

const unidos = {...alumno,...servicio};
console.log(unidos);