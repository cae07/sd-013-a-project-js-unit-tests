/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna um objeto.
    assert.strictEqual(typeof circle(1), 'object');
    // Teste se o objeto retornado tem 3 entradas.
    // Método object.keys retorna um array cujo os elementos são strings correspondentes a propriedade enumerável encontrada diretamente sobre o objeto (...). FONTE: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    assert.strictEqual(Object.keys(circle(2)).length, 3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    assert.strictEqual(circle(), undefined);
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    // O método parseFloat analisa um argumento string, e retorna um numero de ponto flutuante. Se ele encontrar um carácter diferente de um sinal (+ ou -), numeral (0-9), um ponto decimal, ou um expoente, ele retorna o valor até esse ponto e ignora esse caractere e todos os caracteres seguintes. Espaços a direita e a esquerda são permitidos. FONTE: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
    assert.strictEqual(parseFloat(circle(2).circumference), 12.56);
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    // O método toPrecision retorna uma string que representa o valor do objeto Number com uma precisão específica. O retorno será uma string representando um objeto Number em notação de ponto fixo ou exponencial arredondada segundo o parâmetro precisão. Se o parâmetro precisão for omitido, este método terá o mesmo comportamento de Number.prototype.toString(). Se o parâmetro precisão for um valor não inteiro, ele será arredondado para a sua representação mais próxima em inteiro. FONTE: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
    assert.strictEqual(parseFloat(circle(3).area.toPrecision(4)), 28.26);
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    // Declara-se uma constante test, responsável por armazenar o valor do raio do círculo; bem como declara-se a constante expected, que faz referência aos dados que são esperados quando se retorna uma função que são passados os dados de um círculo com raio 3.
    const test = circle(3);
    const expected = {
      radius: 3,
      area: 28.259999999999998,
      circumference: 18.84
    }
    // Utiliza-se o método deepStrictEqual para que o assert possa fazer uma varredura mais profunda no array e retorne se os objetos e seus filhos são iguais. FONTE: https://www.w3schools.com/nodejs/met_assert_deepstrictequal.asp
    assert.deepStrictEqual(test, expected);
  });
});
