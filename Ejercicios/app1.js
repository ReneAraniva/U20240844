let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('¿cuál es su nombre?', (nombre)=> {
    console.log(`hola, ${nombre}!`)
    process.exit()
})