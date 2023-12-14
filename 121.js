/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let buyDay = 0;
  let sellDay = 1;
  let maxProfit = 0;

  while (sellDay < prices.length) {
    if (prices[buyDay] < prices[sellDay]) {
      maxProfit = Math.max(maxProfit, prices[sellDay] - prices[buyDay]);
    } else {
      buyDay = sellDay;
    }
    sellDay += 1;
  }
  return maxProfit;
};
