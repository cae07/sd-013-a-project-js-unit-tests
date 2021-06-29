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
    // Teste que o array retornado pela função contém dois itens dentro.
    const twoProducts = productDetails('luva', 'máscara');
    assert.strictEqual(Array.isArray(twoProducts),true);
    assert.strictEqual(twoProducts.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(twoProducts[0]), 'object');
    assert.strictEqual(typeof(twoProducts[1]), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual((twoProducts[0]), (twoProducts[1]));
    // Teste que os dois productIds terminam com 123.
    const products0 = twoProducts[0].details.productId;
    const products1 = twoProducts[1].details.productId;
    assert.deepStrictEqual(products0.substr(products0.length - 3), '123');
    assert.deepStrictEqual(products1.substr(products1.length - 3), '123');
  });
});
