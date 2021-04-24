function calcular(...numeros) {
        let total = numeros.reduce((total, proximo) => { 
            return total + proximo; 
 //esse código é chamado de função anônimo por causa da setinho, substituindo a palavra function que foi usada anteriormente.
        });

        console.log(total);
}

calcular(1,2,3,4,5,6);

// let total = numeros.reduce((total, proximo) => total + proximo); -- forma mais resumida ainda, quando se tem apenas uma linha.