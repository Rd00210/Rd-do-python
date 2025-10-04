// faça um programa ler um valor e para mostrar e contar a tabela de
// multiplicação deste valor de 1 até 10
let contador = 1;
let numero = parseInt(prompt('digite o número'))
while (contador<=10){
    document.write(numero +' x '+contador+' = '+ numero*contador+'<br>');
    contador++;
}