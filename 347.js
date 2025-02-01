/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const map = {};
  const frequencies = [];
  const result = [];

  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  for (const k in map) {
    frequencies[map[k]] = frequencies[map[k]] || [];
    frequencies[map[k]].push(k);
  }

  for (let i = frequencies.length - 1; i > 0; i -= 1) {
    if (frequencies[i]) {
      for (const n of frequencies[i]) {
        result.push(n);
        if (result.length === k) {
          return result;
        }
      }
    }
  }
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3, 5, 5, 5, 5, 5, 5, 5], 2));
