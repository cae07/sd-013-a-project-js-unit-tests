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
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number' || array == null){
      return undefined;
    } 
  } 
  let media = 0;
  let soma = 0;
  for (let index = 0; index < array.length; index += 1) {
    media += array[index];
    soma += 1;  
    return Math.round(media/soma);
  }
  
  
};

module.exports = average;
