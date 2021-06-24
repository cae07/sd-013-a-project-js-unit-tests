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
    // Teste que o retorno da função é um array. "O método Array.isArray() retorna true se um objeto é uma array, e false se não é" (referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray).
    assert.strictEqual(Array.isArray(productDetails()), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails().length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof Object.keys(productDetails()), 'object');
    // Teste que os dois objetos são diferentes entre si. "O método assert.notDeepStrictEqual () testa se dois objetos e seus objetos filhos NÃO são iguais, usando o operador !==" (referência: https://www.w3schools.com/nodejs/met_assert_notdeepstrictequal.asp).  
    assert.notDeepStrictEqual(productDetails(), true);
    // Teste que os dois productIds terminam com 123. "O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false" (referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
    assert.deepStrictEqual(productDetails().includes('123'), false);
  });
});    
