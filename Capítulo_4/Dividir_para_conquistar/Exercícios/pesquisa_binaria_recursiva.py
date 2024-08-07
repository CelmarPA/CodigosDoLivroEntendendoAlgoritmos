
def pesquisa_binaria_recursiva(lista, item, baixo, alto):
    if baixo <= alto:
        meio = (baixo + alto) // 2
        # Caso-base: meio é o item retorna o índice do meio
        if lista[meio] == item:
            return meio
        # Caso recursivo: o valor no índice meio  é maior que o item ou menor que o item
        elif lista[meio] > item:
            return pesquisa_binaria_recursiva(lista,  item, baixo, meio - 1)
        else:
            return pesquisa_binaria_recursiva(lista, item, meio + 1, alto)
    else:
        return None

lista = [1, 3, 5, 7, 9, 11, 13, 15, 17]
item = 9
baixo = 0
alto = len(lista) - 1

resultado = pesquisa_binaria_recursiva(lista, item, baixo, alto)

if resultado is None:
    print(f"O item {item} não foi encontrado na lista.")
else:
    print(f"O item {item} está no índice {resultado}.")