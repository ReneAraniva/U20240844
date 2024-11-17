const fs = require('fs').promises;

async function leerArchivo() {
    try {
        const datos = await fs.readFile('estudiantes.json', 'utf-8');
        console.log("Contenido del archivo:", JSON.parse(datos));
    } catch (error) {
        console.error("Error al leer el archivo:", error);
    }
}

module.exports = leerArchivo;

