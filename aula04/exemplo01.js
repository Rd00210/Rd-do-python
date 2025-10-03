// idade de eleitor
// menor de 16 não pode votar
// 16, 17 eleitor opcional
// 18 eleitor obrigatorio

let idade = Number(prompt('Informe a idade'));
if (idade<16){
    console.log('Não pode votar');
} else if (idade<18){
    console.log('Voto opcional');
} else {
    console.log('Voto obrigatorio');
}