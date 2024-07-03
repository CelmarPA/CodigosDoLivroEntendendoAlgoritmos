// As funções recursivas também utilizam a pilha de chamada! Vamos analisar isto na prática com a função fat (fatorial)

function fat(x) {
    if (x == 1) {
        return 1;
    } else {
        return x * fat(x - 1);
    }
}

console.log(`O fatorial de 5 é ${fat(5)}.`)
console.log(`O fatorial de 3 é ${fat(3)}.`)