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
  add: (obj1, obj2) => (obj1 + obj2),
  mult: (obj1, obj2) => (obj1 * obj2),
  div: (obj1, obj2) => Math.trunc(obj1 / obj2),  //O método Math.trunc() retorna a parte inteira de um número, descartando suas casas decimais.
  sub: (obj1, obj2) => (obj1 - obj2),
};

module.exports = calculator;
