// This scenario is when you have an `upper limit` and the
// the `accumulator` + `current` must not exceed to the `upper limit` but
// still calculate the difference between the `upper limit` and the `accumulator` + `current`

function calculate(current, accumulator, upperLimit) {
  if (accumulator >= upperLimit) {
    return 0;
  }

  if (accumulator + current > upperLimit) {
    return upperLimit - accumulator;
  }

  return current;
}

console.log(calculate(40, 150, 200)); // 40
console.log(calculate(30, 190, 200)); // 10
console.log(calculate(30, 200, 200)); // 0
console.log(calculate(10, 200, 190)); // 0
