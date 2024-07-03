// A função pesquisa_binaria pega um array ordenado e um item. Se o item está no array, a função retorna a sua posição.

/**
 * Pesquisa recursivamente o número da lista
 * @param {Array} lista Matriz de origem
 * @param {number} item Item de pesquisa
 * @returns {(number|null)} Número se o valor for encontrado ou NULL caso contrário
 */

function pesquisa_binaria(lista, item) {
    let baixo = 0;
    let alto = lista.length - 1;

    while (baixo <= alto) {
        const meio = Math.floor((baixo + alto) / 2);
        const chute = lista[meio];

        if (chute === item) {
            return meio;
        } else if (chute > item) {
            alto = meio - 1;
        } else {
            baixo = meio + 1;
        }
    }
    return null;
}

let minhaLista = [1, 3, 5, 7, 9];

console.log(pesquisa_binaria(minhaLista, 3)); // => 1
console.log(pesquisa_binaria(minhaLista, -1)); // => null
