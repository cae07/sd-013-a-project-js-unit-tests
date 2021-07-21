const assert = require('assert');
const { TestScheduler } = require('jest');
const createMenu = require('../src/restaurant');

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  test('Verifica se a função `createMenu` tem o comportamento esperado', () => {

    let object = { food: { coxinha: 10, sopa: 7, sashimi: 7 }, drink: { agua: 2 } };
    const newMenu = createMenu(object);

    /* Teste 1 */
    assert.deepStrictEqual(typeof createMenu(), "object");

    /* Teste 2 */
    assert.deepStrictEqual(newMenu.fetchMenu(), { food: { coxinha: 10, sopa: 7, sashimi: 7 }, drink: { agua: 2 } });

    /* Teste 3 */
    assert.deepStrictEqual(newMenu.fetchMenu(), object);

    /* Teste 4 */
    assert.deepStrictEqual(newMenu.consumption, []);

    /* Teste 5 */
    newMenu.order("coxinha");
    assert.deepStrictEqual(newMenu.consumption, ['coxinha']);

    /* Teste 6 */
    newMenu.order("agua");
    newMenu.order("sopa");
    newMenu.order("sashimi");
    assert.deepStrictEqual(newMenu.consumption, ["coxinha", "agua", "sopa", "sashimi"]);

    /* Teste 7 */
    newMenu.order("coxinha");
    assert.deepStrictEqual(newMenu.consumption, ["coxinha", "agua", "sopa", "sashimi", "coxinha"]);

    /* Teste 8 */
    assert.strictEqual(newMenu.pay(), 39.6);

  });
});
