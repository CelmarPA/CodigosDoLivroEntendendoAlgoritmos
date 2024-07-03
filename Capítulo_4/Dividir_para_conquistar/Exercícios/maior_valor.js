function maiorValor(lista) {
    if (lista.length === 0) {
        // Caso-base: lista vazia
        return null;
    } else if (lista.length === 1) {
        // Caso-base: lista com aplenas um elemento
        return lista[0];
    } else {
        return lista[0] > maiorValor(lista.slice(1))
            ? lista[0]
            : maiorValor(lista.splice(1));
    }
}

let lista = [3, 8, 1, 10, 5];
console.log(lista.length);

maior = maiorValor(lista);

console.log(`O maior valor na lista é: ${maior}`);
