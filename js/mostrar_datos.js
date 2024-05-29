document.addEventListener('DOMContentLoaded', function() {
    fetch('obtener_datos.php')
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.container');
            data.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');
                
                card.innerHTML = `
                    <p><strong>Nombre completo:</strong> ${item.nombre_completo}</p>
                    <p><strong>Profesión:</strong> ${item.profesion}</p>
                    <p><strong>Teléfono:</strong> ${item.telefono}</p>
                    <p><strong>Correo electrónico:</strong> ${item.correo}</p>
                    <p><strong>Perfil de LinkedIn:</strong> ${item.linkedin}</p>
                    <p><strong>Habilidades:</strong> ${item.habilidades}</p>
                `;
                
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error:', error));
});
