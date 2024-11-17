let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una Frase:', (frase)=>{
let Capitalizada = frase.split(' ').map(palabra => 
    palabra.charAt(0).toUpperCase() + palabra.slice(1)
).join(' ');
console.log(`Frase Capitalizada: ${Capitalizada}`);
    process.exit()
})