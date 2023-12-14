/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const results = [];
  const iter = (openCounter, closeCounter, acc) => {
    if (openCounter === n && closeCounter === n) {
      results.push(acc);
      return;
    }

    if (openCounter < n) {
      iter(openCounter + 1, closeCounter, `${acc}(`);
    }

    if (closeCounter < openCounter) {
      iter(openCounter, closeCounter + 1, `${acc})`);
    }
  };

  iter(0, 0, '');

  return results;
};
