/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  const leftBinSearch = (arr, n) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      const midIdx = Math.floor((left + right) / 2);

      if (arr[midIdx] < n) {
        left = midIdx + 1;
      } else {
        right = midIdx;
      }
    }

    if (arr[left] === n) return left;
    return -1;
  };

  const rightBinSearch = (arr, n) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      const midIdx = Math.floor((left + right + 1) / 2);

      if (arr[midIdx] > n) {
        right = midIdx - 1;
      } else {
        left = midIdx;
      }
    }

    if (arr[left] === n) return left;
    return -1;
  };

  const first = leftBinSearch(nums, target);
  const last = rightBinSearch(nums, target);

  return [first, last];
};
