const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    // Verificar si el input no está vacío
    if (input.value.trim() !== '') {
        
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        // Asignar el texto
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        
        // IMPORTANTE: Agregamos la clase 'delete' que viene en tu CSS
        deleteButton.classList.add('delete');
        
        // Añadir el botón al elemento de la lista (li)
        li.append(deleteButton);
        
        // Añadir el li a la lista desordenada (ul)
        list.append(li);
        
        // Funcionalidad para borrar
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        
        // Limpiar input
        input.value = '';
        input.focus();
    } else {
        // Si está vacío, solo regresamos el foco al input
        input.focus();
    }
});