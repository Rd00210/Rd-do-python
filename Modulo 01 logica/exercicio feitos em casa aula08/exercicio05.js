/* 15 - Crie uma função que recebe dois números e informa qual é o menor. */


function virificarMenor(a,b,c){
    let menor = a;
    if(b < menor){
        menor = b;
    }
    if(c < menor){
        menor = c;
    }
    return menor;
}

let n1 = parseInt(prompt('Numero 1'));
let n2 = parseInt(prompt('Numero 2'));
let n3 = parseInt(prompt('Numero 3'));

let resultado = virificarMenor(n1,n2,n3); alert(resultado);