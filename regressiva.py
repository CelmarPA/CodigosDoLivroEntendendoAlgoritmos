# Caso-base e caso recursivo

def regressiva(i):
    print(i)
    if (i <= 1): # Caso-base
        return
    else: # Caso recursivo
        regressiva(i - 1)

regressiva(10)