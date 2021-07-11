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
  
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui, 
    // mas não é necessariamente é limitado à chave `fetchMenu`, a qual tem como valor uma função.
    // ```
    // const objetoRetornado = createMenu(); // Retorno: { fetchMenu: () => {}, ... }
    assert.strictEqual(typeof createMenu(),'object')// se eu chamar só createmenu no typeof vai vir como funcao, se eu chamar com o (), ele percebe que retorna um objeto 
    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, 
    // verifique que 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`.
    assert.deepStrictEqual(createMenu({ food: {}, drink: {} }).fetchMenu(), { food: {}, drink: {} })// como o create menu foi chamado com o parametro food, drink tenho de colocar eles no testes,daí chamo o fetch menu por dote notation, o resultdo é o proprio menu que no caso é food e drink
    //const objetoRetornado = createMenu({ food: {}, drink: {} });
    // objetoRetornado.fetchMenu() // Retorno: { food: {}, drink: {}}
    // ```
    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
     const objetoRetornado = { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }
     assert.deepStrictEqual(createMenu(objetoRetornado).fetchMenu(), objetoRetornado)// passei o menu, daí chamei até o fetch menu para ver que o menu é igual
    // objetoRetornado.fetchMenu() // Retorno: objetoQualquer
    // ```
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
     const objetoRetornado2 = createMenu({ food: {}, drink: {} });
    assert.deepStrictEqual(objetoRetornado2.consumption,[]);// estou chamando a chave comsumption na linha 90, que o resultado é a variavel consumo que começa vazia, na linha 87
     // objetoRetornado.consumption // Retorno: []
    // ```
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, 
    // como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    const objetoRetornado3 = createMenu({ food: {coxinha: 4.00}});
    objetoRetornado3.order("coxinha");// estou acessando a chave order e pondo a coxinha nela.
    assert.deepStrictEqual(objetoRetornado3.consumption,['coxinha']);// a order tem uma funcao que recebe o item e o consumo, sobe para a linha 83 para realizar a funcao- nessa funcao o array recebe o parametro do consumo que está vazio e add nesse array vazio a coxinha que é o item. Com isso a linha 87 passa a ter coxinha dentro
    // objetoRetornado.consumption // Retorno: ["coxinha"]
    // ```
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    const objetoRetornado4 = createMenu({food: 
      {coxinha: 4.00, agua: 4.50, sopa: 15.00, sashimi : 45.00}});
    objetoRetornado4.order("coxinha");
    objetoRetornado4.order("agua");
    objetoRetornado4.order("sopa");
    objetoRetornado4.order("sashimi");
    assert.deepStrictEqual(objetoRetornado4.consumption,["coxinha", "agua", "sopa", "sashimi"]);
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    
    // Agora faça o TESTE 7 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']
    const objetoRetornado5 = createMenu({food: 
      {coxinha: 4.00, agua: 4.50, sopa: 15.00, sashimi : 45.00}});
    objetoRetornado5.order("coxinha");
    objetoRetornado5.order("agua");
    objetoRetornado5.order("coxinha");
    assert.deepStrictEqual(objetoRetornado5.consumption,['coxinha', 'agua', 'coxinha']);
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    const objetoRetornado6 = createMenu({food: 
      {coxinha: 4.00, agua: 4.50, sopa: 15.00, sashimi : 45.00}});
    objetoRetornado6.order('coxinha');
    objetoRetornado6.order('agua');
    objetoRetornado6.order('coxinha');
    assert.strictEqual(objetoRetornado6.pay(), parseFloat(13.75).toFixed(2));// Parsefloat retorna o numero com as casas decimais , to fixed 2, deixa só 2 numeros depois da virgula .aqui daria 12,50, mas como tem 10% tem de retornar 13,75
    // https://pt.stackoverflow.com/questions/10002/como-a-fun%C3%A7%C3%A3o-parsefloat-funciona/10004
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_tofixed
    //  objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
    // ```
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
