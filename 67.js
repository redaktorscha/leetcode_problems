/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
  const res = [];
  let len = a.length >= b.length ? a.length : b.length;

  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (len) {
    const first = i >= 0 ? Number(a[i]) : 0;
    const second = j >= 0 ? Number(b[j]) : 0;
    let curSum = first + second;

    if (carry) {
      curSum += carry;
      carry = 0;
    }

    if (curSum === 3) {
      carry = 1;
      curSum = 1;
    } else if (curSum === 2) {
      carry = 1;
      curSum = 0;
    }

    i -= 1;
    j -= 1;
    len -= 1;
    res.push(curSum);
  }
  if (carry) {
    res.push(carry);
  }

  return res.reverse().join('');
};
