// Conversión de datos 

/**
 * a String => String(), toString
 * a Números => Number(), parseInt()
 * a Decimal => Number(), parseFloat()
*/

//De entero a string

let dato = 15;
console.log( typeof( dato ) );

//dato = String(dato);
dato = dato.toString()
console.log( typeof ( dato ) );

//De string a entero
dato = '45';
console.log( typeof( dato ) );

//dato = Number( dato )
dato = parseInt( dato );
console.log( typeof( dato ) );

//De string a float

dato = '4.5';
console.log( typeof ( dato) );

dato = parseFloat( dato );
console.log( typeof ( dato) );
