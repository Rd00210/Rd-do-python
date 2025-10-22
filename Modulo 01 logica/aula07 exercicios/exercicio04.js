/* 4. Ler 10 números e mostrar a média 

Descrição: Solicite 10 números e mostre a média deles ao final. */
let numero, somanumero = 0;
for (let i=0; i<10;i++){
    numero = parseInt(prompt('Número'));
    somanumero += numero;
}
document.write('Média: '+(somanumero/10));