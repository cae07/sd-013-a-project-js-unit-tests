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
  let contador = 0;

  if (array.length === 0) { // caso a função receba um array vazio retorna undefined
    return undefined;
  }

  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) !== 'number') { // caso o valor passado não seja do tipo number retorna undefined
      return undefined;
    }
    contador += array[index]; // somando todos os valores dentro do array
  }

  return Math.round(contador / array.length); // usando Math.round para arredondar os números
};

module.exports = average;
