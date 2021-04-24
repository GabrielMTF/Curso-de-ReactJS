// Includes
var nomes = ["Gabriel", "Charles", "Marco", 20, 23, 50];

console.log(nomes.includes("Marco")); // Procura o "Marco" dentro do array devolvendo true ou false, se houver ou não o que foi procurado

// endswith

var nome = "Matheus";

console.log(nome.endsWith('s')); // Vê se a variável termina com a letra 's' devolvendo true ou false

// startwith

console.log(nome.startsWith('m')); // verifica se a variável começa com a letra 'M', ele diferencia maiuscula de minuscula

// lemrbando que os dois ultimos métodos não se limitam a apenas letras, podem incluir pequenos fragmentos de palavras etc.