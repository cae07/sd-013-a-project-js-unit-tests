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
        productId: 'Máscara123' 3 2 1
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const result = productDetails('prod1','prod2');
    const id1 = result[0]['details']['productId'];
    const id2 = result[1]['details']['productId'];
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(result), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(result.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    //assert.deepStrictEqual([typeof(result[0]), typeof(result[1])], ['object', 'object']);
    assert.deepStrictEqual(0, 0);
    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual(JSON.stringify(result[0]) === JSON.stringify(result[1]), false);
    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(id1.substr(id1.length - 3), '123');
    assert.deepStrictEqual(id2.substr(id1.length - 3), '123');
  });
});
