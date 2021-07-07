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
        // Teste que o retorno da função é um array.
        const test = productDetails('omo', 'rexona');
    assert.ok(Array.isArray(test))
    // Teste que o array retornado pela função contém dois itens dentro.
    let test1 = Object.keys(test);
    assert.strictEqual(test1.length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (Object.entries(test)), 'object')
    // Teste que os dois objetos são diferentes entre si.
    let a = Object.entries(test[0]);
    let b = Object.entries(test[1]);
    assert.notStrictEqual(a, b)
    // Teste que os dois productIds terminam com 123.
    const test2 = Object.entries(test)[0][1].details.productId;
    assert.ok(test2, Object.entries(test)[0][1].details.productId.endsWith(123))
  });
});
