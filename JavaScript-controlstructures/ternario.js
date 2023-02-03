/*let n = -1;

let r = (n > 0) ? 'Es positivo' : 'Es negativo';

console.log(r)**/

let v = 'z';

let r = ( v === 'a' || v === 'A') ? `${v} es vocal` 
       :( v === 'e' || v === 'E') ? `${v} es vocal`     
       :( v === 'i' || v === 'I') ? `${v} es vocal`    
       :( v === 'o' || v === 'O') ? `${v} es vocal`    
       :( v === 'u' || v === 'U') ? `${v} es vocal`    
       : `${v} No es vocal`;

console.log(r)