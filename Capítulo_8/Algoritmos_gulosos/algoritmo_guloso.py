# Lista dos estados abrangentes
estados_abranger = set(["mt", "wa", "or", "id", "nv", "ut","ca", "az"]) # Passa um array como entrada e ele é convertido em um conjunto

# Lista de estações que podem ser escolhidas
estacoes = {}
estacoes["kum"] = set(["id", "nv", "ut"])
estacoes["kdois"] = set(["wa", "id", "mt"])
estacoes["ktres"] = set(["or", "nv", "ca"])
estacoes["kquatro"] = set(["nv", "ut"])
estacoes["kcinco"] = set(["ca", "az"])

# Conjunto final de estações
estacoes_finais = set()

while estados_abranger:
    melhor_estacao = None
    estados_cobertos = set()

    for estacao, estados_por_estacao in estacoes.items(): 
        cobertos = estados_abranger & estados_por_estacao # Isso é chamado de intersecção.
        if len(cobertos) > len(estados_cobertos):
            melhor_estacao = estacao
            estados_cobertos = cobertos

    estados_abranger -= estados_cobertos
    estacoes_finais.add(melhor_estacao)

print(estacoes_finais)
