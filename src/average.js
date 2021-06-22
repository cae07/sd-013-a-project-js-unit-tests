const average = (array) => {
  let sum = 0;
  let { length } = array;
  if (length === 0) { return undefined; }
  for (let number = 0; number < length; number += 1) {
    if (typeof array[number] !== 'number') { return undefined; }
    sum += array[number];
  }
  return Math.round(sum / length);
};

module.exports = average;
