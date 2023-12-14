/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  // const hasPrefix = (word, prefix) => word.startsWith(prefix);

  // let commonPrefix = '';

  // for (let i = 0; i < strs[0].length; i += 1) {
  //   for (const s of strs) {
  //     if (!hasPrefix(s, `${commonPrefix}${strs[0][i]}`)) {
  //       return commonPrefix;
  //     }
  //   }
  //   commonPrefix += strs[0][i];
  // }

  // return commonPrefix;

  let commonPrefix = '';

  for (let i = 0; i < strs[0].length; i += 1) {
    for (const s of strs) {
      if (i === s.length || s[i] !== strs[0][i]) {
        return commonPrefix;
      }
    }
    commonPrefix += strs[0][i];
  }

  return commonPrefix;
};
