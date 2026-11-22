// Regras simplificadas para validar uma mão de Truco Paulista (2 duplas).
const ordem = ['4', '5', '6', '7', 'Q', 'J', 'K', 'A', '2', '3'];
const naipeManilha = ['ouro', 'espada', 'copas', 'paus'];

function valorCarta(carta, vira) {
    const ranks = ordem;
    const manilhaRank = ranks[(ranks.indexOf(vira.rank) + 1) % ranks.length];

    if (carta.rank === manilhaRank) {
        return 100 + naipeManilha.indexOf(carta.naipe);
    }

    return ranks.indexOf(carta.rank);
}

function vencedorRodada(cartas, vira) {
    if (cartas.length !== 4) {
        throw new Error('A rodada deve ter quatro cartas.');
    }

    const valores = cartas.map(carta => valorCarta(carta, vira));
    const maior = Math.max(...valores);
    const vencedores = valores
        .map((valor, indice) => valor === maior ? indice : null)
        .filter(indice => indice !== null);

    if (vencedores.length > 1) {
        return null;
    }

    return vencedores[0] % 2;
}

function pedirTruco(pontos, aposta) {
    if (![3, 6, 9, 12].includes(aposta)) {
        throw new Error('Aposta inválida.');
    }

    if (pontos >= 12) {
        throw new Error('Partida já encerrada.');
    }

    return aposta;
}

function validarJogadores(jogadores) {
    return jogadores.length === 4 && new Set(jogadores).size === 4;
}

module.exports = {
    valorCarta,
    vencedorRodada,
    pedirTruco,
    validarJogadores
};
