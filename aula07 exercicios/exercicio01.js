// Dscrição: Peça ao usuário para digitar um número.
//informe se ele é par ou ímpar. O programa deve continuar solicitando
// novos números até que ele digite zero.
let numero = parseInt(prompt('Digite o número'));
while (numero != 0){
    if ((numero % 2) == 0){
        alert('<br>','Número Par');
    } else {
        alert('<br>','Número Ímpar');
    }
    numero = parseInt(prompt('Digite o número <0 para sair>'));
}