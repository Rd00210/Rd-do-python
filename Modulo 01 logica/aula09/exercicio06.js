/* 2. Peça ao usuário para digitar três números e armazene-os em um vetor. Depois, exiba o maior número */


let numeros = [];
let lerNum;
for (let i = 0; i < 3; i++){
    lerNum = parseFloat(prompt('Informe o número'));
    numeros.push(lerNum);
}
// usando math.max
console.log(Math.max(numeros[0], numeros[1], numeros[2]));
// outra forma com for
/*let maior = 0;
for(let i = 0; i<3; i++){
    if (numeros[i]>maior){
        maior = numeros[i];
    }
}
console.log(maior); */