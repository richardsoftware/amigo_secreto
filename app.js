/*// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.
// Archivo: app.js
const nameInput = document.getElementById('nameInput');
const addButton = document.getElementById('addButton');
const nameList = document.getElementById('nameList');
const drawButton = document.getElementById('drawButton');
const result = document.getElementById('result');

const names = [];

// Agregar nombres a la lista
addButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (name) {
        names.push(name);
        const listItem = document.createElement('li');
        listItem.textContent = name;
        nameList.appendChild(listItem);
        nameInput.value = '';
        nameInput.focus();
    }
});

// Realizar el sorteo
drawButton.addEventListener('click', () => {
    if (names.length > 0) {
        const randomIndex = Math.floor(Math.random() * names.length);
        result.textContent = `El amigo secreto es: ${names[randomIndex]}`;
    } else {
        result.textContent = 'Por favor, ingresa al menos un nombre.';
    }
});*/



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