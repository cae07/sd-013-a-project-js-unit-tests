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

    const products = productDetails('gabriel', 'gregorio');
    assert.strictEqual(Array.isArray(products), true);
    assert.strictEqual(products.length, 2);

    for(let i = 0; i < products.length; i += 1) {
      const product = products[i];
      assert.strictEqual(typeof(product), 'object');
    }

    assert.notStrictEqual(JSON.stringify(products[0]), JSON.stringify(products[1]));

    for(let i = 0; i < products.length; i += 1) {
      const product = products[i];
      const productId = product.details.productId;
      assert.deepStrictEqual(productId.substr(productId.length - 3), '123');

    }
  });
});
