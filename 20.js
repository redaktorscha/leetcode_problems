/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (str) => {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];

  for (const char of str) {
    if (char in pairs) {
      stack.push(char);
    } else {
      const lastBracket = stack.pop();
      if (!lastBracket || pairs[lastBracket] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
