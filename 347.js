/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequencies = [];

  const map = nums.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  for (const [key, value] of Object.entries(map)) {
    frequencies[value] = frequencies[value] || [];
    frequencies[value].push(key);
  }

  return frequencies.flat().reverse().slice(0, k).filter(Boolean).map(Number);
};
