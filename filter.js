function isPositiveNumber(current) {
  return current > 0;
}

function filter(array, callbackFunction) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (callbackFunction(array[i])) output.push(array[i]);
  }
  return output;
}

const array = [-10, 5, 30, -8];
console.log(filter(array, isPositiveNumber));
