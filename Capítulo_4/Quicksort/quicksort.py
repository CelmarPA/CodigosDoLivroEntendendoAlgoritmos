def quicksort(array):
    # Caso-base: Arrays vazios ou arrays com apenas um elemento
    if len(array) < 2:
        return array
    else:
        pivo = array[0]
        menores = [i for i in array[1:] if i <= pivo]
        '''
        menores = []
            for i in array[1:]:
                if i <= pivo:
                    menores.append(i)            
        '''
        maiores = [i for i in array[1:] if i > pivo]
        '''
        maiores = []
            for i in array[1:]
                if i > pivo
                    maiores.append(i)
        '''
        return quicksort(menores) + [pivo] + quicksort(maiores)

print(f"O array ordenado é: {quicksort([10, 5, 2, 3])}")
