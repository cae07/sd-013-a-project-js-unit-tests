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
    assert.strictEqual(Array.isArray(productDetails()), true);
    assert.strictEqual(productDetails().length, 2); // Testa se a "length" do objeto realmente é 2.
    assert.strictEqual(typeof (productDetails()[0]), 'object'); // Testa o tipo do primeiro objeto.
    assert.strictEqual(typeof (productDetails()[1]), 'object'); // Testa o tipo do segundo objeto.
    assert.notDeepStrictEqual(productDetails('a', 'b')[0], productDetails('c', 'd')[1]); /* Testa se o primeiro objeto é diferente do segundo. notDeepStrictEqual retirado deste link : https://nodejs.org/api/assert.html#assert_assert_notdeepstrictequal_actual_expected_message */
    assert.strictEqual(productDetails('productA', 'productB')[0].details.productId.substring(8), '123'); /* Testa se dentro de productId, no final do produto contém a string "123". Utilizei substring a partir deste link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring */
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // Teste que os dois productIds terminam com 123.
  });
});
