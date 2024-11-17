const readline = require('readline');
const crearArchivo = require('./Crear.js');
const leerArchivo = require('./Leer.js');
const agregarEstudiante = require('./Agregar.js');
const actualizarEstudiante = require('./Actualizar.js');
const eliminarEstudiante = require('./Eliminar.js');
const contarEstudiantes = require('./Contar');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log(`
    1. Crear archivo JSON con estudiantes
    2. Leer archivo JSON de estudiantes
    3. Agregar nuevo estudiante
    4. Actualizar información de estudiantes
    5. Eliminar un estudiante
    6. Contar estudiantes
    7. Salir
    `);
    rl.question('Seleccione una opción: ', (opcion) => {
        ejecutarOpcion(opcion);
    });
}

function ejecutarOpcion(opcion) {
    switch (opcion) {
        case '1':
            crearArchivo();
            repetirMenu();
            break;
        case '2':
            leerArchivo();
            repetirMenu();
            break;
        case '3':
            rl.question('Ingrese el nombre del estudiante: ', (nombre) => {
                rl.question('Ingrese el apellido del estudiante:',(apellido)=>{
                rl.question('Ingrese la edad del estudiante: ', (edad) => {
                    rl.question('Ingrese la carrera del estudiante: ', (carrera) => {
                        agregarEstudiante(nombre,apellido,parseInt(edad), carrera);
                        repetirMenu();
                    });
                });
            })
            });
            break;
        case '4':
            rl.question('Ingrese el ID del estudiante a actualizar: ', (id) => {
                rl.question('Ingrese el nuevo nombre del estudiante: ', (nuevoNombre) => {
                    rl.question('Ingrese el nuevo nombre del estudiante: ', (nuevoApellido) => {
                    rl.question('Ingrese la nueva edad del estudiante: ', (nuevaEdad) => {
                        rl.question('Ingrese la nueva carrera del estudiante: ', (nuevaCarrera) => {
                            actualizarEstudiante(id, nuevoNombre,nuevoApellido, parseInt(nuevaEdad), nuevaCarrera);
                            repetirMenu();
                        });
                    });
                });
                });
            });
            break;
        case '5':
            rl.question('Ingrese el ID del estudiante a eliminar: ', (id) => {
                eliminarEstudiante(id);
                repetirMenu();
            });
            break;
        case '6':
            contarEstudiantes();
            repetirMenu();
            break;
        case '7':
            console.log("Saliendo del programa...");
            rl.close();
            break;
        default:
            console.log("Opción no válida. Intente de nuevo.");
            repetirMenu();
    }
}



function repetirMenu() {
    setTimeout(() => mostrarMenu(), 1000);
}

mostrarMenu();
