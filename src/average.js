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
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    if ((typeof (array[i]) !== 'number') || (array.length === 0)) {
      return undefined;
    }
    sum += array[i];
  } if (array.length === 0) {
    return undefined;
  }
  const functionAvarage = sum / array.length;
  const round = Math.round(functionAvarage);
  return round;
};

/*
 1 - Declaramos a variavel 'sum' com o valor de '0';
 2 - Depois fazemos um laço for para percorrer todo o array, que já checa se o valor é um numero e se o array não é vazio,
 caso essas condições sejam verdadeiras retornamos 'undefined';
 3 - No final do laço for atribuimos o resultado na variavel 'sum';
 4 - Definimos as constantes 'functionAvarage' para conseguirmos a média od array, e a 'round' para arredondarmos o numero;
*/

module.exports = average;
