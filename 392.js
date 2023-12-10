/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sequenceCounter = 0;

  let i = 0;
  let j = 0;

  for (let i = 0; i < t.length; i += 1) {
    if (t[i] === s[j]) {
      j += 1;
      sequenceCounter += 1;
    }
  }

  if (sequenceCounter === s.length) {
    return true;
  }

  return false;
};
