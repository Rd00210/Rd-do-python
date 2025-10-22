let idade = Number(prompt('Informe a idade'));
if(idade<12){
    document.write('Você é criança');
} else if (idade<18){
    document.write('Você é adolescente');
} else if (idade<60){
    document.write('Você é adulto');
} else {
    document.write('Você é idoso');
}