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
    assert.strictEqual(Array.isArray(productDetails('produtinho', 'produtão')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('produtinho', 'produtão').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof(productDetails('produtinho', 'produtão')), 'object');
    // Teste que os dois objetos são diferentes entre si.
    const array = productDetails('produto1', 'produto2');
    const [product1, product2] = array;
    const verification = (product1.name === product2.name);
    assert.deepStrictEqual(verification, false);
    // Teste que os dois productIds terminam com 123.
    const verifyProductIds = product1.details.productId.endsWith('123') && product2.details.productId.endsWith('123');
    assert.deepStrictEqual(verifyProductIds, true);
  });
});
