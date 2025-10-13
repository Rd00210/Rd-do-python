/* 13 - Crie uma função que recebe um número e verifica se ele é par ou ímpar, retornando a informação. */



function verificarPar(numero){
    if(numero % 2 === 0){
        return 'par';
    } else {
        return 'impar';
    }
}

let n1 = parseInt(prompt('Digite um número:'));

let resultado = verificarPar(n1); alert(resultado);