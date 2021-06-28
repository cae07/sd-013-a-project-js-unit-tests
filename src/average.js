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
  let avg = 0;
  let sumAll = 0;
  if (array.length === 0) {
    sumAll = undefined;
  } else {
   for (let i = 0; i < array.length; i += 1) { 
      if (sumAll !== undefined) {
        if (typeof array[i] === 'number') {
          sumAll += array[i];
        } else {
          sumAll = undefined;
        }
      }
     } 
  }
  if (sumAll !== undefined) {
    avg = Math.round(sumAll / array.length);
  } else {
    avg = undefined;
  }
  return avg;
  };

 let test = [];
console.log(test.length === 0);
console.log(average(test));

module.exports = average;
