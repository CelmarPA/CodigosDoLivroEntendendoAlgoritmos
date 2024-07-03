// Função para encontrar o menor elemento em um array

/**
 * Encontra o índice do elemento com o menor valor no array
 * @param {Array} array Matriz de origem
 * @returns {number} Índice do elemento com menor valor
 */

function buscarMenorIndice(arr) {
    let menor = arr[0];
    let menorIndice = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
            menorIndice = i;
        }
    }
    return menorIndice;
}

// Ordenação por Seleção

/**
 * Classifique a matriz por incremento
 * @param {Array} array Matriz de origem
 * @returns {Array} Novo array ordenado
 */

function ordenacaoPorSelecao(arr) {
    let arrOrdenado = [];
    let copiaArr = arr.slice();
    let length = arr.length;

    for (let i = 0; i < length; i++) {
        // Encontra o menor elemento do array
        let menorElemento = buscarMenorIndice(copiaArr);

        // Adiciona o menor elemento ao novo array
        arrOrdenado.push(copiaArr.splice(menorElemento, 1)[0]);
    }

    return arrOrdenado;
}

let arrayInicial = [5, 3, 6, 2, 10];
let arrayOrdenado = ordenacaoPorSelecao(arrayInicial);

console.log("Array inicial = ", arrayInicial);
console.log("Array ordenado = ", arrayOrdenado);
