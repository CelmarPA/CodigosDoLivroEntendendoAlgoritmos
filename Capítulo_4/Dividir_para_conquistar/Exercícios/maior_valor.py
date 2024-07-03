def maior_valor(lista):
    # Caso-base: lista vazia
    if len(lista) == 0:
        return None
    # Caso-base: lista com aplenas um elemento
    elif len(lista) == 1:
        return lista[0]
    else:
        return lista[0] if lista[0] > maior_valor(lista[1:]) else maior_valor(lista[1:])
    
lista = [3, 8, 1, 10, 5]

maior =  maior_valor(lista)

print(f"O maior valor na lista é: {maior}")