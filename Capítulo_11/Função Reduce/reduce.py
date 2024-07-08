# Importa biblioteca 
from functools import reduce

arr1 = [1, 2, 3, 4, 5]
resultado = reduce(lambda x,y: x + y, arr1)

print(resultado)