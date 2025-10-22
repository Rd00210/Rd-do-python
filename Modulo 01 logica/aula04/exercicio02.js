let n1 = Number(prompt('Digite o primeiro número:'));
let n2 = Number(prompt('Digite o segundo número:'));
let operacao = prompt('Digite a operação (+,-,*,/):');
let resultado;
switch (operacao){
    case "+":
        document.write(resultado = n1 + n2);
        break;
    case "-":
        document.write(resultado = n1 - n2);
        break;
    case "*":
        document.write(resultado = n1 * n2);
        break;
    case "/":
        document.write(resultado = n1 / n2);
        break;
    default:
        document.write(resultado = "Operação inválida");
        break;
}