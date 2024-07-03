# Função para encontrar o menor elemento em um array

def buscaMenorIndice(arr):
    menor = arr[0]
    menor_indice = 0
    for i in range(1, len(arr)):
        if arr[i] < menor:
            menor = arr[i]
            menor_indice = i
    return menor_indice

print(buscaMenorIndice([5, 3, 6, 2, 10]))

# Ordenação por Seleção

def ordernacaoporSelecao(arr):
    novoArr = []
    for i in range(len(arr)):
        menor = buscaMenorIndice(arr)
        novoArr.append(arr.pop(menor)) # adiciona o menor valor ao novo array
    return novoArr

print(ordernacaoporSelecao([5, 3, 6, 2, 10]))
