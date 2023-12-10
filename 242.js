/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const toCharCountMap = (string) =>
    string.split('').reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});

  const mapS = toCharCountMap(s);
  const mapT = toCharCountMap(t);

  for (const char in mapS) {
    if (!(char in mapT) || mapS[char] !== mapT[char]) {
      return false;
    }
  }

  return true;
};
