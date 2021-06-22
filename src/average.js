
const average = (array) => {

  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    if (typeof element === "string") {
      return undefined;
    }
  }
  if (array.length === 0) {
    return undefined;
  } else {
    let sum = 0;
    let average = 0;
    for (let i = 0; i < array.length; i += 1) {
      const element = array[i];
      sum += element;
    }
    average = Math.round((sum / array.length));
    return average;
  };
}

console.log(average([]));

module.exports = average;