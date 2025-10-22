/* 10 - Crie uma função chamada contarImpares(n), que recebe um número inteiro positivo e retorna quantos números ímpares existem de 1 até N. */



function contarImpar(n){
    qtdImpar = 0
    for (let i = 1; i <= n; i++){
        if ((i % 2) != 0){
            qtdImpar++;
        }
    }
    return qtdImpar;
}
let numero = parseInt(prompt('Número'));
let qtd = contarImpar(numero);
alert('A quantidade de ímpares é: '+ qtd);