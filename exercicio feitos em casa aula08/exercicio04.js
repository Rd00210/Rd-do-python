/* 14 - Crie uma função que recebe três números e retorna o maior entre eles. */



function verificarMaior(a, b, c){
    let maior = a;
    if(b > maior){
        maior = b;
    }
    if(c > maior){
        maior = c;
    }
    return maior;
}

let n1 = parseInt(prompt('Numero 1'));
let n2 = parseInt(prompt('Numero 2'));
let n3 = parseInt(prompt('Numero 3'));

let resultado = verificarMaior(n1,n2,n3); alert(resultado);