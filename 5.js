/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  const modifyStr = (str) => `#${str.split('').join('#')}#`;

  const modifiedStr = modifyStr(s);

  const strLen = modifiedStr.length;
  const pArr = [];

  let maxLen = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let centerIdx = 0;
  let rightIdx = 0;

  for (let i = 0; i < strLen; i += 1) {
    const mirrorIdx = 2 * centerIdx - i;

    if (i < rightIdx) {
      pArr[i] = Math.min(pArr[mirrorIdx], rightIdx - i);
    } else {
      pArr[i] = 0;
    }

    let a = i + (pArr[i] + 1);
    let b = i - (pArr[i] + 1);

    while (a < strLen && b >= 0 && modifiedStr[a] === modifiedStr[b]) {
      pArr[i] += 1;
      a += 1;
      b -= 1;
    }

    if (i + pArr[i] > rightIdx) {
      rightIdx = i + pArr[i];
      centerIdx = i;

      if (pArr[i] > maxLen) {
        maxLen = pArr[i];

        maxLeft = i - pArr[i];
        maxRight = i + pArr[i];
      }
    }
  }

  return modifiedStr.slice(maxLeft, maxRight).split('#').join('');
};
