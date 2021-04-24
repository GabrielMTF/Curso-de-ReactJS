
document.write("0 - Refrigerante  <br>         1 - Suco Natural<br> ");
document.write("2 - Sanduiche Natural  <br>   3 - Batata Frita<br> ");
document.write("4 - Sorvete     <br>     5 - Água Gelada<br><br> ");

function Pedido() {
    var x = prompt("Digite o número do seu pedido por favor:");
    switch (x) {
        case "0":
            document.write("Você pediu um Refrigerante");
            alert("Você pediu um Refrigerante");
            break;
        case "1":
            document.write("Você pediu um Suco Natural");
            alert("Você pediu um Suco Natural");
            break;
        case "2":
            document.write("Você pediu um Sanduiche Natural");
            alert("Você pediu um Sanduiche Natural");
            break;
        case "3":
            document.write("Você pediu uma Batata Frita");
            alert("Você pediu uma Batata Frita");
            break;
        case "4":
            document.write("Você pediu um Sorvete");
            alert("Você pediu um Sorvete");
            break;
        case "5":
            document.write("Você pediu uma Água gelada");
            alert("Você pediu uma Água Gelada");
            break;
            default:
                alert("[ERRO]Pedido inválido ou não temos este produto, tente novamente.")

    }
}