const assert = require('assert');
const { log } = require('console');
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
    const result1 = productDetails('Alcool gel', 'Máscara');
    const expectedResult1 = true;
    assert.strictEqual(Array.isArray(result1), expectedResult1); // o método Array.isArray() será criado, caso o browser não o disponibilize nativamente

    // Teste que o array retornado pela função contém dois itens dentro.
    const result2 = productDetails('Alcool gel', 'Máscara');
    const expectedResult2 = 2;
    assert.strictEqual(result2.length, expectedResult2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const result3 = productDetails('Alcool gel', 'Máscara');
    const expectedResult3 = 'object';
    assert.strictEqual(typeof(result3[0]), expectedResult3);
    assert.strictEqual(typeof(result3[1]), expectedResult3);

    // Teste que os dois objetos são diferentes entre si.
    const result4 = productDetails('Alcool gel', 'Máscara');
    const obj0 = result4[0];
    const obj1 = result4[1];
    assert.notDeepStrictEqual(obj0, obj1); 

    // Teste que os dois productIds terminam com 123.
    const result = productDetails('Alcool gel', 'Máscara');
    const prod0 = result[0].details.productId.endsWith('123');
    const prod1 = result[1].details.productId.endsWith('123');
    assert.strictEqual(prod0, prod1);
  });
});
