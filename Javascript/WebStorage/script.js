// Local storage, são dados que são armazenados pelo navegador mesmo depois do termino do uso do mesmo.

// localStorage.setItem("nome", "Gabriel"); -- Primeiro você passa a 'key' e depois o 'value', no caso o nome que é Gabriel

// localStorage.getItem("nome"); --  nesse caso seria mostrado o "Gabriel"

// localStorage.removeItem("nome");  -- nesse caso seria removido o "nome", ou seja o "Gabriel"

// localStorage.nome = "Gabriel"; -- outro método para se armazenar

// localStorage.nome; -- também serve para mostrar o valor que seria "Gabriel"

var nome = '';

if (typeof localStorage.nome == "undefined" || typeof localStorage.nome == "null") {
    localStorage.nome = prompt("Digite seu nome:");
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;

// sessionStorage.nome; -- seria a mesma coisa do localStorage porém não armazena os dados quando o navegador é encerrado ou outro evento similar.