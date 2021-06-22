const average = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    if (typeof element === 'string') {
      return undefined;
    }
  }
  if (array.length === 0) {
    return undefined;
  }
  let sum = 0;
  let result = 0;
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    sum += element;
  }
  result = Math.round((sum / array.length));
  return result;
};

module.exports = average;
