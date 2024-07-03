function contador(lista) {
    // Caso-base: se a lista estiver vazia, retorne 0
    if (lista.length === 0) {
        return 0;
    } else {
        // Caso recursivo: conto o primeiro elemento (1) e os itens restantes da lista
        return 1 + contador(lista.slice(1));
    }
}

let lista = [1, 2, 3, 4, 5];

let total_elementos = contador(lista);

console.log(`O número total de itens é: ${total_elementos}`);
