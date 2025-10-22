/* 5 - Crie uma Função para Contar de 1 até um Número Informado */

function contagem(x){
    for (let i = 1; i <= x; i++){
        document.write(i+'<br>');
    }
}

let num = parseInt(prompt('Informe o Número'));
contagem(num);