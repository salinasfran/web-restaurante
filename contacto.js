const formulario = document.getElementById('formulario');
const alerta = document.getElementById('alerta');

formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // evita que se recargue la página
    alerta.classList.remove('d-none'); // muestra la alerta
});