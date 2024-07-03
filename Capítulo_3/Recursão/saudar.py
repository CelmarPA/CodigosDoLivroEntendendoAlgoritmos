# Exemplo simples de pilha de chamada

def sauda(nome):
    print(f"Olá, {nome}!")
    sauda2(nome)
    print(f"preparando para dizer tchau...")
    tchau()

def sauda2(nome):
    print(f"Como vai {nome}?")

def tchau():
    print("ok, tchau!")

sauda("maggie")

"""
Suponha que você chame sauda("maggie"). Primeiro, seu computador
aloca uma caixa de memória para essa chamada.

Agora, vamos usar a memória. A variável nome é setada para “maggie”. Isso precisa ser salvo.

Cada vez que você faz uma chamada de função, seu computador salva na
memória os valores para todas as variáveis. Depois disso, imprime olá,
maggie!. Então, chama sauda2("maggie").

Novamente, seu computador aloca uma caixa de memória para essa
chamada de função.

Seu computador está usando uma pilha para estas caixas. A segunda caixa é
adicionada em cima da primeira. Você imprime "como vai maggie?".
Então, retorna da chamada de função. Quando isso acontece, a caixa do
topo da pilha é retirada.

Agora, a caixa do topo da pilha aloca os valores da função sauda, o que
signi°ca que você retornou à função sauda. Quando você chamou a função
sauda2, a função sauda °cou parcialmente completa. Esta é a grande ideia por trás desta seção: quando você chama uma função a partir de outra, a chamada de função tchau.

Uma caixa para esta função é adicionada ao topo da pilha. Quando você
imprimir ok, tchau!, retornará da chamada de função.

Agora, você está de volta à função sauda. Não há nada mais a ser feito, e você pode sair da função sauda também. Essa pilha usada para guardar as variáveis de múltiplas funções é denominada pilha de chamada.
"""