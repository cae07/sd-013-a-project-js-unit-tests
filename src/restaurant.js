/* eslint-disable max-len */

function createOrder(string) {
  return this.consumption.push(string);
}

function payCalc() {
  let bill = 0;
  let cardapio = this.fetchMenu();
  let consumed = this.consumption;
  let { food } = cardapio;
  let { drink } = cardapio;

  for (let index = 0; index < consumed.length; index += 1) {
    if (Object.keys(cardapio.food).includes(consumed[index])) {
      bill += food[consumed[index]];
    } else if (Object.keys(cardapio.drink).includes(consumed[index])) {
      bill += drink[consumed[index]];
    }
  }
  return bill * 1.1;
}

const createMenu = (object) => {
  let restaurant = { 
    fetchMenu: () => object,
    consumption: [],
    order: createOrder,
    pay: payCalc,
  };
  return restaurant;
};

let newMenu = createMenu({
  food: {
    coxinha: 30,
    paçoca: 40,
    jaca: 33,
    frango: 20,
  },
  drink: {
    guaraná: 5,
    coca: 6,
    agua: 2,
    suco: 9,
  }, 
});

newMenu.order('coxinha');
newMenu.order('coca');

console.log(newMenu.pay());

module.exports = createMenu;
