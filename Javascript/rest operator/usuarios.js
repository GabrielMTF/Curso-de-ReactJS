function cadastro(usuarios, ...novosUsuarios) {
    let total = [
        ...usuarios,
        ...novosUsuarios
    ];
   return console.log(total);
}

let usuarios = ["Jose", "Pedro"];

let novosUsuarios = cadastro(usuarios, "Henrique", "João");