/*6. Crie uma classe Produto com os atributos: 
nome (Nome do produto) 
preco (Preço do produto) 
estoque (Quantidade disponível em estoque) 
Adicione os seguintes métodos:
vender(quantidade): Reduz a quantidade do estoque, se houver disponibilidade. 
reporEstoque(quantidade): Aumenta a quantidade do estoque. 
exibirInfo(): Exibe as informações do produto.*/
class Produto {
    constructor(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
    }
    vender(quantidade) {
        if (this.estoque < quantidade){
            console.log('Quantidade não dísponivel ' + this.estoque);
        }else {
            this.estoque += quantidade
        }
    } 
    reporEstoque(tbquantidade) {
        this.estoque += tbquantidade
        console.log('A quantidade foi aumentada ' + this.estoque);
    }
    exibirInfo() {
        console.log('O produto é ' + this.nome);
        console.log('O preço é ' + this.preco);
        console.log('A quantidade do estoque é ' + this.estoque);
    }
}
let produt = new Produto ('Arroz', 'R$ 35,96', 80);
produt.vender(2);
produt.reporEstoque(100);
produt.exibirInfo();
