/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
  const jewelsSet = new Set(jewels.split(''));
  let count = 0;
  for (const stone of stones) {
    if (jewelsSet.has(stone)) {
      count += 1;
    }
  }

  return count;
};
