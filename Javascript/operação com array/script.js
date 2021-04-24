const lista = [1,2,3,4,5];

const novaLista = lista.map(function(item){ //função map é usada para percorrer todos os itens dentro de um array, o parâmetro item são os itens dentro do array
    return item * 5;
});

console.log(novaLista); // será mostrado os números da const lista multiplicados por 5.

// se você passar além de item, a palavra 'index' como parâmetro, será a posição do item, mas será considerada o valor dela, por exemplo se você passar item + index, será o valor do item somado com o número da sua posição, que começa (0)

const soma = lista.reduce(function(total, proximo){
    return total + proximo;
});

console.log(soma);

// este método, utilizada uma função que passados os parâmetros total e próximo, soma o valor total do array + o proximo número e assim por diante, dando no final a soma de todos os valores dentro de um array

const find = lista.find(function(item){
    return item === 3;
});

console.log(find);

// a função find, serve para encontrar um número específico dentro de um array, ele retornará o número se ele existir no array