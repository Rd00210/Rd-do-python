function paraMaiusculas(texto){
    return texto.toUpperCase();
}

console.log(paraMaiusculas('aula de javascript'));
let sexo = prompt('informe o sexo');
if (sexo.toUpperCase == 'F'){
    alert('Feminino');
} else if (sexo.toUpperCase() == 'M'){
    alert('Masculino');
} else {alert('Outro');}
console.log(sexo);