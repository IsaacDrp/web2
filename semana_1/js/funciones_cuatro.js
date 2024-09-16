inicio();
function inicio() {
    console.log('se empieza...');
    f_2();
}

function f_2() {
    console.log('se llama otra funcion')
    f_3(3423);
}

function f_3(cuenta) {
    console.log('cuenta alumno...');
    console.log(`cuenta encontrada ${cuenta}`)
}