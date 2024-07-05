// Função para encontrar o menor custo
function acheNoCustoMaisBarato(custos) {
    let custoMaisBaixo = Infinity;
    let NodoCustoMaisBaixo = null;
    for (let nodo in custos) {
        // Vá por cada vértice.
        let custo = custos[nodo];
        if (custo < custoMaisBaixo && !processados.includes(nodo)) {
            // Se for o vértice de menor custo até o momento e ainda não tiver sido processado
            custoMaisBaixo = custo; // atribua como o novo vértice de menor custo.
            NodoCustoMaisBaixo = nodo;
        }
    }
    return NodoCustoMaisBaixo;
}

// Tabela hash para arestas
let grafo = {};
grafo["inicio"] = {};
grafo["inicio"]["a"] = 6;
grafo["inicio"]["b"] = 2;

grafo["a"] = {};
grafo["a"]["fim"] = 1;

grafo["b"] = {};
grafo["b"]["a"] = 3;
grafo["b"]["fim"] = 5;

grafo["fim"] = {}; // O vértice final não tem vizinhos

// Código para criar a tabela de custos
let infinito = Infinity;

let custos = {};
custos["a"] = 6;
custos["b"] = 2;
custos["fim"] = infinito;

// Código para criação da tabela hash para os pais
let pais = {};
pais["a"] = "inicio";
pais["b"] = "inicio";
pais["fim"] = null;

// Array para manter registro de todos os vértices processados
let processados = [];

// let chaves = Object.keys(grafo["inicio"]);
// console.log(Object.keys(grafo["inicio"]));
// console.log(grafo["inicio"]["a"]);
// console.log(grafo["inicio"]["b"]);

// Encontra o custo mais baixo que ainda não foi processado.
let nodo = acheNoCustoMaisBarato(custos);

while (nodo !== null && nodo !== undefined) {
    let custo = custos[nodo];
    let vizinhos = grafo[nodo];
    for (let n in vizinhos) {
        let novoCusto = custo + vizinhos[n];
        if (custos[n] > novoCusto) {
            custos[n] = novoCusto;
            pais[n] = nodo;
        }
    }
    processados.push(nodo);
    nodo = acheNoCustoMaisBarato(custos);
}

// Imprimindo os resultados
console.log("Tabela de custos: ", custos);
console.log("Tabela de pais:", pais);

// Encontrar o caminho mais curto do início ao fim
let caminho = [];
nodoAtual = "fim";
while (nodoAtual !== "inicio") {
    caminho.push(nodoAtual);
    nodoAtual = pais[nodoAtual];
}
caminho.push("inicio");
caminho.reverse();

console.log("Caminho mais curto:", caminho);
