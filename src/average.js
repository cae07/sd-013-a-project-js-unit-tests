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

// Ref: https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/
const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }

  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      return undefined;
    }
  }
  
  const newArray = [];

  for (let j = 0; j < array.length; j += 1) {
    newArray.push(array[j]);
  }

  const x = newArray.reduce((a, b) => a + b, 0) / newArray.length;

  if (x >= 0) {
    return Math.floor(x);
  } 
  
  if (x < 0) {
    return Math.ceil(x);
  }
};

module.exports = average;
