/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
  let min = 1;
  let max = 1000000000;

  const isValid = (arr, v, t) => {
    //const time = arr.reduce((acc, cur) => acc + Math.ceil(cur / v), 0);
    let time = 0;
    for (const pile of piles) {
      time += Math.ceil(pile / v);
    }
    return time <= t;
  };

  while (min < max) {
    const mid = Math.floor((min + max) / 2);

    if (!isValid(piles, mid, h)) {
      min = mid + 1;
    } else {
      max = mid;
    }
  }

  return min;
};
