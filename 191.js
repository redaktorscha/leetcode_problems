/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  const stack = [];
  let num = n;
  while (num !== 0) {
    const next = num % 2;
    stack.push(next);
    if (next === 1) {
      num -= 1;
    }
    num /= 2;
  }

  return stack.filter((n) => n === 1).length;
};
