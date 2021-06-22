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
  let media = 0;
  let soma = 0;
  if ((Array.isArray(array) === false)) {
    return undefined;
  } else {
    for (let index = 0; index < array.length; index += 1) {
      if (typeof array[index] !== 'number') {
        return undefined;
      } else {
        soma = soma + array[index];
      }
    }
    media = soma/array.length;
    const teste = Math.trunc(media) + 0.5;
    if (media < 0) {
      if (media < teste) {
        return Math.ceil(media);
      } else {
        return Math.floor(media);
      }
    }
    if (media > teste) {
      return Math.ceil(media);
    } else {
      return Math.floor(media);
    }
  }
};

console.log(average([-11, -5, 2]));

module.exports = average;
