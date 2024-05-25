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

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('postulacionForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío por defecto del formulario
        
        // Obtener los datos del formulario
        var formData = new FormData(this);
        
        // Realizar la petición AJAX
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'ruta/a/tu/servidor.php', true); // Reemplaza 'ruta/a/tu/servidor.php' con la ruta de tu servidor
        xhr.onload = function() {
            if (xhr.status === 200) {
                // La petición fue exitosa
                alert('¡Formulario enviado con éxito!');
            } else {
                // Hubo un error en la petición
                alert('Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
            }
        };
        xhr.onerror = function() {
            // Hubo un error de conexión
            alert('Error de conexión. Por favor, revisa tu conexión a internet e inténtalo de nuevo.');
        };
        xhr.send(formData);
    });
});