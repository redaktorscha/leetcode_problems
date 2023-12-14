/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  const arr = path.trim().split('/');

  const stack = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== '' && arr[i] !== '.') {
      if (arr[i] === '..') {
        stack.pop();
      } else {
        stack.push(arr[i]);
      }
    }
  }

  return `/${stack.join('/')}`;
};
