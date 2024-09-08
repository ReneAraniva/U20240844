//Implementa una función que verifique si un código de descuento es válido. La función debe aceptar un código de descuento y devolver una promesa. La promesa debe resolverse con el mensaje "Código de descuento válido" si el código es "DESCUENTO2024". Si el código es diferente, la promesa debe ser rechazada con el mensaje "Código de descuento inválido". 6. Crea una función que simule un proceso de compra en línea. La función debe aceptar el mensaje " Código de descuento invalido" 

function Cupon(Descuento){
    return new Promise((resolve, reject) => {

        console.log(`Analizando codigo ${Descuento}...`);
        setTimeout(()=>{
            if (Descuento === "DESCUENTO2024") {
                resolve("Código de descuento válido")
            } else {
                reject("Código de descuento invalido")
            }
        },4000)
})
}
Cupon("DESCUENTO2024")
.then(res=>{
    console.log('Mensaje:' +res);
})
.catch(error => {
    console.log('Mensaje: ' + error);
})

