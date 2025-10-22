// Crie uma função que sorteia uma carta de um baralho  

function sortearCarta(){ 

    let valores = ['Ás','2','3','4','5','6','7','8','9','10','Valete','Dama', 'Rei']; 

    let naipes = ['Copas', 'Espadas', 'Paus', 'Ouros']; 

    let valor = valores[Math.floor(Math.random() * valores.length)] 

    let naipe = naipes[Math.floor(Math.random() * naipes.length)] 

    console.log('A carta sorteada foi: '+ valor + ' de '+ naipe); 

} 

sortearCarta(); 