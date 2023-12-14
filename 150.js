/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  const calc = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
  };

  const stack = [];

  const operators = Object.keys(calc);

  for (const token of tokens) {
    if (operators.includes(token)) {
      const secondNum = stack.pop();
      const firstNum = stack.pop();
      const result = calc[token](firstNum, secondNum);
      stack.push(result);
    } else {
      stack.push(Number(token));
    }
  }

  return stack[0];
};
