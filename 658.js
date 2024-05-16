/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = (arr, k, x) => {
  // v1
  // let left = 0;
  // let right = arr.length - 1;

  // while (right - left >= k) {
  //   if (Math.abs(x - arr[left]) <= Math.abs(x - arr[right])) {
  //     right -= 1;
  //   } else {
  //     left += 1;
  //   }
  // }

  // return arr.slice(left, right + 1);

  let left = 0;
  let right = arr.length - k;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (x - arr[mid] <= arr[mid + k] - x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return arr.slice(left, left + k);
};

console.log(findClosestElements([1], 1, 1));
