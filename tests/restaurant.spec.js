const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {

    assert.strictEqual(toString(createMenu()), toString({
      fetchMenu: () => {}
    }))

  });

  it('Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }', () => {
    const objetoRetornado = createMenu({
      food: {},
      drink: {}
    })

    const expected = {
      food: {},
      drink: {}
    }
    assert.deepStrictEqual(objetoRetornado.fetchMenu(), expected)
  })

  it("Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'", () => {
    const objetoRetornado = createMenu({})
    assert.deepStrictEqual(createMenu({}).fetchMenu(), {})
  })

  it("Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.", () => {
    assert.deepStrictEqual(createMenu().consumption, [])
  });

  it("Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption", () => {
    const objetoRetornado = createMenu({})
    objetoRetornado.order('coxinha')
    assert.deepStrictEqual(objetoRetornado.consumption, ["coxinha"])


  });

  it(" Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.", () => {
    const objetoRetornado = createMenu({})
    objetoRetornado.order("agua")
    objetoRetornado.order("sopa")
    objetoRetornado.order("sashimi")
    assert.deepStrictEqual(createMenu().consumption, ["coxinha", "agua", "sopa", "sashimi"])

  });

  it("Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.", () => {

    const objetoRetornado = createMenu();
    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');
    assert.deepStrictEqual(objetoRetornado.consumption, ["coxinha", "agua", "coxinha"])
  });

  it("Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`", () => {
    const objetoRetornado = createMenu({
      food: {
        'coxinha': 3.90,
        'sanduiche': 9.90
      },
      drinks: {
        'agua': 3.90,
        'cerveja': 6.90
      }
    })

    objetoRetornado.order('coxinha');
    objetoRetornado.order('agua');
    objetoRetornado.order('coxinha');

    assert.strictEqual(objetoRetornado.pay(), 12.87)

  });

});
