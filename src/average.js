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

const average = (arrayReceived) => {
  let sum = 0;
  if (arrayReceived.length === 0) {
    return undefined;
  }
  // eslint-disable-next-line guard-for-in
  for (let index of arrayReceived) {
    sum += index;
  }
  for (let index of arrayReceived) {
    if (typeof (index) !== 'number') {
      return undefined;
    }
  }
  return Math.round(sum / arrayReceived.length);
};

console.log(average([3, 4, 5]));

module.exports = average;
