function loop(val, testFunc, updateFunc, bodyFunc) {
  while (true) {
    if (!testFunc(val)) {
      break;
    }
    bodyFunc(val);
    val = updateFunc(val);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
