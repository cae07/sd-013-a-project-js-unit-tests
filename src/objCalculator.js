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
  add:(num1, num2)=> (num1 + num2), // está entre chaves para ser objeto, chave vai ser as opreações usa : para mostrar que é a chave //
  mult:(num1, num2)=> (num1 * num2),
  div:(num1,num2)=> Math.floor(num1 / num2),// como pede para arredondar a divisao para baixo , usa math floor
  sub:(num1, num2)=> (num1 - num2),
};

module.exports = calculator;
