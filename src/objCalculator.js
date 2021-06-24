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

// const a = 0;
// const b = 0;
const adition = (a, b) => Math.floor(a + b);
const  multiplication = (a, b) => Math.floor(a * b);
const division = (a, b) => Math.floor(a / b);
const subtraction = (a, b) => Math.floor(a - b);

const calculator = {
  add: adition,
  mult: multiplication,
  div: division,
  sub: subtraction,
};

module.exports = calculator;
