function soma(lista) {
    if (lista.length === 1) {
        // Caso-base: apenas um elemento na lista retorna o elemento
        return lista[0];
    } else {
        // Caso-recursivo: mais de um elemento na lista, retorna o primeiro elemento mais a soma dos restantes
        return lista[0] + soma(lista.slice(1));
    }
}

let total = soma([2, 4, 6]);

console.log(`A soma total é: ${total}`);
