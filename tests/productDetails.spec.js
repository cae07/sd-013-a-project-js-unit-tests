const { AssertionError } = require('assert');
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
    // Teste que o retorno da função é um array.
    const output = productDetails('alcool', 'mascara');
    assert.deepStrictEqual(Array.isArray(output), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(output.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof ((Object.values(output))[0]), 'object');
    assert.deepStrictEqual(typeof ((Object.values(output))[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual((Object.values(output))[0], (Object.values(output))[1])
    // Teste que os dois productIds terminam com 123.
    const productId1 = output[0].details.productId
    assert.strictEqual(productId1.slice(-3), '123');
    const productId2 = output[1].details.productId
    assert.strictEqual(productId2.slice(-3), '123');
  });
});
