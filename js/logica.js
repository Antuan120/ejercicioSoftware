document.getElementById('postulacionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombreCompleto = document.getElementById('nombreCompleto').value;
    var profesion = document.getElementById('profesion').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var linkedin = document.getElementById('linkedin').value;
    var habilidades = obtenerHabilidadesSeleccionadas();

    var imagen = document.getElementById('imagen').files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
        var imagenBase64 = event.target.result;
        var datosPostulacion = '<img src="' + imagenBase64 + '\n">'+
                               '\nNombre completo: ' + nombreCompleto + '\n' +
                               'Profesión: ' + profesion + '\n' +
                               'Teléfono: ' + telefono + '\n' +
                               'Correo electrónico: ' + correo + '\n' +
                               'Perfil de LinkedIn: ' + linkedin + '\n' +
                               'Habilidades: ' + habilidades;
                               

        var ventanaPostulacion = window.open('', 'Datos de Postulación', 'width=1020,height=850');
        ventanaPostulacion.document.write('<pre>' + datosPostulacion + '</pre>');
    };
    reader.readAsDataURL(imagen);
});

function obtenerHabilidadesSeleccionadas() {
    var habilidadesSeleccionadas = [];
    var checkboxes = document.getElementsByName('habilidades');
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            habilidadesSeleccionadas.push(checkbox.value);
        }
    });
    return habilidadesSeleccionadas.join(', ');
}

function toggleDropdown(areaId) {
    var content = document.getElementById(areaId);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
let seleccionados = 0;
    
function limitarSeleccion(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    if (checkbox.checked) {
        seleccionados++;
        if (seleccionados > 3) {
            checkbox.checked = false;
            seleccionados--;
            alert('Solo puedes seleccionar hasta 3 habilidades.');
        }
    } else {
        seleccionados--;
    }
}