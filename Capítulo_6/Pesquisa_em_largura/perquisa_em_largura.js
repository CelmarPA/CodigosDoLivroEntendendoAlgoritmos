// Função para verificar se uma pessoa é um vendedor de manga
function pessoaVendedor(nome) {
    return nome.charAt(nome.length - 1) === "m"; // Último caractere é 'm'
}

// Função para realizar a pesquisa
function pesquisa(nome, grafo) {
    let filaDePesquisa = [];
    filaDePesquisa.push(nome); // Adiciona todos os seus vizinhos para a lista de pesquisa.

    let verificadas = []; // Esse vetor é a forma pela qual você mantém o registro das pessoas que já foram verificadas

    while (filaDePesquisa.length > 0) {
        let pessoa = filaDePesquisa.shift(); // Pega a primeira pessoa da fila
        if (!verificadas.includes(pessoa)) {
            // Verifica esse pessoa somente se ela já não tiver sido verificada
            if (pessoaVendedor(pessoa)) {
                // Verifica se essa pessoa é uma vendedora de mangas
                console.log(pessoa + " é um vendedor de manga!");
                return true;
            } else {
                // Não, ela não é uma vendedora de mangas. Adiciona    todos os amigos dessa pessoa à lista.
                filaDePesquisa.push(...grafo[pessoa]); // Adiciona os vizinhos ao final da fila
                verificadas.push(pessoa); // Marca essa pessoa como verificada
            }
        }
    }
    return false, console.log("Não foi encontrado um vendedor de manga!");
}

// Cria a tabela hash do grafo
let grafo = {};

// Adiciona os amigos ao grafo
grafo["voce"] = ["alice", "bob", "claire"];
grafo["bob"] = ["anuj", "peggy"];
grafo["alice"] = ["peggy"];
grafo["claire"] = ["thom", "jonny"];
9;
grafo["anuj"] = [];
grafo["peggy"] = [];
grafo["thom"] = [];
grafo["jonny"] = [];

// Exemplo de uso:
pesquisa("voce", grafo);
