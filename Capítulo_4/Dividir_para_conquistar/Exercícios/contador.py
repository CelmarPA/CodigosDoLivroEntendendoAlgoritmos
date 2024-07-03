def contador(lista):
    # Caso base: se a lista estiver vazia, retorne 0
    if len(lista) == 0:
        return 0
    # Caso recursivo: conte o primeiro elemento (1) e os itens restantes da lista
    else:
        return 1 + contador(lista[1:])
    
lista = [1, 2, 3, 4, 5]

total_elementos = contador(lista)

print(f"O número total de itens é: {total_elementos}")