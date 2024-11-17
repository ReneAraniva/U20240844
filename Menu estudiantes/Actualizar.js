const fs = require('fs').promises;

async function actualizarEstudiante(id, nuevoNombre,nuevoApellido, nuevaEdad, nuevaCarrera) {
    try {
        const datos = JSON.parse(await fs.readFile('estudiantes.json', 'utf-8'));
        const index = datos.findIndex(est => est.id === id);

        if (index !== -1) {
            datos[index] = { ...datos[index], nombre: nuevoNombre,apellido: nuevoApellido, edad: nuevaEdad, carrera: nuevaCarrera };
            await fs.writeFile('estudiantes.json', JSON.stringify(datos, null, 2));
            console.log(`Estudiante con ID: ${id} actualizado con éxito.`);
        } else {
            console.log("Estudiante no encontrado.");
        }
    } catch (error) {
        console.error("Error al actualizar estudiante:", error);
    }
}

module.exports = actualizarEstudiante;
