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
  add: (a, b) => {
    const soma = Math.trunc(a + b);
    return soma;
  },
  mult: (a, b) => {
    const mult = Math.trunc(a * b);
    return mult;
  },
  div: (a, b) => {
    const divi = Math.trunc(a / b);
    return divi;
  },
  sub: (a, b) => {
    const sub = Math.trunc(a - b);
    return sub;
  },
};

module.exports = calculator;
