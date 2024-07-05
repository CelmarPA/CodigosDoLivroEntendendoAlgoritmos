# Função para encontrar o menor custo
def ache_no_custo_mais_baixo(custos):
    custo_mais_baixo = float("inf")
    nodo_custo_mais_baixo = None
    for nodo in custos: # Vá por cada vértice.
        custo = custos[nodo]
        if custo < custo_mais_baixo and nodo not in processados: # Se for o vértice de menor custo até o momento e ainda não tiver sido processado
            custo_mais_baixo = custo # atribua como o novo vértice de menor custo.
            nodo_custo_mais_baixo = nodo
    return nodo_custo_mais_baixo

# Tabela hash para arestas
grafo = {}
grafo["inicio"] = {}
grafo["inicio"]["a"] = 6
grafo["inicio"]["b"] = 2

grafo["a"] = {}
grafo["a"]["fim"] = 1

grafo["b"] = {}
grafo["b"]["a"] = 3
grafo["b"]["fim"] = 5

grafo["fim"] = {} # O vértice final não tem vizinhos

# Código para criar a tabela de custos
infinito = float("inf")

custos = {}
custos["a"] = 6
custos["b"] = 2
custos["fim"] = infinito

# Código para criação da tabela hash para os pais
pais = {}
pais["a"]  = "inicio"
pais["b"]  = "inicio"
pais["fim"] = None

# Array para manter registro de todos os vértices processados
processados = []

# print(grafo["inicio"].keys())
# print(grafo["inicio"]["a"])
# print(grafo["inicio"]["b"])´

nodo = ache_no_custo_mais_baixo(custos) # Encontra o custo mais baixo que ainda não foi processado.

while nodo is  not None:
    custo = custos[nodo]
    vizinhos = grafo[nodo]
    for n in vizinhos.keys(): # Percorre todos os vizinhos desse vértice.
        novo_custo = custo + vizinhos[n]
        if custos[n] > novo_custo: # Caso seja mais barato chegar a um vizinho a partir desse vértice...
            custos[n] = novo_custo # ...atualiza o custo dele.
            pais[n] = nodo # Esse vértice se torna o novo pai para o vizinho.
    processados.append(nodo) # Marca o vértice como processado.
    nodo = ache_no_custo_mais_baixo(custos) # Encontra o próximo vértice a ser processado e o algoritmo é repetido.

# Imprimindo os resultados
print("Tabela de custos:", custos)
print("Tabela de pais:", pais)

# Encontrar o caminho mais curto do início ao fim
caminho = []
nodo_atual = "fim"
while nodo_atual != "inicio":
    caminho.append(nodo_atual)
    nodo_atual = pais[nodo_atual]
caminho.append("inicio")
caminho.reverse()

print("Caminho mais curto:", caminho)