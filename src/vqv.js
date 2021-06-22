/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const vqv = (nome, idade) => {
  if ((nome === undefined) || (idade === undefined)) {
    return undefined;
  }
  const result = `Oi, meu nome é ${nome}!
Tenho ${idade} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  return result;
};

/*
1 - Primeiro fazemos as validações para saber se foram passados dois parametros para a função, caso contrario retornamos 'undefined';
2 - Definimos a constante usando literalString passando o texto e os parametros;
3 - Retornamos a constante criada anteriormente
*/

module.exports = vqv;
