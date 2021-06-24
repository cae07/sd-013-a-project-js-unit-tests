/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');




// Parâmetros:
//   - Um número inteiro. Exemplos: 1; 3;
// Comportamento:
//   - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
//   - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
//   - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}



describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    assert.strictEqual(typeof circle(2), 'object');
    // Teste se circle retorna um objeto.
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    const entradas = Object.entries(circle(2)).length;
    assert.strictEqual(entradas, 3);
    // Teste se o objeto retornado tem 3 entradas.
    assert.strictEqual(circle(), undefined);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    assert.strictEqual(circle(2).circumference, 12.56);
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    assert.strictEqual(parseFloat(circle(3).area.toPrecision(4)), 28.26);
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    const test = circle(3);
    const expected = {
      radius: 3,
      area: 28.259999999999998,
      circumference: 18.84
    }
    assert.deepStrictEqual(test, expected);
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
  });
});
