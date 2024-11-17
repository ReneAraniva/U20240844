const { reverse } = require('dns')
let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una frase para darle vuelta: ',(cadena)=>{
    const Inverso = cadena.split('').reverse('').join('')
    console.log(`Frase invertida: ${Inverso}`);
    process.exit()

})