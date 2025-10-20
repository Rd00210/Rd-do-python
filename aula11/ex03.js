/*3. Crie uma classe Produto com os atributos nome, 
preço e quantidade. Depois, crie um método que exiba os dados do produto.*/
class produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    arroz() {
        console.log('O nome do arroz é ' + this.nome + ', custa ' + this.preco + ' com ' + this.quantidade);
    }
}
let meuProduto = new produto ('Tio Joao', 'R$30,00 reais', '3 unidades');
meuProduto.arroz();