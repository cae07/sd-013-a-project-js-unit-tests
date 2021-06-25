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
    const resultadoReal = productDetails('Alcool gel', 'Máscara');
    const resultadoEsperado = true;

    assert.strictEqual(Array.isArray(resultadoReal), resultadoEsperado);

    // Teste que o array retornado pela função contém dois itens dentro.
    const resultadoReal2 = productDetails('Alcool gel', 'Máscara');
    const resultadoEsperado2 = 2;
    assert.deepStrictEqual(resultadoReal2.length, resultadoEsperado2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const resultadoReal3 = productDetails('Alcool gel', 'Máscara');
    assert.deepStrictEqual(typeof resultadoReal3[0], 'object');
    assert.deepStrictEqual(typeof resultadoReal3[1], 'object');

    // Teste que os dois objetos são diferentes entre si.
    const resultadoReal4 = productDetails('Alcool gel', 'Máscara');
    const objeto1 = resultadoReal4[0];
    const objeto2 = resultadoReal4[1];
    assert.notDeepStrictEqual(objeto1, objeto2);

    // Teste que os dois productIds terminam com 123.
    const resultadoReal5 = productDetails('Alcool gel', 'Máscara');
    const productIds1 = resultadoReal5[0].details.productId.endsWith('123');
    const productIds2 = resultadoReal5[1].details.productId.endsWith('123');
    assert.deepStrictEqual(productIds1, productIds2);
  });
});
