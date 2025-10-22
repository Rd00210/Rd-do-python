// 8. Peça ao usuário 3 nomes. Depois, exiba um nome aleatório entre os três. 

// nomes aleatório 

let nomes = []; 

for (let i = 0; i < 3; i++) { 

    nomes.push(prompt('Digite o nome')); 

} 

let sorteado = Math.floor(Math.random() * 3); 

console.log('Nome sorteado: ' + nomes[sorteado]); 