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
    expect(typeof productDetails('Alcool gel', 'Máscara')).toStrictEqual('object')// Teste que o retorno da função é um array.
    expect(productDetails('Alcool gel', 'Máscara').length).toStrictEqual(2)// Teste que o array retornado pela função contém dois itens dentro.
    expect(typeof productDetails('Alcool gel', 'Máscara')).toStrictEqual('object')// Teste que os dois itens dentro do array retornado pela função são objetos.
    expect(Object.values(productDetails('Alcool gel', 'Máscara'))).not.toStrictEqual()// Teste que os dois objetos são diferentes entre si.
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith('123')).toBeTruthy();
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith('123')).toBeTruthy()// Teste que os dois productIds terminam com 123.
  });
});
