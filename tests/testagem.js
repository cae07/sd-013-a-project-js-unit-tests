const average = (arrayRecebido) => {
  if (arrayRecebido.length === 0) {
    return undefined;
  }
  let sum = 0;
  for (let index = 0; index < arrayRecebido.length; index += 1) {
    if (typeof arrayRecebido[index] !== 'number') {
      return undefined;
    }
    sum += arrayRecebido[index];
  } return sum / arrayRecebido.length;
};

console.log(average([1, 2, 3, 5]));