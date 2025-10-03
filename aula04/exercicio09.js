let tempoServico = parseInt(prompt('Digite o tempo de serviço em meses:'));
let tempoCargo = parseInt (prompt('Digite o tempo no cargo atual em mese:'));
if (tempoServico > 12 && tempoCargo >= 6){
    document.write('Pode tirar Féria');
} else {
    document.write('Não pode tirar Férias');
}