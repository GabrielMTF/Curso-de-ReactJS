function minhaLista(...nomes) {  //rest operator é colocar três pontos no parâmetro para que ele devolva todos os nomes que foram digitados como parâmetro, sem os três pontos, ele devolveria apenas o "Gabriel"
    console.log(nomes);
};

minhaLista("Gabriel", "Charles", "Fabrício", "Marco");

function numeros(...numeros) {
    console.log(numeros);
};
numeros(10,20,30,40,50,60,70,80,90,100); // sem o rest operator(três pontos), seria mostrado apenas o '10'