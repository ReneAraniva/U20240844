let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese un mensaje: ', (palabra)=> {
  const palabramin = palabra.toLowerCase();
  let NumVocal = 0;
  const vocales = 'aeiouáéíóú';


    for (let a = 0; a < palabramin.length; a++) {
        if (vocales.includes(palabramin[a])) {
            NumVocal++;
        }
    }

    console.log(`El número de vocales en "${palabra}" es: ${NumVocal}`);
    rl.close();

})