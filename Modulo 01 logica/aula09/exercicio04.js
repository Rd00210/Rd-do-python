/* Exercício 4 – Número Aleatório Dentro de um Intervalo 
📜 Enunciado: Crie um programa que solicita ao usuário dois números (mínimo e máximo) e sorteia um número dentro desse intervalo. Exiba o número sorteado na tela.
 Considere que o usuário nunca vai colocar números iguais. */




 let min = parseInt(prompt('Digite o número minimo:'));
 let max = parseInt(prompt('Digite o numero maximo:'));

 //gera um numero aletorio dentro do intervalo [min, max]
 let numeroSort = Math.floor(Math.random() * (max - min + 1)) + min;
 console.log(numeroSort);