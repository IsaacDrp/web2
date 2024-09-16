// Seleccionar elementos del DOM
const nombreInput = document.getElementById('nombre');
const apellidoPaternoInput = document.getElementById('apellido-paterno');
const apellidoMaternoInput = document.getElementById('apellido-materno');
const correoInput = document.getElementById('correo');
const celularInput = document.getElementById('celular');
const sexoSelect = document.getElementById('sexo');
const submitButton = document.querySelector('button');

const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const apellidoRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const celularRegex = /^[0-9]{10}$/;

function validarCampo(inputElement, regex) {
    if (regex.test(inputElement.value)) {
        inputElement.style.borderColor = 'green';
        return true;
    } else {
        inputElement.style.borderColor = 'red';
        return false;
    }
}

nombreInput.addEventListener('input', () => {
    validarCampo(nombreInput, nombreRegex);
});

apellidoPaternoInput.addEventListener('input', () => {
    validarCampo(apellidoPaternoInput, apellidoRegex);
});

apellidoMaternoInput.addEventListener('input', () => {
    validarCampo(apellidoMaternoInput, apellidoRegex);
});

correoInput.addEventListener('input', () => {
    validarCampo(correoInput, correoRegex);
});

celularInput.addEventListener('input', () => {
    validarCampo(celularInput, celularRegex);
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evitar el envío si la validación falla

    const nombreValido = validarCampo(nombreInput, nombreRegex);
    const apellidoPaternoValido = validarCampo(apellidoPaternoInput, apellidoRegex);
    const apellidoMaternoValido = validarCampo(apellidoMaternoInput, apellidoRegex);
    const correoValido = validarCampo(correoInput, correoRegex);
    const celularValido = validarCampo(celularInput, celularRegex);
    const sexoSeleccionado = sexoSelect.value !== "";

    if (nombreValido && apellidoPaternoValido && apellidoMaternoValido && correoValido && celularValido && sexoSeleccionado) {
        alert("Formulario enviado correctamente.");
        console.log(nombreInput.value);
        console.log(apellidoPaternoInput.value);
        console.log(apellidoMaternoInput.value);
        console.log(correoInput.value);
        console.log(celularInput.value);
        console.log(sexoSelect.value);
    } else {
        alert("Por favor, completa correctamente todos los campos.");
    }
});
