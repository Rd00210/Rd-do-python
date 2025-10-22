// 8. Contar quantos números digitados são positivos 

// Descrição: Peça 6 números ao usuário. Ao final, exiba quantos desses números são positivos (maiores que zero). 


// Passo 1: Inicializa o contador de números positivos
let contadorPositivo = 0;
document.write('Início da solicitação dos 6 números.')
// Passo 2: Loop para pedir 6 números

for(i = 0; i < 6; i++){
    // Passo 3: Solicita e converte a entrada
    // O 'i + 1' mostra o índice de 1 a 6
    const entrada = prompt('Digite o Número: ');
    const numero = Number(entrada);
    // Passo 4: Verifica a condição (número > 0) e conta
    if (numero > 0){
        contadorPositivo++;
        // Incrementa a contagem de positivos
    }
}

// Passo 5: Exibe o resultado final
document.write('<br>','Foram digitados', contadorPositivo ,'números positivos');