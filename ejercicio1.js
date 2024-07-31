let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('¿cuál es su nombre?', (nombre)=> {
    rl.question('¿cuál es su apellido?', (apellido)=>{
        console.log(`hola, ${nombre} ${apellido} bienvenido!`)
        process.exit()
    })
})