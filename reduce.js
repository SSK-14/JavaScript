function sum(accumulator, current) {
  return accumulator + current;
}

function reduce(array, callbackFunction, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callbackFunction(accumulator, array[i]);
  }
  return accumulator;
}

const array = [-10, 5, 30, -8];
console.log(reduce(array, sum, 0));
