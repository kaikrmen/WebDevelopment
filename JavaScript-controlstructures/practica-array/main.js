let pares = [];
let impares = [];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numeroRandom = 0;

for(let n of numeros){
    numeroRandom = parseInt(Math.random()*100);
    let  r = n * numeroRandom;

    if(r % 2 ===0 ){
        console.log(`${n} x ${numeroRandom} = ${r}`);
        pares.push(r);
    }else{
        console.log(`${n} x ${numeroRandom} = ${r}`);
        impares.push(r);
    }
}

console.log('ARRAY DE PARES:', pares)
console.log('ARRAY DE IMPARES:', impares)