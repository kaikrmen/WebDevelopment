//Variables
let vV = 0, igv = 0, pv = 0;

//Entrada por teclado
vV = parseFloat(prompt('Ingrese valor de la venta:'));

//Proceso
igv = vV * 0.19;
pv = vV + igv;

//Salida
/**
document.write('Valor de venta: ', +vV, '</br>')
document.write('El igv: ' + igv, '</br>');
document.write('El precio de venta: ' + pv); 
*/

document.write(`<pre>
                Valor de venta: ${vV}
                IGV: ${igv}
                Precio de Venta: ${pv}
                </pre>` )

console.log(`Valor de venta: ${vV}\nIGV: ${igv}\nPrecio de Venta: ${pv}`)