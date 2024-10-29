//desplegable
const tareasLink = document.getElementById('tareas');
const submenuTareas = document.getElementById('submenuTareas');

// Mostrar u ocultar el submenú al hacer clic en "Tareas"
tareasLink.addEventListener('click', function (event) {
    event.preventDefault();
    submenuTareas.style.display = submenuTareas.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener("DOMContentLoaded", () => {
    // Obtener referencias a los elementos de contenido central y derecho
    const contenidoCentral = document.querySelector(".centro section");
    const contenidoDerecho = document.querySelector(".derecha .Doc");

    // Obtener todos los enlaces dentro del submenu
    const enlaces = document.querySelectorAll(".tareas-listado a");

    // Función para manejar clics en los enlaces
    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", async (event) => {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace

            // Actualiza el contenido central y derecho basado en el enlace clicado
            const textoEnlace = event.target.textContent;

            switch (textoEnlace) {
                case "Tutorial":
                    try {
                        const responseCentral = await fetch('./tutorial.html');
                        const postCentralHTML = await responseCentral.text();
                        contenidoCentral.innerHTML = postCentralHTML;

                        // const responseDerecho = await fetch('./post/post_derecho.html');
                        // const postDerechoHTML = await responseDerecho.text();
                        // contenidoDerecho.innerHTML = postDerechoHTML;

                    } catch (error) {
                        console.error("Error al cargar contenido:", error);
                    }
                    // contenidoDerecho.innerHTML = "<h2>Información del Tutorial</h2><p>Detalles sobre el tutorial.</p>";
                    break;
                case "Crear tareas (POST)":
                    try {
                        const responseCentral = await fetch('./post/post_central.html');
                        const postCentralHTML = await responseCentral.text();
                        contenidoCentral.innerHTML = postCentralHTML;

                        const responseDerecho = await fetch('./post/post_derecho.html');
                        const postDerechoHTML = await responseDerecho.text();
                        contenidoDerecho.innerHTML = postDerechoHTML;

                    } catch (error) {
                        console.error("Error al cargar contenido:", error);
                    }
                    break;
                case "Listar tareas (GET)":
                    try {
                        const responseCentral = await fetch('./get/get_central.html');
                        const postCentralHTML = await responseCentral.text();
                        contenidoCentral.innerHTML = postCentralHTML;

                        const responseDerecho = await fetch('./get/get_derecho.html');
                        const postDerechoHTML = await responseDerecho.text();
                        contenidoDerecho.innerHTML = postDerechoHTML;

                    } catch (error) {
                        console.error("Error al cargar contenido:", error);
                    }
                    break;
                case "Obtener tareas por ID (GET)":
                    try {
                        const responseCentral = await fetch('./get_id/get_id_central.html');
                        const postCentralHTML = await responseCentral.text();
                        contenidoCentral.innerHTML = postCentralHTML;

                        const responseDerecho = await fetch('./get_id/get_id_derecho.html');
                        const postDerechoHTML = await responseDerecho.text();
                        contenidoDerecho.innerHTML = postDerechoHTML;

                    } catch (error) {
                        console.error("Error al cargar contenido:", error);
                    }
                    break;
                case "Editar tareas (PUT)":
                    try {
                        const responseCentral = await fetch('./put/put_central.html');
                        const postCentralHTML = await responseCentral.text();
                        contenidoCentral.innerHTML = postCentralHTML;

                        const responseDerecho = await fetch('./put/put_derecho.html');
                        const postDerechoHTML = await responseDerecho.text();
                        contenidoDerecho.innerHTML = postDerechoHTML;

                    } catch (error) {
                        console.error("Error al cargar contenido:", error);
                    }
                    break;
                case "Eliminar tareas (DELETE)":
                    try {
                        const responseCentral = await fetch('./delete/delete_central.html');
                        const postCentralHTML = await responseCentral.text();
                        contenidoCentral.innerHTML = postCentralHTML;

                        const responseDerecho = await fetch('./delete/delete_derecho.html');
                        const postDerechoHTML = await responseDerecho.text();
                        contenidoDerecho.innerHTML = postDerechoHTML;

                    } catch (error) {
                        console.error("Error al cargar contenido:", error);
                    }
                    break;
                default:
                    contenidoCentral.innerHTML = "<h2>Tareas</h2><p>Selecciona una opción del menú.</p>";
                    contenidoDerecho.innerHTML = "<h2>Post</h2>";
                    break;
            }
        });
    });
});

//desplegable
const modeloLink = document.getElementById('modelo');
const submenuModelo = document.getElementById('submenuModelo');

// Mostrar u ocultar el submenú al hacer clic en "Tareas"
modeloLink.addEventListener('click', function (event) {
    event.preventDefault();
    submenuModelo.style.display = submenuModelo.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener("DOMContentLoaded", () => {
    // Obtener referencias a los elementos de contenido central y derecho
    const contenidoCentral = document.querySelector(".centro section");
    const contenidoDerecho = document.querySelector(".derecha .Doc");

    // Obtener todos los enlaces dentro del submenu
    const enlaces = document.querySelectorAll(".modelo-listado a");

    // Función para manejar clics en los enlaces
    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", async (event) => {
            event.preventDefault(); // Evita el comportamiento por defecto del enlace

            // Actualiza el contenido central y derecho basado en el enlace clicado
            const textoEnlace = event.target.textContent;

            switch (textoEnlace) {
                case "Objeto Task":
                    try {
                        const responseCentral = await fetch('./modelo/modelo_central.html');
                        const postCentralHTML = await responseCentral.text();
                        contenidoCentral.innerHTML = postCentralHTML;

                        const responseDerecho = await fetch('./modelo/modelo_derecho.html');
                        const postDerechoHTML = await responseDerecho.text();
                        contenidoDerecho.innerHTML = postDerechoHTML;

                    } catch (error) {
                        console.error("Error al cargar contenido:", error);
                    }
                    break;
                default:
                    contenidoCentral.innerHTML = "<h2>Modelo</h2><p>Selecciona una opción del menú.</p>";
                    contenidoDerecho.innerHTML = "<h2>Modelo</h2>";
                    break;
            }
        });
    });
});

function toggleSchema(schemaId) {
    const schema = document.getElementById(schemaId);
    schema.style.display = schema.style.display === "none" ? "block" : "none";
}

const responsesPost = {
    201: '{\n    "id": "abc123",\n    "title": "Nueva Tarea",\n    "description": "Descripción de la nueva tarea",\n    "completed": false,\n    "createdAt": "2024-10-28T12:34:56.789Z"\n}',
};

const responsesGet = {
    200: '[\n    {\n        "id": "abc123",\n        "title": "Primera Tarea",\n        "description": "Descripción de la primera tarea",\n        "completed": false,\n        "createdAt": "2024-10-27T10:15:30.000Z"\n    },\n    {\n        "id": "def456",\n        "title": "Segunda Tarea",\n        "description": "Descripción de la segunda tarea",\n        "completed": true,\n        "createdAt": "2024-10-27T12:45:30.000Z"\n    }\n]',
    404: '{\n    "code": 404,\n    "message": "No se encontraron tareas"\n}'
};

const responsesGetId = {
    200: '{\n    "id": "abc123",\n    "title": "Primera Tarea",\n    "description": "Descripción de la primera tarea",\n    "completed": false,\n    "createdAt": "2024-10-27T10:15:30.000Z"\n}',
    404: '{\n    "code": 404,\n    "message": "No such document!"\n}'
};

const responsesPut = {
    200: '{\n    "code": 200,\n    "message": "Tarea actualizada correctamente",\n    "task": {\n        "id": "abc123",\n        "title": "Tarea actualizada",\n        "description": "Descripción actualizada de la tarea",\n        "completed": true\n    }\n}',
    404: '{\n    "code": 404,\n    "message": "Error al actualizar la tarea: No se encontró el documento"\n}',
};

const responsesDelete = {
    200: '{\n    "code": 200,\n    "message": "Tarea eliminada correctamente"\n}',
    404: '{\n    "code": 404,\n    "message": "Error al eliminar la tarea: No se encontró el documento"\n}',
};

function showResponse(statusCode, button, api) {
    switch (api) {
        case "post":
            document.getElementById("responseCode").textContent = responsesPost[statusCode];
            break;
        case "get":
            document.getElementById("responseCode").textContent = responsesGet[statusCode];
            break;
        case "getId":
            document.getElementById("responseCode").textContent = responsesGetId[statusCode];
            break;
        case "put":
            document.getElementById("responseCode").textContent = responsesPut[statusCode];
            break;
        case "delete":
            document.getElementById("responseCode").textContent = responsesDelete[statusCode];
            break;
        default:
            break;
    }
    // Quitar el resaltado de cualquier botón activo
    const buttons = document.querySelectorAll(".code-button");
    buttons.forEach(btn => btn.classList.remove("active"));

    // Resaltar el botón actual
    button.classList.add("active");
}