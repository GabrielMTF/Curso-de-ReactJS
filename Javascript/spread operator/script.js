var primeiros = [1,2,3,4];

var numeros = [...primeiros,5,6,7,8,9,10]; // spread operator é os três pontos que passamos antes do nome da variável para adicionar um array dentro de outro.
console.log(numeros);

var numeros2 = [...numeros, 11,12,13,14,15]; // não precisamos passar a var 'primeiros' por que ela já está dentro da variavel 'numeros'
console.log(numeros2);

// Usando o spread operator em objetos.

var pessoa = {
    nome: "Gabriel",
    idade: 20,
    serviço: "Programador"
};

var pessoaNova = {
    ...pessoa,
    linguagem: "Javascript",
    cargo: "Programador Junior"
};

console.log(pessoaNova);