/*4. Crie uma classe Filme com os atributos título, 
diretor e ano de lançamento. Depois, crie um método que exiba as informações do filme.*/
class Filme {
    constructor(titulo, diretor, lancamento) {
        this.titulo = titulo 
        this.diretor = diretor
        this.lancamento = lancamento
    }
    Carros() {
        console.log('O filme ' + this.titulo + ' é dirigido por ' + this.diretor + ', no ano de ' + this.lancamento);
    }
}
let meuFilme = new Filme ('Carros', 'Brian Fee', '2006');
meuFilme.Carros();