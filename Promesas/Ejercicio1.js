//Crea una promesa que verifique si una variable llamada número es igual a 5. Si es así, la promesa debe resolverse con el mensaje "El número es 5". Si no es igual a 5, la promesa debe ser rechazada con el mensaje "El número no es 5".
let x  = 5;
const promesa = new Promise((resolve, reject) => {
    if (x === 5) {
        resolve("El número es igual a 5");
        } else {
         reject("El número no es igual a 5");
    }
});
promesa.then(res => {
    console.log("Mensaje: "  + res);
})
.catch(error=>{
    console.log("Error: " + error);
}
)



