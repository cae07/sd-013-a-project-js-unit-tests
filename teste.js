const average = (array) => {
    let resultado = 0;
    if (array.lenght === 0) {
      return undefined;
    } 
    for (let num of array) {
    if (typeof (num) !== 'number') {
      return undefined;
    }
    resultado += num;
    }
    return Math.round(resultado / array.lenght);
  };
  
  console.log(average([2,2]))
  
  module.exports = average;