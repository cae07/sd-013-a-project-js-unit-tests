const average = (numbers) => {
  const array = numbers;
  let total = 0;

  if (array.length === 0) {
    return undefined;
  }

  for (let index = 0; index < array.length; index += 0) {
    if (typeof (array[index]) !== 'number') {
      return undefined;
    }
    total += parseInt(array[index], 10);
  }
    return total / array.length;
 };

 console.log(average([1, 2]));

module.exports = average;
