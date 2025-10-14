// Vetor com os dias da semana 

let diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]; 

 

// Pedindo ao usuário para informar um número entre 1 e 7 

let numero = parseInt(prompt("Digite um número de 1 a 7 para saber o dia da semana:")); 

 

// Verificando se o número está dentro do intervalo correto 

if (numero >= 1 && numero <= 7) { 

    // Exibindo o nome do dia correspondente 

    console.log("O dia correspondente é: " + diasDaSemana[numero - 1]); 

} else { 

    console.log("Número inválido! Por favor, digite um número entre 1 e 7."); 

} 