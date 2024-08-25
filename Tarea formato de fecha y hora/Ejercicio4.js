const fecha1 = new Date('2024/10/21'); 
const fecha2 = new Date('2024/08/25'); 
const diferencia = Math.abs(fecha2.getTime() - fecha1.getTime());
const diferenciaEnDias = Math.floor(diferencia / (1000  * 60 * 60 * 24));
console.log(diferenciaEnDias);

