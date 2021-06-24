"use strict";

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
var vqv = function vqv(nome, idade) {
  if (typeof nome === 'undefined' || typeof idade === 'undefined') {
    return undefined;
  }

  if (nome === undefined || idade === undefined) {
    return undefined;
  }

  return "Oi, meu nome \xE9 ".concat(nome, "!\nTenho ").concat(idade, " anos,\ntrabalho na Trybe e mando muito em programa\xE7\xE3o!\n#VQV!");
};

module.exports = vqv;