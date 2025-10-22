/* Exercício 3 – Arredondando Valores 
📜 Enunciado:Receba um número decimal qualquer e exiba: 

O valor arredondado para cima (Math.ceil()) 

O valor arredondado para baixo (Math.floor()) 

O valor arredondado normalmente (Math.round()) */



let valor = parseFloat(prompt('Digite um valor'));
console.log('Arredondado para cima '+ Math.ceil(valor));
console.log('Arredondado para baixo '+ Math.floor(valor));
console.log('Arredondado normalmente '+ Math.round(valor));