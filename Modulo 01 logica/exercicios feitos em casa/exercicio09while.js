/* 9) Leia o salario e o sexo de n funcionários, e ao final informe: 
- qtd de funcionários de cada sexo 
- a soma do salário das mulheres 
- a soma do salário dos homens 
- a média salarial dessa empresa 
- o programa termina quando for digitado "fim" */
let salario, somasalf = 0, somasalm = 0, qtdm = 0, qtdf = 0;
let controle = 'continua', sexo;
while (controle != 'fim'){
    salario = parseFloat(prompt('Informe o salário'));
    sexo = prompt('Informe o sexo');
    if (sexo == 'f' || sexo == 'F'){
        qtdf++; somasalf += salario;
    } else if (sexo == 'm' || sexo == 'M'){
        qtdm++; somasalm += salario;
    } else {(alert('sexo inválido'));}
    controle = prompt('Deseja continuar? Digite fim p sair');
}
document.write('Qtd de mulheres: '+qtdf+' Salarios femininos: '+somasalf+ '<br>');
document.write('Qtd de Homens: '+qtdm+' Salarios masculinos: '+somasalm+ '<br>');
document.write('Média dos salarios: '+((somasalf+somasalm)/(qtdf+qtdm)));