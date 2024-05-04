/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = (word1, word2) => {
  if (word1.length === 0 && word2.length === 0) {
    return 0;
  }

  if (word1.length === 0) {
    return word2.length;
  }

  if (word2.length === 0) {
    return word1.length;
  }

  const dp = [];

  for (let i = 0; i <= word1.length; i += 1) {
    if (i === 0) {
      dp[i] = new Array(word2.length + 1).fill(null).map((el, i) => i);
    } else {
      dp[i] = [];

      for (let j = 0; j <= word2.length; j += 1) {
        dp[i][j] = j === 0 ? i : null;
      }
    }
  }

  for (let i = 1; i <= word1.length; i += 1) {
    for (let j = 1; j <= word2.length; j += 1) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        const add = dp[i - 1][j];
        const remove = dp[i][j - 1];
        const replace = dp[i - 1][j - 1];
        dp[i][j] = 1 + Math.min(add, remove, replace);
      }
    }
  }

  // console.log(dp);
  return dp[word1.length][word2.length];
};
