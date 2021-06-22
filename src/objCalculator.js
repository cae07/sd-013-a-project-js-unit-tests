/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro. parseINT
  Os resultados das divisões devem sempre ser arredondados para baixo. mathfloor

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const calculator = {
  add: (a, b) => parseInt(a, 10) + parseInt(b, 10),
  mult: (a, b) => parseInt(a, 10) * parseInt(b, 10),
  div: (a, b) => Math.floor(parseInt(a, 10) / parseInt(b, 10)),
  sub: (a, b) => parseInt(a, 10) - parseInt(b, 10),
};

module.exports = calculator;
