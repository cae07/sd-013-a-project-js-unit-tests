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
   const multiplica = Math.trunc(a * b);
   return multiplica;
  },
  div: (a, b) => {
   const divide = Math.trunc(a / b);
   return divide;
  },
  sub: (a, b) => {
   const subtrai = Math.trunc(a - b);
   return subtrai;
  },
};

module.exports = calculator;
