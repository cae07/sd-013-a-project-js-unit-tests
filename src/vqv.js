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
  const strTypeNome = typeof nome;
  const strTypeOfIdade = typeof idade;
    if (strTypeNome === 'string' && strTypeOfIdade === 'number') {
      const line1 = `Oi, meu nome é ${nome}!\n`;
      const line2 = `Tenho ${idade} anos,\n`;
      const line3 = 'trabalho na Trybe e mando muito em programação!\n';
      const line4 = '#VQV!';
      const strOutput = line1.concat(line2, line3, line4);
      return strOutput;
}
};

module.exports = vqv;
