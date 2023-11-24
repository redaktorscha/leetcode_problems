/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const stack = [];

  const result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i += 1) {
    if (
      stack.length === 0 ||
      temperatures[stack[stack.length - 1]] > temperatures[i]
    ) {
      stack.push(i);
    } else {
      while (
        stack.length > 0 &&
        temperatures[i] > temperatures[stack[stack.length - 1]]
      ) {
        const curIndex = stack.pop();
        result[curIndex] = i - curIndex;
      }
      stack.push(i);
    }
  }
  return result;
};
