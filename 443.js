/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = (chars) => {
  let s = '';
  let curChar = chars[0];
  let q = 1;

  for (let i = 1; i <= chars.length; i += 1) {
    if (chars[i] === curChar) {
      q += 1;
    } else {
      s += `${curChar}${q > 1 ? q : ''}`;
      curChar = chars[i];
      q = 1;
    }
  }

  let targetIdx = -1;

  for (let i = 0; i < chars.length; i += 1) {
    console.log('s[i]', s[i]);
    if (s[i]) {
      chars[i] = s[i];
    } else {
      targetIdx = i;
      break;
    }
  }

  if (targetIdx !== -1) {
    chars = chars.slice(0, targetIdx);
  }

  return chars.length;
};
