function double(current) {
  console.log(2 * current);
}

function forEach(array, callbackFunction) {
  for (let i = 0; i < array.length; i++) {
    callbackFunction(array[i]);
  }
  return undefined;
}

console.log(forEach([40, 20, 2, 5], double));
