/*
Monte um programa para ler o valor de uma camisa 
e calcular o desconto desta camisa de 8%. 
Informar ao final o valor a ser pago pela camisa 
*/
let camisa = parseFloat(prompt('valor da camisa'));
let desconto = camisa * 0.08;
let valfinal = camisa - desconto;
alert('valor final ' + valfinal);