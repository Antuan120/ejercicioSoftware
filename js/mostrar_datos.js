document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nombreCompleto').textContent = localStorage.getItem('nombreCompleto');
    document.getElementById('profesion').textContent = localStorage.getItem('profesion');
    document.getElementById('telefono').textContent = localStorage.getItem('telefono');
    document.getElementById('correo').textContent = localStorage.getItem('correo');
    document.getElementById('linkedin').textContent = localStorage.getItem('linkedin');

    const habilidades = JSON.parse(localStorage.getItem('habilidades'));
    document.getElementById('habilidades').textContent = habilidades.join(', ');

    const imagenSrc = localStorage.getItem('imagen');
    if (imagenSrc) {
        document.getElementById('imagen').src = imagenSrc;
    }
});