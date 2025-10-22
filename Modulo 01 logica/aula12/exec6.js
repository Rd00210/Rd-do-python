// 6. Faça um programa que simula a roleta da sorte: sorteia um número entre 0 e 9 e exibe um prêmio diferente para cada número (use array).

let premios = ['nada','10k rifa do buzeira','50k mais ir no show do ig','Viagem maldivas','iphone 27','Tv','Pc','Notebook','Airpods','Gp'];
let numero = Math.floor(Math.random()*10);
console.log('Número Sorteado: ' + numero);
console.log('Parabens você ganhou: ' + premios[numero]);