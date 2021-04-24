
function calcular() {
    var n1 = document.getElementById("n1");
    var n2 = document.getElementById("n2");
    var n3 = document.getElementById("n3");
    var n4 = document.getElementById("n4");
    var res = document.getElementById("res");

    var n1n = Number(n1.value);
    var n2n = Number(n2.value);
    var n3n = Number(n3.value);
    var n4n = Number(n4.value);

    var media = (n1n + n2n * 2 + n3n * 3 + n4n * 4) / 10;
    res.innerText = (" ");
    if (media >= 0 && media <= 5.9) {
        alert(`Sua média foi ${media}. Você está de recuperação`);
        res.innerHTML += (`Sua média foi ${media}. Você está de recuperação`);
    } if (media >= 6 && media <= 9) {
        alert(`Sua média foi ${media}. Você foi aprovado`)
        res.innerHTML += (`Sua média foi ${media}. Você foi aprovado`);
    } if (media == 10 && media != 0) {
        alert(`Sua média foi ${media}. Você obteve uma nota perfeita`)
        res.innerHTML += (`Sua média foi ${media}. Você obteve uma nota perfeita`);
    } if (media > 10 || media < 0) {
        alert("[ERRO] Verifique as notas e tente novamente");
    }
}
