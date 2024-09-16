const alumno = {
    nombre : "pedro",
    matricula : "12312",
    semestre : 1,
}

alumno.beca = true;
console.log(alumno);

//eliminar un elemento
delete alumno.beca;
console.log(alumno);

//object destructing

const valor=alumno.nombre;
console.log(valor);

const {nombre}=alumno;
console.log(nombre);

//deben llamarse igual
const {matricula}=alumno;
console.log(nombre, matricula)