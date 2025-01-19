// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nombre = input.value.trim();

    if (nombre) {
        // Agregar nombre al array
        amigos.push(nombre);

        // Crear un elemento de lista
        const li = document.createElement('li');
        li.textContent = nombre;

        // Añadir el nombre a la lista visible
        listaAmigos.appendChild(li);

        // Limpiar el campo de entrada y enfocarlo nuevamente
        input.value = '';
        input.focus();
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length > 0) {
        // Limpiar resultados anteriores
        resultado.innerHTML = '';

        // Elegir un amigo aleatoriamente
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];

        // Mostrar el resultado
        const li = document.createElement('li');
        li.textContent = `El amigo secreto es: ${amigoSorteado}`;
        resultado.appendChild(li);
    } else {
        alert('Por favor, agregue al menos un nombre antes de sortear.');
    }
}