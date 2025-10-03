/*
Monte um programa para ler a idade de uma 
pessoa e informar esta pessoa pode ou não votar 
*/
let idade = parseInt(prompt('Informe a idade'));
if (idade >= 16) {
    alert('Parabéns! você pode votar');
} else {
    alert('Aguarde! você não pode votar');
}