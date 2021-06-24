/* eslint-disable no-unused-vars */

const vqv = (nome, idade) => {
  if (!nome || !idade) return undefined;

  return `Oi, meu nome é ${nome}!\nTenho ${idade} anos,\ntrabalho na Trybe e mando muito em programação!\n#VQV!`;
};

module.exports = vqv;
