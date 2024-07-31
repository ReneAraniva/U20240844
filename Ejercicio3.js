let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa una cadena: ', (cadena) => {
    rl.question('Ingresa el inicio: ', (inicio) => {
        rl.question('Ingresa el fin: ', (fin) => {

            const iniciocadena = parseInt(inicio);
            const fincadena = parseInt(fin);
            const subcadena = cadena.substring(iniciocadena,iniciocadena + fincadena);
            console.log('Subcadena extraída:', subcadena);
            process.exit()
           
        });
    });
});
