/* 
Monte um programa para ler um valor e verificar 
se esse valor é um número par ou ímpar 
*/
let numero = parseInt(prompt('informe um valor'));
if ((numero % 2) == 0) {
    alert('Número par');
} else {
    alert('Número ímpar');
}