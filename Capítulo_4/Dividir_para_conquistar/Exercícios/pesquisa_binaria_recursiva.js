function pesquisa_binaria_recursiva(lista, item, baixo, alto) {
    if (baixo <= alto) {
        meio = Math.floor((baixo + alto) / 2);
        // Caso-base: meio é o item retorna o índice do meio
        if (lista[meio] == item) {
            return meio;
        } else if (lista[meio] > item) { // Caso recursivo: o valor no índice meio  é maior que o item ou menor que o item
            return pesquisa_binaria_recursiva(lista, item, baixo, meio - 1);
        } else {
            return pesquisa_binaria_recursiva(lista, item, meio + 1, alto);
        }
    } else {
        return null;
    }
}

let lista = [1, 3, 5, 7, 9, 11, 13, 15, 17];
let item = 9;
let baixo = 0;
let alto = lista.length - 1;

let resultado = pesquisa_binaria_recursiva(lista, item, baixo, alto);

if (resultado === null) {
    console.log(`O item ${item} não foi encontrado na lista.`);
} else {
    console.log(`O item ${item} está no índice ${resultado}.`)
}