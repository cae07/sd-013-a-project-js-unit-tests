/*
  Dadas duas strings que representam nomes de produtos,
  retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

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
*/
var productDetails = function productDetails(firstProduct, secondProduct) {
  return [{
    name: firstProduct,
    details: {
      productId: ''.concat(firstProduct, '123'),
    },
  }, {
    name: secondProduct,
    details: {
      productId: ''.concat(secondProduct, '123'),
    },
  }];
};

module.exports = productDetails;