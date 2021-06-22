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
    assert.strictEqual(Array.isArray(productDetails('param1', 'param2')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('param1', 'param2').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof (productDetails('param1', 'param2')), 'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails('param1', 'param2')[0] && [1], true);
    // Teste que os dois productIds terminam com 123.
    assert.strictEqual(productDetails('param1', 'param2')[0].details.productId.endsWith('123'), productDetails('param1', 'param2')[1].details.productId.endsWith('123'), true);
  });
});

/*
1 - O primeiro teste faz a validação se o retorno da função é um array, utilizando o método 'isArray()', que retorna true ou false,
e colocamos no 'expected' 'true';
2 - O segundo teste faz a validação se o array retornado possiu dois itens dentro, fazemos isso acessando a propriedade 'length'
e colocamos no 'expected' '2';
3 - O terceiro teste faz a validação se os itens dentro desse array são objetos, utilizamento o metodo 'typeof()';
4 - O quarto teste faz a validação se os itens são diferentes, utilizamento o metodo 'notStrictEqual', e passando os indices '0' e '1';
5 - O quarto teste faz a validação se os valores dentro da chave 'productId' terminam com '123', utilizando o metodo 'endsWith()'
e colocamos no 'expected' 'true';
*/