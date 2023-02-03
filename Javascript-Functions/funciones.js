function saludar (nombre) {
    //console.log('Hola desde la función saludar')
    //console.log(`Hola, ${nombre} desde la función saludar`)
    return `Hola, ${nombre} desde la función saludar`
}

//const s = saludar('Kai')
//const r = saludar('Leon')

//console.log(s)
//console.logr(r)

function sumar(a=null, b=null) {
    if (a === null || b === null) {
        console.log('Error, debes enviar dos numeros a la función');
        return;
    }
    return  a + b;
}

const w = sumar ();

console.log(w)