// Operações em conjuntos
let frutas = new Set(["abacate", "tomate", "banana"]);
let vegetais = new Set(["beterraba", "cenoura", "tomate"]);

// Função para realizar a união de dois conjuntos
function uniao(setA, setB) {
    return new Set([...setA, ...setB]);
}

// Função para realizar a inteseção de dois conjuntos
function intersecao(setA, setB) {
    let intersecao = new Set();
    for (let elemento of setB) {
        if (setA.has(elemento)) {
            intersecao.add(elemento);
        }
    }
    return intersecao;
}

// Função para realizar a diferença de dois conjuntos
function diferenca(setA, setB) {
    let diferenca = new Set(setA);
    for (let elemento of setB) {
        diferenca.delete(elemento);
    }
    return diferenca;
}

// Imprime resultados
console.log(uniao(frutas, vegetais));
console.log(intersecao(frutas, vegetais));
console.log(diferenca(frutas, vegetais));
