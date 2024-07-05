# Operações em conjuntos
frutas = set(["abacate", "tomate", "banana"])
vegetais = set(["beterraba", "cenoura", "tomate"])

uniao = frutas | vegetais #Isso é uma união.
print(uniao)

intersecao = frutas & vegetais # Isso é uma intersecção.
print(intersecao)

diferenca = frutas - vegetais # Isso é uma diferença.
print(diferenca)
