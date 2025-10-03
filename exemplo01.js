let idade = Number(prompt('Informe a idade'));
if (idade<16){
    console.log('Não pode votar');
} else if (idade<18){
    console.log('Voto opcional');
} else {
    console.log('Voto obrigatorio');
}