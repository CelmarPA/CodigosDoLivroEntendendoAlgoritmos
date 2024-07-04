// Criar uma hash votaram para registrar as pessoas que já votaram
let votaram = {};

//  Função para verficar quando alguém chegar para votar, confire se o nome já está na hash:
function verificarEleitor(nome) {
    if (votaram[nome]) {
        // Se nome em na tabela votaram
        console.log("Mande Embora!");
    } else { // Se nome não estiver na tabela
        votaram[nome] = true;
        console.log("Deixe Votar!");
    }
}

// Exemplos de uso:
verificarEleitor("tom");
verificarEleitor("mike");
verificarEleitor("mike");
