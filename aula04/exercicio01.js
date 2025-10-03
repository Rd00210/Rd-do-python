let numero = parseInt(prompt('Digite um número de 1 a 7'));
switch(numero){
    case 1:
        document.write('Domingo');
        break;
    case 2:
        document.write('Segunda-feira');
        break;
    case 3:
        document.write('Terça-Feira');
        break;
    case 4:
        document.write('Quarta-Feira');
        break;
    case 5:
        document.write('Quinta-Feira');
        break;
    case 6:
        document.write('Sexta-Feira');
        break;
    case 7:
        document.write('Sábado');
        break;
    default:
        document.write('Número Invalido');
        break;
}