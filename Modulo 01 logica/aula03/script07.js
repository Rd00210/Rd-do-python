/*
Monte um programa para ler duas notas de um aluno, 
calcular a média aritmética e informar se o aluno 
está aprovado ou não. Para ser aprovado a média do aluno 
precisa ser maior ou igual a 6 
*/
let nota1 = parseFloat(prompt('Informe a nota1:'));
let nota2 = parseFloat(prompt('Informe a nota2:'));
let media = (nota1 + nota2)/2;
// if ((nota1 + nota2)/2 >= 6)
if (media>=6){  
    alert('Aprovado');
} else {
    alert('Reprovado');
}