/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = (s1, s2) => {
  // if (s1.length > s2.length) {
  //   return false;
  // }

  // const maxMatches = 26;
  // let matches = 0;

  // const alphaArr = new Array(26)
  //   .fill()
  //   .map((el, i) => String.fromCharCode('a'.charCodeAt(0) + i));
  // const map1 = alphaArr.reduce((acc, cur) => {
  //   acc[cur] = 0;
  //   return acc;
  // }, {});

  // const map2 = alphaArr.reduce((acc, cur) => {
  //   acc[cur] = 0;
  //   return acc;
  // }, {});

  // for (let i = 0; i < s1.length; i += 1) {
  //   map1[s1[i]] += 1;
  //   map2[s2[i]] += 1;
  // }

  // for (const key in map1) {
  //   if (map1[key] === map2[key]) {
  //     matches += 1;
  //   }
  // }

  // let left = 0;
  // let right = s1.length;

  // while (right < s2.length) {
  //   if (matches === maxMatches) {
  //     return true;
  //   }

  //   map2[s2[right]] += 1;
  //   if (map1[s2[right]] === map2[s2[right]]) {
  //     matches += 1;
  //   } else {
  //     if (map1[s2[right]] === map2[s2[right]] - 1) {
  //       matches -= 1;
  //     }
  //   }

  //   right += 1;

  //   map2[s2[left]] -= 1;
  //   if (map1[s2[left]] === map2[s2[left]]) {
  //     matches += 1;
  //   } else {
  //     if (map1[s2[left]] === map2[s2[left]] + 1) {
  //       matches -= 1;
  //     }
  //   }
  //   left += 1;
  // }

  // return matches === maxMatches;

  // v2

  // if (s1.length > s2.length) {
  //   return false;
  // }
  // const arr1 = new Array(26).fill(0);
  // const arr2 = new Array(26).fill(0);

  // for (const char of s1) {
  //   const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
  //   arr1[index] = (arr1[index] || 0) + 1;
  // }

  // let left = 0;

  // for (let right = 0; right < s2.length; right += 1) {
  //   if (right - left < s1.length) {
  //     const rightIndex = s2[right].charCodeAt(0) - 'a'.charCodeAt(0);
  //     arr2[rightIndex] = (arr2[rightIndex] || 0) + 1;
  //     let matches = 0;
  //     for (let j = 0; j < arr1.length; j += 1) {
  //       if (arr1[j] === arr2[j]) {
  //         matches += 1;
  //       }
  //     }
  //     if (matches === arr1.length) {
  //       return true;
  //     }
  //   } else {
  //     const rightIndex = s2[right].charCodeAt(0) - 'a'.charCodeAt(0);
  //     arr2[rightIndex] += 1;

  //     const leftIndex = s2[left].charCodeAt(0) - 'a'.charCodeAt(0);
  //     arr2[leftIndex] -= 1;

  //     left += 1;
  //     let matches = 0;
  //     for (let j = 0; j < arr1.length; j += 1) {
  //       if (arr1[j] === arr2[j]) {
  //         matches += 1;
  //       }
  //     }

  //     if (matches === arr1.length) {
  //       return true;
  //     }
  //   }
  // }
  // return false;

  // v3
  if (s1.length > s2.length) {
    return false;
  }

  const arr1 = new Array(26).fill(0);
  const arr2 = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i += 1) {
    const index1 = s1[i].charCodeAt(0) - 'a'.charCodeAt(0);
    arr1[index1] += 1;
    const index2 = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
    arr2[index2] += 1;
  }

  let matches = 0;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] === arr2[i]) {
      matches += 1;
    }
  }

  let left = 0;
  for (let right = s1.length; right < s2.length; right += 1) {
    if (matches === 26) {
      return true;
    }

    const indexRight = s2[right].charCodeAt(0) - 'a'.charCodeAt(0);
    arr2[indexRight] += 1;
    if (arr2[indexRight] === arr1[indexRight]) {
      matches += 1;
    } else if (arr2[indexRight] === arr1[indexRight] + 1) {
      matches -= 1;
    }

    const indexLeft = s2[left].charCodeAt(0) - 'a'.charCodeAt(0);
    arr2[indexLeft] -= 1;
    if (arr2[indexLeft] === arr1[indexLeft]) {
      matches += 1;
    } else if (arr2[indexLeft] === arr1[indexRight] - 1) {
      matches -= 1;
    }

    left += 1;
  }
  return matches === 26;
};

checkInclusion('adc', 'dcda');
