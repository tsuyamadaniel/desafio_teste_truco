const test = require('node:test');
const assert = require('node:assert/strict');

const {
    valorCarta,
    vencedorRodada,
    pedirTruco,
    validarJogadores
} = require('./index');

test('Truco Paulista - 4 jogadores únicos formando duas duplas', () => {
    assert.equal(validarJogadores(['A', 'B', 'C', 'D']), true);
    assert.equal(validarJogadores(['A', 'B', 'A', 'D']), false);
    assert.equal(validarJogadores(['A', 'B', 'C']), false);
});

test('Valor das cartas: carta comum e manilha', () => {
    assert.ok(
        valorCarta({ rank: '3', naipe: 'ouro' }, { rank: '2' }) >
        valorCarta({ rank: 'A', naipe: 'ouro' }, { rank: '2' })
    );

    assert.ok(
        valorCarta({ rank: '3', naipe: 'paus' }, { rank: '2' }) >
        valorCarta({ rank: '3', naipe: 'ouro' }, { rank: '2' })
    );
});

test('Vencedor da rodada considera cartas e equipe', () => {
    assert.equal(
        vencedorRodada([
            { rank: '3', naipe: 'ouro' },
            { rank: '4', naipe: 'ouro' },
            { rank: 'A', naipe: 'ouro' },
            { rank: '5', naipe: 'ouro' }
        ], { rank: '2' }),
        0
    );
});

test('Empate retorna null', () => {
    assert.equal(
        vencedorRodada([
            { rank: 'A', naipe: 'ouro' },
            { rank: 'A', naipe: 'ouro' },
            { rank: '4', naipe: 'ouro' },
            { rank: '5', naipe: 'ouro' }
        ], { rank: '2' }),
        null
    );
});

test('Pedido de truco aceita apostas válidas e rejeita inválidas/fim', () => {
    assert.equal(pedirTruco(0, 6), 6);
    assert.throws(() => pedirTruco(0, 5));
    assert.throws(() => pedirTruco(12, 3));
});
