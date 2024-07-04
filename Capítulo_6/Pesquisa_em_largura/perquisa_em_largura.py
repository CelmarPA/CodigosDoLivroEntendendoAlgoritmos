# Importa função deque (doubleended queue, que em português significa fila com dois finais)
from collections import deque

fila_de_pesquisa = deque() # Cria uma nova lista.

# Função para verificar se uma pessoa é um vendedor de manga
def pessoa_e_vendedor(nome):
    return nome[-1] == "m"

# Função para realizar a pesquisa
def pesquisa(nome,  grafo):
    fila_de_pesquisa = deque()
    fila_de_pesquisa += grafo[nome] # Adiciona todos os seus vizinhos para a lista de pesquisa.

    verificadas = [] # Esse vetor é a forma pela qual você mantém o registro das pessoas que já foram verificadas

    while fila_de_pesquisa:  # Enquanto a fila não estiver vazia.
        pessoa = fila_de_pesquisa.popleft() # pega a primeira pessoa da 
        if not pessoa in verificadas: # Verifica esse pessoa somente se ela já não tiver sido verificada
            if pessoa_e_vendedor(pessoa): # Verifica se essa pessoa é uma vendedora de mangas
                print(pessoa + " é um vendedor de manga!")
                return True
            else: # Não, ela não é uma vendedora de mangas. Adiciona todos os amigos dessa pessoa à lista.
                fila_de_pesquisa += grafo[pessoa] # Adiciona os vizinhos ao final da fila
                verificadas.append(pessoa) # Marca essa pessoa como verificada
    return False, print(f"Não foi encontrado um vendedor de manga!")

# Cria a tabela hash do grafo
grafo = {}

# Adiciona os amigos ao grafo
grafo["voce"] = ["alice", "bob", "claire"]
grafo["bob"] = ["anuj", "peggy"]
grafo["alice"] = ["peggy"]
grafo["claire"] = ["thom", "jonny"]
grafo["anuj"] = []
grafo["peggy"] = []
grafo["thom"] = []
grafo["jonny"] = []

# Exemplo de uso:
pesquisa("voce", grafo)
