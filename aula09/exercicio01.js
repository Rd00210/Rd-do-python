/*Exercício 1 – Sorteio de Números 
📜 Enunciado:Crie um programa que sorteia um número entre 1 e 100. Se for par, exiba "Número X é par". Se for ímpar, exiba "Número X é ímpar". */

let x = Math.floor(Math.random() * 100) + 1;
if ((x % 2) == 0){
    alert('Número sorteado é PAR ' + x);
} else {
    alert('Número sorteado é IMPAR ' + x);
}