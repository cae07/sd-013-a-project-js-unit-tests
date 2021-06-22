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
    const products = productDetails('carlos','lima');
    assert.strictEqual(Array.isArray(products), true);
    assert.strictEqual(products.length, 2);
    assert.strictEqual(typeof products[0], 'object');
    assert.strictEqual(typeof products[1], 'object');
    assert.notStrictEqual(JSON.stringify(products[0]) === JSON.stringify(products[0]), false);
    const product0 = product[0].details.productId;
    const product1 = product[1].details.productId;
    assert.strictEqual(product0.substr(product0.length - 3), '123');
    assert.strictEqual(product1.substr(product1.length - 3), '123'); 

    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // Teste que os dois productIds terminam com 123.
  });
});
