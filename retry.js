class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  for (;;) {
    if (Math.random() < 0.2) {
      return a * b;
    } else {
      throw new MultiplicatorUnitFailure("Try Again");
    }
  }
}

console.log(primitiveMultiply(3, 4));
