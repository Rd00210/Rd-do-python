let idade = parseInt(prompt('Digite Sua idade:'));
if (idade >= 18){
    document.write('Pode dirigir e votar(voto obrigatorio)');
} else if (idade >= 16){
    document.write('Pode votar (voto opcional)');
} else {
    document.write('Não pode nem dirigir nem votar');
}