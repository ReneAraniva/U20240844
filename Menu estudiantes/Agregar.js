const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

async function agregarEstudiante(nombre,apellido, edad, carrera) {
    try {
        const datos = JSON.parse(await fs.readFile('estudiantes.json', 'utf-8'));
        const nuevoEstudiante = { 
            id: uuidv4(),
             nombre,
             apellido,
             edad, 
             carrera 
            };
        datos.push(nuevoEstudiante);
        await fs.writeFile('estudiantes.json', JSON.stringify(datos, null, 2));
        console.log(`Estudiante ${nombre} agregado con éxito con ID: ${nuevoEstudiante.id}`);
    } catch (error) {
        console.error("Error al agregar estudiante:", error);
    }
}

module.exports = agregarEstudiante;

