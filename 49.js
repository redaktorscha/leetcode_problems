/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  // const result = {};

  // for (const word of strs) {
  //   const sortedWord = word
  //     .split('')
  //     .sort((a, b) => (a > b ? 1 : -1))
  //     .join('');
  //   result[sortedWord] = result[sortedWord] || [];

  //   result[sortedWord].push(word);
  // }

  // return Object.values(result);

  const map = {};

  for (const word of strs) {
    const count = [];
    for (const char of word) {
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      count[index] = (count[index] || 0) + 1;
    }
    const key = count.join('#');
    if (!Object.hasOwn(map, key)) {
      map[key] = [];
    }
    map[key].push(word);
  }

  return Object.values(map);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
