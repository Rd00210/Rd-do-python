// Vetores para armazenar os nomes dos alunos e suas notas 

let alunos = []; 

let notas = []; 

// Recebendo os nomes e as notas dos 10 alunos 

for (let i = 0; i < 10; i++) { 

    let nome = prompt("Digite o nome do aluno " + (i + 1) + ":"); 

    let nota = parseFloat(prompt("Digite a nota de " + nome + ":")); 

     

    // Adicionando o nome e a nota nos vetores respectivos 

    alunos.push(nome); 

    notas.push(nota); 

} 

// Calculando a média da turma 

let somaNotas = 0; 

for (let i = 0; i < notas.length; i++) { 

    somaNotas += notas[i]; 

} 

let mediaTurma = somaNotas / notas.length; 

// Exibindo a média da turma - toFixed arredonda (2 - duas casas) 

console.log("A média da turma é: " + mediaTurma.toFixed(2)); 
// Exibindo a nota de cada aluno

console.log("Notas dos alunos:"); 

for (let i = 0; i < alunos.length; i++) { 

    console.log(alunos[i] + ": " + notas[i]); 

} 