/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (anyArray) => {
  // Se a função receber um array vazio, retorna undefined.
  if (anyArray.length === 0) {
    return undefined;
  }
  // Laço for que vasculha o array recebido e, se o tipo do objeto recebido não for numérico, retorna undefined.
  for (let index = 0; index < anyArray.length; index += 1) {
    if (typeof anyArray[index] !== 'number') {
      return undefined;
    }
  }
  // Declara uma variável para poder armazenar a soma dos valores do array.
  let sumTotal = 0;
  // Laço for que vasculha o array recebido e atribui a variável sumTotal a soma dos valores dos objetos do array.
  for (let index = 0; index < anyArray.length; index += 1) {
    sumTotal += anyArray[index];
  }
  // Declara uma variável que é igual ao resultado da variável sumTotal (soma dos elementos do array) e divide pelo objeto que estiver passando pelo index no laço for.
  let returnedResult = sumTotal / anyArray.length;
  // Declara que o resultado apresentado pela variável returnedResult será arredondado pelo método math.round.
  returnedResult = Math.round(returnedResult);
  // Retorna o resultado de returnedResult.
  return returnedResult;
};

module.exports = average;
