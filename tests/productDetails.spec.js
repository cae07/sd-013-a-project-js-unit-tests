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
    const funcao = productDetails('test', 'testD');
    assert.strictEqual(Array.isArray(funcao), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('a', 'b')[0], 'object');
    assert.strictEqual(typeof productDetails('a', 'b')[1], 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(productDetails('a', 'b')[0], productDetails('a', 'b')[1]);
    // Teste que os dois productIds terminam com 123.
    const produtoUm = productDetails('a', 'b')[0].details.productId;
    const produtoDois = productDetails('a', 'b')[1].details.productId;
    let terminacao = '';
    let terminacaoD = '';
    for (let index = 0; index < produtoUm.length; index +=1) {
      if (index >= (produtoUm.length - 3)) {
        terminacao += produtoUm[index];
      } 
    }
    assert.strictEqual(terminacao, '123');

    for (let index = 0; index < produtoDois.length; index +=1) {
      if (index >= (produtoDois.length - 3)) {
        terminacaoD += produtoDois[index];
      } 
    }
    assert.strictEqual(terminacaoD, '123');
  });
});
