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

const average = (myArray) => {
  if (myArray.length === 0 || myArray[0] === ' ' || myArray[0] === '') return undefined;
  let blnNaN = false;
  const fltSum = myArray.reduce((acc, curr) => {
    const strTypeData = typeof curr;
    if (strTypeData !== 'number') {
      blnNaN = true;
    }
    return acc + curr;
  });
  if (blnNaN) return undefined;
  const intMyArrayLength = myArray.length;
  const intAverage = Math.round(fltSum / intMyArrayLength);
  return intAverage;
};

module.exports = average;
