/* ler dois números e a operação até que o usuario
informe a saida */
let continua = 's';
let num1,num2;
let operacao;
while (continua == 's') {
    num1 = parseInt(prompt('Informe o primeiro número'));
    num2 = parseInt(prompt('Informe o segundo número'));
    operacao = prompt('operacao <+ - * />');
    if (operacao == '+') {alert('Resultado: '+ (num1 + num2));}
    else if (operacao == '-') {alert('Resultado: '+ (num1 - num2));}
    else if (operacao == '*') {alert('Resultado: '+ (num1 * num2));}
    else if (operacao == '/') {alert('Resultado: '+ (num1 / num2));}
    else {alert('Operação invalida');}
    continua = prompt('Deseja permanecer no programa? <s/n>');
}
alert('Programa Finalizado');