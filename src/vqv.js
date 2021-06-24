/* eslint-disable no-unused-vars */

const vqv = (nome, idade) => {
  if (!nome || !idade) return undefined;

  console.log(`Oi, meu nome é ${nome}!\n Tenho ${idade} anos,
  Trabalho na Trybe e mando muito em programação!\n #VQV`);
};

module.exports = vqv;
