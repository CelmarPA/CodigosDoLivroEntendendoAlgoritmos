Suponha que você tenha que desenhar uma grade com 16 divisões. 

![Qual é um bom algoritmo para desenhar essa grade?](/Capítulo%201/Tempo%20de%20execuçã/imagens/grade16.jpg)

**Algoritmo 1**
Uma forma de desenhar essa grade de 16 divisões é desenhar uma divisão de cada vez. Lembre-se, a notação Big O conta o número de operações. Nesse exemplo, desenhar uma divisão é uma operação. Você precisa desenhar 16 divisões. Quantas operações você terá de fazer se desenhar uma divisão por vez?

![Desenhando a grade executando uma divisão por vez.](/Capítulo%201/Tempo%20de%20execuçã/imagens/simples.jpg)

É necessário passar por 16 etapas para desenhar 16 divisões. Qual é o tempo de execução desse algoritmo?

**Algoritmo 2**

Tente agora este algoritmo. Dobre o papel. Neste exemplo, dobrar o papel uma vez é uma operação. Você fez duas divisões com essa operação!
Dobre o papel de novo, de novo e de novo. Desdobre depois de quatro dobras e você terá uma bela grade! A cada dobra, o número de divisões duplica. Você fez 16 divisões com quatro operações!

![Desenhando uma grade com quatro dobras.](/Capítulo%201/Tempo%20de%20execuçã/imagens/binaria.jpg)

Você pode “desenhar” duas vezes mais divisões a cada dobra, logo, você
pode desenhar 16 divisões em quatro etapas. Qual é o tempo de execução
para esse algoritmo? Encontre o tempo de execução dos dois algoritmos
antes de seguir adiante.

__Resposta:__ Logo o **Algoritmo 1** tem tempo de execução **O(n)** e o **Algoritmo 2** tem o tempo de execução **O(log n)**.

__*A notação Big O estabelece o tempo de execução para a pior hipótese*__