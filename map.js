function double(currentValue) {
  return currentValue * 2;
}

function map(array, callbackFunction) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callbackFunction(array[i]));
  }
  return output;
}

let array = [40, 20, 2, 5];
console.log(map(array, double));
