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
    assert.strictEqual(Array.isArray(productDetails('máscara', 'alcool')), true); // Teste que o retorno da função é um array.
    assert.strictEqual(productDetails('máscara', 'alcool').length, 2); // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(typeof(Object.values(productDetails('máscara', 'alcool'))), 'object') // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.notDeepStrictEqual(Object.values(productDetails('máscara', 'alcool'))[0], Object.values(productDetails('máscara', 'alcool'))[1]); // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual ((productDetails('máscara', 'alcool')[0].details.productId).substr((productDetails('máscara', 'alcool')[0].details.productId).length - 3), (productDetails('máscara', 'alcool')[1].details.productId).substr((productDetails('máscara', 'alcool')[1].details.productId).length - 3));// Teste que os dois productIds terminam com 123.Object.values(productDetails('máscara', 'alcool'))[0].details.productIds
  });
});
