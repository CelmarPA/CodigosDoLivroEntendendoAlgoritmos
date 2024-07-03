// Exemplo simples de pilha de chamada

function sauda(nome) {
    console.log(`Olá, ${nome}!`);
    sauda2(nome);
    console.log(`preparando para dizer tchau...`);
    tchau();
}

function sauda2(nome) {
    console.log(`Como vai ${nome}?`);
}

function tchau() {
    console.log("ok, tchau!");
}

sauda("Maggie");
