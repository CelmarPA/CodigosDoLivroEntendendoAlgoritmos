// Cria tabela hash cache

let chache = {}; // É usado para armazenar as respostas das URLs.

// Esta função verifica se a URL está no cache
function pegaPagina(url) {
    if (chache[url]) { // Verifica se a url está na cache
        return chache[url];
    } else { // Se não busca no servidor
        let dados = pegaDadosDoServidor(url);
        chache[url] = dados;
        return dados;
    }
}

// Esta função simula a obtenção de dados de um servidor
function pegaDadosDoServidor(url) {
    const servidor = {
        "https://exemplo.com/pagina1": "Dados da página 1",
        "https://exemplo.com/pagina2": "Dados da página 2"
    };
    // Verifica se a url está no servidor
    if (url in servidor) {
        return servidor[url];
    } else { // Caso não encontre retorna essa mensagem
        return "URL não encontrada no servidor!";
    }
}

// Exemplo de uso
console.log(pegaPagina('https://exemplo.com/pagina1')); // Pega do servidor
console.log(pegaPagina('https://exemplo.com/pagina1')); // Pega do cache
console.log(pegaPagina('https://exemplo.com/pagina3')); // URL não encontrada no servidor