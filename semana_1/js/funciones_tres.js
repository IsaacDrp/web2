dato = 2
console.log(dato.toString())// esto es un metodo
console.log(parseInt("2"))// esto es una funcion

//El metodo no pide datos
//La funcion te pide datos

function f(matricula, nombre) {
    console.log(`hola ${nombre} ${matricula}`)
}

f(2342, 'trejo');
f();

//sin argumentos

function f_2(matricula=11, nombre='sin nombre'){
    console.log('Hola ${nombre}');
}

f_2();

