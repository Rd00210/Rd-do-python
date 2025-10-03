let idade = parseInt(prompt('Digite sua idade:'));
let acompanhado = prompt('Está acompanhado com um responsável? (sim/não)');

if (idade >= 18 || (idade >= 16 && idade < 18 && acompanhado.toLowerCase() === 'Sim')){
    document.write('Pode comprar bebidas');
} else {
    document.write('Não pode comprar bebidas');
}