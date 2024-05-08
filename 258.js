/**
 * @param {number} num
 * @return {number}
 */
const addDigits = (num) => {
  // const iter = (n) => {
  //   if (n < 10) {
  //     return n;
  //   }
  //   let sum = 0;
  //   while (n !== 0) {
  //     const cur = n % 10;
  //     sum += cur;
  //     n -= cur;
  //     n /= 10;
  //   }
  //   return iter(sum);
  // };
  // return iter(num);

  if (num === 0) {
    return 0;
  }

  if (num % 9 === 0) {
    return 9;
  }

  return num % 9;
};

console.log(addDigits(38));
