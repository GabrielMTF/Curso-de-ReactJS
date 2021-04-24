// função entrar

function entrar() {
    var area = document.getElementById('area'); 
    var text = prompt('Digite seu nome:');

    if (text == '' || text == null) { // se o valor digitado no prompt for null ou nada for digitado
        alert('Digite um nome válido'); // alerta para qualquer uma das situações acima
        area.innerHTML = 'Bem vindo!'; // voltar o texto para como era inicialmente
    } else {
        area.innerHTML ='Bem vindo ' +  text + '!'; // se tudo sair corretamente irá seguir para isto
    }

}

function entrar2(nome) { // o paramentro nome foi passado no HTML como 'Gabriel'
    var area = document.getElementById('area2');
    var text = prompt('Digite seu sobrenome:');
    var idade = prompt('Digite sua idade:'); // agora o programa já tem um nome como parâmetro e quer o Sobrenome e a idade

    if (text == '' || text == null) { // mesma situação da passada
        alert('Digite um sobrenome!');// alerta para as situações acima 
        area2.innerHTML('Bem vindo!'); // voltar o texto para como era inicialmente
    } else if (idade == '' || idade == null) {
        alert('Digite uma idade!');
        area2.innerHTML('Bem vindo!'); // outro if porém para a situação ocorrendo com a variável idade
    } else {
        area2.innerHTML =('Bem vindo ') + nome + " " + text + (' com a idade de: ') + idade + (' anos!');
    } // situação ocorrendo normalmente seguirá esses parâmetros
    
}