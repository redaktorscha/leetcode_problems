/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const result = {};

  for (const word of strs) {
    const sortedWord = word
      .split('')
      .sort((a, b) => (a > b ? 1 : -1))
      .join('');
    result[sortedWord] = result[sortedWord] || [];

    result[sortedWord].push(word);
  }

  return Object.values(result);
};
