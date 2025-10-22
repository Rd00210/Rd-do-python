/*6. Criar um menu simples com 3 opções até digitar “sair” 

Descrição: Crie um menu em loop com opções: 

1-Olá 

2-Data atual 

3-Nome do aluno 
 Digite "sair" para encerrar. */

let entrada = ""; // Variável para armazenar a entrada do usuário
while (entrada !== "sair"){
    // Aqui dentro vai o código do menu
    let mensagemMenu = "Digite uma opção:\n1. Olá\n2. Data atual\n3. Nome do aluno\n\n Digite 'sair' para encerrar "
    entrada = prompt(mensagemMenu).toLowerCase(); // prompt() é uma função de navegador
    if (entrada){ // Verifica se o usuário não cancelou o prompt
        entrada = entrada.toLowerCase();
    // Verifica a opção
    switch (entrada){
        case '1':
        case 'Olá':
            document.write('Olá! Seja bem-vindo(a) ao menu.');
            break;
        case '2':
        case 'data atual':
            let data = new Date().toLocaleDateString('pt-BR');
            document.write('A data de hoje é: ${data}');
            break;
        case "3":
        case "nome do aluno":
            document.write('Seu nome é:');
            break;
        case "sair":
            document.write('Encerrando o menu. Até logo!');
            break;
        default:
            // Se a entrada não for nenhuma das opções nem "sair"
            document.write('Opção inválida: "${entrada}". Tente novamente.');
    }
    } else {
        // Se o usuário clicar em "Cancelar" no prompt
        entrada = 'sair'; // Define a entrada como "sair" para encerrar o loop
        document.write('Encerrando o menu.');
    }
}
