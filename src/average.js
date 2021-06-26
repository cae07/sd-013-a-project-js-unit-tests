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
  if (array.length === 0) { // vazio retornar undefined
    return undefined;
  }

  let count = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) !== 'number') { // olhar item por item e se não for numero retirna undefined
      return undefined; 
    }
    count += array[index];// somando indice por indice
  }
  return Math.round(count / array.length);// round Se a parte fracionária do número for maior ou igual a  0.5, o argumento x é arredondado para o próximo número inteiro acima, entretanto se a parte fracionária do número for menor que 0.5, então o valor de x é arredondado para o próximo número inteiro abaixo.
  };
  
  module.exports = average;
