// 0 - 10
//console.log(Math.floor(Math.random() * 11)); 
// 0 - 5
//console.log(Math.floor(Math.random() * 6) ); 
// 1 - 6
//console.log(Math.floor(Math.random() * 6) + 1); 
//
//console.log(Math.floor(Math.random() * 6));
//
let valor;
while (true){
    valor = (Math.floor(Math.random() * 10000) + 1);
    console.log(valor);
    if (valor == 10) {
        console.log('saiu');
        break;
    }
}
