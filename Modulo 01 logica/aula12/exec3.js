/* // 3. Crie uma função que recebe um array de nomes e retorna um novo array com os nomes em ordem reversa. 

function reverterArrayDeNomes(nomes){
    // 1. Cria uma cópia do array original
    const arrayCopia = [...nomes]
    // 2. Reverte a ordem dos elementos na cópia
    arrayCopia.reverse();
    // 3. Retorna o novo array revertido
    return arrayCopia;
}
const nomesOriginais = ["Alisson", "Rd", "Gta", "Messi"];
console.log("Array Original:", nomesOriginais);
const nomesRevertidos = reverterArrayDeNomes(nomesOriginais);
console.log("Array Revertido:", nomesRevertidos);
// Verificação: Garante que o array original permaneceu inalterado.
console.log("Array Original APÓS a função:", nomesOriginais); 
// Deve ser: ["Alisson", "Rd", "Gta", "Messi"] */

function inverterNomes(nomes){ 

    let novo = []; 

    for(let i = nomes.length -1 ; i >=0; i--){ 

        novo.push(nomes[i]); 

    } 

    console.log(novo); 

} 

 

let lista = ['Klebber','Vinícius','Pedro']
inverterNomes(lista);