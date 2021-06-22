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
  add: (num1, num2) => (num1 + num2),
  sub: (num1, num2) => (num1 - num2),
  mult: (num1, num2) => (num1 * num2),
  div: (num1, num2) => Math.floor(num1 / num2),
};

/*
1 - Primeiro adicionamos a chave 'add' que faz a soma dos parametros através da arrow function;
2 - Adicionamos a chave 'sub' que faz a subtração dos parametros através da arrow function;
3 - Adicionamos a chave 'mult' que faz a multiplicação dos parametros através da arrow function;
4 - Adicionamos a chave 'div' que faz a divisão dos parametros através da arrow function, utilizando a propriedade 'Math.floor'
para arredondar o numero para baixo
*/

module.exports = calculator;
