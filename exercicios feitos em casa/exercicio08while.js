let fla = 0;
let flu = 0;
let vas = 0;
let bot = 0;
let time;
for(let i = 0; i<10; i++){
    time = prompt('Qual o seu time?');
    switch (time){
        case 'fla':
            fla++; break;
        case 'flu':
            flu++; break;
        case 'vas':
            vas++; break;
        case 'bot':
            bot++; break;
        default:
            out++;
    }
}
document.write('Torcedores do flamengo' + fla + '<br>');
document.write('Torcedores do fluminense' + flu + '<br>');
document.write('Torcedores do vasco' + vas + '<br>');
document.write('Torcedores do botafogo' + bot + '<br>');
document.write('outros torcedores' + out + '<br>');