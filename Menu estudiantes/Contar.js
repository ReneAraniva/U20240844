const fs = require('fs').promises;

async function contarEstudiantes() {
    try {
        const datos = JSON.parse(await fs.readFile('estudiantes.json', 'utf-8'));
        console.log(`Número total de estudiantes: ${datos.length}`);
    } catch (error) {
        console.error("Error al contar estudiantes:", error);
    }
}

module.exports = contarEstudiantes;
