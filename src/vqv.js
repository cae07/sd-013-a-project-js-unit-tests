/* eslint-disable no-unused-vars */

const vqv = (nome, idade) => {
  if (!nome || !idade) {
    return undefined;
  }
  return `Oi, meu nome é ${nome}!\n`
  + `Tenho ${idade} anos,\n`
  + 'trabalho na Trybe e mando muito em programação!\n#VQV!';
};

module.exports = vqv;
