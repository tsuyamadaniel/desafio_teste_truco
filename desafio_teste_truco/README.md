# Desafio de Teste — Truco Paulista

Casos de teste em **JavaScript** para validar regras simplificadas de uma partida de **Truco Paulista com 2 duplas**.

## Colaborador

- **Daniel Mitsuo Tsuyama**

## Especificação do desafio

- Casos de teste para testar o Truco Paulista.
- Partida com 2 duplas (4 jogadores).
- Casos de teste em JavaScript para testar JavaScript.

### Regras implementadas

- Validação de quatro jogadores distintos.
- Comparação simplificada da força das cartas.
- Identificação de manilhas a partir da carta vira e hierarquia simplificada dos naipes.
- Identificação da equipe vencedora da rodada.
- Empate retorna `null`.
- Validação de pedidos de truco e apostas aceitas (`3`, `6`, `9` e `12`).

## Como executar

```bash
npm test
```

Requer Node.js 18 ou superior. Os testes utilizam o módulo nativo `node:test`, sem dependências externas.

## Estrutura

```text
index.js     # funções de regras e validação
test.js      # casos de teste automatizados
package.json # comando de execução
```

## Funcionamento dos casos de teste

| Grupo | O que verifica |
|---|---|
| Jogadores | Quatro jogadores distintos, quantidade correta e rejeição de duplicados. |
| Cartas e manilhas | Comparação simplificada entre cartas comuns e manilhas e hierarquia de naipes. |
| Rodada | Identificação da equipe vencedora a partir das cartas jogadas. |
| Empate | Retorno `null` quando há empate na maior força da rodada. |
| Pedido de truco | Apostas permitidas e rejeição de valores inválidos ou partida encerrada. |

**Observação:** trata-se de uma implementação simplificada para fins de testes, não de uma implementação completa de todas as regras e situações do Truco Paulista.
