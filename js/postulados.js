function cargarPostulados() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'obtener_postulados.php', true);
    
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            // Los datos se han obtenido correctamente
            var data = JSON.parse(xhr.responseText);
            
            var tabla = document.getElementById('tablaPostulados').getElementsByTagName('tbody')[0];
            
            tabla.innerHTML = '';
            
            // Itera sobre los datos y agregar cada fila a la tabla
            data.forEach(function(postulante) {
                var fila = tabla.insertRow();
                var nombreCompleto = fila.insertCell(0);
                var profesion = fila.insertCell(1);
                var telefono = fila.insertCell(2);
                var correo = fila.insertCell(3);
                var linkedin = fila.insertCell(4);
                var habilidades = fila.insertCell(5);
                
                nombreCompleto.textContent = postulante.nombreCompleto;
                profesion.textContent = postulante.profesion;
                telefono.textContent = postulante.telefono;
                correo.textContent = postulante.correo;
                linkedin.textContent = postulante.linkedin;
                habilidades.textContent = postulante.habilidades;
            });
        } else {
            // Hubo un error al obtener los datos
            console.error('Error al cargar los datos: ' + xhr.statusText);
        }
    };
    
    xhr.onerror = function() {
        console.error('Error de conexión');
    };
    
    xhr.send();
}
