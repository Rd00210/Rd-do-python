let soma = 0;
let contador = 0;

while (contador < 5) {
    let numero = prompt("Digite um número:");
    soma += Number(numero);
    contador++;
}

document.write("A soma total é: " + soma);
