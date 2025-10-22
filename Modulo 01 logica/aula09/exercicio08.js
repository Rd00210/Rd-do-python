// Criando um vetor vazio  

let nomes = [];  

// Solicitando 3 nomes ao usuário e adicionando no vetor  

for (let i = 0; i < 3; i++) {  

    let nome = prompt("Digite um nome:");  

    nomes.push(nome);  

}  

// Ordenando o vetor de nomes em ordem alfabética  

nomes.sort();  

// Exibindo a lista ordenada  

console.log("Lista de nomes ordenada:");  

console.log(nomes);  