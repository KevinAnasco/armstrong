
var sum = 0;
const num = prompt('Ingrese un número entero positivo de tres dígitos: ');
var a = num;

while (a > 0) {
    var residuo = a % 10;

    sum += residuo* residuo * residuo;

    a = parseInt(a / 10);
}
if (sum == num) {
    alert(num+' es un número de Armstrong');
}
else {
    alert(num+' no es un número de Armstrong.');
}