
let consumo = Number(prompt('Ingrese el consumo'))
let descuento, datoDescuento;

if (consumo <= 100) {

    datoDescuento = '10%';
    descuento = consumo * 0.10;

} else if (consumo > 100 && consumo <= 200){

        datoDescuento = '20%'
        descuento = consumo * 0.20;

} else if(consumo > 200){

    datoDescuento = '30%'
    descuento = consumo * 0.30;

}

let montoDescuento = consumo - descuento;
let ivg = montoDescuento * 0.19;
let totalPagar = montoDescuento + ivg;

document.write( `<pre>
        Consumo: ${consumo}
        Descuento: ${descuento} || ${datoDescuento}
        Monto con descuento: ${montoDescuento}
        IVG: ${ivg} || 19%
        Total a pagar: ${totalPagar}
</pre>`
)