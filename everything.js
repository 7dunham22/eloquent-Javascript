function every(array, func) {
  for (let element of array) {
    if (!func(element)) {
      return false;
    }
  }
  return true;
}

function everyWithSome(array, func) {
  if (array.some((x) => func(x) === false)) {
    return false;
  }
  return true;
}

console.log(every([1, 2, 3], (x) => x > 0));
console.log(every([1, 2, 3], (x) => x > 1));
console.log(everyWithSome([1, 2, 3], (x) => x > 0));
console.log(everyWithSome([1, 2, 3], (x) => x > 1));
