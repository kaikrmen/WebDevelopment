let v = 'z', print = '';

switch(v){
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':   
    case 'u':
    case 'U':          
        print = `${v} es Vocal`;
        break;
    default:
        print = `${v} no es Vocal`;
        break;  
}

console.log(print)