const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const case1 = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(typeof case1, 'object');

    const case2 = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(case2.length, 2);

    const case3 = productDetails('Alcool gel', 'Máscara');
    const case3Items = case3.map((item) => {
      if (typeof item === 'object') return item;
    });
    assert.strictEqual(case3Items.length, 2);

    const case4 = productDetails('Alcool gel', 'Máscara');
    assert.notStrictEqual(case4[0], case4[1]);

    const case5 = productDetails('Alcool gel', 'Máscara');
    const product0 = case5[0].details.productId;
    const product1 = case5[1].details.productId;
    assert.strictEqual(
      product0.endsWith('123') && product1.endsWith('123'),
      true,
    );

    // Teste que os dois productIds terminam com 123.
  });
});
