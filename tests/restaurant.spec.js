const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const param = { food: {}, drink: {} };
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui, 
    // mas não é necessariamente limitado à chave `fetchMenu`, a qual tem como valor uma função.

    assert.strictEqual(typeof createMenu(), 'object');
    assert.ok(createMenu().hasOwnProperty('fetchMenu'));
    assert.strictEqual(typeof createMenu().fetchMenu, 'function');

    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, 
    // verifique que 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`.

    const object = createMenu(param).fetchMenu();
    assert.deepStrictEqual(Object.keys(object), ['food', 'drink']);

    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'

    assert.deepStrictEqual(param, createMenu(param).fetchMenu());

    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.

    assert.deepStrictEqual(createMenu(param).consumption, []);

    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, 
    // como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption

    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```

    // ```
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```

    // ```
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```

    // ```
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
