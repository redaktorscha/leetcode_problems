/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = (dictionary, sentence) => {
  const arr = sentence.split(' ');
  return arr
    .map((word) => {
      let curRoot = null;
      for (const root of dictionary) {
        if (word.startsWith(root)) {
          if (curRoot === null || root.length < curRoot.length) {
            curRoot = root;
          }
        }
      }

      return curRoot !== null ? curRoot : word;
    })
    .join(' ');
};
