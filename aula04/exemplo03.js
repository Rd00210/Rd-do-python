// suposição: um estoque com codio de categoria
// categoria 0 = bebida
// categoria 1 = perecivel
// categoria 2 = ração
// categoria 3 = limpeza
console.log('============= testando com case');
let categoria = 3;
switch (categoria){
    case 0:
        document.write('bebida');
        break;
    case 1:
        document.write('perecivel');
        break;
    case 2:
        document.write('ração');
        break;
    case 3:
        document.write('limpeza');
        break;
    default:
        document.write('categoria não encontrada');
        break;
}

console.log('============= testando com if')
if (categoria == 0){
    document.write('bebida');
} else if (categoria == 1){
    document.write('perecivel');
} else if (categoria == 2){
    document.write('ração');
} else if (categoria == 3){
    document.write('limpeza');
}