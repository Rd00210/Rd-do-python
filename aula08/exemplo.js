/*Função declarada (Simples) 
Neste exemplo, criamos uma função mensagemBoasVindas() que exibe uma saudação.*/

function mensagemBoasVindas() { 
    alert("Bem-vindo ao nosso curso de programação!"); 
} 

/*Função expressão (passagem de parâmetros) 
Agora vamos criar uma função que recebe um parametro, permitindo personalizar a saída. */


function cumprimentar(nome) { 
    alert("Olá, " + nome + "! Seja bem-vindo."); 
} 

/*Função com retorno 
Neste exemplo, criamos uma função que um valor, fazendo um retorno */

function somar(a, b) { 
    return a + b; 
} 

function calcular(a,b){
    alert('A soma é: '+ (a+b));
}


mensagemBoasVindas();
cumprimentar('Rodrigo');
let resultado = somar(1,2);
alert('A soma é: '+ resultado);
calcular(5,6);