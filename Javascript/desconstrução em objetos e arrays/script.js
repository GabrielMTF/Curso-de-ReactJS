//var arr = [10, 20, 14, 50, 60];
// arrays, já foi passado anteriormente o que é, é uma variável que comporta mais de um valor.


const pessoa = {
    nome: "Gabriel",
    sobrenome: "Mota",
    idade: 10,
    cargo: "desenvolvedor"
};
console.log(pessoa);

let { cargo } = pessoa;
console.log(cargo);

let { nome:player } = pessoa;
console.log(player);
// objeto é descrito da seguinte forma -- const pessoa = {nome: "Gabriel", sobrenome: "Mota", idade:20, cargo:"desenvolvedor"}; -- 
// para desconstruir esse objeto pegando apenas uma caraterística, seria da seguinte maneira -- let { nome } = pessoa; -- a "let" nome passará a valer "Gabriel"

// para trocar o nome da carecterística se faz -- let { cargo:programador } = pessoa; -- a variável que teria o nome de cargo, passa a ter o nome de programador e fica com o valor de cargo que seria "desenvolvedor"

// Descontruindo arrays
var nomes = ["Matheus", "Gabriel", "Charles", "José"];

var { 0:primeironome } = nomes; //Neste exemplo eu uso a posição em que está o nome e em seguida coloca o nome da variável que terá seu valor
console.log(primeironome); // dará o resultado "Matheus"


var perfil = ["Gabriel", "Mota", 10];

var [ nome5, sobrenome5, idade5 ] = perfil;
console.log(nome5); // Gabriel
console.log(sobrenome5); //Mota
console.log(idade5); // 10