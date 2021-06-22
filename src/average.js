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

const reduceAverage = (resultado, values) => {
  if (typeof (values) === 'object' && values.length === 0) return undefined;
  return Math.round(resultado / values.length);
};

const average = (values) => {
  let resultado = 0;
  for (let index = 0; index < values.length; index += 1) {
    resultado += values[index];
    if (typeof (values[index]) === 'string') return undefined;
    if (values[index] === 0) return 0;
  }
  return reduceAverage(resultado, values);
};

module.exports = average;
