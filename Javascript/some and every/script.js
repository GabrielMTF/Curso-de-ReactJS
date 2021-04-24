// Some e Every
let nome = ["Gabriel", "Matheus", "Charles"];

let nomes = [
    {nome: "Gabriel", idade: 18},
    {nome: "Maria", idade: 25},
    {nome: "Henrique", idade: 25}
];

console.log(nome.some(nome => nome === "Matheus")); // verifica se há algum nome Matheus no array e devolve true ou false

console.log(nomes.every(nome => nome.idade >= 18)); // verifica se todas as idades do array com objetos são maiores ou iguais a 18 