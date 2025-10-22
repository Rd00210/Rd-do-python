/*4 - Crie uma Função que Calcula o Quadrado de um Número */

function quadrado(a, b){
    return a ** b

}

let n1 = parseInt(prompt('Numero 1'));
let n2 = parseInt(prompt('Numero 2'));

let resultado = quadrado(n1,n2); alert('O quadrado é: '+ resultado);