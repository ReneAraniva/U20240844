const fs = require('fs').promises;

async function crearArchivo() {
    try {
        const estudiantes = [];
        await fs.writeFile('estudiantes.json', JSON.stringify(estudiantes, null, 2));
        console.log("Archivo 'estudiantes.json' creado con éxito.");
    } catch (error) {
        console.error("Error al crear el archivo:", error);
    }
}

module.exports = crearArchivo;
