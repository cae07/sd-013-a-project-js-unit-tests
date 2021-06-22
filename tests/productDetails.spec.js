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
    const ret = productDetails('Alcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(ret), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(ret.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const resp = ((typeof ret[0] === 'object') && (typeof ret[1] === 'object')) ? 'object' : false;
    assert.strictEqual(typeof ret, 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(ret[0], ret[1]);
    // Teste que os dois productIds terminam com 123.
    const prod1 = ret[0].details.productId.endsWith(123);
    const prod2 = ret[1].details.productId.endsWith(123);
    const end = prod1 === prod2;
    assert.strictEqual(end, true);
  });
});
