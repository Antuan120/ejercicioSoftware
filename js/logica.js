document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('mostrarAreasBtn').addEventListener('click', function() {
        loadContent('areas.html', 'mainContent');
    });

    document.getElementById('mostrarFormularioBtn').addEventListener('click', function() {
        loadContent('formulario.html', 'mainContent');
    });
});

function loadContent(url, targetId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(targetId).innerHTML = xhr.responseText;
        } else if (xhr.readyState === 4) {
            alert('Error al cargar el contenido. Por favor, inténtalo de nuevo más tarde.');
        }
    };
    xhr.send();
}

function loadInitialContent(targetId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'index.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = xhr.responseText;
            var initialContent = tempDiv.querySelector('#home').outerHTML;
            document.getElementById(targetId).innerHTML = initialContent;
        } else if (xhr.readyState === 4) {
            alert('Error al cargar el contenido inicial. Por favor, inténtalo de nuevo más tarde.');
        }
    };
    xhr.send();
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

function guardarDatos(event) {
    event.preventDefault();

    const nombreCompleto = document.getElementById('nombreCompleto').value;
    const profesion = document.getElementById('profesion').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const linkedin = document.getElementById('linkedin').value;

    const habilidades = [];
    document.querySelectorAll('input[name="habilidades"]:checked').forEach((checkbox) => {
        habilidades.push(checkbox.value);
    });

    const formData = new FormData();
    formData.append('nombreCompleto', nombreCompleto);
    formData.append('profesion', profesion);
    formData.append('telefono', telefono);
    formData.append('correo', correo);
    formData.append('linkedin', linkedin);
    formData.append('habilidades', JSON.stringify(habilidades));

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'guardar_datos.php', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Redirigir a la página de mostrar datos después de guardar exitosamente
            window.location.href = 'mostrar_datos.html';
        } else if (xhr.readyState === 4) {
            alert('Error al guardar los datos. Por favor, inténtalo de nuevo.');
        }
    };
    xhr.send(formData);
}

