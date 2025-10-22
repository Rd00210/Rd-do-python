// 1. ESTRUTURA DE DADOS
let pessoas = [];
const totalPessoas = 10;

console.log(`--- INÍCIO DA LEITURA DE DADOS PARA ${totalPessoas} PESSOAS ---`);

// 2. LEITURA DOS DADOS
for (let i = 0; i < totalPessoas; i++) {
    // ATENÇÃO: Se estiver no Node.js, substitua 'prompt' por uma função de leitura de input.
    let nome = prompt(`[${i + 1}/${totalPessoas}] Digite o NOME:`);
    let cidade = prompt(`[${i + 1}/${totalPessoas}] Digite a CIDADE de ${nome}:`);

    // Adiciona o novo objeto pessoa ao array
    pessoas.push({
        nome: nome,
        cidade: cidade
    });
}

console.log(`--- LEITURA DE DADOS CONCLUÍDA. ${pessoas.length} PESSOAS REGISTRADAS. ---`);


// 3. LOOP DE CONSULTA POR ÍNDICE
let continuar = true;

while (continuar) {
    let indiceStr = prompt(`
    --- CONSULTA ---
    Digite o ÍNDICE (0 a ${pessoas.length - 1}) da pessoa.
    Ou digite 'sair' para finalizar:
    `);

    // Trata a opção de sair
    if (indiceStr && indiceStr.toLowerCase() === 'sair') {
        continuar = false;
        console.log("Consulta finalizada. Até logo!");
        break;
    }

    // Converte o input para número (índice)
    let indice = parseInt(indiceStr);

    // Validação
    if (isNaN(indice) || indice < 0 || indice >= pessoas.length) {
        console.log(`ERRO: Índice inválido. Tente novamente com um número entre 0 e ${pessoas.length - 1}.`);
        continue;
    }

    // Mostra o resultado
    let pessoaConsultada = pessoas[indice];
    
    console.log(`\n============================`);
    console.log(`PESSOA ENCONTRADA no ÍNDICE ${indice}:`);
    console.log(`> NOME: ${pessoaConsultada.nome}`);
    console.log(`> CIDADE: ${pessoaConsultada.cidade}`);
    console.log(`============================\n`);
}