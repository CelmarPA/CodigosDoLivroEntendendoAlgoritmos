def soma(lista):
    # Caso-base: apenas um elemento na lista retorna o elemento
    if len(lista) == 1:
        return lista[0]
    # Caso-recursivo: mais de um elemento na lista, retorna o primeiro elemento mais a soma dos restantes
    else:
        return lista[0] + soma(lista[1:])
    
total = soma([2, 4, 6])

print(f"A soma total é: {total}")