/* 12 - Crie uma função que recebe o ano de nascimento e retorna a idade da pessoa (considerando o ano atual como 2025). */

function boasvindas(){
    alert('Bem-Vindo a calculadora de idade.');
}


function calcularIdade(anoNascimento) {
    const anoAtual = 2025;
    const idade = anoAtual - anoNascimento;
    return idade;
}
boasvindas()
let num = parseInt(prompt('Digite o ano que você nasceu:'))
let resultado = calcularIdade(num); alert(resultado)
