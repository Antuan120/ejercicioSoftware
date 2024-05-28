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

    const imagen = document.getElementById('imagen').files[0];
    const reader = new FileReader();
    
    reader.onloadend = function() {
        localStorage.setItem('nombreCompleto', nombreCompleto);
        localStorage.setItem('profesion', profesion);
        localStorage.setItem('telefono', telefono);
        localStorage.setItem('correo', correo);
        localStorage.setItem('linkedin', linkedin);
        localStorage.setItem('habilidades', JSON.stringify(habilidades));
        localStorage.setItem('imagen', reader.result);

        window.open('mostrar_datos.html', '_blank');
    };
    
    if (imagen) {
        reader.readAsDataURL(imagen);
    } else {
        alert('Por favor, sube una imagen.');
    }
}
