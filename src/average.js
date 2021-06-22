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
  let soma = 0;
  let arrayAverage;
  let roundAverage;
  for (let i = 0; i < array.length; i += 1) {
    soma += array[i];
    arrayAverage = soma / array.length;
    roundAverage = Math.round(arrayAverage); /* Math.round retirado deste link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round */

    if (typeof (array[i]) !== 'number' || array.length === null) { /* typeof retirado deste link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof */
      return undefined
    }
  }
  return roundAverage;
};

module.exports = average;
