const sum = (a, b) => a + b

const multiply = (a, b) => a * b

const divide = (a, b) => a / b

const subtract = (a, b) => a - b

const pow = (a, b) => a ** b

const root = (a, b) => a ** (1 / b)

const log = (a, b) => Math.log(a) / Math.log(b)

const ln = (a) => Math.log(a)

const sqrt = (a) => Math.sqrt(a)

const abs = (a) => Math.abs(a)

module.exports = {
  sum,
  multiply,
  divide,
  subtract,
  pow,
  root,
  log,
  ln,
  sqrt,
  abs,
}
