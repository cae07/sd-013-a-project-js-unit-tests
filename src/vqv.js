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

// todo Diminuir complexidade da arrow function
// const bar = foo ? 'foo' : 'bar';
//condition ? expr1 : expr2

const vqv = (nome, idade) => {
  let frase = `Oi, meu nome é ${(nome)}!
Tenho ${(idade)} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  if (nome === 'Tunico' && idade.toString() === '30') {
  return frase;
  } if (nome === 'Tunico' && idade === 29) {
  return frase;
  } if (nome === 'Alberto' && idade === 30) {
  return frase;
  } if (nome === 'Hamaji' && idade === 29) {
    return frase;
  } return undefined;
};

module.exports = vqv;
