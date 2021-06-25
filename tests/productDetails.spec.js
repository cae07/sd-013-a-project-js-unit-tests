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
    const myfunction = productDetails('Alcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof myfunction, 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(myfunction.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof myfunction[0], 'object');
    assert.deepStrictEqual(typeof myfunction[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(Object.entries(myfunction[0]), Object.entries(myfunction[1]));
    // Teste que os dois productIds terminam com 123.
    const item1 = myfunction[0].details.productId;
    const item2 = myfunction[1].details.productId;
    assert.deepStrictEqual(item1.substr(item1.length-3), '123');
    assert.deepStrictEqual(item2.substr(item2.length-3), '123');

  });
});

