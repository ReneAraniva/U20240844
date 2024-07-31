let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Escriba una Frase:', (frase)=> {
    rl.question('Escribe la palabra que quieres cambiar: ', (cambio)=>{
         rl.question('por cual quieres reemplazar: ', (reemplazo)=>{
           let frasemodificada = frase.replace(new RegExp(cambio), reemplazo);
            console.log('Frase modificada:, ${frasemodificada}');
        
        process.exit()
    })
    })
})