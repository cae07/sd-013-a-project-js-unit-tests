const average = (numbers) => {
  if (numbers.length === 0) return undefined;
  let soma = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (typeof (numbers[i]) !== 'number') return undefined;
    soma += numbers[i];
  }
  return Math.round(soma / numbers.length);
};

module.exports = average;