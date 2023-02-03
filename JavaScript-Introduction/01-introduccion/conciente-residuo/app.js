//Variables

let n1, n2, cociente, residuo;

//datos por teclado, entrada de datos

n1 = Number(prompt('Ingrese número'));
n2 = Number(prompt('Ingrese número'));

//proceso

cociente = n1 / n2;

residuo = n1 % n2;

//salida de datos

document.write('Cociente: ' + cociente + '<br>');
document.write('Residuo: ' + residuo);