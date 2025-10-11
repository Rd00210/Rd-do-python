/* 2 - Crie uma função para cada uma das 4 operações aritméticas (soma, subtração, divisão e multiplicação). 
Depois crie um programa que leia dois números e de acordo com a operação solicitada, chame a função responsável pela operação. */


function soma(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function divisao(a, b){
    return a / b;
}

function multiplicacao(a, b){
    return a * b;
}
let n1 = parseInt(prompt('Número 1'))
let n2 = parseInt(prompt('Número 2'))


let resultado = soma(n1,n2); alert(resultado);
let sub = subtracao(n1,n2); alert(sub);
let div = divisao(n1,n2); alert(div);
let mult = multiplicacao(n1,n2); alert(mult);
