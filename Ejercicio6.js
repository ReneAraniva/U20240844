let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una palabra para saber si es un palíndromo: ', (cadena) => {    
    let cadenaalr = cadena.replace(/\s+/g,'').toLowerCase();
    const inverso = cadenaalr.split('').reverse().join('');
    
    if (cadenaalr === inverso) {
        console.log(`La palabra "${cadena}" es un palíndromo.`);
    } else {
        console.log(`La palabra "${cadena}" no es un palíndromo.`);
    }

    process.exit()
});
