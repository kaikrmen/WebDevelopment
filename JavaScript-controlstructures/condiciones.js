//Conidiciones
/** let n = 8, print = '';

if(n % 2 === 0){
    print = `El número ${n} es par`;
} else {
    print = `El número ${n} es impar`;
}

console.log(print); */

//Condiciones anidadas 

let n = 78, print = '';

if (n !== 0) {
    if(n > 0){
        if(n % 2 === 0){
            print = `El número ${n} es par POSITIVO`;
        } else {
            print = `El número ${n} es impar POSITIVO`;
        } 
    } else {
        if(n % 2 === 0){
            print = `El número ${n} es par NEGATIVO`;
        } else {
            print = `El número ${n} es impar NEGATIVO`;
        } 
    }
}  else {
    print = `El número ${n} es neutro`;
}


console.log(print); 