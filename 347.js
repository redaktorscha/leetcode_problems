/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const map = {};
  const frequencies = [];
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  for (const k in map) {
    frequencies[map[k]] = frequencies[map[k]] || [];
    frequencies[map[k]].push(k);
  }
  return frequencies.filter(Boolean).flat().slice(-k);
};
