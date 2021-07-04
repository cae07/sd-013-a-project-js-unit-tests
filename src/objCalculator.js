/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (numOne, numTwo) => numOne + numTwo,
  mult: (numOne, numTwo) => numOne * numTwo,
  // Para que seja possível arredondar os resultados das divisões para baixo, conforme solicita o requisito, utiliza-se o método math.floor. FONTE: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
  div: (numOne, numTwo) => Math.floor(numOne / numTwo),
  sub: (numOne, numTwo) => numOne - numTwo,
};

module.exports = calculator;
