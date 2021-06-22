const average = (array) => {
  let output = 0;
  if (array.length === 0) {
    return undefined;
  }
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] === 'string') {
      return undefined;
    }
    output += array[i];
  }
  return Math.round(output / array.length);
};