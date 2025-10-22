/*2. Crie uma classe Pessoa com os atributos nome, idade
 e profissão. Depois, crie uma instância e exiba os dados.*/
 class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
    lutador() {
        console.log('O lutador tem ' + this.idade + ', ele se chama ' + this.nome + ' e trabalha com ' + this.profissao);
    }
 }
 let minhaPessoa = new Pessoa ('Gabriel', '22 anos', 'artes marciais.');
 minhaPessoa.lutador();