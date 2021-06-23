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
    assert.strictEqual(Array.isArray(productDetails('prudutoA', 'produtoB')), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('prudutoA', 'produtoB').length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    function isObject(array) {
      for (const item of array) if (typeof item !== 'object') return false;
      return true;
    }
    assert.strictEqual(isObject(productDetails('prudutoA', 'produtoB')), true)
    // Teste que os dois objetos são diferentes entre si.
    function diferentItens(array) {
      if (typeof (array[0]) !== typeof (array[1])) return false;
      const objValues = Object.keys(array[0]);
      for (const item of objValues) {
        if (array[0][item] === array[1][item]) return false;
      } 
      return true;
    }
    assert.strictEqual(diferentItens(productDetails('prudutoA', 'produtoB')), true)
    // Teste que os dois productIds terminam com 123.
    function equalItens(array) {
      const keyA = Object.keys(array[0])[1];
      const keyB = Object.keys(array[0][keyA])[0];
      const productA = array[0][keyA][keyB];
      const productB = array[1][keyA][keyB];
      let compareA = '';
      let compareB = '';
      for (let i = (productA.length - 3); i < (productA.length); i += 1) {
        compareA += productA[i];
        compareB += productB[i];
      }
      if (compareA !== '123' || compareB !== '123') return false;
      return true;
    }
    assert.strictEqual(equalItens(productDetails('prudutoA', 'produtoB')), true)

  });
});
