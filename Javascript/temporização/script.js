function action() {
    document.write("Executando...<br>")
}

// executa de tempo em tempo, o tempo é passado em milisegundos, ou seja 1000 = 1s.
var timer = setInterval(action, 1000); 

// clearInterval(timer); Seria utilizado para parar a execução, pode ser atribuido a botões etc.


// executa no tempo descrito, ou seja em 2 segundos, e depois não executa mais.
// setTimeout(action, 2000);