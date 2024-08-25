//Feb 20, 2012, 3:12 am
const Fecha =  new Date( 2012, 1, 20, 3, 12, 0);
let tipoF = Fecha.toLocaleString('en-us', {year:'numeric',month:'long',day:'numeric'}) +', '
+Fecha.toLocaleTimeString(  'en-us', {hour:'numeric', minute:'numeric'});
console.log(tipoF);
