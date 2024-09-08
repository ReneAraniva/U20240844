//Desarrolla una función que valide si una persona tiene la edad suficiente para acceder a cierto contenido. La función debe aceptar una edad y devolver una promesa que se resuelve con el mensaje "Edad válida para acceder al contenido" si la edad es 18 o mayor. Si la edad es menor de 18, la promesa debe ser rechazada con el mensaje "Edad insuficiente para acceder al contenido

let Edad  = 18;
const promesa = new Promise((resolve, reject) => {
    if (Edad >= 18) {
        resolve("Edad válida para acceder al contenido");
        } else {
         reject("Edad insuficiente para acceder al contenido");
    }
});
promesa.then(res => {
    console.log("Mensaje: "  + res);
})
.catch(error=>{
    console.log("Error: " + error);
}
)
