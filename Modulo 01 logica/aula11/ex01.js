/*1. Crie uma classe chamada Moto com os atributos marca, 
modelo e ano. Depois, crie uma instância da classe e exiba as informações no console.*/
class Moto {
    constructor(marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }
    moto() {
        console.log('O modelo da moto é: ' + this.marca + ' ' + this.modelo + ' ' + this.ano );
    }
}
let minhaMoto = new Moto ('Honda', 'POP 110i ES', '2026');
minhaMoto.moto();