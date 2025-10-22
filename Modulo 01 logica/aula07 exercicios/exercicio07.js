/* 7. Mostrar números de 1 a 100 pulando os múltiplos de 5 

Descrição: Exiba os números de 1 a 100, pulando os múltiplos de 5. */

document.write('Números de 1 a 100, pulando múltiplos de 5: ');
for (let i = 1; i <= 100; i++){
// Verifica se o resto da divisão por 5 NÃO é zero
    if (i % 5 === 0){
// Se a condição for verdadeira (não é múltiplo de 5), exibe o número
    document.write(i);
}
}