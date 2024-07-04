# Cria tabela hash cache
cache = {} # É usado para armazenar as respostas das URLs.

# Esta função verifica se a URL está no cache
def pega_pagina(url):
    if cache.get(url): # Verifica se a url está na cache
        return cache[url]
    else: # Se não busca no servidor
        dados = pega_dados_do_servidor(url)
        cache[url] = dados
        return dados

# Esta função simula a obtenção de dados de um servidor
def pega_dados_do_servidor(url):
    servidor = {
        "https://exemplo.com/pagina1": "Dados da página 1",
        "https://exemplo.com/pagina2": "Dados da página 2"
    }

    if servidor.get(url): # Verifica se a url está no servidor
        return servidor[url]
    else: # Caso não encontre retorna essa mensagem
        return "URL não encontrada no servidor!"


#  Exemplo de uso

print(pega_pagina('https://exemplo.com/pagina1')); # Pega do servidor
print(pega_pagina('https://exemplo.com/pagina1')); # Pega do cache
print(pega_pagina('https://exemplo.com/pagina3')); # URL não encontrada no servidor