// Lista dos estados abrangentes
let estadosAbranger = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]); // Passa um array como entrada e ele é convertido em um conjunto

// Lista de estações que podem ser escolhidas
let estacoes = {};
estacoes["kum"] = new Set(["id", "nv", "ut"]);
estacoes["kdois"] = new Set(["wa", "id", "mt"]);
estacoes["ktres"] = new Set(["or", "nv", "ca"]);
estacoes["kquatro"] = new Set(["nv", "ut"]);
estacoes["kcinco"] = new Set(["ca", "az"]);

// Conjunto final de estações
estacoesFinais = new Set();

while (estadosAbranger.size > 0) {
    let melhorEstacao = null;
    let estadosCobertos = new Set();
    // Iterando sobre as entradas do objeto estacoes
    for (let [estacao, estadosPorEstacao] of Object.entries(estacoes)) {
        let cobertos = intersecao(estadosAbranger, estadosPorEstacao);
        if (cobertos.size > estadosCobertos.size) {
            melhorEstacao = estacao;
            estadosCobertos = cobertos;
        }
    }
    // Atualizando os estados a abranger removendo os que já foram cobertos
    estadosAbranger = diferenca(estadosAbranger, estadosCobertos);
    // Adicionando a melhor estação encontrada ao conjunto de estações finais
    estacoesFinais.add(melhorEstacao);
}

// Função para realizar a interseção entre dois conjuntos
function intersecao(setA, setB) {
    let intersecao = new Set();
    for (let elemento of setB) {
        if (setA.has(elemento)) {
            intersecao.add(elemento);
        }
    }
    return intersecao;
}

// Função para realizar a diferença entre dois conjuntos
function diferenca(setA, setB) {
    let diferenca = new Set(setA);
    for (let elemento of setB) {
        diferenca.delete(elemento);
    }
    return diferenca;
}

console.log(estacoesFinais);
