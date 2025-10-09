// 3. Receber o preço de 5 produtos e informar o mais caro
//Descrição: Peça 5 preços ao usuário e mostre qual foi o maior valor digitado.
let preco, maiorpreco = 0;
for (let i=0; i<5;i++){
    preco = parseInt(prompt('Preço'));
    if (maiorpreco < preco){
        maiorpreco = preco;
    }
}
document.write('O maior preço é: ',preco);