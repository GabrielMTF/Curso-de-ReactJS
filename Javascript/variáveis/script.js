// A variável "let", as vezes pode sofrer limitações de ser usada apenas dentro do escopo em que foi criado, e a variável do tipo const é um tipo de variável imutável.

// Para concatenar de forma mais simples usa-se crase e ${'variável que se quer concatenar'}

const aula = "Javascript";

var nome = "Gabriel";

var sobrenome = "Mota";

var idade = 20;

var pessoa = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`;

var pessoa2 = "Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos.";

console.log(pessoa);
console.log(pessoa2);
console.log(aula);
