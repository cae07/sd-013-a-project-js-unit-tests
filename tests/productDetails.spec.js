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
    const twoProducts= productDetails('luva','máscara')
    assert.strictEqual(Array.isArray(twoProducts),true);// usou a propriedade is array para verificar se é array
    assert.strictEqual(twoProducts.length, 2);
        // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(twoProducts[0]), 'object');// typeof retorna em forma de string, por isso object está entre aspas
    assert.strictEqual(typeof(twoProducts[1]), 'object');// como são 2 itens fez do indice 0 e agora do indice 1.
    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual((twoProducts[0]), (twoProducts[1]));// como pede diferente tem de ser o notStrict e 
    // Teste que os dois productIds terminam com 123.
    // Criando uma const para acessar o product id dentro do objeto:
    const products0 = twoProducts[0].details.productId;
    const products1 = twoProducts[1].details.productId;
    assert.deepStrictEqual(products0.substr(products0.length - 3), '123');// com o substr estamos pegando o tamanho e tirando 3, ele vai pegar o nome: exemplo123, se usar substr(2), ele tira o ex sobrando emplo123, ao colocar o tamanho ele vai puxar o tamanho e tirar 3, ou seja se for tamanho 10 tira 3 , ele tira as sete letras e deixa as 3 ultimas, que é o que queremos
    assert.deepStrictEqual(products1.substr(products1.length - 3), '123');
  });
});
