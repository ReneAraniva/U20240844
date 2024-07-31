let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese un mensaje: ', (mensaje)=> {
    const numPalabras = mensaje.trim().split(/\s+/).filter(Boolean).length;
    console.log(`El número de palabras del mensaje es: ${numPalabras}`)
    process.exit()
})