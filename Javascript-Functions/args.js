function sumar(...args) {

    let suma = 0;

    for(let n of args){
            suma += n;
    }
    return suma;
}

const s = sumar(40,50,70,82,90);
console.log('La suma es: ', s)