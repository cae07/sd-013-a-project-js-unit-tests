/* eslint-disable max-len */

let addOrder = (produtos, consumo) => {
  consumo.push(produtos);
};

const createMenu = function (obj = { food: {}, drink: {} }) {
  let consumption = [];
  const menuEntries = Object.entries(obj);

  return {
    fetchMenu: () => obj,
    order: (produto) => {
      if ((Object.keys(menuEntries[1][1]).some((item) => item === produto))
      || (Object.keys(menuEntries[0][1]).some((item) => item === produto))) {
        addOrder(produto, consumption);
      } else {
        return 'Produto não está no cardápio';
      }
    },
    consumption,
    pay: () => {
      let sum = 0;
      consumption.forEach((item) => {
        if (obj.food[item]) {
          sum += obj.food[item];
        } else if (obj.drink[item]) {
          sum += obj.drink[item];
        }
      });
      return parseFloat(sum * 1.1).toFixed(2);
    },
  };
};

module.exports = createMenu;
