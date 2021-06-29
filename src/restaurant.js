/* eslint-disable max-len */

const purchaseSum = (list, objeto) => {
  let total = 0;
  list.forEach((purchase) => {
    (objeto[purchase]) ? total += objeto[purchase] : ''
  });
  return total;
};

function order(request) {
  return this.consumption.push(request);
}

const restaurant = function () {
  return {
    consumption: [],
    order,
  };
};

function createMenu(objeto) {
  const obj = {
    fetchMenu: () => objeto,
  };

  Object.assign(obj, restaurant());

  obj.pay = function () {
    const food = purchaseSum(this.consumption, objeto.food);
    const drinks = purchaseSum(this.consumption, objeto.drinks);

    let total = food + drinks;
    total += (total * 0.10);

    return total;
  };

  return obj;
}

module.exports = createMenu;
