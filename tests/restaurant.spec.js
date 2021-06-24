const assert = require('assert');
const createMenu = require('../src/restaurant');

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {

    let objetoQualquer = { food: { coxinha: 10, sopa: 7, sashimi: 7 }, drink: { agua: 2 } };
    const objetoRetornado = createMenu(objetoQualquer);

    /* Teste 1 */
    assert.deepStrictEqual(typeof createMenu(), "object");

    /* Teste 2 */
    assert.deepStrictEqual(objetoRetornado.fetchMenu(objetoQualquer), { food: { coxinha: 10, sopa: 7, sashimi: 7 }, drink: { agua: 2 } });

    /* Teste 3 */
    assert.deepStrictEqual(createMenu(objetoQualquer).fetchMenu(), objetoQualquer);

    /* Teste 4 */
    assert.deepStrictEqual(objetoRetornado.consumption, []);

    /* Teste 5 */
    objetoRetornado.order("coxinha");
    assert.deepStrictEqual(objetoRetornado.consumption, Object.values(objetoRetornado.consumption));

    /* Teste 6 */
    objetoRetornado.order("agua");
    objetoRetornado.order("sopa");
    objetoRetornado.order("sashimi");
    assert.deepStrictEqual(objetoRetornado.consumption, ["coxinha", "agua", "sopa", "sashimi"]);

    /* Teste 7 */
    objetoRetornado.order("coxinha");
    assert.deepStrictEqual(objetoRetornado.consumption, ["coxinha", "agua", "sopa", "sashimi", "coxinha"]);

    /* Teste 8 */
    assert.strictEqual(objetoRetornado.pay(), 39.6);

  });
});
