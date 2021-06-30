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

// Declara uma função que verifica se a função foi chamada sem nenhum parâmetro e, se for o caso, retorna o valor undefined.
const vqv = (nome, idade) => {
  if ((nome === undefined) && (idade === undefined)) {
    return undefined;
  }
  // Função que recebe os parâmentos de nome e idade e retorna a frase solicitada pelo exercício, usando o padrão de escrita template literals.
  return `Oi, meu nome é ${nome}!\nTenho ${idade} anos,\n`
  + 'trabalho na Trybe e mando muito em programação!\n#VQV!';
};

module.exports = vqv;
