/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const result = [];

  const iter = (head, tail) => {
    if (tail.length === 0) {
      result.push(head);
      return;
    }

    for (let i = 0; i < tail.length; i += 1) {
      iter([...head, tail[i]], tail.slice(0, i).concat(tail.slice(i + 1)));
    }
  };

  iter([], nums);

  return result;
};
