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
  add: (n1, n2) => n1 + n2, // Soma os dois numeros inteiros.
  mult: (n1, n2) => n1 * n2, // Multiplica os dois numeros inteiros.
  div: (n1, n2) => Math.floor(n1 / n2), // Divide e arredonda para baixo os dois numeros inteiros.
  sub: (n1, n2) => n1 - n2, // Subtrai os dois numeros inteiros.
};

console.log(calculator.add(1, 2));

module.exports = calculator;
