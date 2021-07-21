const assert = require('assert');
const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('9 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {

    let object = {food: {coxinha: 4, joelho:4}, drink: {guaravita:2, água: 2} };
    const newMenu = createMenu(object);
   
    // ------------TESTE 1 -----------------//  
    assert.deepStrictEqual(typeof createMenu(), 'object');
    // ------------TESTE 2 -----------------//
    assert.deepStrictEqual(newMenu.fetchMenu(object), {food: {coxinha: 4, joelho:4}, drink: {guaravita:2, água: 2}});
    // ------------TESTE 3 -----------------//
    assert.deepStrictEqual(newMenu.fetchMenu(), object);
    // ------------TESTE 5 -----------------//
    assert.deepStrictEqual(newMenu.consumption, []);
    // ------------TESTE 7 -----------------//
    newMenu.order('coxinha');
    assert.deepStrictEqual(newMenu.consumption, ['coxinha']);
    // ------------TESTE 9 -----------------//
    newMenu.order('guaravita');
    newMenu.order('joelho');
    newMenu.order('água');
    assert.deepStrictEqual(newMenu.consumption, ['coxinha', 'guaravita', 'joelho', 'água']);
    // ------------TESTE 10 -----------------//
    newMenu.order('coxinha');
    assert.deepStrictEqual(newMenu.consumption, ['coxinha', 'guaravita', 'joelho', 'água', 'coxinha']);
    // ------------TESTE 11 -----------------//
    assert.deepStrictEqual(newMenu.pay(), 17.6);
  });
});
