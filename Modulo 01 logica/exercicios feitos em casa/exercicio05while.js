// Solicita o nome ao usuário
let nome = prompt("Digite seu nome:");

// Solicita a quantidade de vezes para exibir o nome
let quantidade = parseInt(prompt("Quantas vezes você quer exibir o nome?"), 10);

// Inicializa o contador
let contador = 0;

// Loop while para exibir o nome repetidamente
while (contador < quantidade) {
  document.write('<br>',nome);
  contador++;
}
