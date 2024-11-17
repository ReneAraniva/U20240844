const fs = require('fs').promises;

async function eliminarEstudiante(id) {
    try {
        const datos = JSON.parse(await fs.readFile('estudiantes.json', 'utf-8'));
        const datosFiltrados = datos.filter(est => est.id !== id);

        if (datosFiltrados.length < datos.length) {
            await fs.writeFile('estudiantes.json', JSON.stringify(datosFiltrados, null, 2));
            console.log(`Estudiante con ID: ${id} eliminado con éxito.`);
        } else {
            console.log("Estudiante no encontrado.");
        }
    } catch (error) {
        console.error("Error al eliminar estudiante:", error);
    }
}

module.exports = eliminarEstudiante;

