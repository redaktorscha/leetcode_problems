/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const resSum = [];
  let carry = 0;

  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 && j >= 0) {
    const curSum = Number(num1[i]) + Number(num2[j]) + carry;
    carry = 0;
    if (curSum < 10) {
      resSum.push(curSum);
    } else {
      resSum.push(curSum - 10);
      carry = 1;
    }

    i -= 1;
    j -= 1;
  }

  while (i >= 0) {
    const curSum = Number(num1[i]) + carry;
    carry = 0;

    if (curSum < 10) {
      resSum.push(curSum);
    } else {
      resSum.push(curSum - 10);
      carry = 1;
    }
    i -= 1;
  }

  while (j >= 0) {
    const curSum = Number(num2[j]) + carry;
    carry = 0;

    if (curSum < 10) {
      resSum.push(curSum);
    } else {
      resSum.push(curSum - 10);
      carry = 1;
    }
    j -= 1;
  }

  if (carry) {
    resSum.push(carry);
  }

  return resSum.reverse().join('');
};
