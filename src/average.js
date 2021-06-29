/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  if (array.length < 1) return undefined;
  let soma = 0;

  for (let i in array) {
    if (typeof array[i] !== 'number') return undefined;
    soma += array[i];
    // O operador typeof retorna uma string indicando o tipo de um operando.
  }

  return Math.round(soma / array.length);
  // A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo.
};

module.exports = average;
