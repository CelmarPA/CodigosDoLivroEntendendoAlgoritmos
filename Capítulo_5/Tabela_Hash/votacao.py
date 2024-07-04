# Criar uma hash votaram para registrar as pessoas que já votaram 
votaram = {}

# Função para verficar quando alguém chegar para votar, confere se o nome já está na hash:
def verificar_eleitor(nome):
    if votaram.get(nome): # Se nome votaram.get(nome) encontra na tabela
        print("Mande Embora!")
    else: # Se nome não estiver na tabela
        votaram[nome] = True
        print("Deixe Votar!")

# Exemplos de uso:
verificar_eleitor("tom")
verificar_eleitor("mike")
verificar_eleitor("mike")
